import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Flex-e subsidie 2026',
  description:
    'Flex-e subsidie 2026: €62 miljoen voor batterijen, EMS en flexibiliteitsmaatregelen. Tot €300.000 per investering via RVO.',
  path: '/kennisbank/flex-e-subsidie-2026',
  datePublished: '2026-02-15',
  dateModified: '2026-02-28',
})

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Flex-e subsidie', url: '/kennisbank/flex-e-subsidie-2026' },
])

export default function FlexESubsidieLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
