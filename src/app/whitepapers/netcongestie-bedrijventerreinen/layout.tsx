import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Whitepaper: Netcongestie op bedrijventerreinen',
  description:
    'Download de gratis whitepaper van CAPAXX Energy: vijf concrete routes om netcongestie op bedrijventerreinen op te lossen. Met rekenvoorbeelden, beslisboom en stappenplan.',
  keywords: [
    'netcongestie',
    'bedrijventerreinen',
    'whitepaper',
    'capaciteitsoptimalisatie',
    'cable pooling',
    'groepstransportovereenkomst',
    'zelfaanleg',
    'flexibel transport',
    'elektriciteitsnet',
    'vastgoed',
  ],
  path: '/whitepapers/netcongestie-bedrijventerreinen',
});

export default function WhitepaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
