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
    changeFreq: 'weekly' as const,
    children: {
      noabernetAlmelo: {
        path: '/cases/noabernet-almelo',
        priority: 0.7,
        changeFreq: 'monthly' as const
      }
    }
  },
  
  sectoren: {
    path: '/sectoren',
    priority: 0.8,
    changeFreq: 'monthly' as const
  },

  watWijDoen: {
    path: '/wat-wij-doen',
    priority: 0.9,
    changeFreq: 'weekly' as const
  },

  netcongestie: {
    path: '/netcongestie',
    priority: 0.9,
    changeFreq: 'weekly' as const,
    children: {
      vastgoed: {
        path: '/vastgoed',
        priority: 0.9,
        changeFreq: 'weekly' as const
      },
      projectontwikkeling: {
        path: '/projectontwikkeling',
        priority: 0.9,
        changeFreq: 'weekly' as const
      },
      industrie: {
        path: '/industrie',
        priority: 0.9,
        changeFreq: 'weekly' as const
      },
      kennisbank: {
        path: '/kennisbank',
        priority: 0.9,
        changeFreq: 'weekly' as const
      },
      kennisbankCablePooling: {
        path: '/kennisbank/cable-pooling',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankTransportrechten: {
        path: '/kennisbank/transportrechten',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankZelfaanleg: {
        path: '/kennisbank/zelfaanleg',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankEnergiewet2026: {
        path: '/kennisbank/energiewet-2026',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankEnergiehubs: {
        path: '/kennisbank/energiehubs',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankFlexeSubsidie2026: {
        path: '/kennisbank/flex-e-subsidie-2026',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      kennisbankSprila2026: {
        path: '/kennisbank/sprila-2026',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      regio_twente: {
        path: '/netcongestie/twente',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      regio_hengelo: {
        path: '/netcongestie/hengelo',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      regio_enschede: {
        path: '/netcongestie/enschede',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      regio_almelo: {
        path: '/netcongestie/almelo',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      regio_oldenzaal: {
        path: '/netcongestie/oldenzaal',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      netbeheerder_enexis: {
        path: '/netcongestie/enexis',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      netbeheerder_coteq: {
        path: '/netcongestie/coteq',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      netbeheerder_alliander: {
        path: '/netcongestie/alliander',
        priority: 0.8,
        changeFreq: 'monthly' as const
      },
      netcapaciteitskaart: {
        path: '/netcapaciteitskaart',
        priority: 0.9,
        changeFreq: 'weekly' as const
      }
    }
  },
  
  whitepapers: {
    path: '/whitepapers/netcongestie-bedrijventerreinen',
    priority: 0.7,
    changeFreq: 'monthly' as const
  },

  quickscanZonnepark: {
    path: '/quickscan-zonnepark',
    priority: 0.7,
    changeFreq: 'monthly' as const,
  },

  quickscanWindpark: {
    path: '/quickscan-windpark',
    priority: 0.7,
    changeFreq: 'monthly' as const,
  },

  roiLaadinfraVastgoed: {
    path: '/roi-laadinfra-vastgoed',
    priority: 0.7,
    changeFreq: 'monthly' as const,
  },

  energieweerbericht: {
    path: '/energieweerbericht',
    priority: 0.8,
    changeFreq: 'hourly' as const,
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

  type RouteNode = {
    path?: string;
    priority?: number;
    changeFreq?: RouteConfig['changeFreq'];
    children?: Record<string, RouteNode>;
  };
  
  function traverse(obj: RouteNode) {
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
  
  Object.values(ROUTES as Record<string, RouteNode>).forEach(traverse);
  
  return routes;
}

/**
 * Helper om route path te vinden op basis van key
 */
export function getRoutePath(key: string): string {
  const route = ROUTES[key as keyof typeof ROUTES];
  return route?.path || '/';
}
