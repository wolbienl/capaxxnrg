'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ClipboardCheck, 
  Award, 
  Globe, 
  TrendingUp,
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  FileText,
  Zap
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const adviesgebieden = [
  {
    title: 'ESG',
    subtitle: 'Environmental, Social & Governance',
    description: 'CSRD-conforme rapportages vanuit jouw eigen EMS-data. Geen giswerk, wel meetbare prestaties.',
    icon: ClipboardCheck,
    href: '/advies/esg',
    color: 'from-blue-500 to-cyan-500',
    features: ['CSRD-rapportage', 'Portfolio-inzicht', 'CO₂-tracking']
  },
  {
    title: 'BREEAM',
    subtitle: 'Certificering & Labelverbetering',
    description: 'Van analyse tot certificaat. We laten zien waar je staat en wat je certificering oplevert.',
    icon: Award,
    href: '/advies/breeam',
    color: 'from-emerald-500 to-green-500',
    features: ['Gap-analyse', 'Certificering', 'Waardestijging']
  },
  {
    title: 'Paris Proof',
    subtitle: 'Toekomstbestendig vastgoed',
    description: 'Routekaart naar < 70 kWh/m² met quick wins en lange termijn strategie.',
    icon: Globe,
    href: '/advies/paris-proof',
    color: 'from-orange-500 to-red-500',
    features: ['Verbruiksanalyse', 'Routekaart', '2030-ready']
  },
  {
    title: 'Energielabels',
    subtitle: 'Van C naar A',
    description: 'Labelverbetering met harde ROI. We rekenen door welke stappen renderen.',
    icon: TrendingUp,
    href: '/advies/energielabels',
    color: 'from-purple-500 to-pink-500',
    features: ['Label-simulatie', 'Maatregelpakket', 'ROI-analyse']
  }
]

const werkwijze = [
  {
    title: 'Intake',
    description: 'Huidige status en ambities',
    icon: FileText
  },
  {
    title: 'Data-analyse',
    description: 'Energie, CO₂, verbruiksprofielen uit EMS',
    icon: BarChart3
  },
  {
    title: 'Rapportage',
    description: 'CSRD-conform, auditklaar',
    icon: ClipboardCheck
  },
  {
    title: 'Actieplan',
    description: 'Concrete stappen met ROI',
    icon: CheckCircle2
  },
  {
    title: 'Implementatie',
    description: 'Koppelen aan energie-assets',
    icon: Zap
  },
  {
    title: 'Monitoring',
    description: 'Blijven meten en bijsturen',
    icon: BarChart3
  }
]

export default function AdviesPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary rounded-full blur-[120px]" 
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-6 md:mb-8 tracking-widest uppercase">
              Advies
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-10">
              Duurzaamheid die <br />
              <span className="text-primary italic">meetbaar</span> is.
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-10 md:mb-16 leading-relaxed max-w-3xl mx-auto text-balance">
              Geen rapporten vol aannames. Wij gebruiken data uit jouw eigen installaties om te laten zien waar je staat, wat het oplevert en hoe je stappen zet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adviesgebieden Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Vier pijlers voor <span className="text-primary italic">compliance</span> én waarde
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Van ESG-rapportage tot labelverbetering. Altijd gekoppeld aan implementatie en resultaat.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {adviesgebieden.map((gebied, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={gebied.href} className="group block h-full">
                  <div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gebied.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16`} />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-primary/10 shadow-sm flex items-center justify-center text-secondary group-hover:text-primary transition-all duration-500 mb-8">
                        <gebied.icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-3xl font-black text-secondary mb-3 tracking-tight">{gebied.title}</h3>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{gebied.subtitle}</p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                        {gebied.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {gebied.features.map((feature, idx) => (
                          <span key={idx} className="text-xs font-bold text-secondary bg-slate-50 group-hover:bg-orange-50 px-4 py-2 rounded-xl uppercase tracking-wider transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                        Meer info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Advies bij CAPAXX */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-8 md:mb-12 tracking-tight leading-tight">
                Waarom advies <br />bij <span className="text-primary italic">CAPAXX</span>?
              </h2>
              
              <div className="space-y-6 md:space-y-10">
                {[
                  {
                    title: 'We hebben de data al',
                    desc: 'Energie, CO₂ en verbruik uit jouw eigen EMS en meters. Geen handmatig verzamelen.'
                  },
                  {
                    title: 'Van rapport naar actie',
                    desc: 'Niet alleen adviseren, maar ook implementeren. PV, opslag, sturing - wij regelen het.'
                  },
                  {
                    title: 'Continu verbeteren',
                    desc: 'Geen eenmalig rapport. We blijven meten en bijsturen om jouw score te verbeteren.'
                  }
                ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} direction="right">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-secondary mb-2 tracking-tight">{item.title}</h3>
                        <p className="text-lg text-slate-500 leading-relaxed italic">&quot;{item.desc}&quot;</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="bg-secondary rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <BarChart3 className="w-48 h-48" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Het verschil</h3>
                  <p className="text-3xl font-black text-white mb-8 leading-tight italic">
                    &quot;Wij rapporteren niet over wat je zou kunnen zijn. We meten wat je bent, en sturen waar je heen gaat.&quot;
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {[
                      { label: 'CSRD-conform', icon: CheckCircle2 },
                      { label: 'Realtime data', icon: BarChart3 },
                      { label: 'Auditklaar', icon: ClipboardCheck },
                      { label: 'ROI-focus', icon: TrendingUp }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-white/80">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 md:mb-8 tracking-tight">
                Van <span className="text-primary italic">meting</span> naar verbetering
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed italic">
                Onze werkwijze is data-first. We starten met wat er is, rapporteren wat het oplevert en blijven bijsturen.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {werkwijze.map((stap, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <stap.icon className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-black text-slate-300 uppercase tracking-[0.2em] mb-3">Stap {i + 1}</div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">{stap.title}</h3>
                  <p className="text-slate-500 italic leading-relaxed">{stap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Het verschil met andere partijen */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
                Waarom het bij ons <span className="text-primary italic">werkt</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Data-gedreven',
                  desc: 'We adviseren op basis van jouw eigen energie-data, niet op basis van vuistregels of gemiddeldes.',
                  stat: '100% realtime'
                },
                {
                  title: 'Volledige uitvoering',
                  desc: 'Van ESG-rapport tot zonnepanelen op het dak. Wij zorgen dat het daadwerkelijk gebeurt.',
                  stat: 'End-to-end'
                },
                {
                  title: 'Structureel resultaat',
                  desc: 'Geen eenmalig advies. We blijven meten, rapporteren en optimaliseren tot je doelen gehaald zijn.',
                  stat: 'Continue verbetering'
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} direction="up">
                  <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all h-full">
                    <div className="text-4xl font-black text-primary mb-6">{item.stat}</div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed italic">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Klaar voor <span className="italic text-primary">meetbare</span> duurzaamheid?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              We starten met een quickscan om te zien waar je nu staat en wat je volgende stappen zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=advies-quickscan"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Plan quickscan <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
              >
                Stel een vraag
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
