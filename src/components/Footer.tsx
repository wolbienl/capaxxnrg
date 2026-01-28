import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Image
                src="/images/logo-light.svg"
                alt="CAPAXX ENERGY"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-400 max-w-xs leading-relaxed italic">
              Unlock waarde uit jouw vastgoedenergie. Voor commercieel vastgoed dat wil doorgroeien.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Oplossingen */}
          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">Oplossingen</h4>
            <ul className="space-y-5">
              {['Zonnepanelen', 'Energieopslag', 'Laadinfra', 'Solar Carports', 'EMS'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/oplossingen/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-400 hover:text-primary transition-all flex items-center group font-medium"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Snelkoppelingen */}
          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">Navigatie</h4>
            <ul className="space-y-5">
              {['Advies', 'Cases', 'Over ons'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-slate-400 hover:text-primary transition-all flex items-center group font-medium"
                  >
                    <span className="w-0 h-[1px] bg-primary group-hover:w-4 transition-all mr-0 group-hover:mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black mb-8 tracking-tight">Direct Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">Jan Tinbergenstraat 202,<br />7559ST Hengelo</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+31532065066" className="text-slate-400 hover:text-white transition-colors font-medium">
                  +31 (0)53 206 5066
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:mail@capaxx-energy.nl" className="text-slate-400 hover:text-white transition-colors font-medium">
                  mail@capaxx-energy.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} CAPAXX Energy. Geen dikke praat, wel resultaat.</p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
