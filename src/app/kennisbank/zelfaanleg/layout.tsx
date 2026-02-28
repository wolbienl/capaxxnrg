import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Zelfaanleg Netaansluiting (Art. 3.39)',
  description:
    'Zelfaanleg netaansluiting via artikel 3.39 Energiewet. Drempel verlaagd naar 2,3 MVA. Snellere realisatie en lagere kosten.',
  path: '/kennisbank/zelfaanleg',
  datePublished: '2026-01-20',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Zelfaanleg', url: '/kennisbank/zelfaanleg' },
])

export default function ZelfaanlegLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
