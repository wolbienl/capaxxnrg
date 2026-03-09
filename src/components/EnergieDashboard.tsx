'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  Sun,
  TrendingUp,
  Activity,
  BarChart3,
  Grid3X3,
  Clock,
  ArrowRight,
  Gauge,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

/* ═══════════════════════════════════════════════════════════════════════════
   DATA (geanonimiseerd)
   ═══════════════════════════════════════════════════════════════════════════ */

const CONTRACT_KW = 220
const TOTAL_MEASUREMENTS = 35_034

interface MonthRow {
  month: string
  import: number
  opwek: number
  piek: number
}

const MONTHLY: MonthRow[] = [
  { month: 'Jan', import: 39771, opwek: 3164, piek: 150.4 },
  { month: 'Feb', import: 33724, opwek: 6964, piek: 157.2 },
  { month: 'Mrt', import: 26824, opwek: 18221, piek: 130.1 },
  { month: 'Apr', import: 22813, opwek: 23774, piek: 142.5 },
  { month: 'Mei', import: 19125, opwek: 29968, piek: 173.3 },
  { month: 'Jun', import: 19868, opwek: 27720, piek: 165.9 },
  { month: 'Jul', import: 19318, opwek: 25521, piek: 145.6 },
  { month: 'Aug', import: 13842, opwek: 24764, piek: 137.1 },
  { month: 'Sep', import: 24126, opwek: 16834, piek: 143.1 },
  { month: 'Okt', import: 30919, opwek: 8194, piek: 153.5 },
  { month: 'Nov', import: 35804, opwek: 4153, piek: 188.2 },
  { month: 'Dec', import: 44480, opwek: 2795, piek: 177.1 },
]

const LDC = [
  { pct: 0.0, kw: 188.2 }, { pct: 0.5, kw: 144.5 }, { pct: 1.0, kw: 135.5 },
  { pct: 1.5, kw: 129.1 }, { pct: 2.0, kw: 124.2 }, { pct: 2.5, kw: 119.6 },
  { pct: 3.0, kw: 116.3 }, { pct: 3.5, kw: 113.8 }, { pct: 4.0, kw: 111.0 },
  { pct: 4.5, kw: 108.2 }, { pct: 5.0, kw: 106.0 }, { pct: 5.5, kw: 103.8 },
  { pct: 6.0, kw: 101.9 }, { pct: 6.5, kw: 99.8 }, { pct: 7.0, kw: 98.1 },
  { pct: 7.5, kw: 96.4 }, { pct: 8.0, kw: 94.6 }, { pct: 8.5, kw: 92.8 },
  { pct: 9.0, kw: 91.0 }, { pct: 9.5, kw: 89.5 }, { pct: 10, kw: 88.0 },
  { pct: 11, kw: 85.0 }, { pct: 12, kw: 82.2 }, { pct: 13, kw: 79.3 },
  { pct: 14, kw: 76.1 }, { pct: 15, kw: 72.8 }, { pct: 16, kw: 69.4 },
  { pct: 17, kw: 65.8 }, { pct: 18, kw: 62.1 }, { pct: 19, kw: 58.6 },
  { pct: 20, kw: 55.3 }, { pct: 21, kw: 52.5 }, { pct: 22, kw: 50.2 },
  { pct: 23, kw: 48.5 }, { pct: 24, kw: 47.5 }, { pct: 25, kw: 45.3 },
  { pct: 26, kw: 44.1 }, { pct: 27, kw: 43.5 }, { pct: 28, kw: 42.2 },
  { pct: 29, kw: 41.6 }, { pct: 30, kw: 39.8 }, { pct: 32, kw: 38.2 },
  { pct: 34, kw: 37.2 }, { pct: 36, kw: 36.0 }, { pct: 38, kw: 35.4 },
  { pct: 40, kw: 34.6 }, { pct: 42, kw: 33.9 }, { pct: 44, kw: 33.1 },
  { pct: 46, kw: 32.5 }, { pct: 48, kw: 32.0 }, { pct: 50, kw: 31.1 },
  { pct: 52, kw: 30.3 }, { pct: 54, kw: 28.6 }, { pct: 56, kw: 27.4 },
  { pct: 58, kw: 26.6 }, { pct: 60, kw: 25.5 }, { pct: 62, kw: 24.8 },
  { pct: 64, kw: 24.1 }, { pct: 66, kw: 23.0 }, { pct: 68, kw: 22.2 },
  { pct: 70, kw: 20.4 }, { pct: 72, kw: 19.1 }, { pct: 74, kw: 17.6 },
  { pct: 76, kw: 16.3 }, { pct: 78, kw: 15.4 }, { pct: 80, kw: 14.6 },
  { pct: 82, kw: 13.7 }, { pct: 84, kw: 12.5 }, { pct: 86, kw: 9.5 },
  { pct: 88, kw: 4.9 }, { pct: 90, kw: 1.3 }, { pct: 92, kw: 0.0 },
  { pct: 100, kw: 0.0 },
]

