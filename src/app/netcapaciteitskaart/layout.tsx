import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Netcapaciteitskaart Nederland | Congestiestatus per provincie | CAPAXX Energy',
  description:
    'Bekijk de actuele netcongestiestatus per provincie op de interactieve netcapaciteitskaart. Inzicht in transportcapaciteit, wachtrijen en geplande uitbreidingen.',
  openGraph: {
    title: 'Netcapaciteitskaart Nederland — CAPAXX Energy',
    description:
      'Interactieve kaart met congestiestatus per provincie. Bekijk beschikbare transportcapaciteit voor afname en invoeding.',
    type: 'website',
  },
}

export default function NetcapaciteitskaartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
