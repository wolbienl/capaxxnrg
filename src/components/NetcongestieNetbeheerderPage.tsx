'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileText,
  Info,
  Route,
  Settings,
  Wrench,
  Zap,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

interface AanpakItem {
  title: string
  description: string
}

interface ProcesStap {
  stap: string
  title: string
  description: string
}

interface WatWerktItem {
  title: string
  description: string
  href: string
}

interface NetcongestieNetbeheerderPageProps {
  netbeheerder: string
  werkgebied: string
  heroSubtitel: string
  introductie: string
  introductieDetails: string[]
  aanpak: AanpakItem[]
  proces: ProcesStap[]
  watWerkt: WatWerktItem[]
  verwachtingen: string[]
  closingText?: string
}

export default function NetcongestieNetbeheerderPage({
  netbeheerder,
  werkgebied,
  heroSubtitel,
  introductie,
  introductieDetails,
  aanpak,
  proces,
  watWerkt,
  verwachtingen,
  closingText,
}: NetcongestieNetbeheerderPageProps) {

  const capaxxHelpt = [
    {
      icon: Zap,
      title: 'Quickscan & strategie',
      description: `We brengen jouw netcongestiesituatie in kaart en bepalen welke routes bij ${netbeheerder} het snelst werken voor jouw locatie en vermogensvraag.`,
    },
    {
      icon: FileText,
      title: 'Subsidies geregeld',
      description: 'Flex-e, SPRILA, EIA en MIA/Vamil — wij stellen het dossier op en dienen de aanvragen in bij RVO. Volledig en op tijd.',
    },
    {
      icon: Settings,
      title: `Afstemming met ${netbeheerder}`,
      description: `We voeren de gesprekken, dienen de aanvragen in en begeleiden het technische traject met ${netbeheerder} van A tot Z.`,
    },
    {
      icon: Wrench,
      title: 'Technische realisatie',
      description: 'Van bekabeling en transformatoren tot batterijopslag en EMS — wij bouwen en commissionen alles in eigen beheer.',
    },
  ]

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-slate-100" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <Building2 className="w-4 h-4" />
                <span className="uppercase tracking-widest text-xs">Netbeheerder · {werkgebied}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Netcongestie bij{' '}
                <span className="text-primary italic">{netbeheerder}.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-2xl text-balance">
                {heroSubtitel}
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

      {/* Introductie */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
                <Info className="w-4 h-4" />
                <span>Over {netbeheerder}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
                Wie is <span className="text-primary italic">{netbeheerder}</span>?
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                {introductie}
              </p>
            </FadeIn>

            <div className="space-y-4">
              {introductieDetails.map((detail, i) => (
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

      {/* Aanpak van congestie */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <Zap className="w-4 h-4" />
              <span>Congestieaanpak</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
              Hoe pakt <span className="text-primary italic">{netbeheerder}</span> congestie aan?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {aanpak.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full"
                >
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Het proces */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
                <ClipboardList className="w-4 h-4" />
                <span>Het proces</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
                Stap voor stap bij <span className="text-primary italic">{netbeheerder}</span>
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
              <div className="space-y-6">
                {proces.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="relative flex items-start md:pl-16">
                      <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-black text-sm z-10 shrink-0 shadow-lg shadow-primary/30">
                        {item.stap}
                      </div>
                      <div className="w-full rounded-2xl p-6 bg-white border border-slate-100">
                        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-1 block">
                          Stap {item.stap}
                        </span>
                        <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat werkt */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <Route className="w-4 h-4" />
              <span>Wat werkt wel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">
              Oplossingen die werken bij{' '}
              <span className="text-primary italic">{netbeheerder}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Terwijl het net vol is, zijn er vandaag al routes die ruimte creëren. Dit zijn de meest effectieve opties binnen het werkgebied van {netbeheerder}.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {watWerkt.map((item, i) => (
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
        </div>
      </section>

      {/* Verwachtingen */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary tracking-tight mb-4">
                Wat kun je <span className="text-primary italic">realistisch</span> verwachten?
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Transparantie over doorlooptijden en vereisten helpt je beter plannen en sneller schakelen.
              </p>
            </FadeIn>
            <div className="space-y-4">
              {verwachtingen.map((item, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-secondary leading-relaxed">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {closingText && (
              <FadeIn delay={0.3} className="mt-10">
                <p className="text-slate-400 italic leading-relaxed text-center">{closingText}</p>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Hoe CAPAXX helpt */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Hoe CAPAXX <span className="text-primary italic">helpt</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Van de eerste quickscan tot en met de opgeleverde installatie — wij regelen het hele traject.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capaxxHelpt.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Geen dikke praat, wel <span className="italic text-primary">resultaat.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wil je weten wat er bij {netbeheerder} voor jou mogelijk is? We doen een gratis quickscan en laten zien welke routes vandaag al open zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=quickscan"
                className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Gratis quickscan aanvragen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/netcongestie"
                className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-white/10 text-white font-bold rounded-2xl text-base md:text-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Terug naar netcongestie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
