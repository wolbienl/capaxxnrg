import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Cases',
  description: 'Ontdek onze energie-projecten in Twente. Concrete resultaten van zonnepanelen, energieopslag en laadinfra installaties bij commercieel vastgoed. Data en ROI per project.',
  keywords: [
    'cases',
    'projecten',
    'referenties',
    'portfolio',
    'resultaten',
    'voorbeelden',
    'succesverhalen',
    'klanten',
    'realisaties'
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
