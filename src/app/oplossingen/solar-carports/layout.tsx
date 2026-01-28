import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Solar Carports',
  'Solar carports voor bedrijventerreinen. Dubbel gebruik van parkeerruimte: opwek en laden op één plek. Maximale benutting van beschikbare ruimte.',
  [
    'solar carport',
    'zonnepanelen carport',
    'parkeerplaats overkapping',
    'bedrijventerrein',
    'parkeren en laden',
    'zonne-energie parkeren',
    'carport installatie'
  ]
);

export default function SolarCarportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Solar Carports',
    description: 'Solar carport installaties voor bedrijventerreinen in Twente. Combineer parkeren, zonne-energie opwek en elektrisch laden.',
    serviceType: 'Solar Carport Installation',
    image: '/images/solar-carport.webp'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
