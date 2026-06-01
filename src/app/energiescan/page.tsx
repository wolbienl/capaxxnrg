'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  CheckCircle2,
  Battery,
  Cable,
  Cpu,
  Zap,
  EvCharger,
  ShieldCheck,
  MapPin,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const PAIN_POINTS = [
  'Geen ruimte meer voor laadpalen',
  'Machines of productie kunnen niet uitbreiden',
  'Nieuwbouw of verbouwing loopt vast',
  'Verduurzamen lukt niet door een vol net',
]

const STATS = [
  { value: '22.000+', label: 'bedrijven op de wachtlijst' },
  { value: '2030+', label: 'doorlooptijd netverzwaring' },
  { value: 'Twente', label: 'lokaal, korte lijnen' },
]

const ROUTES = [
  {
    icon: Battery,
    title: 'Batterijopslag',
    description: 'Minder pieken, meer eigen verbruik. Met de Flex-e subsidie tot €300.000 vergoed.',
    href: '/oplossingen/energieopslag',
  },
  {
    icon: Cable,
    title: 'Cable pooling',
    description: 'Eén aansluiting delen met je buren op het terrein. Toch ruimte zonder netverzwaring.',
    href: '/kennisbank/cable-pooling',
  },
  {
    icon: Zap,
    title: 'Zelfaanleg',
    description: 'Eigen kabelroute naar het onderstation. Jij bepaalt het tempo, niet de wachtlijst.',
    href: '/kennisbank/zelfaanleg',
  },
  {
    icon: Cpu,
    title: 'Slimme sturing (EMS)',
    description: 'Automatisch sturen op pieken en verbruik. Haal meer uit je huidige aansluiting.',
    href: '/oplossingen/ems',
  },
  {
    icon: EvCharger,
    title: 'Verdien aan je laadpalen',
    description: 'Elke geladen kWh als certificaat: 7 tot 10 cent extra. Wij regelen de administratie.',
    href: '/inboekdienstverlening',
  },
  {
    icon: ArrowRight,
    title: 'Alle netcongestie-routes',
    description: 'Bekijk welke aanpak past bij jouw locatie en situatie.',
    href: '/netcongestie',
  },
]

export default function EnergiescanPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30 pb-24 lg:pb-0">
      {/* --- HERO --- */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-xs md:text-sm font-black uppercase tracking-widest mb-6">
                <Zap className="w-4 h-4" />
                Netcongestie in Twente
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.05] tracking-tight mb-5 md:mb-7 text-balance">
                Zit jouw bedrijf op de wachtlijst voor{' '}
                <span className="text-primary italic">meer stroom?</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-8 leading-relaxed max-w-xl text-balance">
                Het net zit vol, maar je plannen hoeven niet stil te staan. Wij rekenen gratis voor
                je uit hoe je tóch kunt doorgroeien — met batterijopslag, cable pooling en slimme sturing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?type=energiescan"
                  className="group inline-flex items-center justify-center px-7 py-4 md:px-8 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20 active:scale-[0.98]"
                >
                  Plan gratis energiescan
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+31532065066"
                  className="inline-flex items-center justify-center px-7 py-4 md:px-8 md:py-5 bg-white text-secondary border-2 border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:border-primary/30 hover:bg-slate-50 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Bel direct
                </a>
              </div>

              <div className="flex items-center gap-5 mt-7 text-sm text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Vrijblijvend
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Data-gedreven
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-4 h-4 text-primary" /> Twente
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <Image
                  src="/images/capaxx-energy-energiegemeenschap.webp"
                  alt="Bedrijventerrein in Twente met een vol elektriciteitsnet"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PIJNPUNT / HERKENNING --- */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary tracking-tight mb-4">
                Herken je dit?
              </h2>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                Steeds meer bedrijven in Twente lopen vast op het volle net. Vaak zonder dat er een
                snelle netverzwaring in zicht is.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            {PAIN_POINTS.map((point, i) => (
              <FadeIn key={point} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-white rounded-2xl p-5 md:p-6 border border-slate-100 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-secondary leading-snug">
                    {point}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-14 md:py-20 bg-secondary overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(240,106,0,0.12),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto text-center">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-2xl sm:text-3xl md:text-5xl font-black text-primary leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-[11px] md:text-sm text-slate-300 font-medium leading-snug">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- ROUTES / OPLOSSINGEN --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-secondary tracking-tight mb-4 md:mb-6">
                Zo groei je tóch <span className="text-primary italic">door.</span>
              </h2>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">
                Er is niet één oplossing, maar een route die past bij jouw locatie. In de energiescan
                bepalen we welke voor jou het meeste oplevert.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ROUTES.map((route, i) => (
              <FadeIn key={route.title} delay={(i % 3) * 0.1}>
                <Link href={route.href} className="group block h-full">
                  <div className="relative bg-slate-50 p-7 md:p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                      <route.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-black text-secondary mb-3 tracking-tight">
                      {route.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {route.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold text-sm group-hover:text-primary transition-colors">
                      Meer info
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST / LOKAAL --- */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-32 h-32 text-primary" />
            </div>
            <div className="relative z-10">
              <p className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-4">
                Lokaal energiebedrijf uit Hengelo
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary tracking-tight mb-5 leading-tight">
                Korte lijnen, één aanspreekpunt, werkzaam in heel Twente.
              </h2>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 italic">
                Geen dikke rapporten, wel een plan dat uitvoerbaar is. We meten, rekenen door en
                leveren op als het werkt. Gecertificeerd EP-adviseur (BRL 9500-U).
              </p>
              <div className="flex flex-wrap gap-3">
                {['BRL 9500-U', 'EP-U/D', 'Data-gedreven', 'Twente'].map((label) => (
                  <span
                    key={label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-orange-50 rounded-xl border border-orange-100 text-sm font-black text-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- EIND CTA --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
            </div>
            <FadeIn className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-5 md:mb-7 leading-tight">
                Weten wat er kan op <span className="text-primary italic">jouw locatie?</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed">
                Plan een vrijblijvende energiescan. We rekenen het direct voor je door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?type=energiescan"
                  className="inline-flex items-center justify-center px-8 py-5 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20 active:scale-[0.98] group"
                >
                  Plan gratis energiescan
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+31532065066"
                  className="inline-flex items-center justify-center px-8 py-5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +31 (0)53 206 5066
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- STICKY MOBIELE CTA-BALK --- */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <a
          href="tel:+31532065066"
          className="flex items-center justify-center gap-2 px-4 py-3.5 bg-white text-secondary border-2 border-slate-200 font-black rounded-xl text-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4" />
          Bel
        </a>
        <Link
          href="/contact?type=energiescan"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 bg-primary text-white font-black rounded-xl text-sm active:scale-[0.98] transition-transform"
        >
          Plan energiescan
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
