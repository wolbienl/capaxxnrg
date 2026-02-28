import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Battery,
  BookOpen,
  Building2,
  Cable,
  Factory,
  FileText,
  HardHat,
  Network,
  Settings,
  Sun,
  Wrench,
  Zap,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Energiehubs | Kennisbank | CAPAXX Energy',
  description:
    'Wat is een energiehub? Gedeelde energie-infrastructuur voor bedrijventerreinen en vastgoedparken. Opwek, opslag en verdeling gecombineerd op één locatie — netcongestie omzeilen en kosten delen.',
  keywords: [
    'energiehub',
    'energiehubs bedrijventerrein',
    'gedeelde energie-infrastructuur',
    'energiehub netcongestie',
    'lokale energiegemeenschap',
    'energiehub Twente',
    'cable pooling energiehub',
    'collectieve energievoorziening',
    'energiehub vastgoed',
  ],
}

const hoeWerktHet = [
  {
    icon: Sun,
    title: 'Opwek',
    description:
      'Zonnepanelen, windturbines of WKK op of nabij de locatie produceren stroom die direct in de hub beschikbaar komt voor alle deelnemers.',
  },
  {
    icon: Battery,
    title: 'Opslag',
    description:
      'Een centrale of decentrale batterij buffert overtollige opwek en levert stroom als de vraag de productie overstijgt. Dit reduceert de piekvraag op het openbare net.',
  },
  {
    icon: Network,
    title: 'Intern netwerk',
    description:
      'Een intern middenspannings- of laagspanningsnet verbindt alle deelnemers. Stroom stroomt direct tussen opwekkers en verbruikers zonder het openbare net te belasten.',
  },
  {
    icon: Zap,
    title: 'Slimme sturing (EMS)',
    description:
      'Een Energy Management System stuurt de stroomstromen in de hub op basis van tarieven, vraagprofielen en opslagstatus. Dit maximaliseert eigen gebruik en minimaliseert netbelasting.',
  },
]

const voordelen = [
  {
    title: 'Netcongestie omzeilen',
    description:
      'Door intern stroom uit te wisselen hoeft minder capaciteit via het openbare net te lopen. Dit verlaagt de gevraagde transportcapaciteit en maakt aansluiting in congestiegebieden haalbaar.',
  },
  {
    title: 'Lagere netwerkkosten',
    description:
      'Minder gecontracteerd transportvermogen betekent lagere nettarieven. Bij een goed ontworpen energiehub kan de nettarifbesparing oplopen tot 30–50% ten opzichte van individuele aansluitingen.',
  },
  {
    title: 'Gedeelde investeringskosten',
    description:
      'Infrastructuur zoals transformatoren, bekabeling, batterijen en EMS wordt gedeeld. Per deelnemer zijn de investerings- en onderhoudskosten substantieel lager dan bij individuele oplossingen.',
  },
  {
    title: 'Hogere benutting van opwek',
    description:
      'Zonne-energie of WKK die één gebruiker niet direct nodig heeft, wordt direct beschikbaar gesteld aan andere deelnemers. Dit verhoogt het eigenverbruikspercentage en reduceert salderingsverliezen.',
  },
  {
    title: 'Toekomstbestendig',
    description:
      'Een energiehub is schaalbaar: extra opwek, opslag of deelnemers kunnen eenvoudig worden toegevoegd. De infrastructuur groeit mee met de behoefte van het terrein of de portefeuille.',
  },
  {
    title: 'Minder afhankelijkheid',
    description:
      'Bij netuitval of congestiebeperkingen blijft de hub intern operationeel zolang lokale opwek en opslag toereikend zijn. Dit verhoogt de leveringszekerheid voor alle deelnemers.',
  },
]

