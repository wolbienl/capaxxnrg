#!/usr/bin/env npx tsx

/**
 * Aggregeert congestiedata per voedingsgebied-cluster voor Overijssel.
 *
 * Gebruik: npx tsx scripts/process-overijssel-data.ts
 */

import fs from 'fs'
import path from 'path'

const CSV_DIR = path.join(process.cwd(), 'congestiedata csv')
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/overijssel-congestion-data.json')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readCsv(filename: string): string[][] {
  const raw = fs.readFileSync(path.join(CSV_DIR, filename), 'utf-8')
  return raw.split('\n').filter((l) => l.trim()).map((l) => l.split(';'))
}

function parseNum(val: string | undefined): number {
  if (!val || val.trim() === '') return 0
  return parseFloat(val.replace(',', '.')) || 0
}

// ---------------------------------------------------------------------------
// Voedingsgebied clusters – groepen VGs die samen één kaartgebied vormen
// ---------------------------------------------------------------------------

interface ClusterDef {
  name: string
  vgIds: string[]
  gemeenten: string[] // CBS gemeente codes
}

const CLUSTERS: ClusterDef[] = [
  { name: 'Zwolle', vgIds: ['ZLF', 'ZLH', 'ZLW'], gemeenten: ['GM0193'] },
  { name: 'Kampen', vgIds: ['KP', 'ISM'], gemeenten: ['GM0166'] },
  { name: 'Almelo', vgIds: ['AMLM', 'AMLU'], gemeenten: ['GM0141', 'GM0189'] },
  { name: 'Deventer', vgIds: ['DVTB', 'DVTP'], gemeenten: ['GM0150'] },
  { name: 'Enschede', vgIds: ['ESDH', 'ESDM', 'ESDV', 'ESDW'], gemeenten: ['GM0153'] },
  { name: 'Hengelo', vgIds: ['HGLB', 'HGLW'], gemeenten: ['GM0164', 'GM0147'] },
  { name: 'Steenwijkerland', vgIds: ['SW', 'VO', 'VLH'], gemeenten: ['GM1708'] },
  { name: 'Hardenberg', vgIds: ['HDB', 'DDV'], gemeenten: ['GM0160'] },
  { name: 'Hof van Twente', vgIds: ['GO'], gemeenten: ['GM1735'] },
  { name: 'Haaksbergen', vgIds: ['HBG'], gemeenten: ['GM0158'] },
  { name: 'Losser', vgIds: ['LS'], gemeenten: ['GM0168'] },
  { name: 'Hellendoorn', vgIds: ['NVD'], gemeenten: ['GM0163'] },
  { name: 'Oldenzaal', vgIds: ['ODZ'], gemeenten: ['GM0173', 'GM1774'] },
  { name: 'Olst-Wijhe', vgIds: ['OL'], gemeenten: ['GM1773'] },
  { name: 'Ommen', vgIds: ['OMD'], gemeenten: ['GM0175', 'GM0148'] },
  { name: 'Raalte', vgIds: ['RT'], gemeenten: ['GM0177'] },
  { name: 'Rijssen-Holten', vgIds: ['RS'], gemeenten: ['GM1742'] },
  { name: 'Tubbergen', vgIds: ['TBG'], gemeenten: ['GM0183'] },
  { name: 'Twenterand', vgIds: ['VH'], gemeenten: ['GM1700'] },
  { name: 'Zwartewaterland', vgIds: ['ZS'], gemeenten: ['GM1896', 'GM0180'] },
]

const VG_TO_CLUSTER = new Map<string, string>()
const GEMEENTE_TO_CLUSTER = new Map<string, string>()

for (const c of CLUSTERS) {
  for (const vg of c.vgIds) VG_TO_CLUSTER.set(vg, c.name)
  for (const gm of c.gemeenten) GEMEENTE_TO_CLUSTER.set(gm, c.name)
}

const ALL_VG_IDS = new Set(CLUSTERS.flatMap((c) => c.vgIds))

// ---------------------------------------------------------------------------
// Cluster aggregation state
// ---------------------------------------------------------------------------

interface ClusterAgg {
  name: string
  vgIds: string[]
  gemeenten: string[]
  afnameColors: Record<number, number>
  opwekColors: Record<number, number>
  netbeheerders: Set<string>
  capacity: {
    aanwezigeAfname: number; benodigdeAfname: number
    aanwezigeInvoeding: number; benodigdeInvoeding: number
    wachtrijAfname: number; wachtrijInvoeding: number
    verzoekAfname: number; verzoekInvoeding: number
  }
  projecten: { naam: string; jaar: number; netbeheerder: string }[]
  jaartalOpgelostAfname: number[]
  jaartalOpgelostInvoeding: number[]
}

