'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import provincePaths from '@/data/netherlands-paths.json'

interface ProvinceData {
  id: string
  name: string
  afname: { colorCode: number }
  invoeding: { colorCode: number }
}

interface NetherlandsMapProps {
  data: ProvinceData[]
  mode: 'afname' | 'invoeding'
  selectedProvince: string | null
  onSelectProvince: (name: string | null) => void
}

const COLOR_MAP: Record<number, string> = {
  [-1]: '#cbd5e1',
  0: '#34d399',
  1: '#fbbf24',
  2: '#f97316',
  3: '#ef4444',
}

const COLOR_MAP_HOVER: Record<number, string> = {
  [-1]: '#94a3b8',
  0: '#10b981',
  1: '#f59e0b',
  2: '#ea580c',
  3: '#dc2626',
}

const LABEL_MAP: Record<number, string> = {
  [-1]: 'Geen data',
  0: 'Beschikbaar',
  1: 'Beperkt',
  2: 'Krap',
  3: 'Vol',
}

function getColorCode(province: ProvinceData | undefined, mode: 'afname' | 'invoeding'): number {
  if (!province) return -1
  return mode === 'afname' ? province.afname.colorCode : province.invoeding.colorCode
}

const PROVINCE_LABELS: Record<string, { x: number; y: number; short: string }> = {
  'Groningen': { x: 185, y: 38, short: 'GR' },
  'Friesland': { x: 125, y: 40, short: 'FR' },
  'Drenthe': { x: 172, y: 62, short: 'DR' },
  'Overijssel': { x: 158, y: 100, short: 'OV' },
  'Flevoland': { x: 118, y: 92, short: 'FL' },
  'Gelderland': { x: 145, y: 130, short: 'GE' },
  'Utrecht': { x: 100, y: 127, short: 'UT' },
  'Noord-Holland': { x: 78, y: 75, short: 'NH' },
  'Zuid-Holland': { x: 62, y: 142, short: 'ZH' },
  'Zeeland': { x: 30, y: 182, short: 'ZE' },
  'Noord-Brabant': { x: 110, y: 180, short: 'NB' },
  'Limburg': { x: 137, y: 192, short: 'LI' },
}

export default function NetherlandsMap({
  data,
  mode,
  selectedProvince,
  onSelectProvince,
}: NetherlandsMapProps) {
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect()
    if (rect) {
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }, [])

  const provinceDataMap = new Map(data.map((p) => [p.name, p]))

  return (
    <div className="relative w-full">
      <svg
        viewBox="-5 0 210 240"
        className="w-full h-auto max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.entries(provincePaths as Record<string, string[]>).map(([name, paths]) => {
          const provinceData = provinceDataMap.get(name)
          const colorCode = getColorCode(provinceData, mode)
          const isSelected = selectedProvince === name
          const isHovered = hoveredProvince === name
          const fill = isHovered ? COLOR_MAP_HOVER[colorCode] : COLOR_MAP[colorCode]

          return (
            <g
              key={name}
              onClick={() => onSelectProvince(isSelected ? null : name)}
              onMouseEnter={() => setHoveredProvince(name)}
              onMouseLeave={() => setHoveredProvince(null)}
              onMouseMove={handleMouseMove}
              className="cursor-pointer"
              style={{
                filter: isSelected
                  ? 'drop-shadow(0 0 12px rgba(240,106,0,0.6))'
                  : isHovered
                    ? 'drop-shadow(0 0 8px rgba(240,106,0,0.35))'
                    : 'none',
                transition: 'filter 0.3s ease',
              }}
            >
              {paths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={fill}
                  stroke={isSelected ? '#f06a00' : isHovered ? '#f8fafc' : '#ffffff'}
                  strokeWidth={isSelected ? 1.6 : 0.8}
                  style={{ transition: 'fill 0.4s ease, stroke 0.3s ease, stroke-width 0.3s ease' }}
                />
              ))}
            </g>
          )
        })}

        {/* Province abbreviation labels with background */}
        {Object.entries(PROVINCE_LABELS).map(([name, label]) => {
          const isActive = hoveredProvince === name || selectedProvince === name
          const r = 6
          return (
            <g key={`label-${name}`} className="pointer-events-none select-none">
              <circle
                cx={label.x}
                cy={label.y - 1.5}
                r={r}
                fill={isActive ? 'rgba(240,106,0,0.85)' : 'rgba(15,23,42,0.6)'}
                stroke={isActive ? '#f06a00' : 'rgba(255,255,255,0.25)'}
                strokeWidth={0.5}
                style={{ transition: 'all 0.3s ease' }}
              />
              <text
                x={label.x}
                y={label.y + 0.5}
                textAnchor="middle"
                style={{
                  fontSize: '5px',
                  fontWeight: 900,
                  fill: '#ffffff',
                  letterSpacing: '0.3px',
                }}
              >
                {label.short}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Floating tooltip */}
      {hoveredProvince && hoveredProvince !== selectedProvince && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute pointer-events-none z-20 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 px-4 py-3 min-w-[160px]"
          style={{
            left: Math.min(tooltipPos.x + 16, 280),
            top: tooltipPos.y - 10,
          }}
        >
          <div className="font-black text-secondary text-sm tracking-tight">
            {hoveredProvince}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor:
                  COLOR_MAP[
                    getColorCode(provinceDataMap.get(hoveredProvince), mode)
                  ],
              }}
            />
            <span className="text-xs font-bold text-slate-500">
              {LABEL_MAP[getColorCode(provinceDataMap.get(hoveredProvince), mode)]}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
