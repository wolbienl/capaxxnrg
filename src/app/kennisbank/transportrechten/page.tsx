import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Zap,
  Clock,
  Calendar,
  Percent,
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  FileCheck,
  Lightbulb,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Flexibele Transportrechten | Kennisbank',
  description:
    'Non-firm, TDTR en tijdsblokgebonden transportrechten. Netcongestie oplossen met 50-65% nettariefkorting. Vergelijk firm vs non-firm vs TDTR.',
  keywords: [
    'non-firm transportrecht',
    'TDTR',
    'tijdsduurgebonden transportrecht',
    'flexibele transportrechten netcongestie',
    'firm transportrecht',
    'tijdsblokgebonden transport',
    'ACM codebesluit transportrechten',
    'netbeheerder transportcapaciteit',
  ],
  path: '/kennisbank/transportrechten',
})

const transportrechten = [
  {
    icon: Zap,
    title: 'Volledig vast (firm)',
    description:
      'Klassiek transportrecht, maar in congestiegebieden niet of nauwelijks verkrijgbaar.',
    stats: '100% zekerheid op gecontracteerd vermogen, 24/7',
  },
  {
    icon: Percent,
    title: 'Volledig variabel (non-firm)',
    description:
      'Uitsluitend toegang bij restcapaciteit. kW-contractcomponent op €0 gezet = circa 50% korting op nettarief. Aangeslotene behoudt positie op wachtlijst voor vast transport.',
    stats: '~50% nettariefkorting • Wachtlijstpositie behouden',
  },
  {
    icon: Clock,
    title: 'Tijdsblokgebonden',
    description:
      'Uitsluitend bij regionale netbeheerders. Vast transport binnen vooraf afgesproken tijdsvensters, bijvoorbeeld nachts.',
    stats: 'Regionale netbeheerders • Vaste tijdsvensters',
  },
  {
    icon: Calendar,
    title: 'Tijdsduurgebonden (TDTR)',
    description:
      'Uitsluitend bij TenneT. Minimaal 85% van de jaaruren vast transport, max 15% flexibele beperking. Korting 50-65% op nettarieven.',
    stats: '50-65% nettariefkorting • Min. 85% jaaruren vast',
  },
]

const netbeheerders = [
  {
    name: 'TenneT',
    description:
      'Meest innovatief met TDTR-contracten, duidelijk beleid voor batterijopslag >70 MW.',
  },
  {
    name: 'Liander',
    description:
      'Succesvol pilot "klant sluit zichzelf aan" op middenspanningsnet.',
  },
  {
    name: 'Enexis',
    description:
      'Eerste met open portaal met meerdere erkende aannemers, nieuwe aanpak batterij-aansluitingen.',
  },
  {
    name: 'Stedin',
    description:
      'Ervaart zelfaanleg als "niet mainstream maar overwegend positief", actief met energiehubs in Vlissingen en Lage Weide Utrecht.',
  },
]

const capaxxServices = [
  {
    icon: Calculator,
    title: 'Financiële modellering',
    description:
      'Vergelijking firm vs non-firm vs TDTR scenario\'s, impact op businesscase.',
  },
  {
    icon: FileCheck,
    title: 'Onderhandeling met netbeheerder',
    description:
      'Beoordelen of weigering terecht is (fysieke vs contractuele congestie).',
  },
  {
    icon: Percent,
    title: 'Subsidie-optimalisatie',
    description:
      'SDE++, Flex-e (€62 mln, tot €300.000), EIA.',
  },
  {
    icon: Lightbulb,
    title: 'Operationele begeleiding',
    description:
      'Aanpassen productieproces aan flexibele rechten.',
  },
]

export default function TransportrechtenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <BookOpen className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Kennisbank</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Flexibele <span className="text-primary italic">transportrechten.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                De ACM heeft in 2024 een reeks codebesluiten genomen die het speelveld fundamenteel
                veranderen. Per april 2025 bestaan er vier transportrechtvormen, elk met eigen
                voor- en nadelen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VIER TRANSPORTRECHTEN */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Vier transportrechtvormen
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Sinds april 2025 onderscheidt de ACM vier vormen van transportrechten. De keuze
              hangt af van je locatie, netbeheerder en type installatie.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {transportrechten.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    {item.stats}
                  </p>
                  <p className="text-slate-500 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CASE: GIGA STORAGE LEOPARD */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Case: GIGA Storage Leopard
            </h2>
            <div className="bg-primary/5 border-2 border-primary/20 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 tracking-tight">
                    Eerste TDTR-overeenkomst tussen TenneT en GIGA Storage
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Het Leopard-project in Delfzijl: 300 MW / 1.200 MWh. Bijzonder geschikt voor
                    batterijopslag en industriële flexibiliteit.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-xl font-bold text-secondary text-sm">
                  300 MW
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-xl font-bold text-secondary text-sm">
                  1.200 MWh
                </span>
                <span className="inline-flex items-center px-4 py-2 bg-white rounded-xl font-bold text-primary text-sm">
                  Delfzijl
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* NETBEHEERDERS */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Netbeheerders
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
              Elke netbeheerder heeft een eigen aanpak voor flexibele transportrechten en
              innovatieve aansluitingen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {netbeheerders.map((nb, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {nb.name}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow">{nb.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CAPAXX HELPS */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Hoe CAPAXX Energy <span className="text-primary italic">helpt</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capaxxServices.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Geen dikke praat, wel <span className="italic text-primary">resultaat.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=quickscan"
                className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Gratis quickscan aanvragen <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/kennisbank"
                className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-white/10 text-white font-bold rounded-2xl text-base md:text-xl hover:bg-white/20 transition-all border border-white/20"
              >
                Terug naar kennisbank
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
