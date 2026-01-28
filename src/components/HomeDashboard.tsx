'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState, memo } from 'react'
import { Sun, Battery, Zap, ArrowUpRight, TrendingDown } from 'lucide-react'

// Separate static parts to avoid unnecessary re-renders
const DashboardHeader = memo(() => (
  <div className="relative z-10 flex items-center justify-between mb-8 border-b border-white/5 pb-6">
    <div className="flex items-center space-x-4">
      <div className="flex space-x-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
      </div>
      <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">System: Active</span>
    </div>
    <Image
      src="/images/logo-light.svg"
      alt="CAPAXX Energy"
      width={100}
      height={24}
      className="h-5 w-auto"
    />
  </div>
))
DashboardHeader.displayName = 'DashboardHeader'

export default function HomeDashboard() {
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
    }, 3000) // Verhoogd van 2s naar 3s voor minder re-renders
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-[650px] aspect-[1.2/1] sm:aspect-[1.5/1] bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden border border-white/10 shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,106,0,0.08),transparent_70%)] pointer-events-none" />
      
      <DashboardHeader />

      <div className="relative z-10 grid grid-cols-12 gap-6 h-[calc(100%-6rem)]">
        {/* Left: Generation & Flow */}
        <div className="col-span-7 flex flex-col gap-6">
          <div className="flex-1 bg-white/[0.03] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden">
            <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Opwek (Zon)</div>
            <div className="text-5xl font-black text-white tracking-tighter mb-4">
              {metrics.solar.toFixed(1)} <span className="text-lg text-slate-500 ml-1 font-bold">kW</span>
            </div>
            <div className="h-16 flex items-end space-x-1">
              {[30, 50, 40, 70, 90, 55, 40, 50, 60, 80, 70, 85].map((h, i) => (
                <div key={i} className="flex-grow bg-primary/20 rounded-t-sm relative overflow-hidden h-full">
                  <motion.div 
                    animate={{ height: [`${h}%`, `${Math.min(100, h + 15)}%`, `${h}%`] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                    className="absolute bottom-0 left-0 right-0 bg-primary/40"
                    style={{ willChange: 'height' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="h-24 bg-white/[0.03] rounded-2xl border border-white/5 flex items-center justify-around px-6">
            <Sun className="w-5 h-5 text-primary" />
            <div className="flex-grow mx-4 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                style={{ willChange: 'transform' }}
              />
            </div>
            <Battery className="w-5 h-5 text-emerald-500" />
            <div className="flex-grow mx-4 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                animate={{ x: ['-100%', '200%'] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} 
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                style={{ willChange: 'transform' }}
              />
            </div>
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
        </div>

        {/* Right: Storage & Savings */}
        <div className="col-span-5 flex flex-col gap-6">
          <div className="flex-1 bg-white/[0.03] rounded-[2rem] p-6 border border-white/5 relative overflow-hidden">
            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4">Opslag (Accu)</div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl font-black text-white">{metrics.battery.toFixed(0)}%</span>
              <div className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded">1.0 MWh</div>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                animate={{ width: `${metrics.battery}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                style={{ willChange: 'width' }}
              />
            </div>
          </div>

          <div className="h-32 bg-primary rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden">
            <ArrowUpRight className="absolute top-4 right-4 w-10 h-10 text-white/20" />
            <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">Rendement</div>
            <div className="text-2xl font-black text-white tracking-tight">
              € {metrics.savings.toLocaleString('nl-NL', { minimumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
