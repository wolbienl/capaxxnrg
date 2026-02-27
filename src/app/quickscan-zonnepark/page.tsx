import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import QuickscanZonneparkContent from './content'

export const metadata: Metadata = generatePageMetadata({
  title: 'Quickscan Zonnepark | Haalbaarheid & Aansluiting',
  description:
    'Gratis quickscan voor jouw zonnepark. Wij checken netcapaciteit, curtailment-risico, SDE++-haalbaarheid en cable pooling mogelijkheden. Helder advies binnen 1 week.',
  keywords: [
    'quickscan zonnepark',
    'haalbaarheid zonnepark',
    'zonnepark aansluiting',
    'netcongestie zonnepark',
    'zonnepark netcapaciteit',
    'zonnepark realisatie',
    'SDE++ zonnepark',
    'curtailment zonnepark',
    'zonnepark cable pooling',
    'zonnepark ontwikkeling',
  ],
  path: '/quickscan-zonnepark',
})

export default function QuickscanZonneparkPage() {
  return <QuickscanZonneparkContent />
}
