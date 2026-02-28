import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Battery, Cable, Network, Scale, Wrench, BookOpen, ArrowRight, Zap } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Kennisbank Netcongestie & Energie | CAPAXX Energy',
  description: 'Alles over netcongestie oplossen: cable pooling, flexibele transportrechten, zelfaanleg, Energiewet 2026, energiehubs en subsidies zoals Flex-e en SPRILA. Diepgaande kennis voor professionals.',
  keywords: ['netcongestie kennisbank', 'cable pooling', 'transportrechten', 'zelfaanleg', 'energiewet 2026', 'energiehubs', 'flex-e subsidie', 'SPRILA 2026'],
}

type KennisbankItem = {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

const categories: { label: string; items: KennisbankItem[] }[] = [
  {
    label: 'Oplossingen',
    items: [
      {
        icon: Cable,
        title: 'Cable pooling & energiegemeenschappen',
        description: 'Aansluiting delen met max. vier partijen en GTO\'s op je bedrijventerrein.',
        href: '/kennisbank/cable-pooling',
      },
      {
        icon: Scale,
        title: 'Flexibele transportrechten',
        description: 'Non-firm, tijdsblokgebonden en TDTR — welk type past bij jouw situatie?',
        href: '/kennisbank/transportrechten',
      },
      {
        icon: Wrench,
        title: 'Zelfaanleg (artikel 3.39)',
        description: 'Drempel verlaagd naar 2,3 MVA. Hoe werkt het en wanneer loont het?',
        href: '/kennisbank/zelfaanleg',
      },
      {
        icon: Network,
        title: 'Energiehubs',
        description: 'Gedeelde opwek, opslag en verbruik op één locatie — netcongestie omzeilen.',
        href: '/kennisbank/energiehubs',
      },
    ],
  },
  {
    label: 'Wet & regelgeving',
    items: [
      {
        icon: BookOpen,
        title: 'Energiewet 2026',
        description: 'Nieuwe spelregels sinds 1 januari 2026 — kansen voor jouw situatie.',
        href: '/kennisbank/energiewet-2026',
      },
    ],
  },
  {
    label: 'Subsidies',
    items: [
      {
        icon: Battery,
        title: 'Flex-e subsidie 2026',
        description: '€62 miljoen voor batterijen, EMS en flexibiliteitsmaatregelen.',
        href: '/kennisbank/flex-e-subsidie-2026',
      },
      {
        icon: Zap,
        title: 'SPRILA 2026',
        description: 'Subsidie voor energie-infrastructuurprojecten die netcongestie verlichten.',
        href: '/kennisbank/sprila-2026',
      },
    ],
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
                Netcongestie & energie <span className="text-primary italic">doorgrond.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                Diepgaande kennis over netcongestie-oplossingen, energiehubs en subsidies.
                Met cijfers, juridische context en praktijkvoorbeelden.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-10 md:space-y-14">
            {categories.map((category, ci) => (
              <FadeIn key={ci} delay={ci * 0.12}>
                <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-4 pl-1">
                  {category.label}
                </h2>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
                  {category.items.map((item, ii) => (
                    <Link
                      key={ii}
                      href={item.href}
                      className={`group flex items-center gap-4 md:gap-6 px-5 py-4 md:px-7 md:py-5 hover:bg-orange-50/60 transition-colors duration-200 ${
                        ii < category.items.length - 1 ? 'border-b border-slate-100' : ''
                      }`}
                    >
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white shadow-sm flex items-center justify-center text-secondary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-base md:text-lg font-bold text-secondary group-hover:text-primary transition-colors duration-200 tracking-tight">
                          {item.title}
                        </span>
                        <span className="hidden md:inline text-slate-400 ml-3">
                          {item.description}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
