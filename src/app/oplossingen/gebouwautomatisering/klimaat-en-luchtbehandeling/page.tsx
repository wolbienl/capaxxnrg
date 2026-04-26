'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ThermometerSun,
  Wind,
  Gauge,
  CheckCircle2,
  Wrench,
  Activity,
  Layers,
  Network,
  Cpu,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FadeIn from '@/components/FadeIn'

const benefits = [
  {
    title: 'Individuele ruimteregeling',
    desc: 'Per ruimte een eigen setpoint, schema en bezettingsprofiel. Voldoet aan EPBD IV.',
    icon: ThermometerSun,
  },
  {
    title: 'WTW & VRF integraal',
    desc: 'Luchtbehandeling, warmtepomp en VRF gecoördineerd, in plaats van systemen die elkaar tegenwerken.',
    icon: Wind,
  },
  {
    title: 'Energie- en netrespons',
    desc: 'HVAC reageert op PV-opbrengst, batterijstatus en piekuren, niet alleen op temperatuur.',
    icon: Activity,
  },
  {
    title: 'Voorspellend onderhoud',
    desc: 'Vroege signalering van filterverzadiging, drukval en compressorgedrag. Minder uitval.',
    icon: Wrench,
  },
]

const aanpak = [
  {
    title: 'Inventarisatie HVAC-installatie',
    desc: 'Bestaande regeltechniek, protocollen, leeftijd en compliance-status (BACS-classificatie).',
  },
  {
    title: 'Stuurstrategie en zonering',
    desc: 'Bezettingsprofielen, comfortgrenzen en koppeling met agenda-systemen of toegangscontrole.',
  },
  {
    title: 'Integratie met EMS, PV en warmtepomp',
    desc: 'HVAC-vraag stemt af op opwek, opslag en netcondities, niet andersom.',
  },
  {
    title: 'Inbedrijfstelling en monitoring',
    desc: 'Functionele tests, dashboard, KPI-monitoring en jaarlijkse herijking.',
  },
]

const protocollen = [
  { name: 'BACnet/IP', desc: 'Standaard voor LBK, koelmachines, regelapparatuur' },
  { name: 'Modbus RTU/TCP', desc: 'Frequentieregelaars, sensoren, energiemeters' },
  { name: 'KNX', desc: 'Ruimteregeling, zonering, schakelpanelen' },
  { name: 'M-Bus', desc: 'Warmte- en koudemeters per huurder of zone' },
]

