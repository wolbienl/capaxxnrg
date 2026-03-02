#!/usr/bin/env npx tsx

/**
 * Extraheert Overijssel gemeente SVG-paden uit Nederland_gemeenten_2021.svg.
 *
 * Gebruik: npx tsx scripts/extract-overijssel-paths.ts
 */

import fs from 'fs'
import path from 'path'

const SVG_PATH = path.join(process.env.HOME!, 'Downloads', 'Nederland_gemeenten_2021.svg')
const OUTPUT_PATH = path.join(process.cwd(), 'src/data/overijssel-gemeente-paths.json')

const OVERIJSSEL_GEMEENTEN: Record<string, string> = {
  GM0141: 'Almelo',
  GM0147: 'Borne',
  GM0148: 'Dalfsen',
  GM0150: 'Deventer',
  GM0153: 'Enschede',
  GM0158: 'Haaksbergen',
  GM0160: 'Hardenberg',
  GM0163: 'Hellendoorn',
  GM0164: 'Hengelo',
  GM0166: 'Kampen',
  GM0168: 'Losser',
  GM0173: 'Oldenzaal',
  GM0175: 'Ommen',
  GM0177: 'Raalte',
  GM0180: 'Staphorst',
  GM0183: 'Tubbergen',
  GM0189: 'Wierden',
  GM0193: 'Zwolle',
  GM1700: 'Twenterand',
  GM1708: 'Steenwijkerland',
  GM1742: 'Rijssen-Holten',
  GM1773: 'Olst-Wijhe',
  GM1774: 'Dinkelland',
  GM1735: 'Hof van Twente',
  GM1896: 'Zwartewaterland',
}

function extractNumbers(d: string): number[] {
  const nums: number[] = []
  const re = /[-+]?\d*\.?\d+/g
  let m
  while ((m = re.exec(d)) !== null) nums.push(parseFloat(m[0]))
  return nums
}

function computeBounds(paths: string[]): { minX: number; minY: number; maxX: number; maxY: number } {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity

  for (const d of paths) {
    const tokens = d.replace(/,/g, ' ').split(/(?=[A-Za-z])/)
    let cx = 0, cy = 0

    for (const token of tokens) {
      const cmd = token.trim()[0]
      if (!cmd) continue
      const nums = extractNumbers(token.slice(1))
      const isRelative = cmd === cmd.toLowerCase()

      switch (cmd.toUpperCase()) {
        case 'M': case 'L': case 'T':
          for (let i = 0; i < nums.length; i += 2) {
            cx = isRelative ? cx + nums[i] : nums[i]
            cy = isRelative ? cy + nums[i + 1] : nums[i + 1]
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx)
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy)
          }
          break
        case 'H':
          for (const n of nums) {
            cx = isRelative ? cx + n : n
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx)
          }
          break
        case 'V':
          for (const n of nums) {
            cy = isRelative ? cy + n : n
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy)
          }
          break
        case 'C':
          for (let i = 0; i < nums.length; i += 6) {
            const ex = isRelative ? cx + nums[i + 4] : nums[i + 4]
            const ey = isRelative ? cy + nums[i + 5] : nums[i + 5]
            for (let j = 0; j < 6; j += 2) {
              const px = isRelative ? cx + nums[i + j] : nums[i + j]
              const py = isRelative ? cy + nums[i + j + 1] : nums[i + j + 1]
              minX = Math.min(minX, px); maxX = Math.max(maxX, px)
              minY = Math.min(minY, py); maxY = Math.max(maxY, py)
            }
            cx = ex; cy = ey
          }
          break
        case 'S': case 'Q':
          for (let i = 0; i < nums.length; i += 4) {
            const ex = isRelative ? cx + nums[i + 2] : nums[i + 2]
            const ey = isRelative ? cy + nums[i + 3] : nums[i + 3]
            const px = isRelative ? cx + nums[i] : nums[i]
            const py = isRelative ? cy + nums[i + 1] : nums[i + 1]
            minX = Math.min(minX, px); maxX = Math.max(maxX, px)
            minY = Math.min(minY, py); maxY = Math.max(maxY, py)
            cx = ex; cy = ey
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx)
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy)
          }
          break
        case 'A':
          for (let i = 0; i < nums.length; i += 7) {
            cx = isRelative ? cx + nums[i + 5] : nums[i + 5]
            cy = isRelative ? cy + nums[i + 6] : nums[i + 6]
            minX = Math.min(minX, cx); maxX = Math.max(maxX, cx)
            minY = Math.min(minY, cy); maxY = Math.max(maxY, cy)
          }
          break
        case 'Z':
          break
      }
    }
  }

  return { minX, minY, maxX, maxY }
}

// ---------------------------------------------------------------------------

console.log('Lezen SVG …')
const svg = fs.readFileSync(SVG_PATH, 'utf-8')

const pathRegex = /<path\s+id="(GM\d+)"\s+class="[^"]*"\s+d="([^"]+)"/g

const result: Record<string, { name: string; paths: string[] }> = {}
const allPaths: string[] = []

let match
while ((match = pathRegex.exec(svg)) !== null) {
  const [, id, d] = match
  if (OVERIJSSEL_GEMEENTEN[id]) {
    if (!result[id]) {
      result[id] = { name: OVERIJSSEL_GEMEENTEN[id], paths: [] }
    }
    const cleaned = d.replace(/\s+/g, ' ').trim()
    result[id].paths.push(cleaned)
    allPaths.push(cleaned)
  }
}

const found = Object.keys(result).length
console.log(`  → ${found} / ${Object.keys(OVERIJSSEL_GEMEENTEN).length} gemeenten gevonden`)

if (found === 0) {
  console.error('Geen gemeenten gevonden! Controleer het SVG-bestand.')
  process.exit(1)
}

const missing = Object.keys(OVERIJSSEL_GEMEENTEN).filter((k) => !result[k])
if (missing.length > 0) {
  console.warn(`  ⚠ Ontbrekend: ${missing.map((k) => `${k} (${OVERIJSSEL_GEMEENTEN[k]})`).join(', ')}`)
}

const bounds = computeBounds(allPaths)
const padding = 5
const viewBox = {
  x: Math.floor(bounds.minX - padding),
  y: Math.floor(bounds.minY - padding),
  width: Math.ceil(bounds.maxX - bounds.minX + padding * 2),
  height: Math.ceil(bounds.maxY - bounds.minY + padding * 2),
}

console.log(`  → ViewBox: ${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`)

const output = {
  viewBox: `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`,
  gemeenten: result,
}

fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8')
console.log(`\n✓ Output geschreven naar ${OUTPUT_PATH}`)
