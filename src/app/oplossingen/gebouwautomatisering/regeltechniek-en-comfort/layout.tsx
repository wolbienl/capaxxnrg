import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';

const OG_IMAGE = '/images/gebouwautomatisering/regeltechniek-paneel-og.webp';

const baseMetadata = generateSolutionMetadata(
  'Regeltechniek & comfort',
  'Aanwezigheids- en daglichtregeling, zonwering en scenes voor bedrijfspanden. DALI-2, KNX, DMX512, 0-10V en 24V/PELV-verlichting.',
  [
    'DALI',
    'DALI-2',
    'DALI installateur',
    'KNX installateur',
    'lichtmanagementsysteem',
    'lichtsturing kantoor',
    'kantoorverlichting daglichtregeling',
    'aanwezigheidsdetectie verlichting',
    'PELV verlichting',
    '24V verlichting kantoor',
    'NEN 3140 verlichting',
    'SCIOS Scope 8',
    'DMX512',
    'Casambi',
    'zonwering automatisch kantoor',
    'Loxone Silver Partner',
  ],
  'gebouwautomatisering/regeltechniek-en-comfort',
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
        alt: 'CAPAXX Energy, regeltechniek en comfort voor utiliteit',
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [`${SITE_CONFIG.url}${OG_IMAGE}`],
  },
};

export default function RegeltechniekLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Regeltechniek & Comfort, Lichtsturing en Zonwering',
    description:
      'Aanwezigheids- en daglichtregeling, zonwering en scenes voor utiliteitsgebouwen. DALI-2, KNX, DMX512, 0-10V en 24V/PELV-verlichting met lichter NEN 3140 / SCIOS Scope 8-regime.',
    serviceType: 'Lighting Control & Building Comfort Automation',
    image: '/images/gebouwautomatisering/regeltechniek-paneel-og.webp',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wat wij doen', url: '/wat-wij-doen' },
    { name: 'Oplossingen', url: '/oplossingen' },
    { name: 'Gebouwautomatisering', url: '/oplossingen/gebouwautomatisering' },
    {
      name: 'Regeltechniek & comfort',
      url: '/oplossingen/gebouwautomatisering/regeltechniek-en-comfort',
    },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