const PROFILE = [
  { hour: '00:00', wd: 27.7, wp95: 43.3, wmax: 54.6, we: 28.3 },
  { hour: '01:00', wd: 27.4, wp95: 42.5, wmax: 55.4, we: 28.0 },
  { hour: '02:00', wd: 27.4, wp95: 43.8, wmax: 52.6, we: 28.0 },
  { hour: '03:00', wd: 26.8, wp95: 42.9, wmax: 54.7, we: 28.0 },
  { hour: '04:00', wd: 30.7, wp95: 53.2, wmax: 97.1, we: 26.1 },
  { hour: '05:00', wd: 36.2, wp95: 70.3, wmax: 96.8, we: 22.5 },
  { hour: '06:00', wd: 43.9, wp95: 89.3, wmax: 118.2, we: 18.4 },
  { hour: '07:00', wd: 65.6, wp95: 115.2, wmax: 142.5, we: 15.9 },
  { hour: '08:00', wd: 72.2, wp95: 120.3, wmax: 146.5, we: 13.4 },
  { hour: '09:00', wd: 76.5, wp95: 147.9, wmax: 177.1, we: 10.4 },
  { hour: '10:00', wd: 70.4, wp95: 144.0, wmax: 188.2, we: 8.1 },
  { hour: '11:00', wd: 63.0, wp95: 138.0, wmax: 173.3, we: 8.6 },
  { hour: '12:00', wd: 59.7, wp95: 128.2, wmax: 154.3, we: 5.4 },
  { hour: '13:00', wd: 59.2, wp95: 123.5, wmax: 157.3, we: 5.0 },
  { hour: '14:00', wd: 61.6, wp95: 122.3, wmax: 162.0, we: 5.3 },
  { hour: '15:00', wd: 60.5, wp95: 118.2, wmax: 145.5, we: 8.1 },
  { hour: '16:00', wd: 56.1, wp95: 117.3, wmax: 150.1, we: 12.7 },
  { hour: '17:00', wd: 43.2, wp95: 97.0, wmax: 125.9, we: 17.8 },
  { hour: '18:00', wd: 31.5, wp95: 58.7, wmax: 111.8, we: 23.0 },
  { hour: '19:00', wd: 31.4, wp95: 50.0, wmax: 115.1, we: 25.8 },
  { hour: '20:00', wd: 30.6, wp95: 47.0, wmax: 107.6, we: 27.3 },
  { hour: '21:00', wd: 30.1, wp95: 46.2, wmax: 103.2, we: 26.7 },
  { hour: '22:00', wd: 28.7, wp95: 42.8, wmax: 54.3, we: 27.3 },
  { hour: '23:00', wd: 28.3, wp95: 41.8, wmax: 52.4, we: 27.5 },
]

type HeatmapData = Record<string, number[]>

const HEATMAP_AVG: HeatmapData = {
  '1': [33.5,33.4,32.6,32.2,32.3,32.5,33.1,38.4,70.1,95.9,91.8,82.6,76.4,76.2,77.1,79.3,79.2,71.8,42.4,37.0,34.5,33.8,33.6,33.6],
  '2': [36.7,36.1,36.1,35.7,35.3,36.2,36.5,43.4,72.3,93.4,82.7,66.5,56.9,53.8,59.3,62.7,68.3,68.0,43.3,38.5,35.6,35.3,35.7,36.1],
  '3': [33.7,34.4,33.9,33.7,33.5,35.0,35.3,41.8,52.5,59.7,46.2,31.0,23.9,23.3,26.0,30.1,40.1,50.7,34.5,33.7,33.2,31.5,33.8,32.7],
  '4': [31.9,31.3,31.6,31.7,32.4,32.7,45.6,65.5,52.3,34.8,23.7,17.9,21.2,20.0,22.5,25.0,29.5,20.5,29.5,32.0,32.2,31.8,32.7,32.1],
  '5': [31.6,31.1,31.2,31.0,26.7,16.8,24.5,36.8,26.3,17.2,19.9,20.6,20.6,22.4,19.0,22.4,24.4,12.6,22.7,30.4,31.9,32.3,32.3,32.3],
  '6': [28.2,27.7,27.7,26.7,19.5,12.3,21.5,42.4,41.0,34.5,32.4,36.7,32.6,33.5,30.2,27.0,28.5,7.5,13.3,25.0,28.6,28.6,28.4,28.3],
  '7': [17.9,17.5,17.4,16.9,30.8,24.9,33.3,46.1,40.7,34.9,30.3,30.4,33.7,30.1,33.2,31.1,25.1,28.7,9.6,16.2,18.6,18.7,18.6,18.5],
  '8': [14.4,13.7,14.1,14.0,13.9,31.7,27.2,27.1,20.4,19.7,22.8,21.5,28.6,29.5,34.6,21.2,2.7,5.2,10.6,14.4,14.9,14.8,15.0,14.7],
  '9': [22.9,22.9,23.1,22.7,32.0,54.1,59.4,66.8,54.5,39.3,33.5,32.5,34.6,38.6,41.9,37.6,20.3,23.2,24.6,24.0,23.9,23.7,24.0,24.0],
  '10': [23.4,22.5,23.2,22.9,37.1,52.4,62.4,76.1,73.7,69.0,59.9,55.7,47.6,50.3,53.1,51.0,39.4,31.1,26.3,24.5,24.3,24.4,23.7,24.2],
  '11': [28.1,27.7,27.9,27.3,26.8,26.8,27.3,62.8,76.3,92.3,90.7,84.2,74.4,68.9,70.6,76.6,80.8,48.3,35.5,29.9,28.0,27.5,27.4,27.3],
  '12': [33.1,33.3,33.0,32.1,32.8,32.0,34.0,70.6,86.4,103.7,99.4,91.6,80.5,78.9,80.1,84.2,87.9,65.5,57.3,52.4,50.7,48.1,34.7,33.6],
}

