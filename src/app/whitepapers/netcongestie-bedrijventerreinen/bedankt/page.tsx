import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Bedankt voor je aanvraag | Whitepaper Netcongestie',
  description: 'Je whitepaper is onderweg. Bekijk ook de andere oplossingen van CAPAXX Energy.',
}

export default function WhitepaperBedanktPage() {
  return (
    <div className="flex flex-col w-full min-h-screen selection:bg-primary/30">
      <section className="flex-1 flex items-center justify-center py-32 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-2xl text-center">

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary leading-tight mb-6">
            Whitepaper is <span className="text-primary italic">onderweg.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-4 italic">
            Check je inbox — je ontvangt de whitepaper <strong className="text-secondary not-italic">Netcongestie op bedrijventerreinen</strong> zo snel mogelijk.
          </p>
          <p className="text-base text-slate-400 mb-12">
            Geen mail ontvangen? Controleer je spamfolder of neem direct contact op.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-5 rounded-[1.5rem] text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group"
            >
              <span>Gratis quickscan aanvragen</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-slate-50 text-secondary font-black px-8 py-5 rounded-[1.5rem] text-lg hover:bg-slate-100 transition-all border border-slate-100"
            >
              Terug naar de homepage
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-slate-400">
            <a href="tel:+31532065066" className="flex items-center gap-2 hover:text-primary transition-colors font-bold">
              <Phone className="w-4 h-4" />
              +31 (0)53 206 5066
            </a>
            <a href="mailto:mail@capaxx-energy.nl" className="flex items-center gap-2 hover:text-primary transition-colors font-bold">
              <Mail className="w-4 h-4" />
              mail@capaxx-energy.nl
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
