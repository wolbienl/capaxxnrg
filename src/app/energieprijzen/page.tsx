'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingDown,
  TrendingUp,
  BarChart3,
  Zap,
  RefreshCw,
  Clock,
  ArrowRight,
  Info,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Wind,
} from 'lucide-react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  Bar,
  BarChart,
} from 'recharts'
import Link from 'next/link'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

interface PriceEntry {
  readingDate: string
  price: number
}

interface EnergyPriceResponse {
  Prices: PriceEntry[]
  average: number
  fromDate: string
  tillDate: string
}

interface ChartDataPoint {
  hour: string
  hourNum: number
  price: number
  priceDisplay: string
  readingDate: string
  isCurrent: boolean
  isPast: boolean
  dayPart: 'nacht' | 'ochtend' | 'middag' | 'avond'
}

function getPriceColor(price: number, avg: number): string {
  return price <= avg ? '#94a3b8' : '#f06a00'
}

function getPriceLabel(price: number, avg: number): string {
  const ratio = price / avg
  if (ratio < 0.7) return 'Zeer goedkoop'
  if (ratio < 0.9) return 'Goedkoop'
  if (ratio < 1.1) return 'Gemiddeld'
  if (ratio < 1.3) return 'Duur'
  return 'Zeer duur'
}

function getDayPart(hour: number): 'nacht' | 'ochtend' | 'middag' | 'avond' {
  if (hour < 6) return 'nacht'
  if (hour < 12) return 'ochtend'
  if (hour < 18) return 'middag'
  return 'avond'
}

function formatPrice(price: number): string {
  return price.toFixed(2).replace('.', ',')
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('nl-NL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const DAY_PART_ICONS = {
  ochtend: Sunrise,
  middag: Sun,
  avond: Sunset,
  nacht: Moon,
} as const

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ payload: ChartDataPoint }> }) {
  if (!active || !payload?.length) return null
  const data = payload[0].payload

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-3 min-w-[160px]"
    >
      <div className="flex items-center gap-2 mb-1">
        <Clock className="w-3 h-3 text-slate-400" />
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          {data.hour}
        </span>
        {data.isCurrent && (
          <span className="text-[9px] font-black text-white bg-primary px-1.5 py-0.5 rounded-full uppercase">Nu</span>
        )}
      </div>
      <div className="text-xl font-black text-secondary tracking-tight">
        &euro; {data.priceDisplay}
        <span className="text-xs font-bold text-slate-400 ml-1">/kWh</span>
      </div>
    </motion.div>
  )
}

