import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'Inboeken elektriciteit: compleet overzicht voor bedrijven',
  description:
    'Hoe werkt het inboeken van elektriciteit voor vervoer? Alles over het REV, de drempelwaarde van 2 miljoen kWh, eisen aan aansluitingen en de rol van de inboekdienstverlener.',
  path: '/kennisbank/inboeken-elektriciteit',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
})

const faqSchema = generateFAQSchema([
  {
    question: 'Wat is inboeken van elektriciteit?',
    answer:
      'Inboeken is het registreren van elektriciteitsleveringen aan elektrisch vervoer in het Register Energie voor Vervoer (REV). Voor elke geregistreerde levering ontvang je Emissiereductie-eenheden (ERE\'s), die verhandelbaar zijn en geld opleveren.',
  },
  {
    question: 'Wat is het Register Energie voor Vervoer (REV)?',
    answer:
      'Het REV is het online register van de Nederlandse Emissieautoriteit (NEa) waarin alle energieleveringen aan vervoer worden geregistreerd. Bedrijven boeken hier hun elektriciteitsleveringen in en ontvangen ERE\'s die direct worden bijgeschreven.',
  },
  {
    question: 'Wat is de drempelwaarde voor zelf registreren in het REV?',
    answer:
      'Om zelfstandig te mogen registreren in het REV moet een bedrijf minimaal 2 miljoen kWh per jaar aan vervoer leveren. Dit is een eis voor zelfstandige registratie — niet voor deelname aan het systeem. Bedrijven en particulieren die onder deze drempel zitten schakelen een inboekdienstverlener in die dit namens hen doet.',
  },
  {
    question: 'Wat zijn de eisen aan een exclusieve aansluiting?',
    answer:
      'Een exclusieve aansluiting is een verbinding met het elektriciteitsnet die uitsluitend bestemd is voor de levering van elektriciteit aan voer- of vaartuigen. Er mag geen ander verbruik (kantoor, winkel) op dezelfde aansluiting zitten. Bij een exclusieve aansluiting volstaat de reguliere netmeter.',
  },
  {
    question: 'Wanneer moet ik een inboekdienstverlener inschakelen?',
    answer:
      'U hoeft niet aan een minimale omvang te voldoen om deel te nemen — van één thuislaadpaal tot een groot wagenpark kan worden ingeboekt. Een inboekdienstverlener registreert gebundeld de leveringen van meerdere klanten en draagt zorg voor alle administratie, verificatie en verkoop van ERE-certificaten.',
  },
  {
    question: 'Hoe werkt de jaarafsluiting van ERE\'s?',
    answer:
      'Leveringen uit jaar X kunnen tot 1 maart van jaar X+1 worden ingeboekt. ERE\'s worden direct bijgeschreven na inboeking. Voor 1 april moet elke inboeker een inboekverificatieverklaring hebben. Op 1 april vindt de jaarafsluiting plaats, waarbij ERE\'s boven het spaarlimiet komen te vervallen.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'Inboeken elektriciteit', url: '/kennisbank/inboeken-elektriciteit' },
])

export default function InboekenElektriciteitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
