'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Sun, Battery, EvCharger } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const cases = [
  {
    title: 'Piekreductie door Slimme Opslag',
    sector: 'Logistiek',
    situation: 'Netcongestie verhinderde uitbreiding van het laadpark voor elektrische trucks.',
    goal: 'Verhogen van de laadcapaciteit zonder verzwaring van de hoofdaansluiting.',
    solution: 'Batterijopslag (300kWh) in combinatie met een EMS voor peak shaving.',
    results: {
      peak: '40% verlaging',
      charging: '2x meer laders',
      co2: '15 ton p.j.'
    },
    tags: ['Batterij', 'EMS', 'Logistiek'],
    icon: Battery,
    image: '/images/storage-outdoor.avif'
  },
  {
    title: 'Solar Project Rendement',
    sector: 'Commercieel',
    situation: 'Een groot distributiecentrum wil de energiekosten verlagen en verduurzamen.',
    goal: 'Groene stroom en labelverbetering.',
    solution: 'Grootschalig PV-systeem met 2.500 panelen en EMS-integratie.',
    results: {
      kwh: '1.2M kWh',
      roi: '4.2 jaar',
      label: 'Naar Label A'
    },
    tags: ['Zonnepanelen', 'EMS', 'Vastgoed'],
    icon: Sun,
    image: '/images/solar-commercial.jpg'
  }
]

export default function CasesPage() {
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
              <span className="text-primary italic">Impact</span> in cijfers.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto italic text-balance">
              Realistische scenario's voor commercieel vastgoed. Concrete cijfers die laten zien wat er gebeurt als je data, techniek en sturing combineert.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-40">
            {cases.map((project, i) => (
              <FadeIn key={i} direction="up" className="group">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  <div className="aspect-video bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-800 group-hover:border-primary/30 transition-colors">
                     <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
                     />
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                     <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
                        <project.icon className="w-24 h-24 text-white/10 absolute mb-12" />
                        <div className="relative z-10 text-center">
                           <div className="text-primary font-black text-7xl mb-4 tracking-tighter">{Object.values(project.results)[0]}</div>
                           <div className="text-slate-300 font-black uppercase tracking-[0.3em] text-sm">{Object.keys(project.results)[0]}</div>
                        </div>
                     </div>
                  </div>
                  
                  <div>
                    <div className="inline-block px-4 py-1 rounded-lg bg-orange-50 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
                      {project.sector}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8 leading-tight tracking-tight group-hover:text-primary transition-colors italic">
                      {project.title}
                    </h2>
                    
                    <div className="space-y-10 mb-12">
                      <p className="text-2xl text-slate-500 italic leading-relaxed border-l-4 border-primary/20 pl-8">
                        &quot;{project.situation}&quot;
                      </p>
                      <div className="grid sm:grid-cols-2 gap-12">
                        <div className="space-y-4">
                          <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">De Oplossing</h4>
                          <p className="text-lg font-bold text-secondary leading-relaxed">{project.solution}</p>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em]">Het Doel</h4>
                          <p className="text-lg font-bold text-secondary leading-relaxed">{project.goal}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                       {Object.entries(project.results).map(([key, val], idx) => (
                         <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all">
                            <div className="text-primary font-black text-2xl mb-1">{val}</div>
                            <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">{key}</div>
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-secondary text-white text-center rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
             <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Klaar voor jouw scenario?</h2>
             <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Start jouw scan <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
           </FadeIn>
        </div>
      </section>
    </div>
  )
}
