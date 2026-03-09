import { generatePageMetadata } from '@/lib/seo/metadata'
import VennegoorDashboard from '@/components/VennegoorDashboard'

export const metadata = generatePageMetadata({
  title: 'Energieanalyse Vennegoor Installatie',
  description: 'Interactief energieanalyse dashboard voor Vennegoor Installatie met kwartiermetingen en capaciteitsanalyse.',
  keywords: ['energieanalyse', 'vennegoor', 'dashboard', 'capaciteitsanalyse'],
  path: '/demo-vennegoor',
  noIndex: true,
})

export default function DemoVennegoorPage() {
  return <VennegoorDashboard />
}
