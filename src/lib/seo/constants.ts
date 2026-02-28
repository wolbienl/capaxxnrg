/**
 * SEO Constants - Single Source of Truth voor alle SEO-gerelateerde configuratie
 *
 * Update dit bestand om bedrijfsinformatie, contact details, en locatie-gegevens
 * overal op de website te wijzigen.
 */

export const SITE_CONFIG = {
  name: 'CAPAXX Energy',
  url: 'https://www.capaxxenergy.nl',
  description: 'Energie-oplossingen en advies voor commercieel vastgoed in Twente. Zonnepanelen, energieopslag, laadinfra, EMS, energielabels en duurzaamheidsadvies.',
  tagline: 'Maak energie een asset voor jouw vastgoed.',
  locale: 'nl_NL',

  contact: {
    email: 'mail@capaxx-energy.nl',
    phone: '+31532065066',
    phoneDisplay: '+31 (0)53 206 5066',
    address: {
      street: 'Jan Tinbergenstraat 202',
      city: 'Hengelo',
      postalCode: '7559 ST',
      region: 'Overijssel',
      country: 'Nederland',
      countryCode: 'NL',
    },
  },

  location: {
    city: 'Hengelo',
    region: 'Overijssel',
    areaServed: 'Twente',
    country: 'NL',
    coordinates: {
      latitude: 52.29038,
      longitude: 6.78171,
    },
    radiusKm: 50,
  },

  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
  },

  images: {
    logo: '/images/logo.svg',
    logoLight: '/images/logo-light.svg',
    logoDark: '/images/logo-dark.svg',
    ogDefault: '/images/storage-render.jpg',
    twitterCard: '/images/storage-render.jpg',
  },

  business: {
    foundingDate: '2024',
    legalName: 'CAPAXX Energy',
    type: 'ProfessionalService' as const,
    priceRange: '€€€',
  },
} as const;

/**
 * Default keywords — worden aan elke pagina toegevoegd.
 * Houd deze lijst beperkt tot termen die site-breed relevant zijn.
 * Pagina-specifieke termen staan in de page/layout metadata zelf.
 *
 * Strategie:
 *  1. Brand
 *  2. Service-categorieën (oplossingen + advies)
 *  3. Key differentiator (netcongestie)
 *  4. Doelgroep
 *  5. Primaire geo-termen (kantoor Hengelo + werkgebied Twente)
 *  6. Generieke waarde-termen
 */
export const DEFAULT_KEYWORDS = [
  'CAPAXX Energy',

  'energie-oplossingen',
  'energieadvies',
  'duurzaamheidsadvies',
  'verduurzaming vastgoed',

  'zonnepanelen',
  'energieopslag',
  'batterijopslag',
  'laadinfrastructuur',
  'EMS',
  'energy management',

  'energielabel',
  'EP-advies',
  'BREEAM',
  'ESG rapportage',

  'netcongestie',
  'netcongestie oplossen',
  'cable pooling',
  'transportrechten',

  'commercieel vastgoed',
  'bedrijfspanden',
  'vastgoedeigenaren',
  'bedrijventerrein',

  'Hengelo',
  'Twente',
  'Enschede',
  'Almelo',
  'Overijssel',
  'Oost-Nederland',

  'duurzame energie',
  'energietransitie',
] as const;

/**
 * Twente-specifieke geo-keywords voor lokale SEO landingspagina's
 */
export const TWENTE_KEYWORDS = [
  'Twente',
  'Hengelo',
  'Enschede',
  'Almelo',
  'Oldenzaal',
  'Borne',
  'Haaksbergen',
  'Losser',
  'Wierden',
  'Rijssen-Holten',
  'Overijssel',
  'Oost-Nederland',
] as const;
