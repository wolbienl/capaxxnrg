import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata = generatePageMetadata({
  title: 'Netcapaciteitskaart Overijssel | Congestiestatus per voedingsgebied',
  description:
    'Bekijk de actuele netcongestiestatus per voedingsgebied in Overijssel. Inzicht in transportcapaciteit, wachtrijen en geplande netuitbreidingen in de regio.',
  keywords: ['netcapaciteitskaart overijssel', 'netcongestie overijssel', 'voedingsgebied', 'transportcapaciteit overijssel'],
  path: '/netcapaciteitskaart/overijssel/',
})

export default function OverijsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
