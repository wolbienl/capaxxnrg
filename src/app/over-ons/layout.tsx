import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Over Ons',
  description: 'CAPAXX Energy is specialist in energie-oplossingen voor commercieel vastgoed in Twente. Klein team, harde focus. Data-gedreven en resultaatgericht.',
  keywords: [
    'over ons',
    'team',
    'bedrijf',
    'expertise',
    'ervaring',
    'specialisten',
    'energie-experts',
    'CAPAXX Energy',
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
