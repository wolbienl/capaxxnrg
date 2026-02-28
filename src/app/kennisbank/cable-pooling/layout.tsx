import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Cable Pooling & Energiegemeenschappen',
  description:
    'Cable pooling bedrijventerrein: aansluiting delen met max. vier partijen vanaf 100 kVA. Energiegemeenschap oprichten en GTO afsluiten.',
  path: '/kennisbank/cable-pooling',
  datePublished: '2026-01-20',
  dateModified: '2026-02-28',
  image: '/images/capaxx-energy-energiegemeenschap.png',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Cable Pooling', url: '/kennisbank/cable-pooling' },
])

export default function CablePoolingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
