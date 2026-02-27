'use client'

import Link from 'next/link'
import {
  Wind,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  MapPin,
  Zap,
  Cable,
  Clock,
  BarChart3,
  FileCheck,
  Sun,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const watWeChecken = [
  {
    icon: MapPin,
    title: 'Locatie & netgebied',
    description:
      'Welke netbeheerder, welk station, en wat is de actuele congestiestatus? Windparken vragen doorgaans om zwaardere aansluitingen.',
  },
  {
    icon: Zap,
    title: 'Vermogensbehoefte & netcapaciteit',
    description:
      'Windturbines leveren hoge pieken. We beoordelen of het net dat aankan en welke alternatieven er zijn.',
  },
  {
    icon: Sun,
    title: 'Cable pooling met zon',
    description:
      'Wind en zon zijn complementair: slechts ~5% gelijktijdig piekvermogen. Delen van een aansluiting kan je project versnellen.',
  },
  {
    icon: BarChart3,
    title: 'Flexibele transportrechten',
    description:
      'Non-firm (~50% korting) of TDTR (85% van jaaruren vast). Welk transportrecht levert de beste businesscase?',
  },
  {
    icon: FileCheck,
    title: 'SDE++ & vergunningen',
    description:
      'Is een transportindicatie haalbaar? Hoe verhouden vergunningen zich tot de realisatietermijn?',
  },
  {
    icon: Clock,
    title: 'Doorlooptijd & planning',
    description:
      'Windprojecten kennen langere doorlooptijden. We geven een realistische planning inclusief vergunningstraject.',
  },
]

const knelpunten = [
  {
    title: 'Hogere vermogens, zwaarder net nodig',
    description:
      'Een windturbine van 4-6 MW vraagt een forse aansluiting. In congestiegebieden is die capaciteit simpelweg niet beschikbaar.',
  },
  {
    title: 'Langere doorlooptijden',
    description:
      'Vergunningen voor windparken duren langer dan voor zon. Gecombineerd met wachtlijsten bij netbeheerders kan de realisatietermijn in gevaar komen.',
  },
  {
    title: 'SDE++ onder druk',
    description:
      'Zonder transportindicatie geen subsidie-aanvraag. En de realisatietermijn van 3 jaar laat weinig ruimte voor vertraging.',
  },
  {
    title: 'Complexe stakeholder-omgeving',
    description:
      'Gemeenten, omwonenden, netbeheerder en RVO. Hoe meer partijen, hoe belangrijker het is om vroegtijdig knelpunten in kaart te brengen.',
  },
]

export default function QuickscanWindparkContent() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Wind}
        title="Quickscan"
        titleHighlight="windpark."
        description="Is jouw windparkproject haalbaar? Wij beoordelen netcapaciteit, cable pooling mogelijkheden en flexibele transportrechten. Advies binnen 1 week."
        ctaText="Gratis quickscan aanvragen"
        ctaHref="/contact?type=quickscan-windpark"
      />

      {/* Wat we checken */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Wat we <span className="text-primary italic">checken</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl">
              Windparken vragen om zwaardere aansluitingen en hebben langere
              doorlooptijden. Onze quickscan brengt alle haalbaarheids&shy;factoren
              in kaart.
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
                Waar windprojecten op{' '}
                <span className="text-primary italic">vastlopen</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                De combinatie van hoge vermogens, lange vergunningstrajecten en
                netcongestie maakt windparkontwikkeling complex. Vroegtijdig
                inzicht voorkomt kostbare verrassingen.
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
                  <Wind className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">
                    Quickscan resultaat
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight">
                    Binnen 1 week weet je of jouw windpark haalbaar is en welke
                    route de kortste doorlooptijd biedt.
                  </p>
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    {[
                      'Analyse netcapaciteit & congestiestatus',
                      'Cable pooling mogelijkheden (wind + zon)',
                      'Transportrechten-vergelijking (firm/non-firm/TDTR)',
                      'Zelfaanleg haalbaarheid via art. 3.39',
                      'Concrete routekaart naar realisatie',
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

      {/* Zelfaanleg & Cable Pooling */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0}>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Cable className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4 tracking-tight">
                  Zelf je kabel{' '}
                  <span className="text-primary italic">leggen</span>
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  De drempel voor zelfaanleg is verlaagd naar 2,3 MVA. Schakel
                  zelf een aannemer in voor het kabeltracé. Sneller, goedkoper,
                  en jij bepaalt het tempo.
                </p>
                <Link
                  href="/kennisbank/zelfaanleg"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Meer over zelfaanleg{' '}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Sun className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4 tracking-tight">
                  Cable pooling{' '}
                  <span className="text-primary italic">wind + zon</span>
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                  Wind en zon zijn complementair met slechts ~5% gelijktijdig
                  piekvermogen. Deel een aansluiting en maximaliseer de
                  benutting. Sinds 2026 voor alle installatietypes.
                </p>
                <Link
                  href="/kennisbank/cable-pooling"
                  className="inline-flex items-center text-primary font-black text-lg group"
                >
                  Meer over cable pooling{' '}
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
              Wij doen een quickscan van jouw windparkproject en geven je binnen
              1 week een helder advies. Gratis en vrijblijvend.
            </p>
            <Link
              href="/contact?type=quickscan-windpark"
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
