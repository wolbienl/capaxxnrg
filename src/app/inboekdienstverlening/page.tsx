'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Truck,
  Home,
  Warehouse,
  Zap,
  FileCheck,
  ShieldCheck,
  BarChart3,
  ChevronDown,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import Breadcrumb from '@/components/Breadcrumb'

const doelgroepen = [
  {
    icon: Building2,
    title: 'Commercieel vastgoed',
    description: 'Kantoren, winkelcentra en mixed-use panden met laadpunten voor huurders en bezoekers.',
    voorbeeld: '10 laadpunten → ca. € 2.000 – € 5.000/jaar',
  },
  {
    icon: Truck,
    title: 'Logistiek & transport',
    description: 'Distributiecentra, depots en wagenparken met eigen laadinfra voor e-trucks en bestelwagens.',
    voorbeeld: '50 laadpunten → ca. € 15.000 – € 30.000/jaar',
  },
  {
    icon: Warehouse,
    title: 'Bedrijventerreinen',
    description: 'Gedeelde laadinfra op terrein­niveau. Combineer met cable pooling en energiehubs.',
    voorbeeld: '20+ laadpunten → ca. € 5.000 – € 15.000/jaar',
  },
  {
    icon: Home,
    title: 'Particulieren',
    description: 'Thuislaadpaal met MID-meter. Elke geladen kWh levert geld op via ERE-certificaten.',
    voorbeeld: '1 laadpunt → ca. € 200 – € 500/jaar',
  },
]

const stappen = [
  {
    nummer: '01',
    titel: 'Aanmelden',
    beschrijving: 'Vul het aanmeldformulier in. Wij nemen binnen 24 uur contact op om uw situatie te bespreken.',
  },
  {
    nummer: '02',
    titel: 'MID-check & configuratie',
    beschrijving: 'Wij controleren uw laadinfra, MID-meters en aansluitconfiguratie. Indien nodig adviseren wij aanpassingen.',
  },
  {
    nummer: '03',
    titel: 'Registratie in het REV',
    beschrijving: 'Wij registreren uw aansluitingen in het Register Energie voor Vervoer en starten met inboeken — ook met terugwerkende kracht.',
  },
  {
    nummer: '04',
    titel: 'ERE-opbrengst ontvangen',
    beschrijving: 'Uw ERE-certificaten worden verhandeld en de opbrengst wordt periodiek aan u uitgekeerd.',
  },
]

const usps = [
  {
    icon: ShieldCheck,
    titel: 'NEa-geregistreerd',
    beschrijving: 'Officieel opgenomen op de lijst van inboekdienstverleners van de Nederlandse Emissieautoriteit.',
  },
  {
    icon: Zap,
    titel: 'Van installatie tot inboeking',
    beschrijving: 'Wij leveren ook de laadinfra, zonnepanelen en het EMS. Alles vanuit één partij, optimaal afgestemd.',
  },
  {
    icon: BarChart3,
    titel: 'Maximale ERE-opbrengst',
    beschrijving: 'Eigen opwek + slim laden = 100% hernieuwbaar inboeken. Bijna dubbele ERE-waarde ten opzichte van netstroom.',
  },
]

const faqItems = [
  {
    vraag: 'Wat is een inboekdienstverlener?',
    antwoord: 'Een inboekdienstverlener registreert namens u elektriciteitsleveringen voor vervoer in het Register Energie voor Vervoer (REV). Wij nemen de volledige administratie, verificatie en verkoop van certificaten uit handen. Voor elke geregistreerde levering ontvangt u verhandelbare Emissiereductie-eenheden (ERE\'s).',
  },
  {
    vraag: 'Hoeveel verdien ik met ERE-certificaten?',
    antwoord: 'De opbrengst ligt in 2026 rond EUR 0,07 – 0,10 per geladen kWh. Met eigen zonnepanelen achter de meter kan dit hoger liggen: u boekt dan 100% hernieuwbaar in (i.p.v. 50,5% via het net), wat bijna dubbel zoveel ERE\'s oplevert.',
  },
  {
    vraag: 'Heb ik een MID-meter nodig?',
    antwoord: 'Als uw aansluiting niet exclusief voor laden is (bijv. ook kantoorverbruik), dan moet elke laadpaal een geïntegreerde MID-meter hebben. Bij een exclusieve laadaansluiting volstaat de reguliere netmeter. Wij beoordelen uw situatie kosteloos.',
  },
  {
    vraag: 'Wat is het verschil tussen HBE en ERE?',
    antwoord: 'Per 1 januari 2026 is het HBE-systeem vervangen door ERE. Het ERE-systeem kijkt niet alleen naar hernieuwbare energie, maar ook naar daadwerkelijke CO₂-reductie. De eenheid is veranderd van MJ naar gram CO₂-equivalent.',
  },
  {
    vraag: 'Kan ik dit combineren met eigen zonnepanelen?',
    antwoord: 'Ja — en dat is juist de kracht. Elektriciteit die op dezelfde locatie uit hernieuwbare bronnen wordt opgewekt en rechtstreeks aan vervoer wordt geleverd, kan voor 100% hernieuwbaar worden ingeboekt. Voorwaarde: een GvO niet-netlevering en geen SDE-subsidie op de installatie.',
  },
  {
    vraag: 'Kan ik met terugwerkende kracht inboeken?',
    antwoord: 'Ja. Leveringen gedaan in het lopende kalenderjaar kunnen met terugwerkende kracht worden geregistreerd tot 1 maart van het volgende jaar. Hoe eerder u start, hoe meer u profiteert.',
  },
  {
    vraag: 'Is CAPAXX Energy een erkende inboekdienstverlener?',
    antwoord: 'Ja. CAPAXX Energy staat op de officiële lijst van inboekdienstverleners bij de Nederlandse Emissieautoriteit (NEa). Wij zijn daarnaast BRL 9500-U gecertificeerd.',
  },
]

