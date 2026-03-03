import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van CAPAXX Energy voor dienstverlening op het gebied van energie-oplossingen en advies voor commercieel vastgoed.',
  keywords: ['algemene voorwaarden', 'voorwaarden', 'servicevoorwaarden', 'leveringsvoorwaarden'],
  path: '/voorwaarden',
  noIndex: false
});

export default function VoorwaardenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
