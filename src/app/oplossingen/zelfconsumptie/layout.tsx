import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Zelfconsumptie',
  'Verhoog zelfconsumptie van zonne-energie met slimme opslag en EMS. Verlaag terugleverkosten en netafhankelijkheid.',
  [
    'zelfconsumptie',
    'zelfconsumptie verhogen',
    'eigen verbruik zonnepanelen',
    'terugleverkosten vermijden',
    'salderingsregeling afbouw',
    'eigenverbruik optimaliseren',
    'zonne-energie opslaan',
    'batterij zelfverbruik'
  ]
);

export default function ZelfconsumptieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Zelfconsumptie Optimalisatie',
    description: 'Verhoog zelfconsumptie van zonne-energie met batterijopslag en EMS-sturing. Verlaag terugleverkosten en netafhankelijkheid voor bedrijven in Twente.',
    serviceType: 'Solar Self-Consumption Optimization',
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
