import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Cable,
  Users,
  Wrench,
  Scale,
  Zap,
  BookOpen,
  ArrowRight,
  Building2,
  HardHat,
  Factory,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Energiewet 2026 | Kennisbank | CAPAXX Energy',
  description:
    'Energiewet 2026, nieuwe energiewet, energiewet netcongestie. Sinds 1 januari 2026 is de Elektriciteitswet 1998 vervangen. Cable pooling, GTO\'s, zelfaanleg en flexibele transportrechten fundamenteel gewijzigd.',
  keywords: [
    'energiewet 2026',
    'nieuwe energiewet',
    'energiewet netcongestie',
    'elektriciteitswet 1998',
    'cable pooling energiewet',
    'groepstransportovereenkomst',
    'zelfaanleg 2,3 MVA',
  ],
}

const kernveranderingen = [
  {
    icon: Cable,
    title: 'Cable pooling verbreed',
    items: [
      'Was tot voor kort alleen mogelijk voor wind- en zonneparken',
      'Nu mag elk type installatie een aansluiting delen',
      'Bedrijfspanden, opslaginstallaties, laadinfra',
      'Max 4 partijen op één aansluiting, vanaf 100 kVA',
    ],
  },
  {
    icon: Users,
    title: 'Groepstransportovereenkomsten (GTO\'s)',
    items: [
      'Formeel geregeld via ACM-besluit (in werking eind december 2025)',
      'Groep bedrijven contracteert gezamenlijk transportcapaciteit',
      'Ieder behoudt eigen aansluiting',
      'Netbeheerders verplicht vanaf 1 januari 2027',
    ],
  },
  {
    icon: Wrench,
    title: 'Zelfaanlegdrempel verlaagd',
    items: [
      'Van 10 MVA naar 2,3 MVA (amendement-Bontenbal/Erkens)',
      'VEMW pleit zelfs voor verdere verlaging naar 1 MVA',
      'Marktpotentieel groeit aanzienlijk',
    ],
  },
  {
    icon: Scale,
    title: 'Flexibele transportovereenkomsten',
    items: [
      'Wettelijke basis voor non-firm, tijdsblokgebonden en TDTR',
      'Nuancering aansluitplicht (hoeft niet meer direct als geen capaciteit)',
      'Meer ruimte voor maatwerkcontracten',
    ],
  },
  {
    icon: Zap,
    title: 'Energiegemeenschappen',
    items: [
      'Wettelijk kader voor lokale energiegemeenschappen',
      'Delen van opwek, opslag en verbruik binnen een groep',
    ],
  },
]

const regulatoireContext = [
  {
    title: 'CBb en maatschappelijk prioriteringskader',
    content:
      'CBb vernietigde op 11 maart 2025 het maatschappelijk prioriteringskader van de ACM, maar liet het gelden tot 1 jan 2026. Nieuw kader per die datum; vanaf 1 juli 2026 ook kleinverbruikers.',
  },
  {
    title: 'ACM verbeteropdracht',
    content:
      'ACM gaf op 26 november 2025 netbeheerders een verbeteropdracht: zij lopen achter met congestiemaatregelen. Verbeterplannen vereist per 6 februari 2026.',
  },
  {
    title: 'Netinvesteringen',
    content:
      'Netinvesteringen stijgen van €8 miljard in 2024 naar verwachte €15 miljard per jaar.',
  },
  {
    title: 'Congestiemanagement >60 MW',
    content:
      'Bedrijven met >60 MW gecontracteerd transportvermogen verplicht deel te nemen aan congestiemanagement via een Congestion Service Provider.',
  },
]

const doelgroepen = [
  {
    icon: Building2,
    title: 'Vastgoedeigenaar',
    content: 'Cable pooling en GTO\'s openen de markt voor bedrijventerreinen.',
  },
  {
    icon: HardHat,
    title: 'Projectontwikkelaar',
    content: 'Zelfaanleg nu al vanaf 2,3 MVA, flexibele contracten verankerd.',
  },
  {
    icon: Factory,
    title: 'Industrieel',
    content: 'TDTR en non-firm rechten wettelijk geregeld, meer onderhandelingsruimte.',
  },
]

export default function Energiewet2026Page() {
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
                Energiewet <span className="text-primary italic">2026.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Sinds 1 januari 2026 is de nieuwe Energiewet van kracht. De Elektriciteitswet 1998
                is volledig vervangen. De meeste bedrijven hebben er nog nooit van gehoord. Terwijl
                het de mogelijkheden rondom netcongestie fundamenteel verandert.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KERNVERANDERINGEN */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Kernveranderingen
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {kernveranderingen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 flex-grow">
                    {item.items.map((bullet, j) => (
                      <li key={j} className="text-slate-600 leading-relaxed flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REGULATOIRE CONTEXT */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Regulatoire context
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {regulatoireContext.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10">
                  <h3 className="text-lg font-bold text-secondary mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FLEX-E SUBSIDIE */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto bg-white border-2 border-primary/20 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-primary/5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary uppercase tracking-wider text-sm">
                  Subsidie &amp; fiscaal
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 tracking-tight">
                Flex-E subsidie en fiscale voordelen
              </h2>
              <ul className="space-y-4 text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">€62 miljoen</span> beschikbaar
                </li>
                <li>
                  Tot <span className="font-bold text-secondary">€300.000</span> per investering
                  voor batterijen en flexibiliteitsmaatregelen
                </li>
                <li>
                  EIA biedt in 2026 tot <span className="font-bold text-secondary">40%</span>{' '}
                  aftrek
                </li>
                <li>
                  MIA/Vamil tot ruim <span className="font-bold text-secondary">14%</span> netto
                  voordeel
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WAT DIT VOOR JOU BETEKENT */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Wat dit voor jou betekent
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {doelgroepen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{item.content}</p>
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
              Wil je weten wat de Energiewet 2026 voor jouw situatie betekent? We doen een quickscan
              en geven je een helder advies.
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
