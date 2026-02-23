import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  ArrowRight,
  Zap,
  Clock,
  Route,
  AlertTriangle,
  Building2,
  Sun,
  HardHat,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Zelfaanleg Netaansluiting (Art. 3.39) | Kennisbank | CAPAXX Energy',
  description:
    'Zelfaanleg netaansluiting via artikel 3.39 Energiewet. Drempel verlaagd naar 2,3 MVA. Openbare aanbesteding, ICP inschakelen, snellere realisatie en lagere kosten. 16c aansluiting voor distributiecentra en zonneparken.',
  keywords: [
    'zelfaanleg netaansluiting',
    'artikel 3.39 energiewet',
    '16c aansluiting',
    'ICP Independent Cable Provider',
    '2,3 MVA drempel',
    'openbare aanbesteding netaansluiting',
    'Watt Infra',
  ],
}

const voordelen = [
  {
    icon: Zap,
    title: 'Lagere kosten',
    description: 'Door concurrentie op de markt betaal je minder dan bij de netbeheerder.',
  },
  {
    icon: Clock,
    title: 'Snellere realisatie',
    description: 'Eigen regie betekent geen wachtrij bij de netbeheerder.',
  },
  {
    icon: Route,
    title: 'Routeoptimalisatie',
    description: 'Alternatieve kabeltracés via efficiëntere routes.',
  },
]

const procesSteps = [
  'Bepaal of je boven de 2,3 MVA drempel zit',
  'Overleg met de netbeheerder over technische eisen',
  'Selecteer een gekwalificeerde ICP via openbare aanbesteding',
  'Realisatie van kabeltracé en inkoopstation',
  'Overdracht aan de netbeheerder en aansluiting op het net',
]

const aandachtspunten = [
  'Technische eisen verschillen per netbeheerder',
  'Vergunningen en KLIC-meldingen zijn vereist',
  'De netbeheerder mag instemming uitsluitend onthouden als betrouwbaarheid van het net in gevaar komt',
  'Je hebt een partij nodig die het daadwerkelijk kan uitvoeren',
]

const voorWie = [
  {
    icon: Building2,
    text: 'Distributiecentra, productielocaties, grote kantoorpanden, commercieel vastgoed',
  },
  {
    icon: Sun,
    text: 'Zonneparken >2,3 MVA (LC Energy doet zelfaanleg als standaard voor >10 MVA projecten)',
  },
  {
    icon: HardHat,
    text: 'Nieuwbouw met forse vermogensbehoefte',
  },
]

export default function ZelfaanlegPage() {
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
                Zelf je <span className="text-primary italic">kabel leggen.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                De nieuwe Energiewet heeft de drempel voor zelfaanleg van netaansluitingen verlaagd
                van 10 MVA naar 2,3 MVA. Voorheen voorbehouden aan grote industriële partijen en
                datacenters. Nu voor een veel bredere groep.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WAT IS ZELFAANLEG */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Wat is zelfaanleg?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                Artikel 3.39 van de Energiewet (voorheen artikel 16c Elektriciteitswet 1998) geeft
                een afnemer met een gewenste aansluiting groter dan 2,3 MVA het recht om de
                aansluitingswerkzaamheden via openbare aanbesteding zelf te laten uitvoeren, in
                plaats van te wachten op de netbeheerder.
              </p>
              <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10">
                <p className="text-xl font-bold text-secondary leading-relaxed italic">
                  In de praktijk schakelen projectontwikkelaars een Independent Cable Provider (ICP)
                  in — marktleider is Watt Infra uit Eindhoven — die het kabeltracé, de
                  beveiligingsvoorzieningen en vaak het inkoopstation realiseert. Na oplevering
                  wordt de aansluiting overgedragen aan de netbeheerder.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
                <Image
                  src="/images/capaxx-energy-zelf-kabel-leggen16c.png"
                  alt="Zelfaanleg netaansluiting - artikel 3.39 Energiewet, 16c aansluiting"
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

      {/* VOORDELEN */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Voordelen van <span className="text-primary italic">zelfaanleg</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {voordelen.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 md:p-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HET PROCES */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Het <span className="text-primary italic">proces</span>
            </h2>
          </FadeIn>

          <div className="max-w-3xl space-y-6">
            {procesSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black">
                    {i + 1}
                  </div>
                  <p className="text-lg md:text-xl text-slate-600 leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AANDACHTSPUNTEN */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Aandachtspunten
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {aandachtspunten.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-4 p-6 md:p-8 bg-amber-50 border border-amber-100 rounded-[2rem]">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VOOR WIE */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Voor <span className="text-primary italic">wie</span>
            </h2>
          </FadeIn>

          <div className="space-y-6 max-w-3xl">
            {voorWie.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-4 items-center p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.text}</p>
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
              Wil je weten of zelfaanleg past bij jouw project? We doen een quickscan en geven je
              een helder advies.
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
