#!/usr/bin/env npx tsx

/**
 * Sitemap Generator — single source of truth
 *
 * Leest routes uit src/lib/config/routes.ts en scant content/cases/ voor
 * dynamische case-pagina's. Schrijft resultaat naar public/sitemap.xml.
 *
 * Gebruik:  npx tsx scripts/generate-sitemap.ts
 * Wordt automatisch aangeroepen door deploy-shock.sh
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getAllRoutes } from '../src/lib/config/routes'

const SITE_URL = 'https://capaxx-energy.nl'
const today = new Date().toISOString().split('T')[0]

interface SitemapEntry {
  path: string
  priority: number
  changeFreq: string
  lastmod: string
}

function getCaseSlugs(): string[] {
  const casesDir = path.join(process.cwd(), 'content', 'cases')
  if (!fs.existsSync(casesDir)) return []

  return fs
    .readdirSync(casesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const raw = fs.readFileSync(path.join(casesDir, f), 'utf-8')
      const { data } = matter(raw)
      return (data as { slug?: string }).slug || f.replace('.mdx', '')
    })
}

function buildEntries(): SitemapEntry[] {
  const staticRoutes = getAllRoutes()

  const entries: SitemapEntry[] = staticRoutes.map((r) => ({
    path: r.path.endsWith('/') ? r.path : `${r.path}/`,
    priority: r.priority,
    changeFreq: r.changeFreq,
    lastmod: today,
  }))

  const knownCasePaths = new Set(entries.map((e) => e.path))

  for (const slug of getCaseSlugs()) {
    const casePath = `/cases/${slug}/`
    if (!knownCasePaths.has(casePath)) {
      entries.push({
        path: casePath,
        priority: 0.7,
        changeFreq: 'monthly',
        lastmod: today,
      })
    }
  }

  // /login niet in sitemap
  return entries.filter((e) => e.path !== '/login/')
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${SITE_URL}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changeFreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

const entries = buildEntries()
const xml = toXml(entries)

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml')
fs.writeFileSync(outPath, xml, 'utf-8')

console.log(`✅ Sitemap gegenereerd: public/sitemap.xml (${entries.length} URLs)`)