const HEATMAP_MAX: HeatmapData = {
  '1': [45.3,45.2,44.9,45.0,45.0,44.7,44.7,61.0,120.5,150.4,148.8,146.1,148.8,142.8,134.3,133.4,134.9,118.4,63.5,49.5,45.5,45.2,45.2,45.5],
  '2': [50.3,54.1,52.6,54.7,53.2,53.4,58.1,66.9,138.8,156.6,149.6,157.2,144.0,138.8,124.1,136.4,115.1,110.1,63.0,57.6,51.2,54.2,51.7,52.5],
  '3': [54.6,55.4,51.7,52.3,54.3,52.1,73.1,99.7,119.7,130.1,117.4,121.7,99.6,106.0,128.0,101.1,102.2,114.0,56.0,52.9,53.5,49.5,54.1,50.2],
  '4': [48.5,50.3,49.7,51.2,57.7,62.0,113.3,142.5,129.6,120.7,105.3,99.6,111.3,109.0,111.3,90.1,75.5,40.7,40.0,50.9,49.5,49.0,49.8,48.5],
  '5': [51.8,51.2,51.3,50.2,50.3,51.2,102.4,120.7,115.0,114.8,108.6,173.3,93.2,89.8,74.4,92.1,99.7,33.2,36.0,44.9,52.3,49.8,51.2,50.6],
  '6': [49.0,47.0,46.7,47.3,39.6,31.8,89.5,120.1,138.3,141.0,165.9,146.0,122.9,142.6,162.0,119.9,89.7,40.4,34.4,41.9,43.3,41.8,40.8,47.2],
  '7': [29.4,27.8,27.4,28.4,57.4,55.3,114.8,120.6,117.1,116.3,104.4,102.1,138.6,99.1,145.6,118.6,89.5,92.1,33.2,31.1,30.1,29.5,29.4,29.3],
  '8': [25.4,17.3,27.6,26.3,41.6,64.5,85.7,99.9,86.7,87.5,132.6,105.3,117.7,116.3,137.1,101.6,54.2,51.4,18.0,20.4,20.2,19.3,24.6,20.8],
  '9': [35.4,38.7,39.3,37.6,97.1,96.8,118.2,139.9,141.4,123.0,121.1,107.3,131.9,143.1,121.9,139.4,61.4,40.4,36.3,39.0,40.1,35.3,41.1,38.9],
  '10': [41.9,40.1,44.2,43.4,80.8,87.5,103.8,131.6,135.5,153.5,139.4,117.5,111.1,111.1,105.5,95.8,111.3,97.6,58.7,46.1,42.8,44.9,40.7,44.4],
  '11': [43.3,42.7,41.6,41.1,45.1,41.7,41.6,118.0,134.3,172.4,188.2,163.9,154.3,157.3,147.1,145.5,143.6,97.0,68.4,54.9,43.5,49.5,42.4,41.7],
  '12': [52.5,52.4,52.6,49.0,49.6,50.6,50.8,126.2,146.5,177.1,169.5,162.4,151.0,153.2,137.8,136.3,150.1,125.9,111.8,115.1,107.6,103.2,54.3,52.4],
}

const MONTHS_NL = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

/* ═══════════════════════════════════════════════════════════════════════════
   COMPUTED KPIs
   ═══════════════════════════════════════════════════════════════════════════ */

const totalImport = MONTHLY.reduce((s, m) => s + m.import, 0)
const totalOpwek = MONTHLY.reduce((s, m) => s + m.opwek, 0)
const totalVerbruik = Math.round((totalImport + totalOpwek) / 1000)
const pvDekking = ((totalOpwek / (totalImport + totalOpwek)) * 100).toFixed(1)
const maxPiek = Math.max(...MONTHLY.map((m) => m.piek))
const p95Kw = 106
const p95Beschikbaar = CONTRACT_KW - p95Kw

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════════════════════════ */

