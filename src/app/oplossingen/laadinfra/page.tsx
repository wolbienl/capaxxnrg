'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EvCharger, CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import SolutionHero from '@/components/SolutionHero'

const hyperchargers = [
  {
    model: 'Hypercharger HYC 50',
    description: 'Eerste 50 kW aan de muur monteerbare snellader op de markt.',
    features: [
      '50 kW laden op één voertuig of 2x 25 kW parallel',
      'Beste efficiëntie in zijn klasse: 97%',
      'Compact & muurmontage mogelijk'
    ],
    image: '/images/snelladers/hyc-50.jpg',
    power: '50kW'
  },
  {
    model: 'Hypercharger HYC 200',
    description: 'De standaard voor stedelijk snelladen en wagenparken.',
    features: [
      'Laadvermogen tot 200kW',
      'Compact formaat',
      'Gepersonaliseerde behuizing mogelijk'
    ],
    image: '/images/snelladers/hyc-200.webp',
    power: '200kW'
  },
  {
    model: 'Hypercharger HYC 400',
    description: 'Maximale prestaties voor logistieke hubs en tankstations.',
    features: [
      'Laadvermogen tot 400kW',
      'Maximaal schaalbaar',
      'Minimale laadtijd'
    ],
    image: '/images/snelladers/hyc-400.webp',
    power: '400kW'
  },
  {
    model: 'Hypercharger HYC 1000',
    description: 'De krachtigste snellader voor de toekomst van heavy-duty transport.',
    features: [
      'Laadvermogen tot 1000 kW (1MW)',
      'Tot 8 laadpunten parallel te gebruiken',
      'Flexibele opstelling met externe satellieten'
    ],
    image: '/images/snelladers/hyc-1000.jpg',
    power: '1MW'
  }
]

export default function LaadinfraPage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      <SolutionHero
        icon={EvCharger}
        title="Laadinfra"
        titleHighlight="zonder gedoe."
        description="Slim laden voor huurders en bezoekers, volledig geïntegreerd met je netcapaciteit. Anders wordt het een kostenpost."
        ctaText="Bespreek je laadplan"
        ctaHref="/contact"
        backgroundImage="/images/laadinfra-hero.jpg"
      />

      {/* Snelladers Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <FadeIn direction="right">
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-6">
                <Zap className="w-6 h-6 fill-primary" />
                <span className="uppercase tracking-[0.2em] text-sm">Heavy Duty & Logistics</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-secondary mb-8 tracking-tight leading-tight">
                Snelladen is <br /><span className="text-primary italic">een vak apart.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed italic">
                Locaties zoals logistieke hubs, tankstations of wagenparken stellen andere eisen dan een regulier laadpunt. 
                Hogere vermogens, strikte timing en complexe netcapaciteit vragen om regie.
              </p>
              <p className="text-lg text-slate-600 mb-12">
                Bij CAPAXX Energy zorgen we dat de techniek voor je werkt. Wij begeleiden het volledige traject: van netaansluiting en configuratie tot veilige inbedrijfstelling.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white rounded-xl border border-slate-200 font-bold text-secondary flex items-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> Alpitronic Partner
                </div>
                <div className="px-6 py-3 bg-white rounded-xl border border-slate-200 font-bold text-secondary flex items-center shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3" /> 50kW - 1MW
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" className="relative">
              <div className="aspect-square relative rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <Image
                  src="/images/snelladers/hyc-400.webp"
                  alt="Alpitronic Hypercharger HYC 400"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="text-xs font-black uppercase tracking-widest mb-2 text-primary">Onze Keuze</div>
                  <div className="text-3xl font-black">Alpitronic Hypercharger</div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {hyperchargers.map((charger, i) => (
              <FadeIn key={charger.model} delay={i * 0.1} direction="up">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all group flex flex-col md:flex-row gap-10 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6">
                    <span className="text-4xl font-black text-slate-50 group-hover:text-primary/5 transition-colors">{charger.power}</span>
                  </div>
                  
                  <div className="w-full md:w-1/3 aspect-[3/4] relative shrink-0">
                    <Image
                      src={charger.image}
                      alt={charger.model}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-grow space-y-6 pt-4">
                    <div>
                      <h3 className="text-2xl font-black text-secondary mb-2 tracking-tight group-hover:text-primary transition-colors">{charger.model}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed italic">{charger.description}</p>
                    </div>
                    
                    <ul className="space-y-3">
                      {charger.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm font-bold text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <FadeIn direction="right">
              <h2 className="text-4xl font-bold text-secondary mb-12 tracking-tight">Waar wij op sturen</h2>
              <ul className="space-y-10">
                {[
                  { title: 'Capaciteit', desc: 'Wat kan er nu technisch, wat moet er straks kunnen.' },
                  { title: 'Verdeling', desc: 'Wie betaalt, wie krijgt prioriteit, hoe voorkom je misbruik.' },
                  { title: 'Sturing', desc: 'Dynamic load balancing gekoppeld aan opwek en opslag.' },
                  { title: 'Beheer', desc: 'Realtime inzicht, facturatieopties en maximale uptime.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-primary shrink-0 mr-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-lg text-slate-500 italic leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 lg:sticky lg:top-32 shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-black text-secondary mb-10 tracking-tight">Wat wij leveren</h2>
              <ul className="space-y-4 mb-12">
                {[
                  'Technisch ontwerp & Plaatsingsplan',
                  'Vermogensverdeling & Groeipad',
                  'Integratie met EMS & Batterij',
                  'Oplevering & Beheerafspraken'
                ].map((item, i) => (
                  <li key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 font-bold text-secondary flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary mr-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full py-5 bg-primary text-white font-black rounded-2xl text-center inline-block hover:bg-accent transition-all shadow-xl shadow-orange-500/20"
              >
                Start jouw laadplan
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
