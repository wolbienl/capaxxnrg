'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Camera, BarChart3 } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export default function CasesPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary rounded-full blur-[120px]" 
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-tight mb-6 md:mb-8">
              Cases in de <span className="text-primary italic">maak</span>.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto text-balance">
              We zijn druk bezig met het documenteren van onze laatste projecten. Binnenkort delen we hier concrete resultaten, cijfers en verhalen uit de praktijk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-slate-100 text-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl -ml-12 -mb-12" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-3xl text-primary mb-8">
                    <FileText className="w-10 h-10" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-6 tracking-tight">
                    Wat kun je verwachten?
                  </h2>
                  
                  <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Onze cases laten zien hoe commercieel vastgoed profiteert van geïntegreerde energie-oplossingen. Van situatie tot resultaat, met concrete cijfers.
                  </p>

                  {/* What's coming */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        icon: BarChart3,
                        title: 'Concrete cijfers',
                        desc: 'ROI, besparingen en terugverdientijden'
                      },
                      {
                        icon: Camera,
                        title: 'Projectbeelden',
                        desc: 'Van installatie tot eindresultaat'
                      },
                      {
                        icon: FileText,
                        title: 'Volledige verhalen',
                        desc: 'Uitdaging, aanpak en oplossing'
                      }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-slate-100"
                      >
                        <item.icon className="w-8 h-8 text-primary mb-4 mx-auto" />
                        <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-slate-400 text-sm italic">
                    Wil je alvast weten wat wij voor jouw pand kunnen betekenen?
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white text-center rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              Liever direct in gesprek?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto">
              We vertellen je graag persoonlijk over onze projecten en rekenen direct jouw scenario door.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Plan een kennismaking <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
