import { Metadata } from 'next';
import { generateAdvisoryMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generateAdvisoryMetadata(
  'Energielabels',
  'Verbeter het energielabel van jouw bedrijfspand. Van C naar A+++ met concrete maatregelen. EPA-U advies en uitvoering voor utiliteitsbouw.',
  [
    'energielabel',
    'EPA-U',
    'energielabel verbeteren',
    'energieprestatie',
    'utiliteitsbouw',
    'labelsprongen',
    'energiebesparende maatregelen',
    'EPC advies'
  ],
  'energielabels'
);

export default function EnergielabelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Energielabel Verbetering',
    description: 'Advies en realisatie voor energielabel verbetering van commercieel vastgoed. EPA-U specialist voor utiliteitsbouw in Twente.',
    serviceType: 'Energy Performance Certificate Consulting'
  });

  return (
    <>
      <JsonLd data={serviceSchema} />
      {children}
    </>
  );
}
