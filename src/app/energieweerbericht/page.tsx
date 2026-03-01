'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wind,
  Sun,
  Cloud,
  CloudSun,
  RefreshCw,
  ArrowRight,
  Battery,
  Zap,
  TrendingUp,
  Info,
} from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

interface NedUtilization {
  id: number
  validfrom: string
  validto: string
  capacity: number
  volume: number
  percentage: number
  type: string
}

interface NedResponse {
  'hydra:member': NedUtilization[]
}

interface DayData {
  date: Date
  dayLabel: string
  dayShort: string
  windCapacityKw: number
  solarCapacityKw: number
  isToday: boolean
}

const DAY_SHORTS = ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA']
const DAY_LONGS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']

function formatGW(kw: number): string {
  const gw = kw / 1_000_000
  if (gw >= 1) return `${gw.toFixed(1)} GW`
  const mw = kw / 1_000
  return `${Math.round(mw)} MW`
}

function getWindForce(capacityKw: number): number {
  const gw = capacityKw / 1_000_000
  if (gw < 1) return 1
  if (gw < 2.5) return 2
  if (gw < 5) return 3
  if (gw < 8) return 4
  return 5
}

function getWindLabel(force: number): string {
  const labels = ['', 'Stil', 'Licht', 'Matig', 'Krachtig', 'Storm']
  return labels[force] ?? 'Matig'
}

function WeatherIcon({ windGw, solarGw, size = 20 }: { windGw: number; solarGw: number; size?: number }) {
  const props = { style: { width: size, height: size }, className: 'shrink-0' }
  if (windGw > 4) return <Wind {...props} />
  if (solarGw > 3) return <Sun {...props} />
  if (solarGw > 1 && windGw > 1) return <CloudSun {...props} />
  return <Cloud {...props} />
}

