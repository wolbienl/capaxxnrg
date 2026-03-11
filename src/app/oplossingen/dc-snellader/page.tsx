'use client'

import Link from 'next/link'
import { Zap, CheckCircle2, ArrowRight, AlertTriangle, Battery, BarChart3, ShieldCheck } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function DCSnelladerPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Zap}
        title="Snelladen zonder"
        titleHighlight="netstress."
        description="DC-snelladers van 50 tot 400 kW, slim gestuurd op jouw beschikbare netcapaciteit. Zodat laden niet ten koste gaat van je operatie."
        ctaText="Bespreek jouw snellaad-scenario"
        ctaHref="/contact?type=dc-snellader"
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'Wat wij doen', url: '/wat-wij-doen' }, { name: 'Oplossingen', url: '/oplossingen' }, { name: 'DC-Snellader' }]}
      />

      {/* Wanneer het speelt */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-16 tracking-tight text-center">Wanneer het speelt</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Logistiek wagenpark',
                desc: 'Elektrische bestelbussen en trucks die snel weer de weg op moeten. Vermogens tot 400 kW.',
                icon: Zap
              },
              {
                title: 'Bezoekers & retail',
                desc: 'Klanten en gasten verwachten snelladen. Een laadpunt is een visitekaartje voor jouw locatie.',
                icon: ShieldCheck
              },
              {
                title: 'Medewerkers & kantoor',
                desc: 'Werknemers laden tijdens kantooruren. Slim gestuurd zodat het past binnen jouw netcapaciteit.',
                icon: BarChart3
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

      {/* Waar wij op sturen */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Waar wij op sturen</h2>
              <ul className="space-y-10">
                {[
                  { title: 'Dynamic load balancing', desc: 'Laadvermogen automatisch verdelen op basis van beschikbare netcapaciteit.' },
                  { title: 'Batterijbuffer', desc: 'Snelladen zonder piekbelasting op het net. De batterij vangt de klap op.' },
                  { title: 'V2G-ready', desc: 'Toekomstbestendig: voertuigen worden onderdeel van jouw energiesysteem.' },
                  { title: 'Koppeling met opwek', desc: 'Laden op eigen zonnestroom. Maximale zelfconsumptie, minimale netimpact.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-lg text-slate-500 italic leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
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
                  &quot;Gewoon een dikke lader neerzetten.&quot;
                </p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  Zonder sturing overbelast je jouw aansluiting. Slim laden begint bij de capaciteit die er is, niet bij de lader die je wilt.
                </p>
                <Link
                  href="/oplossingen/laadinfra"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Meer over laadinfra <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Subsidie blok */}
              <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xl">
                <h3 className="text-2xl font-bold text-secondary mb-6 tracking-tight">Subsidies</h3>
                <ul className="space-y-4">
                  {[
                    { label: 'SPrILa', desc: 'Subsidie voor advies en aanleg van private laadinfrastructuur.' },
                    { label: 'MIA/Vamil', desc: 'Fiscaal voordeel op milieu-investeringen in laadpunten.' },
                    { label: 'EIA 2026', desc: 'Tot 40% investeringsaftrek op energiebesparende maatregelen.' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-4 shrink-0" />
                      <div>
                        <span className="font-bold text-secondary">{item.label}</span>
                        <span className="text-slate-500"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wat wij leveren */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight text-center">Wat wij leveren</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'Capaciteitsberekening',
              'Laadplan & Configuratie',
              'Integratie met EMS & Batterij',
              'Beheer & Facturatie'
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 font-bold text-secondary hover:border-primary/20 transition-colors text-center">
                  {item}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Klaar voor <span className="italic text-primary">snelladen</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wij berekenen wat past binnen jouw netcapaciteit en welke subsidies van toepassing zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=dc-snellader"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Start jouw snellaadplan <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
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
