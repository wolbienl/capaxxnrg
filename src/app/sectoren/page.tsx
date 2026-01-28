'use client'

import { motion } from 'framer-motion'
import { Building2, ShoppingBag, Factory, LayoutGrid, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const sectors = [
  {
    title: 'Kantoren en multi-tenant complexen',
    icon: Building2,
    challenges: ['Hoge piekbelasting door HVAC', 'Diverse huurders met verschillende behoeften', 'Energielabel verplichtingen'],
    approach: ['Gedetailleerde verbruiksanalyse', 'Slimme laadinfra voor medewerkers', 'EMS voor kostenverdeling'],
    case: 'Piekreductie van 30% bij een verzamelgebouw met HVAC-optimalisatie.'
  },
  {
    title: 'Retail en parkeerrijke locaties',
    icon: ShoppingBag,
    challenges: ['Grote parkeercapaciteit onbenut', 'Korte verblijftijd bezoekers', 'Zichtbaarheid van duurzaamheid'],
    approach: ['Solar carports op parkeerterrein', 'Snel- en semi-snelladers', 'Zonnepanelen op platte daken'],
    case: 'Solar carport op parkeerterrein: 200 MWh per jaar extra opwek.'
  },
  {
    title: 'Logistiek en productie',
    icon: Factory,
    challenges: ['Enorm dakoppervlak', 'Zware aansluitingen nodig voor machines', 'Elektrificatie van wagenpark'],
    approach: ['Grootschalige PV-installaties', 'Batterijopslag voor netcongestie', 'Load balancing voor laadperrons'],
    case: 'Zelfverbruik van 40% naar 85% met batterijopslag en slimme sturing.'
  },
  {
    title: 'Bedrijventerreinen',
    icon: LayoutGrid,
    challenges: ['Netcongestie op het hele terrein', 'Gezamenlijke opwek en verbruik', 'Complex eigenaarschap'],
    approach: ['Micro-grid oplossingen', 'Gedeelde batterijcapaciteit', 'Collectief EMS'],
    case: 'Energie-hub voor 12 mkb-bedrijven op bedrijventerrein.'
  }
]

export default function SectorenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-secondary leading-tight mb-8">
              Geen one-size-fits-all. <br />Wel <span className="text-primary italic">maatwerk</span>.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto italic text-balance">
              Elke sector heeft eigen uitdagingen en kansen. Wij snappen de nuances van commercieel vastgoed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-32">
            {sectors.map((sector, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-24 items-start">
                <FadeIn direction={i % 2 === 1 ? 'left' : 'right'} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 bg-orange-50 rounded-[2rem] flex items-center justify-center text-primary mb-10 shadow-sm border border-orange-100">
                    <sector.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-secondary mb-10 tracking-tight leading-tight">{sector.title}</h2>
                  
                  <div className="grid sm:grid-cols-2 gap-10">
                    <div className="space-y-6">
                      <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">De Uitdaging</h4>
                      <ul className="space-y-4">
                        {sector.challenges.map((c, idx) => (
                          <li key={idx} className="flex items-start text-slate-500 text-lg italic leading-relaxed">
                            <span className="text-primary mr-3 font-bold">•</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">Onze Aanpak</h4>
                      <ul className="space-y-4">
                        {sector.approach.map((a, idx) => (
                          <li key={idx} className="flex items-start text-secondary text-lg font-bold leading-relaxed">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0 mt-1" /> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction={i % 2 === 1 ? 'right' : 'left'} className={`bg-slate-50 rounded-[3rem] p-16 border border-slate-100 flex flex-col justify-center h-full relative overflow-hidden group hover:bg-white hover:shadow-2xl transition-all ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <sector.icon className="w-48 h-48" />
                   </div>
                   <h4 className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-8 relative z-10">Resultaat</h4>
                   <p className="text-3xl font-black text-secondary mb-8 leading-[1.2] tracking-tight relative z-10 italic">
                     &quot;{sector.case}&quot;
                   </p>
                   <div className="w-16 h-1.5 bg-primary relative z-10 rounded-full" />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white rounded-[4rem] mx-4 md:mx-10 mb-20 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <FadeIn>
             <h2 className="text-4xl md:text-6xl font-black mb-10">Benieuwd naar de <span className="text-primary italic">waarde</span> voor jouw pand?</h2>
             <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-primary/20"
              >
                Plan een kennismaking <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
           </FadeIn>
        </div>
      </section>
    </div>
  )
}
