#!/usr/bin/env npx tsx

/**
 * Aggregeert congestiedata uit CSV-bestanden naar province-level JSON.
 *
 * Gebruik:  npx tsx scripts/process-congestion-data.ts
 */

import fs from 'fs'
import path from 'path'

const CSV_DIR = path.join(process.cwd(), 'congestiedata csv')
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/province-congestion-data.json')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function readCsv(filename: string): string[][] {
  const raw = fs.readFileSync(path.join(CSV_DIR, filename), 'utf-8')
  return raw
    .split('\n')
    .filter((l) => l.trim())
    .map((l) => l.split(';'))
}

function parseNum(val: string | undefined): number {
  if (!val || val.trim() === '') return 0
  return parseFloat(val.replace(',', '.')) || 0
}

// ---------------------------------------------------------------------------
// PC2 → Provincie mapping
// ---------------------------------------------------------------------------

const PC2_TO_PROVINCE: Record<string, string> = {}

const ranges: [number, number, string][] = [
  [10, 20, 'Noord-Holland'],
  [21, 29, 'Zuid-Holland'],
  [30, 35, 'Utrecht'],
  [36, 39, 'Gelderland'],
  [40, 42, 'Noord-Brabant'],
  [43, 45, 'Zeeland'],
  [46, 55, 'Noord-Brabant'],
  [56, 63, 'Limburg'],
  [64, 69, 'Gelderland'],
  [70, 77, 'Overijssel'],
  [78, 79, 'Drenthe'],
  [80, 83, 'Flevoland'],
  [84, 92, 'Friesland'],
  [93, 94, 'Drenthe'],
  [95, 99, 'Groningen'],
]

for (const [from, to, prov] of ranges) {
  for (let i = from; i <= to; i++) PC2_TO_PROVINCE[String(i)] = prov
}

function postcodeToProvince(pc: string): string | null {
  const prefix = pc.substring(0, 2)
  return PC2_TO_PROVINCE[prefix] ?? null
}

// ---------------------------------------------------------------------------
// Congestiegebied → Provincie mapping
// ---------------------------------------------------------------------------

const CONGESTIE_TO_PROVINCE: Record<string, string> = {
  'Groningen West': 'Groningen',
  'Groningen Oost': 'Groningen',
  'Groningen 220/20': 'Groningen',
  'Eemshaven Midden': 'Groningen',
  'Musselkanaal': 'Groningen',
  'Friesland': 'Friesland',
  'Drenthe': 'Drenthe',
  'Overijssel': 'Overijssel',
  'Hengelo': 'Overijssel',
  'Zwolle Hessenweg': 'Overijssel',
  'Noordoostpolder': 'Flevoland',
  'Flevopolder, Utrecht en Gelderland': 'Gelderland',
  'Noord-Holland': 'Noord-Holland',
  'Noord-Holland Noord': 'Noord-Holland',
  'Noordelijk Zuid-Holland': 'Zuid-Holland',
  'Haven van Rotterdam': 'Zuid-Holland',
  'Maasvlakte': 'Zuid-Holland',
  'Westland': 'Zuid-Holland',
  'Crayestein': 'Zuid-Holland',
  'Zeeland': 'Zeeland',
  'Noord-Brabant': 'Noord-Brabant',
  'Limburg': 'Limburg',
}

// ---------------------------------------------------------------------------
// Province init
// ---------------------------------------------------------------------------

const PROVINCE_NAMES = [
  'Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland',
  'Gelderland', 'Utrecht', 'Noord-Holland', 'Zuid-Holland',
  'Zeeland', 'Noord-Brabant', 'Limburg',
]

interface ProvinceAgg {
  name: string
  id: string
  afnameColors: Record<number, number>
  opwekColors: Record<number, number>
  netbeheerders: Set<string>
  voedingsgebiedIds: Set<string>
  capaciteit: {
    aanwezigeAfname: number
    benodigdeAfname: number
    aanwezigeInvoeding: number
    benodigdeInvoeding: number
    wachtrijAfname: number
    wachtrijInvoeding: number
    verzoekAfname: number
    verzoekInvoeding: number
  }
  projecten: { naam: string; jaar: number; netbeheerder: string }[]
  congestieUrls: string[]
  jaartalOpgelostAfname: number[]
  jaartalOpgelostInvoeding: number[]
}

