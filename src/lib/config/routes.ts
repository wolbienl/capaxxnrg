/**
 * Routes Configuration - Single Source of Truth voor alle routes
 * 
 * Gebruik dit bestand om:
 * - Sitemap automatisch te genereren
 * - Route navigatie te beheren
 * - Consistente URLs te garanderen
 * 
 * Nieuwe pagina toevoegen? Voeg alleen hier toe en de sitemap wordt automatisch bijgewerkt!
 */

import type { RouteConfig } from '@/lib/seo/types';

/**
 * Alle routes met metadata voor sitemap
 */
export const ROUTES = {
  home: {
    path: '/',
    priority: 1.0,
    changeFreq: 'weekly' as const
  },
  
  oplossingen: {
    path: '/oplossingen',
    priority: 0.9,
    changeFreq: 'weekly' as const,
    children: {
      zonnepanelen: {
        path: '/oplossingen/zonnepanelen',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      energieopslag: {
        path: '/oplossingen/energieopslag',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      laadinfra: {
        path: '/oplossingen/laadinfra',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      solarCarports: {
        path: '/oplossingen/solar-carports',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      ems: {
        path: '/oplossingen/ems',
        priority: 0.8,
        changeFreq: 'monthly' as const
      }
    }
  },
  
  overOns: {
    path: '/over-ons',
    priority: 0.9,
    changeFreq: 'monthly' as const
  },
  
  contact: {
    path: '/contact',
    priority: 0.9,
    changeFreq: 'monthly' as const
  },
  
  login: {
    path: '/login',
    priority: 0.6,
    changeFreq: 'monthly' as const
  },
  
  werkwijze: {
    path: '/werkwijze',
    priority: 0.9,
    changeFreq: 'monthly' as const
  },
  
  cases: {
    path: '/cases',
    priority: 0.8,
    changeFreq: 'weekly' as const
  },
  
  sectoren: {
    path: '/sectoren',
    priority: 0.8,
    changeFreq: 'monthly' as const
  },
  
  advies: {
    path: '/advies',
    priority: 0.8,
    changeFreq: 'monthly' as const,
    children: {
      breeam: {
        path: '/advies/breeam',
        priority: 0.7,
        changeFreq: 'monthly' as const
      },
      energielabels: {
        path: '/advies/energielabels',
        priority: 0.7,
        changeFreq: 'monthly' as const
      },
      esg: {
        path: '/advies/esg',
        priority: 0.7,
        changeFreq: 'monthly' as const
      },
      parisProof: {
        path: '/advies/paris-proof',
        priority: 0.7,
        changeFreq: 'monthly' as const
      }
    }
  }
} as const;

/**
 * Flatten alle routes voor sitemap generatie
 * 
 * @returns Array van alle routes met hun metadata
 */
export function getAllRoutes() {
  const routes: Array<{ 
    path: string; 
    priority: number; 
    changeFreq: RouteConfig['changeFreq'] 
  }> = [];
  
  function traverse(obj: any) {
    if (obj.path) {
      routes.push({
        path: obj.path,
        priority: obj.priority || 0.6,
        changeFreq: obj.changeFreq || 'monthly'
      });
    }
    
    if (obj.children) {
      Object.values(obj.children).forEach(traverse);
    }
  }
  
  Object.values(ROUTES).forEach(traverse);
  
  return routes;
}

/**
 * Helper om route path te vinden op basis van key
 */
export function getRoutePath(key: string): string {
  const route = ROUTES[key as keyof typeof ROUTES];
  return route?.path || '/';
}
