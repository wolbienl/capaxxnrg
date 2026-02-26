import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cases',
  description: 'Ontdek onze energie-projecten. Van energiegemeenschappen tot collectieve opwek: concrete resultaten bij commercieel vastgoed met data en ROI per project.',
  keywords: [
    'cases',
    'projecten',
    'referenties',
    'energiegemeenschap',
    'netcongestie',
    'succesverhalen',
    'realisaties',
    'woonboulevard almelo',
    'noabernet'
  ],
  path: '/cases'
});

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
