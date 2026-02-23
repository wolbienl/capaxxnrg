'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertTriangle, Route, Building2, Sun, Factory } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const iconMap = {
  Building2,
  Sun,
  Factory,
} as const

type IconName = keyof typeof iconMap

interface PijnpuntItem {
  title: string
  description: string
}

interface ComplexiteitItem {
  text: string
}

interface OplossingsItem {
  title: string
  description: string
  href: string
}

interface DoelgroepPageProps {
  iconName: IconName
  label: string
  title: string
  titleHighlight: string
  subtitle: string
  heroImage: string
  heroImageAlt: string
  pijnpunten: PijnpuntItem[]
  complexiteitIntro: string
  complexiteit: ComplexiteitItem[]
  oplossingsIntro: string
  oplossingen: OplossingsItem[]
  closingText?: string
}

export default function DoelgroepPage({
  iconName,
  label,
  title,
  titleHighlight,
  subtitle,
  heroImage,
  heroImageAlt,
  pijnpunten,
  complexiteitIntro,
  complexiteit,
  oplossingsIntro,
  oplossingen,
  closingText,
}: DoelgroepPageProps) {
  const Icon = iconMap[iconName]

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/2 h-full"
          >
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <Icon className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">{label}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                {title} <span className="text-primary italic">{titleHighlight}</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-2xl text-balance">
                {subtitle}
              </p>

              <Link
                href="/contact?type=quickscan"
                className="inline-flex items-center px-8 py-4 bg-secondary text-white font-black rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group"
              >
                Gratis quickscan aanvragen <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pijnpunten */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Het probleem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight">
              Herkenbaar?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pijnpunten.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-50 border-2 border-slate-100 rounded-[2rem] p-8 md:p-10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-6">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Complexiteit */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
                Waarom het <span className="text-primary italic">complex</span> is.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
                {complexiteitIntro}
              </p>
            </FadeIn>

            <div className="space-y-4">
              {complexiteit.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-secondary leading-relaxed">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Oplossingsroute */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
              <Route className="w-4 h-4" />
              <span>De route</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary tracking-tight mb-6">
              Jouw oplossingsroute.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {oplossingsIntro}
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {oplossingen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                      Lees meer <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {closingText && (
            <FadeIn delay={0.3} className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-slate-400 italic leading-relaxed">{closingText}</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Referentiecase placeholder */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="bg-white rounded-[2rem] p-12 border-2 border-dashed border-slate-200">
                <p className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">Referentiecase</p>
                <p className="text-xl text-slate-400 italic">Binnenkort: een concrete case met cijfers uit de praktijk.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
            </div>

            <FadeIn className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-10 leading-tight">
                Geen dikke praat, <br /><span className="text-primary italic">wel resultaat.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-14 leading-relaxed">
                Wij rekenen het direct door. Gratis quickscan, binnen een week een one-pager met jouw situatie en opties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/contact?type=quickscan"
                  className="px-8 py-4 md:px-12 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20"
                >
                  Gratis quickscan aanvragen
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 md:px-12 md:py-5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
                >
                  Bel direct: +31 (0)53 206 5066
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
