import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Werkwijze',
  description: 'Onze werkwijze in 6 stappen: van energiescan tot optimalisatie. Data-gedreven, resultaatgericht en transparant. Ontdek hoe wij energie-projecten voor commercieel vastgoed aanpakken.',
  keywords: [
    'werkwijze',
    'aanpak',
    'proces',
    'methodiek',
    'energiescan',
    'businesscase',
    'realisatie',
    'projectmanagement',
    'optimalisatie',
    'ROI'
  ],
  path: '/werkwijze'
});

export default function WerkwijzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
