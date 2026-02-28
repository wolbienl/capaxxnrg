import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Battery,
  BookOpen,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  FileCheck,
  HardHat,
  Wrench,
  Zap,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Flex-e subsidie 2026 | Kennisbank',
  description:
    'Flex-e subsidie 2026: €62 miljoen voor batterijen, EMS en flexibiliteitsmaatregelen. Tot €300.000 per investering via RVO. Combineerbaar met EIA en MIA/Vamil.',
  keywords: [
    'Flex-e subsidie 2026',
    'Flex-e subsidie batterij',
    'flexibiliteitssubsidie 2026',
    'RVO Flex-e',
    'subsidie batterijopslag 2026',
    'Flex-e EMS subsidie',
    'netcongestie subsidie 2026',
    'Flex-e aanvragen',
    'subsidie energieopslag bedrijven',
  ],
  path: '/kennisbank/flex-e-subsidie-2026',
})

const watVergoedt = [
  {
    icon: Battery,
    titel: 'Batterijopslagsystemen',
    beschrijving:
      'Stationaire batterijen die de piekvraag op het openbare net reduceren en lokale opwek bufferen. Zowel kleinere systemen (enkele kWh) als grootschalige installaties (MWh) zijn subsidiabel.',
    highlighted: true,
  },
  {
    icon: Zap,
    titel: 'Energy Management Systemen (EMS)',
    beschrijving:
      'Hardware en software voor de sturing van energiestromen: slim laden, vraagrespons, optimalisatie van eigenverbruik en aansturing van flexibele lasten.',
    highlighted: false,
  },
  {
    icon: Building2,
    titel: 'Slimme laadinfrastructuur',
    beschrijving:
      'Bidirectionele en slim gestuurde laders die deelnemen aan vraagrespons of netflexibiliteit. De laadinfrastructuur moet aantoonbaar bijdragen aan het verlagen van de netpiek.',
    highlighted: false,
  },
  {
    icon: Factory,
    titel: 'Vraagrespons-installaties',
    beschrijving:
      'Technische aanpassingen waarmee een bedrijf aantoonbaar flexibel kan reageren op netsignalen — zoals het tijdelijk verlagen van productievermogen of het omschakelen van energiedrager.',
    highlighted: false,
  },
]

const bedragen = [
  {
    label: 'Totaal beschikbaar budget',
    waarde: '€62 miljoen',
    toelichting: 'Totaal budget voor de Flex-e subsidieregeling in 2026.',
  },
  {
    label: 'Maximaal per investering',
    waarde: '€300.000',
    toelichting: 'Per project of per locatie; cumuleerbaar bij meerdere locaties van dezelfde ondernemer.',
  },
  {
    label: 'Subsidiepercentage',
    waarde: '30–45%',
    toelichting: 'Afhankelijk van investeringscategorie, bedrijfsgrootte (MKB-toeslag) en regio.',
  },
  {
    label: 'EIA-aftrek (2026)',
    waarde: 'tot 40%',
    toelichting: 'Energie-investeringsaftrek cumuleerbaar met Flex-e mits aan de cumuleringsregels wordt voldaan.',
  },
  {
    label: 'MIA/Vamil voordeel',
    waarde: 'ca. 14%',
    toelichting: 'Netto fiscaal voordeel via milieu-investeringsaftrek en willekeurige afschrijving, cumuleerbaar.',
  },
]

const aanvraagStappen = [
  {
    nummer: '1',
    titel: 'Check of de investering subsidiabel is',
    omschrijving:
      'Niet alle typen opslag of EMS vallen automatisch onder Flex-e. Controleer de RVO-beschrijving van subsidiabele activiteiten en verifieer dat de installatie aantoonbaar bijdraagt aan netflexibiliteit.',
  },
  {
    nummer: '2',
    titel: 'Dossier samenstellen',
    omschrijving:
      'Verzamel offertes, technische specificaties en een korte onderbouwing van het flexibiliteitspotentieel van de investering. Hoe concreter de flexibiliteitsbijdrage is beschreven, hoe sterker de aanvraag.',
  },
  {
    nummer: '3',
    titel: 'Aanvraag indienen via RVO',
    omschrijving:
      'Flex-e wordt aangevraagd via het RVO-portaal met eHerkenning niveau 3. Let op openstellingsperioden: tijdvakken sluiten wanneer het budget vol is. Vroeg aanvragen vergroot de kans.',
  },
  {
    nummer: '4',
    titel: 'Realisatie binnen projectperiode',
    omschrijving:
      'Na toewijzing geldt een realisatietermijn. Zorg dat de installatie tijdig wordt opgeleverd en facturen worden bewaard voor de eindverantwoording bij RVO.',
  },
  {
    nummer: '5',
    titel: 'Combineren met EIA en MIA/Vamil',
    omschrijving:
      'Bespreek met uw fiscalist de combinatiemogelijkheden. EIA en MIA/Vamil worden via de belastingaangifte aangevraagd; de Flex-e subsidie is een directe uitkering. Correcte volgorde is belangrijk voor de cumuleringsberekening.',
  },
]

