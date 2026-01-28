'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Droplet,
  Leaf,
  Building2,
  Users,
  TrendingUp,
  ClipboardList,
  Zap,
  Euro
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const categories = [
  {
    title: 'Energy',
    description: 'Energieprestatie, CO₂-uitstoot en hernieuwbare energie',
    icon: Zap,
    weight: '30%'
  },
  {
    title: 'Water',
    description: 'Waterverbruik, afvalwater en waterbeheer',
    icon: Droplet,
    weight: '10%'
  },
  {
    title: 'Materials',
    description: 'Materiaalkeuze, circulariteit en levensduur',
    icon: Building2,
    weight: '15%'
  },
  {
    title: 'Health & Wellbeing',
    description: 'Luchtkwaliteit, daglicht, comfort en veiligheid',
    icon: Users,
    weight: '20%'
  },
  {
    title: 'Management',
    description: 'Beheerprocessen, monitoring en onderhoud',
    icon: ClipboardList,
    weight: '15%'
  },
  {
    title: 'Land Use & Ecology',
    description: 'Terreingebruik, biodiversiteit en groen',
    icon: Leaf,
    weight: '10%'
  }
]

export default function BREEAMPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Award}
        title="BREEAM certificering"
        titleHighlight="met data."
        description="Van analyse tot certificaat, gestuurd door meetbaar verbruik. We laten zien waar je staat, wat je certificering oplevert en hoe je daar komt."
        ctaText="Vraag BREEAM-analyse aan"
        ctaHref="/contact?type=breeam-analyse"
      />

      {/* Wat is BREEAM */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-4xl font-bold text-secondary mb-8 tracking-tight">
                Wat is BREEAM?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                BREEAM staat voor <strong>Building Research Establishment Environmental Assessment Method</strong>. 
                Het is het meest gebruikte internationale raamwerk voor duurzaam ontwikkelen, bouwen en exploiteren van vastgoed.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-10 italic">
                &quot;Een BREEAM-certificaat is geen mooi plaatje aan de muur. Het is een meetbaar bewijs dat jouw gebouw presteert op energie, water, materialen en comfort.&quot;
              </p>
              
              <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100">
                <h4 className="text-lg font-bold text-secondary mb-4">Certificeringsniveaus</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Outstanding', score: '≥ 85%', color: 'bg-green-500' },
                    { label: 'Excellent', score: '≥ 70%', color: 'bg-emerald-500' },
                    { label: 'Very Good', score: '≥ 55%', color: 'bg-blue-500' },
                    { label: 'Good', score: '≥ 45%', color: 'bg-slate-500' },
                    { label: 'Pass', score: '≥ 30%', color: 'bg-slate-400' }
                  ].map((level, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${level.color} mr-3`} />
                        <span className="font-bold text-secondary">{level.label}</span>
                      </div>
                      <span className="text-slate-400 font-mono">{level.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <div className="bg-secondary rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Award className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">De voordelen</h3>
                  <div className="space-y-8 mb-12">
                    {[
                      { value: 'Tot 20%', label: 'Waardestijging vastgoed' },
                      { value: '0.3-0.5%', label: 'Lagere financieringskosten' },
                      { value: '95%+', label: 'Verhuur-bezettingsgraad' }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                        <div className="text-slate-300 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <p className="text-white/60 text-sm font-medium italic">
                      BREEAM-gecertificeerde gebouwen zijn aantoonbaar meer waard, beter verhuurbaar en voldoen aan steeds strengere duurzaamheidseisen.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BREEAM Categorieën */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">
              Zes categorieën, één <span className="text-primary italic">systeem</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              BREEAM beoordeelt jouw gebouw op basis van zes hoofdcategorieën. Wij meten, rapporteren en verbeteren op alle fronten.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-slate-300 tracking-wider">{cat.weight}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">{cat.title}</h3>
                  <p className="text-sm text-slate-500 italic leading-relaxed">{cat.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tight text-center">
              Hoe wij je <span className="text-primary italic">certificering</span> regelen
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: 'Data-analyse',
                desc: 'We verzamelen energie-, water- en CO₂-data uit je bestaande systemen (EMS, meters, BMS).',
                deliverable: 'Nulmeting met actuele scores per BREEAM-categorie'
              },
              {
                title: 'Gap-analyse',
                desc: 'Waar sta je nu? Wat is er nodig voor certificering? We rekenen door wat haalbaar is.',
                deliverable: 'Overzicht van acties per categorie met prioriteit'
              },
              {
                title: 'Maatregelenpakket',
                desc: 'Concrete stappen met investeringsbedragen: isolatie, PV, opslag, EMS-integratie, waterbesparing.',
                deliverable: 'Roadmap met kosten, baten en terugverdientijd'
              },
              {
                title: 'Implementatie',
                desc: 'Van advies naar actie. Wij verzorgen installatie van PV, batterijen, EMS en andere maatregelen.',
                deliverable: 'Opgeleverde installaties, meet- en sturend'
              },
              {
                title: 'Certificering',
                desc: 'Begeleiding naar erkend BREEAM-certificaat. Audit-klare documentatie en rapportage.',
                deliverable: 'BREEAM-certificaat (Pass t/m Outstanding)'
              },
              {
                title: 'Continue verbetering',
                desc: 'Ook na certificering blijven we meten en rapporteren om jouw score te behouden of verbeteren.',
                deliverable: 'Jaarlijkse updates en monitoring'
              }
            ].map((stap, i) => (
              <FadeIn key={i} delay={i * 0.08} direction="up">
                <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center font-black text-xl shrink-0 mr-6 group-hover:bg-primary transition-colors">
                      {i + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">{stap.title}</h3>
                      <p className="text-lg text-slate-600 mb-4 leading-relaxed italic">{stap.desc}</p>
                      <div className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                        <span className="text-slate-500 font-medium">{stap.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom BREEAM belangrijk is */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-8 tracking-tight">
                Waarom BREEAM <span className="text-primary italic">nu</span> belangrijk is
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Financierbaarheid',
                  desc: 'Banken en investeerders geven steeds vaker voorrang aan gecertificeerde gebouwen. Lagere rente, betere voorwaarden.',
                  icon: Euro
                },
                {
                  title: 'Verhuurbaarheid',
                  desc: 'Huurders eisen duurzaamheid. BREEAM-certificering is vaak een hard criterium bij aanbesteding.',
                  icon: Building2
                },
                {
                  title: 'Waardestijging',
                  desc: 'Taxateurs waarderen BREEAM positief. Concrete studies laten 10-20% hogere waardes zien.',
                  icon: TrendingUp
                },
                {
                  title: 'EU-Taxonomie compliant',
                  desc: 'BREEAM sluit aan bij Europese kaders. Het vergemakkelijkt ook ESG-rapportage en CSRD-compliance.',
                  icon: CheckCircle2
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-orange-50 shadow-sm flex items-center justify-center text-primary mb-6 transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* De realiteit */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-12 leading-tight">
                De <span className="text-primary italic">realiteit</span>
              </h2>
              <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/10">
                <p className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight italic">
                  &quot;Een BREEAM-certificaat haal je niet met een mooi verhaal. Het vraagt meetbare prestaties. Die hebben wij.&quot;
                </p>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Wij koppelen jouw energie-installaties aan BREEAM-vereisten. 
                  Onze EMS-data vormt de basis voor scoring op energie, water en beheer. 
                  Dat scheelt handmatig werk en geeft je een voorsprong.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wat het oplevert */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-6 tracking-tight">
              Wat BREEAM <span className="text-primary italic">oplevert</span>
            </h2>
          </FadeIn>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Direct',
                  items: [
                    'Certificaat dat waarde toevoegt bij verkoop of verhuur',
                    'Betere positie in aanbestedingen',
                    'Marketing-argument richting huurders'
                  ]
                },
                {
                  title: 'Lange termijn',
                  items: [
                    'Lagere exploitatiekosten door efficiënter beheer',
                    'Toekomstbestendig: klaar voor strengere regelgeving',
                    'Hogere taxatiewaarde bij herfinanciering of exit'
                  ]
                }
              ].map((column, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                    <h3 className="text-2xl font-bold text-secondary mb-8 tracking-tight">{column.title}</h3>
                    <ul className="space-y-6">
                      {column.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-primary mr-4 shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Praktijkvoorbeeld */}
      <section className="py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-[3rem] p-16 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Award className="w-48 h-48" />
              </div>
              <h2 className="text-3xl font-black text-secondary mb-8 tracking-tight">Praktijkvoorbeeld</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed italic">
                &quot;Distributiecentrum met 12.000 m² en bestaande PV-installatie. 
                Doel: BREEAM Excellent voor herfinanciering. 
                Resultaat: score van 73% behaald door combinatie van LED-verlichting, waterbesparende maatregelen, 
                EMS-koppeling en uitbreiding PV met opslag. Taxatiewaarde steeg met € 2.1M.&quot;
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                {[
                  { label: 'Behaald niveau', value: 'Excellent' },
                  { label: 'Score', value: '73%' },
                  { label: 'Waardestijging', value: '€ 2.1M' }
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
      <section className="py-32 bg-secondary text-white rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Verhoog de waarde van <span className="italic text-primary">jouw vastgoed</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We voeren een BREEAM-analyse uit om te zien waar je staat en welke stappen rendabel zijn richting certificering.
            </p>
            <Link
              href="/contact?type=breeam-analyse"
              className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Vraag BREEAM-analyse aan <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
