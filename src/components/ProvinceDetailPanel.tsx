'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Zap, Wrench, ArrowRight, MapPin, Clock, Users, BarChart3 } from 'lucide-react'

interface ProvinceInfo {
  id: string
  name: string
  afname: { colorCode: number }
  invoeding: { colorCode: number }
  capacity: {
    aanwezigeAfname: number
    benodigdeAfname: number
    aanwezigeInvoeding: number
    benodigdeInvoeding: number
    wachtrijAfname: number
    wachtrijInvoeding: number
    verzoekAfname: number
    verzoekInvoeding: number
  }
  netbeheerders: string[]
  projecten: { naam: string; jaar: number; netbeheerder: string }[]
  verwachtOpgelost: { afname: number | null; invoeding: number | null }
}

interface TotalsInfo {
  wachtrijAfname: number
  wachtrijInvoeding: number
  aantalProjecten: number
  provinciesMetCongestie: number
}

interface ProvinceDetailPanelProps {
  province: ProvinceInfo | null
  totals: TotalsInfo
  allProvinces: ProvinceInfo[]
  mode: 'afname' | 'invoeding'
  onClose: () => void
}

const STATUS: Record<number, { bg: string; text: string; label: string }> = {
  [-1]: { bg: 'bg-slate-200', text: 'text-slate-600', label: 'Geen data' },
  0: { bg: 'bg-emerald-400', text: 'text-emerald-700', label: 'Beschikbaar' },
  1: { bg: 'bg-amber-400', text: 'text-amber-700', label: 'Beperkt' },
  2: { bg: 'bg-orange-500', text: 'text-orange-700', label: 'Krap' },
  3: { bg: 'bg-red-500', text: 'text-red-700', label: 'Vol' },
}

const BAR_COLORS: Record<number, string> = {
  [-1]: '#cbd5e1', 0: '#34d399', 1: '#fbbf24', 2: '#f97316', 3: '#ef4444',
}

function getModeData(province: ProvinceInfo, mode: 'afname' | 'invoeding') {
  const isAfname = mode === 'afname'
  return {
    colorCode: isAfname ? province.afname.colorCode : province.invoeding.colorCode,
    aanwezig: isAfname ? province.capacity.aanwezigeAfname : province.capacity.aanwezigeInvoeding,
    benodigd: isAfname ? province.capacity.benodigdeAfname : province.capacity.benodigdeInvoeding,
    wachtrij: isAfname ? province.capacity.wachtrijAfname : province.capacity.wachtrijInvoeding,
    verzoeken: isAfname ? province.capacity.verzoekAfname : province.capacity.verzoekInvoeding,
    verwachtOpgelost: isAfname ? province.verwachtOpgelost.afname : province.verwachtOpgelost.invoeding,
  }
}

function CapacityBar({ aanwezig, benodigd, colorCode }: { aanwezig: number; benodigd: number; colorCode: number }) {
  const pct = aanwezig > 0 ? Math.min((benodigd / aanwezig) * 100, 100) : 100
  return (
    <div>
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Benodigd / Beschikbaar</span>
        <span className="text-xs font-bold text-white/80">
          {Math.round(pct)}%
        </span>
      </div>
      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ backgroundColor: BAR_COLORS[colorCode] }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] font-bold text-white/40">
          Benodigd: {benodigd.toLocaleString('nl-NL')} MW
        </span>
        <span className="text-[10px] font-bold text-white/40">
          Beschikbaar: {aanwezig.toLocaleString('nl-NL')} MW
        </span>
      </div>
    </div>
  )
}

function StatRow({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-b-0">
      <div className="flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-bold text-white/50">{label}</span>
      </div>
      <span className="text-sm font-black text-white tracking-tight">{value}</span>
    </div>
  )
}

export default function ProvinceDetailPanel({
  province,
  totals,
  allProvinces,
  mode,
  onClose,
}: ProvinceDetailPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {province ? (
        <motion.div
          key={`${province.id}-${mode}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 lg:p-6 relative overflow-hidden max-h-[calc(100vh-180px)] overflow-y-auto scrollbar-thin"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>

          {(() => {
            const d = getModeData(province, mode)
            const status = STATUS[d.colorCode]
            const modeLabel = mode === 'afname' ? 'Afname' : 'Invoeding'

            return (
              <>
                {/* Header */}
                <div className="mb-5 relative">
                  <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
                    {province.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${status.bg} ${status.text}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {status.label}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/50 uppercase tracking-wider">
                      {modeLabel}
                    </span>
                  </div>
                </div>

                {/* Key stats */}
                <div className="bg-white/[0.03] rounded-xl border border-white/5 px-4 mb-4">
                  <StatRow icon={Zap} label="Wachtrij" value={`${d.wachtrij.toLocaleString('nl-NL')} MW`} />
                  <StatRow icon={Users} label="Wachtenden" value={d.verzoeken.toLocaleString('nl-NL')} />
                  {d.verwachtOpgelost && (
                    <StatRow icon={Clock} label="Verwacht opgelost" value={String(d.verwachtOpgelost)} />
                  )}
                </div>

                {/* Netbeheerders */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {province.netbeheerders.map((nb) => (
                    <span
                      key={nb}
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/10 text-white/60 uppercase tracking-wider"
                    >
                      {nb}
                    </span>
                  ))}
                </div>

                {/* CAPAXX CTA */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-xl text-sm font-black text-primary transition-colors"
                >
                  Advies voor {province.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            )
          })()}
        </motion.div>
      ) : (
        <motion.div
          key={`totals-${mode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-[2rem] p-5 lg:p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

          <div className="mb-5">
            <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight">
              Nederland totaal
            </h3>
            <p className="text-xs font-bold text-white/40 mt-1">
              {mode === 'afname' ? 'Afname' : 'Invoeding'} — alle 12 provincies
            </p>
          </div>

          {/* Aggregated capacity */}
          {(() => {
            const isAfname = mode === 'afname'
            const aanwezig = allProvinces.reduce((s, p) => s + (isAfname ? p.capacity.aanwezigeAfname : p.capacity.aanwezigeInvoeding), 0)
            const benodigd = allProvinces.reduce((s, p) => s + (isAfname ? p.capacity.benodigdeAfname : p.capacity.benodigdeInvoeding), 0)
            const wachtrij = isAfname ? totals.wachtrijAfname : totals.wachtrijInvoeding

            return (
              <>
                <div className="bg-white/[0.03] rounded-xl border border-white/5 px-4 mb-5">
                  <StatRow icon={Zap} label="Totale wachtrij" value={`${wachtrij.toLocaleString('nl-NL')} MW`} />
                  <StatRow icon={BarChart3} label="Provincies met congestie" value={`${totals.provinciesMetCongestie} / 12`} />
                  <StatRow icon={Wrench} label="Geplande uitbreidingen" value={totals.aantalProjecten.toLocaleString('nl-NL')} />
                </div>
              </>
            )
          })()}

          <div className="bg-white/[0.04] rounded-xl p-3 border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <p className="text-xs font-bold text-white/40">
              Selecteer een provincie voor gedetailleerde informatie
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
