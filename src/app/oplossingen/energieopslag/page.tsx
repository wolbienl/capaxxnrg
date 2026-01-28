'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Battery, CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function EnergieopslagPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Battery}
        title="Energieopslag die"
        titleHighlight="werkt."
        description="Voor pieken, netcongestie en het beter benutten van jouw eigen opwek. Maak jouw aansluiting weer bruikbaar."
        ctaText="Bereken jouw potentieel"
        ctaHref="/contact?type=peak-shaving"
        backgroundImage="/images/storage-hero.png"
      />

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-10 md:mb-16 tracking-tight text-center">Use cases voor opslag</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Peak shaving',
                desc: 'Pieken afvlakken en capaciteit vrijspelen.'
              },
              {
                title: 'Zelfverbruik verhogen',
                desc: 'Zonne-energie bewaren voor later gebruik.'
              },
              {
                title: 'Load balancing',
                desc: 'Laden en processen laten draaien zonder netproblemen.'
              },
              {
                title: 'Flexibiliteit',
                desc: 'Voorbereid op dynamiek in prijzen en vraag.'
              }
            ].map((useCase, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{useCase.title}</h3>
                  <p className="text-slate-500 leading-relaxed italic">{useCase.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] mx-4 md:mx-10 mb-10 md:mb-20 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/storage-outdoor.avif"
            alt="Outdoor Storage Location"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 tracking-tight">Wat wij leveren</h2>
              <ul className="space-y-8">
                {[
                  'Meting en analyse van kwartierdata',
                  'Dimensionering batterij en beveiliging',
                  'EMS-sturing met harde grenzen',
                  'Inbedrijfstelling en optimalisatie'
                ].map((item, i) => (
                  <li key={item} className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mr-4">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xl text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" className="space-y-8">
              <div className="aspect-video relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/storage-unit.avif"
                  alt="Storage Unit Detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 leading-tight">Data is de basis.</h3>
                <p className="text-slate-400 mb-8 md:mb-10 text-base md:text-lg leading-relaxed italic">
                  Stuur jouw kwartierdata, wij geven je een onderbouwd scenario terug. Geen gokwerk, maar harde businesscase.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-4 md:px-10 md:py-5 bg-primary text-white font-black rounded-2xl hover:bg-accent transition-all shadow-xl shadow-primary/20 text-base md:text-lg"
                >
                  Data insturen <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
