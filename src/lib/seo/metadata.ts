/**
 * Metadata Utilities - Herbruikbare functies voor consistente metadata generatie
 * 
 * Gebruik deze functies om metadata te genereren voor alle pagina's.
 * Dit zorgt voor consistentie en maakt updates eenvoudig.
 */

import { Metadata } from 'next';
import { SITE_CONFIG, DEFAULT_KEYWORDS } from './constants';
import type { PageMetadataOptions } from './types';

/**
 * Genereer volledige metadata voor een pagina
 * 
 * @example
 * ```ts
 * export const metadata = generatePageMetadata({
 *   title: 'Energieopslag',
 *   description: 'Batterijopslag voor commercieel vastgoed in Twente',
 *   keywords: ['batterij', 'opslag'],
 *   path: '/oplossingen/energieopslag'
 * });
 * ```
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
  ogImage,
  twitterImage,
  noIndex = false,
  type = 'website'
}: PageMetadataOptions): Metadata {
  const fullTitle = title === 'Home' 
    ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`
    : `${title} | ${SITE_CONFIG.name}`;
  
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImageUrl = ogImage || SITE_CONFIG.images.ogDefault;
  const twitterImageUrl = twitterImage || ogImageUrl;
  
  return {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_KEYWORDS, ...keywords],
    
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    
    openGraph: {
      type,
      locale: SITE_CONFIG.locale,
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${title}`
      }]
    },
    
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [twitterImageUrl],
      creator: '@capaxxenergy' // Pas aan indien Twitter account bestaat
    },
    
    alternates: {
      canonical: url
    },
    
    robots: noIndex ? {
      index: false,
      follow: false
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      }
    },
    
    // Verification tags (voeg toe indien beschikbaar)
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    }
  };
}

/**
 * Genereer metadata specifiek voor oplossingen/diensten pagina's
 * 
 * Voegt automatisch Twente-focus toe aan description
 */
export function generateSolutionMetadata(
  solution: string,
  description: string,
  additionalKeywords: string[] = [],
  slug?: string
): Metadata {
  const pathSlug = slug || solution.toLowerCase().replace(/\s+/g, '-');
  
  return generatePageMetadata({
    title: solution,
    description: `${description} Specialisten in ${SITE_CONFIG.location.areaServed}.`,
    keywords: [...additionalKeywords, solution.toLowerCase(), 'installatie', 'advies'],
    path: `/oplossingen/${pathSlug}`,
    type: 'website'
  });
}

/**
 * Genereer metadata voor advies pagina's
 */
export function generateAdvisoryMetadata(
  topic: string,
  description: string,
  additionalKeywords: string[] = [],
  slug?: string
): Metadata {
  const pathSlug = slug || topic.toLowerCase().replace(/\s+/g, '-');
  
  return generatePageMetadata({
    title: `${topic} Advies`,
    description: `${description} Specialist advies voor vastgoed in ${SITE_CONFIG.location.areaServed}.`,
    keywords: [...additionalKeywords, 'advies', 'consultancy', topic.toLowerCase()],
    path: `/advies/${pathSlug}`
  });
}

/**
 * Genereer metadata voor sector pagina's
 */
export function generateSectorMetadata(
  sector: string,
  description: string,
  additionalKeywords: string[] = []
): Metadata {
  return generatePageMetadata({
    title: `Sectoren - ${sector}`,
    description,
    keywords: [...additionalKeywords, sector.toLowerCase(), 'sector', 'branche'],
    path: '/sectoren'
  });
}
