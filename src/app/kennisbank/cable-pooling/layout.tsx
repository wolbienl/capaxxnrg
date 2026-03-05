import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Cable Pooling & Energiegemeenschappen',
  description:
    'Cable pooling bedrijventerrein: aansluiting delen met max. vier partijen vanaf 100 kVA. Energiegemeenschap oprichten en GTO afsluiten.',
  path: '/kennisbank/cable-pooling',
  datePublished: '2026-01-20',
  dateModified: '2026-02-28',
  image: '/images/capaxx-energy-energiegemeenschap.webp',
})

const faqSchema = generateFAQSchema([
  {
    question: 'Wat is cable pooling?',
    answer: "Cable pooling is een technische en juridische constructie waarbij meerdere bedrijven of projecten één gedeelde netaansluiting gebruiken. Hierdoor kunnen partijen met complementaire energieprofielen — zoals zonnepanelen overdag en een verbruiker 's nachts — samen een aansluiting benutten die voor één partij te groot zou zijn. In Nederland is cable pooling wettelijk geregeld via de Energiewet.",
  },
  {
    question: 'Hoeveel partijen mogen deelnemen aan cable pooling?',
    answer: 'Volgens de Nederlandse regelgeving mogen maximaal vier partijen één netaansluiting delen via cable pooling. Alle deelnemers sluiten een Groepstransportovereenkomst (GTO) af met de netbeheerder. Er geldt een minimaal aansluitvermogen van 100 kVA per deelnemer.',
  },
  {
    question: 'Wat is een Groepstransportovereenkomst (GTO)?',
    answer: 'Een Groepstransportovereenkomst (GTO) is het contract dat alle deelnemers aan een cable pooling-constructie gezamenlijk afsluiten met de netbeheerder (zoals Enexis, Liander of Coteq). In de GTO staan afspraken over de verdeling van transportcapaciteit, verantwoordelijkheden en de gezamenlijke aansluiting.',
  },
  {
    question: 'Helpt cable pooling bij netcongestie?',
    answer: 'Ja. Cable pooling lost netcongestie op door transportcapaciteit slimmer te benutten. Door partijen te koppelen met complementaire verbruiks- en opwekprofielen — zonnepanelen, batterijopslag en grootverbruikers — wordt piekbelasting gespreid. Zo kan een aansluiting meer bedrijven bedienen zonder dat het net zwaarder hoeft te worden.',
  },
  {
    question: 'Wat doet CAPAXX Energy bij cable pooling?',
    answer: 'CAPAXX Energy begeleidt het volledige cable pooling traject: van het identificeren van geschikte partners op een bedrijventerrein, de juridische structurering via een MLOEA of energiegemeenschap-constructie, tot het afsluiten van de GTO met de netbeheerder en de technische realisatie van de gedeelde infrastructuur.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Cable Pooling', url: '/kennisbank/cable-pooling' },
])

export default function CablePoolingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
