'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Battery, 
  EvCharger, 
  Car, 
  BarChart3,
  CheckCircle2, 
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  Network
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const oplossingen = [
  {
    title: 'Zonnepanelen',
    subtitle: 'Maximale opbrengst',
    description: 'Optimaal ontwerp voor dak en terrein. Van eerste scan tot langjarig beheer.',
    icon: Sun,
    href: '/oplossingen/zonnepanelen',
    color: 'from-orange-500 to-yellow-500',
    features: ['ROI-simulatie', 'Realisatie', 'Monitoring']
  },
  {
    title: 'Energieopslag',
    subtitle: 'Peak shaving & flexibiliteit',
    description: 'Batterijen die pieken wegvangen, zelfverbruik verhogen en netruimte creëren.',
    icon: Battery,
    href: '/oplossingen/energieopslag',
    color: 'from-blue-500 to-cyan-500',
    features: ['Peak shaving', 'Zelfverbruik', 'Netflexibiliteit']
  },
  {
    title: 'Laadinfrastructuur',
    subtitle: 'Slim laden met load balancing',
    description: 'Van enkele laadpalen tot complete parken. Altijd slim gestuurd op beschikbaar vermogen.',
    icon: EvCharger,
    href: '/oplossingen/laadinfra',
    color: 'from-emerald-500 to-green-500',
    features: ['Load balancing', 'Slimme sturing', 'Schaalbaar']
  },
  {
    title: 'Solar Carports',
    subtitle: 'Opwek en laden gecombineerd',
    description: 'Dubbel gebruik van parkeerterrein. Opwek, schaduw en laadpunten in één ontwerp.',
    icon: Car,
    href: '/oplossingen/solar-carports',
    color: 'from-indigo-500 to-purple-500',
    features: ['Terreinoptimalisatie', 'Integraal ontwerp', 'Maximaal rendement']
  },
  {
    title: 'Energy Management System',
    subtitle: 'Realtime inzicht en sturing',
    description: 'Alle assets verbonden, zichtbaar en slim gestuurd vanuit één platform.',
    icon: BarChart3,
    href: '/oplossingen/ems',
    color: 'from-slate-600 to-slate-800',
    features: ['Live monitoring', 'Automatische sturing', 'ROI-tracking']
  }
]

const werkwijze = [
  {
    title: 'Energiescan',
    description: 'Data-gedreven inzicht in opwek, verbruik en netruimte',
    icon: BarChart3
  },
  {
    title: 'Businesscase',
    description: 'Scenario\'s met heldere ROI en risico-analyses',
    icon: TrendingUp
  },
  {
    title: 'Engineering',
    description: 'Ontwerp en vergunningen, volledig uitgewerkt',
    icon: Network
  },
  {
    title: 'Realisatie',
    description: 'Uitvoering met één aanspreekpunt',
    icon: Zap
  },
  {
    title: 'Inbedrijfstelling',
    description: 'Testen, aansluiten en live monitoring activeren',
    icon: CheckCircle2
  },
  {
    title: 'Optimalisatie',
    description: 'Continu bijsturen voor maximaal rendement',
    icon: Shield
  }
]

export default function OplossingenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
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
            <div className="inline-block px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-8 tracking-widest uppercase">
              Oplossingen
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-secondary leading-[1.05] tracking-tight mb-10">
              Energie-assets die <br />
              <span className="text-primary italic">meetellen</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 mb-16 leading-relaxed max-w-3xl mx-auto text-balance">
              Van zonnepanelen tot opslag, van laden tot sturing. Wij integreren alle componenten zodat ze elkaar versterken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oplossingen Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8 tracking-tight">
              Vijf bouwstenen voor <span className="text-primary italic">energie-onafhankelijkheid</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Al onze oplossingen zijn ontworpen om samen te werken. Zo creëer je een systeem dat meer is dan de som der delen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {oplossingen.map((oplossing, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={oplossing.href} className="group block h-full">
                  <div className="relative bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${oplossing.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-16 -mt-16`} />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-primary/10 shadow-sm flex items-center justify-center text-secondary group-hover:text-primary transition-all duration-500 mb-8">
                        <oplossing.icon className="w-8 h-8" />
                      </div>
                      
                      <h3 className="text-3xl font-black text-secondary mb-3 tracking-tight">{oplossing.title}</h3>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{oplossing.subtitle}</p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                        {oplossing.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {oplossing.features.map((feature, idx) => (
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

      {/* Waarom bij CAPAXX */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="right">
              <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-12 tracking-tight leading-tight">
                Waarom oplossingen <br />bij <span className="text-primary italic">CAPAXX</span>?
              </h2>
              
              <div className="space-y-10">
                {[
                  {
                    title: 'Alles uit één hand',
                    desc: 'Van scan tot monitoring. Eén aanspreekpunt, één verantwoordelijkheid.'
                  },
                  {
                    title: 'Systemen die samenwerken',
                    desc: 'Geen losse installaties, maar een geïntegreerd platform dat slim stuurt op rendement.'
                  },
                  {
                    title: 'Blijvend optimaliseren',
                    desc: 'We monitoren en sturen bij. Zo blijf je maximaal rendement halen uit je assets.'
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
                  <Zap className="w-48 h-48" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-6">Het verschil</h3>
                  <p className="text-3xl font-black text-white mb-8 leading-tight italic">
                    &quot;Geen losse installaties die toevallig naast elkaar staan. Wel een systeem dat slim stuurt op jouw rendement.&quot;
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
                    {[
                      { label: 'Alles uit één hand', icon: CheckCircle2 },
                      { label: 'Live monitoring', icon: BarChart3 },
                      { label: 'Automatisch sturen', icon: Zap },
                      { label: 'Blijvend optimaal', icon: TrendingUp }
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
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 tracking-tight">
                Van <span className="text-primary italic">scan</span> naar optimaal rendement
              </h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed italic">
                Onze werkwijze begint met data en eindigt met blijvend resultaat.
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
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-8 tracking-tight">
                Waarom het bij ons <span className="text-primary italic">werkt</span>
              </h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Data-first',
                  desc: 'We starten met meten en analyseren. Zo weet je exact waar je staat en wat het oplevert.',
                  stat: '100% inzicht'
                },
                {
                  title: 'Geïntegreerd systeem',
                  desc: 'Onze oplossingen zijn ontworpen om samen te werken. Eén platform, maximaal rendement.',
                  stat: 'End-to-end'
                },
                {
                  title: 'Continu optimaliseren',
                  desc: 'We blijven meten, rapporteren en bijsturen. Zo haal je blijvend het maximale uit je assets.',
                  stat: 'Blijvend beter'
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
      <section className="py-32 bg-secondary text-white rounded-t-[4rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Klaar voor <span className="italic text-primary">maximaal</span> rendement?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              We starten met een energiescan om te zien waar je nu staat en wat je volgende stappen zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact?type=energiescan"
                className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Vraag energiescan aan <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-xl hover:bg-white/10 transition-all"
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
