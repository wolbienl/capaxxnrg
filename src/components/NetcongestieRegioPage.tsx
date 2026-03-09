'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, Clock, Zap, MapPin, CheckCircle2, Route } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import Breadcrumb, { type BreadcrumbItem } from '@/components/Breadcrumb'

interface ImpactItem {
  title: string
  description: string
}

interface TijdlijnItem {
  jaar: string
  beschrijving: string
  highlight?: boolean
}

interface OplossingsItem {
  title: string
  description: string
  href: string
}

interface NetcongestieRegioPageProps {
  stad: string
  heroSubtitle: string
  situatie: string
  situatieDetails: string[]
  tijdlijn: TijdlijnItem[]
  impactItems: ImpactItem[]
  oplossingen: OplossingsItem[]
  closingText?: string
  breadcrumbItems?: BreadcrumbItem[]
}

export default function NetcongestieRegioPage({
  stad,
  heroSubtitle,
  situatie,
  situatieDetails,
  tijdlijn,
  impactItems,
  oplossingen,
  closingText,
  breadcrumbItems,
}: NetcongestieRegioPageProps) {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-slate-100" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {breadcrumbItems && (
            <Breadcrumb items={breadcrumbItems} className="mb-4 -mx-4 md:-mx-6" />
          )}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <MapPin className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs">Netcongestie {stad}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Het stroomnet in{' '}
                <span className="text-primary italic">{stad} zit vol.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-2xl text-balance">
                {heroSubtitle}
              </p>

              <Link
                href="/contact?type=quickscan"
                className="inline-flex items-center px-8 py-4 bg-secondary text-white font-black rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group"
              >
                Gratis quickscan aanvragen <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Situatie */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
                <Zap className="w-4 h-4" />
                <span>De situatie</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
                Wat speelt er in <span className="text-primary italic">{stad}</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                {situatie}
              </p>
            </FadeIn>

            <div className="space-y-4">
              {situatieDetails.map((detail, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-secondary leading-relaxed">{detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Impact voor bedrijven</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
              Wat betekent dit voor <span className="text-primary italic">jouw bedrijf</span>?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {impactItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-slate-50 border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
                <Clock className="w-4 h-4" />
                <span>Tijdlijn</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
                Wanneer komt er <span className="text-primary italic">verbetering</span>?
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
              <div className="space-y-6">
                {tijdlijn.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className={`relative flex items-start md:pl-16 ${item.highlight ? '' : ''}`}>
                      <div className={`hidden md:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center font-black text-sm z-10 shrink-0 ${
                        item.highlight
                          ? 'bg-primary text-white shadow-lg shadow-primary/30'
                          : 'bg-white border-2 border-slate-200 text-secondary'
                      }`}>
                        {item.jaar.length <= 4 ? item.jaar : '→'}
                      </div>
                      <div className={`w-full rounded-2xl p-6 border ${
                        item.highlight
                          ? 'bg-primary/5 border-primary/20'
                          : 'bg-white border-slate-100'
                      }`}>
                        <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${
                          item.highlight ? 'text-primary' : 'text-slate-400'
                        }`}>{item.jaar}</span>
                        <p className="text-secondary leading-relaxed">{item.beschrijving}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oplossingen */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <Route className="w-4 h-4" />
              <span>Wat nu?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">
              Niet wachten, <span className="text-primary italic">wel doorgroeien.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Terwijl netbeheerders bouwen, zijn er vandaag al oplossingen die ruimte creëren. Wij zetten ze in voor jouw situatie.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {oplossingen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                      Lees meer <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {closingText && (
            <FadeIn delay={0.3} className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-slate-400 italic leading-relaxed">{closingText}</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
            </div>

            <FadeIn className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight">
                Wachten is geen <br /><span className="text-primary italic">strategie.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-14 leading-relaxed">
                In een gratis quickscan brengen we jouw situatie in kaart en laten we zien welke opties er vandaag al zijn — ongeacht de wachtlijst.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/contact?type=quickscan"
                  className="px-8 py-4 md:px-12 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20"
                >
                  Gratis quickscan aanvragen
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 md:px-12 md:py-5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
                >
                  Bel direct: +31 (0)53 206 5066
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  )
}