function makeCluster(def: ClusterDef): ClusterAgg {
  return {
    ...def,
    afnameColors: { [-1]: 0, 0: 0, 1: 0, 2: 0, 3: 0 },
    opwekColors: { [-1]: 0, 0: 0, 1: 0, 2: 0, 3: 0 },
    netbeheerders: new Set(),
    capacity: {
      aanwezigeAfname: 0, benodigdeAfname: 0,
      aanwezigeInvoeding: 0, benodigdeInvoeding: 0,
      wachtrijAfname: 0, wachtrijInvoeding: 0,
      verzoekAfname: 0, verzoekInvoeding: 0,
    },
    projecten: [],
    jaartalOpgelostAfname: [],
    jaartalOpgelostInvoeding: [],
  }
}

const clusters = new Map<string, ClusterAgg>()
for (const def of CLUSTERS) clusters.set(def.name, makeCluster(def))

// ---------------------------------------------------------------------------
// 1. congestie_pc6.csv → kleurcodes per voedingsgebied-cluster
// ---------------------------------------------------------------------------

console.log('Lezen congestie_pc6.csv …')
const pc6Rows = readCsv('congestie_pc6.csv')

for (let i = 1; i < pc6Rows.length; i++) {
  const row = pc6Rows[i]
  const vgId = row[3]?.trim()
  const rnb = row[6]?.trim()
  if (!vgId || !ALL_VG_IDS.has(vgId)) continue

  const clusterName = VG_TO_CLUSTER.get(vgId)!
  const cluster = clusters.get(clusterName)!

  const afname = parseInt(row[1]) || 0
  const opwek = parseInt(row[2]) || 0

  cluster.afnameColors[afname] = (cluster.afnameColors[afname] || 0) + 1
  cluster.opwekColors[opwek] = (cluster.opwekColors[opwek] || 0) + 1
  if (rnb) cluster.netbeheerders.add(rnb)
}

console.log(`  → ${pc6Rows.length - 1} postcodes verwerkt`)

// ---------------------------------------------------------------------------
// 2. voedingsgebieden.csv → capaciteitsdata per cluster
// ---------------------------------------------------------------------------

console.log('Lezen voedingsgebieden.csv …')
const vgRows = readCsv('voedingsgebieden.csv')

const vgLatest = new Map<string, string[]>()
for (let i = 1; i < vgRows.length; i++) {
  const row = vgRows[i]
  const vgId = row[0]?.trim()
  const jaar = parseNum(row[1])
  if (!vgId || !ALL_VG_IDS.has(vgId)) continue
  const existing = vgLatest.get(vgId)
  if (!existing || parseNum(existing[1]) < jaar) {
    vgLatest.set(vgId, row)
  }
}

for (const [vgId, row] of vgLatest) {
  const clusterName = VG_TO_CLUSTER.get(vgId)
  if (!clusterName) continue
  const c = clusters.get(clusterName)!

  c.capacity.aanwezigeInvoeding += parseNum(row[2])
  c.capacity.aanwezigeAfname += parseNum(row[3])
  c.capacity.benodigdeInvoeding += parseNum(row[4])
  c.capacity.benodigdeAfname += parseNum(row[5])
  c.capacity.verzoekInvoeding += parseNum(row[6])
  c.capacity.verzoekAfname += parseNum(row[7])
  c.capacity.wachtrijInvoeding += parseNum(row[8])
  c.capacity.wachtrijAfname += parseNum(row[9])

  const rnb = row[17]?.trim()
  if (rnb) c.netbeheerders.add(rnb)

  const jaOpgelostInv = parseNum(row[12])
  const jaOpgelostAfn = parseNum(row[13])
  if (jaOpgelostInv > 2000) c.jaartalOpgelostInvoeding.push(jaOpgelostInv)
  if (jaOpgelostAfn > 2000) c.jaartalOpgelostAfname.push(jaOpgelostAfn)
}

console.log(`  → ${vgLatest.size} voedingsgebieden (meest recent jaar)`)

// ---------------------------------------------------------------------------
// 3. projecten.csv → projecten per cluster
// ---------------------------------------------------------------------------

console.log('Lezen projecten.csv …')
const projRows = readCsv('projecten.csv')

