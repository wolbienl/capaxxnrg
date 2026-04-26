'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Lock,
  KeyRound,
  Smartphone,
  Clock,
  FileSearch,
  ShieldCheck,
  Users,
  Layers,
  CheckCircle2,
  Network,
  Cpu,
} from 'lucide-react'
import Breadcrumb from '@/components/Breadcrumb'
import FadeIn from '@/components/FadeIn'

const benefits = [
  {
    title: 'NFC, codes of mobiele toegang',
    desc: 'Pas, sleutelhanger, code of smartphone. Wat past bij de gebruiker en het risico.',
    icon: Smartphone,
  },
  {
    title: 'Tijdsgebonden toegang',
    desc: 'Eénmalige codes voor leveranciers, recurring tijdslots voor schoonmaak en onderhoud.',
    icon: Clock,
  },
  {
    title: 'Multi-locatie en multi-tenant',
    desc: 'Eén beheeromgeving voor alle panden of huurders. Centrale rechtenstructuur.',
    icon: Users,
  },
  {
    title: 'AVG-proof logging',
    desc: 'Toegangsregistratie die voldoet aan AVG-bewaartermijnen, met access-control voor de logs zelf.',
    icon: FileSearch,
  },
]

const sectoren = [
  {
    title: 'Kantoor',
    desc: 'Receptie-onbemand, multi-floor zonering, gasttoegang via QR.',
  },
  {
    title: 'Multi-tenant',
    desc: 'Per huurder eigen rechten, gedeelde algemene ruimtes, automatische sluittijden.',
  },
  {
    title: 'Zorg',
    desc: 'Personeels- en patiëntzonering, calamiteitenrechten, integratie met inbraakalarm.',
  },
  {
    title: 'Onderwijs',
    desc: 'Lesroosterkoppeling, na-schools gebruik door verenigingen, inbraak-deactivering.',
  },
  {
    title: 'Retail',
    desc: 'Sluit/open-scenes met licht en alarm, leveranciers via servicedeur met code.',
  },
  {
    title: 'Logistiek',
    desc: 'Slagboomintegratie, chauffeurs-toegang, palletisering- en docking-zones.',
  },
]

