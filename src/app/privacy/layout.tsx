import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacyverklaring',
  description: 'Privacyverklaring van CAPAXX Energy. Lees hoe wij omgaan met uw persoonsgegevens conform de AVG.',
  keywords: ['privacy', 'privacyverklaring', 'AVG', 'persoonsgegevens', 'GDPR'],
  path: '/privacy',
  noIndex: false
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
