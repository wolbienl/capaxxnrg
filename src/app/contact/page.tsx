'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-secondary leading-tight mb-8">
              Zeg <span className="text-primary italic">hoi.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 mb-10 leading-relaxed max-w-3xl italic text-balance">
              Vertel ons over je pand of portefeuille. We reageren snel, direct en zonder omwegen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <FadeIn direction="right">
              <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 mb-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-3xl font-black text-secondary mb-12 tracking-tight">Direct contact</h3>
                <ul className="space-y-10">
                  <li className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Bellen</div>
                      <a href="tel:+31532065066" className="text-2xl font-black text-secondary hover:text-primary transition-colors tracking-tight">+31 (0)53 206 5066</a>
                    </div>
                  </li>
                  <li className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Mail className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Mailen</div>
                      <a href="mailto:mail@capaxx-energy.nl" className="text-2xl font-black text-secondary hover:text-primary transition-colors tracking-tight">mail@capaxx-energy.nl</a>
                    </div>
                  </li>
                  <li className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <MapPin className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-1">Locatie</div>
                      <div className="text-2xl font-black text-secondary tracking-tight">Jan Tinbergenstraat 202, Hengelo</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 px-4">
                <h4 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em]">Handig om alvast te sturen</h4>
                <ul className="space-y-4">
                  {['Adres(sen) en type gebruik', 'Netcapaciteit (indien bekend)', 'Jaarverbruik / kwartierdata', 'Ambities (PV, Batterij, Laden)'].map((item, i) => (
                    <li key={i} className="flex items-center text-lg font-bold text-secondary italic">
                      <ArrowRight className="w-5 h-5 text-primary mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="bg-white rounded-[4rem] p-12 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-slate-100 relative">
               <h3 className="text-4xl font-black text-secondary mb-12 tracking-tight">Start het gesprek.</h3>
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Jouw Naam</label>
                      <input type="text" className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium" placeholder="Volledige naam" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">E-mail</label>
                      <input type="email" className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium" placeholder="naam@bedrijf.nl" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Wat wil je bespreken?</label>
                    <div className="relative">
                      <select className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-bold appearance-none">
                        <option>Energiescan aanvragen</option>
                        <option>Kennismaking plannen</option>
                        <option>Specifieke oplossing (Zon, Batterij, Laden)</option>
                        <option>Anders</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                         <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Bericht</label>
                    <textarea className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium min-h-[180px]" placeholder="Vertel ons over jouw pand of uitdaging..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-secondary text-white font-black rounded-[1.5rem] text-xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 flex items-center justify-center group active:scale-[0.98]">
                    <span>Verstuur Bericht</span>
                    <Send className="w-6 h-6 ml-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
               </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
