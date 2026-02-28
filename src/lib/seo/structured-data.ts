/**
 * Structured Data Generators - Herbruikbare JSON-LD schema generators
 * 
 * Gebruik deze functies om Schema.org structured data te genereren
 * voor betere SEO en LLM-indexering.
 */

import { SITE_CONFIG } from './constants';
import type { ServiceSchemaOptions, ProductSchemaOptions, BreadcrumbItem, FAQItem } from './types';

/**
 * Organization Schema - Basisinformatie over CAPAXX Energy
 * Gebruik in root layout voor globale organisatie-informatie
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.images.logo}`,
    description: SITE_CONFIG.description,
    
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.contact.address.street,
      addressLocality: SITE_CONFIG.contact.address.city,
      postalCode: SITE_CONFIG.contact.address.postalCode,
      addressRegion: SITE_CONFIG.contact.address.region,
      addressCountry: SITE_CONFIG.contact.address.countryCode,
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.location.coordinates.latitude,
      longitude: SITE_CONFIG.location.coordinates.longitude
    },
    
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE_CONFIG.location.coordinates.latitude,
        longitude: SITE_CONFIG.location.coordinates.longitude
      },
      geoRadius: SITE_CONFIG.location.radiusKm * 1000 // Converteer naar meters
    },
    
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.email,
      contactType: 'customer service',
      areaServed: SITE_CONFIG.location.country,
      availableLanguage: ['nl']
    }
  };
}

/**
 * LocalBusiness Schema - Voor contact pagina en lokale SEO
 * Combineert Organization met LocalBusiness type voor betere local search
 */
export function generateLocalBusinessSchema() {
  const orgSchema = generateOrganizationSchema();

  return {
    ...orgSchema,
    '@type': 'LocalBusiness',
    legalName: SITE_CONFIG.business.legalName,
    foundingDate: SITE_CONFIG.business.foundingDate,
    priceRange: SITE_CONFIG.business.priceRange,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  };
}

/**
 * Service Schema Generator - Herbruikbaar voor alle diensten
 * 
 * @example
 * ```ts
 * const schema = generateServiceSchema({
 *   name: 'Energieopslag',
 *   description: 'Batterijopslag voor commercieel vastgoed',
 *   serviceType: 'Battery Storage Installation'
 * });
 * ```
 */
export function generateServiceSchema({
  name,
  description,
  serviceType,
  image
}: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url
    },
    
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.location.areaServed,
      containedIn: {
        '@type': 'State',
        name: SITE_CONFIG.location.region
      }
    },
    
    ...(image && {
      image: `${SITE_CONFIG.url}${image}`
    })
  };
}

/**
 * Product Schema Generator - Voor specifieke producten zoals EMS
 */
export function generateProductSchema({
  name,
  description,
  image,
  sku
}: ProductSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    
    brand: {
      '@type': 'Organization',
      name: SITE_CONFIG.name
    },
    
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'EUR',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name
      }
    },
    
    ...(image && {
      image: `${SITE_CONFIG.url}${image}`
    }),
    
    ...(sku && { sku })
  };
}

/**
 * WebSite Schema - Voor search box en site navigation
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Breadcrumb Schema Generator
 * 
 * @example
 * ```ts
 * const breadcrumbs = generateBreadcrumbSchema([
 *   { name: 'Home', url: '/' },
 *   { name: 'Oplossingen', url: '/oplossingen' },
 *   { name: 'Energieopslag', url: '/oplossingen/energieopslag' }
 * ]);
 * ```
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`
    }))
  };
}

/**
 * Article Schema Generator - Voor kennisbank-artikelen en cases
 *
 * Genereert rich results voor Google Search: headline, auteur, publicatiedatum,
 * publisher logo en canonical URL. Essentieel voor vindbaarheid van diepgaande content.
 */
export function generateArticleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}${SITE_CONFIG.images.logo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}${path}`,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: 'nl',
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`,
      },
    }),
  };
}

/**
 * FAQ Schema Generator
 * Gebruik voor pagina's met veelgestelde vragen
 */
export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}
