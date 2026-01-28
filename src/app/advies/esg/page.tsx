'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3,
  Leaf,
  Users,
  Shield,
  TrendingUp,
  Database,
  FileCheck,
  Zap
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const pillars = [
  {
    title: 'Environmental',
    subtitle: 'Milieu',
    description: 'Energieverbruik, CO₂-uitstoot, circulariteit. Direct meetbaar vanuit jouw EMS.',
    icon: Leaf,
    metrics: ['kWh per m²', 'CO₂-voetafdruk', 'Hernieuwbaar %']
  },
  {
    title: 'Social',
    subtitle: 'Sociaal',
    description: 'Gezondheid, veiligheid en comfort van gebruikers. Luchtklimaat, daglicht, bereikbaarheid.',
    icon: Users,
    metrics: ['Binnenklimaat', 'Veiligheid', 'Toegankelijkheid']
  },
  {
    title: 'Governance',
    subtitle: 'Bestuur',
    description: 'Transparantie, beheerprocessen en verantwoord management. Data die vertrouwen schept.',
    icon: Shield,
    metrics: ['Transparantie', 'Compliance', 'Risicobeheer']
  }
]

export default function ESGPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={ClipboardCheck}
        title="ESG zonder"
        titleHighlight="aannames."
        description="Meetbare Environmental, Social en Governance prestaties voor jouw portfolio. Data uit jouw EMS, rapportages conform CSRD, focus op verbetering."
        ctaText="Vraag ESG-quickscan aan"
        ctaHref="/contact?type=esg-quickscan"
      />

      {/* Wat is ESG */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-12 md:mb-24">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Wat is ESG en waarom telt het?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                ESG staat voor Environmental, Social & Governance. Het is het internationale raamwerk waarmee financiers, beleggers en toezichthouders beoordelen hoe duurzaam en verantwoord jouw organisatie opereert.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                &quot;Voor vastgoed betekent het: data over energie, CO₂, comfort en beheer. Geen verhalen - cijfers.&quot;
              </p>
            </FadeIn>
          </div>

          {/* De drie pilaren */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-8 transition-colors">
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-3">{pillar.subtitle}</div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{pillar.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed italic">{pillar.description}</p>
                  
                  <div className="space-y-2">
                    {pillar.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom ESG belangrijk is */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 md:mb-12 tracking-tight">Waarom ESG nu telt</h2>
              <ul className="space-y-8">
                {[
                  {
                    title: 'CSRD is verplicht',
                    desc: 'Voor steeds meer organisaties geldt de Corporate Sustainability Reporting Directive. ESG-data is geen nice to have meer.'
                  },
                  {
                    title: 'Financiers eisen het',
                    desc: 'Banken en investeerders koppelen voorwaarden aan ESG-prestaties. Geen data = hogere rente of geen financiering.'
                  },
                  {
                    title: 'Waarde stijgt',
                    desc: 'Vastgoed met sterke ESG-scores krijgt hogere taxaties en trekt betere huurders.'
                  },
                  {
                    title: 'Subsidies',
                    desc: 'ESG-rapportage is vaak voorwaarde voor toegang tot duurzaamheidssubsidies en -leningen.'
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <div className="bg-secondary rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <TrendingUp className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Concrete impact</h3>
                  <p className="text-3xl font-black text-white mb-10 leading-tight">
                    Vastgoed met sterke ESG-scores haalt tot 15% hogere taxaties en lagere financieringskosten.
                  </p>
                  <div className="space-y-4 pt-6 border-t border-white/10">
                    {[
                      'Betere financieringsvoorwaarden',
                      'Hogere verhuurbaarheid',
                      'Aantrekkelijker voor investeerders'
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

      {/* Wat wij leveren */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Wat wij <span className="text-primary italic">leveren</span>
            </h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: 'Automatische dataverzameling',
                  desc: 'Koppeling met jouw EMS, meters en gebouwsystemen. Energie, CO₂ en verbruik worden continu gemeten.',
                  icon: Database,
                  items: ['Realtime CO₂-tracking', 'Energieverbruik per m²', 'Hernieuwbaar energie %']
                },
                {
                  title: 'CSRD-conforme rapportages',
                  desc: 'Geen handmatig Excel-werk. Wij genereren audit-klare rapporten direct uit jouw data.',
                  icon: FileCheck,
                  items: ['CSRD-compliant', 'Audit-klaar', 'Portfolio-overzicht']
                },
                {
                  title: 'Routekaart verbetering',
                  desc: 'We laten zien welke stappen jouw ESG-score verbeteren en wat ze kosten én opleveren.',
                  icon: TrendingUp,
                  items: ['Quick wins benoemd', 'ROI per maatregel', 'Prioritering']
                },
                {
                  title: 'Implementatie & monitoring',
                  desc: 'Van rapport naar actie. Wij koppelen advies aan installaties en blijven meten.',
                  icon: Zap,
                  items: ['PV, opslag, EMS', 'Continue monitoring', 'Bijsturen op score']
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-8 transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed italic">{item.desc}</p>
                    <div className="space-y-2">
                      {item.items.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm font-medium text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-3 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Het verschil */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-12 leading-tight">
                Het <span className="text-primary italic">verschil</span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 md:mb-8 leading-tight italic">
                  &quot;Wij rapporteren niet over wat je zou kunnen zijn. We meten wat je bent, en sturen waar je heen gaat.&quot;
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Andere partijen maken ESG-rapporten op basis van aannames en benchmarks. 
                  Wij gebruiken de werkelijke data uit jouw installaties. Dat maakt het verschil tussen een mooi verhaal en een hard cijfer.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resultaten Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-6 tracking-tight">
              Wat het <span className="text-primary italic">oplevert</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Lagere financieringskosten',
                desc: 'Banken en investeerders geven betere voorwaarden bij sterke ESG-scores.',
                stat: 'Tot 0.5% rente voordeel'
              },
              {
                title: 'Hogere verhuurbaarheid',
                desc: 'Huurders kiezen steeds vaker voor ESG-conforme panden. Minder leegstand.',
                stat: '95%+ bezetting'
              },
              {
                title: 'Waardestijging',
                desc: 'Taxateurs waarderen ESG-prestaties positief. Direct meetbaar in de exit.',
                stat: 'Tot 15% hoger'
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="h-full">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all text-center group h-full flex flex-col">
                  <div className="text-4xl font-black text-primary mb-6">{item.stat}</div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed italic flex-grow">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl font-bold text-secondary mb-12 tracking-tight">Onze ESG aanpak</h2>
              <ul className="space-y-10">
                {[
                  { 
                    title: 'Data-integratie', 
                    desc: 'We koppelen jouw EMS, slimme meters en gebouwsystemen. Automatisch, geen handwerk.'
                  },
                  { 
                    title: 'CSRD-rapportage', 
                    desc: 'Geautomatiseerde rapporten die voldoen aan de eisen. Helder, betrouwbaar, audit-klaar.'
                  },
                  { 
                    title: 'Gap-analyse', 
                    desc: 'Waar sta je nu? Wat is er nodig voor score-verbetering? We rekenen het door.'
                  },
                  { 
                    title: 'Implementatie', 
                    desc: 'Van rapport naar actie: PV, opslag, isolatie, slimme sturing. Wij regelen het.'
                  },
                  { 
                    title: 'Continue monitoring', 
                    desc: 'ESG is geen eenmalige exercitie. We blijven meten en jaarlijks rapporteren.'
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 mt-1">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-lg text-slate-500 italic leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-bold text-secondary mb-8 tracking-tight">Wat je krijgt</h3>
                <div className="space-y-6">
                  {[
                    'Portfolio-dashboard met ESG-scores per pand',
                    'Kwartaalrapportages conform CSRD',
                    'CO₂-footprint berekening',
                    'Verbeterplan met prioritering en ROI',
                    'Koppeling naar subsidie-mogelijkheden'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-slate-600 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[3rem] p-16 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BarChart3 className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-black text-secondary mb-8 tracking-tight">Praktijkvoorbeeld</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed italic">
                &quot;Kantoorpand met 5.000 m², bestaande PV-installatie maar geen inzicht in CO₂-prestaties. 
                Na koppeling met ons EMS: volledige ESG-rapportage binnen 4 weken. 
                Score verbeterd van C naar A binnen 18 maanden door gerichte maatregelen op isolatie en slimme sturing.&quot;
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                {[
                  { label: 'Oplevering', value: '4 weken' },
                  { label: 'Score verbetering', value: 'C → A' },
                  { label: 'Waardestijging', value: '€ 750K' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Start met <span className="italic text-primary">meten</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              We voeren een quickscan uit om te zien waar je nu staat en wat je volgende stappen zijn richting CSRD-compliance.
            </p>
            <Link
              href="/contact?type=esg-quickscan"
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Vraag ESG-quickscan aan <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
