'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
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
    title: 'Scenario\'s & ROI',
    desc: 'Helder besluitdocument met CAPEX, OPEX en terugverdientijden.',
    details: ['Businesscase', 'Risico\'s', 'Subsidies']
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

export default function OverOnsPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-tight mb-6 md:mb-8">
              Klein team. <br />Harde <span className="text-primary italic">focus</span>.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto italic text-balance">
              Wij geloven dat energie-installaties pas waarde leveren als ze samenwerken. Daarom ontwerpen we geen losse componenten, maar complete systemen met sturing en inzicht.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-12 md:mb-16 tracking-tight text-center">
              Waar we voor <span className="text-primary italic">staan.</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-14">
            {[
              {
                title: 'Eerlijk',
                desc: 'We zeggen wat wel en niet kan. Geen loze beloftes als de data het niet ondersteunt.',
              },
              {
                title: 'Resultaat',
                desc: 'Meten, bijsturen, opleveren als het werkt. We zijn pas klaar als het systeem rendeert.',
              },
              {
                title: 'Samen',
                desc: 'Met eigenaar, beheerder en huurder aan één plan. Energie is een gedeeld belang.',
              },
              {
                title: 'Pragmatisch',
                desc: 'Liever simpel en effectief dan complex en traag. We houden van actie.',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 translate-y-[-2px]" />
                    <h3 className="text-2xl md:text-3xl font-black text-secondary tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-500 leading-relaxed pl-6 italic">
                    &quot;{item.desc}&quot;
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certificering */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-slate-100 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-32 md:w-48 h-32 md:h-48 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-6 md:mb-8 tracking-tight">Gecertificeerd EP-adviseur</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-8 md:mb-10 leading-relaxed italic">
              CAPAXX Energy is gecertificeerd voor Energieprestatie Gebouwen conform BRL 9500-U (SKG-IKOB). 
              Onze EP-adviseurs zijn vakbekwaam EP-U/D — de hoogste kwalificatie, detailmethode utiliteitsbouw — waarmee ook woningbouw is gedekt.
            </p>
            <div className="flex flex-wrap gap-3">
              {['BRL 9500-U', 'EP-U/D', 'SKG-IKOB'].map((label) => (
                <div key={label} className="flex items-center space-x-2 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <p className="text-sm font-black text-secondary uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Werkwijze Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-6 md:mb-8 tracking-tight">
                Onze <span className="text-primary italic">werkwijze</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed italic">
                Geen dikke rapporten. Wel een plan dat uitvoerbaar is. Onze aanpak is direct, datagedreven en resultaatgericht.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative pb-12 md:pb-24 group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 bottom-0 w-[2px] bg-slate-200 -ml-[1px] group-hover:bg-primary/30 transition-colors" />
                )}
                
                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary text-white flex items-center justify-center font-black text-2xl shrink-0 z-10 shadow-xl group-hover:bg-primary group-hover:scale-110 transition-all">
                  {i + 1}
                </div>
                
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-4 md:mb-6 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-6 md:mb-10 italic leading-relaxed text-balance">&quot;{step.desc}&quot;</p>
                  <div className="flex flex-wrap gap-4">
                    {step.details.map((detail, idx) => (
                      <span key={idx} className="flex items-center text-sm font-black text-secondary bg-white px-6 py-3 rounded-2xl border border-slate-200 uppercase tracking-widest group-hover:border-primary/30 transition-colors">
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
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-slate-100 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <ShieldCheck className="w-32 md:w-48 h-32 md:h-48 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary mb-6 md:mb-8 tracking-tight">Fiscaal voordeel</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-500 mb-8 md:mb-10 leading-relaxed italic">
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

      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white text-center rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
           <FadeIn>
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
               Klaar voor de <span className="italic text-primary">eerste stap?</span>
             </h2>
             <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto">
               We starten met een energiescan om het potentieel van jouw locatie helder in beeld te brengen.
             </p>
             <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Plan kennismaking <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
           </FadeIn>
        </div>
      </section>
    </div>
  )
}
