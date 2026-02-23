'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState, memo } from 'react'
import { Sun, Battery, Zap, Wifi, BatteryCharging, Signal, ArrowRight } from 'lucide-react'

// Status bar component
const StatusBar = memo(() => {
  const [time, setTime] = useState('12:00')
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="flex items-center justify-between px-5 pt-2 pb-1">
      <span className="text-[10px] font-semibold text-white/90">{time}</span>
      <div className="flex items-center gap-1">
        <Signal className="w-3 h-3 text-white/70" />
        <Wifi className="w-3 h-3 text-white/70" />
        <BatteryCharging className="w-3.5 h-3.5 text-white/70" />
      </div>
    </div>
  )
})
StatusBar.displayName = 'StatusBar'

// Dynamic Island component
const DynamicIsland = memo(() => (
  <div className="absolute left-1/2 -translate-x-1/2 top-2 z-20">
    <div className="w-20 h-5 bg-black rounded-full flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-slate-800 ring-1 ring-slate-700" />
    </div>
  </div>
))
DynamicIsland.displayName = 'DynamicIsland'

// Phone Screen with mini dashboard
const PhoneScreen = () => {
  const [metrics, setMetrics] = useState({
    solar: 214.2,
    battery: 76,
    savings: 4285.12,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        solar: Math.max(180, Math.min(240, prev.solar + (Math.random() - 0.5) * 5)),
        battery: Math.max(0, Math.min(100, prev.battery + (Math.random() - 0.5))),
        savings: prev.savings + 0.05,
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex flex-col h-full bg-slate-900 rounded-[32px] overflow-hidden">
      
      {/* Dynamic Island */}
      <DynamicIsland />
      
      {/* Status Bar */}
      <StatusBar />
      
      {/* Main Content */}
      <div className="flex-1 px-3 pb-3 pt-1 flex flex-col gap-2 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between py-1.5">
          <Image
            src="/images/logo-light.svg"
            alt="CAPAXX"
            width={70}
            height={18}
            className="h-3.5 w-auto opacity-90"
          />
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-wider">Live</span>
          </div>
        </div>
        
        {/* Main Metric - Solar */}
        <div className="bg-white/[0.05] rounded-2xl p-3 border border-white/[0.08]">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sun className="w-3 h-3 text-primary" />
            <span className="text-[8px] font-bold text-primary uppercase tracking-widest">Opwek</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black text-white tracking-tight">
              {metrics.solar.toFixed(1)}
            </span>
            <span className="text-[10px] text-slate-400 font-semibold">kW</span>
          </div>
          
          {/* Mini Chart */}
          <div className="h-8 flex items-end gap-[2px] mt-2">
            {[30, 50, 40, 70, 90, 55, 40, 50, 60, 80, 70, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-sm relative overflow-hidden h-full">
                <motion.div 
                  animate={{ height: [`${h}%`, `${Math.min(100, h + 15)}%`, `${h}%`] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.15,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-0 left-0 right-0 bg-primary/60"
                  style={{ willChange: 'height' }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Secondary Metrics Row */}
        <div className="grid grid-cols-2 gap-2">
          {/* Battery */}
          <div className="bg-white/[0.05] rounded-2xl p-3 border border-white/[0.08]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Battery className="w-3 h-3 text-emerald-500" />
              <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Opslag</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-white">{metrics.battery.toFixed(0)}</span>
              <span className="text-[10px] text-slate-400 font-semibold">%</span>
            </div>
            {/* Battery Progress */}
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2">
              <motion.div 
                animate={{ width: `${metrics.battery}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                style={{ willChange: 'width' }}
              />
            </div>
          </div>
          
          {/* Savings */}
          <div className="bg-white/[0.05] rounded-2xl p-3 border border-white/[0.08]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[8px] font-bold text-primary uppercase tracking-widest">Rendement</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-[10px] text-white/70 font-semibold">€</span>
              <span className="text-lg font-black text-white tracking-tight">
                {metrics.savings.toLocaleString('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>
        
        {/* Energy Flow */}
        <div className="bg-white/[0.05] rounded-xl p-2.5 border border-white/[0.08] flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center">
              <Sun className="w-3 h-3 text-primary" />
            </div>
            <div className="flex-1 h-[2px] w-8 bg-slate-700 relative overflow-hidden rounded-full">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
                style={{ willChange: 'transform' }}
              />
            </div>
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <Battery className="w-3 h-3 text-emerald-500" />
            </div>
            <div className="flex-1 h-[2px] w-8 bg-slate-700 relative overflow-hidden rounded-full">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                style={{ willChange: 'transform' }}
              />
            </div>
            <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Zap className="w-3 h-3 text-blue-500" />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="/oplossingen/ems"
          className="w-full py-2.5 bg-primary hover:bg-accent rounded-xl text-[10px] font-bold text-white uppercase tracking-wider transition-colors mt-auto flex items-center justify-center gap-1.5"
        >
          Ontdek EMS <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      {/* Home indicator */}
      <div className="pb-2 flex justify-center">
        <div className="w-24 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  )
}

// Main FloatingPhone component
export default function FloatingPhone() {
  return (
    <div 
      className="relative"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Glow effect behind phone */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-blue-500/20 blur-3xl opacity-50 scale-110 -z-10" />
      
      {/* 3D Phone Container */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-30deg) rotateX(15deg)',
        }}
        className="relative"
      >
        {/* Phone shadow/reflection */}
        <div 
          className="absolute inset-0 bg-primary/20 rounded-[40px] blur-2xl"
          style={{
            transform: 'translateZ(-20px) translateY(20px)',
          }}
        />
        
        {/* Animated Phone Body */}
        <motion.div
          initial={{
            transform: 'translateZ(8px) translateY(-2px)',
          }}
          animate={{
            transform: 'translateZ(32px) translateY(-8px)',
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut',
          }}
          className="relative w-[240px] h-[480px] sm:w-[260px] sm:h-[520px] md:w-[280px] md:h-[560px]"
        >
          {/* Phone outer frame with gradient border */}
          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-slate-600 via-slate-800 to-slate-900 p-[2px]">
            {/* Phone inner bezel */}
            <div className="w-full h-full rounded-[38px] bg-slate-900 p-1.5 border border-slate-700/50 shadow-2xl">
              {/* Screen */}
              <PhoneScreen />
            </div>
          </div>
          
          {/* Side buttons (volume) */}
          <div className="absolute -left-[2px] top-24 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
          <div className="absolute -left-[2px] top-36 w-[3px] h-8 bg-slate-700 rounded-l-sm" />
          
          {/* Power button */}
          <div className="absolute -right-[2px] top-28 w-[3px] h-12 bg-slate-700 rounded-r-sm" />
          
          {/* Subtle highlight on top edge */}
          <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </div>
  )
}
