'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sun, Battery, EvCharger, Car, BarChart3, ClipboardCheck, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react'
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
  {
    title: 'Alle advies',
    description: 'Bekijk ons complete adviesaanbod.',
    href: '/advies',
    icon: ArrowRight,
  },
]

const navLinks = [
  { title: 'Cases', href: '/cases' },
  { title: 'Over ons', href: '/over-ons' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMegaMenu, setOpenMegaMenu] = useState<'oplossingen' | 'advies' | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  const isHomepage = pathname === '/'
  const isTransparent = isHomepage && !isScrolled && !isOpen

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Check initial scroll position
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
          {/* Logo - switches between light and dark */}
          <TransitionLink href="/" className="flex items-center space-x-2 group relative">
            {/* Dark logo (default, shown when scrolled or not on homepage) */}
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
            {/* Light logo (shown on mobile homepage when not scrolled) */}
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
            {/* Oplossingen Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMegaMenu('oplossingen')}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <button className="flex items-center space-x-1.5 text-secondary font-bold hover:text-primary transition-colors py-2">
                <span>Oplossingen</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 ease-in-out", openMegaMenu === 'oplossingen' && "rotate-180")} />
              </button>
            </div>

            {/* Advies Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMegaMenu('advies')}
              onMouseLeave={() => setOpenMegaMenu(null)}
            >
              <button className="flex items-center space-x-1.5 text-secondary font-bold hover:text-primary transition-colors py-2">
                <span>Advies</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 ease-in-out", openMegaMenu === 'advies' && "rotate-180")} />
              </button>
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
            {openMegaMenu === 'oplossingen' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute top-full left-0 right-0"
                onMouseEnter={() => setOpenMegaMenu('oplossingen')}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="container mx-auto px-4 md:px-6 py-6">
                    {/* Solutions Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
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

                    {/* CTA Banner */}
                    <div className="bg-gradient-to-r from-slate-50 to-orange-50/30 rounded-2xl p-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <h3 className="text-sm font-bold text-secondary mb-1">Complete energie-integratie</h3>
                          <p className="text-xs text-slate-600">Al onze oplossingen werken naadloos samen via één platform.</p>
                        </div>
                      </div>
                      <TransitionLink
                        href="/oplossingen"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap"
                        onClick={() => setOpenMegaMenu(null)}
                      >
                        Bekijk alle oplossingen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </TransitionLink>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {openMegaMenu === 'advies' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute top-full left-0 right-0"
                onMouseEnter={() => setOpenMegaMenu('advies')}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <div className="container mx-auto px-4 md:px-6 py-6">
                    {/* Advies Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
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

                    {/* CTA Banner */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <h3 className="text-sm font-bold text-secondary mb-1">Data-gedreven duurzaamheid</h3>
                          <p className="text-xs text-slate-600">Compliance en certificering op basis van meetbare data uit jouw eigen installaties.</p>
                        </div>
                      </div>
                      <TransitionLink
                        href="/advies"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap"
                        onClick={() => setOpenMegaMenu(null)}
                      >
                        Bekijk alle advies
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </TransitionLink>
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
              {/* Oplossingen Section */}
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
              </div>

              {/* Advies Section */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Advies</p>
                {adviesItems.slice(0, 4).map((item) => (
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
                  className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Alle advies</span>
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
