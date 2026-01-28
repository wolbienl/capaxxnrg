'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Preloader from './Preloader'

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
    <>
      <AnimatePresence mode="wait">
        {shouldShowPreloader && (
          <Preloader onComplete={handlePreloaderComplete} duration={2500} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={shouldShowPreloader ? { opacity: 0 } : { opacity: 1 }}
        animate={{ 
          opacity: contentReady || !shouldShowPreloader ? 1 : 0 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.4, 0, 0.2, 1],
          delay: contentReady && shouldShowPreloader ? 0 : 0
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
