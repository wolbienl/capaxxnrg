import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Zonnepanelen',
  'Zonnepanelen voor commercieel vastgoed. Maximale opbrengst op dak en terrein. Ontwerp, realisatie en monitoring van zonne-energie installaties.',
  [
    'zonnepanelen',
    'solar panels',
    'PV installatie',
    'zonne-energie',
    'bedrijfspand',
    'dak installatie',
    'terrein installatie',
    'monitoring',
    'opbrengst optimalisatie'
  ]
);

export default function ZonnepanelenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Zonnepanelen Installatie',
    description: 'Professionele installatie van zonnepanelen voor commercieel vastgoed in Twente. Van eerste scan tot monitoring en optimalisatie.',
    serviceType: 'Solar Panel Installation',
    image: '/images/solar-commercial.jpg'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
