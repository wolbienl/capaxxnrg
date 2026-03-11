import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Noodstroom',
  'Noodstroom met batterijopslag. Bedrijfscontinuiteit bij netuitval zonder diesel. Combineer UPS met peak shaving.',
  [
    'noodstroom',
    'ups bedrijf',
    'noodstroomvoorziening',
    'batterij noodstroom',
    'bedrijfscontinuiteit',
    'stroomuitval bescherming',
    'ups systeem',
    'noodstroom zonder diesel'
  ]
);

export default function NoodstroomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Noodstroom & UPS Systemen',
    description: 'Noodstroomvoorziening met batterijopslag voor bedrijven. Bedrijfscontinuiteit bij netuitval zonder diesel, gecombineerd met peak shaving en zelfconsumptie in Twente.',
    serviceType: 'Uninterruptible Power Supply Installation',
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
