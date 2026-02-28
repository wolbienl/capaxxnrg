import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Live Energieprijzen | EPEX Spot Dag-ahead',
  description: 'Bekijk de actuele EPEX Spot dag-ahead energieprijzen per uur. Inzicht in piek- en dalmomenten voor slim energiemanagement met batterijopslag en EMS.',
  keywords: [
    'energieprijzen vandaag',
    'EPEX Spot',
    'dag-ahead prijzen',
    'stroomprijs per uur',
    'energiemarkt',
    'dynamische energieprijzen',
    'batterijopslag optimalisatie',
  ],
  path: '/energieprijzen',
});

export default function EnergieprijzenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
