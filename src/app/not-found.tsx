'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BatteryWarning,
  Home,
  ArrowRight,
  Zap,
  Sun,
  ShieldCheck,
  Network,
  BookOpen,
  BarChart3,
} from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
              <BatteryWarning className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-secondary mb-4 leading-none tracking-tight">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-black text-secondary mb-3">
              Hier zit geen <span className="text-primary italic">energie.</span>
            </h2>
            <p className="text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
              Deze pagina bestaat niet (meer). Misschien vind je wat je zoekt
              via een van de onderstaande links.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10"
          >
            {[
              { title: 'Oplossingen', href: '/oplossingen', icon: Zap },
              { title: 'Netcongestie', href: '/netcongestie', icon: Network },
              { title: 'Advies', href: '/advies', icon: ShieldCheck },
              { title: 'Zonnepanelen', href: '/oplossingen/zonnepanelen', icon: Sun },
              { title: 'Kennisbank', href: '/kennisbank', icon: BookOpen },
              { title: 'Energieprijzen', href: '/energieprijzen', icon: BarChart3 },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 hover:shadow-md transition-all group"
              >
                <link.icon className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                  {link.title}
                </span>
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-white font-black rounded-xl hover:bg-slate-800 transition-colors text-sm"
            >
              <Home className="w-4 h-4" />
              Terug naar home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-black rounded-xl hover:bg-accent transition-colors text-sm"
            >
              Neem contact op
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs text-slate-300"
          >
            Als je hier via een oude link bent beland, laat het ons weten.
          </motion.p>

        </div>
      </div>
    </div>
  )
}
