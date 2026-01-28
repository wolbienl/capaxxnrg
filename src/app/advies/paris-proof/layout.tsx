import { Metadata } from 'next';
import { generateAdvisoryMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateAdvisoryMetadata(
  'Paris Proof',
  'Maak jouw vastgoed Paris Proof. Voldoe aan klimaatdoelen en bespaar op energiekosten. Roadmap van nu tot 2050 met haalbare stappen en harde ROI.',
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
