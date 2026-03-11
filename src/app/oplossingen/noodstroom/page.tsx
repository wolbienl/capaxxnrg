'use client'

import Link from 'next/link'
import { ShieldCheck, CheckCircle2, ArrowRight, AlertTriangle, Zap, Timer, Volume2, Leaf } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function NoodstroomPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={ShieldCheck}
        title="Productie staat niet"
        titleHighlight="stil."
        description="Bij netuitval draait jouw batterij door. Geen diesel, geen vertraging, geen schade. Noodstroom die je ook dagelijks inzet."
        ctaText="Bespreek jouw noodstroom-scenario"
        ctaHref="/contact?type=noodstroom"
        breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'Wat wij doen', url: '/wat-wij-doen' }, { name: 'Oplossingen', url: '/oplossingen' }, { name: 'Noodstroom' }]}
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
                title: 'Productie',
                desc: 'Één minuut stilstand kost meer dan een maand batterijhuur.',
                icon: Zap
              },
              {
                title: 'Koelinstallaties',
                desc: 'Temperatuuruitval betekent productverlies en compliance-risico.',
                icon: Timer
              },
              {
                title: 'Dataruimtes',
                desc: 'Servers en netwerk mogen niet uitvallen. Elke milliseconde telt.',
                icon: ShieldCheck
              },
              {
                title: 'Logistiek',
                desc: 'Sorteerlijnen, laadpunten en WMS-systemen die niet mogen stoppen.',
                icon: Zap
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

      {/* Batterij vs Diesel */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Batterij vs <span className="text-primary italic">diesel</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Reactietijd',
                batterij: '0 ms',
                diesel: '10-15 sec',
                icon: Timer
              },
              {
                title: 'Emissies',
                batterij: 'Geen',
                diesel: 'CO₂ + fijnstof',
                icon: Leaf
              },
              {
                title: 'Onderhoud',
                batterij: 'Minimaal',
                diesel: 'Maandelijks',
                icon: CheckCircle2
              },
              {
                title: 'Geluid',
                batterij: 'Stil',
                diesel: 'Overlast',
                icon: Volume2
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all h-full text-center">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-6 tracking-tight">{item.title}</h3>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 rounded-xl px-4 py-3">
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Batterij</div>
                      <div className="text-lg font-black text-secondary">{item.batterij}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl px-4 py-3">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Diesel</div>
                      <div className="text-lg font-black text-slate-400">{item.diesel}</div>
                    </div>
                  </div>
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
                  'Risicoanalyse',
                  'Dimensionering UPS',
                  'Schakelschema',
                  'EMS-integratie',
                  'Test & Oplevering',
                  'Monitoring & Alerts'
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
                  &quot;Noodstroom als kostenpost zien.&quot;
                </p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  Combineer UPS met peak shaving en zelfconsumptie. Dan verdient je noodstroom zichzelf terug en is het geen verzekering die stilstaat.
                </p>
                <Link
                  href="/oplossingen/peak-shaving"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Meer over peak shaving <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
              Wat kost <span className="italic text-primary">één uur</span> stilstand?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wij rekenen het door voor jouw locatie. Noodstroom die ook dagelijks rendement oplevert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=noodstroom"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Reken het door <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
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
