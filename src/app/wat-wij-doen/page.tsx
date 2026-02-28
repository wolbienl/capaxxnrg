'use client'

import Link from 'next/link';
import {
  ArrowRight,
  Sun,
  Battery,
  EvCharger,
  Car,
  BarChart3,
  ClipboardCheck,
  Award,
  Globe,
  TrendingUp
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import SolutionHero from '@/components/SolutionHero';

const oplossingen = [
  { title: 'Zonnepanelen', href: '/oplossingen/zonnepanelen', icon: Sun },
  { title: 'Energieopslag', href: '/oplossingen/energieopslag', icon: Battery },
  { title: 'Laadinfra', href: '/oplossingen/laadinfra', icon: EvCharger },
  { title: 'Solar Carports', href: '/oplossingen/solar-carports', icon: Car },
  { title: 'EMS', href: '/oplossingen/ems', icon: BarChart3 }
];

const advies = [
  { title: 'ESG', href: '/advies/esg', icon: ClipboardCheck },
  { title: 'BREEAM', href: '/advies/breeam', icon: Award },
  { title: 'Paris Proof', href: '/advies/paris-proof', icon: Globe },
  { title: 'Energielabels', href: '/advies/energielabels', icon: TrendingUp }
];

export default function WatWijDoenPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={BarChart3}
        label="Wat wij doen"
        title="Van strategie naar"
        titleHighlight="werkende energie-assets."
        description="We combineren oplossingen en advies tot een integraal energiesysteem dat presteert op kosten, capaciteit en compliance."
        ctaText="Bekijk focusgebieden"
        ctaHref="#focusgebieden"
        backgroundImage="/images/capaxx-energy-energiegemeenschap.png"
        showScrollIndicator={false}
        size="compact"
      />

      <section id="focusgebieden" className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            <FadeIn>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 h-full min-h-[640px] flex flex-col">
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 tracking-tight">Oplossingen</h2>
                <p className="text-slate-500 italic mb-8 leading-relaxed">
                  Technische bouwstenen die samenwerken: opwek, opslag, laden en slimme sturing.
                </p>
                <div className="space-y-3 mb-8">
                  {oplossingen.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors"
                    >
                      <span className="inline-flex items-center text-secondary font-bold">
                        <item.icon className="w-5 h-5 mr-3 text-primary" />
                        {item.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/oplossingen"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all mt-auto"
                >
                  Bekijk alle oplossingen <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 h-full min-h-[640px] flex flex-col">
                <h2 className="text-3xl md:text-4xl font-black text-secondary mb-4 tracking-tight">Advies</h2>
                <p className="text-slate-500 italic mb-8 leading-relaxed">
                  Datagedreven trajecten voor rapportage, certificering en toekomstbestendige vastgoedprestaties.
                </p>
                <div className="space-y-3 mb-8">
                  {advies.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors"
                    >
                      <span className="inline-flex items-center text-secondary font-bold">
                        <item.icon className="w-5 h-5 mr-3 text-primary" />
                        {item.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/advies"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-accent transition-all mt-auto"
                >
                  Bekijk alle advies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 md:mb-8 tracking-tight">
              Een aanpak die <span className="text-primary italic">blijvend resultaat</span> geeft
            </h2>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 md:mb-12">
              We starten met data, bepalen samen de businesscase en realiseren vervolgens de juiste combinatie van assets en advies. Daarna blijven we monitoren en bijsturen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link
                href="/contact?type=energiescan"
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-black rounded-2xl text-base md:text-lg hover:bg-accent transition-all shadow-xl shadow-black/10"
              >
                Start met energiescan <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/netcongestie"
                className="inline-flex items-center px-8 py-4 bg-white text-secondary border border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:bg-slate-50 transition-all"
              >
                Bekijk Netcongestie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
