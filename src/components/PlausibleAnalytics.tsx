'use client'

import { useEffect } from 'react'

// Flag om te voorkomen dat init meerdere keren wordt aangeroepen
let isInitialized = false

// Track function reference voor gebruik buiten component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let trackFn: any = null

export default function PlausibleAnalytics() {
  useEffect(() => {
    // Dynamische import om server-side errors te voorkomen
    const initPlausible = async () => {
      if (typeof window !== 'undefined' && !isInitialized) {
        const plausible = await import('@plausible-analytics/tracker')
        
        plausible.init({
          domain: 'capaxxenergy.nl',
          // Automatische pageview tracking
          autoCapturePageviews: true,
          // Outbound link tracking
          outboundLinks: true,
          // File download tracking
          fileDownloads: true,
        })
        
        trackFn = plausible.track
        isInitialized = true
      }
    }
    
    initPlausible()
  }, [])

  return null
}

// Helper function voor custom events
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (trackFn) {
    trackFn(eventName, { props })
  }
}

// Veelgebruikte events
export const PlausibleEvents = {
  // Contactformulier
  contactFormSubmit: (type?: string) => trackEvent('Contact Form Submit', { type: type || 'general' }),
  
  // CTA clicks
  ctaClick: (location: string, text: string) => trackEvent('CTA Click', { location, text }),
  
  // Oplossing bekeken
  solutionView: (solution: string) => trackEvent('Solution View', { solution }),
  
  // Telefoon/email click
  phoneClick: () => trackEvent('Phone Click'),
  emailClick: () => trackEvent('Email Click'),
  
  // Download
  download: (file: string) => trackEvent('Download', { file }),
  
  // Externe links
  externalLink: (url: string) => trackEvent('External Link', { url }),
} as const