for (let i = 1; i < projRows.length; i++) {
  const row = projRows[i]
  const naam = row[1]?.trim()
  const gebiedId = row[2]?.trim()
  const jaar = parseNum(row[4])
  const netbeheerder = row[9]?.trim() || ''

  if (!naam || !gebiedId) continue

  const clusterName = VG_TO_CLUSTER.get(gebiedId)
  if (!clusterName) continue

  const c = clusters.get(clusterName)!
  if (!c.projecten.some((p) => p.naam === naam)) {
    c.projecten.push({ naam, jaar: jaar || 0, netbeheerder })
  }
}

console.log(`  → ${projRows.length - 1} projectrijen verwerkt`)

// ---------------------------------------------------------------------------
// Determine dominant color code
// ---------------------------------------------------------------------------

function dominantColor(colorMap: Record<number, number>): number {
  const total = Object.entries(colorMap)
    .filter(([k]) => Number(k) >= 0)
    .reduce((s, [, v]) => s + v, 0)
  if (total === 0) return -1

  for (const code of [3, 2, 1]) {
    if ((colorMap[code] || 0) / total >= 0.15) return code
  }
  return 0
}

// ---------------------------------------------------------------------------
// Output
// ---------------------------------------------------------------------------

const gemeenteToCluster: Record<string, string> = {}
for (const [gm, cl] of GEMEENTE_TO_CLUSTER) gemeenteToCluster[gm] = cl

const clusterOutput = CLUSTERS.map((def) => {
  const c = clusters.get(def.name)!
  return {
    id: def.name.toLowerCase().replace(/[- ]/g, '-'),
    name: def.name,
    vgIds: def.vgIds,
    gemeenten: def.gemeenten,
    afname: {
      colorCode: dominantColor(c.afnameColors),
      colorDistribution: { ...c.afnameColors },
    },
    invoeding: {
      colorCode: dominantColor(c.opwekColors),
      colorDistribution: { ...c.opwekColors },
    },
    capacity: {
      aanwezigeAfname: Math.round(c.capacity.aanwezigeAfname),
      benodigdeAfname: Math.round(c.capacity.benodigdeAfname),
      aanwezigeInvoeding: Math.round(c.capacity.aanwezigeInvoeding),
      benodigdeInvoeding: Math.round(c.capacity.benodigdeInvoeding),
      wachtrijAfname: Math.round(c.capacity.wachtrijAfname),
      wachtrijInvoeding: Math.round(c.capacity.wachtrijInvoeding),
      verzoekAfname: Math.round(c.capacity.verzoekAfname),
      verzoekInvoeding: Math.round(c.capacity.verzoekInvoeding),
    },
    netbeheerders: [...c.netbeheerders].filter(Boolean).sort(),
    projecten: c.projecten.sort((a, b) => a.jaar - b.jaar).slice(0, 10),
    verwachtOpgelost: {
      afname: c.jaartalOpgelostAfname.length ? Math.max(...c.jaartalOpgelostAfname) : null,
      invoeding: c.jaartalOpgelostInvoeding.length ? Math.max(...c.jaartalOpgelostInvoeding) : null,
    },
  }
})

const totals = {
  wachtrijAfname: 0,
  wachtrijInvoeding: 0,
  aantalProjecten: 0,
  gebiedenMetCongestie: 0,
}

for (const c of clusterOutput) {
  totals.wachtrijAfname += c.capacity.wachtrijAfname
  totals.wachtrijInvoeding += c.capacity.wachtrijInvoeding
  totals.aantalProjecten += c.projecten.length
  if (c.afname.colorCode >= 2 || c.invoeding.colorCode >= 2) {
    totals.gebiedenMetCongestie++
  }
}

const output = {
  voedingsgebieden: clusterOutput,
  gemeenteToCluster: gemeenteToCluster,
  totals,
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8')
console.log(`\n✓ Output geschreven naar ${OUTPUT_PATH}`)
console.log(`  ${clusterOutput.length} voedingsgebied-clusters`)
console.log(`  ${totals.aantalProjecten} projecten`)
console.log(`  ${totals.gebiedenMetCongestie} gebieden met congestie`)

for (const c of clusterOutput) {
  const af = c.afname.colorCode
  const inv = c.invoeding.colorCode
  console.log(`  ${c.name.padEnd(20)} afname=${af} invoeding=${inv} wachtrij=${c.capacity.wachtrijAfname}/${c.capacity.wachtrijInvoeding} MW`)
}
