export type CaseStatus = 'lopend' | 'afgerond' | 'gepland'

export interface CaseStatItem {
  label: string
  value: string
}

export interface CaseFrontmatter {
  title: string
  subtitle: string
  slug: string
  status: CaseStatus
  date: string
  image: string
  location: string
  client: string
  clientRole?: string
  netbeheerder: string
  tags: string[]
  featured: boolean
  summary: string
  stats?: CaseStatItem[]
}

export interface CaseEntry {
  frontmatter: CaseFrontmatter
  content: string
}

export const statusLabels: Record<CaseStatus, string> = {
  lopend: 'Lopend project',
  afgerond: 'Afgerond',
  gepland: 'Gepland',
}

export const statusColors: Record<CaseStatus, string> = {
  lopend: 'bg-amber-500',
  afgerond: 'bg-emerald-500',
  gepland: 'bg-blue-500',
}
