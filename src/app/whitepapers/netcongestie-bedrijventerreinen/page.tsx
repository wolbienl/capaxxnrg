'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Loader2, CheckCircle2, FileText, GitBranch, Calculator } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

const BASIN_URL = 'https://usebasin.com/f/70ad191caca7'

const ROUTES = [
  'Route 1: Capaciteitsoptimalisatie — meer halen uit je huidige aansluiting',
  'Route 2: Cable pooling — aansluiting delen met partijen op het terrein',
  'Route 3: Groepstransportovereenkomst (GTO) — gezamenlijk capaciteit contracteren',
  'Route 4: Flexibel transport (non-firm) — sneller beschikbaar, lagere kosten',
  'Route 5: Zelfaanleg — eigen kabelroute naar het onderstation',
]

const STATS = [
  { value: '22.000+', label: 'grootverbruikers op de wachtlijst' },
  { value: '2030+', label: 'verwachte doorlooptijd netverzwaring' },
  { value: '30%', label: 'schade te beperken met eigen maatregelen' },
]

const EXTRAS = [
  { icon: GitBranch, label: 'Beslisboom', desc: 'Welke route past bij jouw situatie?' },
  { icon: Calculator, label: 'Rekenvoorbeeld', desc: 'Concrete businesscase met ROI-berekening' },
  { icon: FileText, label: 'Stappenplan', desc: 'Wat, in welke volgorde, en wie doet wat?' },
]

export default function WhitepaperNetcongestionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">

      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-black uppercase tracking-widest mb-6">
              <FileText className="w-4 h-4" />
              Gratis whitepaper
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-secondary leading-tight mb-6 md:mb-8 max-w-5xl">
              Van wachtlijst naar{' '}
              <span className="text-primary italic">werkbaar plan.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-8 md:mb-10 leading-relaxed max-w-3xl italic text-balance">
              Vijf concrete routes om vandaag nog capaciteit vrij te maken op een vol elektriciteitsnet.
              Voor vastgoedeigenaren, asset managers en bedrijventerreinmanagers.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
          >
            {STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-primary leading-none">{stat.value}</span>
                <span className="text-xs md:text-sm text-slate-400 font-medium mt-1 leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">

            {/* Left: What's inside */}
            <FadeIn direction="right">
              <div className="space-y-10 md:space-y-14">

                <div>
                  <p className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-5">Wat staat er in</p>
                  <ul className="space-y-4">
                    {ROUTES.map((route, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-base md:text-lg font-bold text-secondary leading-snug">{route}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {EXTRAS.map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="bg-slate-50 rounded-[1.5rem] p-6 border border-slate-100">
                      <Icon className="w-6 h-6 text-primary mb-3" />
                      <div className="text-sm font-black text-secondary mb-1">{label}</div>
                      <div className="text-xs text-slate-400 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-24 -mt-24" />
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-3">Voor wie?</p>
                  <ul className="space-y-3 relative z-10">
                    {['Vastgoedeigenaren met een vol net', 'Asset managers die willen verduurzamen', 'Bedrijventerreinmanagers en BIZ\'es', 'Huurders die willen uitbreiden of elektrificeren'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-bold text-base md:text-lg">
                        <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>

            {/* Right: Form */}
            <FadeIn direction="left" className="bg-white rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] p-8 md:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.1)] border border-slate-100 relative lg:sticky lg:top-8">
              <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary tracking-tight mb-3">
                  Download gratis.
                </h2>
                <p className="text-slate-400 font-medium">
                  Vul je gegevens in en ontvang de whitepaper direct in je inbox.
                </p>
              </div>

              <form
                className="space-y-6"
                action={BASIN_URL}
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_next" value="https://capaxx-energy.nl/whitepapers/netcongestie-bedrijventerreinen/bedankt" />
                <input type="hidden" name="whitepaper" value="Netcongestie op bedrijventerreinen" />

                <div className="space-y-3">
                  <label htmlFor="naam" className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Jouw naam</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="Volledige naam"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">E-mailadres</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="bedrijf" className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Bedrijfsnaam</label>
                  <input
                    type="text"
                    id="bedrijf"
                    name="bedrijf"
                    required
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-medium"
                    placeholder="Jouw bedrijf of organisatie"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="rol" className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Jouw rol</label>
                  <div className="relative">
                    <select
                      id="rol"
                      name="rol"
                      className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all text-secondary font-bold appearance-none"
                    >
                      <option value="Vastgoedeigenaar">Vastgoedeigenaar</option>
                      <option value="Asset manager">Asset manager</option>
                      <option value="Bedrijventerreinmanager">Bedrijventerreinmanager</option>
                      <option value="Huurder / ondernemer">Huurder / ondernemer</option>
                      <option value="Anders">Anders</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-primary text-white font-black rounded-[1.5rem] text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Moment...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
                      <span>Download whitepaper</span>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-300 font-medium pt-1">
                  Geen spam. Je gegevens worden alleen gebruikt om de whitepaper te versturen.
                </p>
              </form>
            </FadeIn>

          </div>
        </div>
      </section>

    </div>
  )
}
