'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BatteryWarning, Home, ArrowRight, Zap, Search } from 'lucide-react'

/**
 * 404 Not Found Pagina
 * 
 * Komische 404 die past bij de directe, no-nonsense tone van CAPAXX Energy
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-slate-200 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Battery Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 bg-primary/10 rounded-3xl flex items-center justify-center"
              >
                <BatteryWarning className="w-20 h-20 text-primary" />
              </motion.div>
              
              {/* Sparks animation */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    x: [0, (i - 1) * 30, (i - 1) * 50],
                    y: [0, -20 - i * 10, -40 - i * 15]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute top-4 left-1/2 w-2 h-2 bg-primary rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-black text-secondary mb-8 leading-none">
              404
            </h1>
            
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Hier zit geen <span className="text-primary italic">energie</span>.
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Deze pagina bestaat niet. Net als gratis netcongestie-oplossingen. 
              Maar wij hebben wel echte oplossingen voor je.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { 
                  title: 'Zonnepanelen',
                  href: '/oplossingen/zonnepanelen',
                  icon: Zap,
                  color: 'from-orange-500 to-yellow-500'
                },
                { 
                  title: 'Energieopslag',
                  href: '/oplossingen/energieopslag',
                  icon: BatteryWarning,
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  title: 'Laadinfra',
                  href: '/oplossingen/laadinfra',
                  icon: Zap,
                  color: 'from-emerald-500 to-green-500'
                }
              ].map((solution, i) => (
                <motion.div
                  key={solution.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Link
                    href={solution.href}
                    className="block bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{solution.title}</h3>
                    <div className="flex items-center text-sm text-primary font-bold">
                      Bekijk <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="group inline-flex items-center px-10 py-5 bg-secondary text-white font-black rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-xl"
              >
                <Home className="w-5 h-5 mr-3" />
                Terug naar home
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center px-10 py-5 bg-primary text-white font-black rounded-2xl text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20"
              >
                <Search className="w-5 h-5 mr-3" />
                Zoek advies
              </Link>
            </div>
          </motion.div>

          {/* Fun Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-400 italic"
          >
            <p className="text-sm">
              Tip: Als je hier bent beland via een oude link, laat het ons weten. 
              Wij houden van data, ook over kapotte links.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
