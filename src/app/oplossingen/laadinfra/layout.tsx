import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'Laadinfrastructuur',
  'Laadpalen en laadinfra voor bedrijven. Slim laden met load balancing, klaar voor groei. Van enkele laadpunten tot complete charging hubs.',
  [
    'laadinfrastructuur',
    'laadpalen',
    'laadstations',
    'ev charging',
    'elektrisch laden',
    'load balancing',
    'zakelijk laden',
    'bedrijfslaadpalen',
    'snelladers',
    'charging infrastructure'
  ],
  'laadinfra'
);

export default function LaadinfraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Laadinfrastructuur voor Bedrijven',
    description: 'Complete laadinfrastructuur voor zakelijk gebruik in Twente. Van laadpalen tot charging hubs met slimme load balancing.',
    serviceType: 'Electric Vehicle Charging Station Installation',
    image: '/images/laadinfra-hero.jpg'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
