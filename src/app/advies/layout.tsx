import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Advies',
  description: 'Specialist advies voor duurzaam vastgoed in Twente. BREEAM certificering, ESG rapportage, energielabels en Paris Proof trajecten. Data-gedreven en resultaatgericht.',
  keywords: [
    'energieadvies',
    'duurzaamheidsadvies',
    'vastgoedadvies',
    'BREEAM',
    'ESG',
    'energielabels',
    'Paris Proof',
    'certificering',
    'rapportage',
    'compliance'
  ],
  path: '/advies'
});

export default function AdviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
