import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Flexibele Transportrechten',
  description:
    'Non-firm, TDTR en tijdsblokgebonden transportrechten. Netcongestie oplossen met 50-65% nettariefkorting.',
  path: '/kennisbank/transportrechten',
  datePublished: '2026-01-20',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Transportrechten', url: '/kennisbank/transportrechten' },
])

export default function TransportrechtenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
