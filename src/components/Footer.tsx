'use client'

import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import TransitionLink from './TransitionLink'

const LINKEDIN_URL = 'https://www.linkedin.com/company/capaxx-energy/'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white pt-12 pb-8 md:pt-16 md:pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6 mb-10 md:mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-4 mb-2 lg:mb-0">
            <TransitionLink href="/" className="inline-block">
              <Image
                src="/images/logo-light.svg"
                alt="CAPAXX ENERGY"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </TransitionLink>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed italic">
              Maak energie een asset voor jouw vastgoed.
            </p>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              BRL 9500-U · SKG-IKOB
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all"
              aria-label="CAPAXX Energy op LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Oplossingen */}
          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-300">Oplossingen</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Zonnepanelen', href: '/oplossingen/zonnepanelen' },
                { label: 'Energieopslag', href: '/oplossingen/energieopslag' },
                { label: 'EMS', href: '/oplossingen/ems' },
                { label: 'Laadinfra', href: '/oplossingen/laadinfra' },
                { label: 'Solar carports', href: '/oplossingen/solar-carports' },
                { label: 'ROI laadinfra', href: '/roi-laadinfra-vastgoed' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Netcongestie */}
          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-300">Netcongestie</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Overzicht', href: '/netcongestie' },
                { label: 'Vastgoed', href: '/vastgoed' },
                { label: 'Projectontwikkeling', href: '/projectontwikkeling' },
                { label: 'Industrie', href: '/industrie' },
                { label: 'Sectoren', href: '/sectoren' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-black mt-6 mb-4 uppercase tracking-widest text-slate-300">Regio&apos;s</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Twente', href: '/netcongestie/twente' },
                { label: 'Enschede', href: '/netcongestie/enschede' },
                { label: 'Hengelo', href: '/netcongestie/hengelo' },
                { label: 'Almelo', href: '/netcongestie/almelo' },
                { label: 'Oldenzaal', href: '/netcongestie/oldenzaal' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Advies & Kennisbank */}
          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-300">Advies</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Energielabels', href: '/advies/energielabels' },
                { label: 'BREEAM', href: '/advies/breeam' },
                { label: 'ESG rapportage', href: '/advies/esg' },
                { label: 'Paris Proof', href: '/advies/paris-proof' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-black mt-6 mb-4 uppercase tracking-widest text-slate-300">Kennisbank</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Alle artikelen', href: '/kennisbank' },
                { label: 'Cable pooling', href: '/kennisbank/cable-pooling' },
                { label: 'Energiewet 2026', href: '/kennisbank/energiewet-2026' },
                { label: 'Whitepaper netcongestie', href: '/whitepapers/netcongestie-bedrijventerreinen' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-300">Navigatie</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Over ons', href: '/over-ons' },
                { label: 'Werkwijze', href: '/werkwijze' },
                { label: 'Cases', href: '/cases' },
                { label: 'Energieprijzen', href: '/energieprijzen' },
                { label: 'Energieweerbericht', href: '/energieweerbericht' },
                { label: 'Contact', href: '/contact' },
                { label: 'Quickscan zonnepark', href: '/quickscan-zonnepark' },
                { label: 'Quickscan windpark', href: '/quickscan-windpark' },
              ].map((item) => (
                <li key={item.label}>
                  <TransitionLink href={item.href} className="text-sm text-slate-400 hover:text-primary transition-colors">
                    {item.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black mb-4 uppercase tracking-widest text-slate-300">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  Jan Tinbergenstraat 202<br />7559 ST Hengelo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+31532065066" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +31 (0)53 206 5066
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:mail@capaxx-energy.nl" className="text-sm text-slate-400 hover:text-white transition-colors">
                  mail@capaxx-energy.nl
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>&copy; {currentYear} CAPAXX Energy</p>
          <div className="flex gap-6">
            <TransitionLink href="/privacy" className="hover:text-white transition-colors">Privacy</TransitionLink>
            <TransitionLink href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
