'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  TrendingDown,
  Calendar,
  Building2,
  AlertCircle,
  Zap,
  BarChart3,
  Thermometer
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const normen = [
  {
    type: 'Kantoren',
    target: '< 70 kWh/m²',
    description: 'Per jaar, inclusief verwarming, koeling en elektriciteit',
    icon: Building2
  },
  {
    type: 'Retail',
    target: '< 110 kWh/m²',
    description: 'Afhankelijk van type winkel en openingstijden',
    icon: Building2
  },
  {
    type: 'Logistiek',
    target: '< 50 kWh/m²',
    description: 'Exclusief procesenergie, inclusief verwarming/koeling',
    icon: Building2
  },
  {
    type: 'Onderwijs',
    target: '< 90 kWh/m²',
    description: 'Inclusief ventilatie en licht, afhankelijk van gebruik',
    icon: Building2
  }
]

export default function ParisProofPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Globe}
        title="Paris Proof vastgoed:"
        titleHighlight="meetbaar."
        description="Routekaart naar < 70 kWh/m² voor kantoren. Haalbaar, meetbaar, rendabel. We starten met meten, dan weet je precies hoeveel reductie nodig is en wat het kost."
        ctaText="Vraag Paris Proof-scan aan"
        ctaHref="/contact?type=paris-proof-scan"
      />

      {/* Wat betekent Paris Proof */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Wat betekent <span className="text-primary italic">Paris Proof</span>?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Paris Proof staat voor gebouwen die voldoen aan de klimaatambitie van het Parijs-akkoord: 
                drastisch minder energieverbruik, neutrale of minimale CO₂-uitstoot en maximale efficiëntie.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 italic">
                &quot;Het gaat om twee derde minder verbruik in 2050. Dat lijkt ver weg, maar de stappen zet je nu.&quot;
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Klaar voor 2030',
                    desc: 'Voldoe aan toekomstige energie-eisen en voorkom waardeverlies.'
                  },
                  {
                    title: 'Lagere lasten',
                    desc: 'Minder verbruik = lagere exploitatiekosten en hogere marge.'
                  },
                  {
                    title: 'Verhoogde verhuurbaarheid',
                    desc: 'Aantrekkelijker voor huurders en financiers die duurzaamheid eisen.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-5 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <div className="bg-secondary rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Calendar className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">De urgentie</h3>
                  <p className="text-3xl font-black text-white mb-10 leading-tight">
                    Commercieel vastgoed moet het energieverbruik met circa twee derde terugdringen om in 2050 Paris Proof te zijn.
                  </p>
                  <div className="space-y-6 pt-8 border-t border-white/10">
                    {[
                      { year: '2030', desc: 'Eerste tussentarget: 40% reductie' },
                      { year: '2040', desc: 'Tweede tussentarget: 60% reductie' },
                      { year: '2050', desc: 'Finale norm: 67% reductie' }
                    ].map((milestone, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-primary font-black text-xl">{milestone.year}</span>
                        <span className="text-slate-300 text-sm font-medium">{milestone.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* De normen per gebouwtype */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-6 tracking-tight">
              De <span className="text-primary italic">norm</span> per gebouwtype
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Paris Proof hanteert verschillende targets afhankelijk van gebouwfunctie. Wij rekenen uit waar jij nu staat.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {normen.map((norm, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <norm.icon className="w-10 h-10 text-primary" />
                    <span className="text-3xl font-black text-primary">{norm.target}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">{norm.type}</h3>
                  <p className="text-sm text-slate-500 italic">{norm.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Onze routekaart */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight text-center mb-8">
              Onze <span className="text-primary italic">routekaart</span> naar Paris Proof
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto text-center leading-relaxed">
              We starten met meten. Dan weet je precies hoeveel reductie nodig is en wat het kost.
            </p>
          </FadeIn>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                fase: 'Nulmeting',
                titel: 'Huidige verbruik per m² vaststellen',
                beschrijving: 'Data uit EMS, meters en facturen. We brengen in kaart waar je nu staat en hoeveel reductie nodig is.',
                deliverable: 'Baseline rapport met verbruik in kWh/m² per jaar',
                icon: BarChart3
              },
              {
                fase: 'Quick wins',
                titel: 'Slimme sturing en piekafvlakking',
                beschrijving: 'Geen CAPEX nodig. We optimaliseren bestaande installaties met EMS-integratie en tijdafhankelijke sturing.',
                deliverable: '10-20% reductie binnen 3 maanden',
                icon: Zap
              },
              {
                fase: 'Middellang',
                titel: 'Isolatie en installatie-optimalisatie',
                beschrijving: 'Dakisolatie, kozijnvervanging, LED-verlichting, efficiëntere HVAC. We prioriteren op ROI.',
                deliverable: '30-40% reductie binnen 12-24 maanden',
                icon: Thermometer
              },
              {
                fase: 'Lange termijn',
                titel: 'Warmtepompen en PV-uitbreiding',
                beschrijving: 'Van fossiel naar elektrisch, met eigen opwek en opslag. Grootste impact, langste terugverdientijd.',
                deliverable: '50-70% reductie binnen 3-5 jaar',
                icon: TrendingDown
              },
              {
                fase: 'Monitoring',
                titel: 'Bijsturen tot je onder de norm zit',
                beschrijving: 'We blijven meten en rapporteren. Als het verbruik stijgt, sturen we bij. Continue verbetering.',
                deliverable: 'Jaarlijkse rapportage en optimalisatie',
                icon: BarChart3
              }
            ].map((stap, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up">
                <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center font-black text-2xl shrink-0 group-hover:bg-primary transition-colors shadow-lg">
                      {i + 1}
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-3">{stap.fase}</div>
                      <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">{stap.titel}</h3>
                      <p className="text-lg text-slate-600 mb-4 leading-relaxed italic">{stap.beschrijving}</p>
                      <div className="flex items-start bg-white rounded-xl p-4 border border-slate-100">
                        <stap.icon className="w-5 h-5 text-primary mr-3 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Resultaat</div>
                          <div className="text-sm font-bold text-secondary">{stap.deliverable}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom nu actie */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-8 tracking-tight">
                Waarom nu <span className="text-primary italic">actie</span> nodig is
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Verhuurbaarheid daalt',
                  desc: 'Huurders eisen steeds vaker Paris Proof-panden. Gebouwen die niet voldoen raken moeilijker verhuurd.',
                  impact: 'Leegstand stijgt',
                  icon: Building2
                },
                {
                  title: 'Financiers stellen eisen',
                  desc: 'Banken koppelen financieringsvoorwaarden aan energie-efficiëntie. Geen Paris Proof = hogere rente.',
                  impact: 'Hogere kosten',
                  icon: TrendingDown
                },
                {
                  title: 'Waardeverlies',
                  desc: 'Vastgoed dat niet voldoet aan 2030-normen zakt in waarde. Taxateurs rekenen dit nu al mee.',
                  impact: 'Tot 30% verlies',
                  icon: AlertCircle
                },
                {
                  title: 'Compliance & boetes',
                  desc: 'Regelgeving wordt strenger. Gebouwen die achterblijven risikeren verplichte maatregelen of boetes.',
                  impact: 'Dwangsommen mogelijk',
                  icon: CheckCircle2
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group h-full">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-6 transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 mb-6 leading-relaxed italic">{item.desc}</p>
                    <div className="inline-flex items-center text-sm font-black text-primary bg-orange-50 px-4 py-2 rounded-xl uppercase tracking-wider">
                      {item.impact}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wat wij leveren */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Wat wij <span className="text-primary italic">leveren</span>
            </h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verbruiksanalyse',
                desc: 'Realtime integratie van energie-, CO₂- en gebruiksdata per pand. We meten kWh/m² continu.',
                icon: BarChart3,
                items: ['Verbruik per m²', 'CO₂-uitstoot', 'Benchmark']
              },
              {
                title: 'Routekaart',
                desc: 'Concrete stappen naar Paris Proof met quick wins, middellange en lange termijn maatregelen.',
                icon: CheckCircle2,
                items: ['Quick wins', 'Prioritering', 'ROI per stap']
              },
              {
                title: 'Implementatie & monitoring',
                desc: 'Van plan naar actie. Wij voeren uit en blijven meten tot je onder de norm zit.',
                icon: Zap,
                items: ['Installaties', 'EMS-koppeling', 'Continue tracking']
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-8 transition-colors">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 mb-6 leading-relaxed italic">{item.desc}</p>
                  <div className="space-y-2">
                    {item.items.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Praktijkvoorbeeld */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-12 tracking-tight text-center">
                Praktijk<span className="text-primary italic">voorbeeld</span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/10">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">Start</div>
                    <div className="text-5xl font-black text-white mb-2">145</div>
                    <div className="text-slate-400 text-sm">kWh/m² per jaar</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-black text-primary uppercase tracking-widest mb-2">Nu</div>
                    <div className="text-5xl font-black text-primary mb-2">68</div>
                    <div className="text-slate-400 text-sm">kWh/m² per jaar</div>
                  </div>
                </div>
                
                <p className="text-lg text-slate-300 mb-8 leading-relaxed italic text-center">
                  &quot;Kantoorpand 8.000 m². Quick wins: EMS-optimalisatie en LED (15% reductie). 
                  Daarna isolatie + HR++ glas (25% reductie). Laatste stap: warmtepomp + PV uitbreiding (13% reductie). 
                  Totaal: van 145 naar 68 kWh/m². Paris Proof binnen 24 maanden.&quot;
                </p>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                  {[
                    { label: 'Investering', value: '€ 1.2M' },
                    { label: 'Besparing/jaar', value: '€ 180K' },
                    { label: 'Terugverdientijd', value: '6.7 jaar' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-black text-primary mb-2">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Waarom het werkt */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-secondary mb-10 tracking-tight">
                Waarom onze aanpak <span className="text-primary italic">werkt</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Data-first',
                    desc: 'We adviseren niet op basis van gemiddeldes, maar op jouw werkelijke verbruik.',
                    stat: '100% realtime'
                  },
                  {
                    title: 'ROI-gestuurd',
                    desc: 'Elke maatregel rekenen we door. Quick wins eerst, grote investeringen alleen als ze renderen.',
                    stat: 'Altijd rendabel'
                  },
                  {
                    title: 'End-to-end',
                    desc: 'Van scan tot installatie tot monitoring. Wij regelen het, jij ziet resultaat.',
                    stat: 'Volledige ontzorging'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <div className="text-3xl font-black text-primary mb-4">{item.stat}</div>
                    <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-white rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Bereid jouw vastgoed voor op <span className="italic text-primary">2030</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We starten met een Paris Proof-scan om te berekenen hoeveel reductie nodig is en wat de slimste route is.
            </p>
            <Link
              href="/contact?type=paris-proof-scan"
              className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Vraag Paris Proof-scan aan <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
