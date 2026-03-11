import { Metadata } from 'next';
import { generateSolutionMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateSolutionMetadata(
  'DC-Snellader',
  'DC-snelladers van 50 tot 400 kW voor bedrijven. Slim laden met load balancing en batterijbuffer.',
  [
    'dc snellader',
    'dc snellader bedrijf',
    'snellader bedrijventerrein',
    'dc lader 400kw',
    'snellaadstation bedrijf',
    'dynamic load balancing',
    'sprila subsidie',
    'laadinfra logistiek'
  ],
  'dc-snellader'
);

export default function DCSnelladerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'DC-Snelladers voor Bedrijven',
    description: 'DC-snellaadinfrastructuur van 50 tot 400 kW voor bedrijven. Slim laden met dynamic load balancing en batterijbuffer voor logistiek, retail en kantoren in Twente.',
    serviceType: 'DC Fast Charging Station Installation',
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
