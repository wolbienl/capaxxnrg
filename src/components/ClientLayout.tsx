'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Preloader from './Preloader'
import PageTransition from './PageTransition'
import { TransitionProvider } from './TransitionContext'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showPreloader, setShowPreloader] = useState(true)
  const [hasShownPreloader, setHasShownPreloader] = useState(false)
  const [contentReady, setContentReady] = useState(false)
  const pathname = usePathname()

  // Only show preloader on homepage and only on first visit
  const isHomepage = pathname === '/'
  const shouldShowPreloader = isHomepage && showPreloader && !hasShownPreloader

  useEffect(() => {
    // Check if preloader was already shown in this session
    const preloaderShown = sessionStorage.getItem('preloaderShown')
    if (preloaderShown) {
      setShowPreloader(false)
      setHasShownPreloader(true)
      setContentReady(true)
    }
  }, [])

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
    setHasShownPreloader(true)
    setContentReady(true)
    sessionStorage.setItem('preloaderShown', 'true')
  }

  return (
    <TransitionProvider>
      <AnimatePresence mode="wait">
        {shouldShowPreloader && (
          <Preloader onComplete={handlePreloaderComplete} duration={2500} />
        )}
      </AnimatePresence>
      
      {/* Page transition for navigation between pages */}
      <PageTransition />
      
      <div
        style={{
          opacity: contentReady || !shouldShowPreloader ? 1 : 0,
          transition: 'opacity 0.6s ease-out',
        }}
      >
        {children}
      </div>
    </TransitionProvider>
  )
}
