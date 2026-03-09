import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Broodkruimelpad"
      className={`w-full px-6 md:px-12 lg:px-20 pt-6 pb-2 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-slate-300 shrink-0" aria-hidden="true" />
              )}
              {isLast || !item.url ? (
                <span
                  className="text-slate-600 font-medium"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-secondary transition-colors duration-150"
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
