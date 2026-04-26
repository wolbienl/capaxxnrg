'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Cpu,
  Layers,
  Lock,
  ThermometerSun,
  Lightbulb,
  Network,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Download,
  FileText,
  Briefcase,
  Hospital,
  GraduationCap,
  Hotel,
  ShoppingBag,
  Factory,
  Users,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FadeIn from '@/components/FadeIn'
import { FAQS } from './faqs'

const BASIN_URL = 'https://usebasin.com/f/1f4650e9075c'

const subPages = [
  {
    title: 'Klimaat & luchtbehandeling',
    description:
      'HVAC-regeltechniek, individuele ruimteregeling en koppeling met EMS, PV en warmtepomp.',
    href: '/oplossingen/gebouwautomatisering/klimaat-en-luchtbehandeling',
    icon: ThermometerSun,
    image: '/images/gebouwautomatisering/klimaat-warmtepomp-cascade.webp',
    keywords: ['HVAC', 'VRF', 'warmtepomp', 'BACnet'],
  },
  {
    title: 'Regeltechniek & comfort',
    description:
      'Lichtsturing, daglichtregeling, zonwering en scenes. DALI-2, KNX, 24V/PELV-verlichting.',
    href: '/oplossingen/gebouwautomatisering/regeltechniek-en-comfort',
    icon: Lightbulb,
    image: '/images/gebouwautomatisering/regeltechniek-paneel.webp',
    keywords: ['DALI-2', 'KNX', 'PELV', 'daglichtregeling'],
  },
  {
    title: 'Toegangscontrole',
    description:
      'NFC, codes, tijdsgebonden toegang, multi-locatie-logging en koppeling met inbraakalarm.',
    href: '/oplossingen/gebouwautomatisering/toegangscontrole',
    icon: Lock,
    image: '/images/gebouwautomatisering/toegangscontrole-nfc.webp',
    keywords: ['NFC', 'multi-tenant', 'AVG-logging'],
  },
]

const doelgroepen = [
  { title: 'Kantoor', icon: Briefcase },
  { title: 'Multi-tenant', icon: Users },
  { title: 'Retail', icon: ShoppingBag },
  { title: 'Logistiek', icon: Factory },
  { title: 'Hotel', icon: Hotel },
  { title: 'Zorg', icon: Hospital },
  { title: 'Onderwijs', icon: GraduationCap },
]

const platforms = [
  { name: 'KNX', desc: 'Bewezen Europese open standaard' },
  { name: 'BACnet', desc: 'Standaard voor HVAC en grote utiliteit' },
  { name: 'Modbus', desc: 'Industriële koppelingen, meters, omvormers' },
  { name: 'DALI / DALI-2', desc: 'Open standaard voor lichtsturing' },
  { name: 'MQTT', desc: 'IoT-publicatie en EMS-koppeling' },
  { name: 'OPC UA', desc: 'Industrie 4.0-integratie' },
]

const principes = [
  {
    title: 'Compliance is de bodem',
    desc: 'BACS klasse C of B, EPBD IV, BREEAM-credits. We ontwerpen het zo in. Niet achteraf aanpassen.',
    icon: ShieldCheck,
  },
  {
    title: 'Optimalisatie is de winst',
    desc: 'Klimaat en verlichting reageren op aanwezigheid, daglicht en netcondities. Energie als asset, niet als kostenpost.',
    icon: Layers,
  },
  {
    title: 'Lokaal sturen is het onderscheid',
    desc: 'Sturing op locatie. Niet cloud-afhankelijk. Werkt door bij internetuitval, blijft AVG-vriendelijk en houdt data bij jou.',
    icon: Cpu,
  },
]

export default function GebouwautomatiseringHubPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-50" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { name: 'Home', url: '/' },
              { name: 'Wat wij doen', url: '/wat-wij-doen' },
              { name: 'Oplossingen', url: '/oplossingen' },
              { name: 'Gebouwautomatisering' },
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
                <Building2 className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Gebouwautomatisering · Utiliteit
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Gebouwautomatisering voor utiliteit{' '}
                <span className="text-primary italic">in Twente.</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-slate-500 leading-relaxed mb-8 max-w-2xl text-balance">
                Klimaat, regeltechniek en toegang als één geregeld systeem. We werken met open standaarden, sturen lokaal aan en zorgen dat het voldoet aan BACS en EPBD IV.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#whitepaper"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-secondary text-white font-black rounded-2xl text-base md:text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:translate-y-0.5 transition-transform" />
                  Whitepaper aanvragen
                </Link>
                <Link
                  href="/contact?type=kennismaking"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white text-secondary border border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:border-primary/30 hover:bg-slate-50 transition-all"
                >
                  Plan kennismaking
                </Link>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/gebouwautomatisering/regeltechniek-paneel.webp"
                  alt="Schakelpaneel met laptop, engineering van een gebouwbeheersysteem in Twente"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 border border-slate-100 shadow-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    Compliance-klaar
                  </p>
                  <p className="text-sm font-bold text-secondary">BACS · EPBD IV · BREEAM</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* H2 1 — Wat slim gebouwbeheer doet */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Wat slim gebouwbeheer doet
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Eén platform dat <span className="text-primary italic">stuurt op exploitatie</span>,
              compliance en comfort.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              In een gebouw zitten klimaat, verlichting, zonwering, toegang en energie. Vaak worden ze los van elkaar geleverd. Wij ontwerpen ze als één systeem, dat samenwerkt op gedeelde data en aanwezigheid.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {principes.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-6">
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed italic">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 2 — Voor wie */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Voor wie
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Voor commercieel vastgoed.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Wij werken voor panden waar exploitatie, compliance en huurdersbelangen samenkomen. Met name in{' '}
              <strong className="text-secondary">multi-tenant complexen</strong>, waar meterdata, toegang en klimaat per huurder gescheiden moeten blijven.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {doelgroepen.map((d, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-white text-secondary group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center shadow-sm mb-3">
                    <d.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-bold text-secondary">{d.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 3 — BACS/EPBD-trigger */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,106,0,0.12),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>Compliance 2026</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                BACS-verplichting 2026 en{' '}
                <span className="text-primary italic">EPBD IV in praktijk.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Vanaf 2026 moeten utiliteitsgebouwen met meer dan 290 kW HVAC-vermogen voldoen aan een Building Automation and Control System (BACS) op minimaal klasse C uit NEN-EN-ISO 52120-1. In 2030 zakt die grens naar 70 kW. Dan valt vrijwel elk middelgroot kantoor eronder.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                EPBD IV vraagt aanvullend om individuele ruimteregeling, daglicht- en aanwezigheidsafhankelijke verlichting, energiemonitoring en interoperabiliteit met laadinfra en EMS. Wij ontwerpen daar omheen, niet er overheen.
              </p>
              <Link
                href="/advies/energielabels"
                className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group"
              >
                Lees meer over BACS-eisen en label A 2030
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-10">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-6">
                  Tijdlijn 2026 → 2030
                </p>
                <div className="space-y-6">
                  {[
                    {
                      year: '2026',
                      title: 'BACS klasse C verplicht',
                      desc: 'Utiliteit > 290 kW HVAC-vermogen.',
                    },
                    {
                      year: '2027',
                      title: 'Automatische lichtregeling',
                      desc: 'Aanwezigheid en daglicht verplicht in nieuwbouw utiliteit.',
                    },
                    {
                      year: '2030',
                      title: 'Drempel naar 70 kW',
                      desc: 'BACS verplicht voor vrijwel alle middelgrote utiliteit.',
                    },
                    {
                      year: '2030',
                      title: 'Label A kantoor',
                      desc: 'Verwachte aanscherping vanuit EPBD IV.',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                      <div className="text-2xl font-black text-primary shrink-0 w-16">
                        {item.year}
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1">{item.title}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* H2 4 — Onze aanpak */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Onze aanpak
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Eerst goed kijken. Dan pas{' '}
              <span className="text-primary italic">techniek kiezen.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              We zijn niet aan één leverancier verbonden. Per pand kijken we wat er speelt, welke installaties er al zijn, en welke route financieel én technisch het beste werkt. Daarna nemen we ook de uitvoering op ons. Vanuit Hengelo, één aanspreekpunt van scan tot service.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Scan', desc: 'Inventarisatie, BACS-toets, energie- en gebruiksprofiel.' },
              { title: 'Ontwerp', desc: 'Functioneel ontwerp, platformkeuze, fasering.' },
              { title: 'Realisatie', desc: 'Engineering, paneelbouw, installatie, programmering.' },
              { title: 'Service', desc: 'Optimalisatie, monitoring en jaarlijkse compliance-update.' },
            ].map((stap, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 h-full">
                  <div className="text-sm font-black text-slate-300 uppercase tracking-widest mb-3">
                    Stap {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">
                    {stap.title}
                  </h3>
                  <p className="text-slate-500 italic leading-relaxed">{stap.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 5 — Platforms strip */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Platforms en protocollen
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight tracking-tight">
              Open standaarden, geen vendor lock-in.
            </h2>
            <p className="text-base md:text-lg text-slate-500 italic leading-relaxed">
              Per project kiezen we de combinatie die past bij omvang, bestaande infrastructuur en compliance-eisen.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
            {platforms.map((p, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <Network className="w-5 h-5 text-primary shrink-0" />
                    <p className="font-black text-secondary tracking-tight">{p.name}</p>
                  </div>
                  <p className="text-sm text-slate-500 italic leading-relaxed pl-8">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Loxone Silver Partner — single, compact */}
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0">
                <Image
                  src="/images/partners/loxone-silver-partner.svg"
                  alt="Loxone Silver Partner, CAPAXX BV Hengelo"
                  width={200}
                  height={75}
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  Officieel partner
                </p>
                <p className="text-secondary leading-relaxed">
                  CAPAXX is officieel{' '}
                  <a
                    href="https://www.loxone.com/nlnl/partner/7553aw-hengelo/capaxx-bv/"
                    target="_blank"
                    rel="external noopener"
                    className="font-bold hover:text-primary transition-colors underline underline-offset-4"
                  >
                    Loxone Silver Partner
                  </a>
                  . We zetten Loxone in waar het past, naast KNX, BACnet en Modbus. We zijn niet aan één merk verbonden.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* H2 6 — Aandachtsgebieden */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Aandachtsgebieden
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Klimaat, comfort en toegang als{' '}
              <span className="text-primary italic">één systeem.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Hieronder een paar van de plekken waar we vaak op uitkomen. We pakken ook andere onderdelen op, in nauw overleg met de installateur en gebruiker van het pand.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {subPages.map((sub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={sub.href} className="group block h-full">
                  <article className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-primary/20 hover:shadow-2xl transition-all h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                      <p className="text-slate-500 leading-relaxed italic mb-6 flex-1">
                        {sub.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {sub.keywords.map((k, ki) => (
                          <span
                            key={ki}
                            className="text-[10px] font-black text-secondary bg-slate-50 px-3 py-1.5 rounded-lg uppercase tracking-widest"
                          >
                            {k}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                        Bekijk{' '}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 7 — Whitepaper aanvraag */}
      <section
        id="whitepaper"
        className="py-16 md:py-24 lg:py-32 bg-slate-50 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
                <FileText className="w-4 h-4" />
                <span>Whitepaper</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
                Intelligente Gebouwen,{' '}
                <span className="text-primary italic">de gids.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                Hoe ziet echte gebouwautomatisering eruit, en wat is het verschil tussen geïsoleerde apps en een holistisch systeem? Deze whitepaper (28 pagina&apos;s) loopt het door, met functievoorbeelden voor klimaat, verlichting, audio, veiligheid en toegang.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'De evolutie van gebouwautomatisering, drie generaties',
                  'Functiecatalogus: licht, klimaat, veiligheid, audio, toegang',
                  'Kostenmodel: waarom integraal vaak gunstiger uitpakt',
                  'Praktijkvoorbeelden uit utiliteit',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 italic">
                We sturen de whitepaper persoonlijk toe, meestal binnen één werkdag. Geen automatische download. Wel een echte mens die je vragen beantwoordt.
              </p>
            </FadeIn>

            <FadeIn
              direction="left"
              delay={0.2}
              className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 lg:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-slate-100"
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-3">
                  Vraag de whitepaper aan.
                </h3>
                <p className="text-slate-400 font-medium">
                  Vul je gegevens in. We sturen &apos;m persoonlijk binnen 1 werkdag.
                </p>
              </div>

              <form
                className="space-y-5"
                action={BASIN_URL}
                method="POST"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Whitepaper Intelligente Gebouwen — aanvraag"
                />
                <input type="hidden" name="formType" value="whitepaper-loxone" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://capaxx-energy.nl/oplossingen/gebouwautomatisering/bedankt"
                />

                <div className="space-y-2">
                  <label
                    htmlFor="naam"
                    className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.25rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="Volledige naam"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="bedrijf"
                    className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2"
                  >
                    Bedrijf / organisatie
                  </label>
                  <input
                    type="text"
                    id="bedrijf"
                    name="bedrijf"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.25rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="Jouw bedrijf"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2"
                  >
                    E-mailadres
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.25rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="telefoon"
                    className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2"
                  >
                    Telefoon (optioneel)
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[1.25rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="+31 ..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-white font-black rounded-[1.25rem] text-lg hover:bg-accent transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Moment...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                      <span>Vraag whitepaper aan</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-300 font-medium pt-1">
                  Geen spam. Je gegevens worden alleen gebruikt om de whitepaper te versturen.
                </p>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* H2 8 — FAQ */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn direction="right" className="lg:col-span-1">
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Veelgestelde vragen
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
                Praktische antwoorden over BACS, EPBD en GBS.
              </h2>
              <p className="text-base text-slate-500 italic leading-relaxed">
                Mis je een vraag?{' '}
                <Link
                  href="/contact"
                  className="text-secondary font-bold hover:text-primary transition-colors underline underline-offset-4"
                >
                  Stuur &apos;m direct
                </Link>
                .
              </p>
            </FadeIn>

            <div className="lg:col-span-2 space-y-4">
              {FAQS.map((faq, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <details className="group bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors overflow-hidden">
                    <summary className="cursor-pointer list-none p-6 flex items-start justify-between gap-4">
                      <h3 className="text-base md:text-lg font-bold text-secondary leading-snug">
                        {faq.question}
                      </h3>
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-white text-primary flex items-center justify-center transition-transform group-open:rotate-45 shadow-sm">
                        <span className="text-xl leading-none">+</span>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link block */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FadeIn>
              <Link
                href="/oplossingen/ems"
                className="group block bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-6">
                  <Layers className="w-7 h-7" />
                </div>
                <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-3">
                  Combineer met
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">
                  Energiemanagement (EMS)
                </h3>
                <p className="text-slate-500 italic leading-relaxed mb-6">
                  Gebouwautomatisering levert de installatie-data; EMS optimaliseert energie, opslag, laden en{' '}
                  <span className="text-secondary font-bold">netcongestie-respons</span>.
                </p>
                <span className="inline-flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                  EMS bekijken{' '}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Link
                href="/advies/breeam"
                className="group block bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <p className="text-xs font-black text-slate-300 uppercase tracking-widest mb-3">
                  Combineer met
                </p>
                <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">
                  BREEAM- en ESG-advies
                </h3>
                <p className="text-slate-500 italic leading-relaxed mb-6">
                  Onze advisering rond BREEAM Hea-credits en CSRD-rapportage gebruikt direct de data uit het GBS. Geen losse meetcampagne nodig.
                </p>
                <span className="inline-flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                  Advies bekijken{' '}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-secondary rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
            </div>

            <FadeIn className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 leading-tight">
                Klaar voor een{' '}
                <span className="text-primary italic">echte BACS-toets?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-14 leading-relaxed">
                We starten met een scan van je pand: BACS-classificatie, energieprofiel, en concrete maatregelen met ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/contact?type=energiescan"
                  className="px-8 py-4 md:px-12 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20"
                >
                  Plan een scan
                </Link>
                <Link
                  href="#whitepaper"
                  className="px-8 py-4 md:px-12 md:py-5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
                >
                  Whitepaper aanvragen
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
