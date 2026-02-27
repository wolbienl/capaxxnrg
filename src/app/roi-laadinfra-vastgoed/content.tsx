'use client'

import Link from 'next/link'
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Euro,
  Users,
  Zap,
  BarChart3,
  ShieldCheck,
  Clock,
  Battery,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const waaromNu = [
  {
    icon: Users,
    title: 'Huurders verwachten het',
    description:
      'Meer dan 25% van de nieuwe auto\'s is elektrisch. Huurders kiezen steeds vaker voor panden met laadvoorzieningen.',
  },
  {
    icon: TrendingUp,
    title: 'Waardestijging pand',
    description:
      'Laadinfra verhoogt de marktwaarde van je pand. Taxateurs rekenen laadvoorzieningen mee als waardeverhogende factor.',
  },
  {
    icon: Building2,
    title: 'Lagere leegstand',
    description:
      'Panden met laadinfra verhuren sneller en behouden huurders langer. Het is een onderscheidende voorziening geworden.',
  },
  {
    icon: ShieldCheck,
    title: 'Wet- en regelgeving',
    description:
      'De EPBD IV-richtlijn verplicht laadinfra bij nieuwbouw en ingrijpende renovatie. Anticipeer nu en voorkom gedwongen investeringen later.',
  },
]

const roiFactoren = [
  {
    label: 'Huurpremie',
    waarde: '€ 2-5/m²',
    toelichting: 'Hogere huur door laadvoorzieningen als extra faciliteit.',
  },
  {
    label: 'Terugverdientijd',
    waarde: '3-6 jaar',
    toelichting: 'Afhankelijk van bezettingsgraad, tarief en subsidie.',
  },
  {
    label: 'Energieopbrengst',
    waarde: '€ 0,10-0,25/kWh',
    toelichting: 'Marge op doorgeleverde stroom aan laadgebruikers.',
  },
  {
    label: 'Waardestijging',
    waarde: '3-8%',
    toelichting: 'Hogere taxatiewaarde door toekomstbestendige voorziening.',
  },
]

const watWijDoen = [
  {
    title: 'Technisch ontwerp',
    description: 'Laadplan op basis van jouw netcapaciteit, parkeersituatie en huurdersmix.',
  },
  {
    title: 'Integratie met EMS',
    description: 'Slim laden gekoppeld aan opwek en opslag. Zo benut je netcapaciteit maximaal.',
  },
  {
    title: 'Dynamic load balancing',
    description: 'Verdeel beschikbaar vermogen slim over laadpunten zonder je aansluiting te overbelasten.',
  },
  {
    title: 'Beheer & facturatie',
    description: 'Realtime monitoring, storingsbeheer en transparante doorbelasting aan huurders.',
  },
]

export default function RoiLaadinfraContent() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Zap}
        title="ROI laadinfra"
        titleHighlight="vastgoed."
        description="Wat levert laadinfrastructuur op voor jouw pand? Wij rekenen het door: investering, terugverdientijd en huurpremie. Data-gedreven, geen aannames."
        ctaText="Vraag ROI-berekening aan"
        ctaHref="/contact?type=roi-laadinfra"
      />

      {/* Waarom laadinfra nu */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Waarom <span className="text-primary italic">nu</span> investeren
              in laadinfra
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl">
              EV-adoption versnelt. Vastgoedeigenaren die nu investeren in
              laadinfra, profiteren het langst van hogere huurinkomsten en
              waardestijging.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {waaromNu.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ROI berekening */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                De <span className="text-primary italic">businesscase</span>{' '}
                uitgelegd
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                Laadinfra is geen kostenpost, maar een investering die
                rendeert. De opbrengst komt uit meerdere bronnen: hogere huur,
                energiemarge, waardestijging en lagere leegstand.
              </p>

              <div className="space-y-4">
                {roiFactoren.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-xl font-black text-primary">
                          {item.waarde}
                        </span>
                      </div>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {item.toelichting}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={0.5} className="mt-6">
                <p className="text-sm text-slate-400 italic">
                  * Indicatieve waarden voor commercieel vastgoed. Exacte ROI
                  hangt af van locatie, bezettingsgraad en energietarief.
                </p>
              </FadeIn>
            </FadeIn>

            <FadeIn
              direction="left"
              className="lg:sticky lg:top-32 space-y-8"
            >
              <div className="bg-secondary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Euro className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
                    Rekenvoorbeeld
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-white mb-10 leading-tight">
                    Kantoorpand 5.000 m² met 40 parkeerplaatsen.
                  </p>
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    {[
                      { label: 'Investering', value: '€ 80.000 - 120.000' },
                      { label: 'Laadpunten', value: '20 x 22kW' },
                      { label: 'Jaaropbrengst energie', value: '€ 15.000 - 25.000' },
                      { label: 'Huurpremie per jaar', value: '€ 10.000 - 25.000' },
                      { label: 'Terugverdientijd', value: '3-5 jaar' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-slate-400 font-medium">
                          {item.label}
                        </span>
                        <span className="font-black text-white">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-[2rem] p-8 md:p-10 border border-orange-100">
                <div className="flex items-start mb-4">
                  <Battery className="w-6 h-6 text-primary mr-3 mt-1 shrink-0" />
                  <h3 className="text-xl font-bold text-secondary">
                    Combineer met opslag
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Batterijopslag maakt het mogelijk om meer laadpunten te
                  plaatsen zonder je aansluiting te verzwaren. Peak shaving
                  verlaagt je netkosten en verhoogt het rendement van je
                  laadinfra.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wat wij doen */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 tracking-tight">
              Van plan naar{' '}
              <span className="text-primary italic">rendement</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
              Wij begeleiden het complete traject: van ROI-berekening tot
              installatie en beheer.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {watWijDoen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start group p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-[2rem] h-full">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-5 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="text-center mt-12">
            <Link
              href="/oplossingen/laadinfra"
              className="inline-flex items-center text-primary font-black text-lg group"
            >
              Bekijk ons laadinfra-aanbod{' '}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Maak laadinfra een{' '}
              <span className="italic text-primary">asset</span> voor jouw
              vastgoed.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wij rekenen de businesscase door voor jouw pand. Investering,
              terugverdientijd en opbrengst. Concreet en op maat.
            </p>
            <Link
              href="/contact?type=roi-laadinfra"
              className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Vraag ROI-berekening aan{' '}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
