'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Home,
  Euro,
  AlertTriangle,
  Zap,
  Sun,
  Battery,
  Thermometer,
  Wind,
  ClipboardList
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const labels = [
  { label: 'A++++', color: 'bg-green-600', verbruik: '< 50 kWh/m²' },
  { label: 'A+++', color: 'bg-green-500', verbruik: '50-75 kWh/m²' },
  { label: 'A++', color: 'bg-green-400', verbruik: '75-100 kWh/m²' },
  { label: 'A+', color: 'bg-lime-500', verbruik: '100-125 kWh/m²' },
  { label: 'A', color: 'bg-lime-400', verbruik: '125-150 kWh/m²' },
  { label: 'B', color: 'bg-yellow-400', verbruik: '150-200 kWh/m²' },
  { label: 'C', color: 'bg-orange-400', verbruik: '200-250 kWh/m²' },
  { label: 'D', color: 'bg-orange-500', verbruik: '250-325 kWh/m²' },
  { label: 'E', color: 'bg-red-500', verbruik: '325-400 kWh/m²' },
  { label: 'F', color: 'bg-red-600', verbruik: '400-500 kWh/m²' },
  { label: 'G', color: 'bg-red-700', verbruik: '> 500 kWh/m²' }
]

const maatregelen = [
  {
    title: 'Zonnepanelen',
    beschrijving: 'Eigen opwek verlaagt jouw energievraag uit het net direct.',
    impact: '1-2 labels',
    kosten: 'Middel',
    terugverdientijd: '6-8 jaar',
    icon: Sun
  },
  {
    title: 'Dakisolatie',
    beschrijving: 'Tot 30% minder warmteverlies, vooral effectief bij oudere panden.',
    impact: '1-2 labels',
    kosten: 'Laag-Middel',
    terugverdientijd: '4-7 jaar',
    icon: Home
  },
  {
    title: 'HR++ glas',
    beschrijving: 'Betere isolatiewaarde ramen, minder warmteverlies via gevels.',
    impact: '1 label',
    kosten: 'Middel-Hoog',
    terugverdientijd: '8-12 jaar',
    icon: Wind
  },
  {
    title: 'Warmtepomp',
    beschrijving: 'Van gas naar elektrisch. Grote impact, maar vraagt investering.',
    impact: '2-3 labels',
    kosten: 'Hoog',
    terugverdientijd: '10-15 jaar',
    icon: Thermometer
  },
  {
    title: 'LED-verlichting',
    beschrijving: 'Quick win met lage kosten, vooral effectief bij veel kantoorruimte.',
    impact: '0-1 label',
    kosten: 'Laag',
    terugverdientijd: '2-4 jaar',
    icon: Zap
  },
  {
    title: 'EMS + batterij',
    beschrijving: 'Slimme sturing op piekverbruik en optimaal gebruik van opwek.',
    impact: '0-1 label',
    kosten: 'Middel-Hoog',
    terugverdientijd: '7-10 jaar',
    icon: Battery
  }
]

