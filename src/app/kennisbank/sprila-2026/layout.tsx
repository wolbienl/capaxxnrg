import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'SPRILA 2026',
  description:
    'SPRILA 2026: subsidie voor energie-infrastructuurprojecten die netcongestie verlichten. Wie komt in aanmerking en hoe vraag je aan via RVO?',
  path: '/kennisbank/sprila-2026',
  datePublished: '2026-02-15',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'SPRILA 2026', url: '/kennisbank/sprila-2026' },
])

export default function Sprila2026Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
