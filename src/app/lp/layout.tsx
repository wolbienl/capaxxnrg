import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata = generatePageMetadata({
  title: 'Links',
  description: 'Partnerpagina',
  path: '/lp',
  noIndex: true,
});

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
