import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import QuickscanWindparkContent from './content'

export const metadata: Metadata = generatePageMetadata({
  title: 'Quickscan Windpark | Haalbaarheid & Aansluiting',
  description:
    'Gratis quickscan voor jouw windpark. Wij beoordelen netcapaciteit, cable pooling met zon, flexibele transportrechten en zelfaanleg mogelijkheden. Advies binnen 1 week.',
  keywords: [
    'quickscan windpark',
    'haalbaarheid windpark',
    'windpark aansluiting',
    'netcongestie windpark',
    'windpark netcapaciteit',
    'windpark realisatie',
    'cable pooling wind',
    'cable pooling zon wind',
    'windpark transportrechten',
    'windpark ontwikkeling',
    'zelfaanleg windpark',
  ],
  path: '/quickscan-windpark',
})

export default function QuickscanWindparkPage() {
  return <QuickscanWindparkContent />
}
