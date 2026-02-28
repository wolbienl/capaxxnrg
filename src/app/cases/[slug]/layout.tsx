import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'
import { getCaseBySlug } from '@/lib/cases'
import JsonLd from '@/components/seo/JsonLd'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseEntry = getCaseBySlug(slug)

  if (!caseEntry) {
    return generatePageMetadata({
      title: 'Case niet gevonden',
      description: 'Deze case bestaat niet.',
      path: `/cases/${slug}`,
    })
  }

  const { frontmatter } = caseEntry

  return generatePageMetadata({
    title: `${frontmatter.title} | Cases`,
    description: frontmatter.summary,
    keywords: frontmatter.tags,
    path: `/cases/${slug}`,
    ogImage: frontmatter.image,
  })
}

export default async function CaseDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseEntry = getCaseBySlug(slug)

  if (!caseEntry) return children

  const { frontmatter } = caseEntry

  const articleSchema = generateArticleSchema({
    title: frontmatter.title,
    description: frontmatter.summary,
    path: `/cases/${slug}`,
    datePublished: frontmatter.date,
    image: frontmatter.image,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Cases', url: '/cases' },
    { name: frontmatter.title, url: `/cases/${slug}` },
  ])

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
