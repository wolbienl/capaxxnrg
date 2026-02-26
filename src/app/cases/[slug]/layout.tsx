import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { getCaseBySlug, getAllSlugs } from '@/lib/cases'

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

export default function CaseDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
