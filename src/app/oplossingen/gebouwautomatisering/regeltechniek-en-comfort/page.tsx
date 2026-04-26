'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Lightbulb,
  Sun,
  Zap,
  Eye,
  Layers,
  Network,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Cpu,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FadeIn from '@/components/FadeIn'

const benefits = [
  {
    title: 'Aanwezigheid + daglicht',
    desc: 'Verlichting volgt automatisch bezetting en lichtinval. Voldoet direct aan EPBD IV.',
    icon: Eye,
  },
  {
    title: 'Scenes en zonering',
    desc: 'Per zone of gebruik vooraf ingestelde stemmingen voor vergaderen, presentatie of schoonmaak.',
    icon: Sparkles,
  },
  {
    title: 'Zonwering integraal',
    desc: 'Zonwering en kunstlicht reageren samen op zon-positie en buitencondities.',
    icon: Sun,
  },
  {
    title: 'Tunable white & HCL',
    desc: 'Lichtkleur volgt biologisch ritme. Zorg, scholen en kantoren scoren op welzijn.',
    icon: Lightbulb,
  },
]

const platforms = [
  {
    name: 'DALI / DALI-2',
    when: 'Voor kantoor, zorg en onderwijs met veel armaturen per zone',
    desc: 'IEC 62386-standaard. Individuele armatuuradressering, dimmen, instelbare witkleur en status per armatuur.',
    keywords: ['DALI installateur', 'lichtmanagement kantoor'],
  },
  {
    name: 'KNX',
    when: 'Bij bestaande KNX-projecten of zware multi-functionele installaties',
    desc: 'Europese open standaard, bewezen voor utiliteit. Sterke integratie van licht, klimaat en zonwering.',
    keywords: ['KNX installateur', 'gebouwbeheersysteem'],
  },
  {
    name: 'Loxone',
    when: 'Voor middelgrote utiliteit waar holistisch gewenst is',
    desc: 'Integraal platform met sterke koppeling tussen licht, klimaat, audio en toegang. CAPAXX is Silver Partner.',
    keywords: ['Loxone Silver Partner', 'lokaal verwerkt'],
  },
  {
    name: 'DMX512',
    when: 'Architecturale verlichting, hospitality en gevels',
    desc: 'Universele standaard voor podium- en architecturale toepassingen.',
    keywords: ['DMX512', 'architectural lighting'],
  },
  {
    name: '0–10V / 1–10V',
    when: 'Bij retrofit met bestaande dimbare armaturen',
    desc: 'Klassiek analoog dimsignaal. Geen vervanging van armaturen nodig.',
    keywords: ['retrofit verlichting', 'legacy dimmen'],
  },
  {
    name: 'Casambi / Bluetooth Mesh',
    when: 'Snelle retrofit zonder bekabeling',
    desc: 'Draadloos lichtnetwerk. Geschikt voor uitbreidingen waar bedrading niet kan.',
    keywords: ['Casambi', 'draadloze lichtsturing'],
  },
]

