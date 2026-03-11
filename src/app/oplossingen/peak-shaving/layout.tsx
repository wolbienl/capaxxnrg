import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Peak Shaving',
  'Verlaag piekbelasting met batterijopslag. Bespaar op netkosten en voorkom netverzwaring voor jouw bedrijf.',
  [
    'peak shaving',
    'piekbelasting verlagen',
    'batterijopslag bedrijf',
    'netkosten besparen',
    'piekafvlakking',
    'kwartierdata analyse',
    'gecontracteerd vermogen',
    'transporttarief verlagen'
  ]
);

export default function PeakShavingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Peak Shaving & Piekafvlakking',
    description: 'Batterijopslag voor peak shaving bij commercieel vastgoed en industrie. Verlaag piekbelasting, bespaar op netkosten en voorkom netverzwaring in Twente.',
    serviceType: 'Peak Shaving Battery Installation',
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