const fmtKw = (v: number) => v.toFixed(1).replace('.', ',')
const fmtKwh = (v: number) => v.toLocaleString('nl-NL')

function heatColor(val: number, maxVal: number, mode: 'import' | 'beschikbaar'): string {
  if (mode === 'beschikbaar') {
    const r = val / CONTRACT_KW
    if (r > 0.7) return '#059669'
    if (r > 0.5) return '#10B981'
    if (r > 0.3) return '#F59E0B'
    return '#EF4444'
  }
  const r = val / maxVal
  if (r < 0.15) return '#eef2f7'
  if (r < 0.3) return '#B4D0E8'
  if (r < 0.45) return '#6B91AD'
  if (r < 0.6) return '#4E7491'
  if (r < 0.75) return '#3A5A75'
  if (r < 0.9) return '#2B4257'
  return '#f06a00'
}

/* ═══════════════════════════════════════════════════════════════════════════
   CUSTOM TOOLTIPS
   ═══════════════════════════════════════════════════════════════════════════ */

/* eslint-disable @typescript-eslint/no-explicit-any */

function EnergyTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-3.5 min-w-[190px]">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</div>
      {payload.map((entry: any, i: number) => (
        <div key={i} className="flex items-center gap-2 mb-1 last:mb-0">
          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: entry.fill || entry.color }} />
          <span className="text-xs text-slate-500">{entry.name}</span>
          <span className="text-sm font-black text-secondary ml-auto tabular-nums">
            {fmtKwh(entry.value)} kWh
          </span>
        </div>
      ))}
      <div className="mt-1.5 pt-1.5 border-t border-slate-100 text-xs text-slate-400 font-bold">
        Totaal: {fmtKwh(payload.reduce((s: number, p: any) => s + p.value, 0))} kWh
      </div>
    </div>
  )
}

function PeakTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  const v = payload[0].value
  const pct = ((v / CONTRACT_KW) * 100).toFixed(1)
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-3.5 min-w-[170px]">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-lg font-black text-secondary tabular-nums">{fmtKw(v)} kW</div>
      <div className="text-xs text-slate-400 font-bold">{pct}% van contract</div>
      <div className={`text-xs font-bold mt-1 ${v > CONTRACT_KW * 0.8 ? 'text-primary' : 'text-emerald-600'}`}>
        {fmtKw(CONTRACT_KW - v)} kW beschikbaar
      </div>
    </div>
  )
}

function LdcTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-3.5 min-w-[190px]">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
        {d.pct}% van de tijd
      </div>
      <div className="text-lg font-black text-secondary tabular-nums">{fmtKw(d.kw)} kW</div>
      <div className="text-xs text-emerald-600 font-bold">
        {fmtKw(CONTRACT_KW - d.kw)} kW beschikbaar
      </div>
    </div>
  )
}

function ProfileTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  const get = (key: string) => payload.find((p: any) => p.dataKey === key)?.value ?? 0
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-3.5 min-w-[200px]">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-0.5 rounded bg-secondary shrink-0" />
          <span className="text-xs text-slate-500">Werkdag gem.</span>
          <span className="text-sm font-black text-secondary ml-auto tabular-nums">{fmtKw(get('wd'))} kW</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-0.5 rounded bg-[#6B91AD] shrink-0" />
          <span className="text-xs text-slate-500">Weekend gem.</span>
          <span className="text-sm font-black text-secondary ml-auto tabular-nums">{fmtKw(get('we'))} kW</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-secondary/15 shrink-0" />
          <span className="text-xs text-slate-500">Werkdag P95</span>
          <span className="text-sm font-black text-secondary ml-auto tabular-nums">{fmtKw(get('wp95'))} kW</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded bg-primary/15 shrink-0" />
          <span className="text-xs text-slate-500">Werkdag max</span>
          <span className="text-sm font-black text-secondary ml-auto tabular-nums">{fmtKw(get('wmax'))} kW</span>
        </div>
      </div>
    </div>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */

/* ═══════════════════════════════════════════════════════════════════════════
   HEATMAP COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

interface HeatmapProps {
  data: HeatmapData
  mode: 'import' | 'beschikbaar'
  maxVal: number
  title: string
  subtitle?: string
  legend: React.ReactNode
}

function HeatmapGrid({ data, mode, maxVal, title, subtitle, legend }: HeatmapProps) {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null)

  const cW = 38
  const cH = 26
  const lW = 36
  const lH = 20
  const svgW = lW + 24 * cW + 10
  const svgH = lH + 12 * cH + 10

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-6">
      <h3 className="text-sm font-black text-secondary tracking-tight">{title}</h3>
      {subtitle && <p className="text-xs text-slate-400 mt-0.5 mb-4">{subtitle}</p>}
      {!subtitle && <div className="mb-4" />}

      <div className="overflow-x-auto -mx-2 px-2 pb-2">
        <svg
          width={svgW}
          height={svgH}
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="block"
          style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}
        >
          {Array.from({ length: 24 }, (_, h) => (
            <text
              key={`h-${h}`}
              x={lW + h * cW + cW / 2}
              y={14}
              textAnchor="middle"
              fontSize={10}
              fill="#94a3b8"
              fontWeight={600}
            >
              {String(h).padStart(2, '0')}
            </text>
          ))}

          {MONTHS_NL.map((month, mi) => {
            const row = data[String(mi + 1)] || []
            return (
              <g key={month}>
                <text
                  x={30}
                  y={lH + mi * cH + cH / 2 + 4}
                  textAnchor="end"
                  fontSize={10}
                  fill="#94a3b8"
                  fontWeight={600}
                >
                  {month}
                </text>
                {Array.from({ length: 24 }, (_, h) => {
                  const raw = row[h] || 0
                  const val = mode === 'beschikbaar' ? CONTRACT_KW - raw : raw
                  const color = heatColor(val, maxVal, mode)
                  const textFill = val > maxVal * 0.5 ? '#fff' : '#1a2b3c'
                  const x = lW + h * cW
                  const y = lH + mi * cH

                  return (
                    <g
                      key={h}
                      onMouseEnter={(e) =>
                        setTooltip({
                          text: `${month} ${String(h).padStart(2, '0')}:00 — ${Math.round(val)} kW`,
                          x: e.clientX,
                          y: e.clientY,
                        })
                      }
                      onMouseMove={(e) =>
                        setTooltip((prev) => (prev ? { ...prev, x: e.clientX, y: e.clientY } : null))
                      }
                      onMouseLeave={() => setTooltip(null)}
                      className="cursor-pointer"
                    >
                      <rect x={x} y={y} width={cW - 1} height={cH - 1} rx={3} fill={color} />
                      <text
                        x={x + (cW - 1) / 2}
                        y={y + (cH - 1) / 2 + 3.5}
                        textAnchor="middle"
                        fontSize={8.5}
                        fill={textFill}
                        style={{ pointerEvents: 'none' }}
                      >
                        {Math.round(val)}
                      </text>
                    </g>
                  )
                })}
              </g>
            )
          })}
        </svg>
      </div>

      {legend}

      {tooltip && (
        <div
          className="fixed z-50 bg-secondary text-white text-xs font-bold px-3 py-2 rounded-lg pointer-events-none shadow-xl"
          style={{ left: tooltip.x + 14, top: tooltip.y - 32 }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   PERCENTILE CARD
   ═══════════════════════════════════════════════════════════════════════════ */

function PercCard({
  label,
  value,
  free,
  pct,
  isHot,
}: {
  label: string
  value: string
  free: string
  pct: number
  isHot?: boolean
}) {
  return (
    <div className="bg-slate-50 rounded-xl p-4">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</div>
      <div className="flex items-baseline justify-between mb-3">
        <span className="text-xl font-black text-secondary tabular-nums">{value}</span>
        <span className="text-sm font-bold text-emerald-600">{free}</span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className={`h-full rounded-full ${isHot ? 'bg-primary' : 'bg-secondary'}`}
        />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */

const TABS = [
  { id: 'overzicht', label: 'Overzicht', icon: BarChart3 },
  { id: 'heatmap', label: 'Heatmap', icon: Grid3X3 },
  { id: 'duurbelasting', label: 'Duurbelasting', icon: Activity },
  { id: 'profiel', label: 'Dagprofiel', icon: Clock },
] as const

export default function EnergieDashboard() {
  const [activeTab, setActiveTab] = useState<string>('overzicht')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="flex flex-col w-full selection:bg-primary/30">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-6 md:pt-36 md:pb-10 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.svg')] opacity-30" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-primary font-bold mb-4 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100">
                  <Activity className="w-4 h-4" />
                  <span className="uppercase tracking-widest text-[10px]">Demo &middot; Energieanalyse</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-[1.08] tracking-tight">
                  Capaciteitsanalyse <br />
                  <span className="text-primary italic">in beeld.</span>
                </h1>
                <p className="text-slate-500 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
                  Interactief dashboard op basis van {TOTAL_MEASUREMENTS.toLocaleString('nl-NL')} kwartiermetingen.
                  Inzicht in verbruikspatronen, piekbelasting en beschikbare netcapaciteit.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-slate-50 rounded-xl border border-slate-100 px-5 py-3 text-right">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Contractvermogen
                  </div>
                  <div className="text-2xl font-black text-secondary tabular-nums">
                    {CONTRACT_KW} <span className="text-sm font-bold text-slate-400">kW</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Voorbeelddata
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TAB BAR ──────────────────────────────────────────────────────── */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-0.5 overflow-x-auto py-0.5 -mb-px">
            {TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 md:px-6 py-3.5 text-sm font-bold whitespace-nowrap transition-colors ${
                    activeTab === tab.id ? 'text-primary' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabLine"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 min-h-[60vh]">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {/* ━━━ OVERZICHT ━━━ */}
              {activeTab === 'overzicht' && (
                <div className="flex flex-col gap-6">
                  {/* KPI cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    <FadeIn delay={0}>
                      <div className="relative bg-secondary rounded-2xl p-5 overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="flex items-center gap-2 mb-1 relative z-10">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Totaal verbruik
                          </span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-white tracking-tight relative z-10 tabular-nums">
                          {totalVerbruik}
                          <span className="text-sm font-bold text-slate-400 ml-1">MWh</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 relative z-10">
                          Import + PV zelfconsumptie
                        </div>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.05}>
                      <div className="bg-white rounded-2xl p-5 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1">
                          <Sun className="w-4 h-4 text-emerald-500" />
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            PV-dekking
                          </span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-emerald-600 tracking-tight tabular-nums">
                          {pvDekking}
                          <span className="text-sm font-bold text-slate-400 ml-1">%</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">
                          {Math.round(totalOpwek / 1000)} MWh opgewekt
                        </div>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                      <div className="bg-white rounded-2xl p-5 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Piekimport
                          </span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-primary tracking-tight tabular-nums">
                          {fmtKw(maxPiek)}
                          <span className="text-sm font-bold text-slate-400 ml-1">kW</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">
                          {((maxPiek / CONTRACT_KW) * 100).toFixed(1)}% van contract
                        </div>
                      </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                      <div className="bg-white rounded-2xl p-5 border border-slate-100">
                        <div className="flex items-center gap-2 mb-1">
                          <Gauge className="w-4 h-4 text-emerald-500" />
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                            Beschikbaar (P95)
                          </span>
                        </div>
                        <div className="text-2xl md:text-3xl font-black text-emerald-600 tracking-tight tabular-nums">
                          {p95Beschikbaar}
                          <span className="text-sm font-bold text-slate-400 ml-1">kW</span>
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1">
                          {p95Beschikbaar} kW vrij, 95% van de tijd
                        </div>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Monthly energy balance */}
                  <FadeIn>
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
                        <div>
                          <h3 className="text-sm font-black text-secondary tracking-tight">
                            Maandelijkse energiebalans
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Netimport vs. PV-zelfconsumptie (kWh)
                          </p>
                        </div>
                        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded bg-secondary" /> Netimport
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded bg-primary" /> PV-opwek
                          </span>
                        </div>
                      </div>
                      <div className="h-[260px] md:h-[300px] -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={MONTHLY} barCategoryGap="14%">
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 11, fontWeight: 700, fill: '#94a3b8' }}
                            />
                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                              tickFormatter={(v: number) => `${Math.round(v / 1000)}k`}
                              width={42}
                            />
                            <Tooltip
                              content={<EnergyTooltip />}
                              cursor={{ fill: 'rgba(15, 23, 42, 0.04)', radius: 8 }}
                            />
                            <Bar
                              dataKey="import"
                              stackId="energy"
                              fill="#0f172a"
                              name="Netimport"
                              radius={[0, 0, 0, 0]}
                            />
                            <Bar
                              dataKey="opwek"
                              stackId="energy"
                              fill="#f06a00"
                              name="PV-opwek"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Monthly peak import */}
                  <FadeIn>
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8">
                      <div className="mb-6">
                        <h3 className="text-sm font-black text-secondary tracking-tight">
                          Maandelijkse piekimport vs. contractvermogen
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Geen maand overschrijdt het contract van {CONTRACT_KW} kW. Hoogste piek: november (
                          {fmtKw(maxPiek)} kW)
                        </p>
                      </div>
                      <div className="h-[240px] md:h-[280px] -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={MONTHLY} barCategoryGap="16%">
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis
                              dataKey="month"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 11, fontWeight: 700, fill: '#94a3b8' }}
                            />
                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                              domain={[0, 240]}
                              width={42}
                            />
                            <Tooltip
                              content={<PeakTooltip />}
                              cursor={{ fill: 'rgba(15, 23, 42, 0.04)', radius: 8 }}
                            />
                            <ReferenceLine
                              y={CONTRACT_KW}
                              stroke="#f06a00"
                              strokeDasharray="8 4"
                              strokeWidth={2}
                              label={{
                                value: `Contract ${CONTRACT_KW} kW`,
                                position: 'insideTopRight',
                                fill: '#f06a00',
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            />
                            <Bar dataKey="piek" name="Piekimport" radius={[6, 6, 0, 0]} maxBarSize={36}>
                              {MONTHLY.map((entry, index) => (
                                <Cell
                                  key={index}
                                  fill={entry.piek > CONTRACT_KW * 0.8 ? '#f06a00' : '#0f172a'}
                                  fillOpacity={0.85}
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* ━━━ HEATMAP ━━━ */}
              {activeTab === 'heatmap' && (
                <div className="flex flex-col gap-6">
                  <HeatmapGrid
                    data={HEATMAP_AVG}
                    mode="import"
                    maxVal={110}
                    title="Gemiddelde netimport per uur/maand (kW)"
                    subtitle="Donkerder = hogere gemiddelde belasting"
                    legend={
                      <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-400 font-bold">
                        <span>Laag</span>
                        {['#eef2f7', '#B4D0E8', '#6B91AD', '#4E7491', '#3A5A75', '#2B4257', '#f06a00'].map(
                          (c) => (
                            <div key={c} className="w-5 h-3 rounded" style={{ backgroundColor: c }} />
                          ),
                        )}
                        <span>Hoog</span>
                      </div>
                    }
                  />

                  <HeatmapGrid
                    data={HEATMAP_AVG}
                    mode="beschikbaar"
                    maxVal={CONTRACT_KW}
                    title={`Beschikbare netcapaciteit per uur/maand (kW vrij van ${CONTRACT_KW} kW)`}
                    subtitle="Groen = veel capaciteit beschikbaar voor extra belasting"
                    legend={
                      <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-400 font-bold">
                        <span>Krap</span>
                        {['#EF4444', '#F59E0B', '#10B981', '#059669'].map((c) => (
                          <div key={c} className="w-5 h-3 rounded" style={{ backgroundColor: c }} />
                        ))}
                        <span>Ruim</span>
                      </div>
                    }
                  />

                  <HeatmapGrid
                    data={HEATMAP_MAX}
                    mode="import"
                    maxVal={200}
                    title="Piekvermogen netimport per uur/maand (kW) — worst case"
                    subtitle="Maximale gemeten waarde per tijdslot"
                    legend={
                      <div className="flex items-center gap-1.5 mt-3 text-[10px] text-slate-400 font-bold">
                        <span>Laag</span>
                        {['#eef2f7', '#B4D0E8', '#6B91AD', '#4E7491', '#3A5A75', '#2B4257', '#f06a00'].map(
                          (c) => (
                            <div key={c} className="w-5 h-3 rounded" style={{ backgroundColor: c }} />
                          ),
                        )}
                        <span>Hoog</span>
                      </div>
                    }
                  />
                </div>
              )}

              {/* ━━━ DUURBELASTING ━━━ */}
              {activeTab === 'duurbelasting' && (
                <div className="flex flex-col gap-6">
                  <FadeIn>
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8">
                      <div className="mb-6">
                        <h3 className="text-sm font-black text-secondary tracking-tight">
                          Duurbelastingcurve ({TOTAL_MEASUREMENTS.toLocaleString('nl-NL')} metingen)
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          95% van de tijd is import lager dan {p95Kw} kW — er is ruim capaciteit beschikbaar.
                        </p>
                      </div>
                      <div className="h-[320px] md:h-[380px] -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={LDC}>
                            <defs>
                              <linearGradient id="gradLdc" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0f172a" stopOpacity={0.25} />
                                <stop offset="95%" stopColor="#0f172a" stopOpacity={0.02} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis
                              dataKey="pct"
                              type="number"
                              domain={[0, 100]}
                              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                              tickFormatter={(v: number) => `${v}%`}
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                            />
                            <YAxis
                              domain={[0, 240]}
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                              width={42}
                            />
                            <Tooltip
                              content={<LdcTooltip />}
                              cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <ReferenceLine
                              y={CONTRACT_KW}
                              stroke="#f06a00"
                              strokeDasharray="8 4"
                              strokeWidth={2}
                              label={{
                                value: `Contract ${CONTRACT_KW} kW`,
                                position: 'insideTopRight',
                                fill: '#f06a00',
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            />
                            <ReferenceLine
                              y={p95Kw}
                              stroke="#6B91AD"
                              strokeDasharray="4 4"
                              strokeWidth={1}
                              label={{
                                value: `P95: ${p95Kw} kW`,
                                position: isMobile ? 'insideTopLeft' : 'insideBottomRight',
                                fill: '#6B91AD',
                                fontSize: 10,
                                fontWeight: 700,
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="kw"
                              stroke="#0f172a"
                              strokeWidth={2.5}
                              fill="url(#gradLdc)"
                              dot={false}
                              activeDot={{ r: 4, fill: '#0f172a', stroke: '#fff', strokeWidth: 2 }}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8">
                      <h3 className="text-sm font-black text-secondary tracking-tight mb-5">
                        Percentielen netimport
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <PercCard
                          label="P50 (mediaan)"
                          value="31,1 kW"
                          free="189 kW vrij"
                          pct={14.1}
                        />
                        <PercCard label="P95" value="106 kW" free="114 kW vrij" pct={48.2} />
                        <PercCard label="P99" value="135,5 kW" free="85 kW vrij" pct={61.6} />
                        <PercCard
                          label="Jaarpiek"
                          value="188,2 kW"
                          free="32 kW vrij"
                          pct={85.5}
                          isHot
                        />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              )}

              {/* ━━━ DAGPROFIEL ━━━ */}
              {activeTab === 'profiel' && (
                <div className="flex flex-col gap-6">
                  <FadeIn>
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-6">
                        <div>
                          <h3 className="text-sm font-black text-secondary tracking-tight">
                            Vermogensprofiel werkdagen vs. weekend
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Werkdagen pieken van 08:00–17:00 (gem. 60–77 kW). Weekend basislast ~10–28 kW.
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-4 h-0.5 rounded bg-secondary" /> Werkdag gem.
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-4 h-0.5 rounded bg-[#6B91AD] border-dashed" /> Weekend gem.
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded bg-primary/15" /> Max
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded bg-secondary/15" /> P95
                          </span>
                        </div>
                      </div>
                      <div className="h-[300px] md:h-[360px] -ml-2">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={PROFILE}>
                            <defs>
                              <linearGradient id="gradMax" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f06a00" stopOpacity={0.15} />
                                <stop offset="95%" stopColor="#f06a00" stopOpacity={0.02} />
                              </linearGradient>
                              <linearGradient id="gradP95" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0f172a" stopOpacity={0.15} />
                                <stop offset="95%" stopColor="#0f172a" stopOpacity={0.02} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                            <XAxis
                              dataKey="hour"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                              interval={isMobile ? 3 : 1}
                            />
                            <YAxis
                              domain={[0, 240]}
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                              width={42}
                            />
                            <Tooltip
                              content={<ProfileTooltip />}
                              cursor={{ stroke: '#94a3b8', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <ReferenceLine
                              y={CONTRACT_KW}
                              stroke="#f06a00"
                              strokeDasharray="8 4"
                              strokeWidth={2}
                              label={{
                                value: `Contract ${CONTRACT_KW} kW`,
                                position: 'insideTopRight',
                                fill: '#f06a00',
                                fontSize: 11,
                                fontWeight: 700,
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="wmax"
                              fill="url(#gradMax)"
                              stroke="transparent"
                              name="Werkdag max"
                            />
                            <Area
                              type="monotone"
                              dataKey="wp95"
                              fill="url(#gradP95)"
                              stroke="transparent"
                              name="Werkdag P95"
                            />
                            <Line
                              type="monotone"
                              dataKey="wd"
                              stroke="#0f172a"
                              strokeWidth={2.5}
                              dot={false}
                              name="Werkdag gem."
                              activeDot={{ r: 4, fill: '#0f172a', stroke: '#fff', strokeWidth: 2 }}
                            />
                            <Line
                              type="monotone"
                              dataKey="we"
                              stroke="#6B91AD"
                              strokeWidth={2}
                              strokeDasharray="6 3"
                              dot={false}
                              name="Weekend gem."
                              activeDot={{ r: 4, fill: '#6B91AD', stroke: '#fff', strokeWidth: 2 }}
                            />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <div className="bg-gradient-to-br from-secondary to-slate-700 rounded-2xl p-6 md:p-8 text-white">
                      <h3 className="text-lg font-black mb-2">
                        Weekend: gemiddeld <span className="text-primary">192 kW</span> beschikbaar
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                        De weekendbasislast bedraagt gemiddeld 10–28 kW. Dat laat consistent 192+ kW vrij
                        voor extra belasting zoals laadinfra, batterijopslag of productieprocessen.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="bg-gradient-to-br from-secondary to-slate-800 rounded-[2rem] p-8 md:p-12 text-center overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                  Wilt u ook inzicht in uw{' '}
                  <span className="text-primary italic">energieprofiel?</span>
                </h2>
                <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  CAPAXX Energy analyseert uw kwartierdata en brengt kansen voor capaciteitsoptimalisatie,
                  batterijopslag en piekshaving in kaart. Onafhankelijk en resultaatgericht.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-black rounded-xl hover:bg-orange-600 transition-colors text-sm"
                  >
                    Neem contact op <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/oplossingen"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-black rounded-xl hover:bg-white/20 transition-colors text-sm backdrop-blur"
                  >
                    Bekijk oplossingen
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
      <section className="py-6 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-[11px] text-slate-400 text-center max-w-2xl mx-auto leading-relaxed">
            Dit dashboard toont geanonimiseerde voorbeelddata op basis van {TOTAL_MEASUREMENTS.toLocaleString('nl-NL')}{' '}
            kwartiermetingen. Contractvermogen: {CONTRACT_KW} kW. De werkelijke analyse voor uw locatie
            kan afwijken. Neem contact op voor een analyse op maat.
          </p>
        </div>
      </section>
    </div>
  )
}
