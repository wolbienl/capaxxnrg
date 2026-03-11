'use client'

import Link from 'next/link'
import { TrendingDown, CheckCircle2, ArrowRight, AlertTriangle, Zap, BarChart3, Battery } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function PeakShavingPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={TrendingDown}
        title="Pieken kosten"
        titleHighlight="geld."
        description="Eén piek van 15 minuten bepaalt jouw maandfactuur. Met batterijopslag vlak je die af en bespaar je direct op netkosten."
        ctaText="Bereken jouw besparingspotentieel"
        ctaHref="/contact?type=peak-shaving"
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'Wat wij doen', url: '/wat-wij-doen' }, { name: 'Oplossingen', url: '/oplossingen' }, { name: 'Peak Shaving' }]}
      />

      {/* Wanneer het speelt */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-16 tracking-tight text-center">Wanneer het speelt</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Zware machines',
                desc: 'Productiestart veroorzaakt pieken die jouw factuur bepalen.',
                icon: Zap
              },
              {
                title: 'Laadinfra piekt',
                desc: 'Meerdere EV\'s tegelijk laden duwt je over het gecontracteerd vermogen.',
                icon: Battery
              },
              {
                title: 'Procespieken',
                desc: 'Koeling, compressoren of ovens die gelijktijdig opstarten.',
                icon: BarChart3
              },
              {
                title: 'Netboetes',
                desc: 'Overschrijding van het gecontracteerd vermogen kost direct geld.',
                icon: TrendingDown
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

      {/* Content + Veelgemaakte fout */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Wat het oplevert</h2>
              <ul className="space-y-8">
                {[
                  'Directe besparing op transportkosten en piekboetes',
                  'Uitstel of voorkomen van dure netverzwaring',
                  'Lagere tariefklasse bij de netbeheerder',
                  'Extra netruimte voor laden, productie of uitbreiding'
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl text-slate-600 font-medium leading-relaxed italic">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 md:mt-24">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Wat wij leveren</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Kwartierdata-analyse',
                    'Dimensionering batterij',
                    'EMS-sturing met harde grenzen',
                    'Inbedrijfstelling & Optimalisatie'
                  ].map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1} direction="up">
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-secondary hover:border-primary/20 transition-colors">
                        {item}
                      </div>
                    </FadeIn>
                  ))}
                </div>
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
                  &quot;Meer vermogen inkopen.&quot;
                </p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  Je betaalt voor capaciteit die je 98% van de tijd niet nodig hebt. Peak shaving lost dat structureel op met een batterij die alleen inspringt op het moment dat het telt.
                </p>
                <Link
                  href="/contact?type=peak-shaving"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Stuur jouw kwartierdata <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Wat kost jouw piek <span className="italic text-primary">werkelijk</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Stuur jouw kwartierdata, wij berekenen het besparingspotentieel. Geen gokwerk, maar een onderbouwde businesscase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=peak-shaving"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Bereken besparingspotentieel <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
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
