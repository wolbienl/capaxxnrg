'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { CaseFrontmatter } from '@/lib/cases-types'
import { statusLabels, statusColors } from '@/lib/cases-types'

interface CaseCardProps {
  frontmatter: CaseFrontmatter
  featured?: boolean
}

export default function CaseCard({ frontmatter, featured = false }: CaseCardProps) {
  const {
    title,
    subtitle,
    slug,
    status,
    image,
    location,
    tags,
    summary,
  } = frontmatter

  if (featured) {
    return (
      <Link href={`/cases/${slug}`} className="group block">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-secondary">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px] overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary/80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent lg:hidden" />
            </div>

            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16 -mt-20 lg:mt-0">
              <div className="flex items-center gap-3 mb-6">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${statusColors[status]}`}>
                  {statusLabels[status]}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                  <MapPin className="w-3 h-3" />
                  {location}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tight">
                {title}
              </h3>
              <p className="text-lg md:text-xl text-slate-300 mb-4 font-medium">
                {subtitle}
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed max-w-lg">
                {summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center text-primary font-bold text-lg group-hover:gap-3 gap-2 transition-all">
                Bekijk project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/cases/${slug}`} className="group block h-full">
      <div className="h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white ${statusColors[status]}`}>
              {statusLabels[status]}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
            <MapPin className="w-3 h-3" />
            {location}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2 tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-3">
            {summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center text-secondary font-bold group-hover:text-primary transition-colors">
            Bekijk project <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
