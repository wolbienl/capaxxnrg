'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  Battery, 
  Sun, 
  Car,
  MoveRight,
  ShieldCheck,
  TrendingUp,
  Globe,
  EvCharger
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import HomeDashboard from '@/components/HomeDashboard'

const solutions = [
  {
    title: 'Zonnepanelen',
    description: 'Maximale opbrengst op dak en terrein. Ontwerp, realisatie en monitoring.',
    icon: Sun,
    href: '/oplossingen/zonnepanelen',
    color: 'bg-orange-500'
  },
  {
    title: 'Energieopslag',
    description: 'Peak shaving, zelfverbruik verhogen, flexibiliteit terug in jouw aansluiting.',
    icon: Battery,
    href: '/oplossingen/energieopslag',
    color: 'bg-blue-600'
  },
  {
    title: 'Laadinfra',
    description: 'Slim laden met load balancing, klaar voor groei.',
    icon: EvCharger,
    href: '/oplossingen/laadinfra',
    color: 'bg-emerald-500'
  },
  {
    title: 'Solar carports',
    description: 'Dubbel gebruik van terrein, opwek en laden op één plek.',
    icon: Car,
    href: '/oplossingen/solar-carports',
    color: 'bg-indigo-600'
  },
  {
    title: 'Energy Management',
    description: 'Realtime inzicht en automatische sturing op pieken en verbruik.',
    icon: BarChart3,
    href: '/oplossingen/ems',
    color: 'bg-slate-800'
  }
]

