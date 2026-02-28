import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Energiewet 2026',
  description:
    'Sinds 1 januari 2026 is de Elektriciteitswet 1998 vervangen. Cable pooling, GTO\'s, zelfaanleg en transportrechten fundamenteel gewijzigd.',
  path: '/kennisbank/energiewet-2026',
  datePublished: '2026-01-15',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Energiewet 2026', url: '/kennisbank/energiewet-2026' },
])

export default function Energiewet2026Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
