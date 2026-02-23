import type { Metadata } from 'next'
import Link from 'next/link'
import { Cable, Scale, Wrench, BookOpen, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Kennisbank Netcongestie | CAPAXX Energy',
  description: 'Alles over netcongestie oplossen: cable pooling, flexibele transportrechten, zelfaanleg en de Energiewet 2026. Diepgaande kennis voor professionals.',
  keywords: ['netcongestie kennisbank', 'cable pooling', 'transportrechten', 'zelfaanleg', 'energiewet 2026'],
}

const pillars = [
  {
    icon: Cable,
    title: 'Cable pooling & energiegemeenschappen',
    description: 'Aansluiting delen met maximaal vier partijen, groepstransportovereenkomsten, en hoe je een energiegemeenschap opricht op je bedrijventerrein.',
    href: '/kennisbank/cable-pooling',
    stats: 'Max 4 partijen • Vanaf 100 kVA',
  },
  {
    icon: Scale,
    title: 'Flexibele transportrechten',
    description: 'Non-firm, tijdsblokgebonden en tijdsduurgebonden transportrechten. Welk type past bij jouw situatie en wat levert het op?',
    href: '/kennisbank/transportrechten',
    stats: '50-65% nettariefkorting • 4 vormen',
  },
  {
    icon: Wrench,
    title: 'Zelfaanleg (artikel 3.39)',
    description: 'De drempel is verlaagd van 10 MVA naar 2,3 MVA. Hoe werkt zelfaanleg, wat kost het, en wanneer is het de juiste route?',
    href: '/kennisbank/zelfaanleg',
    stats: 'Drempel 2,3 MVA • Snellere realisatie',
  },
  {
    icon: BookOpen,
    title: 'Energiewet 2026',
    description: 'Sinds 1 januari 2026 gelden nieuwe spelregels. Wat verandert er voor jou en welke kansen creëert de nieuwe wet?',
    href: '/kennisbank/energiewet-2026',
    stats: 'Per 1 jan 2026 • Fundamentele wijzigingen',
  },
]

export default function KennisbankPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <BookOpen className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Kennisbank</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Netcongestie <span className="text-primary italic">doorgrond.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Diepgaande kennis over de vier pijlers van netcongestie-oplossingen. 
                Met cijfers, juridische context en praktijkvoorbeelden.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={pillar.href} className="group block h-full">
                  <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-10 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8">
                      <pillar.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h2>
                    <p className="text-slate-500 mb-6 leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {pillar.stats}
                      </span>
                      <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                        Lees meer <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
