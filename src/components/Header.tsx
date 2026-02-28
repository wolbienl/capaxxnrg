'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sun, Battery, EvCharger, Car, BarChart3, ClipboardCheck, Award, Globe, TrendingUp, ArrowRight, Building2, Factory, Zap, Cable, Scale, Wrench, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import TransitionLink from './TransitionLink'

const solutions = [
  {
    title: 'Zonnepanelen',
    description: 'Maximale opbrengst op dak en terrein.',
    href: '/oplossingen/zonnepanelen',
    icon: Sun,
  },
  {
    title: 'Energieopslag',
    description: 'Peak shaving en zelfverbruik verhogen.',
    href: '/oplossingen/energieopslag',
    icon: Battery,
  },
  {
    title: 'Laadinfra',
    description: 'Slim laden met load balancing.',
    href: '/oplossingen/laadinfra',
    icon: EvCharger,
  },
  {
    title: 'Solar Carports',
    description: 'Dubbel gebruik van terrein, opwek en laden.',
    href: '/oplossingen/solar-carports',
    icon: Car,
  },
  {
    title: 'EMS',
    description: 'Realtime inzicht en automatische sturing.',
    href: '/oplossingen/ems',
    icon: BarChart3,
  },
]

const adviesItems = [
  {
    title: 'ESG',
    description: 'CSRD-conforme rapportages vanuit EMS-data.',
    href: '/advies/esg',
    icon: ClipboardCheck,
  },
  {
    title: 'BREEAM',
    description: 'Certificering en labelverbetering.',
    href: '/advies/breeam',
    icon: Award,
  },
  {
    title: 'Paris Proof',
    description: 'Toekomstbestendig vastgoed.',
    href: '/advies/paris-proof',
    icon: Globe,
  },
  {
    title: 'Energielabels',
    description: 'Van C naar A met meetbare ROI.',
    href: '/advies/energielabels',
    icon: TrendingUp,
  },
]

const netcongestieVoorWie = [
  {
    title: 'Vastgoed & bedrijventerreinen',
    description: 'Je terrein kan niet uitbreiden.',
    href: '/vastgoed',
    icon: Building2,
  },
  {
    title: 'Projectontwikkeling zon & wind',
    description: 'Je park krijgt geen aansluiting.',
    href: '/projectontwikkeling',
    icon: Sun,
  },
  {
    title: 'Industrie & grootverbruikers',
    description: 'Je elektrificatie kan niet door.',
    href: '/industrie',
    icon: Factory,
  },
]

const kennisbankItems = [
  {
    title: 'Cable pooling',
    description: 'Energiegemeenschappen en GTO\'s.',
    href: '/kennisbank/cable-pooling',
    icon: Cable,
  },
  {
    title: 'Transportrechten',
    description: 'Non-firm, TDTR en meer.',
    href: '/kennisbank/transportrechten',
    icon: Scale,
  },
  {
    title: 'Zelfaanleg',
    description: 'Artikel 3.39, drempel 2,3 MVA.',
    href: '/kennisbank/zelfaanleg',
    icon: Wrench,
  },
  {
    title: 'Energiewet 2026',
    description: 'Nieuwe spelregels sinds 1 jan.',
    href: '/kennisbank/energiewet-2026',
    icon: BookOpen,
  },
]

const navLinks = [
  { title: 'Cases', href: '/cases' },
  { title: 'Over ons', href: '/over-ons' },
]

