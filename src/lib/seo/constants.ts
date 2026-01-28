/**
 * SEO Constants - Single Source of Truth voor alle SEO-gerelateerde configuratie
 * 
 * Update dit bestand om bedrijfsinformatie, contact details, en locatie-gegevens
 * overal op de website te wijzigen.
 */

export const SITE_CONFIG = {
  name: 'CAPAXX Energy',
  url: 'https://www.capaxxenergy.nl',
  description: 'Energie-oplossingen voor commercieel vastgoed in Twente. Zonnepanelen, energieopslag, laadinfra en EMS voor duurzame bedrijfspanden.',
  tagline: 'Unlock waarde uit jouw vastgoedenergie',
  locale: 'nl_NL',
  
  contact: {
    email: 'info@capaxxenergy.nl',
    phone: '+31532065066',
    phoneDisplay: '+31 (0)53 206 5066',
    address: {
      street: '', // Vul in indien gewenst
      city: 'Enschede',
      postalCode: '', // Vul in indien gewenst
      region: 'Overijssel',
      country: 'Nederland',
      countryCode: 'NL'
    }
  },
  
  location: {
    city: 'Enschede',
    region: 'Overijssel',
    areaServed: 'Twente',
    country: 'NL',
    // Coördinaten voor centrum Twente (bij Enschede)
    coordinates: {
      latitude: 52.2215,
      longitude: 6.8937
    },
    // Service radius in kilometers (50km = groot Twente gebied)
    radiusKm: 50
  },
  
  social: {
    // Voeg toe indien beschikbaar
    linkedin: '',
    twitter: '',
    facebook: ''
  },
  
  images: {
    logo: '/images/logo.svg',
    logoLight: '/images/logo-light.svg',
    logoDark: '/images/logo-dark.svg',
    // Gebruik bestaande hero image als fallback totdat specifieke OG image beschikbaar is
    // TODO: Maak dedicated 1200x630px OG image (zie public/images/README-OG-IMAGES.md)
    ogDefault: '/images/storage-render.jpg',
    twitterCard: '/images/storage-render.jpg'
  },
  
  // Business info voor structured data
  business: {
    foundingDate: '2024', // Pas aan indien bekend
    legalName: 'CAPAXX Energy',
    type: 'ProfessionalService' as const,
    priceRange: '€€€'
  }
} as const;

/**
 * Default keywords die op elke pagina worden toegevoegd
 * Combineer deze met pagina-specifieke keywords
 */
export const DEFAULT_KEYWORDS = [
  'CAPAXX Energy',
  'energie',
  'energieoplossingen',
  'commercieel vastgoed',
  'Twente',
  'Enschede',
  'Overijssel',
  'duurzame energie',
  'zonnepanelen',
  'energieopslag',
  'laadinfrastructuur',
  'laadpalen',
  'EMS',
  'energy management',
  'peak shaving',
  'netcongestie',
  'batterijopslag',
  'solar carports',
  'bedrijfspanden',
  'vastgoedeigenaren'
] as const;

/**
 * Twente-specifieke keywords voor lokale SEO
 */
export const TWENTE_KEYWORDS = [
  'Twente',
  'Enschede',
  'Hengelo',
  'Almelo',
  'Oldenzaal',
  'Overijssel',
  'Oost-Nederland'
] as const;
