import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { CaseFrontmatter, CaseEntry } from './cases-types'

export type { CaseStatus, CaseFrontmatter, CaseEntry } from './cases-types'
export { statusLabels, statusColors } from './cases-types'

const casesDirectory = path.join(process.cwd(), 'content', 'cases')

export function getAllCases(): CaseEntry[] {
  const files = fs.readdirSync(casesDirectory).filter((f) => f.endsWith('.mdx'))

  const cases = files.map((filename) => {
    const filePath = path.join(casesDirectory, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      frontmatter: data as CaseFrontmatter,
      content,
    }
  })

  return cases.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )
}

export function getCaseBySlug(slug: string): CaseEntry | undefined {
  const cases = getAllCases()
  return cases.find((c) => c.frontmatter.slug === slug)
}

export function getAllSlugs(): string[] {
  return getAllCases().map((c) => c.frontmatter.slug)
}

export function getFeaturedCases(): CaseEntry[] {
  return getAllCases().filter((c) => c.frontmatter.featured)
}
