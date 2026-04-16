import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import { generatePageMetadata } from '@/lib/seo/metadata'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo/structured-data'

export const metadata: Metadata = generatePageMetadata({
  title: 'Inboekdienstverlening',
  description:
    'Officieel inboekdienstverlener geregistreerd bij de NEa. Verdien tot EUR 0,10 per kWh terug via ERE-certificaten voor uw laadinfra.',
  keywords: [
    'inboekdienstverlener',
    'ERE certificaten',
    'ERE-certificaten',
    'inboeken elektriciteit',
    'REV register',
    'emissiereductie-eenheden',
    'laadpaal geld verdienen',
    'ERE laadinfra',
    'MID-meter laadpaal',
    'brandstoftransitieverplichting',
    'inboekdienstverlener NEa',
    'hernieuwbare energie vervoer',
  ],
  path: '/inboekdienstverlening',
})

const serviceSchema = generateServiceSchema({
  name: 'Inboekdienstverlening',
  description:
    'CAPAXX Energy is officieel inboekdienstverlener, geregistreerd bij de Nederlandse Emissieautoriteit (NEa). Wij registreren elektriciteitsleveringen voor vervoer in het Register Energie voor Vervoer (REV) en verzilveren uw ERE-certificaten.',
  serviceType: 'Energy Certificate Registration Service',
  image: '/images/inch-pro-laadpaal.webp',
})

const faqSchema = generateFAQSchema([
  {
    question: 'Wat is een inboekdienstverlener?',
    answer:
      'Een inboekdienstverlener is een bedrijf dat namens andere bedrijven of particulieren elektriciteitsleveringen voor vervoer registreert in het Register Energie voor Vervoer (REV). De inboekdienstverlener neemt de volledige administratie, verificatie en het verhandelen van de ERE-certificaten uit handen.',
  },
  {
    question: 'Hoeveel verdien ik met ERE-certificaten?',
    answer:
      'De opbrengst van ERE-certificaten ligt in 2026 rond de EUR 0,07 tot EUR 0,10 per geladen kWh. Voor een kantoor met 10 laadpunten komt dit neer op circa EUR 2.000 tot EUR 5.000 per jaar. Met eigen zonnepanelen achter de meter kan de opbrengst hoger liggen doordat u 100% hernieuwbaar kunt inboeken in plaats van het standaard netpercentage van 50,5%.',
  },
  {
    question: 'Heb ik een MID-meter nodig in mijn laadpaal?',
    answer:
      'Ja, als uw netaansluiting niet exclusief bestemd is voor het laden van voertuigen (bijvoorbeeld ook kantoorverbruik), dan moet elke laadpaal beschikken over een geintegreerde MID-gecertificeerde meter. Bij een exclusieve aansluiting voor laden volstaat de reguliere netmeter. CAPAXX Energy controleert uw situatie en adviseert over de juiste configuratie.',
  },
  {
    question: 'Wat is het verschil tussen HBE en ERE?',
    answer:
      'Per 1 januari 2026 is het HBE-systeem (Hernieuwbare Brandstofeenheden) vervangen door het ERE-systeem (Emissiereductie-eenheden). Het belangrijkste verschil is dat ERE niet alleen kijkt naar de hoeveelheid hernieuwbare energie, maar ook naar de daadwerkelijke CO2-reductie. De eenheid is veranderd van MJ naar gram CO2-equivalent.',
  },
  {
    question: 'Kan ik ERE-certificaten combineren met eigen zonnepanelen?',
    answer:
      'Ja, en dit is bijzonder interessant. Elektriciteit die op dezelfde locatie (binnen hetzelfde WOZ-object) wordt opgewekt uit hernieuwbare bronnen en rechtstreeks aan vervoer wordt geleverd, kan voor 100% als hernieuwbaar worden ingeboekt. Dat levert bijna dubbel zoveel ERE op als stroom uit het net (100% vs. 50,5%). Voorwaarde is een Garantie van Oorsprong (GvO) niet-netlevering en geen SDE-subsidie op de opwekinstallatie.',
  },
  {
    question: 'Voor wie is inboekdienstverlening bedoeld?',
    answer:
      'Inboekdienstverlening is bedoeld voor iedereen die elektriciteit levert aan elektrisch vervoer en de administratieve last niet zelf wil dragen. Dit zijn onder meer: vastgoedbeheerders met laadpunten voor huurders, logistieke bedrijven met een elektrisch wagenpark, bedrijventerreinen met gedeelde laadinfra, en particulieren met een thuislaadpaal.',
  },
  {
    question: 'Hoe werkt het aanmeldproces bij CAPAXX Energy?',
    answer:
      'Het proces verloopt in vier stappen: (1) U meldt zich aan via ons formulier, (2) wij controleren uw laadinfra en MID-meterconfiguratie, (3) wij registreren uw aansluitingen in het Register Energie voor Vervoer, en (4) u ontvangt periodiek de opbrengst van uw ERE-certificaten. De registratie kan met terugwerkende kracht over het lopende kalenderjaar.',
  },
  {
    question: 'Is CAPAXX Energy een erkende inboekdienstverlener?',
    answer:
      'Ja, CAPAXX Energy staat geregistreerd als inboekdienstverlener bij de Nederlandse Emissieautoriteit (NEa). U vindt ons op de officiele lijst van inboekdienstverleners op emissieautoriteit.nl. Wij zijn daarnaast BRL 9500-U gecertificeerd door SKG-IKOB.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Inboekdienstverlening', url: '/inboekdienstverlening' },
])

export default function InboekdienstverlenerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
