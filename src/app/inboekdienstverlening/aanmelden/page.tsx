'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, Send, CheckCircle2, ShieldCheck, Zap, BarChart3 } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import Breadcrumb from '@/components/Breadcrumb'

const BASIN_URL = 'https://usebasin.com/f/c84e2329f874'

const voordelen = [
  { icon: ShieldCheck, tekst: 'NEa-geregistreerd' },
  { icon: Zap, tekst: 'Terugwerkende kracht mogelijk' },
  { icon: BarChart3, tekst: 'Maximale ERE-opbrengst' },
]

export default function AanmeldenPage() {
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
          <Breadcrumb
            items={[
              { name: 'Home', url: '/' },
              { name: 'Inboekdienstverlening', url: '/inboekdienstverlening' },
              { name: 'Aanmelden' },
            ]}
            className="mb-4 -mx-4 md:-mx-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary leading-[1.1] tracking-tight mb-3">
              Start met <span className="text-primary italic">inboeken.</span>
            </h1>
            <p className="text-slate-500 max-w-xl leading-relaxed">
              Vul het formulier in en wij nemen binnen 24 uur contact op. Uw ERE-certificaten kunnen met terugwerkende kracht over heel 2026 worden ingeboekt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Linkerkolom: info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 mb-6">
                  <h3 className="text-base font-black text-secondary mb-6">Waarom aanmelden?</h3>
                  <ul className="space-y-4">
                    {voordelen.map((v) => (
                      <li key={v.tekst} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shrink-0">
                          <v.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-bold text-secondary">{v.tekst}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/images/nea-logo.svg"
                      alt="Nederlandse Emissieautoriteit"
                      width={36}
                      height={36}
                      className="w-9 h-9"
                    />
                    <div>
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Geregistreerd bij</p>
                      <a
                        href="https://www.emissieautoriteit.nl/documenten/2026/02/02/lijst-van-inboekdienstverleners"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-black text-secondary hover:text-primary transition-colors"
                      >
                        Nederlandse Emissieautoriteit →
                      </a>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                    BRL 9500-U · SKG-IKOB
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden hidden lg:block">
                  <Image
                    src="/images/inch-pro-laadpaal.webp"
                    alt="INCH Pro laadpaal"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Rechterkolom: formulier */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-slate-100/50 border border-slate-100">
                  <h3 className="text-base font-black text-secondary mb-6">Aanmelden voor inboekdienstverlening</h3>
                  <form
                    className="space-y-5"
                    action={BASIN_URL}
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="_next" value="https://capaxx-energy.nl/inboekdienstverlening/bedankt" />
                    <input type="hidden" name="dienst" value="inboekdienstverlening" />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="bedrijfsnaam" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          id="bedrijfsnaam"
                          name="bedrijfsnaam"
                          required
                          placeholder="Bedrijf B.V."
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="contactpersoon" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Contactpersoon
                        </label>
                        <input
                          type="text"
                          id="contactpersoon"
                          name="contactpersoon"
                          required
                          placeholder="Volledige naam"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
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
                      <div>
                        <label htmlFor="telefoon" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Telefoon
                        </label>
                        <input
                          type="tel"
                          id="telefoon"
                          name="telefoon"
                          placeholder="+31 6 12345678"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="type_organisatie" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                        Type organisatie
                      </label>
                      <div className="relative">
                        <select
                          id="type_organisatie"
                          name="type_organisatie"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-bold appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                        >
                          <option>Vastgoedbeheerder / eigenaar</option>
                          <option>Logistiek / transport</option>
                          <option>Bedrijventerrein / VvE</option>
                          <option>Particulier</option>
                          <option>Anders</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="aantal_laadpunten" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Aantal laadpunten
                        </label>
                        <div className="relative">
                          <select
                            id="aantal_laadpunten"
                            name="aantal_laadpunten"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-bold appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          >
                            <option>1 – 5</option>
                            <option>6 – 20</option>
                            <option>21 – 50</option>
                            <option>50+</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="eigen_opwek" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                          Eigen opwek (zon)
                        </label>
                        <div className="relative">
                          <select
                            id="eigen_opwek"
                            name="eigen_opwek"
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-bold appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                          >
                            <option>Ja, zonnepanelen aanwezig</option>
                            <option>Nee</option>
                            <option>In planning</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bericht" className="text-[9px] font-black text-slate-300 uppercase tracking-widest mb-1.5 block">
                        Toelichting (optioneel)
                      </label>
                      <textarea
                        id="bericht"
                        name="bericht"
                        placeholder="Vertel ons over uw laadinfra, locatie(s) of specifieke situatie..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-secondary font-medium min-h-[100px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300 resize-y"
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
                          Aanmelden voor inboeking
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-start gap-2 pt-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-400">
                        Wij nemen binnen 24 uur contact met u op. Uw gegevens worden vertrouwelijk behandeld conform ons{' '}
                        <a href="/privacy" className="underline hover:text-primary">privacybeleid</a>.
                      </p>
                    </div>
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
