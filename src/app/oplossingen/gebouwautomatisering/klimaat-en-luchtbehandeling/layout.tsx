import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';

const OG_IMAGE = '/images/gebouwautomatisering/klimaat-warmtepomp-cascade-og.webp';

const baseMetadata = generateSolutionMetadata(
  'Klimaat & luchtbehandeling',
  'HVAC-regeltechniek voor kantoor, zorg en logistiek: individuele ruimteregeling, onderhoudsalerts en koppeling met EMS, PV en warmtepomp.',
  [
    'HVAC',
    'klimaattechniek',
    'klimaattechniek bedrijfspand',
    'individuele ruimteregeling',
    'warmtepomp aansturing utiliteit',
    'VRF systeem aansturing',
    'luchtbehandeling kantoor',
    'WTW sturing',
    'BACnet',
    'Modbus',
    'voorspellend onderhoud HVAC',
    'HVAC integratie EMS',
    'HVAC PV koppeling',
  ],
  'gebouwautomatisering/klimaat-en-luchtbehandeling',
);

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: `${SITE_CONFIG.url}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'CAPAXX Energy, klimaat en luchtbehandeling voor utiliteit',
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [`${SITE_CONFIG.url}${OG_IMAGE}`],
  },
};

export default function KlimaatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Klimaat & Luchtbehandeling, HVAC-regeltechniek',
    description:
      'HVAC-regeltechniek en luchtbehandeling voor utiliteitsgebouwen. Individuele ruimteregeling, integratie met EMS, PV en warmtepomp, voorspellend onderhoud en open protocollen (BACnet, Modbus, KNX).',
    serviceType: 'HVAC Control & Building Climate Automation',
    image: '/images/gebouwautomatisering/klimaat-warmtepomp-cascade-og.webp',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wat wij doen', url: '/wat-wij-doen' },
    { name: 'Oplossingen', url: '/oplossingen' },
    { name: 'Gebouwautomatisering', url: '/oplossingen/gebouwautomatisering' },
    {
      name: 'Klimaat & luchtbehandeling',
      url: '/oplossingen/gebouwautomatisering/klimaat-en-luchtbehandeling',
    },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