function WindForceBadge({ force }: { force: number }) {
  const colors = ['', 'bg-blue-100 text-blue-700', 'bg-blue-200 text-blue-800', 'bg-blue-300 text-blue-900', 'bg-blue-500 text-white', 'bg-blue-700 text-white']
  return (
    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-black ${colors[force] ?? colors[2]}`}>
      {force}
    </span>
  )
}

const SKELETON_HEIGHTS = [
  [55, 40], [70, 60], [45, 75], [60, 50], [50, 65], [65, 45], [55, 70],
] as const

function LoadingSkeleton() {
  return (
    <div className="flex gap-2 sm:gap-2 md:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-7 sm:overflow-visible">
      {SKELETON_HEIGHTS.map(([wind, solar], i) => (
        <div key={i} className="flex flex-col items-center gap-2 bg-slate-100 rounded-3xl p-3 animate-pulse min-w-[72px] sm:min-w-0 shrink-0 sm:shrink" style={{ minHeight: 220 }}>
          <div className="h-3 w-6 bg-slate-200 rounded" />
          <div className="h-5 w-5 bg-slate-200 rounded-full" />
          <div className="flex-1 w-full flex gap-1 items-end justify-center">
            <div className="w-1/3 bg-blue-100 rounded-t" style={{ height: `${wind}%` }} />
            <div className="w-1/3 bg-yellow-100 rounded-t" style={{ height: `${solar}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function EnergieweerberichtPage() {
  const [days, setDays] = useState<DayData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchData = useCallback(async (manual = false) => {
    if (manual) setIsRefreshing(true)

    try {
      const apiKey = process.env.NEXT_PUBLIC_NED_API_KEY
      if (!apiKey) throw new Error('API-sleutel niet geconfigureerd')

      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const endDate = new Date(today)
      endDate.setDate(endDate.getDate() + 7)

      const fmt = (d: Date) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

      const fromStr = fmt(today)
      const tillStr = fmt(endDate)

      const nedUrl = (type: number) =>
        `https://api.ned.nl/v1/utilizations?point=0&type=${type}&granularity=6&granularitytimezone=1&classification=1&activity=1` +
        `&validfrom[after]=${fromStr}&validfrom[strictly_before]=${tillStr}`

      const headers = {
        'X-AUTH-TOKEN': apiKey,
        accept: 'application/ld+json',
      }

      const [windRes, solarRes] = await Promise.all([
        fetch(nedUrl(1), { headers }),
        fetch(nedUrl(2), { headers }),
      ])

      if (!windRes.ok || !solarRes.ok) throw new Error('Kon energiedata niet ophalen')

      const windData: NedResponse = await windRes.json()
      const solarData: NedResponse = await solarRes.json()

      const windByDate = new Map<string, number>()
      const solarByDate = new Map<string, number>()

      for (const item of windData['hydra:member'] ?? []) {
        const dateKey = item.validfrom.slice(0, 10)
        windByDate.set(dateKey, item.capacity)
      }
      for (const item of solarData['hydra:member'] ?? []) {
        const dateKey = item.validfrom.slice(0, 10)
        solarByDate.set(dateKey, item.capacity)
      }

      // NED.nl retourneert validfrom in UTC, maar met granularitytimezone=1 (CET)
      // is de dag-boundary op 23:00 UTC (= 00:00 CET). Matchen op de lokale dag.
      const result: DayData[] = []
      for (let i = 0; i < 7; i++) {
        const d = new Date(today)
        d.setDate(d.getDate() + i)

        // Probeer match op exacte datum, of op datum-1 (CET offset: 23:00 UTC = volgende dag CET)
        const key = fmt(d)
        const prevDay = new Date(d)
        prevDay.setDate(prevDay.getDate() - 1)
        const prevKey = fmt(prevDay)

        const windKw = windByDate.get(key) ?? windByDate.get(prevKey) ?? 0
        const solarKw = solarByDate.get(key) ?? solarByDate.get(prevKey) ?? 0

        result.push({
          date: d,
          dayLabel: i === 0 ? 'Vandaag' : i === 1 ? 'Morgen' : DAY_LONGS[d.getDay()],
          dayShort: i === 0 ? 'VAN' : DAY_SHORTS[d.getDay()],
          windCapacityKw: windKw,
          solarCapacityKw: solarKw,
          isToday: i === 0,
        })
      }

      setDays(result)
      setError(null)
      setLastUpdated(new Date())
    } catch {
      setError('Data kon niet worden geladen. Probeer het later opnieuw.')
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
    const interval = setInterval(() => fetchData(), 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [fetchData])

  const maxWindKw = days.length ? Math.max(...days.map((d) => d.windCapacityKw), 1) : 1
  const maxSolarKw = days.length ? Math.max(...days.map((d) => d.solarCapacityKw), 1) : 1
  const maxKw = Math.max(maxWindKw, maxSolarKw)

  const avgWindKw = days.length ? days.reduce((s, d) => s + d.windCapacityKw, 0) / days.length : 0
  const avgSolarKw = days.length ? days.reduce((s, d) => s + d.solarCapacityKw, 0) / days.length : 0

  const today = days[0]

  return (
    <div className="flex flex-col w-full">

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-4 md:pt-32 md:pb-6 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-blue-700 font-bold mb-4 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  <span className="uppercase tracking-widest text-[10px]">Energieweerbericht · NED.nl</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary leading-[1.1] tracking-tight">
                  Wind &amp; zon <span className="text-primary italic">deze week.</span>
                </h1>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 pb-1">
                {lastUpdated && (
                  <span>
                    {lastUpdated.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
                <button
                  onClick={() => fetchData(true)}
                  disabled={isRefreshing}
                  className="inline-flex items-center gap-1.5 font-bold text-slate-400 hover:text-primary transition-colors"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Ververs
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 7-daagse weerkaart ── */}
      <section className="pt-2 pb-6 md:pt-4 md:pb-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-slate-50 rounded-3xl p-5 md:p-8 border border-slate-100 shadow-sm">

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black text-secondary">7-daagse energieprognose</h2>
                  <p className="text-sm text-slate-500 mt-0.5">Voorspelling via Nationaal Energie Dashboard · daggemiddelde capaciteit</p>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
                    Wind
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-yellow-500 inline-block" />
                    Zon
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-5 border-t-2 border-dashed border-slate-400 inline-block" />
                    Gem.
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {loading ? (
                  <LoadingSkeleton />
                ) : error ? (
                  <div className="flex flex-col items-center gap-3 py-12 text-center">
                    <Info className="w-8 h-8 text-slate-300" />
                    <p className="text-slate-500 text-sm">{error}</p>
                    <button
                      onClick={() => fetchData(true)}
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      Opnieuw proberen
                    </button>
                  </div>
                ) : (
                  <motion.div
                    key="cards"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 sm:gap-2 md:gap-3 overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-7 sm:overflow-visible snap-x snap-mandatory scrollbar-none"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                    {days.map((day, i) => {
                      const windPct = maxKw > 0 ? day.windCapacityKw / maxKw : 0
                      const solarPct = maxKw > 0 ? day.solarCapacityKw / maxKw : 0
                      const avgWindPct = maxKw > 0 ? avgWindKw / maxKw : 0
                      const avgSolarPct = maxKw > 0 ? avgSolarKw / maxKw : 0
                      const combinedAvgPct = (avgWindPct + avgSolarPct) / 2
                      const windForce = getWindForce(day.windCapacityKw)
                      const windGw = day.windCapacityKw / 1_000_000
                      const solarGw = day.solarCapacityKw / 1_000_000

                      return (
                        <motion.div
                          key={day.date.toISOString()}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={`relative flex flex-col items-center rounded-3xl p-2 sm:p-3 md:p-4 transition-all min-w-[72px] sm:min-w-0 snap-center shrink-0 sm:shrink
                            ${day.isToday
                              ? 'bg-secondary text-white shadow-lg shadow-secondary/20 ring-2 ring-secondary'
                              : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md'
                            }`}
                        >
                          {/* Dag label */}
                          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1
                            ${day.isToday ? 'text-white/90' : 'text-slate-500'}`}>
                            {day.dayShort}
                          </span>

                          {/* Wind force + weather icon */}
                          <div className="flex items-center gap-1 mb-2">
                            <WindForceBadge force={windForce} />
                          </div>
                          <div className={`mb-2 ${day.isToday ? 'text-white' : 'text-slate-400'}`}>
                            <WeatherIcon windGw={windGw} solarGw={solarGw} size={18} />
                          </div>

                          {/* Bar chart area */}
                          <div className="relative flex-1 w-full flex items-end justify-center gap-1" style={{ minHeight: 80 }}>
                            <div
                              className="absolute left-0 right-0 border-t-2 border-dashed pointer-events-none"
                              style={{
                                bottom: `${combinedAvgPct * 100}%`,
                                borderColor: day.isToday ? 'rgba(255,255,255,0.3)' : '#cbd5e1',
                              }}
                            />

                            {/* Wind bar */}
                            <div className="relative flex flex-col justify-end" style={{ width: '38%', height: '100%' }}>
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${Math.max(windPct * 100, 4)}%` }}
                                transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                                className="rounded-t-sm w-full"
                                style={{ backgroundColor: day.isToday ? '#60a5fa' : '#3b82f6' }}
                              />
                            </div>

                            {/* Solar bar */}
                            <div className="relative flex flex-col justify-end" style={{ width: '38%', height: '100%' }}>
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${Math.max(solarPct * 100, 4)}%` }}
                                transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                                className="rounded-t-sm w-full"
                                style={{ backgroundColor: day.isToday ? '#fde047' : '#eab308' }}
                              />
                            </div>
                          </div>

                          {/* Capaciteit labels onder de bars */}
                          <div className={`w-full grid grid-cols-2 gap-0.5 mt-1.5 text-center text-[8px] sm:text-[9px] font-bold leading-none
                            ${day.isToday ? 'text-white/70' : 'text-slate-400'}`}>
                            <span style={{ color: day.isToday ? '#93c5fd' : '#3b82f6' }}>
                              {formatGW(day.windCapacityKw)}
                            </span>
                            <span style={{ color: day.isToday ? '#fde047' : '#ca8a04' }}>
                              {formatGW(day.solarCapacityKw)}
                            </span>
                          </div>

                          {/* Totaal */}
                          <div className={`text-[9px] sm:text-[10px] font-black mt-1
                            ${day.isToday ? 'text-white' : 'text-secondary'}`}>
                            {formatGW(day.windCapacityKw + day.solarCapacityKw)}
                          </div>

                          {/* Datum */}
                          <span className={`text-[8px] sm:text-[9px] mt-0.5 font-medium
                            ${day.isToday ? 'text-white/50' : 'text-slate-300'}`}>
                            {day.date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' })}
                          </span>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Legend mobile */}
              {!loading && !error && (
                <div className="flex sm:hidden items-center justify-center gap-4 text-[10px] font-bold text-slate-400 mt-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
                    Wind
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-sm bg-yellow-500 inline-block" />
                    Zon
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-5 border-t-2 border-dashed border-slate-400 inline-block" />
                    Gem.
                  </span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Vandaag stats ── */}
      {today && !loading && !error && (
        <section className="py-6 md:py-10 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-2">
                Vandaag in Nederland
              </h2>
              <p className="text-slate-500 mb-8">Verwachte daggemiddelde capaciteit op basis van NED.nl prognose</p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  label: 'Totale groene opwek',
                  value: formatGW(today.windCapacityKw + today.solarCapacityKw),
                  sublabel: 'Wind + zon gecombineerd',
                  icon: Zap,
                  highlight: true,
                },
                {
                  label: 'Windenergie',
                  value: formatGW(today.windCapacityKw),
                  sublabel: `Windkracht ${getWindForce(today.windCapacityKw)} · ${getWindLabel(getWindForce(today.windCapacityKw))}`,
                  icon: Wind,
                  highlight: false,
                },
                {
                  label: 'Zonne-energie',
                  value: formatGW(today.solarCapacityKw),
                  sublabel: today.solarCapacityKw > avgSolarKw ? 'Boven gemiddeld' : 'Onder gemiddeld',
                  icon: Sun,
                  highlight: false,
                },
                {
                  label: 'vs. 7-daags gem.',
                  value: (() => {
                    const todayTotal = today.windCapacityKw + today.solarCapacityKw
                    const avgTotal = avgWindKw + avgSolarKw
                    const diff = ((todayTotal - avgTotal) / Math.max(avgTotal, 1)) * 100
                    return `${diff >= 0 ? '+' : ''}${diff.toFixed(0)}%`
                  })(),
                  sublabel: 'Opwek t.o.v. weekgemiddelde',
                  icon: TrendingUp,
                  highlight: false,
                },
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <FadeIn key={stat.label} delay={i * 0.07}>
                    <div className={`rounded-2xl p-4 md:p-5 ${
                      stat.highlight
                        ? 'bg-secondary relative overflow-hidden'
                        : 'bg-white border border-slate-100'
                    }`}>
                      {stat.highlight && (
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                      )}
                      <div className="flex items-center gap-2 mb-1 relative z-10">
                        <Icon className={`w-4 h-4 ${stat.highlight ? 'text-primary' : 'text-slate-400'}`} />
                        <span className={`text-[9px] font-black uppercase tracking-widest ${
                          stat.highlight ? 'text-slate-400' : 'text-slate-400'
                        }`}>
                          {stat.label}
                        </span>
                      </div>
                      <div className={`text-2xl md:text-3xl font-black tracking-tight relative z-10 ${
                        stat.highlight ? 'text-white' : 'text-secondary'
                      }`}>
                        {stat.value}
                      </div>
                      <span className={`text-[10px] font-medium mt-1 block ${
                        stat.highlight ? 'text-slate-400' : 'text-slate-400'
                      }`}>
                        {stat.sublabel}
                      </span>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Business insight & CTA ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <FadeIn>
              <div>
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4">
                  Slim energiebeheer
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 leading-tight">
                  Gebruik het energieweerbericht voor je bedrijf
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Als vastgoedeigenaar of bedrijf met een groot energieverbruik weet je hoe belangrijk het is om op het juiste moment energie te verbruiken. Het energieweerbericht toont wanneer er veel wind- en zonne-energie beschikbaar is — en dus wanneer stroom schoner en goedkoper is.
                </p>
                <ul className="space-y-3">
                  {[
                    'Laad je batterij op bij hoge wind- of zoninstraling',
                    'Ontlaad op momenten van lage groene opwek',
                    'Combineer met live energieprijzen voor maximaal rendement',
                    'Automatiseer met een EMS voor handen-vrij beheer',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link
                    href="/oplossingen/energieopslag"
                    className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
                  >
                    Batterijopslag oplossingen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/oplossingen/ems"
                    className="inline-flex items-center gap-2 bg-secondary text-white font-bold px-5 py-3 rounded-xl hover:bg-secondary/90 transition-colors text-sm"
                  >
                    EMS oplossingen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Battery,
                    title: 'Batterijopslag',
                    desc: 'Sla groene stroom op bij overschot en gebruik het op piekmomenten.',
                    href: '/oplossingen/energieopslag',
                  },
                  {
                    icon: Zap,
                    title: 'EMS',
                    desc: 'Automatisch slim laden en ontladen op basis van energiedata.',
                    href: '/oplossingen/ems',
                  },
                  {
                    icon: Sun,
                    title: 'Zonnepanelen',
                    desc: 'Produceer zelf groene stroom en profiteer van zonrijke dagen.',
                    href: '/oplossingen/zonnepanelen',
                  },
                  {
                    icon: Wind,
                    title: 'Energieprijzen',
                    desc: 'Combineer het energieweerbericht met live EPEX Spot-prijzen.',
                    href: '/energieprijzen',
                  },
                ].map((card) => {
                  const Icon = card.icon
                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all group"
                    >
                      <Icon className="w-5 h-5 mb-3 text-slate-400" />
                      <div className="font-bold text-secondary text-sm mb-1">{card.title}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                      <span className="text-xs text-primary font-semibold mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Meer info <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  )
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SEO content ── */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-8">
              Wat is een energieweerbericht?
            </h2>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.05}>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Een energieweerbericht is een prognose van de verwachte opwek van hernieuwbare energie in Nederland. Net zoals een weersverwachting de temperatuur en neerslag voorspelt, toont het energieweerbericht hoeveel kilowattuur aan stroom er de komende dagen naar verwachting wordt opgewekt door windturbines en zonnepanelen.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  De data op deze pagina is afkomstig van het{' '}
                  <a
                    href="https://ned.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Nationaal Energie Dashboard (NED.nl)
                  </a>
                  , een initiatief van Gasunie en TenneT. NED.nl combineert weermodellen met actuele capaciteitsdata van windparken en zonnesystemen in heel Nederland om betrouwbare prognoses te maken.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-xl font-black text-secondary mb-3">
                  Windenergie vs. zonne-energie: wat is het verschil?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Windenergie wordt opgewekt door windturbines op land en op zee. Deze produceren 24 uur per dag stroom, afhankelijk van de windkracht. Nederland heeft een uitstekende ligging voor windenergie, met gemiddeld hoge windsnelheden — zeker de offshore windparken in de Noordzee produceren continu grote hoeveelheden stroom.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Zonne-energie is alleen beschikbaar als de zon schijnt. De productie piekt in de zomer en op heldere middagen. De combinatie van wind en zon zorgt voor een redelijk stabiele basisproductie van groene stroom, maar er zijn ook dagen met een laag aanbod. Juist op die momenten is batterijopslag van cruciaal belang.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h3 className="text-xl font-black text-secondary mb-3">
                  Slim laden en ontladen met batterijopslag in Twente
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Bedrijven en vastgoedeigenaren in Twente en Overijssel die investeren in batterijopslag, kunnen het energieweerbericht gebruiken om slim te laden. Is er morgen veel wind verwacht? Dan is stroom naar verwachting goedkoop en duurzaam — het ideale moment om je batterij vol te laden. Verwacht het weerbericht weinig zon en wind? Dan kun je opgeslagen energie inzetten en dure inkoop vermijden.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Met een modern energiemanagementsysteem (EMS) wordt dit proces volledig geautomatiseerd. Het systeem combineert het energieweerbericht met de actuele EPEX Spot-prijzen en stuurt je installaties automatisch aan voor maximale besparing.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-xl font-black text-secondary mb-3">
                  Veelgestelde vragen over het energieweerbericht
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      q: 'Hoe betrouwbaar is de energieprognose?',
                      a: 'De prognose van NED.nl is gebaseerd op professionele weermodellen en historische productiedata. De eerste 1-2 dagen zijn het meest nauwkeurig. Verder in de toekomst neemt de onzekerheid toe — net als bij een weersverwachting.',
                    },
                    {
                      q: 'Kan ik het energieweerbericht combineren met energieprijzen?',
                      a: 'Absoluut. Veel groene stroomopwek gaat gepaard met lage energieprijzen op de spotmarkt. Door het energieweerbericht naast de live EPEX Spot-prijzen te leggen, kun je optimaal profiteren van beide inzichten.',
                    },
                    {
                      q: 'Wat betekent windkracht in het energieweerbericht?',
                      a: 'De windkrachtindicator (1-5) op deze pagina is afgeleid van de verwachte capaciteit van windturbines in Nederland. Windkracht 1 betekent weinig windopwek, windkracht 5 geeft aan dat er een storm is met maximale turbineproductie — maar ook tijdelijke uitschakeling van turbines is mogelijk.',
                    },
                    {
                      q: 'Hoe kan CAPAXX Energy mij helpen met energiebeheer?',
                      a: 'CAPAXX Energy helpt bedrijven en vastgoedeigenaren in Twente met de installatie en het beheer van zonnepanelen, batterijopslag en EMS. Wij koppelen alle systemen aan live energiedata zodat u automatisch en optimaal profiteert van duurzame energie.',
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="border-l-2 border-primary/20 pl-5">
                      <h4 className="font-bold text-secondary mb-1.5">{faq.q}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Cross-link: Energieprijzen ── */}
      <section className="py-6 md:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <Link
              href="/energieprijzen"
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-emerald-50/70 rounded-2xl border border-emerald-100 p-5 md:p-6 hover:bg-emerald-50 transition-all group"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 shrink-0">
                <Zap className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-black text-secondary tracking-tight mb-0.5">
                  Bekijk ook de Live Energieprijzen
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Wat kost stroom vandaag per uur? Combineer het energieweerbericht met de actuele EPEX Spot dag-ahead prijzen voor maximaal inzicht.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="py-10 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                  Profiteer van groene energiepieken
                </h2>
                <p className="text-slate-300 text-lg">
                  CAPAXX Energy installeert batterijopslag en EMS voor commercieel vastgoed in Twente.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Gratis adviesgesprek
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/energieprijzen"
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
                >
                  Live energieprijzen
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
