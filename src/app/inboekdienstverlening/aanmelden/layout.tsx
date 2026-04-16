import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Aanmelden Inboekdienstverlening',
  description:
    'Meld u aan als klant voor inboekdienstverlening bij CAPAXX Energy. Wij registreren uw laadsessies en verzilveren uw ERE-certificaten.',
  keywords: [
    'inboekdienstverlener aanmelden',
    'ERE certificaten aanvragen',
    'inboeken elektriciteit aanmelden',
  ],
  path: '/inboekdienstverlening/aanmelden',
})

export default function AanmeldenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
