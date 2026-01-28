import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateProductSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Energy Management System',
  'Realtime inzicht en automatische sturing van energie-assets. Monitor opwek, verbruik en opslag. Optimaliseer pieken en bespaar op energiekosten.',
  [
    'EMS',
    'energy management',
    'energiemanagementsysteem',
    'monitoring',
    'dashboard',
    'realtime data',
    'energie monitoring',
    'piekverbruik',
    'optimalisatie',
    'energie sturing'
  ],
  'ems'
);

export default function EMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productSchema = generateProductSchema({
    name: 'Energy Management System (EMS)',
    description: 'Geavanceerd Energy Management System voor realtime monitoring en sturing van alle energie-assets. Dashboard met live data en automatische optimalisatie.',
    image: '/images/og-default.jpg'
  });

  return (
    <>
      <JsonLd data={productSchema} />
      {children}
    </>
  );
}
