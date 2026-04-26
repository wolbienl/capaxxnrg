import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';

const OG_IMAGE = '/images/gebouwautomatisering/toegangscontrole-nfc-og.webp';

const baseMetadata = generateSolutionMetadata(
  'Toegangscontrole',
  'Toegangscontrole voor kantoor, zorg, scholen en multi-tenant: NFC, tijdsloten, multi-locatie-logging en koppeling met inbraakalarm.',
  [
    'toegangscontrole',
    'toegangscontrole bedrijfspand',
    'toegangscontrole multi-tenant',
    'toegangscontrole kantoor',
    'cloud toegangscontrole',
    'NFC toegang bedrijf',
    'tijdsgebonden toegang',
    'toegangscontrole logging',
    'toegangscontrole AVG',
    'elektronische toegangscontrole',
    'toegangscontrolesysteem',
    'deurintercom kantoor',
    'toegangscontrole zorginstelling',
    'toegangscontrole school',
  ],
  'gebouwautomatisering/toegangscontrole',
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
        alt: 'CAPAXX Energy, toegangscontrole voor bedrijfspand en multi-tenant',
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [`${SITE_CONFIG.url}${OG_IMAGE}`],
  },
};

export default function ToegangscontroleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Toegangscontrole voor Bedrijfspanden en Multi-tenant',
    description:
      'Elektronische toegangscontrole met NFC, codes, tijdsgebonden toegang, multi-locatie-logging (AVG-proof) en integratie met inbraakalarm en gebouwbeheersysteem. Voor kantoor, zorg, onderwijs, retail en multi-tenant.',
    serviceType: 'Access Control Systems',
    image: '/images/gebouwautomatisering/toegangscontrole-nfc-og.webp',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wat wij doen', url: '/wat-wij-doen' },
    { name: 'Oplossingen', url: '/oplossingen' },
    { name: 'Gebouwautomatisering', url: '/oplossingen/gebouwautomatisering' },
    {
      name: 'Toegangscontrole',
      url: '/oplossingen/gebouwautomatisering/toegangscontrole',
    },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