function makeProvince(name: string): ProvinceAgg {
  return {
    name,
    id: name.toLowerCase().replace(/[- ]/g, '-'),
    afnameColors: { [-1]: 0, 0: 0, 1: 0, 2: 0, 3: 0 },
    opwekColors: { [-1]: 0, 0: 0, 1: 0, 2: 0, 3: 0 },
    netbeheerders: new Set(),
    voedingsgebiedIds: new Set(),
    capaciteit: {
      aanwezigeAfname: 0, benodigdeAfname: 0,
      aanwezigeInvoeding: 0, benodigdeInvoeding: 0,
      wachtrijAfname: 0, wachtrijInvoeding: 0,
      verzoekAfname: 0, verzoekInvoeding: 0,
    },
    projecten: [],
    congestieUrls: [],
    jaartalOpgelostAfname: [],
    jaartalOpgelostInvoeding: [],
  }
}

const provinces = new Map<string, ProvinceAgg>()
for (const name of PROVINCE_NAMES) provinces.set(name, makeProvince(name))

// ---------------------------------------------------------------------------
// 1. congestie_pc6.csv → kleurcodes + netbeheerders + voedingsgebied mapping
// ---------------------------------------------------------------------------

console.log('Lezen congestie_pc6.csv …')
const pc6Rows = readCsv('congestie_pc6.csv')
const pc6Header = pc6Rows[0]

const voedingsgebiedToProvinces = new Map<string, Map<string, number>>()

for (let i = 1; i < pc6Rows.length; i++) {
  const row = pc6Rows[i]
  const postcode = row[0]?.trim()
  if (!postcode || postcode.length < 4) continue

  const afname = parseInt(row[1]) || 0
  const opwek = parseInt(row[2]) || 0
  const vgId = row[3]?.trim()
  const rnb = row[6]?.trim()

  const prov = postcodeToProvince(postcode)
  if (!prov) continue

  const p = provinces.get(prov)!
  p.afnameColors[afname] = (p.afnameColors[afname] || 0) + 1
  p.opwekColors[opwek] = (p.opwekColors[opwek] || 0) + 1
  if (rnb) p.netbeheerders.add(rnb)
  if (vgId) p.voedingsgebiedIds.add(vgId)

  // Track which province each voedingsgebied belongs to
  if (vgId) {
    if (!voedingsgebiedToProvinces.has(vgId)) {
      voedingsgebiedToProvinces.set(vgId, new Map())
    }
    const provMap = voedingsgebiedToProvinces.get(vgId)!
    provMap.set(prov, (provMap.get(prov) || 0) + 1)
  }
}

// Determine dominant province for each voedingsgebied
const voedingsgebiedProvince = new Map<string, string>()
for (const [vgId, provMap] of voedingsgebiedToProvinces) {
  let best = ''
  let bestCount = 0
  for (const [prov, count] of provMap) {
    if (count > bestCount) {
      best = prov
      bestCount = count
    }
  }
  voedingsgebiedProvince.set(vgId, best)
}

console.log(`  → ${pc6Rows.length - 1} postcodes verwerkt`)
console.log(`  → ${voedingsgebiedProvince.size} voedingsgebieden gemapt`)

// ---------------------------------------------------------------------------
// 2. voedingsgebieden.csv → capaciteitsdata per provincie
// ---------------------------------------------------------------------------

console.log('Lezen voedingsgebieden.csv …')
const vgRows = readCsv('voedingsgebieden.csv')

// Filter to most recent year per voedingsgebied
const vgLatest = new Map<string, string[]>()
for (let i = 1; i < vgRows.length; i++) {
  const row = vgRows[i]
  const vgId = row[0]?.trim()
  const jaar = parseNum(row[1])
  if (!vgId) continue
  const existing = vgLatest.get(vgId)
  if (!existing || parseNum(existing[1]) < jaar) {
    vgLatest.set(vgId, row)
  }
}

for (const [vgId, row] of vgLatest) {
  const prov = voedingsgebiedProvince.get(vgId)
  if (!prov) continue
  const p = provinces.get(prov)!
  p.capaciteit.aanwezigeInvoeding += parseNum(row[2])
  p.capaciteit.aanwezigeAfname += parseNum(row[3])
  p.capaciteit.benodigdeInvoeding += parseNum(row[4])
  p.capaciteit.benodigdeAfname += parseNum(row[5])
  p.capaciteit.verzoekInvoeding += parseNum(row[6])
  p.capaciteit.verzoekAfname += parseNum(row[7])
  p.capaciteit.wachtrijInvoeding += parseNum(row[8])
  p.capaciteit.wachtrijAfname += parseNum(row[9])

  const jaOpgelostInv = parseNum(row[12])
  const jaOpgelostAfn = parseNum(row[13])
  if (jaOpgelostInv > 2000) p.jaartalOpgelostInvoeding.push(jaOpgelostInv)
  if (jaOpgelostAfn > 2000) p.jaartalOpgelostAfname.push(jaOpgelostAfn)
}

