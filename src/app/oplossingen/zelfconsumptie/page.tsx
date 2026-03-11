'use client'

import Link from 'next/link'
import { Sun, CheckCircle2, ArrowRight, AlertTriangle, Battery, BarChart3, Settings } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function ZelfconsumptiePage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Sun}
        title="Eigen stroom, eigen"
        titleHighlight="verbruik."
        description="Terugleveren levert steeds minder op. Wij zorgen dat jouw opwek op het juiste moment wordt ingezet, opgeslagen of gestuurd."
        ctaText="Bereken jouw zelfconsumptie-potentieel"
        ctaHref="/contact?type=zelfconsumptie"
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'Wat wij doen', url: '/wat-wij-doen' }, { name: 'Oplossingen', url: '/oplossingen' }, { name: 'Zelfconsumptie' }]}
      />

      {/* Waarom het nu urgent is */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-16 tracking-tight text-center">Waarom het nu urgent is</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Terugleverkosten stijgen',
                desc: 'Energieleveranciers rekenen steeds hogere kosten voor teruggeleverde stroom. Wat je teruglevert, kost je geld.',
                icon: Sun
              },
              {
                title: 'Saldering stopt in 2027',
                desc: 'De afbouw is bevestigd. Zonder opslag of sturing verdampt het rendement van jouw zonnepanelen.',
                icon: BarChart3
              },
              {
                title: 'Netcongestie beperkt teruglevering',
                desc: 'In congestiegebieden mag je steeds minder terugleveren. Zelfconsumptie is de enige route naar rendement.',
                icon: Battery
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe je het verhoogt */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Hoe je het <span className="text-primary italic">verhoogt</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Batterijopslag',
                desc: 'Opwek bewaren voor later. Overdag opslaan, \'s avonds en \'s nachts verbruiken.',
                icon: Battery
              },
              {
                title: 'EMS-sturing',
                desc: 'Apparaten slim schakelen op basis van actuele opwek. Automatisch, zonder handmatig ingrijpen.',
                icon: Settings
              },
              {
                title: 'Procesplanning',
                desc: 'Productie en verbruik laten draaien als de zon schijnt. Data-gedreven afstemming op opwekprofiel.',
                icon: BarChart3
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full group">
                  <div className="w-14 h-14 bg-orange-50 group-hover:bg-primary rounded-2xl flex items-center justify-center text-primary group-hover:text-white shadow-sm mb-8 transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content + Veelgemaakte fout */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Wat wij leveren</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Verbruiksanalyse',
                  'Opslag-dimensionering',
                  'EMS-configuratie',
                  'Monitoring zelfconsumptie-ratio'
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="up">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-secondary hover:border-primary/20 transition-colors">
                      {item}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="space-y-10 lg:sticky lg:top-32">
              <div className="bg-secondary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <AlertTriangle className="w-48 h-48" />
                </div>
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                  Veelgemaakte fout
                </h3>
                <p className="text-3xl font-black text-white/40 mb-8 italic leading-tight">
                  &quot;Meer panelen = meer rendement.&quot;
                </p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  Zonder opslag of sturing lever je het overschot terug tegen lage tarieven. Zelfconsumptie bepaalt jouw echte rendement, niet het aantal panelen.
                </p>
                <Link
                  href="/oplossingen/zonnepanelen"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Meer over zonnepanelen <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Hoeveel van jouw opwek <span className="italic text-primary">gebruik je zelf</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Stuur jouw verbruiksdata, wij berekenen hoeveel rendement je laat liggen en wat opslag en sturing opleveren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=zelfconsumptie"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Stuur jouw verbruiksdata <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
              </Link>
              <Link
                href="/oplossingen/energieopslag"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
              >
                Meer over energieopslag
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