const steps = [
  {
    title: 'Energiescan',
    description: 'Data-gedreven inzicht in opwek, verbruik en netruimte.'
  },
  {
    title: 'Businesscase',
    description: 'Scenario’s met heldere ROI en risico-analyses.'
  },
  {
    title: 'Realisatie',
    description: 'Engineering en uitvoering met één aanspreekpunt.'
  },
  {
    title: 'Optimalisatie',
    description: 'Continu bijsturen voor maximaal rendement.'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100vh] lg:min-h-[95vh] flex items-center pt-24 overflow-hidden bg-transparent lg:bg-white -mt-20">
        {/* Mobile: Fullscreen Video Background - extends to top of viewport */}
        <div className="lg:hidden absolute -top-20 left-0 right-0 bottom-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Desktop: Background Decorative Elements - extends to top of viewport */}
        <div className="hidden lg:block absolute -top-20 left-0 right-0 bottom-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] bg-primary rounded-full blur-[120px]" 
          />
          <div className="absolute -top-20 left-0 right-0 bottom-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="z-10"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white lg:text-secondary leading-[1.05] tracking-tight mb-6 md:mb-10 text-balance">
                Maak energie een <span className="text-primary italic">asset</span> voor jouw vastgoed.
              </h1>
              
              <p className="text-base md:text-lg xl:text-xl text-white/80 lg:text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-xl text-balance">
                Opwek, opslag, laden en sturing, zodat jouw locatie kan doorgroeien, ook met netcongestie.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative px-6 py-3.5 md:px-8 md:py-4 xl:px-10 xl:py-5 bg-primary lg:bg-secondary text-white font-black rounded-2xl text-base md:text-lg hover:bg-accent lg:hover:bg-slate-800 transition-all flex items-center justify-center overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Plan een kennismaking <MoveRight className="w-5 h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/over-ons"
                  className="px-6 py-3.5 md:px-8 md:py-4 xl:px-10 xl:py-5 bg-white/10 lg:bg-white text-white lg:text-secondary border border-white/30 lg:border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:bg-white/20 lg:hover:border-primary/30 lg:hover:bg-slate-50 transition-all text-center backdrop-blur-sm lg:backdrop-blur-none"
                >
                  Onze aanpak
                </Link>
              </div>

              {/* Mobile: Trust indicators */}
              <div className="lg:hidden flex items-center gap-6 mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  <span className="font-medium">Data-gedreven</span>
                </div>
                <div className="flex items-center text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                  <span className="font-medium">Twente</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop: Video */}
            <div className="relative lg:block hidden w-full h-full min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center xl:justify-end"
              >
                <div className="relative w-full max-w-[700px] xl:max-w-none aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200/50">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DASHBOARD SECTION --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-900 overflow-hidden relative">
        {/* Animated background with particles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(240,106,0,0.1),transparent_60%)]" 
          />
          
          {/* Floating orbs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -30, 0],
                x: [0, 20, 0],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 2
              }}
              className="absolute w-64 h-64 rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(240,106,0,0.15)' : 'rgba(59,130,246,0.15)'}, transparent)`,
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 xl:gap-24 items-center">
            <FadeIn direction="right">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold mb-6 tracking-widest uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Realtime Inzicht
                </div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-[1.1]"
              >
                Energie die <span className="text-primary italic">meetelt</span>,<br />
                <span className="text-primary italic">data</span> die stuurt.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-slate-400 mb-8 leading-relaxed"
              >
                Geen black box, maar volledige transparantie. Zie in real-time hoe jouw opwek, 
                verbruik en opslag elkaar versterken. Onze dashboards geven jou de regie.
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { icon: BarChart3, text: 'Live monitoring van alle energie-assets', color: 'from-blue-500 to-cyan-500' },
                  { icon: Zap, text: 'Automatische optimalisatie van piekverbruik', color: 'from-yellow-500 to-orange-500' },
                  { icon: TrendingUp, text: 'Directe ROI-rapportages per kwartaal', color: 'from-green-500 to-emerald-500' },
                  { icon: ShieldCheck, text: 'Alarmeringen en voorspellend onderhoud', color: 'from-purple-500 to-pink-500' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start space-x-4 group cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      <item.icon className="w-5 h-5 relative z-10" />
                    </motion.div>
                    <div className="pt-3">
                      <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{item.text}</p>
                      <motion.div 
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-1"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12"
              >
                <Link
                  href="/oplossingen/ems"
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-accent transition-all shadow-xl shadow-primary/20 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Ontdek EMS <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>
              </motion.div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2} className="flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, rotateY: -2 }}
                className="relative"
              >
                <HomeDashboard />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 blur-3xl opacity-30 -z-10 scale-110" />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- THE "WHY" SECTION --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-white text-secondary overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[120px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]" 
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 lg:mb-24">
            <FadeIn>
              <div className="inline-block px-4 py-1 rounded-lg bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-6 tracking-widest uppercase">
                De Uitdaging
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.05] tracking-tight">
                Energie is geen kostenpost meer. <br />
                <span className="text-primary italic">Het is een asset.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-500 leading-relaxed">
                Commercieel vastgoed krijgt te maken met hogere kosten en een net dat niet meebeweegt. 
                Dan wil je geen losse installaties, maar regie.
              </p>
            </FadeIn>
          </div>

          {/* Split Cards with Image */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-16">
            {/* Challenge Cards */}
            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 content-start">
              {[
                { 
                  title: 'Netcongestie bottlenecks',
                  description: 'Verzwaard aansluiting? Vaak niet mogelijk. Batterij-opslag lost dat op.',
                  delay: 0 
                },
                { 
                  title: 'Onzichtbare energie-lekken',
                  description: 'Zonder monitoring weet je niet waar je verliest. Data maakt dit zichtbaar.',
                  delay: 0.1 
                },
                { 
                  title: 'ESG & BREEAM eisen',
                  description: 'Certificering vraagt meetbare duurzaamheid. Wij regelen de rapportage.',
                  delay: 0.2 
                },
                { 
                  title: 'Onbenutte opwekwaarde',
                  description: 'Zonne-energie die je niet direct gebruikt, verdient niks. Opslag wel.',
                  delay: 0.3 
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={item.delay}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group h-full"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            {/* Hero Image */}
            <FadeIn delay={0.2} className="relative h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative group h-full"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white h-full">
                  <Image
                    src="/images/storage-render.jpg"
                    alt="Premium Energy Storage Render"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  
                  {/* Floating stats overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-2xl"
                  >
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-bold text-center">
                      Scenario
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { value: '1 MWh', label: 'Opslag' },
                        { value: '40%', label: 'Besparing' },
                        { value: '24/7', label: 'Monitoring' }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                        >
                          <div className="text-2xl font-black text-primary">{stat.value}</div>
                          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Decorative floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-2xl opacity-20 blur-xl"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS GRID --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <FadeIn className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6 tracking-tight">
                Bouwstenen van een <br /><span className="text-primary italic">duurzaam</span> systeem.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-500 max-w-sm mb-2">
                Wij leveren de techniek én zorgen dat ze samen sturen op jouw zakelijke doelen.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={solution.href} className="group block h-full">
                  <div className="relative bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8">
                      <solution.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-4 tracking-tight">{solution.title}</h3>
                    <p className="text-slate-500 mb-10 flex-grow leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                      Meer info <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
            
            {/* Custom CTA Card */}
            <FadeIn delay={0.5}>
              <div className="relative bg-primary p-10 rounded-[2.5rem] flex flex-col justify-between h-full group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-6 leading-tight">
                    Klaar voor <br />regie?
                  </h3>
                  <p className="text-white/80 font-medium mb-8">
                    Ontdek hoe we jouw assets slim kunnen koppelen.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="relative z-10 w-full py-4 bg-white text-primary font-black rounded-2xl text-center hover:bg-slate-50 transition-all"
                >
                  Start Scan
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- WERKWIZE (HORIZONTAL) --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20 lg:mb-24">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6">Resultaat in vier stappen</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
            {/* Background Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-200 z-0" />
            
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex items-center justify-center mb-8 border border-slate-100 group hover:border-primary transition-colors">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto italic">
                  {step.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-secondary rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] p-8 md:p-16 lg:p-24 text-center overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
            </div>
            
            <FadeIn className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-10 leading-tight">
                Geen dikke praat, <br /><span className="text-primary italic">wel resultaat.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-14 leading-relaxed">
                Nieuwsgierig naar het potentieel van jouw pand? We rekenen het direct door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 md:px-12 md:py-5 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-2xl shadow-primary/20"
                >
                  Vraag energiescan aan
                </Link>
                <Link
                  href="/cases"
                  className="px-8 py-4 md:px-12 md:py-5 bg-white/5 text-white border border-white/10 font-bold rounded-2xl text-base md:text-xl hover:bg-white/10 transition-all"
                >
                  Bekijk cases
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
