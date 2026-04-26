import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';
import { FAQS } from './faqs';

const OG_IMAGE = '/images/gebouwautomatisering/regeltechniek-paneel-og.webp';

const baseMetadata = generateSolutionMetadata(
  'Gebouwautomatisering',
  'Slim gebouwbeheer voor kantoor, retail, logistiek, hotels, zorg en scholen. Merk-onafhankelijk, open standaarden, lokaal verwerkt.',
  [
    'gebouwautomatisering',
    'gebouwbeheersysteem',
    'GBS',
    'slim gebouwbeheer',
    'BACS',
    'GACS',
    'EPBD IV',
    'BACS klasse C',
    'multi-tenant gebouwbeheer',
    'merk-onafhankelijk GBS',
    'smart building Twente',
    'KNX',
    'BACnet',
    'Modbus',
    'DALI',
    'Loxone Silver Partner',
    'Smart Readiness Indicator',
    'lokaal verwerkt gebouwbeheer',
  ],
  'gebouwautomatisering',
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
        alt: 'CAPAXX Energy, gebouwautomatisering voor utiliteit',
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    images: [`${SITE_CONFIG.url}${OG_IMAGE}`],
  },
};

export default function GebouwautomatiseringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Gebouwautomatisering & Slim Gebouwbeheer',
    description:
      'Merk-onafhankelijk advies en realisatie van gebouwautomatisering voor utiliteit. Klimaat, regeltechniek en toegangscontrole geïntegreerd. BACS- en EPBD IV-conform, lokaal verwerkt, gebouwd op open standaarden (KNX, BACnet, Modbus, DALI).',
    serviceType: 'Building Automation Services',
    image: '/images/gebouwautomatisering/regeltechniek-paneel-og.webp',
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wat wij doen', url: '/wat-wij-doen' },
    { name: 'Oplossingen', url: '/oplossingen' },
    { name: 'Gebouwautomatisering', url: '/oplossingen/gebouwautomatisering' },
  ]);

  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      {children}
    </>
  );
}
