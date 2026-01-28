import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Oplossingen',
  description: 'Complete energie-oplossingen voor commercieel vastgoed in Twente. Zonnepanelen, energieopslag, laadinfra, solar carports en energy management systemen. Maatwerk voor bedrijfspanden.',
  keywords: [
    'energie-oplossingen',
    'zonnepanelen bedrijf',
    'batterijopslag',
    'laadpalen zakelijk',
    'solar carport',
    'EMS systeem',
    'commerciële installaties'
  ],
  path: '/oplossingen'
});

export default function OplossingenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
