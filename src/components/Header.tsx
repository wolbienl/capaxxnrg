'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sun, Battery, EvCharger, Car, BarChart3, ClipboardCheck, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo-dark.svg"
              alt="CAPAXX ENERGY"
              width={180}
              height={45}
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

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
              <Link
                key={link.title}
                href={link.href}
                className="text-secondary font-bold hover:text-primary transition-colors relative group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
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
                className="hidden lg:block absolute top-full left-0 right-0 pt-4"
                onMouseEnter={() => setOpenMegaMenu('oplossingen')}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6">
                    {/* Solutions Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {solutions.map((solution) => (
                        <Link
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
                        </Link>
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
                      <Link
                        href="/oplossingen"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap"
                        onClick={() => setOpenMegaMenu(null)}
                      >
                        Bekijk alle oplossingen
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
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
                className="hidden lg:block absolute top-full left-0 right-0 pt-4"
                onMouseEnter={() => setOpenMegaMenu('advies')}
                onMouseLeave={() => setOpenMegaMenu(null)}
              >
                <div className="container mx-auto px-4 md:px-6">
                  <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-6">
                    {/* Advies Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {adviesItems.map((item) => (
                        <Link
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
                        </Link>
                      ))}
                    </div>

                    {/* CTA Banner */}
                    <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-4 flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <h3 className="text-sm font-bold text-secondary mb-1">Data-gedreven duurzaamheid</h3>
                          <p className="text-xs text-slate-600">Compliance en certificering op basis van meetbare data uit je eigen installaties.</p>
                        </div>
                      </div>
                      <Link
                        href="/advies"
                        className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all text-sm whitespace-nowrap"
                        onClick={() => setOpenMegaMenu(null)}
                      >
                        Bekijk alle advies
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/contact?type=kennismaking"
              className="text-secondary font-bold hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="text-secondary font-bold hover:text-primary transition-colors"
            >
              Login
            </Link>
            <Link
              href="/contact?type=energiescan"
              className="px-8 py-3.5 bg-secondary text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Start Scan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {/* Oplossingen Section */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Oplossingen</p>
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    href={solution.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <solution.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{solution.title}</span>
                  </Link>
                ))}
                <Link
                  href="/oplossingen"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Alle oplossingen</span>
                </Link>
              </div>

              {/* Advies Section */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Advies</p>
                {adviesItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium text-secondary">{item.title}</span>
                  </Link>
                ))}
                <Link
                  href="/advies"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-100"
                  onClick={() => setIsOpen(false)}
                >
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="font-bold text-primary">Alle advies</span>
                </Link>
              </div>

              {/* Other Navigation */}
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block p-3 font-medium text-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="block p-3 font-medium text-secondary hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="/contact?type=energiescan"
                  className="w-full py-3 bg-primary text-white font-bold rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Vraag scan aan
                </Link>
                <Link
                  href="/contact?type=kennismaking"
                  className="w-full py-3 border border-gray-200 text-secondary font-bold rounded-lg text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Plan kennismaking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