export default function InboekdienstverlenerPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Inboekdienstverlening' }]} className="mb-4 -mx-4 md:-mx-6" />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-black uppercase tracking-widest mb-6">
                  <FileCheck className="w-4 h-4" />
                  Officieel NEa-geregistreerd
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                  Uw laadpaal levert{' '}
                  <span className="text-primary italic">geld op.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mb-8 italic">
                  CAPAXX Energy is officieel inboekdienstverlener. Wij registreren uw laadsessies en verzilveren uw ERE-certificaten — tot € 0,10 per geladen kWh.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/inboekdienstverlening/aanmelden"
                    className="inline-flex items-center justify-center px-8 py-5 bg-secondary text-white font-black rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group active:scale-[0.98]"
                  >
                    Direct aanmelden
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="#hoe-werkt-het"
                    className="inline-flex items-center justify-center px-8 py-5 bg-white text-secondary font-black rounded-2xl text-lg hover:bg-slate-50 transition-all border-2 border-slate-200 group active:scale-[0.98]"
                  >
                    Hoe werkt het?
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/60">
                <Image
                  src="/images/inch-pro-laadpaal.webp"
                  alt="Laadpaal met MID-meter voor ERE-certificaten inboeking"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/nea-logo.svg"
                      alt="Nederlandse Emissieautoriteit"
                      width={40}
                      height={40}
                      className="w-10 h-10 bg-white rounded-lg p-1.5"
                    />
                    <div>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Geregistreerd bij</p>
                      <p className="text-white font-black text-sm">Nederlandse Emissieautoriteit (NEa)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEa Trust Bar (mobile) */}
      <section className="lg:hidden bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center gap-3">
          <Image
            src="/images/nea-logo.svg"
            alt="Nederlandse Emissieautoriteit"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <p className="text-sm text-slate-600 font-bold">
            Geregistreerd inboekdienstverlener bij de{' '}
            <a
              href="https://www.emissieautoriteit.nl/documenten/2026/02/02/lijst-van-inboekdienstverleners"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              NEa
            </a>
          </p>
        </div>
      </section>

      {/* WAT IS INBOEKDIENSTVERLENING */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
                <div className="md:col-span-3">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-6">
                    Wat is{' '}
                    <span className="text-primary italic">inboekdienstverlening?</span>
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      Sinds 2026 kunnen bedrijven en particulieren die elektriciteit leveren aan elektrisch vervoer deze leveringen registreren in het <strong>Register Energie voor Vervoer (REV)</strong>. Voor elke geregistreerde levering ontvang je <strong>Emissiereductie-eenheden (ERE&apos;s)</strong> — verhandelbare certificaten die geld opleveren.
                    </p>
                    <p>
                      Het registreren in het REV is een administratief intensief proces met strenge eisen. Een inboekdienstverlener zoals CAPAXX Energy neemt dit volledig uit handen: van registratie en verificatie tot verkoop van de certificaten.
                    </p>
                    <p>
                      Het systeem is geen subsidie maar een <strong>marktmechanisme</strong>. Brandstofleveranciers moeten hun CO₂-uitstoot compenseren via de brandstoftransitieverplichting en kopen daarvoor ERE&apos;s op de markt. Uw laadpaal levert die ERE&apos;s.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="text-xs font-black text-primary uppercase tracking-widest mb-4">Kernfeiten</h3>
                    <ul className="space-y-3">
                      {[
                        'Opbrengst: € 0,07 – € 0,10 per kWh',
                        'Eigen opwek: tot 100% hernieuwbaar',
                        'Netstroom: 50,5% hernieuwbaar (2026)',
                        'Terugwerkende kracht mogelijk',
                        'Wij regelen de volledige administratie',
                        'Jaarlijkse verificatie inclusief',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 pt-4 border-t border-slate-200 text-[11px] text-slate-400">
                      Bron:{' '}
                      <a
                        href="https://www.emissieautoriteit.nl/regelgeving/hernieuwbare-energie-voor-vervoer-eres/inboeken-hernieuwbare-energie-vervoer/inboeken-elektriciteit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-primary"
                      >
                        Nederlandse Emissieautoriteit
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WAT LEVERT HET OP — vergelijkingstabel */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-4">
                Wat levert het <span className="text-primary italic">op?</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                De opbrengst hangt af van uw laadvolume en of u eigen hernieuwbare opwek heeft.
              </p>
            </div>
          </FadeIn>
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-lg shadow-slate-100/50">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-secondary text-white">
                        <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-widest">Situatie</th>
                        <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-widest">Laadpunten</th>
                        <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-widest">Netstroom</th>
                        <th className="text-left px-6 py-4 font-black text-xs uppercase tracking-widest">+ eigen opwek</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { situatie: 'Thuislader', punten: '1', net: '€ 200 – 500', eigen: '€ 400 – 900' },
                        { situatie: 'Klein kantoor', punten: '5', net: '€ 1.000 – 2.500', eigen: '€ 2.000 – 4.500' },
                        { situatie: 'Groot kantoor', punten: '10 – 20', net: '€ 2.000 – 8.000', eigen: '€ 4.000 – 15.000' },
                        { situatie: 'Logistiek depot', punten: '20 – 50', net: '€ 8.000 – 25.000', eigen: '€ 15.000 – 45.000' },
                        { situatie: 'Bedrijventerrein', punten: '50+', net: '€ 25.000+', eigen: '€ 45.000+' },
                      ].map((row, i) => (
                        <tr key={row.situatie} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                          <td className="px-6 py-4 font-bold text-secondary">{row.situatie}</td>
                          <td className="px-6 py-4 text-slate-600">{row.punten}</td>
                          <td className="px-6 py-4 text-slate-600">{row.net}</td>
                          <td className="px-6 py-4 font-bold text-primary">{row.eigen}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400">
                  Indicatief op basis van € 0,07 – € 0,10 per kWh en gemiddeld verbruik per laadpunt van 4.000 – 6.000 kWh/jaar. Werkelijke opbrengst is afhankelijk van marktprijs ERE-certificaten.
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-4">
                Voor <span className="text-primary italic">wie?</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doelgroepen.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full flex flex-col hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary mb-4 border border-slate-100">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-secondary mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{item.description}</p>
                  <div className="bg-primary/5 rounded-xl px-4 py-3 border border-primary/10">
                    <p className="text-xs font-bold text-primary leading-snug">{item.voorbeeld}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOE WERKT HET */}
      <section id="hoe-werkt-het" className="py-16 md:py-24 lg:py-32 bg-secondary text-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-12">
                  Hoe werkt het<span className="text-primary italic">?</span>
                </h2>
                <div className="space-y-8">
                  {stappen.map((stap, i) => (
                    <div key={stap.nummer} className="flex gap-5">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          <span className="text-primary font-black text-lg">{stap.nummer}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-black mb-1">{stap.titel}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{stap.beschrijving}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/images/etrel-inch-duo-laadpaal.webp"
                  alt="Etrel INCH Duo laadpaal met MID-meter en betaalmodule"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WAAROM CAPAXX */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-4">
                Waarom <span className="text-primary italic">CAPAXX Energy?</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Niet alleen inboeking, maar het complete plaatje: van installatie tot certificaat.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usps.map((item, i) => (
              <FadeIn key={item.titel} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-secondary mb-2">{item.titel}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.beschrijving}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="flex items-center justify-center gap-4 mt-12 pt-8 border-t border-slate-100 max-w-md mx-auto">
              <Image
                src="/images/nea-logo.svg"
                alt="Nederlandse Emissieautoriteit"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Geregistreerd bij de</p>
                <a
                  href="https://www.emissieautoriteit.nl/documenten/2026/02/02/lijst-van-inboekdienstverleners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black text-secondary hover:text-primary transition-colors"
                >
                  Nederlandse Emissieautoriteit (NEa) →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight leading-tight mb-4">
                Veelgestelde <span className="text-primary italic">vragen.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-bold text-secondary group-hover:text-primary transition-colors">{item.vraag}</span>
                    <ChevronDown className="w-5 h-5 text-slate-300 shrink-0 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-sm text-slate-600 leading-relaxed">{item.antwoord}</p>
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tight leading-tight mb-6">
                Klaar om te <span className="text-primary italic">verdienen?</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto italic">
                Elke dag zonder inboeking is gemiste opbrengst. Meld u aan en wij regelen de rest — ook met terugwerkende kracht.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/inboekdienstverlening/aanmelden"
                  className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-white font-black rounded-2xl text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group active:scale-[0.98]"
                >
                  Aanmelden als klant
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-secondary font-black rounded-2xl text-lg hover:bg-slate-50 transition-all border-2 border-slate-200 group active:scale-[0.98]"
                >
                  Eerst een gesprek
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
