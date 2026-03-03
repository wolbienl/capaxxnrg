import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generatePageMetadata({
  title: 'Wat wij doen',
  description: 'Ontdek wat CAPAXX Energy doet: energie-oplossingen en advies voor vastgoed en bedrijven. Van ontwerp en realisatie tot continue optimalisatie.',
  keywords: [
    'wat wij doen',
    'energie-oplossingen',
    'duurzaamheidsadvies',
    'energie-integratie',
    'oplossingen en advies',
    'commercial real estate energy',
    'Twente'
  ],
  path: '/wat-wij-doen'
});

export default function WatWijDoenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Geintegreerde energieoplossingen en advies',
    description: 'CAPAXX Energy combineert technische oplossingen en adviesdiensten voor commercieel vastgoed. Van energiescan en businesscase tot realisatie, rapportage en optimalisatie.',
    serviceType: 'Integrated Energy Solutions and Advisory Services',
    image: '/images/solar-hero.png'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wat wij doen', url: '/wat-wij-doen' }
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
