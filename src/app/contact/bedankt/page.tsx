'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Home, Phone } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export default function BedanktPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12"
              >
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-tight mb-6 md:mb-8">
                Bedankt voor je <span className="text-primary italic">bericht!</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-12 leading-relaxed italic">
                We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-slate-50 rounded-[2rem] p-6 md:p-8 border border-slate-100 mb-10 md:mb-12 max-w-xl mx-auto">
                <p className="text-slate-600 font-medium">
                  Heb je een dringende vraag? Bel ons direct op{' '}
                  <a href="tel:+31532065066" className="text-primary font-bold hover:underline">
                    +31 (0)53 206 5066
                  </a>
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-5 bg-secondary text-white font-black rounded-[1.5rem] text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group active:scale-[0.98]"
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Naar homepage</span>
                </Link>
                <Link
                  href="/oplossingen"
                  className="inline-flex items-center justify-center px-8 py-5 bg-white text-secondary font-black rounded-[1.5rem] text-lg hover:bg-slate-50 transition-all border-2 border-slate-200 group active:scale-[0.98]"
                >
                  <span>Bekijk oplossingen</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
