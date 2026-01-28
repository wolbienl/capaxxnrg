/**
 * Sitemap Generator
 * 
 * Genereert automatisch een sitemap op basis van de routes configuratie.
 * Voeg nieuwe routes toe in src/lib/config/routes.ts
 */

import { MetadataRoute } from 'next';
import { getAllRoutes } from '@/lib/config/routes';
import { SITE_CONFIG } from '@/lib/seo/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllRoutes();
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date();
  
  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFreq,
    priority: route.priority
  }));
}
