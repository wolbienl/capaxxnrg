#!/usr/bin/env node

/**
 * Statische Sitemap Generator
 * 
 * Genereert een statische sitemap.xml op basis van routes configuratie
 */

const fs = require('fs');
const path = require('path');

// Import routes (we gebruiken een simpele versie hier)
const SITE_URL = 'https://capaxx-energy.nl';

const routes = [
  { path: '/', priority: 1.0, changeFreq: 'weekly' },
  
  // Oplossingen
  { path: '/oplossingen/', priority: 0.9, changeFreq: 'weekly' },
  { path: '/oplossingen/zonnepanelen/', priority: 0.8, changeFreq: 'monthly' },
  { path: '/oplossingen/energieopslag/', priority: 0.8, changeFreq: 'monthly' },
  { path: '/oplossingen/laadinfra/', priority: 0.8, changeFreq: 'monthly' },
  { path: '/oplossingen/solar-carports/', priority: 0.8, changeFreq: 'monthly' },
  { path: '/oplossingen/ems/', priority: 0.8, changeFreq: 'monthly' },
  
  // Overige pagina's
  { path: '/over-ons/', priority: 0.9, changeFreq: 'monthly' },
  { path: '/contact/', priority: 0.9, changeFreq: 'monthly' },
  { path: '/werkwijze/', priority: 0.9, changeFreq: 'monthly' },
  { path: '/cases/', priority: 0.8, changeFreq: 'weekly' },
  { path: '/sectoren/', priority: 0.8, changeFreq: 'monthly' },
  
  // Advies
  { path: '/advies/', priority: 0.8, changeFreq: 'monthly' },
  { path: '/advies/breeam/', priority: 0.7, changeFreq: 'monthly' },
  { path: '/advies/energielabels/', priority: 0.7, changeFreq: 'monthly' },
  { path: '/advies/esg/', priority: 0.7, changeFreq: 'monthly' },
  { path: '/advies/paris-proof/', priority: 0.7, changeFreq: 'monthly' },
];

const currentDate = new Date().toISOString().split('T')[0];

// Genereer sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changeFreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

// Schrijf naar public folder
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap, 'utf-8');
console.log('✅ Sitemap generated successfully at public/sitemap.xml');
console.log(`📊 Total URLs: ${routes.length}`);
