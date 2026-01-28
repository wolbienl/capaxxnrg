'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Car,
  LayoutGrid
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function SolarCarportsPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Car}
        title="Solar carports."
        titleHighlight="Rendement op het asfalt."
        description="Maak dubbel gebruik van je terrein. Opwek en laden op één plek, met een moderne uitstraling."
        ctaText="Check haalbaarheid"
        ctaHref="/contact"
        backgroundImage="/images/solar-carport.webp"
      />

      {/* Ideal For Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary tracking-tight mb-4">Ideaal voor</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Retail & Leisure',
                desc: 'Veel parkeervakken die nu alleen maar ruimte kosten.',
                icon: LayoutGrid
              },
              {
                title: 'Kantoren',
                desc: 'Hoge laadbehoefte en vaak beperkte bruikbare dakruimte.',
                icon: LayoutGrid
              },
              {
                title: 'Logistiek',
                desc: 'Bedrijventerreinen met grote plannen voor elektrificatie.',
                icon: LayoutGrid
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 text-center hover:bg-white hover:shadow-2xl transition-all h-full group">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-primary shadow-sm mb-8 mx-auto group-hover:scale-110 transition-transform">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 italic leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver Section */}
      <section className="py-32 bg-secondary text-white rounded-[4rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">Wat wij leveren</h2>
              <ul className="space-y-10">
                {[
                  'Ontwerp met routing en fundering in beeld',
                  'Koppeling met laadinfra en EMS',
                  'Fasering voor minimale verstoring'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mr-6 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-2xl text-slate-300 font-medium italic">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="left" className="bg-white/5 backdrop-blur-xl rounded-[3.5rem] p-12 border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-black mb-8 leading-tight">Visitekaartje voor je pand</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed italic">
                Een solar carport is meer dan opwek. Het is een energiecentrale en een modern visitekaartje voor huurders en bezoekers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-primary text-white font-black rounded-2xl hover:bg-accent transition-all shadow-xl shadow-primary/20"
              >
                Vraag scan aan <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
