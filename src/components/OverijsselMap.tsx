'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import gemeentePaths from '@/data/overijssel-gemeente-paths.json'

interface VoedingsgebiedData {
  id: string
  name: string
  gemeenten: string[]
  afname: { colorCode: number }
  invoeding: { colorCode: number }
}

interface OverijsselMapProps {
  data: VoedingsgebiedData[]
  gemeenteToCluster: Record<string, string>
  mode: 'afname' | 'invoeding'
  selectedCluster: string | null
  onSelectCluster: (name: string | null) => void
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

function getColorCode(vg: VoedingsgebiedData | undefined, mode: 'afname' | 'invoeding'): number {
  if (!vg) return -1
  return mode === 'afname' ? vg.afname.colorCode : vg.invoeding.colorCode
}

const typedPaths = gemeentePaths as {
  viewBox: string
  gemeenten: Record<string, { name: string; paths: string[] }>
}

export default function OverijsselMap({
  data,
  gemeenteToCluster,
  mode,
  selectedCluster,
  onSelectCluster,
}: OverijsselMapProps) {
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect()
    if (rect) {
      setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }, [])

  const vgMap = new Map(data.map((v) => [v.name, v]))

  return (
    <div className="relative w-full">
      <svg
        viewBox={typedPaths.viewBox}
        className="w-full h-auto max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Object.entries(typedPaths.gemeenten).map(([gmCode, gem]) => {
          const clusterName = gemeenteToCluster[gmCode]
          const vg = clusterName ? vgMap.get(clusterName) : undefined
          const colorCode = getColorCode(vg, mode)
          const isSelected = selectedCluster === clusterName
          const isHovered = hoveredCluster === clusterName
          const fill = isHovered ? COLOR_MAP_HOVER[colorCode] : COLOR_MAP[colorCode]

          return (
            <g
              key={gmCode}
              onClick={() => {
                if (clusterName) onSelectCluster(isSelected ? null : clusterName)
              }}
              onMouseEnter={() => clusterName && setHoveredCluster(clusterName)}
              onMouseLeave={() => setHoveredCluster(null)}
              onMouseMove={handleMouseMove}
              className="cursor-pointer"
              style={{
                filter: isSelected
                  ? 'drop-shadow(0 0 6px rgba(240,106,0,0.6))'
                  : isHovered
                    ? 'drop-shadow(0 0 4px rgba(240,106,0,0.35))'
                    : 'none',
                transition: 'filter 0.3s ease',
              }}
            >
              {gem.paths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill={fill}
                  stroke={isSelected ? '#f06a00' : isHovered ? '#f8fafc' : '#ffffff'}
                  strokeWidth={isSelected ? 1.2 : 0.5}
                  style={{ transition: 'fill 0.4s ease, stroke 0.3s ease, stroke-width 0.3s ease' }}
                />
              ))}
            </g>
          )
        })}

        {/* Labels removed – hover tooltip provides cluster info */}
      </svg>

      {hoveredCluster && hoveredCluster !== selectedCluster && (
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
            {hoveredCluster}
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: COLOR_MAP[getColorCode(vgMap.get(hoveredCluster), mode)],
              }}
            />
            <span className="text-xs font-bold text-slate-500">
              {LABEL_MAP[getColorCode(vgMap.get(hoveredCluster), mode)]}
            </span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
