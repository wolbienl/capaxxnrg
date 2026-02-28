import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Energiehubs',
  description:
    'Wat is een energiehub? Gedeelde energie-infrastructuur op bedrijventerreinen. Opwek, opslag en verdeling op één locatie — netcongestie omzeilen.',
  path: '/kennisbank/energiehubs',
  datePublished: '2026-02-15',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Energiehubs', url: '/kennisbank/energiehubs' },
])

export default function EnergiehubsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