export default function EnergieprijzenPage() {
  const [priceData, setPriceData] = useState<EnergyPriceResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const fetchPrices = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) setIsRefreshing(true)
    try {
      const now = new Date()
      const from = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
      const till = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)

      const params = new URLSearchParams({
        fromDate: from.toISOString(),
        tillDate: till.toISOString(),
        interval: '4',
        usageType: '1',
        inclBtw: 'false',
      })

      const res = await fetch(`https://api.energyzero.nl/v1/energyprices?${params}`)
      if (!res.ok) throw new Error('Kon prijzen niet ophalen')

      const data: EnergyPriceResponse = await res.json()
      setPriceData(data)
      setError(null)
      setLastUpdated(new Date())
    } catch {
      setError('Prijzen konden niet worden geladen. Probeer het later opnieuw.')
    } finally {
      setLoading(false)
      setIsRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchPrices()
    const interval = setInterval(() => fetchPrices(), 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [fetchPrices])

  const chartData = useMemo<ChartDataPoint[]>(() => {
    if (!priceData?.Prices) return []
    const currentHour = new Date().getHours()

    return priceData.Prices.map((entry) => {
      const date = new Date(entry.readingDate)
      const hour = date.getUTCHours()
      return {
        hour: `${hour.toString().padStart(2, '0')}:00`,
        hourNum: hour,
        price: entry.price,
        priceDisplay: formatPrice(entry.price),
        readingDate: entry.readingDate,
        isCurrent: hour === currentHour,
        isPast: hour < currentHour,
        dayPart: getDayPart(hour),
      }
    })
  }, [priceData])

  const stats = useMemo(() => {
    if (!chartData.length || !priceData) return null
    const prices = chartData.map((d) => d.price)
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    const minEntry = chartData.find((d) => d.price === min)!
    const maxEntry = chartData.find((d) => d.price === max)!
    const currentHour = new Date().getHours()
    const current = chartData.find((d) => d.hourNum === currentHour)

    return {
      current: current ? current.price : null,
      currentHour: current?.hour ?? '--:--',
      min,
      minHour: minEntry.hour,
      max,
      maxHour: maxEntry.hour,
      avg: priceData.average,
    }
  }, [chartData, priceData])

  const dayParts = useMemo(() => {
    if (!chartData.length) return []
    const parts = ['ochtend', 'middag', 'avond', 'nacht'] as const
    return parts.map((part) => {
      const hours = chartData.filter((d) => d.dayPart === part)
      const avg = hours.length ? hours.reduce((s, h) => s + h.price, 0) / hours.length : 0
      return { name: part, avg, hours }
    })
  }, [chartData])

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Compact Hero */}
      <section className="relative pt-28 pb-4 md:pt-32 md:pb-6 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-primary font-bold mb-4 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="uppercase tracking-widest text-[10px]">Live Energieprijzen</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary leading-[1.1] tracking-tight">
                  EPEX Spot <span className="text-primary italic">vandaag.</span>
                </h1>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 pb-1">
                {lastUpdated && (
                  <span>
                    {lastUpdated.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })} &middot; {formatDate(new Date())}
                  </span>
                )}
                <button
                  onClick={() => fetchPrices(true)}
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

      {/* Loading / Error */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.section
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 bg-white"
          >
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-4 border-slate-100 border-t-primary animate-spin mb-4" />
              <p className="text-slate-400 text-sm font-medium">Prijzen worden opgehaald...</p>
            </div>
          </motion.section>
        )}

        {error && !loading && (
          <motion.section
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 bg-white"
          >
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <Info className="w-6 h-6 text-red-400" />
              </div>
              <p className="text-slate-600 text-sm font-medium mb-4">{error}</p>
              <button
                onClick={() => { setLoading(true); fetchPrices() }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Opnieuw proberen
              </button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Content */}
      {!loading && !error && stats && (
        <>
          {/* Compact Stats Strip */}
          <section className="py-4 md:py-6 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {/* Current Price */}
                <FadeIn delay={0}>
                  <div className="relative bg-secondary rounded-2xl p-4 md:p-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="flex items-center gap-2 mb-1 relative z-10">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Nu ({stats.currentHour})
                      </span>
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-white tracking-tight relative z-10">
                      &euro; {stats.current !== null ? formatPrice(stats.current) : '--'}
                    </div>
                    {stats.current !== null && (
                      <div className={`inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                        stats.current <= stats.avg
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-orange-500/20 text-orange-400'
                      }`}>
                        {stats.current <= stats.avg ? <TrendingDown className="w-2.5 h-2.5" /> : <TrendingUp className="w-2.5 h-2.5" />}
                        {getPriceLabel(stats.current, stats.avg)}
                      </div>
                    )}
                  </div>
                </FadeIn>

                {/* Lowest */}
                <FadeIn delay={0.05}>
                  <div className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="w-4 h-4 text-emerald-500" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Laagste ({stats.minHour})
                      </span>
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-secondary tracking-tight">
                      &euro; {formatPrice(stats.min)}
                    </div>
                  </div>
                </FadeIn>

                {/* Highest */}
                <FadeIn delay={0.1}>
                  <div className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-red-500" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Hoogste ({stats.maxHour})
                      </span>
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-secondary tracking-tight">
                      &euro; {formatPrice(stats.max)}
                    </div>
                  </div>
                </FadeIn>

                {/* Average */}
                <FadeIn delay={0.15}>
                  <div className="bg-slate-50 rounded-2xl p-4 md:p-5 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <BarChart3 className="w-4 h-4 text-primary" />
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                        Daggemiddelde
                      </span>
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-secondary tracking-tight">
                      &euro; {formatPrice(stats.avg)}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Chart with daypart badges */}
          <section className="pt-2 pb-6 md:pt-4 md:pb-10 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <FadeIn>
                <div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-4 md:p-8 relative overflow-hidden">
                  {/* Header row: title + legend + daypart badges */}
                  <div className="flex flex-col gap-3 mb-4 md:mb-6 relative z-10">
                    <div>
                      <h2 className="text-base md:text-lg font-black text-secondary tracking-tight">
                        Prijsverloop per uur
                        <span className="text-slate-400 font-bold text-xs ml-2 hidden sm:inline">
                          EPEX Day-Ahead &middot; excl. BTW &amp; EB
                        </span>
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {/* Daypart badges */}
                      <div className="flex flex-wrap gap-2">
                        {dayParts.map((part) => {
                          const Icon = DAY_PART_ICONS[part.name as keyof typeof DAY_PART_ICONS]
                          return (
                            <div
                              key={part.name}
                              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-slate-100 text-[10px]"
                            >
                              <Icon className="w-3 h-3 text-slate-400" />
                              <span className="font-bold text-slate-500 capitalize">{part.name}</span>
                              <span className="font-black text-secondary">&euro;{formatPrice(part.avg)}</span>
                            </div>
                          )
                        })}
                      </div>

                      {/* Legend */}
                      <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-slate-400" /> Onder gem.
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-primary" /> Boven gem.
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary ring-1 ring-primary" /> Nu
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Watermark */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-8 opacity-[0.07] pointer-events-none select-none z-0">
                    <Image
                      src="/images/logo-dark.svg"
                      alt=""
                      width={140}
                      height={35}
                      className="w-[100px] md:w-[140px] h-auto"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="h-[250px] md:h-[320px] -ml-2 relative z-10 [&_svg]:outline-none [&_svg]:ring-0 [&_.recharts-wrapper]:!outline-none">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData} barCategoryGap="12%">
                        <CartesianGrid
                          strokeDasharray="3 3"
                          stroke="#e2e8f0"
                          vertical={false}
                        />
                        <XAxis
                          dataKey="hour"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                          interval={isMobile ? 3 : 1}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                          tickFormatter={(v: number) => `€${v.toFixed(2)}`}
                          width={55}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(15, 23, 42, 0.04)', radius: 8 }} />
                        <ReferenceLine
                          y={stats.avg}
                          stroke="#94a3b8"
                          strokeDasharray="6 4"
                          strokeWidth={1.5}
                          label={{
                            value: `Gem. €${formatPrice(stats.avg)}`,
                            position: 'insideTopRight',
                            fill: '#94a3b8',
                            fontSize: 10,
                            fontWeight: 700,
                          }}
                        />
                        <Bar dataKey="price" radius={[5, 5, 0, 0]} maxBarSize={36}>
                          {chartData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={entry.isCurrent ? '#0f172a' : getPriceColor(entry.price, stats.avg)}
                              fillOpacity={entry.isPast && !entry.isCurrent ? 0.45 : 0.85}
                              stroke={entry.isCurrent ? '#f06a00' : 'none'}
                              strokeWidth={entry.isCurrent ? 2 : 0}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Cross-link: Energieweerbericht */}
          <section className="py-6 md:py-10 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <FadeIn>
                <Link
                  href="/energieweerbericht"
                  className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 bg-blue-50/70 rounded-2xl border border-blue-100 p-5 md:p-6 hover:bg-blue-50 transition-all group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 shrink-0">
                    <Wind className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-black text-secondary tracking-tight mb-0.5">
                      Bekijk ook het Energieweerbericht
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Hoeveel wind- en zonne-energie wordt er de komende 7 dagen opgewekt? Combineer de energieprijs met het aanbod van groene stroom.
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* Compact CTA row */}
          <section className="py-6 md:py-10 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
              <FadeIn>
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 bg-white rounded-2xl border border-slate-100 p-6 md:p-8">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black text-secondary tracking-tight mb-1.5">
                      Slim sturen op EPEX prijzen?
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Met een EMS stuurt CAPAXX Energy je batterij, zonnepanelen en laadinfra automatisch aan
                      op basis van deze uurprijzen. Laden als het goedkoop is, ontladen als het duur is.
                    </p>
                  </div>
                  <div className="flex flex-shrink-0 gap-3">
                    <Link
                      href="/oplossingen/ems"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-white font-black rounded-xl hover:bg-slate-800 transition-colors text-sm whitespace-nowrap"
                    >
                      EMS bekijken <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 text-secondary font-black rounded-xl hover:bg-slate-200 transition-colors text-sm whitespace-nowrap"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="py-6 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-[11px] text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
                Prijzen zijn exclusief BTW en energiebelasting, afkomstig van de EPEX Day-Ahead markt via EnergyZero.
                Je werkelijke energietarief omvat daarnaast BTW, energiebelasting, opslagen en netwerkkosten.
                Data wordt elke 5 minuten ververst.
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
