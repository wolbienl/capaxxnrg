'use client'

import { motion } from 'framer-motion'
import { useTransition } from './TransitionContext'

export default function PageTransition() {
  const { phase, onEnterComplete, onExitComplete } = useTransition()

  if (phase === 'idle') return null

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: phase === 'enter' ? 1 : 0 }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
        }}
        onAnimationComplete={() => {
          if (phase === 'enter') {
            onEnterComplete()
          } else {
            onExitComplete()
          }
        }}
        style={{
          originX: phase === 'enter' ? 0 : 1,
          willChange: 'transform',
        }}
        className="absolute inset-0 bg-secondary"
      />
    </div>
  )
}
