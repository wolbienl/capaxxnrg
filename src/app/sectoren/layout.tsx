import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sectoren',
  description: 'Energie-oplossingen voor verschillende sectoren in Twente. Logistiek, retail, industrie, kantoren en meer. Maatwerk per branche en energiebehoefte.',
  keywords: [
    'sectoren',
    'branches',
    'industrie',
    'logistiek',
    'retail',
    'kantoren',
    'distributiecentra',
    'productie',
    'bedrijventerrein'
  ],
  path: '/sectoren'
});

export default function SectorenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