type MegaMenu = 'watwedoen' | 'netcongestie' | null

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<MegaMenu>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMenuEnter = (menu: NonNullable<MegaMenu>) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenMegaMenu(menu)
  }

  const handleMenuLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenMegaMenu(null)
    }, 150)
  }
  
  const isHomepage = pathname === '/'
  const isTransparent = isHomepage && !isScrolled && !isOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isOpen || openMegaMenu
          ? "bg-white border-b border-transparent"
          : isTransparent 
            ? "bg-transparent border-b border-transparent" 
            : "bg-white/70 backdrop-blur-xl border-b border-slate-200/50"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <TransitionLink href="/" className="flex items-center space-x-2 group relative">
            <Image
              src="/images/logo-dark.svg"
              alt="CAPAXX ENERGY"
              width={180}
              height={45}
              className={cn(
                "h-10 w-auto transition-all duration-500 group-hover:scale-105",
                isTransparent ? "opacity-0 lg:opacity-100" : "opacity-100"
              )}
            />
            <Image
              src="/images/logo-light.svg"
              alt="CAPAXX ENERGY"
              width={180}
              height={45}
              className={cn(
                "h-10 w-auto transition-all duration-500 group-hover:scale-105 absolute inset-0 lg:opacity-0",
                isTransparent ? "opacity-100" : "opacity-0"
              )}
            />
          </TransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Wat wij doen Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('watwedoen')}
              onMouseLeave={handleMenuLeave}
            >
              <TransitionLink
                href="/wat-wij-doen"
                className="flex items-center space-x-1.5 text-secondary font-bold hover:text-primary transition-colors py-2"
              >
                <span>Wat wij doen</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 ease-in-out", openMegaMenu === 'watwedoen' && "rotate-180")} />
              </TransitionLink>
            </div>

            {/* Netcongestie Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('netcongestie')}
              onMouseLeave={handleMenuLeave}
            >
              <TransitionLink
                href="/netcongestie"
                className="flex items-center space-x-1.5 text-secondary font-bold hover:text-primary transition-colors py-2"
              >
                <span>Netcongestie</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 ease-in-out", openMegaMenu === 'netcongestie' && "rotate-180")} />
              </TransitionLink>
            </div>

            {navLinks.map((link) => (
              <TransitionLink
                key={link.title}
                href={link.href}
                className="text-secondary font-bold hover:text-primary transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </TransitionLink>
            ))}
          </div>

          {/* Full-Width Mega Menus */}
          <AnimatePresence>
            {openMegaMenu === 'watwedoen' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute top-full left-0 right-0"
                onMouseEnter={() => handleMenuEnter('watwedoen')}
                onMouseLeave={handleMenuLeave}
              >
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Oplossingen */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-3">Oplossingen</p>
                        <div className="space-y-1">
                          {solutions.map((solution) => (
                            <TransitionLink
                              key={solution.title}
                              href={solution.href}
                              className="flex items-start p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                              onClick={() => setOpenMegaMenu(null)}
                            >
                              <div className="p-2 rounded-xl bg-orange-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 mr-3 shrink-0">
                                <solution.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-bold text-secondary group-hover/item:text-primary transition-colors text-sm">{solution.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed italic">{solution.description}</p>
                              </div>
                            </TransitionLink>
                          ))}
                        </div>
                      </div>

                      {/* Advies */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-3">Advies</p>
                        <div className="space-y-1">
                          {adviesItems.map((item) => (
                            <TransitionLink
                              key={item.title}
                              href={item.href}
                              className="flex items-start p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                              onClick={() => setOpenMegaMenu(null)}
                            >
                              <div className="p-2 rounded-xl bg-orange-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 mr-3 shrink-0">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-bold text-secondary group-hover/item:text-primary transition-colors text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed italic">{item.description}</p>
                              </div>
                            </TransitionLink>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Banner */}
                    <div className="bg-gradient-to-r from-slate-50 to-orange-50/30 rounded-2xl p-4 flex items-center justify-between border-t border-slate-100 mt-4 pt-4">
                      <div>
                        <h3 className="text-sm font-bold text-secondary mb-1">Complete energie-integratie</h3>
                        <p className="text-xs text-slate-600">Al onze oplossingen en advies werken naadloos samen via één platform.</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <TransitionLink
                          href="/oplossingen"
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap"
                          onClick={() => setOpenMegaMenu(null)}
                        >
                          Alle oplossingen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </TransitionLink>
                        <TransitionLink
                          href="/advies"
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-100 text-secondary font-bold rounded-xl hover:bg-slate-200 transition-all text-sm whitespace-nowrap"
                          onClick={() => setOpenMegaMenu(null)}
                        >
                          Alle advies
                        </TransitionLink>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {openMegaMenu === 'netcongestie' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute top-full left-0 right-0"
                onMouseEnter={() => handleMenuEnter('netcongestie')}
                onMouseLeave={handleMenuLeave}
              >
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="container mx-auto px-4 md:px-6 py-6">
                    <div className="grid grid-cols-2 gap-8">
                      {/* Voor wie */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-3">Voor wie</p>
                        <div className="space-y-1">
                          {netcongestieVoorWie.map((item) => (
                            <TransitionLink
                              key={item.title}
                              href={item.href}
                              className="flex items-start p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                              onClick={() => setOpenMegaMenu(null)}
                            >
                              <div className="p-2 rounded-xl bg-orange-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 mr-3 shrink-0">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-bold text-secondary group-hover/item:text-primary transition-colors text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed italic">{item.description}</p>
                              </div>
                            </TransitionLink>
                          ))}
                        </div>
                      </div>

                      {/* Kennisbank */}
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 ml-3">Kennisbank</p>
                        <div className="space-y-1">
                          {kennisbankItems.map((item) => (
                            <TransitionLink
                              key={item.title}
                              href={item.href}
                              className="flex items-start p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                              onClick={() => setOpenMegaMenu(null)}
                            >
                              <div className="p-2 rounded-xl bg-orange-50 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300 mr-3 shrink-0">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-bold text-secondary group-hover/item:text-primary transition-colors text-sm">{item.title}</h3>
                                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed italic">{item.description}</p>
                              </div>
                            </TransitionLink>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom row: Energieprijzen + Quickscan */}
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-slate-100">
                      <TransitionLink
                        href="/energieprijzen"
                        className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 hover:bg-emerald-50 transition-all group/live"
                        onClick={() => setOpenMegaMenu(null)}
                      >
                        <span className="relative flex h-2.5 w-2.5 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        <div>
                          <h3 className="font-bold text-secondary group-hover/live:text-emerald-700 transition-colors text-sm">Live Energieprijzen</h3>
                          <p className="text-xs text-slate-400 mt-0.5 italic">EPEX Spot Day-Ahead voor vandaag.</p>
                        </div>
                      </TransitionLink>

                      <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-orange-50/30">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-primary shrink-0" />
                          <div>
                            <h3 className="text-sm font-bold text-secondary">22.000+ op de wachtlijst</h3>
                            <p className="text-xs text-slate-600">Wij zorgen dat jij er niet bij hoort.</p>
                          </div>
                        </div>
                        <TransitionLink
                          href="/contact?type=quickscan"
                          className="inline-flex items-center px-4 py-2 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap ml-4"
                          onClick={() => setOpenMegaMenu(null)}
                        >
                          Quickscan
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </TransitionLink>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <TransitionLink
              href="/contact?type=kennismaking"
              className="text-secondary font-bold hover:text-primary transition-colors"
            >
              Contact
            </TransitionLink>
            <TransitionLink
              href="/login"
              className="text-secondary font-bold hover:text-primary transition-colors"
            >
              Login
            </TransitionLink>
            <TransitionLink
              href="/contact?type=energiescan"
              className="px-8 py-3.5 bg-secondary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Start Scan
            </TransitionLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isTransparent 
                ? "text-white hover:text-primary" 
                : "text-secondary hover:text-primary"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6 space-y-4 pb-8">
              {/* Wat wij doen Section */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Oplossingen</p>
                {solutions.map((solution) => (
                  <TransitionLink
                    key={solution.title}
                    href={solution.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <solution.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{solution.title}</span>
                  </TransitionLink>
                ))}
                <TransitionLink
                  href="/oplossingen"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Alle oplossingen</span>
                </TransitionLink>

                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4 pt-2">Advies</p>
                {adviesItems.map((item) => (
                  <TransitionLink
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{item.title}</span>
                  </TransitionLink>
                ))}
                <TransitionLink
                  href="/advies"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Alle advies</span>
                </TransitionLink>
              </div>

              {/* Netcongestie Section */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Netcongestie — voor wie</p>
                {netcongestieVoorWie.map((item) => (
                  <TransitionLink
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{item.title}</span>
                  </TransitionLink>
                ))}
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">Kennisbank</p>
                {kennisbankItems.map((item) => (
                  <TransitionLink
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{item.title}</span>
                  </TransitionLink>
                ))}
                <TransitionLink
                  href="/energieprijzen"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="font-bold text-secondary">Live Energieprijzen</span>
                </TransitionLink>
              </div>

              {/* Other Navigation */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {navLinks.map((link) => (
                  <TransitionLink
                    key={link.title}
                    href={link.href}
                    className="block p-3 font-medium text-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </TransitionLink>
                ))}
                <TransitionLink
                  href="/login"
                  className="block p-3 font-medium text-secondary hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </TransitionLink>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col space-y-3">
                <TransitionLink
                  href="/contact?type=energiescan"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Vraag scan aan
                </TransitionLink>
                <TransitionLink
                  href="/contact?type=kennismaking"
                  className="w-full py-3 border border-gray-200 text-secondary font-bold rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Plan kennismaking
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