const toepassingen = [
  {
    icon: Building2,
    title: 'Bedrijventerreinen',
    description:
      'Meerdere bedrijven op één terrein delen gezamenlijk opwek, opslag en een intern net. Cable pooling en GTO\'s vormen de juridische basis; de energiehub de technische invulling.',
  },
  {
    icon: HardHat,
    title: 'Vastgoedportefeuilles',
    description:
      'Eigenaren van meerdere panden op dezelfde locatie of in dezelfde wijk kunnen een energiehub realiseren die alle panden bedient en de totale netbelasting verlaagt.',
  },
  {
    icon: Factory,
    title: 'Industrieclusters',
    description:
      'Grootverbruikers met complementaire verbruiksprofielen — zoals een koelhuis en een productiebedrijf — profiteren het meest van een gedeeld energiesysteem met piekverdeling.',
  },
]

const capaxxHelpt = [
  {
    icon: Settings,
    title: 'Ontwerp op maat',
    description:
      'We ontwerpen de optimale energiehub voor jouw locatie: welke combinatie van opwek, opslag, intern net en EMS past bij jouw verbruiksprofiel en transportruimte?',
  },
  {
    icon: FileText,
    title: 'Subsidies volledig geregeld',
    description:
      'Flex-e, SPRILA, EIA en MIA/Vamil — wij stellen het dossier op en dienen alle aanvragen in bij RVO. Inclusief de combinatiestrategie die het financieel voordeel maximaliseert.',
  },
  {
    icon: Wrench,
    title: 'Technische realisatie',
    description:
      'Van intern middenspanningsnet en transformatoren tot batterijopslag en EMS — wij bouwen, commissionen en leveren de complete energiehub op.',
  },
  {
    icon: Building2,
    title: 'Netbeheerder & juridisch',
    description:
      'We verzorgen de transportaanvraag bij jouw netbeheerder, regelen de cable pooling-structuur of GTO en begrijpen het juridische kader van de Energiewet 2026 volledig.',
  },
]

const relateerdeConcepten = [
  {
    title: 'Cable pooling & energiegemeenschappen',
    description: 'De juridische basis voor het gezamenlijk delen van een netaansluiting door meerdere partijen — de fundering van elke energiehub.',
    href: '/kennisbank/cable-pooling',
    icon: Cable,
  },
  {
    title: 'Flexibele transportrechten',
    description: 'Non-firm en tijdsblokgebonden rechten die de hub laten functioneren ook als het openbare net onder druk staat.',
    href: '/kennisbank/transportrechten',
    icon: Zap,
  },
  {
    title: 'Energiewet 2026',
    description: 'De nieuwe wet verankert energiegemeenschappen en GTO\'s wettelijk. Dit geeft de energiehub als concept een sterke juridische basis.',
    href: '/kennisbank/energiewet-2026',
    icon: BookOpen,
  },
]

export default function EnergiehubsPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* Hero */}
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
                Energiehubs <span className="text-primary italic">uitgelegd.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Een energiehub combineert opwek, opslag en gedeeld verbruik op één locatie. Bedrijven op een terrein of in een portefeuille wisselen direct stroom uit — zonder de omweg via het volle openbare net.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Hoe werkt een energiehub?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Vier bouwstenen vormen samen een functionerende energiehub. Ze zijn onafhankelijk van elkaar inzetbaar, maar versterken elkaars effect maximaal als combinatie.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {hoeWerktHet.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Voordelen van een energiehub
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {voordelen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 h-full">
                  <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Toepassingen */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Toepassingen in de praktijk
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Een energiehub is geen theorie — het is vandaag al realiseerbaar in Twente en omgeving voor drie hoofddoelgroepen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {toepassingen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gerelateerde concepten */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Gerelateerde concepten
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Een energiehub staat nooit op zichzelf. Dit zijn de juridische en technische bouwstenen die eronder liggen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
            {relateerdeConcepten.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed flex-grow mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors text-sm">
                      Lees meer <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe CAPAXX helpt */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Hoe CAPAXX Energy <span className="text-primary italic">helpt</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Van ontwerp en subsidieaanvraag tot volledige realisatie — wij regelen het hele traject.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capaxxHelpt.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
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
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wil je weten of een energiehub past bij jouw bedrijventerrein of vastgoedportefeuille? We doen een gratis quickscan en laten zien wat er haalbaar is — inclusief subsidies.
            </p>
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
