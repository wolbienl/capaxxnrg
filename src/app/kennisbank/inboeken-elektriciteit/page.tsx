import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Users,
  Building,
  Zap,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import Breadcrumb from '@/components/Breadcrumb'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Inboeken elektriciteit: hoe werkt het REV?',
  description:
    'Hoe werkt het inboeken van elektriciteit voor vervoer? Register Energie voor Vervoer, drempelwaarde, eisen en de rol van de inboekdienstverlener.',
  keywords: [
    'inboeken elektriciteit',
    'Register Energie voor Vervoer',
    'REV register',
    'drempelwaarde inboeken',
    'inboekdienstverlener',
    'elektrisch vervoer registratie',
    'ERE inboeken',
    '2 miljoen kWh',
  ],
  path: '/kennisbank/inboeken-elektriciteit',
})

export default function InboekenElektriciteitPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb items={[{ name: 'Home', url: '/' }, { name: 'Kennisbank', url: '/kennisbank' }, { name: 'Inboeken elektriciteit' }]} className="mb-4 -mx-4 md:-mx-6" />
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <BookOpen className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Kennisbank</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Inboeken elektriciteit <span className="text-primary italic">uitgelegd.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Van drempelwaarde tot jaarafsluiting: hoe het Register Energie voor Vervoer werkt en wanneer u een inboekdienstverlener nodig heeft.
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
                    <strong>Inboeken van elektriciteit</strong> is het registreren van elektriciteitsleveringen aan elektrisch vervoer in het Register Energie voor Vervoer (REV) bij de Nederlandse Emissieautoriteit (NEa). Voor elke geregistreerde levering ontvang je Emissiereductie-eenheden (ERE&apos;s) — verhandelbare certificaten.
                  </p>
                </div>

                {/* Wat is het REV */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Het Register Energie voor Vervoer (REV)
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Het REV is het online register van de NEa waarin alle energieleveringen aan vervoer worden vastgelegd. Binnen de ERE-systematiek registreren bedrijven hun elektriciteitsleveringen hier. ERE&apos;s worden <strong>direct bijgeschreven</strong> na een inboeking.
                </p>
                <p className="text-slate-600 leading-relaxed mb-10">
                  Het register is toegankelijk voor twee typen partijen: zelfstandige leveranciers die boven de drempelwaarde zitten, en inboekdienstverleners die namens derden registreren.
                </p>

                {/* Wie mag inboeken */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Wie mag inboeken?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 border border-slate-100">
                      <Building className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-black text-secondary mb-2">Zelfstandige leverancier</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Ingeschreven bij de KvK en levert <strong>minimaal 2 miljoen kWh/jaar</strong> aan vervoer. Mag zelf registreren in het REV.
                    </p>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-3 border border-primary/10">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-black text-secondary mb-2">Inboekdienstverlener</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Registreert <strong>gebundeld</strong> namens bedrijven en particulieren. Neemt alle administratie, verificatie en verkoop uit handen.
                    </p>
                  </div>
                </div>

                {/* Drempelwaarde */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Zelf registreren of via een dienstverlener?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Om zelfstandig in het REV te mogen registreren, moet een bedrijf minimaal <strong>2 miljoen kWh per jaar</strong> aan vervoer leveren. Dit is een eis voor zelfstandige registratie — niet voor deelname aan het systeem. De meeste bedrijven en alle particulieren schakelen daarom een inboekdienstverlener in.
                </p>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-10">
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Hoe verhoudt zich dat?</h3>
                  <ul className="space-y-2">
                    {[
                      'Thuislader: ~3.000 – 5.000 kWh/jaar → via inboekdienstverlener',
                      'Kantoor met 10 laadpunten: ~40.000 – 60.000 kWh/jaar → via inboekdienstverlener',
                      'Logistiek depot (50 punten): ~200.000 – 300.000 kWh/jaar → via inboekdienstverlener',
                      'Groot laadstation (200+ punten): kan boven 2M kWh komen → mogelijk zelfstandig',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eisen aan aansluiting */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Eisen aan de aansluiting
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Alleen elektriciteit die <strong>exclusief aan vervoer</strong> is geleverd komt in aanmerking. Dit heeft consequenties voor uw aansluitconfiguratie:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-secondary text-sm">Exclusieve aansluiting</p>
                      <p className="text-sm text-slate-500">Alleen vervoer achter de meter. De netmeter volstaat als verkoopmeter. Kan aangevraagd worden via een MLOEA (Meervoudig Leveranciers Onafhankelijk Elektriciteits Allocatiepunt).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-secondary text-sm">Niet-exclusieve aansluiting</p>
                      <p className="text-sm text-slate-500">Ook kantoor- of winkelverbruik achter dezelfde meter. Elke laadpaal moet dan beschikken over een eigen MID-gecertificeerde meter.</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-10">
                  De NEa controleert via het Centraal Aansluitingenregister (CAR) of de netaansluiting op naam staat van de partij die de ERE&apos;s claimt.
                </p>

                {/* Verificatie en jaarafsluiting */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Verificatie en jaarafsluiting
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Het inboekproces kent strikte deadlines:
                </p>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-10 shadow-sm">
                  <table className="w-full text-sm">
                    <tbody>
                      {[
                        { wanneer: 'Lopend jaar', wat: 'Leveringen inboeken in het REV' },
                        { wanneer: 'Tot 1 maart jaar X+1', wat: 'Laatste moment om leveringen uit jaar X in te boeken of te wijzigen' },
                        { wanneer: 'Voor 1 april', wat: 'Inboekverificatieverklaring vereist' },
                        { wanneer: '1 april', wat: 'Jaarafsluiting — ERE\'s boven spaarlimiet vervallen' },
                      ].map((row, i) => (
                        <tr key={row.wanneer} className={i % 2 === 0 ? '' : 'bg-slate-50/50'}>
                          <td className="px-5 py-3 font-bold text-secondary whitespace-nowrap">{row.wanneer}</td>
                          <td className="px-5 py-3 text-slate-600">{row.wat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Wat komt in aanmerking */}
                <h2 className="text-2xl md:text-3xl font-black text-secondary tracking-tight mb-4">
                  Wat mag wel en niet ingeboekt worden?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="text-xs font-black text-green-600 uppercase tracking-widest mb-3">Wel</h3>
                    <ul className="space-y-2">
                      {[
                        'Elektrische auto\'s en bestelbussen',
                        'E-trucks en zwaar transport',
                        'Walstroom aan schepen',
                        'Verwisselbare voertuigaccu\'s',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <h3 className="text-xs font-black text-red-500 uppercase tracking-widest mb-3">Niet</h3>
                    <ul className="space-y-2">
                      {[
                        'Spoorvervoer (treinen, trams)',
                        'Dokstroom voor luchtvaartuigen',
                        'Losse accupakketten (niet in voertuig)',
                        'Aggregaat-opgewekte stroom',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

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
                      <h3 className="text-sm font-black uppercase tracking-widest">Laat ons inboeken</h3>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed mb-5">
                      CAPAXX Energy is officieel inboekdienstverlener. Wij nemen de volledige administratie uit handen.
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

                <FadeIn delay={0.2}>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Gerelateerd</h3>
                    <ul className="space-y-2.5">
                      {[
                        { label: 'ERE-certificaten', href: '/kennisbank/ere-certificaten' },
                        { label: 'Inboekdienstverlening', href: '/inboekdienstverlening' },
                        { label: 'Laadinfra', href: '/oplossingen/laadinfra' },
                        { label: 'Energiewet 2026', href: '/kennisbank/energiewet-2026' },
                        { label: 'Zonnepanelen', href: '/oplossingen/zonnepanelen' },
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
