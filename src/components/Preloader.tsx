'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete?: () => void
  duration?: number // Duration in ms
}

export default function Preloader({ onComplete, duration = 2500 }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      setProgress(newProgress)

      if (newProgress >= 100) {
        clearInterval(interval)
        setIsComplete(true)
        // Wait a bit before starting exit animation
        setTimeout(() => {
          setIsExiting(true)
        }, 600)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [duration])

  // Handle exit animation complete
  const handleExitComplete = () => {
    setIsVisible(false)
    onComplete?.()
  }

  if (!isVisible) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: 'blur(10px)'
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0, 0.2, 1] // Custom easing for smoother feel
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
            />
          </div>

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <Image
                src="/images/logo-light.svg"
                alt="CAPAXX ENERGY"
                width={200}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </motion.div>

            {/* Battery container */}
            <div className="relative">
              {/* Battery top (positive terminal) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-slate-700 rounded-t-md border-2 border-slate-600" />
              
              {/* Battery body */}
              <div className="relative w-24 h-44 rounded-xl border-4 border-slate-600 bg-slate-800/50 overflow-hidden backdrop-blur-sm">
                {/* Battery charge level */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary to-accent battery-charge"
                  style={{ height: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                >
                  {/* Animated bubbles */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="battery-bubble battery-bubble-1" />
                    <div className="battery-bubble battery-bubble-2" />
                    <div className="battery-bubble battery-bubble-3" />
                  </div>
                  
                  {/* Wave effect at top of liquid */}
                  <div className="absolute -top-2 left-0 right-0 h-4 overflow-hidden">
                    <div className="battery-wave" />
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.div>

                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glow around battery when charging */}
              <motion.div
                animate={{
                  opacity: isComplete ? [0.5, 0.8, 0.5] : [0.2, 0.4, 0.2],
                  scale: isComplete ? [1, 1.05, 1] : 1,
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl -z-10"
              />
            </div>

            {/* Percentage display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-baseline"
            >
              <span className="text-5xl font-black text-white tabular-nums">
                {Math.round(progress)}
              </span>
              <span className="text-2xl font-bold text-primary ml-1">%</span>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm text-slate-400 font-medium tracking-wider uppercase"
            >
              {isComplete ? 'Geladen' : 'Laden...'}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
