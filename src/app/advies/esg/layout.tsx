import { Metadata } from 'next';
import { generateAdvisoryMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateAdvisoryMetadata(
  'ESG',
  'ESG rapportage voor vastgoedeigenaren. Meet en rapporteer duurzaamheidsprestaties. CSRD-ready en GRESB-optimalisatie voor vastgoedportefeuilles.',
  [
    'ESG rapportage',
    'ESG advies',
    'duurzaamheidsrapportage',
    'CSRD',
    'GRESB',
    'sustainability reporting',
    'environmental impact',
    'CO2 reductie',
    'vastgoed ESG'
  ],
  'esg'
);

export default function ESGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'ESG Rapportage & Advies',
    description: 'ESG rapportage en advies voor vastgoedeigenaren in Twente. CSRD compliance en GRESB optimalisatie.',
    serviceType: 'ESG Consulting'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
