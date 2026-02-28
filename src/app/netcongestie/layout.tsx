import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie',
  description: 'Netcongestie aanpak voor commercieel vastgoed en energieprojecten in Twente. Van wachtlijst naar werkbare netstrategie met opslag, sturing en slimme contractvormen.',
  keywords: [
    'netcongestie',
    'congestiemanagement',
    'transportcapaciteit',
    'grootverbruikersaansluiting',
    'cable pooling',
    'transportrechten',
    'zelfaanleg',
    'energieprojecten',
    'Twente'
  ],
  path: '/netcongestie'
});

export default function NetcongestieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Netcongestie advies en realisatie',
    description: 'Praktische ondersteuning bij netcongestie voor vastgoed, industrie en projectontwikkeling. Van strategie en vergunningen tot technische realisatie en sturing.',
    serviceType: 'Grid Congestion Advisory and Energy Infrastructure Services',
    image: '/images/storage-hero.png'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Netcongestie', url: '/netcongestie' }
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
