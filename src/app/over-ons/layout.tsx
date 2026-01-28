import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Over Ons',
  description: 'CAPAXX Energy is specialist in energie-oplossingen voor commercieel vastgoed in Twente. Klein team, harde focus. Data-gedreven en resultaatgericht. Spinoff van CAPAXX.',
  keywords: [
    'over ons',
    'team',
    'bedrijf',
    'expertise',
    'ervaring',
    'specialisten',
    'energie-experts',
    'CAPAXX',
    'spinoff'
  ],
  path: '/over-ons'
});

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
