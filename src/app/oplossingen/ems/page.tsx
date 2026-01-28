'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BarChart3, CheckCircle2, ArrowRight, Eye, Settings, TrendingDown, ClipboardList } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

export default function EMSPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={BarChart3}
        title="Regie begint bij"
        titleHighlight="EMS."
        description="Realtime inzicht en automatische aansturing van opwek, opslag, laden en verbruik. Wij brengen de regie terug in jouw aansluiting."
        ctaText="Vraag een demo aan"
        ctaHref="/contact"
      />

      {/* Benefits Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">Wat het oplevert</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Piekreductie',
                desc: 'Minder verrassingen op jouw factuur door slimme afvlakking.',
                icon: TrendingDown
              },
              {
                title: 'Realtime Inzicht',
                desc: 'Data per pand, huurder of specifieke installatie.',
                icon: Eye
              },
              {
                title: 'Harde KPI’s',
                desc: 'Piek, zelfverbruik en kosten direct inzichtelijk.',
                icon: BarChart3
              },
              {
                title: 'Compliance',
                desc: 'De basis voor ESG-rapportages en labelverbetering.',
                icon: ClipboardList
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 bg-white group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-8 transition-colors">
                    <item.icon className="w-8 h-8" />
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
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Onze EMS Aanpak</h2>
              <ul className="space-y-10">
                {[
                  { title: 'Inmeten & Data', desc: 'Koppelingen met meters, omvormers en batterijen.' },
                  { title: 'Stuurstrategie', desc: 'Prioriteiten en grenzen instellen op basis van jouw doelen.' },
                  { title: 'Dashboards', desc: 'Helder inzicht en automatische alerts via web en app.' },
                  { title: 'Optimalisatie', desc: 'Maandelijks ritme om prestaties continu te verbeteren.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-6 mt-1">
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
            <FadeIn direction="left">
              <div className="aspect-video bg-secondary rounded-[3rem] p-1 shadow-2xl overflow-hidden group">
                <div className="w-full h-full bg-slate-900 rounded-[2.9rem] p-8 flex flex-col relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                   <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                      <div className="flex items-center space-x-2">
                         <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500" />
                         <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono tracking-[0.3em] uppercase">Status: Connected</span>
                   </div>
                   <div className="flex-grow grid grid-cols-2 gap-6 relative z-10">
                      <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                        <div className="text-[10px] text-primary font-bold uppercase tracking-widest mb-2">Huidige Piek</div>
                        <div className="text-4xl font-black text-white tracking-tighter">142 kW</div>
                      </div>
                      <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                        <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest mb-2">Zelfverbruik</div>
                        <div className="text-4xl font-black text-white tracking-tighter">84%</div>
                      </div>
                      <div className="col-span-2 border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                        <div className="h-full w-full flex items-end space-x-1.5 pt-4">
                           {[40, 65, 45, 80, 95, 60, 45, 55, 70, 85, 80, 95].map((h, i) => (
                             <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="flex-grow bg-primary/20 hover:bg-primary transition-all rounded-t-sm" 
                             />
                           ))}
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-5xl mx-auto text-center p-8 md:p-12 lg:p-16 bg-secondary rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tight">Stop met gokken op data.</h2>
             <p className="text-lg md:text-xl text-slate-400 mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed italic">
                Laat ons zien hoe we jouw assets kunnen verbinden en sturen voor maximaal resultaat.
             </p>
             <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl hover:bg-accent transition-all shadow-2xl shadow-black/20 text-base md:text-xl"
              >
                Vraag een demo aan <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
