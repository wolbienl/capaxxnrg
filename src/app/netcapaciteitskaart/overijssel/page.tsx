'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Map,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Zap,
  Wrench,
  Clock,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import OverijsselMap from '@/components/OverijsselMap'
import VoedingsgebiedDetailPanel from '@/components/VoedingsgebiedDetailPanel'
import congestionData from '@/data/overijssel-congestion-data.json'

type Mode = 'afname' | 'invoeding'

const LEGEND = [
  { code: 0, color: '#34d399', label: 'Beschikbaar' },
  { code: 1, color: '#fbbf24', label: 'Beperkt' },
  { code: 2, color: '#f97316', label: 'Krap' },
  { code: 3, color: '#ef4444', label: 'Vol' },
]

export default function OverijsselKaartPage() {
  const [mode, setMode] = useState<Mode>('afname')
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)

  const selectedData = selectedCluster
    ? congestionData.voedingsgebieden.find((v) => v.name === selectedCluster) ?? null
    : null

  return (
    <>
      <section className="bg-secondary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="mb-6">
              <Link
                href="/netcapaciteitskaart"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white/70 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Terug naar Nederland
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center space-x-2 text-primary font-bold px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-6">
                <Map className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs">Netcongestie</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                Netcapaciteitskaart{' '}
                <span className="text-primary italic">Overijssel</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Bekijk de congestiestatus per voedingsgebied in Overijssel. Ontdek waar
                transportcapaciteit beschikbaar is — en waar de wachtrij oploopt.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white/[0.06] rounded-2xl p-1.5 border border-white/10">
                {(['afname', 'invoeding'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className="relative px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-colors"
                    style={{ color: mode === m ? '#ffffff' : 'rgba(255,255,255,0.4)' }}
                  >
                    {mode === m && (
                      <motion.div
                        layoutId="overijsselModeIndicator"
                        className="absolute inset-0 bg-primary rounded-xl"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">
                      {m === 'afname' ? 'Afname' : 'Invoeding'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <FadeIn delay={0.2}>
              <div className="relative">
                <OverijsselMap
                  data={congestionData.voedingsgebieden}
                  gemeenteToCluster={congestionData.gemeenteToCluster}
                  mode={mode}
                  selectedCluster={selectedCluster}
                  onSelectCluster={setSelectedCluster}
                />

                <div className="flex items-center justify-center gap-5 md:gap-8 mt-6">
                  {LEGEND.map((item) => (
                    <div key={item.code} className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs font-bold text-white/50">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="right">
              <div className="lg:sticky lg:top-28">
                <VoedingsgebiedDetailPanel
                  voedingsgebied={selectedData}
                  totals={congestionData.totals}
                  allVoedingsgebieden={congestionData.voedingsgebieden}
                  mode={mode}
                  onClose={() => setSelectedCluster(null)}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight mb-4">
                Overijssel in{' '}
                <span className="text-primary italic">cijfers</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Regionaal overzicht van de netcongestie-situatie in Overijssel
                op basis van data van de regionale netbeheerders en TenneT.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: AlertTriangle,
                value: congestionData.totals.gebiedenMetCongestie,
                label: 'Gebieden met congestie',
                suffix: `/ ${congestionData.voedingsgebieden.length}`,
              },
              {
                icon: Zap,
                value: congestionData.totals.wachtrijAfname.toLocaleString('nl-NL'),
                label: 'Wachtrij afname',
                suffix: 'MW',
              },
              {
                icon: Zap,
                value: congestionData.totals.wachtrijInvoeding.toLocaleString('nl-NL'),
                label: 'Wachtrij invoeding',
                suffix: 'MW',
              },
              {
                icon: Wrench,
                value: congestionData.totals.aantalProjecten,
                label: 'Geplande uitbreidingen',
                suffix: '',
              },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-[2rem] p-6 md:p-8 border border-slate-100 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary tracking-tight">
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-lg md:text-xl font-bold text-slate-300 ml-2">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-secondary rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 text-primary font-bold px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="uppercase tracking-widest text-xs">
                    Gratis adviesgesprek
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                  Wat betekent congestie{' '}
                  <span className="text-primary italic">voor u?</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                  Wij analyseren de situatie voor uw specifieke locatie in Overijssel en
                  adviseren over de beste strategie — van cable pooling tot
                  energieopslag.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 md:px-10 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-lg hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20"
                >
                  Plan een gesprek
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
