# SEO Implementatie - CAPAXX Energy

## ✅ Geïmplementeerd

### Fase 1: Herbruikbare Foundation ✅

**Bestanden:**
- ✅ `src/lib/seo/constants.ts` - Centrale configuratie (bedrijfsinfo, Twente locatie)
- ✅ `src/lib/seo/types.ts` - TypeScript types voor SEO
- ✅ `src/lib/seo/metadata.ts` - Metadata generator functies
- ✅ `src/lib/seo/structured-data.ts` - JSON-LD schema generators
- ✅ `src/lib/config/routes.ts` - Route configuratie voor sitemap
- ✅ `src/components/seo/JsonLd.tsx` - Herbruikbaar structured data component

### Fase 2: Core SEO Files ✅

- ✅ `public/robots.txt` - Robots configuratie met AI crawler support
- ✅ `src/app/sitemap.ts` - Dynamische sitemap generator (21 pagina's)
- ✅ `src/app/layout.tsx` - Root layout met Organization schema en geo-targeting
- ✅ `src/app/not-found.tsx` - Komische 404 pagina

### Fase 3: Pagina Metadata & Structured Data ✅

**Alle routes hebben nu:**
- ✅ Volledige metadata (title, description, keywords, Open Graph, Twitter)
- ✅ JSON-LD structured data waar relevant
- ✅ Twente geo-targeting
- ✅ Canonical URLs

**Oplossingen (met Service Schema):**
- ✅ `/oplossingen` - Overzicht
- ✅ `/oplossingen/zonnepanelen` - Solar Panel Installation schema
- ✅ `/oplossingen/energieopslag` - Battery Storage schema
- ✅ `/oplossingen/laadinfra` - EV Charging Station schema
- ✅ `/oplossingen/solar-carports` - Solar Carport schema
- ✅ `/oplossingen/ems` - Product schema voor EMS

**Hoofdpagina's:**
- ✅ `/over-ons` - Over ons metadata
- ✅ `/contact` - LocalBusiness schema voor lokale SEO
- ✅ `/werkwijze` - Werkwijze metadata
- ✅ `/cases` - Cases metadata
- ✅ `/sectoren` - Sectoren metadata

**Advies pagina's (met Service Schema):**
- ✅ `/advies` - Advies overzicht
- ✅ `/advies/breeam` - BREEAM certificering
- ✅ `/advies/energielabels` - Energielabel verbetering
- ✅ `/advies/esg` - ESG rapportage
- ✅ `/advies/paris-proof` - Paris Proof advies

### Fase 4: Images & Validation ✅

- ✅ Open Graph fallback images geconfigureerd
- ✅ README voor dedicated OG images (`public/images/README-OG-IMAGES.md`)
- ✅ Build succesvol zonder errors
- ✅ Alle 21 pagina's worden correct gegenereerd

---

## 🎯 SEO Features

### 1. Metadata
- Complete Open Graph tags voor social media
- Twitter Card support
- Keywords optimalisatie met Twente focus
- Canonical URLs voor alle pagina's
- Viewport en theme-color configuratie

### 2. Structured Data (JSON-LD)
- ✅ **Organization Schema** - Bedrijfsinformatie op elke pagina
- ✅ **Website Schema** - Voor search actions
- ✅ **LocalBusiness Schema** - Contact pagina voor lokale SEO
- ✅ **Service Schemas** - Per oplossing (8x)
- ✅ **Product Schema** - Voor EMS systeem

### 3. Geo-Targeting Twente
- Latitude/Longitude: 52.2215, 6.8937 (Enschede)
- Service radius: 50km (heel Twente gebied)
- Geo meta tags in HTML
- "Twente" in meta descriptions
- Lokale keywords per pagina

### 4. LLM Optimalisatie
- Volledige content in meta descriptions
- `max-snippet: -1` voor complete snippets
- `max-image-preview: large` voor afbeeldingen
- Structured data voor machine-readability
- Semantische HTML structuur

### 5. AI Crawler Support
Expliciet toegestaan in robots.txt:
- GPTBot (OpenAI)
- Claude-Web (Anthropic)
- CCBot (Common Crawl)
- PerplexityBot
- ChatGPT-User

---

## 📊 Sitemap

21 pagina's automatisch gegenereerd:
- Homepage: priority 1.0
- Hoofdsecties: priority 0.9
- Sub-pagina's: priority 0.7-0.8
- Wijzigt automatisch mee bij toevoegen routes

**URL:** https://www.capaxxenergy.nl/sitemap.xml

---

## 🚀 Voordelen Herbruikbare Architectuur

### Nieuwe pagina toevoegen?
```typescript
// 1. Voeg toe aan routes.ts
export const ROUTES = {
  // ...
  newRoute: {
    path: '/nieuwe-pagina',
    priority: 0.8,
    changeFreq: 'monthly'
  }
}

// 2. Maak layout.tsx
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata = generatePageMetadata({
  title: 'Nieuwe Pagina',
  description: 'Beschrijving...',
  path: '/nieuwe-pagina'
});

// ✅ Klaar! Sitemap update automatisch
```

### Bedrijfsinfo wijzigen?
```typescript
// Alleen constants.ts aanpassen:
export const SITE_CONFIG = {
  contact: {
    phone: '+31532065066', // Wijzig hier
    email: 'info@capaxxenergy.nl' // Of hier
  }
  // ✅ Update overal automatisch!
}
```

---

## 🔍 Validatie Checklist

### Online Tools (TODO - handmatig testen)

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test: Homepage, Oplossingen, Contact
   - Check: Organization, LocalBusiness schemas

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Test: Alle JSON-LD schemas
   - Check: Geen errors, valide syntax

3. **Facebook Debugger**
   - URL: https://developers.facebook.com/tools/debug/
   - Test: Open Graph tags
   - Check: Afbeelding, titel, beschrijving

4. **Twitter Card Validator**
   - URL: https://cards-dev.twitter.com/validator
   - Test: Twitter card metadata
   - Check: Large image card

5. **Google Search Console**
   - Submit sitemap: https://www.capaxxenergy.nl/sitemap.xml
   - Check: robots.txt crawlability
   - Monitor: Indexering status

### Command Line Validatie
```bash
# Test sitemap
curl https://www.capaxxenergy.nl/sitemap.xml

# Test robots.txt
curl https://www.capaxxenergy.nl/robots.txt

# Test metadata van specifieke pagina
curl -s https://www.capaxxenergy.nl/oplossingen/energieopslag | grep -A 5 "og:title"
```

---

## 📝 TODO

### Hoge Prioriteit
1. ⚠️ **Open Graph Image maken** (1200x630px)
   - Zie: `public/images/README-OG-IMAGES.md`
   - Gebruik: Logo + tagline + brand colors
   - Plaats als: `public/images/og-default.jpg`

2. 🔍 **Validatie uitvoeren**
   - Test alle tools in checklist hierboven
   - Fix eventuele warnings
   - Submit sitemap in Google Search Console

### Medium Prioriteit
3. 📍 **Exacte adresgegevens toevoegen**
   - Update `src/lib/seo/constants.ts`
   - Voeg straatnaam en postcode toe indien gewenst

4. 🌐 **Social media links toevoegen**
   - LinkedIn, Twitter accounts
   - Update `SITE_CONFIG.social` in constants.ts

### Lage Prioriteit
5. 🖼️ **Pagina-specifieke OG images** (optioneel)
   - Per oplossing een unieke image
   - Voor betere social media sharing

---

## 📈 Impact

### Voor Gebruikers
- ✅ Betere vindbaarheid in Google (Twente regio)
- ✅ Mooiere social media previews
- ✅ Duidelijkere page titles in zoekresultaten

### Voor AI/LLMs
- ✅ Volledige content extractie mogelijk
- ✅ Structured data voor context
- ✅ Explicitie toestemming crawling

### Voor Onderhoud
- ⚡ **10x sneller** nieuwe pagina's toevoegen
- 🎯 **1 plek** om bedrijfsinfo te wijzigen
- 🔒 **Type-safe** met TypeScript
- 📦 **Geen duplicatie** door herbruikbare functies

---

## 🛠️ Technische Details

### Stack
- Next.js 16.1.5 (App Router)
- TypeScript
- Native Metadata API
- JSON-LD voor structured data

### Performance
- Server-side metadata generatie (geen client impact)
- Static page generation (21/21 pagina's)
- Optimale crawlability
- Fast page loads

### Best Practices
- ✅ Semantic HTML
- ✅ Canonical URLs
- ✅ Proper heading hierarchy
- ✅ Geo-targeting meta tags
- ✅ Viewport configuration
- ✅ Open Graph + Twitter Cards
- ✅ Structured data (JSON-LD)
- ✅ Robots.txt met AI support
- ✅ Dynamic sitemap

---

## 📞 Support

Vragen over de SEO implementatie?
- Documentatie: Dit bestand + comments in code
- Route toevoegen: Zie `src/lib/config/routes.ts`
- Metadata aanpassen: Zie `src/lib/seo/constants.ts`
- Structured data: Zie `src/lib/seo/structured-data.ts`

**Build check:**
```bash
npm run build
```

**Development:**
```bash
npm run dev
# Sitemap: http://localhost:3000/sitemap.xml
# Test: http://localhost:3000/niet-bestaande-pagina (404)
```
