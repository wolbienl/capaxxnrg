'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface TransitionContextType {
  phase: 'idle' | 'enter' | 'exit'
  startTransition: (onCovered: () => void) => void
  onEnterComplete: () => void
  onExitComplete: () => void
}

const TransitionContext = createContext<TransitionContextType | null>(null)

export function useTransition() {
  const context = useContext(TransitionContext)
  if (!context) {
    throw new Error('useTransition must be used within TransitionProvider')
  }
  return context
}

interface TransitionProviderProps {
  children: ReactNode
}

export function TransitionProvider({ children }: TransitionProviderProps) {
  const [phase, setPhase] = useState<'idle' | 'enter' | 'exit'>('idle')
  const [onCoveredCallback, setOnCoveredCallback] = useState<(() => void) | null>(null)

  const startTransition = useCallback((onCovered: () => void) => {
    setOnCoveredCallback(() => onCovered)
    setPhase('enter')
  }, [])

  const onEnterComplete = useCallback(() => {
    // Screen is now covered, execute the callback (navigation)
    if (onCoveredCallback) {
      onCoveredCallback()
      setOnCoveredCallback(null)
    }
    // Small delay then start exit
    setTimeout(() => {
      setPhase('exit')
    }, 50)
  }, [onCoveredCallback])

  const onExitComplete = useCallback(() => {
    setPhase('idle')
  }, [])

  return (
    <TransitionContext.Provider value={{ phase, startTransition, onEnterComplete, onExitComplete }}>
      {children}
    </TransitionContext.Provider>
  )
}
