import { Metadata } from 'next';
import { generateAdvisoryMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateAdvisoryMetadata(
  'Paris Proof',
  'Maak jouw vastgoed Paris Proof. Klimaatdoelen halen, energiekosten verlagen. Roadmap tot 2050 met concrete stappen.',
  [
    'Paris Proof',
    'klimaatneutraal',
    'CO2 neutraal',
    'klimaatdoelen',
    'energie transitie',
    'verduurzaming',
    'netto nul emissies',
    '2050 doelstellingen'
  ],
  'paris-proof'
);

export default function ParisProofLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Paris Proof Adviestraject',
    description: 'Advies en begeleiding om vastgoed Paris Proof te maken. Roadmap naar klimaatneutraliteit met concrete stappen.',
    serviceType: 'Climate Neutrality Consulting'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
