'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, TrendingUp } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const steps = [
  {
    title: 'Intake en data',
    desc: 'kWh, kwartier, contract en aansluiting. We starten altijd met wat er is.',
    details: ['Data-analyse', 'Nulmeting', 'Ambities']
  },
  {
    title: 'Scan op locatie',
    desc: 'Engineering check van daken, terreinen en elektrische infra.',
    details: ['Haalbaarheid', 'Constructie', 'Inmeten']
  },
  {
    title: 'Scenario’s & ROI',
    desc: 'Helder besluitdocument met CAPEX, OPEX en terugverdientijden.',
    details: ['Businesscase', 'Risico’s', 'Subsidies']
  },
  {
    title: 'Realisatie',
    desc: 'Engineering en uitvoering met vaste planning en één aanspreekpunt.',
    details: ['Projectmanagement', 'Installatie', 'Uptime']
  },
  {
    title: 'EMS & Sturing',
    desc: 'Inregelen van de techniek en de sturingsregels in het EMS.',
    details: ['Integratie', 'Dashboards', 'Regels']
  },
  {
    title: 'Optimalisatie',
    desc: 'We blijven meten om het resultaat continu te verbeteren.',
    details: ['Rapportage', 'Bijsturen', 'Monitoring']
  }
]

export default function WerkwijzePage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-secondary leading-tight mb-8">
              Geen <span className="text-primary italic">dikke</span> rapporten.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed max-w-3xl mx-auto italic text-balance">
              Wel een plan dat uitvoerbaar is. Onze aanpak is direct, datagedreven en resultaatgericht.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="flex flex-col md:flex-row gap-12 items-start relative pb-24 group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 bottom-0 w-[2px] bg-slate-100 -ml-[1px] group-hover:bg-primary/20 transition-colors" />
                )}
                
                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary text-white flex items-center justify-center font-black text-2xl shrink-0 z-10 shadow-xl group-hover:bg-primary transition-colors">
                  {i + 1}
                </div>
                
                <div className="flex-grow pt-2">
                  <h3 className="text-4xl font-black text-secondary mb-6 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-2xl text-slate-500 mb-10 italic leading-relaxed text-balance">&quot;{step.desc}&quot;</p>
                  <div className="flex flex-wrap gap-4">
                    {step.details.map((detail, idx) => (
                      <span key={idx} className="flex items-center text-sm font-black text-secondary bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100 uppercase tracking-widest">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3" /> {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidie Sectie */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto glass-card rounded-[3rem] p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck className="w-48 h-48 text-primary" />
            </div>
            <h2 className="text-4xl font-black text-secondary mb-8 tracking-tight">Fiscaal voordeel</h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed italic">
              We kijken mee wat van toepassing is. Regelingen zoals EIA en MIA/Vamil kunnen de businesscase aanzienlijk versnellen. 
              EIA biedt in 2026 tot 40% aftrek, en MIA/Vamil tot ruim 14% netto voordeel.
            </p>
            <div className="flex items-center space-x-2 p-4 bg-orange-50 rounded-2xl border border-orange-100 w-fit">
               <ShieldCheck className="w-5 h-5 text-primary" />
               <p className="text-sm font-black text-secondary uppercase tracking-widest">
                 Wij regelen de doorrekening.
               </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-32 bg-secondary text-white text-center rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
             <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">Starten met de scan?</h2>
             <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 bg-primary text-white font-black rounded-2xl text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Plan kennismaking <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
           </FadeIn>
        </div>
      </section>
    </div>
  )
}
