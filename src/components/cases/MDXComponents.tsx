import { ReactNode } from 'react'
import Image from 'next/image'
import { Lightbulb, Quote as QuoteIcon } from 'lucide-react'

interface HighlightProps {
  children: ReactNode
}

export function Highlight({ children }: HighlightProps) {
  return (
    <div className="relative my-10 rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50/50 p-6 md:p-8">
      <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25">
        <Lightbulb className="h-4 w-4" />
      </div>
      <div className="text-base leading-relaxed text-slate-700 md:text-lg [&>p]:m-0">
        {children}
      </div>
    </div>
  )
}

interface StatItem {
  label: string
  value: string
}

interface StatsProps {
  items: StatItem[]
}

export function Stats({ items }: StatsProps) {
  return (
    <div className="my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="mb-1 text-2xl font-black tracking-tight text-secondary md:text-3xl">
            {item.value}
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}

interface QuoteProps {
  children: ReactNode
  author?: string
}

export function Quote({ children, author }: QuoteProps) {
  return (
    <blockquote className="relative my-10 rounded-2xl border border-slate-100 bg-slate-50 p-8 md:p-10">
      <QuoteIcon className="absolute right-6 top-6 h-12 w-12 text-primary/10" />
      <div className="relative z-10 text-lg font-medium italic leading-relaxed text-secondary md:text-xl [&>p]:m-0">
        {children}
      </div>
      {author && (
        <footer className="mt-4 text-sm font-bold text-primary">
          — {author}
        </footer>
      )}
    </blockquote>
  )
}

interface InfoCardProps {
  title: string
  children: ReactNode
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="my-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
      <h3 className="mb-3 text-lg font-bold text-secondary">{title}</h3>
      <div className="text-slate-600 leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  )
}

interface FigureImage {
  src: string
  alt: string
}

interface FigureProps {
  src?: string
  alt?: string
  caption?: string
  images?: FigureImage[]
}

const gridColsByCount: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-2',
}

export function Figure({ src, alt, caption, images }: FigureProps) {
  const items: FigureImage[] =
    images && images.length > 0
      ? images
      : src
        ? [{ src, alt: alt ?? '' }]
        : []

  if (items.length === 0) return null

  const isSingle = items.length === 1

  return (
    <figure className="my-10">
      {isSingle ? (
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
          <Image
            src={items[0].src}
            alt={items[0].alt}
            width={1600}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>
      ) : (
        <div
          className={`grid grid-cols-1 gap-3 md:gap-4 ${
            gridColsByCount[items.length] ?? 'sm:grid-cols-2'
          }`}
        >
          {items.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export function getMDXComponents() {
  return {
    Highlight,
    Stats,
    Quote,
    InfoCard,
    Figure,
    h2: ({ children }: { children: ReactNode }) => (
      <h2 className="mb-4 mt-12 text-2xl font-black tracking-tight text-secondary first:mt-0 md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: ReactNode }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold text-secondary md:text-2xl">
        {children}
      </h3>
    ),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-5 text-base leading-relaxed text-slate-600 md:text-lg">
        {children}
      </p>
    ),
    ul: ({ children }: { children: ReactNode }) => (
      <ul className="mb-6 ml-1 space-y-3 text-base text-slate-600 md:text-lg">
        {children}
      </ul>
    ),
    ol: ({ children }: { children: ReactNode }) => (
      <ol className="mb-6 ml-1 list-decimal space-y-3 pl-5 text-base text-slate-600 md:text-lg">
        {children}
      </ol>
    ),
    li: ({ children }: { children: ReactNode }) => (
      <li className="relative pl-6 before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary">
        {children}
      </li>
    ),
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="font-bold text-secondary">{children}</strong>
    ),
    a: ({ href, children }: { href?: string; children: ReactNode }) => (
      <a
        href={href}
        className="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition-colors hover:decoration-primary"
      >
        {children}
      </a>
    ),
  }
}
