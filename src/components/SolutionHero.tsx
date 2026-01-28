'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, LucideIcon } from 'lucide-react'

interface SolutionHeroProps {
  icon: LucideIcon
  title: string
  titleHighlight: string
  description: string
  ctaText: string
  ctaHref: string
  backgroundImage?: string
  showScrollIndicator?: boolean
}

export default function SolutionHero({
  icon: Icon,
  title,
  titleHighlight,
  description,
  ctaText,
  ctaHref,
  backgroundImage,
  showScrollIndicator = true
}: SolutionHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4" />
        {backgroundImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-1/2 h-full"
          >
            <Image
              src={backgroundImage}
              alt={title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
              <Icon className="w-5 h-5" />
              <span className="uppercase tracking-widest text-xs">Oplossing</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
              {title} <br />
              <span className="text-primary italic">{titleHighlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-2xl text-balance">
              {description}
            </p>
            
<Link
                              href={ctaHref}
                              className="inline-flex items-center px-6 py-4 md:px-10 md:py-5 bg-secondary text-white font-black rounded-2xl text-base md:text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200"
                            >
              {ctaText} <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full p-1 cursor-pointer hover:border-primary transition-colors"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