export default function KlimaatPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { name: 'Home', url: '/' },
              { name: 'Wat wij doen', url: '/wat-wij-doen' },
              { name: 'Oplossingen', url: '/oplossingen' },
              {
                name: 'Gebouwautomatisering',
                url: '/oplossingen/gebouwautomatisering',
              },
              { name: 'Klimaat & luchtbehandeling' },
            ]}
            className="mb-4 -mx-4 md:-mx-6"
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold px-4 py-2 bg-orange-50 rounded-full border border-orange-100 mb-6">
                <ThermometerSun className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Klimaat & Luchtbehandeling
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Klimaat slim aansturen,{' '}
                <span className="text-primary italic">op gebruik én op net.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl text-balance">
                HVAC-regeltechniek voor kantoor, zorg en logistiek. Individuele ruimteregeling, WTW- en VRF-coördinatie, en directe koppeling met EMS, PV en warmtepomp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?type=kennismaking"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-secondary text-white font-black rounded-2xl text-base md:text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200"
                >
                  Plan kennismaking{' '}
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link
                  href="/oplossingen/gebouwautomatisering"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white text-secondary border border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:border-primary/30 hover:bg-slate-50 transition-all"
                >
                  Terug naar overzicht
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/gebouwautomatisering/klimaat-warmtepomp-cascade.webp"
                  alt="VRF-warmtepomp-cascade op dak van utiliteitsgebouw, slim aangestuurd via gebouwbeheersysteem"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* H2 1 — Wat het oplevert */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Wat het oplevert
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              HVAC-regeltechniek voor utiliteit in één oogopslag.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Comfortzekerheid voor gebruikers, voorspelbare exploitatie voor de eigenaar, en compliance voor de adviseur. Drie belangen tegelijk afgedekt.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-6">
                    <b.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-slate-500 italic leading-relaxed text-sm">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 2 — Onze aanpak */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Onze aanpak
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight tracking-tight">
                Van bestaande HVAC naar{' '}
                <span className="text-primary italic">geregisseerd klimaat.</span>
              </h2>
              <ul className="space-y-8">
                {aanpak.map((stap, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2 tracking-tight">
                        {stap.title}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed">{stap.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-secondary rounded-[3rem] p-10 md:p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
                    Open protocollen
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight italic">
                    &ldquo;Wij gebruiken wat het beste past bij jouw HVAC. Geen vendor lock-in.&rdquo;
                  </p>
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    {protocollen.map((p, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-white/80"
                      >
                        <Network className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <div>
                          <p className="font-bold text-white">{p.name}</p>
                          <p className="text-sm text-white/60">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* H2 3 — Energierespons / EMS-koppeling */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              EMS-integratie
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              <Link
                href="/oplossingen/ems"
                className="hover:text-primary transition-colors"
              >
                Warmtepomp aansturen op zelf opgewekte stroom
              </Link>
              .
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed italic">
              De grootste energiewinst in utiliteit zit in HVAC die meebeweegt met de zon, de batterij en de stroomprijs. Niet alleen met een schema.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'PV-overschot benutten',
                desc: 'Warmtepomp draait extra wanneer het zonnedak overproductie heeft. Buffer in tapwater of betonkern.',
                icon: Activity,
              },
              {
                title: 'Piekuren vermijden',
                desc: 'Pre-cooling of pre-heating voor het piekuur, zodat de aansluiting tijdens het piekuur ontlast wordt.',
                icon: Gauge,
              },
              {
                title: 'Netcongestie-respons',
                desc: 'Bij netcongestie-signalen vanuit de netbeheerder past het gebouw zelf zijn vraag aan.',
                icon: Layers,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 italic leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 4 — Compliance */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Compliance
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
                BACS-klasse, EPBD-keuring en GACS-impact.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                HVAC is in elk utiliteitsgebouw de zwaarste energiepost. Daarom legt regelgeving daar de meeste eisen neer.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {[
                {
                  title: 'BACS klasse C/B vanaf 2026',
                  desc: 'HVAC > 290 kW: minimaal klasse C verplicht. Klasse B levert direct besparingen die de meerinvestering terugverdienen.',
                },
                {
                  title: 'EPBD-keuring airco (Scope 14)',
                  desc: 'Periodieke keuring van klimaatsystemen > 70 kW. Ons GBS levert de gevraagde data automatisch.',
                },
                {
                  title: 'GACS-route in Nederland',
                  desc: 'NL implementeert EPBD-eisen via GACS. Wij kennen de uitvoeringsregels en koppelen ze aan jouw installatie.',
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links naar andere oplossingen */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Combineer met
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              De andere lagen van het systeem.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Regeltechniek & comfort',
                desc: 'Daglichtregeling en zonwering reageren samen met HVAC op aanwezigheid en weer.',
                href: '/oplossingen/gebouwautomatisering/regeltechniek-en-comfort',
                image: '/images/gebouwautomatisering/regeltechniek-paneel.webp',
                icon: Cpu,
              },
              {
                title: 'Energiemanagement (EMS)',
                desc: 'EMS koppelt opwek, opslag en laden aan dezelfde stuurlogica als jouw HVAC.',
                href: '/oplossingen/ems',
                image: '/images/storage-render.jpg',
                icon: Layers,
              },
            ].map((sub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={sub.href} className="group block h-full">
                  <article className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-primary/20 hover:shadow-2xl transition-all h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                        <sub.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight group-hover:text-primary transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed mb-6 flex-1">
                        {sub.desc}
                      </p>
                      <span className="inline-flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                        Bekijken{' '}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,#f06a00_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Wil je weten hoe jouw HVAC scoort op{' '}
              <span className="text-primary italic">BACS klasse C?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Een scan van je installatie geeft direct duidelijkheid over compliance, energieprofiel en quick wins.
            </p>
            <Link
              href="/contact?type=energiescan"
              className="inline-flex items-center px-8 py-5 bg-primary text-white font-black rounded-2xl text-lg hover:bg-accent transition-all shadow-2xl shadow-primary/20"
            >
              Plan een scan{' '}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
