import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Bedankt voor je bericht',
  description: 'Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.',
  path: '/contact/bedankt',
  noIndex: true // Bedankpagina niet indexeren
});

export default function BedanktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
