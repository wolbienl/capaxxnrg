'use client'

import Link from 'next/link'
import {
  Sun,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Zap,
  Cable,
  Clock,
  BarChart3,
  FileCheck,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const watWeChecken = [
  {
    icon: MapPin,
    title: 'Locatie & netgebied',
    description:
      'Welke netbeheerder, welk station, en wat is de actuele congestiestatus in jouw gebied?',
  },
  {
    icon: Zap,
    title: 'Beschikbare netcapaciteit',
    description:
      'Is er transportcapaciteit beschikbaar? Zo niet, welke alternatieven zijn er?',
  },
  {
    icon: BarChart3,
    title: 'Curtailment-risico',
    description:
      'Wat is het verwachte productieverlies door afschakeling? En hoe beperk je dat?',
  },
  {
    icon: FileCheck,
    title: 'SDE++-haalbaarheid',
    description:
      'Is een transportindicatie haalbaar? Welke subsidie-route past bij jouw project?',
  },
  {
    icon: Cable,
    title: 'Cable pooling mogelijkheden',
    description:
      'Kun je een aansluiting delen met wind of opslag? Zon en wind hebben slechts ~5% gelijktijdig piekvermogen.',
  },
  {
    icon: Clock,
    title: 'Doorlooptijd & planning',
    description:
      'Realistische inschatting van vergunningen, aansluiting en realisatie.',
  },
]

const knelpunten = [
  {
    title: 'Netcongestie blokkeert je project',
    description:
      'In grote delen van Nederland is het elektriciteitsnet vol. Nieuwe aansluitingen boven 3x80A worden niet meer verstrekt in congestiegebieden.',
  },
  {
    title: 'Geen transportindicatie, geen SDE++',
    description:
      'Zonder transportindicatie van de netbeheerder kun je geen SDE++-aanvraag doen. Je subsidie blokkeert op het net.',
  },
  {
    title: 'Curtailment stijgt explosief',
    description:
      'Van 1,4% in 2022 naar 13,2% in 2024. Elke procent productieverlies raakt direct je rendement en terugverdientijd.',
  },
  {
    title: 'Realisatietermijn onder druk',
    description:
      'SDE++ kent een realisatietermijn van 3 jaar voor projecten >1 MWp. Wachten op de netbeheerder kan je deadline kosten.',
  },
]

export default function QuickscanZonneparkContent() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Sun}
        title="Quickscan"
        titleHighlight="zonnepark."
        description="Is jouw zonneparkproject haalbaar? Wij checken netcapaciteit, subsidie-routes en cable pooling mogelijkheden. Helder advies binnen 1 week."
        ctaText="Gratis quickscan aanvragen"
        ctaHref="/contact?type=quickscan-zonnepark"
      />

      {/* Wat we checken */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Wat we <span className="text-primary italic">checken</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl">
              Een zonnepark ontwikkelen begint met de juiste informatie. In onze
              quickscan brengen we de haalbaarheid van jouw project in kaart.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {watWeChecken.map((item, i) => (
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

      {/* Knelpunten */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Waar projecten op{' '}
                <span className="text-primary italic">vastlopen</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                De businesscase van zonneparken staat onder druk. Niet door het
                weer of de techniek, maar door het net. Hoe eerder je weet waar
                je aan toe bent, hoe beter je kunt sturen.
              </p>

              <div className="space-y-6">
                {knelpunten.map((item, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div className="flex gap-4 p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem]">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-secondary mb-2">
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
            </FadeIn>

            <FadeIn
              direction="left"
              className="lg:sticky lg:top-32 space-y-8"
            >
              <div className="bg-secondary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Sun className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
                    Quickscan resultaat
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
                    Binnen 1 week weet je of jouw zonnepark haalbaar is en welke
                    route het snelst naar realisatie leidt.
                  </p>
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    {[
                      'Analyse netcapaciteit & congestiestatus',
                      'Curtailment-prognose voor jouw locatie',
                      'Advies over SDE++ en subsidie-route',
                      'Cable pooling & zelfaanleg mogelijkheden',
                      'Concrete vervolgstappen',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Zelfaanleg als optie */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-[3rem] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Cable className="w-48 h-48" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary mb-6 tracking-tight">
                  Zelf je kabel{' '}
                  <span className="text-primary italic">leggen?</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
                  De nieuwe Energiewet heeft de drempel voor zelfaanleg van
                  netaansluitingen verlaagd van 10 MVA naar 2,3 MVA. Voor veel
                  zonneparken betekent dit: zelf een aannemer inschakelen,
                  sneller aangesloten worden, en lagere kosten.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  In de quickscan beoordelen we of zelfaanleg via artikel 3.39
                  een optie is voor jouw project en wat de verwachte besparing
                  en tijdwinst is.
                </p>
                <Link
                  href="/kennisbank/zelfaanleg"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Lees meer over zelfaanleg{' '}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Weet waar je aan toe bent,{' '}
              <span className="italic text-primary">voor je investeert.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Wij doen een quickscan van jouw zonneparkproject en geven je
              binnen 1 week een helder advies. Gratis en vrijblijvend.
            </p>
            <Link
              href="/contact?type=quickscan-zonnepark"
              className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Gratis quickscan aanvragen{' '}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
