import { Metadata } from 'next';
import { generateAdvisoryMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateAdvisoryMetadata(
  'BREEAM',
  'BREEAM certificering voor commercieel vastgoed. Behaal de hoogste scores met onze energie-expertise. Van assessment tot certified rating.',
  [
    'BREEAM certificering',
    'BREEAM advies',
    'duurzaam bouwen',
    'green building',
    'vastgoed certificaat',
    'BREEAM-NL',
    'energy credits',
    'sustainability assessment'
  ],
  'breeam'
);

export default function BreeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'BREEAM Certificering Advies',
    description: 'Specialist advies voor BREEAM certificering van commercieel vastgoed in Twente. Optimalisatie van energie-scores.',
    serviceType: 'BREEAM Certification Consulting'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
