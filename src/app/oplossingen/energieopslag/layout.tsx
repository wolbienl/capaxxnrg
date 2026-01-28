import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Energieopslag',
  'Batterijopslag voor peak shaving, zelfverbruik verhogen en netcongestie oplossen. Maak jouw aansluiting weer bruikbaar met slimme energieopslag.',
  [
    'batterijopslag',
    'energieopslag',
    'peak shaving',
    'battery storage',
    'netcongestie',
    'zelfverbruik',
    'load balancing',
    'flexibiliteit',
    'MWh opslag'
  ]
);

export default function EnergieopslagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Energieopslag & Batterijsystemen',
    description: 'Batterijopslag voor commercieel vastgoed. Peak shaving, zelfverbruik verhogen en netcongestie oplossen. Complete realisatie van energieopslagsystemen in Twente.',
    serviceType: 'Battery Energy Storage System Installation',
    image: '/images/storage-hero.png'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