export default function RegeltechniekPage() {
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
              { name: 'Regeltechniek & comfort' },
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
                <Lightbulb className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Regeltechniek & Comfort
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Lichtsturing, zonwering en{' '}
                <span className="text-primary italic">comfortregeling.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl text-balance">
                Aanwezigheids- en daglichtregeling, scenes en zonwering voor utiliteit. We werken met open standaarden zoals DALI-2, KNX, DMX512 en 0–10V, en bouwen optioneel met 24V/PELV-verlichting voor een lichter NEN 3140-regime.
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
                  src="/images/gebouwautomatisering/regeltechniek-paneel.webp"
                  alt="Schakelpaneel met laptop, engineering van regeltechniek voor utiliteit"
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
              Lichtmanagement dat zichzelf terugverdient.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Verlichting is in de meeste utiliteit goed voor 15 tot 25 procent van het elektriciteitsverbruik. Slimme regeling halveert dat eenvoudig, zonder concessies aan comfort.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* H2 2 — Platform-vergelijking (DALI vs KNX vs Loxone) */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Platforms
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              DALI-2, KNX of Loxone:{' '}
              <span className="text-primary italic">wanneer welke?</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We zijn merk-onafhankelijk. Per project kiezen we het platform dat past bij omvang, bestaande infrastructuur en compliance-eisen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Network className="w-5 h-5 text-primary shrink-0" />
                    <h3 className="text-xl font-black text-secondary tracking-tight">
                      {p.name}
                    </h3>
                  </div>
                  <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-3">
                    {p.when}
                  </p>
                  <p className="text-slate-500 italic leading-relaxed text-sm mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.keywords.map((k, ki) => (
                      <span
                        key={ki}
                        className="text-[10px] font-bold text-secondary bg-white px-2 py-1 rounded-md uppercase tracking-wider border border-slate-100"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 3 — 24V/PELV — onze niche */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(240,106,0,0.12),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Niche: 24V / PELV</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                24V/PELV-verlichting,{' '}
                <span className="text-primary italic">SCIOS Scope 8 vanaf het ontwerp.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Bij PELV (Protective Extra-Low Voltage) loopt de lichtbedrading op 24V DC in plaats van 230V wisselspanning. Dat verschuift de inspectie-eisen en het werkrisico fundamenteel.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    t: 'Lichter NEN 3140 / SCIOS Scope 8-regime',
                    d: 'PELV-stroomkringen vallen onder een lichter inspectieregime. Minder meetpunten, snellere keuring, lagere kosten.',
                  },
                  {
                    t: 'Veilig werken in zorg, scholen, retail',
                    d: 'Geen aanrakingsgevaar bij 24V. Onderhoud aan armaturen kan veilig, zonder de spanning af te sluiten.',
                  },
                  {
                    t: 'Flexibel uitbreiden zonder elektricien',
                    d: 'Armaturen verplaatsen of bijplaatsen kan zonder zware bedrading. Multi-tenant verbouwen wordt eenvoudiger.',
                  },
                  {
                    t: 'Dunnere kabels, kleinere goten, retrofit-vriendelijk',
                    d: 'Bedrading past in bestaande plafonds. Minder kabelgoot-aanpassingen nodig.',
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-white mb-1">{item.t}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-10">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-6">
                  Aandachtspunt
                </p>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                  PELV is geen plug-and-play.
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Een 24V-verlichtingsontwerp vraagt aandacht voor spanningsval over lange tracé&apos;s en juiste verdeling van voedingen. Wij doen het ontwerp leverancier-onafhankelijk, en valideren met meting tijdens inbedrijfstelling.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {[
                    { v: '24V', l: 'DC' },
                    { v: 'Scope 8', l: 'lichter' },
                    { v: 'EPBD', l: 'IV-conform' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-2xl font-black text-primary mb-1">{s.v}</p>
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* H2 4 — Compliance koppeling */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Compliance
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
                EPBD IV, BREEAM en NEN 3140.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Verlichtingsregelgeving is in de afgelopen jaren stevig aangescherpt. Onze pagina&apos;s op{' '}
                <Link
                  href="/advies/breeam"
                  className="text-secondary font-bold hover:text-primary transition-colors underline underline-offset-4"
                >
                  BREEAM Hea 06: daglicht- en aanwezigheidsregeling
                </Link>{' '}
                en{' '}
                <Link
                  href="/advies/energielabels"
                  className="text-secondary font-bold hover:text-primary transition-colors underline underline-offset-4"
                >
                  energielabels en BACS-eisen EPBD IV
                </Link>{' '}
                gaan dieper op de adviseringskant in.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  t: 'EPBD IV / Bouwbesluit',
                  d: 'Verplichte aanwezigheids- en daglichtafhankelijke regeling in nieuwe utiliteitsbouw. DALI met sensoren levert dit standaard.',
                },
                {
                  t: 'BREEAM Hea 06 (Visueel comfort)',
                  d: 'Zonering, dimmen en instelbare witkleur scoren credits. We ontwerpen er specifiek voor.',
                },
                {
                  t: 'NEN 3140 / SCIOS Scope 8',
                  d: 'PELV-bedrading vereenvoudigt periodieke inspectie aantoonbaar. Documentatie standaard inbegrepen.',
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2 tracking-tight">
                        {item.t}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 5 — Sectorvoorbeelden */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Sectorvoorbeelden
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Per sector een eigen invulling.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: 'Kantoor',
                d: 'Daglichtregeling per zone, dim tijdens piekuur, scenes voor vergaderzalen.',
              },
              {
                t: 'School',
                d: 'Aanwezigheidsschakeling per lokaal, instelbare witkleur voor concentratie en pauze.',
              },
              {
                t: 'Retail',
                d: 'Architecturale highlight (DMX) op gevels, sales-zones, sluit- en openscenes.',
              },
              {
                t: 'Hotel',
                d: 'Roomscenes, gangverlichting met aanwezigheid, gevelaccent voor uitstraling.',
              },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2 tracking-tight">{s.t}</h3>
                  <p className="text-sm text-slate-500 italic leading-relaxed">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
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
                title: 'Klimaat & luchtbehandeling',
                desc: 'HVAC reageert op dezelfde aanwezigheid- en daglichtsignalen als de verlichting.',
                href: '/oplossingen/gebouwautomatisering/klimaat-en-luchtbehandeling',
                image: '/images/gebouwautomatisering/klimaat-warmtepomp-cascade.webp',
                icon: Cpu,
              },
              {
                title: 'Energiemanagement (EMS)',
                desc: 'Verlichting dimt tijdens netcongestie of piekuur, in plaats van uit te gaan.',
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
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Plan een lichtmanagement-scan voor{' '}
              <span className="text-primary italic">jouw pand.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Wij brengen de huidige situatie in kaart en geven concrete voorstellen voor DALI/KNX-retrofit, daglichtregeling of een 24V/PELV-aanpak.
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
