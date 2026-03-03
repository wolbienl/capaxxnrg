import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata = generatePageMetadata({
  title: 'Netcapaciteitskaart Nederland | Congestiestatus per provincie',
  description:
    'Bekijk de actuele netcongestiestatus per provincie op de interactieve netcapaciteitskaart. Inzicht in transportcapaciteit, wachtrijen en geplande uitbreidingen.',
  keywords: ['netcapaciteitskaart', 'netcongestie', 'transportcapaciteit', 'congestiestatus', 'provincie'],
  path: '/netcapaciteitskaart/',
})

export default function NetcapaciteitskaartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
