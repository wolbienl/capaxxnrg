import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { SITE_CONFIG } from '@/lib/seo/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Login - Klantportaal',
  description: `Log in op uw persoonlijke CAPAXX Energy portaal. Bekijk realtime energie-data, rapportages en performance metrics van uw installaties. Toegang tot uw energie-dashboard.`,
  keywords: [
    'login',
    'klantportaal',
    'energie dashboard',
    'energy management',
    'realtime monitoring',
    'energie rapportages',
    'portaal toegang'
  ],
  path: '/login'
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
