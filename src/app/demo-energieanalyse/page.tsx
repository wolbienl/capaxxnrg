import { generatePageMetadata } from '@/lib/seo/metadata'
import EnergieDashboard from '@/components/EnergieDashboard'

export const metadata = generatePageMetadata({
  title: 'Demo Energieanalyse',
  description: 'Interactief energieanalyse dashboard met kwartiermetingen, heatmaps en duurbelastingcurves.',
  keywords: ['energieanalyse', 'dashboard', 'kwartiermetingen', 'capaciteitsanalyse'],
  path: '/demo-energieanalyse',
  noIndex: true,
})

export default function DemoEnergieanalysePage() {
  return <EnergieDashboard />
}
