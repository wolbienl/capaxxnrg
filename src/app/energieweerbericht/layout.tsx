import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Energieweerbericht Nederland | Wind & Zon Voorspelling',
  description:
    'Bekijk het actuele energieweerbericht voor Nederland. Live voorspelling van windenergie en zonne-energie productie per dag. Gebruik het energieweerbericht voor slim laden, batterijopslag en energiebeheer.',
  keywords: [
    'energieweerbericht',
    'energieweerbericht nederland',
    'windenergie voorspelling',
    'zonne-energie vandaag',
    'groene stroom voorspelling',
    'hernieuwbare energie forecast',
    'wanneer veel zonne-energie',
    'windenergie opwek vandaag',
    'slim laden zonnepanelen',
    'batterijopslag wanneer opladen',
    'energieproductie nederland',
    'NED energiedata',
    'energietransitie nederland',
    'groene energie prognose',
    'duurzame energie prognose',
  ],
  path: '/energieweerbericht',
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is een energieweerbericht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een energieweerbericht toont de verwachte opwek van windenergie en zonne-energie in Nederland voor de komende dagen. Net als een weersverwachting, maar dan voor de energieproductie uit hernieuwbare bronnen. Het helpt bedrijven en particulieren om slim om te gaan met energie: laden wanneer er veel groene stroom is en ontladen wanneer er schaarste is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is er de meeste zonne-energie in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste zonne-energie wordt opgewekt tussen april en september, op zonnige dagen tussen 10:00 en 15:00 uur. Het energieweerbericht geeft per dag een indicatie van de verwachte zonne-energieproductie in Nederland, zodat je weet wanneer je het beste kunt laden of verbruiken.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe gebruik ik het energieweerbericht voor mijn bedrijf?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Met een energiemanagementsysteem (EMS) en batterijopslag kun je automatisch profiteren van momenten met veel wind- en zonne-energie. Laad je batterij op als de productie hoog en de prijs laag is. Ontlaad op momenten van schaarste. Het energieweerbericht van CAPAXX combineert NED.nl data met de actuele EPEX Spot prijzen voor maximaal inzicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen wind- en zonne-energie voorspelling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Windenergie wordt dag en nacht opgewekt, afhankelijk van de windkracht. Zonne-energie is alleen overdag beschikbaar en sterk afhankelijk van bewolking en seizoen. Het energieweerbericht toont beide bronnen naast elkaar, zodat je een volledig beeld hebt van de verwachte groene stroomproductie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe betrouwbaar is de energieprognose van NED.nl?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het Nationaal Energie Dashboard (NED.nl) is een initiatief van Gasunie en TenneT. De prognoses zijn gebaseerd op geavanceerde weermodellen en historische productiedata. Voor de eerste twee dagen is de voorspelling het meest nauwkeurig; verder in de toekomst neemt de onzekerheid toe, net als bij een weersverwachting.',
      },
    },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Energieweerbericht Nederland | Wind & Zon Voorspelling',
  description:
    'Live energieweerbericht voor Nederland: 7-daagse voorspelling van wind- en zonne-energieproductie via NED.nl data.',
  url: `${SITE_CONFIG.url}/energieweerbericht`,
  about: {
    '@type': 'Thing',
    name: 'Hernieuwbare energie productie Nederland',
    description: 'Wind- en zonne-energie opwek in Nederland',
  },
  provider: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
};

export default function EnergieweerberichtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={webPageSchema} />
      {children}
    </>
  );
}
