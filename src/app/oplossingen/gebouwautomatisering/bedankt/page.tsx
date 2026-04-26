import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Bedankt voor je aanvraag | CAPAXX Energy',
  description:
    'We sturen de whitepaper Intelligente Gebouwen persoonlijk naar je toe, meestal binnen één werkdag.',
  robots: { index: false, follow: false },
}

export default function GebouwautomatiseringBedanktPage() {
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
            Aanvraag <span className="text-primary italic">ontvangen.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-4 italic">
            We sturen de whitepaper{' '}
            <strong className="text-secondary not-italic">
              Intelligente Gebouwen
            </strong>{' '}
            persoonlijk naar je toe, meestal binnen één werkdag.
          </p>
          <p className="text-base text-slate-400 mb-12">
            Geen mail ontvangen? Controleer je spamfolder of neem direct contact op.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/oplossingen/gebouwautomatisering"
              className="inline-flex items-center gap-3 bg-secondary text-white font-black px-8 py-5 rounded-[1.5rem] text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 group"
            >
              <span>Terug naar gebouwautomatisering</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-slate-50 text-secondary font-black px-8 py-5 rounded-[1.5rem] text-lg hover:bg-slate-100 transition-all border border-slate-100"
            >
              Plan kennismaking
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
            <a
              href="tel:+31532065066"
              className="flex items-center justify-center gap-3 text-slate-500 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold">+31 (0)53 206 5066</span>
            </a>
            <a
              href="mailto:mail@capaxx-energy.nl"
              className="flex items-center justify-center gap-3 text-slate-500 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-bold">mail@capaxx-energy.nl</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
