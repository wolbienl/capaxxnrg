'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const BASIN_URL = 'https://usebasin.com/f/1f4650e9075c'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* Hero */}
      <section className="relative pt-28 pb-4 md:pt-32 md:pb-6 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary leading-[1.1] tracking-tight mb-3">
              Zeg <span className="text-primary italic">hoi.</span>
            </h1>
            <p className="text-slate-500 max-w-xl leading-relaxed">
              Vertel ons over jouw pand of portefeuille. We reageren snel, direct en zonder omwegen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Linkerkolom: contactinfo */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 mb-6">
                  <h3 className="text-base font-black text-secondary mb-6">Direct contact</h3>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                        <Phone className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Bellen</div>
                        <a href="tel:+31532065066" className="text-sm font-black text-secondary hover:text-primary transition-colors">
                          +31 (0)53 206 5066
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                        <Mail className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Mailen</div>
                        <a href="mailto:mail@capaxx-energy.nl" className="text-sm font-black text-secondary hover:text-primary transition-colors">
                          mail@capaxx-energy.nl
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                        <MapPin className="w-4 h-4 text-slate-400" />
                      </div>
                      <div>
                        <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5">Locatie</div>
                        <span className="text-sm font-black text-secondary">
                          Jan Tinbergenstraat 202, Hengelo
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="px-1">
                  <h4 className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-3">
                    Handig om alvast te sturen
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Adres(sen) en type gebruik',
                      'Netaansluiting en capaciteit',
                      'Jaarverbruik of kwartierdata',
                      'Ambitie (zon, batterij, laden, advies, netcongestie)',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                        <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Rechterkolom: formulier */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-100/50 border border-slate-100">
                  <h3 className="text-base font-black text-secondary mb-6">Start het gesprek</h3>
                  <form
                    className="space-y-5"
                    action={BASIN_URL}
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_next" value="https://capaxx-energy.nl/contact/bedankt" />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="naam" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Naam
                        </label>
                        <input
                          type="text"
                          id="naam"
                          name="naam"
                          required
                          placeholder="Volledige naam"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="naam@bedrijf.nl"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="onderwerp" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                        Onderwerp
                      </label>
                      <div className="relative">
                        <select
                          id="onderwerp"
                          name="onderwerp"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-bold appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        >
                          <option>Energiescan aanvragen</option>
                          <option>Kennismaking plannen</option>
                          <option>Zonnepanelen / energieopslag</option>
                          <option>EMS / energiemanagement</option>
                          <option>Laadinfrastructuur</option>
                          <option>Netcongestie-oplossing</option>
                          <option>Advies (energielabel, BREEAM, ESG)</option>
                          <option>Anders</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bericht" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                        Bericht
                      </label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        required
                        placeholder="Vertel ons over jouw pand of uitdaging..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium min-h-[120px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-secondary text-white font-black rounded-xl text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Versturen...
                        </>
                      ) : (
                        <>
                          Verstuur bericht
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
