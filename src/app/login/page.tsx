'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Lock, Mail, ArrowRight, BarChart3, FileText, Bell, TrendingUp, Shield, Eye, EyeOff } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const portalFeatures = [
  {
    icon: BarChart3,
    title: 'Realtime Dashboard',
    description: 'Bekijk live opwek, verbruik en opslag-data'
  },
  {
    icon: FileText,
    title: 'Rapportages',
    description: 'Download maandelijkse performance rapporten'
  },
  {
    icon: TrendingUp,
    title: 'Optimalisatie',
    description: 'Ontvang data-gedreven advies voor betere ROI'
  },
  {
    icon: Bell,
    title: 'Notificaties',
    description: 'Alerts bij afwijkingen en onderhoudsmomenten'
  }
]

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gefeinsd - geen echte functionaliteit
  }

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero Section met gradient */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-primary rounded-full blur-[120px]" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-blue-500 rounded-full blur-[120px]" 
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
            {/* Left Side - Visual & Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <FadeIn>
                <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold mb-6 tracking-widest uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Klantportaal
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-8">
                  Welkom bij je <span className="text-primary italic">energie</span> dashboard.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed max-w-xl">
                  Log in op jouw persoonlijke portaal voor realtime inzicht in opwek, verbruik en prestaties van al jouw installaties.
                </p>
              </FadeIn>

              {/* Portal Features */}
              <div className="space-y-4">
                {portalFeatures.map((feature, i) => (
                  <FadeIn key={i} delay={0.2 + i * 0.1}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-slate-50 transition-all group cursor-pointer"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0"
                      >
                        <feature.icon className="w-5 h-5" />
                      </motion.div>
                      <div className="pt-1">
                        <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>

              {/* Security Badge */}
              <FadeIn delay={0.6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 flex items-center space-x-3 text-slate-400"
                >
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Beveiligde verbinding met 256-bit encryptie</span>
                </motion.div>
              </FadeIn>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-secondary mb-3 tracking-tight">
                      Inloggen
                    </h2>
                    <p className="text-slate-500 mb-10 text-sm">
                      Geen account? <Link href="/contact" className="text-primary font-bold hover:underline">Neem contact op</Link>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Email Input */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                          E-mailadres
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                            placeholder="naam@bedrijf.nl"
                            required
                          />
                        </div>
                      </div>

                      {/* Password Input */}
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">
                          Wachtwoord
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-14 pr-14 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                            placeholder="••••••••"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>

                      {/* Remember & Forgot */}
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary focus:ring-offset-0"
                          />
                          <span className="text-slate-600 group-hover:text-secondary transition-colors font-medium">
                            Onthoud mij
                          </span>
                        </label>
                        <Link
                          href="/contact"
                          className="text-primary font-bold hover:underline"
                        >
                          Wachtwoord vergeten?
                        </Link>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-secondary text-white font-black rounded-[1.5rem] text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Inloggen op portaal
                          <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-primary"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </form>
                  </div>
                </div>
              </FadeIn>

              {/* Extra Info Card */}
              <FadeIn delay={0.5}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="mt-8 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-black mb-3">Nog geen toegang?</h3>
                    <p className="text-white/90 mb-6 text-sm leading-relaxed">
                      Vraag een energiescan aan en krijg direct inzicht in jouw mogelijkheden. 
                      Na realisatie krijg je automatisch toegang tot het portaal.
                    </p>
                    <Link
                      href="/contact?type=energiescan"
                      className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-50 transition-all text-sm"
                    >
                      Start nu
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
