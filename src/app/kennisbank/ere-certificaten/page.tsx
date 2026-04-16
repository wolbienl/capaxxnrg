import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Zap,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Calculator,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import Breadcrumb from '@/components/Breadcrumb'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'ERE-certificaten: compleet overzicht 2026',
  description:
    'Wat zijn ERE-certificaten? Hoe werken ze, wat leveren ze op en wat is het verschil met HBE? Inclusief berekening, MID-meter eisen en tips voor maximale opbrengst.',
  keywords: [
    'ERE certificaten',
    'ERE-certificaten 2026',
    'emissiereductie-eenheden',
    'HBE naar ERE',
    'ERE waarde',
    'ERE berekening',
    'MID-meter laadpaal',
    'brandstoftransitieverplichting',
    'laadpaal geld verdienen',
  ],
  path: '/kennisbank/ere-certificaten',
})

export default function EreCertificatenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Kennisbank', url: '/kennisbank' }, { name: 'ERE-certificaten' }]} className="mb-4 -mx-4 md:-mx-6" />
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <BookOpen className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Kennisbank</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                ERE-certificaten <span className="text-primary italic">doorgrond.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Alles over Emissiereductie-eenheden: hoe ze werken, wat ze opleveren en hoe u de opbrengst maximaliseert met eigen opwek.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Main content */}
            <div className="lg:col-span-2 max-w-none">
              <FadeIn>

                {/* Definitie */}
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8 mb-10">
                  <p className="text-base md:text-lg text-secondary leading-relaxed">
                    <strong>Een ERE-certificaat</strong> (Emissiereductie-eenheid) is een verhandelbare eenheid die u ontvangt voor het leveren van elektriciteit aan elektrisch vervoer. Per 1 januari 2026 vervangt het ERE-systeem het eerdere HBE-systeem. Elke ERE vertegenwoordigt een hoeveelheid vermeden CO₂-uitstoot.
                  </p>
                </div>

                {/* Van HBE naar ERE */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Van HBE naar ERE
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Tot 2026 werkten we met het HBE-systeem (Hernieuwbare Brandstofeenheden). Dit keek uitsluitend naar de hoeveelheid hernieuwbare energie in MJ. Het nieuwe ERE-systeem gaat een stap verder: het meet de daadwerkelijke <strong>CO₂-reductie</strong> in gram CO₂-equivalent.
                </p>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-10 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="text-left px-5 py-3 font-black text-xs text-slate-400 uppercase tracking-widest"></th>
                        <th className="text-left px-5 py-3 font-black text-xs text-slate-400 uppercase tracking-widest">HBE (tot 2026)</th>
                        <th className="text-left px-5 py-3 font-black text-xs text-slate-400 uppercase tracking-widest">ERE (vanaf 2026)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { kenmerk: 'Eenheid', hbe: 'MJ (megajoule)', ere: 'g CO₂-eq' },
                        { kenmerk: 'Focus', hbe: 'Hernieuwbaarheid', ere: 'CO₂-reductie' },
                        { kenmerk: 'Sectorgebonden', hbe: 'Nee', ere: 'Ja (land, binnenvaart, zee)' },
                        { kenmerk: 'Register', hbe: 'REV', ere: 'REV' },
                        { kenmerk: 'Verplichting', hbe: 'Jaarverplichting', ere: 'Brandstoftransitieverplichting' },
                      ].map((row, i) => (
                        <tr key={row.kenmerk} className={i % 2 === 0 ? '' : 'bg-slate-50/50'}>
                          <td className="px-5 py-3 font-bold text-secondary">{row.kenmerk}</td>
                          <td className="px-5 py-3 text-slate-500">{row.hbe}</td>
                          <td className="px-5 py-3 text-slate-600 font-medium">{row.ere}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Hoe worden ERE's berekend */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Hoe worden ERE&apos;s berekend?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  De berekening van het aantal ERE&apos;s gebeurt automatisch in het REV. De formules die de NEa hanteert:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Calculator className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Netstroom (50,5%)</span>
                    </div>
                    <p className="text-sm text-secondary font-mono">
                      ERE-E = levering [kWh] × 0,505 × 183 [g/MJ] × 3,6 [MJ/kWh] / 1000
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Calculator className="w-4 h-4 text-primary" />
                      <span className="text-xs font-black text-primary uppercase tracking-widest">100% hernieuwbaar</span>
                    </div>
                    <p className="text-sm text-secondary font-mono">
                      ERE-E = levering [kWh] × 183 [g/MJ] × 3,6 [MJ/kWh] / 1000
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Met eigen hernieuwbare opwek achter de meter ontvangt u dus bijna <strong>dubbel zoveel ERE&apos;s</strong> per kWh. Dat is het verschil tussen 50,5% (netpercentage hernieuwbaar 2026) en 100%.
                </p>

                {/* MID-meter */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  MID-meter: wanneer verplicht?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Of u een MID-meter nodig heeft, hangt af van uw aansluitconfiguratie:
                </p>
                <div className="space-y-3 mb-10">
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-secondary text-sm">Exclusieve aansluiting voor vervoer</p>
                      <p className="text-sm text-slate-500">De reguliere netmeter volstaat. Geen extra MID-meter vereist.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-secondary text-sm">Gedeelde aansluiting (ook kantoor, winkel etc.)</p>
                      <p className="text-sm text-slate-500">Elke laadpaal moet een geïntegreerde MID-gecertificeerde meter hebben. Een losse meter in de meterkast volstaat niet.</p>
                    </div>
                  </div>
                </div>

                {/* Eigen opwek */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Maximaal profiteren met eigen zonnepanelen
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  De combinatie van eigen hernieuwbare opwek en laadinfra is bijzonder interessant voor ERE-opbrengst. U kunt 100% hernieuwbaar inboeken als aan deze voorwaarden is voldaan:
                </p>
                <ul className="space-y-2.5 mb-4">
                  {[
                    'Opwek en levering op dezelfde locatie (zelfde WOZ-object)',
                    'Rechtstreeks aan vervoer geleverd via bemeterd leverpunt',
                    'Garantie van Oorsprong (GvO) niet-netlevering',
                    'Geen SDE-subsidie op de opwekinstallatie',
                    'Elektriciteit mag niet zijn teruggeleverd aan het net',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Dit is precies waar CAPAXX Energy het verschil maakt: wij leveren de zonnepanelen, de laadinfra en het EMS, en boeken vervolgens de maximale ERE-opbrengst voor u in. Alles vanuit één partij.
                </p>

                {/* Marktwaarde en BTV */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Marktwaarde en brandstoftransitieverplichting
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  ERE-certificaten zijn geen subsidie. De waarde komt voort uit de <strong>brandstoftransitieverplichting (BTV)</strong>: brandstofleveranciers moeten een toenemend percentage fossiele brandstoffen vervangen door hernieuwbare alternatieven. Zij kopen ERE&apos;s op de markt om aan deze verplichting te voldoen.
                </p>
                <p className="text-slate-600 leading-relaxed mb-10">
                  De marktprijs van ERE&apos;s fluctueert op basis van vraag en aanbod. In 2026 ligt de prijs rond <strong>€ 0,07 – € 0,10 per kWh</strong> voor elektriciteit. De verwachting is dat deze prijs stabiel blijft of stijgt doordat de BTV-verplichting jaarlijks toeneemt.
                </p>

                {/* Bronnen */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Bronnen</h3>
                  <ul className="space-y-2 text-sm text-slate-500">
                    <li>
                      <a href="https://www.emissieautoriteit.nl/regelgeving/hernieuwbare-energie-voor-vervoer-eres/inboeken-hernieuwbare-energie-vervoer/inboeken-elektriciteit" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        NEa — Inboeken elektriciteit
                      </a>
                    </li>
                    <li>
                      <a href="https://www.emissieautoriteit.nl/documenten/2026/02/02/lijst-van-inboekdienstverleners" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        NEa — Lijst van inboekdienstverleners
                      </a>
                    </li>
                    <li>
                      <a href="https://www.rvo.nl/onderwerpen/bio-energie/hernieuwbare-energie-vervoer" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                        RVO — Hernieuwbare energie voor vervoer
                      </a>
                    </li>
                  </ul>
                </div>

              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <FadeIn delay={0.1}>
                  <div className="bg-secondary rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-black uppercase tracking-widest">Direct inboeken?</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                      CAPAXX Energy is officieel inboekdienstverlener bij de NEa. Wij verzorgen alles — van registratie tot uitkering.
                    </p>
                    <Link
                      href="/inboekdienstverlening/aanmelden"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-secondary font-black rounded-xl text-sm hover:bg-primary/90 transition-colors"
                    >
                      Aanmelden
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/etrel-inch-duo-laadpaal.webp"
                      alt="Etrel INCH Duo laadpaal met MID-meter"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Gerelateerd</h3>
                    <ul className="space-y-2.5">
                      {[
                        { label: 'Inboeken elektriciteit', href: '/kennisbank/inboeken-elektriciteit' },
                        { label: 'Inboekdienstverlening', href: '/inboekdienstverlening' },
                        { label: 'Laadinfra', href: '/oplossingen/laadinfra' },
                        { label: 'Zonnepanelen', href: '/oplossingen/zonnepanelen' },
                        { label: 'EMS', href: '/oplossingen/ems' },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link href={item.href} className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
                            <ArrowRight className="w-3.5 h-3.5 text-primary" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
