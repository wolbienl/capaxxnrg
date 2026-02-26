import { Briefcase, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import CaseCard from '@/components/cases/CaseCard'
import { getAllCases, getFeaturedCases } from '@/lib/cases'

export default function CasesPage() {
  const allCases = getAllCases()
  const featured = getFeaturedCases()
  const regular = allCases.filter((c) => !c.frontmatter.featured)

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-primary/[0.06] rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 text-primary font-bold mb-8 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <Briefcase className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Cases</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-secondary leading-[1.05] tracking-tight mb-6 md:mb-8">
                Onze <span className="text-primary italic">projecten.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl text-balance">
                Van energiescan tot realisatie. Ontdek hoe wij commercieel vastgoed verduurzamen met geïntegreerde energie-oplossingen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured cases */}
      {featured.length > 0 && (
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-8">
              {featured.map((c) => (
                <FadeIn key={c.frontmatter.slug}>
                  <CaseCard frontmatter={c.frontmatter} featured />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular cases grid */}
      {regular.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-black text-secondary mb-10 tracking-tight">
                Alle projecten
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {regular.map((c, i) => (
                <FadeIn key={c.frontmatter.slug} delay={i * 0.1}>
                  <CaseCard frontmatter={c.frontmatter} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white text-center rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              Benieuwd wat wij voor <span className="text-primary italic">jouw</span> pand kunnen betekenen?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto">
              We vertellen je graag persoonlijk over onze projecten en rekenen direct jouw scenario door.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
            >
              Plan een kennismaking <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
