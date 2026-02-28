import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Cable,
  FileText,
  Users,
  Zap,
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Cable Pooling & Energiegemeenschappen | Kennisbank | CAPAXX Energy',
  description:
    'Cable pooling bedrijventerrein: aansluiting delen met maximaal vier partijen vanaf 100 kVA. Energiegemeenschap oprichten en groepstransportovereenkomst (GTO) afsluiten. Praktijkvoorbeelden en juridische structurering.',
  keywords: [
    'cable pooling bedrijventerrein',
    'energiegemeenschap oprichten',
    'groepstransportovereenkomst',
    'GTO netbeheerder',
    'aansluiting delen',
    'energiewet 2026',
  ],
}

const gtoExamples = [
  {
    title: 'Pannenweg Nederweert',
    netbeheerder: 'Enexis',
    description: 'Bedrijventerrein met gezamenlijke transportcapaciteit.',
  },
  {
    title: 'Veldzicht Ermelo',
    netbeheerder: 'Liander',
    description: 'Pilot met groepstransport voor meerdere bedrijven.',
  },
  {
    title: 'Smart Energy Hub A1 Deventer',
    netbeheerder: 'Enexis',
    description: 'Energiegemeenschap met complementaire opwek en verbruik.',
  },
]

const capaxxServices = [
  {
    icon: Zap,
    title: 'Energiescan',
    description:
      'Identificeren van complementaire partners: zon+wind, opwek+opslag+verbruik. Wie past bij wie op het terrein?',
  },
  {
    icon: FileText,
    title: 'Juridische structurering',
    description: 'Via MLOEA en energiegemeenschap-constructies. Heldere afspraken tussen alle deelnemers.',
  },
  {
    icon: Users,
    title: 'Contractuele afspraken',
    description: 'Begeleiden van afspraken tussen deelnemende partijen. Wie levert wat, wanneer en tegen welke voorwaarden?',
  },
  {
    icon: Cable,
    title: 'Afstemming netbeheerder',
    description: 'Businesscase voor alle partijen, afstemming met de netbeheerder en doorloop van het proces.',
  },
]

export default function CablePoolingPage() {
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
                Cable pooling &amp; <span className="text-primary italic">energiegemeenschappen.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Sinds de Energiewet 2026 mag elk type installatie een aansluiting delen. Maximaal
                vier partijen, vanaf 100 kVA. Dit opent de markt voor bedrijventerreinen en
                campussen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT IS CABLE POOLING */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Wat is cable pooling?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Cable pooling was tot voor kort alleen mogelijk voor wind- en zonneparken. Vanaf nu
                mag elk type installatie een aansluiting delen. Bedrijfspanden, opslaginstallaties,
                laadinfra. Maximaal vier partijen op één aansluiting, vanaf 100 kVA.
              </p>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10">
                <p className="text-xl font-bold text-secondary leading-relaxed italic">
                  Dat betekent dat jij en je buurman op het bedrijventerrein samen meer uit het net
                  kunnen halen dan ieder apart.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
                <Image
                  src="/images/capaxx-energy-energiegemeenschap.png"
                  alt="Energiegemeenschap op bedrijventerrein - cable pooling en groepstransport"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* GROEPSTRANSPORTOVEREENKOMSTEN (GTO) */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Groepstransportovereenkomsten <span className="text-primary italic">(GTO)</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-3xl">
              GTO&apos;s zijn nu formeel geregeld via een ACM-besluit dat eind december 2025 in
              werking trad. Een groep bedrijven contracteert gezamenlijk transportcapaciteit bij de
              netbeheerder, terwijl ieder zijn eigen aansluiting behoudt. Samen gebruiken ze vaak
              meer dan ze individueel zouden krijgen — en in ruil geven ze onbenutte capaciteit
              terug.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-3 bg-amber-50 rounded-2xl border border-amber-100">
              <span className="text-sm font-bold text-secondary">
                Netbeheerders zijn pas vanaf 1 januari 2027 verplicht dit aan te bieden; maar
                sommige doen het nu al.
              </span>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {gtoExamples.map((example, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2 tracking-tight">
                    {example.title}
                  </h3>
                  <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                    {example.netbeheerder}
                  </p>
                  <p className="text-slate-500 leading-relaxed flex-grow">{example.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CAPAXX HELPS */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Hoe CAPAXX Energy <span className="text-primary italic">helpt</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capaxxServices.map((service, i) => (
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
              Wil je weten of cable pooling of een GTO past bij jouw bedrijventerrein? We doen een
              quickscan en geven je een helder advies.
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
