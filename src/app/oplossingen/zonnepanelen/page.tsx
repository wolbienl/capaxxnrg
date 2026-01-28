'use client'

import Link from 'next/link'
import { Sun, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function ZonnepanelenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Sun}
        title="Zonnepanelen die"
        titleHighlight="renderen."
        description="We ontwerpen op basis van jouw dak, jouw verbruiksprofiel en jouw netruimte. Zodat opwek ook echt waarde oplevert."
        ctaText="Vraag een dakscan aan"
        ctaHref="/contact?type=dakscan"
        backgroundImage="/images/solar-commercial.jpg"
      />

      {/* Content Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Wanneer het werkt</h2>
              <ul className="space-y-8">
                {[
                  'Jouw verbruik overdag is substantieel, of je hebt opslag/EMS om te sturen',
                  'Je wilt grip op opbrengst, monitoring en onderhoud',
                  'Je wilt klaar zijn voor laden, warmtepompen of uitbreiding'
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
                    'Dakscan & Prognose',
                    'Constructie Ontwerp',
                    'Monitoring Software',
                    'Koppeling met EMS',
                    'Slimme Sturing',
                    'Prestatiegereedschap'
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
                  &quot;Alleen sturen op kWp.&quot;
                </p>
                <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                  kWp is mooi voor een folder. Jij wil sturen op kWh op het juiste moment, zelfverbruik en netimpact.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Reken het door voor jouw pand <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