export default function ToegangscontrolePage() {
  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Breadcrumb
            items={[
              { name: 'Home', url: '/' },
              { name: 'Wat wij doen', url: '/wat-wij-doen' },
              { name: 'Oplossingen', url: '/oplossingen' },
              {
                name: 'Gebouwautomatisering',
                url: '/oplossingen/gebouwautomatisering',
              },
              { name: 'Toegangscontrole' },
            ]}
            className="mb-4 -mx-4 md:-mx-6"
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center space-x-2 text-primary font-bold px-4 py-2 bg-orange-50 rounded-full border border-orange-100 mb-6">
                <Lock className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">
                  Toegangscontrole
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Toegangscontrole voor bedrijfspanden{' '}
                <span className="text-primary italic">en multi-tenant.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl text-balance">
                NFC, codes en tijdsgebonden toegang. Multi-locatie-logging die AVG-proof is, en directe{' '}
                <Link
                  href="/oplossingen/gebouwautomatisering"
                  className="text-secondary font-bold hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  integratie met het gebouwbeheersysteem
                </Link>{' '}
                en inbraakalarm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?type=kennismaking"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-secondary text-white font-black rounded-2xl text-base md:text-lg hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200"
                >
                  Plan kennismaking{' '}
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link
                  href="/oplossingen/gebouwautomatisering"
                  className="inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-5 bg-white text-secondary border border-slate-200 font-bold rounded-2xl text-base md:text-lg hover:border-primary/30 hover:bg-slate-50 transition-all"
                >
                  Terug naar overzicht
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/gebouwautomatisering/toegangscontrole-nfc.webp"
                  alt="NFC-toegangscontrole bij houten deur, code of pas voor bedrijfspand"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* H2 1 — Wat het oplevert */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Wat het oplevert
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Toegang als onderdeel van het systeem.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Een toegangscontrolesysteem hoeft geen eiland te zijn. Geïntegreerd in het GBS levert het verrassend veel exploitatievoordeel: minder energieverbruik, betere security en eenvoudiger huurdersbeheer.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-primary mb-6">
                    <b.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">
                    {b.title}
                  </h3>
                  <p className="text-slate-500 italic leading-relaxed text-sm">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* H2 2 — NFC, codes, tijdsgebonden */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="right">
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Methodiek
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-8 leading-tight tracking-tight">
                NFC, codes en{' '}
                <span className="text-primary italic">tijdsgebonden toegang.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                We kiezen het toegangsmiddel per gebruiker en zone. Een schoonmaker krijgt een tijdslot, een leverancier een eenmalige code, een medewerker een NFC-pas met geldigheid op werktijden.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    t: 'NFC / RFID-pas',
                    d: 'Voor vast personeel. Pas blijft buiten centrale database; alleen ID-hash gelogd.',
                    icon: KeyRound,
                  },
                  {
                    t: 'Code (PIN of QR)',
                    d: 'Tijdelijke gasten, leveranciers en service-bezoek. Eenmalig of tijdslot-gebonden.',
                    icon: Lock,
                  },
                  {
                    t: 'Smartphone-toegang',
                    d: 'Bluetooth of NFC via smartphone. Handig voor multi-locatie en flex-medewerkers.',
                    icon: Smartphone,
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary mb-1">{item.t}</p>
                      <p className="text-sm text-slate-500 italic leading-relaxed">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-slate-50 rounded-[3rem] p-10 md:p-12">
                <p className="text-xs font-black text-primary uppercase tracking-widest mb-6">
                  Voorbeeldscenario
                </p>
                <div className="space-y-6">
                  {[
                    {
                      tijd: '06:30',
                      tekst: 'Schoonmaak komt binnen via tijdslot-code. Lichten in zone B, HVAC blijft setback.',
                    },
                    {
                      tijd: '08:00',
                      tekst: 'Eerste medewerker scant NFC. Inbraakalarm uit, gangverlichting aan.',
                    },
                    {
                      tijd: '12:00',
                      tekst: 'Leverancier voert eenmalige code in. Alleen laad-en-losdeur opent.',
                    },
                    {
                      tijd: '18:30',
                      tekst: 'Laatste persoon vertrekt. Systeem schakelt licht/HVAC uit, alarm aan.',
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 pb-6 border-b border-slate-200 last:border-0 last:pb-0"
                    >
                      <div className="text-lg font-black text-primary shrink-0 w-16">
                        {step.tijd}
                      </div>
                      <p className="text-secondary leading-relaxed">{step.tekst}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* H2 3 — Multi-tenant en logging */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(240,106,0,0.12),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <Users className="w-4 h-4" />
              <span>Multi-tenant & AVG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              Multi-locatie en logging,{' '}
              <span className="text-primary italic">AVG-proof.</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-3xl">
              Voor verhuurders en multi-tenant-eigenaren is het essentieel dat toegangsdata niet door elkaar lopen. Wij zetten rollen, scopes en bewaartermijnen vooraf op, zodat je later niet hoeft op te schonen.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: 'Per-tenant scoping',
                  d: 'Huurders zien alleen hun eigen ruimtes en logs. Beheerder ziet het geheel.',
                },
                {
                  t: 'Bewaartermijnen vanaf het ontwerp',
                  d: 'Logs ouder dan de ingestelde termijn worden automatisch geanonimiseerd.',
                },
                {
                  t: 'Centrale rechtenstructuur',
                  d: 'Eén medewerker over meerdere locaties zonder dubbele inschrijving.',
                },
                {
                  t: 'Calamiteitenmodus',
                  d: 'Bij brand- of ontruimingsalarm vergrendelingen automatisch openen.',
                },
                {
                  t: 'Cloud of on-prem',
                  d: 'Keuze per project. On-prem voor IT-security-gevoelige sectoren.',
                },
                {
                  t: 'Audit-trail export',
                  d: 'CSV/PDF voor verzekeraar of compliance-onderzoek.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="font-bold text-white mb-2">{item.t}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 4 — Integratie met inbraakalarm en GBS */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
                Integratie
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
                Inbraakalarm en GBS,{' '}
                <span className="text-primary italic">één gebaar.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                Toegang, inbraak en gebouwautomatisering horen technisch bij elkaar. Werken ze los, dan krijg je dubbel werk en menselijke fouten. Geïntegreerd krijg je een gebouw dat zichzelf logisch gedraagt.
              </p>
            </FadeIn>

            <div className="space-y-4">
              {[
                {
                  t: 'NFC-pas activeert ook het inbraakalarm',
                  d: 'Eerste medewerker schakelt het alarm uit met dezelfde pas. Laatste medewerker schakelt het in. Geen aparte codes meer.',
                },
                {
                  t: 'Toegangsgebeurtenis triggert klimaat en licht',
                  d: 'Buiten kantooruren komt iemand binnen. HVAC en verlichting komen alleen in die zone aan, niet in het hele pand.',
                },
                {
                  t: 'Calamiteitenkoppeling met brandmeldinstallatie',
                  d: 'Bij brandalarm openen alle vluchtdeuren automatisch. Logging blijft intact voor naonderzoek.',
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-2 tracking-tight">
                        {item.t}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* H2 5 — Sectoren */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Sectoren
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight">
              Per sector een eigen invulling.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectoren.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-slate-500 italic leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="max-w-3xl mb-12">
            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">
              Combineer met
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">
              De andere lagen van het systeem.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Klimaat',
                desc: 'HVAC reageert op aanwezigheid via toegangsgebeurtenissen.',
                href: '/oplossingen/gebouwautomatisering/klimaat-en-luchtbehandeling',
                image: '/images/gebouwautomatisering/klimaat-warmtepomp-cascade.webp',
                icon: Cpu,
              },
              {
                title: 'Regeltechniek',
                desc: 'Verlichting en zonwering volgen toegang en bezetting.',
                href: '/oplossingen/gebouwautomatisering/regeltechniek-en-comfort',
                image: '/images/gebouwautomatisering/regeltechniek-paneel.webp',
                icon: Network,
              },
              {
                title: 'EMS',
                desc: 'Energie-optimalisatie schaalt naar bezetting en aanwezigheid.',
                href: '/oplossingen/ems',
                image: '/images/storage-render.jpg',
                icon: Layers,
              },
            ].map((sub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={sub.href} className="group block h-full">
                  <article className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-primary/20 hover:shadow-2xl transition-all h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                        <sub.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-secondary mb-3 tracking-tight group-hover:text-primary transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-slate-500 italic leading-relaxed mb-6 flex-1">
                        {sub.desc}
                      </p>
                      <span className="inline-flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
                        Bekijken{' '}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#f06a00_0%,transparent_50%)]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Toegang herinrichten of nieuw{' '}
              <span className="text-primary italic">aanleggen?</span>
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We brengen wensen, sectorisatie en huurdersstructuur in kaart en stellen een passend systeem voor, met directe koppeling aan jouw GBS.
            </p>
            <Link
              href="/contact?type=kennismaking"
              className="inline-flex items-center px-8 py-5 bg-primary text-white font-black rounded-2xl text-lg hover:bg-accent transition-all shadow-2xl shadow-primary/20"
            >
              Plan kennismaking{' '}
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
