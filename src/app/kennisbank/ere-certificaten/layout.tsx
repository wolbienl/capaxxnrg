import JsonLd from '@/components/seo/JsonLd'
import { generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/structured-data'

const articleSchema = generateArticleSchema({
  title: 'ERE-certificaten: van HBE naar ERE in 2026',
  description:
    'Alles over ERE-certificaten (Emissiereductie-eenheden): hoe ze werken, wat ze opleveren, MID-meter eisen en het verschil met HBE. Compleet overzicht voor bedrijven en particulieren.',
  path: '/kennisbank/ere-certificaten',
  datePublished: '2026-04-16',
  dateModified: '2026-04-16',
  image: '/images/etrel-inch-duo-laadpaal.webp',
})

const faqSchema = generateFAQSchema([
  {
    question: 'Wat zijn ERE-certificaten?',
    answer:
      'ERE-certificaten (Emissiereductie-eenheden) zijn verhandelbare eenheden die je ontvangt voor het leveren van elektriciteit aan elektrisch vervoer. Ze zijn per 1 januari 2026 de opvolger van HBE\'s. Elke ERE vertegenwoordigt een bepaalde hoeveelheid vermeden CO2-uitstoot, uitgedrukt in gram CO2-equivalent.',
  },
  {
    question: 'Hoeveel is een ERE-certificaat waard?',
    answer:
      'De waarde van een ERE wordt bepaald door vraag en aanbod op de markt. In 2026 ligt de marktwaarde rond EUR 0,07 tot EUR 0,10 per geladen kWh. Brandstofleveranciers kopen ERE\'s om te voldoen aan hun brandstoftransitieverplichting.',
  },
  {
    question: 'Wat is het verschil tussen HBE en ERE?',
    answer:
      'Het HBE-systeem (Hernieuwbare Brandstofeenheden) keek alleen naar de hoeveelheid hernieuwbare energie in MJ. Het ERE-systeem kijkt naar de daadwerkelijke CO2-reductie in gram CO2-equivalent. Daarnaast is de ERE sectorgebonden (land, binnenvaart, zeevaart) en niet vrij verhandelbaar tussen sectoren.',
  },
  {
    question: 'Heb ik een MID-meter nodig voor ERE-certificaten?',
    answer:
      'Ja, als uw netaansluiting niet exclusief voor vervoer is (bijv. ook kantoorverbruik), moet elke laadpaal beschikken over een geintegreerde MID-gecertificeerde meter. Dit is een geregeld meetinstrument conform de Metrologiewet, voorzien van een geldige conformiteitbeoordeling.',
  },
  {
    question: 'Kan ik meer ERE\'s verdienen met eigen zonnepanelen?',
    answer:
      'Ja. Elektriciteit opgewekt uit hernieuwbare bronnen op dezelfde locatie (binnen hetzelfde WOZ-object) en rechtstreeks aan vervoer geleverd, kan voor 100% hernieuwbaar worden ingeboekt. Netstroom telt voor 50,5% (2026). U heeft hiervoor een Garantie van Oorsprong (GvO) niet-netlevering nodig en er mag geen SDE-subsidie op de installatie zitten.',
  },
  {
    question: 'Wat is de brandstoftransitieverplichting?',
    answer:
      'De brandstoftransitieverplichting (BTV) verplicht brandstofleveranciers om een toenemend percentage van hun fossiele brandstoffen te vervangen door hernieuwbare alternatieven. Zij voldoen hieraan door ERE\'s te kopen op de markt. Dit creëert de vraag naar ERE-certificaten en daarmee de waarde ervan.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Kennisbank', url: '/kennisbank' },
  { name: 'ERE-certificaten', url: '/kennisbank/ere-certificaten' },
])

export default function EreCertificatenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  )
}