const combinerenMet = [
  {
    naam: 'EIA — Energie-investeringsaftrek',
    beschrijving: 'In 2026 tot 40% aftrek van de investeringskosten. Combineerbaar met Flex-e. Aanvragen via Agentschap NL/RVO bij aanschaf van de installatie.',
    href: '/kennisbank/energiewet-2026',
  },
  {
    naam: 'MIA/Vamil',
    beschrijving: 'Milieu-investeringsaftrek en willekeurige afschrijving. Netto fiscaal voordeel circa 14%. Aantrekkelijk voor investeringen die op de Milieulijst staan.',
    href: '/kennisbank/energiewet-2026',
  },
  {
    naam: 'SPRILA 2026',
    beschrijving: 'Subsidie voor gedeelde energie-infrastructuur. Bij een energiehub of collectief systeem kan SPRILA de infrastructuurlaag vergoeden en Flex-e de opslagcomponent.',
    href: '/kennisbank/sprila-2026',
  },
]

const capaxxHelpt = [
  {
    icon: FileCheck,
    title: 'Subsidiecheck & dossier',
    description:
      'Wij beoordelen of jouw investering subsidiabel is, hoe hoog het voordeel is en welke technische documentatie RVO vereist. We stellen het complete dossier voor je op.',
  },
  {
    icon: ClipboardList,
    title: 'Aanvraag ingediend bij RVO',
    description:
      'We dienen Flex-e op het juiste moment in — direct bij opening van een tijdvak. Tegelijk regelen we de EIA-melding en de MIA/Vamil-aanvraag voor maximaal gecombineerd voordeel.',
  },
  {
    icon: Calculator,
    title: 'Combinatiestrategie',
    description:
      'Flex-e, EIA (40%), MIA/Vamil (14%) en SPRILA samen kunnen meer dan de helft van de investering financieren. Wij rekenen de optimale combinatie voor jou uit.',
  },
  {
    icon: Wrench,
    title: 'Installatie in eigen beheer',
    description:
      'Na toewijzing installeren en commissionen wij de batterij, het EMS of de laadinfrastructuur volledig. Van technisch ontwerp tot oplevering en nazorg.',
  },
]

const doelgroepen = [
  {
    icon: Building2,
    titel: 'Vastgoedeigenaar',
    tekst: 'Batterijopslag gecombineerd met zonnepanelen en slim laadpark maakt jouw pand energetisch onafhankelijker én minder afhankelijk van netcapaciteit.',
  },
  {
    icon: HardHat,
    titel: 'Projectontwikkelaar',
    tekst: 'Verwerk een EMS en opslag als standaard onderdeel van nieuwe terreinen. Flex-e verlaagt de investering en versterkt de businesscase tegenover toekomstige huurders.',
  },
  {
    icon: Factory,
    titel: 'Industrieel bedrijf',
    tekst: 'Flexibiliseer je energieverbruik en neem deel aan vraagrespons-programma\'s van netbeheerders. Combineer met Flex-e voor een gefinancierde transitie naar een flexibel profiel.',
  },
]

export default function FlexESubsidie2026Page() {
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
                Flex-e subsidie <span className="text-primary italic">2026.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                De Flex-e subsidie stelt €62 miljoen beschikbaar voor batterijen, EMS en andere flexibiliteitsmaatregelen. Tot €300.000 per investering, via RVO. Combineerbaar met EIA (40% aftrek) en MIA/Vamil.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Bedragen */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              De cijfers
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl">
            {bedragen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 h-full">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2">{item.waarde}</div>
                  <div className="text-sm font-bold text-secondary uppercase tracking-wider mb-3">{item.label}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.toelichting}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wat vergoedt Flex-e */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Wat vergoedt Flex-e?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Flex-e richt zich op investeringen in hardware en systemen die de piekvraag op het openbare net aantoonbaar verlagen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {watVergoedt.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`rounded-[2rem] p-8 md:p-10 h-full flex flex-col border ${item.highlighted ? 'bg-primary/5 border-primary/20' : 'bg-slate-50 border-slate-100'}`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.highlighted ? 'bg-primary text-white' : 'bg-white text-primary shadow-sm'}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 tracking-tight ${item.highlighted ? 'text-primary' : 'text-secondary'}`}>
                    {item.titel}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{item.beschrijving}</p>
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
                Hoe vraag je Flex-e aan?
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

      {/* Combineren */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
              Combineren met andere regelingen
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Flex-e is in veel gevallen cumuleerbaar. De juiste combinatie kan het financieel voordeel oplopen tot meer dan 50% van de investering.
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
              Wat betekent Flex-e voor jou?
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

      {/* Let op tijdvak */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-primary/5 border-2 border-primary/20 rounded-[2rem] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-2">Let op: tijdvakken sluiten wanneer budget vol is</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Flex-e wordt opengesteld in tijdvakken. Zodra het budget bereikt is, sluit het tijdvak. Vroeg aanvragen — bij voorkeur direct na opening van een nieuw tijdvak — geeft de meeste zekerheid op toewijzing.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
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
              Wij regelen de aanvraag én realiseren de installatie — alles in één hand.
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
              Wil je weten hoeveel Flex-e voor jou oplevert — en wat er nog meer haalbaar is? We doen een gratis quickscan en rekenen de combinatie met EIA, MIA/Vamil en SPRILA voor je door.
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
