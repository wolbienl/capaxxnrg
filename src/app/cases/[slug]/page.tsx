import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Building2,
  Zap,
  CalendarDays,
  Tag,
} from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { getMDXComponents, Stats } from '@/components/cases/MDXComponents'
import {
  getCaseBySlug,
  getAllSlugs,
  statusLabels,
  statusColors,
} from '@/lib/cases'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params
  const caseEntry = getCaseBySlug(slug)

  if (!caseEntry) {
    notFound()
  }

  const { frontmatter, content } = caseEntry

  const meta = [
    { icon: Building2, label: 'Opdrachtgever', value: frontmatter.client },
    ...(frontmatter.clientRole
      ? [{ icon: Building2, label: 'Rol', value: frontmatter.clientRole }]
      : []),
    { icon: Zap, label: 'Netbeheerder', value: frontmatter.netbeheerder },
    { icon: MapPin, label: 'Locatie', value: frontmatter.location },
    {
      icon: CalendarDays,
      label: 'Gestart',
      value: new Date(frontmatter.date).toLocaleDateString('nl-NL', {
        month: 'long',
        year: 'numeric',
      }),
    },
  ]

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* Hero */}
      <section className="relative pt-20 md:pt-20 bg-secondary overflow-hidden">
        <div className="relative h-[40vh] md:h-[55vh] lg:h-[65vh]">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/20" />

          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 md:px-6 pb-10 md:pb-16">
              <FadeIn>
                <Link
                  href="/cases"
                  className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Terug naar cases
                </Link>

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${statusColors[frontmatter.status]}`}
                  >
                    {statusLabels[frontmatter.status]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-slate-300">
                    <MapPin className="w-3.5 h-3.5" />
                    {frontmatter.location}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-3">
                  {frontmatter.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-medium max-w-2xl">
                  {frontmatter.subtitle}
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
            {/* MDX content */}
            <FadeIn>
              <article className="max-w-none">
                {frontmatter.stats && frontmatter.stats.length > 0 && (
                  <Stats items={frontmatter.stats} />
                )}
                <MDXRemote
                  source={content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                    },
                  }}
                  components={getMDXComponents()}
                />
              </article>
            </FadeIn>

            {/* Sidebar */}
            <div className="lg:order-last">
              <FadeIn delay={0.2}>
                <div className="sticky top-28">
                  {/* Project info card */}
                  <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 md:p-8 mb-6">
                    <h3 className="text-lg font-black text-secondary mb-6 tracking-tight">
                      Projectinformatie
                    </h3>
                    <div className="space-y-5">
                      {meta.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-100 text-slate-400">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                              {item.label}
                            </div>
                            <div className="text-sm font-medium text-secondary">
                              {item.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 md:p-8 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-4 h-4 text-slate-400" />
                      <h3 className="text-sm font-bold text-secondary">
                        Tags
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {frontmatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA card */}
                  <div className="rounded-[2rem] bg-secondary p-6 md:p-8 text-white">
                    <h3 className="text-lg font-black mb-2">
                      Vergelijkbaar project?
                    </h3>
                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                      Wil je weten wat er op jouw terrein mogelijk is? We denken graag mee.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center w-full justify-center px-6 py-3 bg-primary text-white font-bold rounded-xl text-sm hover:bg-accent transition-all"
                    >
                      Neem contact op
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white text-center rounded-t-[2rem] md:rounded-t-[3rem] lg:rounded-t-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
              Benieuwd naar de{' '}
              <span className="text-primary italic">mogelijkheden?</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-2xl mx-auto">
              We vertellen je graag meer over dit project en rekenen direct jouw
              scenario door.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-black rounded-2xl text-base md:text-xl hover:bg-accent transition-all shadow-xl shadow-black/20"
              >
                Plan een kennismaking
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center px-8 py-4 md:px-12 md:py-6 text-slate-400 font-bold rounded-2xl text-base md:text-xl hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Alle cases
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
