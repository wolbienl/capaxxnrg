'use client'

import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Factory,
  Sun,
  Cable,
  Scale,
  Wrench,
  BookOpen,
  Zap,
  Network,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import SolutionHero from '@/components/SolutionHero';

const voorWie = [
  {
    title: 'Vastgoed & bedrijventerreinen',
    description: 'Uitbreiden of elektrificeren, maar geen transportcapaciteit beschikbaar.',
    href: '/vastgoed',
    icon: Building2
  },
  {
    title: 'Projectontwikkeling zon & wind',
    description: 'Projecten die vertragen door ontbrekende netaansluiting of onzeker transportrecht.',
    href: '/projectontwikkeling',
    icon: Sun
  },
  {
    title: 'Industrie & grootverbruikers',
    description: 'Productieprocessen die stilvallen zonder slimme sturing en flexibele netstrategie.',
    href: '/industrie',
    icon: Factory
  }
];

const kennisbank = [
  {
    title: 'Cable pooling',
    description: 'Samen slim netcapaciteit benutten binnen één infrastructuur.',
    href: '/kennisbank/cable-pooling',
    icon: Cable
  },
  {
    title: 'Transportrechten',
    description: 'Inzicht in non-firm, TDTR en contractvormen die ruimte creëren.',
    href: '/kennisbank/transportrechten',
    icon: Scale
  },
  {
    title: 'Zelfaanleg',
    description: 'Wat kan technisch en juridisch als je niet wilt wachten op reguliere uitbreiding.',
    href: '/kennisbank/zelfaanleg',
    icon: Wrench
  },
  {
    title: 'Energiewet 2026',
    description: 'Nieuwe regels en kansen voor congestiemanagement en flexibele netinzet.',
    href: '/kennisbank/energiewet-2026',
    icon: BookOpen
  },
  {
    title: 'Energiehubs',
    description: 'Gedeelde opwek, opslag en verbruik op locatie — netcongestie omzeilen via intern net.',
    href: '/kennisbank/energiehubs',
    icon: Network
  },
];

const netbeheerders = [
  {
    title: 'Netcongestie bij Enexis',
    description: 'Capaciteitskaart, Flexmarkt, non-firm contracten en GTO\'s. Wat werkt er en hoe doorloop je het proces?',
    href: '/netcongestie/enexis',
    werkgebied: 'Twente · Overijssel · Noord- en Oost-NL',
  },
  {
    title: 'Netcongestie bij Coteq',
    description: 'Regionaal netbeheerder in Overijssel (Hardenberg, Ommen, Coevorden). Zelfde instrumenten als Enexis, directere aanspreekbaarheid.',
    href: '/netcongestie/coteq',
    werkgebied: 'Hardenberg · Ommen · Coevorden',
  },
  {
    title: 'Netcongestie bij Alliander / Liander',
    description: 'FlexPower, non-firm en TDTR-contracten. Hoe werkt het proces bij Liander en welke routes zijn het meest effectief?',
    href: '/netcongestie/alliander',
    werkgebied: 'Noord-Holland · Gelderland · Friesland',
  },
];

export default function NetcongestiePage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={Cable}
        label="Netcongestie"
        title="Van wachtrij naar"
        titleHighlight="werkbare capaciteit."
        description="We combineren strategie, techniek en uitvoering om netcongestie concreet op te lossen voor vastgoed, industrie en energieprojecten."
        ctaText="Bekijk voor wie"
        ctaHref="#voor-wie"
        backgroundImage="/images/capaxx-energy-zelf-kabel-leggen16c.webp"
        showScrollIndicator={false}
        size="compact"
      />

      <section id="voor-wie" className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Voor wie netcongestie <span className="text-primary italic">direct impact</span> heeft
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {voorWie.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:shadow-xl transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 italic leading-relaxed mb-6">{item.description}</p>
                    <span className="inline-flex items-center font-bold text-secondary group-hover:text-primary transition-colors">
                      Bekijk aanpak <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Kennisbank voor <span className="text-primary italic">snelle besluiten</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Praktische uitleg van regels, contractvormen en opties om eerder capaciteit vrij te spelen.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {kennisbank.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-5 shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 italic leading-relaxed mb-5">{item.description}</p>
                    <span className="inline-flex items-center font-bold text-secondary group-hover:text-primary transition-colors">
                      Lees meer <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Netbeheerders */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Per <span className="text-primary italic">netbeheerder</span> verschilt het
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Enexis, Coteq en Liander hanteren elk hun eigen processen, programma's en prioriteiten. Weet wat bij jouw netbeheerder werkt.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {netbeheerders.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.08}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3 bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {item.werkgebied}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-slate-500 italic leading-relaxed mb-6 flex-grow">{item.description}</p>
                    <span className="inline-flex items-center font-bold text-secondary group-hover:text-primary transition-colors">
                      Bekijk routes <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-10 leading-tight">
              Aan de slag met een <span className="italic text-primary">netcongestie quickscan</span>?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              In korte tijd duidelijkheid over je knelpunten, opties en de snelste route naar uitvoerbare capaciteit.
            </p>
            <Link
              href="/contact?type=quickscan"
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Plan quickscan <Zap className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
