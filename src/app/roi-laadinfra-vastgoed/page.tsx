import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import RoiLaadinfraContent from './content'

export const metadata: Metadata = generatePageMetadata({
  title: 'ROI Laadinfra Vastgoed | Rendement Laadpalen Bedrijfspand',
  description:
    'Wat levert laadinfrastructuur op voor jouw vastgoed? ROI-berekening, terugverdientijd en huurpremie. Laadpalen als waardeverhoging voor commercieel vastgoed.',
  keywords: [
    'roi laadinfra',
    'roi laadpalen vastgoed',
    'laadinfrastructuur businesscase',
    'laadpalen bedrijfspand',
    'laadpalen rendement',
    'laadinfra vastgoed',
    'laadpalen commercieel vastgoed',
    'terugverdientijd laadpalen',
    'waardestijging laadinfra',
    'laadpalen huurpremie',
    'EV laden vastgoed',
  ],
  path: '/roi-laadinfra-vastgoed',
})

export default function RoiLaadinfraVastgoedPage() {
  return <RoiLaadinfraContent />
}
