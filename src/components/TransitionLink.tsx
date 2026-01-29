'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useTransition } from './TransitionContext'
import { ComponentProps, MouseEvent } from 'react'

type TransitionLinkProps = ComponentProps<typeof Link>

export default function TransitionLink({ href, children, onClick, ...props }: TransitionLinkProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { startTransition } = useTransition()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    onClick?.(e)
    
    // Don't intercept if modifier keys are pressed (open in new tab, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return
    }

    // Don't intercept external links
    const hrefString = typeof href === 'string' ? href : href.pathname || ''
    if (hrefString.startsWith('http') || hrefString.startsWith('mailto:') || hrefString.startsWith('tel:')) {
      return
    }

    // Don't transition if we're already on this page (without query params)
    const hrefPath = hrefString.split('?')[0]
    if (pathname === hrefPath) {
      return
    }

    e.preventDefault()
    
    // Start transition, then navigate when overlay is covering
    startTransition(() => {
      router.push(hrefString)
    })
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
