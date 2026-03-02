import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Netcapaciteitskaart Overijssel | Congestiestatus per voedingsgebied | CAPAXX Energy',
  description:
    'Bekijk de actuele netcongestiestatus per voedingsgebied in Overijssel. Inzicht in transportcapaciteit, wachtrijen en geplande netuitbreidingen in de regio.',
  openGraph: {
    title: 'Netcapaciteitskaart Overijssel — CAPAXX Energy',
    description:
      'Interactieve kaart van Overijssel met congestiestatus per voedingsgebied. Bekijk beschikbare transportcapaciteit voor afname en invoeding.',
    type: 'website',
  },
}

export default function OverijsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