export default function EnergielabelsPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={TrendingUp}
        title="Van C naar A in"
        titleHighlight="weken, niet jaren."
        description="Labelverbetering met concrete maatregelen en harde ROI. We rekenen door welke stappen renderen en voeren ze uit. Resultaat: hogere waarde, betere verhuurbaarheid."
        ctaText="Vraag labelscan aan"
        ctaHref="/contact?type=labelscan"
      />

      {/* Wat is een energielabel */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-4xl font-bold text-secondary mb-8 tracking-tight">
                Wat bepaalt je <span className="text-primary italic">energielabel</span>?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Het energielabel geeft aan hoe energiezuinig een gebouw is. Hoe beter het label, hoe lager het energieverbruik en de CO₂-uitstoot. 
                Sinds 2023 is een geldig label verplicht bij verkoop, verhuur of oplevering.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 italic">
                &quot;Labelverbetering is geen doel op zich. Het is een middel om waarde te verhogen en kosten te verlagen.&quot;
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Hogere huurprijzen',
                    desc: 'Panden met label A verhuren 10-15% hoger dan vergelijkbare C-labels.'
                  },
                  {
                    title: 'Snellere verhuurbaarheid',
                    desc: 'Label A panden hebben gemiddeld 40% kortere leegstand bij wisselingen.'
                  },
                  {
                    title: 'Betere financiering',
                    desc: 'Banken geven voorkeur aan label A of beter. Lagere rente, betere voorwaarden.'
                  },
                  {
                    title: 'Compliance',
                    desc: 'Voorkom boetes. Minimaal label C is verplicht, strengere eisen komen eraan.'
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
              <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200">
                <h3 className="text-xl font-bold text-secondary mb-8 tracking-tight">Energielabels uitgelegd</h3>
                <div className="grid grid-cols-2 gap-2">
                  {labels.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="flex flex-col items-center p-3 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all group"
                    >
                      <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform mb-2`}>
                        {item.label}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono text-center leading-tight">{item.verbruik}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-6 italic text-center leading-relaxed">
                  * Indicatieve waarden voor kantoren (kWh/m² per jaar)
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Maatregelen overzicht */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Welke stappen <span className="text-primary italic">werken</span>?
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Labelverbetering is maatwerk. Wij simuleren welke maatregelen bij jouw pand de grootste labelsprong opleveren.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {maatregelen.map((maatregel, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-6 transition-colors">
                    <maatregel.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{maatregel.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed italic">{maatregel.beschrijving}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Impact</span>
                      <span className="text-sm font-black text-primary">{maatregel.impact}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Kosten</span>
                      <span className="text-sm font-bold text-secondary">{maatregel.kosten}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Terugverdientijd</span>
                      <span className="text-sm font-bold text-slate-600">{maatregel.terugverdientijd}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="mt-12 text-center">
            <p className="text-slate-400 italic">
              * Indicatieve waarden. Exacte impact hangt af van gebouwtype, huidige staat en gebruik.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl font-bold text-secondary mb-12 tracking-tight">
                Hoe wij jouw label <span className="text-primary italic">verbeteren</span>
              </h2>
              <ul className="space-y-10">
                {[
                  { 
                    title: 'Actuele label vaststellen', 
                    desc: 'We checken jouw huidige label en analyseren waar het verbruik vandaan komt.'
                  },
                  { 
                    title: 'Simulatie', 
                    desc: 'Welke maatregelen leveren welke labelsprong? We rekenen alle scenario\'s door.'
                  },
                  { 
                    title: 'Maatregelenpakket', 
                    desc: 'Isolatie, kozijnen, PV, opslag, EMS. We prioriteren op ROI en impact.'
                  },
                  { 
                    title: 'Kosten-baten analyse', 
                    desc: 'Wat kost elke stap? Wat levert het op in besparing en waardestijging?'
                  },
                  { 
                    title: 'Uitvoering', 
                    desc: 'Wij regelen het. Van offertes tot installatie tot oplevering.'
                  },
                  { 
                    title: 'Nieuw certificaat', 
                    desc: 'Direct bruikbaar voor taxaties, ESG-rapportage en compliance.'
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

            <FadeIn direction="left" className="space-y-8">
              <div className="bg-secondary rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <TrendingUp className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Snelle labelsprong</h3>
                  <p className="text-3xl font-black text-white mb-10 leading-tight">
                    Van label C naar A kan in 8-12 weken met de juiste combinatie van maatregelen.
                  </p>
                  <div className="space-y-4 pt-8 border-t border-white/10">
                    {[
                      'Simulatie binnen 1 week',
                      'Offerte binnen 2 weken',
                      'Realisatie in 6-10 weken',
                      'Certificaat direct aanvragen'
                    ].map((item, i) => (
                      <div key={i} className="flex items-center text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-[2.5rem] p-10 border border-orange-100">
                <div className="flex items-start mb-6">
                  <AlertTriangle className="w-6 h-6 text-primary mr-3 mt-1 shrink-0" />
                  <h3 className="text-xl font-bold text-secondary">Let op: minimumeis</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Voor commercieel vastgoed geldt sinds 2023 een minimumeis van label C bij verkoop en verhuur. 
                  Gebouwen met label D of lager zijn in de vrije sector niet meer verhuurbaar.
                </p>
                <p className="text-sm font-bold text-secondary">
                  Strengere eisen komen eraan. Wacht niet tot het moet.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wat het oplevert */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-6 tracking-tight">
              Wat een beter label <span className="text-primary italic">oplevert</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Waardestijging',
                desc: 'Taxateurs rekenen label A panden 10-15% hoger dan vergelijkbare C-labels.',
                stat: '10-15%',
                icon: TrendingUp
              },
              {
                title: 'Lagere exploitatie',
                desc: 'Minder energieverbruik = lagere stookkosten en stroomkosten. Direct rendement.',
                stat: '€ 15-30/m²',
                icon: Euro
              },
              {
                title: 'Snellere verhuur',
                desc: 'Label A panden verhuren gemiddeld 40% sneller dan C of lager.',
                stat: '40% sneller',
                icon: Home
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-6 mx-auto transition-colors">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-black text-primary mb-6">{item.stat}</div>
                  <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Praktijkvoorbeeld */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-[3rem] p-16 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ClipboardList className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-black text-secondary mb-8 tracking-tight">Praktijkvoorbeeld</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed italic">
                &quot;Kantoorpand 4.200 m² met label D. Huurcontracten lopen af, nieuwe huurders eisen minimaal B. 
                Aanpak: 600 kWp PV + dakisolatie + LED-upgrade. Resultaat: label B binnen 10 weken. 
                Kosten: € 380K. Waardestijging: € 520K. Nieuwe huurcontracten € 42/m² (was € 36/m²).&quot;
              </p>
              <div className="grid sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                {[
                  { label: 'Start', value: 'D' },
                  { label: 'Nu', value: 'B' },
                  { label: 'Investering', value: '€ 380K' },
                  { label: 'Waarde +', value: '€ 520K' }
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

      {/* De werkelijkheid */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
                De <span className="text-primary italic">werkelijkheid</span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/10">
                <p className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight italic">
                  &quot;Label-berekening is conservatief. Je werkelijke verbruik kan lager liggen. Wij sturen op beide: het label én de kWh.&quot;
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Het energielabel wordt berekend op basis van theoretisch verbruik (ISSO-normen). 
                  Met ons EMS meten we het echte verbruik en sturen we daar actief op. 
                  Dat betekent: beter label én lagere kosten.
                </p>
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
              Verhoog direct de <span className="italic text-primary">waarde</span> en verhuurbaarheid
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We voeren een labelscan uit om te zien welke stappen het snelst en rendabelst zijn voor jouw pand.
            </p>
            <Link
              href="/contact?type=labelscan"
              className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Vraag labelscan aan <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
