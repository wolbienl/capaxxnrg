import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Euro,
  Factory,
  FileCheck,
  HardHat,
  Wrench,
  Zap,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'SPRILA 2026 | Subsidie energie-infrastructuur | CAPAXX Energy',
  description:
    'SPRILA 2026: subsidie voor energie-infrastructuurprojecten die netcongestie verlichten. Wie komt in aanmerking, hoeveel subsidie is er beschikbaar en hoe vraag je aan? Alles over SPRILA voor bedrijven.',
  keywords: [
    'SPRILA 2026',
    'SPRILA subsidie',
    'subsidie energie-infrastructuur 2026',
    'netcongestie subsidie',
    'RVO subsidie energie',
    'SPRILA aanvragen',
    'subsidie bedrijventerrein energie',
    'SPRILA Twente',
  ],
}

const aanMerkingsVereisten = [
  {
    titel: 'Bedrijven en vastgoedeigenaren',
    omschrijving:
      'Ondernemingen die investeren in gedeelde energie-infrastructuur op bedrijventerreinen of in vastgoedclusters. Zowel eigenaren als exploitanten van de infrastructuur kunnen in aanmerking komen.',
  },
  {
    titel: 'Projectontwikkelaars',
    omschrijving:
      'Ontwikkelende partijen die energie-infrastructuur realiseren als onderdeel van een nieuwbouwproject of revitalisering van een bestaand terrein.',
  },
  {
    titel: 'Coöperaties en samenwerkingsverbanden',
    omschrijving:
      'Groepen bedrijven die gezamenlijk investeren in gedeelde energie-infrastructuur zoals een energiehub, collectief laadpark of gezamenlijk opslagsysteem.',
  },
  {
    titel: 'Gemeenten en publieke partijen',
    omschrijving:
      'Publieke initiatiefnemers die energie-infrastructuur realiseren ten behoeve van regionale bedrijvigheid en de verlichting van netcongestie in het openbare net.',
  },
]

const subsidieOnderdelen = [
  {
    categorie: 'Gedeelde netinfrastructuur',
    beschrijving: 'Aanleg van interne netten, transformatorstations en bekabeling voor meerdere gebruikers op één locatie.',
    highlight: false,
  },
  {
    categorie: 'Energie-opslagsystemen',
    beschrijving: 'Batterijsystemen die de piekvraag op het openbare net verlagen en de lokale opwek beter benutten.',
    highlight: true,
  },
  {
    categorie: 'Energy Management Systemen (EMS)',
    beschrijving: 'Sturingssoftware en -hardware die de energiestromen in een gedeeld systeem optimaliseren.',
    highlight: false,
  },
  {
    categorie: 'Laadinfrastructuur (gedeeld)',
    beschrijving: 'Collectieve laadparken op bedrijventerreinen die de netbelasting slim verdelen over deelnemers.',
    highlight: false,
  },
  {
    categorie: 'Meetinfrastructuur en monitoring',
    beschrijving: 'Slimme meters, data-acquisitie en monitoringssystemen die nodig zijn voor een verantwoorde exploitatie van de gedeelde infrastructuur.',
    highlight: false,
  },
]

const aanvraagStappen = [
  {
    nummer: '1',
    titel: 'Projectvoorbereiding',
    omschrijving:
      'Stel een projectdossier samen met technische omschrijving, energieprestatie-onderbouwing en een begroting. CAPAXX Energy helpt bij het opstellen van het technische deel.',
  },
  {
    nummer: '2',
    titel: 'Aanvraag indienen via RVO',
    omschrijving:
      'SPRILA-aanvragen worden ingediend bij de Rijksdienst voor Ondernemend Nederland (RVO). Aanvragen verlopen via het RVO-portaal met DigiD of eHerkenning niveau 3.',
  },
  {
    nummer: '3',
    titel: 'Beoordeling en toewijzing',
    omschrijving:
      'RVO beoordeelt de aanvraag op volledigheid, subsidiabiliteit en beschikbaar budget. Toewijzing geschiedt op volgorde van ontvangst of via tenderrondes afhankelijk van het opengestelde tijdvak.',
  },
  {
    nummer: '4',
    titel: 'Realisatie en verantwoording',
    omschrijving:
      'Na toewijzing start de realisatiefase. Bewaar alle facturen en bewijsstukken; verantwoording vindt plaats via een voortgangsrapportage en eindafrekening bij RVO.',
  },
]

const combinerenMet = [
  {
    naam: 'Flex-e subsidie 2026',
    beschrijving: 'Tot €300.000 voor batterijen en flexibiliteitsmaatregelen. Goed combineerbaar met de infracomponent van SPRILA.',
    href: '/kennisbank/flex-e-subsidie-2026',
  },
  {
    naam: 'Energie-investeringsaftrek (EIA)',
    beschrijving: 'Tot 40% fiscale aftrek op energie-efficiënte investeringen in 2026. Cumuleerbaar met SPRILA mits geen sprake is van verboden staatssteun.',
    href: '/kennisbank/energiewet-2026',
  },
  {
    naam: 'MIA/Vamil',
    beschrijving: 'Milieu-investeringsaftrek en willekeurige afschrijving voor milieuvriendelijke investeringen. Netto voordeel tot circa 14% van de investering.',
    href: '/kennisbank/energiewet-2026',
  },
]