console.log(`  → ${vgLatest.size} voedingsgebieden (meest recent jaar)`)

// ---------------------------------------------------------------------------
// 3. tennetgebieden.csv → congestie URLs per provincie
// ---------------------------------------------------------------------------

console.log('Lezen tennetgebieden.csv …')
const tgRows = readCsv('tennetgebieden.csv')

const tgLatest = new Map<string, string[]>()
for (let i = 1; i < tgRows.length; i++) {
  const row = tgRows[i]
  const gebied = row[19]?.trim()
  const jaar = parseNum(row[16])
  if (!gebied) continue
  const existing = tgLatest.get(gebied)
  if (!existing || parseNum(existing[16]) < jaar) {
    tgLatest.set(gebied, row)
  }
}

for (const [gebied, row] of tgLatest) {
  const prov = CONGESTIE_TO_PROVINCE[gebied]
  if (!prov) continue
  const url = row[22]?.trim()
  if (url) {
    const p = provinces.get(prov)!
    if (!p.congestieUrls.includes(url)) p.congestieUrls.push(url)
  }
}

console.log(`  → ${tgLatest.size} TenneT-gebieden verwerkt`)

// ---------------------------------------------------------------------------
// 4. projecten.csv → projecten per provincie
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

  const prov = voedingsgebiedProvince.get(gebiedId)
  if (!prov) continue

  const p = provinces.get(prov)!
  p.projecten.push({ naam, jaar: jaar || 0, netbeheerder })
}

console.log(`  → ${projRows.length - 1} projecten verwerkt`)

// ---------------------------------------------------------------------------
// Determine dominant color code per province
// ---------------------------------------------------------------------------

function dominantColor(colorMap: Record<number, number>): number {
  // Highest severity code that covers ≥15% of postcodes with data
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

const output = {
  provinces: PROVINCE_NAMES.map((name) => {
    const p = provinces.get(name)!
    return {
      id: p.id,
      name: p.name,
      afname: {
        colorCode: dominantColor(p.afnameColors),
        colorDistribution: Object.fromEntries(
          Object.entries(p.afnameColors).map(([k, v]) => [k, v])
        ),
      },
      invoeding: {
        colorCode: dominantColor(p.opwekColors),
        colorDistribution: Object.fromEntries(
          Object.entries(p.opwekColors).map(([k, v]) => [k, v])
        ),
      },
      capacity: {
        aanwezigeAfname: Math.round(p.capaciteit.aanwezigeAfname),
        benodigdeAfname: Math.round(p.capaciteit.benodigdeAfname),
        aanwezigeInvoeding: Math.round(p.capaciteit.aanwezigeInvoeding),
        benodigdeInvoeding: Math.round(p.capaciteit.benodigdeInvoeding),
        wachtrijAfname: Math.round(p.capaciteit.wachtrijAfname),
        wachtrijInvoeding: Math.round(p.capaciteit.wachtrijInvoeding),
        verzoekAfname: Math.round(p.capaciteit.verzoekAfname),
        verzoekInvoeding: Math.round(p.capaciteit.verzoekInvoeding),
      },
      netbeheerders: [...p.netbeheerders].filter(Boolean).sort(),
      projecten: p.projecten
        .sort((a, b) => a.jaar - b.jaar)
        .slice(0, 10),
      congestieUrls: p.congestieUrls,
      verwachtOpgelost: {
        afname: p.jaartalOpgelostAfname.length
          ? Math.max(...p.jaartalOpgelostAfname)
          : null,
        invoeding: p.jaartalOpgelostInvoeding.length
          ? Math.max(...p.jaartalOpgelostInvoeding)
          : null,
      },
    }
  }),
  totals: {
    wachtrijAfname: 0,
    wachtrijInvoeding: 0,
    aantalProjecten: 0,
    provinciesMetCongestie: 0,
  },
}

// Compute totals
for (const p of output.provinces) {
  output.totals.wachtrijAfname += p.capacity.wachtrijAfname
  output.totals.wachtrijInvoeding += p.capacity.wachtrijInvoeding
  output.totals.aantalProjecten += p.projecten.length
  if (p.afname.colorCode >= 2 || p.invoeding.colorCode >= 2) {
    output.totals.provinciesMetCongestie++
  }
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8')
console.log(`\n✓ Output geschreven naar ${OUTPUT_PATH}`)
console.log(`  ${output.provinces.length} provincies`)
console.log(`  ${output.totals.aantalProjecten} projecten`)
console.log(`  ${output.totals.provinciesMetCongestie} provincies met congestie`)
