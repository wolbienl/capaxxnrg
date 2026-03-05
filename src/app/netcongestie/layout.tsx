import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie',
  description: 'Netcongestie aanpak voor commercieel vastgoed in Twente. Van wachtlijst naar werkbare netstrategie met opslag, sturing en slimme contractvormen.',
  keywords: [
    'netcongestie',
    'congestiemanagement',
    'transportcapaciteit',
    'grootverbruikersaansluiting',
    'cable pooling',
    'transportrechten',
    'zelfaanleg',
    'energieprojecten',
    'Twente'
  ],
  path: '/netcongestie'
});

export default function NetcongestieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = generateServiceSchema({
    name: 'Netcongestie advies en realisatie',
    description: 'Praktische ondersteuning bij netcongestie voor vastgoed, industrie en projectontwikkeling. Van strategie en vergunningen tot technische realisatie en sturing.',
    serviceType: 'Grid Congestion Advisory and Energy Infrastructure Services',
    image: '/images/storage-hero.png'
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Netcongestie', url: '/netcongestie' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      question: 'Wat is netcongestie?',
      answer: 'Netcongestie betekent dat het elektriciteitsnet vol is: netbeheerders kunnen geen nieuwe of grotere aansluitingen meer garanderen omdat er onvoldoende transportcapaciteit beschikbaar is. In Nederland is netcongestie een groot probleem, met name in Twente, Overijssel en andere industriële regio\'s. Bedrijven op de wachtlijst kunnen soms jaren wachten op een adequate aansluiting.',
    },
    {
      question: 'Welke oplossingen zijn er voor netcongestie?',
      answer: 'Er zijn meerdere oplossingen voor netcongestie: (1) Cable pooling — een netaansluiting delen met andere bedrijven via een Groepstransportovereenkomst. (2) Batterijopslag — piekbelasting afvlakken zodat een kleinere aansluiting volstaat. (3) Non-firm transportrecht — tijdelijk transportrecht dat beschikbaar is wanneer het net het toelaat. (4) Zelfaanleg van netinfrastructuur. (5) Energiehub — collectieve energie-infrastructuur op een bedrijventerrein. CAPAXX Energy analyseert welke combinatie het meest geschikt is voor uw situatie.',
    },
    {
      question: 'Hoe lang duurt het voordat netcongestie is opgelost in Nederland?',
      answer: 'Netbeheerders zoals Enexis en Liander verwachten dat de zwaarste congestie in Nederland pas rond 2030-2032 afneemt door grootschalige netverzwaring. Voor individuele bedrijven zijn er echter kortetermijnoplossingen via cable pooling, batterijopslag en flexibele contractvormen die op korte termijn (6-18 maanden) te implementeren zijn.',
    },
    {
      question: 'Wat kan een bedrijf doen als er geen transportcapaciteit beschikbaar is?',
      answer: 'Als er geen transportcapaciteit beschikbaar is, zijn er meerdere opties: aanvragen voor een non-firm ATO (Aansluit- en Transportovereenkomst), cable pooling met naburige bedrijven, investeren in batterijopslag voor piekafvlakking, of deelnemen aan congestiemanagement-programma\'s van de netbeheerder. CAPAXX Energy voert een gratis quickscan uit om te bepalen welke strategie het meest kansrijk is.',
    },
    {
      question: 'Helpt batterijopslag tegen netcongestie?',
      answer: 'Ja. Batterijopslag (BESS) kan de piekvraag van een bedrijf significant reduceren, waardoor een kleinere netaansluiting volstaat. Door op momenten van lage netbelasting op te laden en tijdens pieken te ontladen, vermindert het bedrijf zijn benodigde transportcapaciteit. In combinatie met een EMS (energiemanagementsysteem) is dit een bewezen aanpak voor netcongestie.',
    },
  ]);

  return (
    <>
      <JsonLd data={[serviceSchema, breadcrumbSchema, faqSchema]} />
      {children}
    </>
  );
}
