import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Gratis energiescan',
  description:
    'Zit jouw bedrijf op de wachtlijst voor meer stroom? Plan een gratis energiescan in Twente. Batterijopslag, cable pooling en slimme sturing om door te groeien.',
  keywords: [
    'energiescan',
    'gratis energiescan',
    'netcongestie Twente',
    'wachtlijst netaansluiting',
    'batterijopslag bedrijf',
    'cable pooling',
    'meer stroom aansluiting',
  ],
  path: '/energiescan',
  noIndex: true,
});

export default function EnergiescanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