const capaxxHelpt = [
  {
    icon: FileCheck,
    title: 'Compleet subsidiedossier',
    description:
      'Wij stellen het technische en financiële projectdossier op dat RVO vereist — inclusief energieprestatie-onderbouwing, begroting en netcongestie-impactanalyse.',
  },
  {
    icon: ClipboardList,
    title: 'Aanvraag ingediend bij RVO',
    description:
      'Wij dienen de SPRILA-aanvraag volledig in bij RVO, bewaken de tijdvakken en zorgen dat jouw aanvraag bij opening van een tijdvak direct klaarligt.',
  },
  {
    icon: Calculator,
    title: 'Combinatiestrategie subsidies',
    description:
      'We bepalen de optimale combinatie van SPRILA met Flex-e, EIA en MIA/Vamil. In veel gevallen loopt het gecombineerde voordeel op tot meer dan 50% van de investering.',
  },
  {
    icon: Wrench,
    title: 'Realisatie in eigen beheer',
    description:
      'Na toewijzing realiseren wij de gesubsidieerde energie-infrastructuur volledig: intern net, batterijopslag, EMS en alles wat bij de aanvraag is opgegeven.',
  },
]

const doelgroepen = [
  { icon: Building2, titel: 'Vastgoedeigenaar', tekst: 'Realiseer een energiehub of gedeeld laadpark op je terrein en gebruik SPRILA om de infrastructuurinvestering te verlagen.' },
  { icon: HardHat, titel: 'Projectontwikkelaar', tekst: 'Bouw toekomstbestendige terreinen met gedeelde energie-infrastructuur en gebruik SPRILA als onderdeel van de businesscase.' },
  { icon: Factory, titel: 'Industrieel bedrijf', tekst: 'Investeer in gedeelde opslag of intern net samen met buurpercelen en verlaag de gecombineerde netbelasting.' },
]

export default function Sprila2026Page() {
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
                <span className="uppercase tracking-widest text-xs">Kennisbank · Subsidie</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                SPRILA <span className="text-primary italic">2026.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                SPRILA is een subsidieregeling voor energie-infrastructuurprojecten die bijdragen aan het verlichten van netcongestie. Bedrijven, vastgoedeigenaren en ontwikkelaars die investeren in gedeelde energie-infrastructuur kunnen subsidie aanvragen via RVO.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wie komt in aanmerking */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Wie komt in aanmerking?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              SPRILA richt zich op partijen die investeren in gedeelde energie-infrastructuur met een aantoonbaar effect op de netbelasting.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {aanMerkingsVereisten.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start space-x-4 bg-white rounded-2xl p-8 border border-slate-100 h-full">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{item.titel}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.omschrijving}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidiabele onderdelen */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Wat is subsidiabel?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              SPRILA vergoedt investeringen in energie-infrastructuur die de belasting op het openbare net structureel verlagen.
            </p>
          </FadeIn>

          <div className="space-y-4 max-w-4xl">
            {subsidieOnderdelen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className={`rounded-2xl p-6 border ${item.highlight ? 'bg-primary/5 border-primary/20' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="flex items-start gap-4">
                    <Euro className={`w-5 h-5 mt-0.5 shrink-0 ${item.highlight ? 'text-primary' : 'text-slate-400'}`} />
                    <div>
                      <h3 className={`font-bold mb-1 ${item.highlight ? 'text-primary' : 'text-secondary'}`}>
                        {item.categorie}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">{item.beschrijving}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Aanvraagprocedure */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="mb-12 md:mb-16">
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6 px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 tracking-widest uppercase text-sm">
                <ClipboardList className="w-4 h-4" />
                <span>Aanvraagprocedure</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary tracking-tight">
                Hoe vraag je SPRILA aan?
              </h2>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
              <div className="space-y-6">
                {aanvraagStappen.map((stap, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="relative flex items-start md:pl-16">
                      <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-primary text-white items-center justify-center font-black text-sm z-10 shrink-0 shadow-lg shadow-primary/30">
                        {stap.nummer}
                      </div>
                      <div className="w-full rounded-2xl p-6 bg-white border border-slate-100">
                        <h3 className="text-lg font-bold text-secondary mb-2">{stap.titel}</h3>
                        <p className="text-slate-500 leading-relaxed">{stap.omschrijving}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combineren met andere subsidies */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Combineren met andere subsidies
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              SPRILA is in veel gevallen cumuleerbaar met andere regelingen. Zo vergroot je het financiële voordeel per investering aanzienlijk.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
            {combinerenMet.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full flex flex-col">
                    <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                      {item.naam}
                    </h3>
                    <p className="text-slate-500 leading-relaxed flex-grow mb-4">{item.beschrijving}</p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors text-sm">
                      Meer info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Wat betekent SPRILA voor jou?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {doelgroepen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">{item.titel}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{item.tekst}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe CAPAXX helpt */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Hoe CAPAXX Energy <span className="text-primary italic">helpt</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Wij regelen SPRILA van A tot Z — van het eerste dossier tot en met de opgeleverde installatie.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capaxxHelpt.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col hover:border-primary/20 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
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
              Wil je weten hoeveel subsidie er voor jouw project haalbaar is? We doen een gratis scan en laten zien hoe SPRILA, Flex-e, EIA en MIA/Vamil samen werken voor jouw situatie.
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
