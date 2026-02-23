import type { Metadata } from 'next'
import DoelgroepPage from '@/components/DoelgroepPage'

export const metadata: Metadata = {
  title: 'Vastgoed & Bedrijventerreinen | Netcongestie oplossen | CAPAXX Energy',
  description: 'Je bedrijventerrein kan niet uitbreiden door netcongestie? CAPAXX Energy organiseert energiegemeenschappen, cable pooling en GTO\'s zodat jouw terrein weer kan groeien.',
  keywords: ['netcongestie vastgoed', 'bedrijventerrein netcongestie', 'cable pooling bedrijventerrein', 'energiegemeenschap', 'GTO'],
}

export default function VastgoedPage() {
  return (
    <DoelgroepPage
      iconName="Building2"
      label="Vastgoed & bedrijventerreinen"
      title="Je terrein kan niet"
      titleHighlight="uitbreiden."
      subtitle="Huurders dreigen te vertrekken, laadpalen worden geblokkeerd, en de grond is niet meer bouwrijp. Niet omdat er geen ruimte is, maar omdat het net vol zit. Wij organiseren de oplossing op terreinniveau."
      heroImage="/images/capaxx-energy-energiegemeenschap.png"
      heroImageAlt="Energiegemeenschap op bedrijventerrein"
      pijnpunten={[
        {
          title: 'Huurders vertrekken',
          description: 'Zonder extra stroom kan je huurder niet uitbreiden of elektrificeren. Het pand verliest waarde — niet door de locatie, maar door de aansluiting.'
        },
        {
          title: 'Laadinfra geblokkeerd',
          description: 'EV-laadpalen installeren? Niet mogelijk zonder extra netcapaciteit. Je terrein mist een essentiële voorziening die huurders verwachten.'
        },
        {
          title: 'Grond niet bouwrijp',
          description: 'Gemeenten kunnen kavels niet meer als bouwrijp leveren omdat netbeheerders 1-2 jaar nodig hebben voor een aansluiting. Dat raakt je direct.'
        }
      ]}
      complexiteitIntro="De meeste vastgoedeigenaren lopen vast op hetzelfde punt: de complexiteit van het speelveld overstijgt de interne capaciteit."
      complexiteit={[
        { text: 'Netbeheerders hebben wachtlijsten van meer dan 22.000 partijen. Een verzwaarde aansluiting aanvragen kan jaren duren.' },
        { text: 'De organisatiegraad op bedrijventerreinen is laag: bedrijven weten niet wat de buurman verbruikt of opwekt. Samenwerking komt niet vanzelf tot stand.' },
        { text: 'De Energiewet 2026 verandert de spelregels rond cable pooling, GTO\'s en flexibele contracten — maar vereist gespecialiseerde kennis die vastgoedeigenaren niet in huis hebben.' },
        { text: 'Financiering voor procesbegeleiding ontbreekt. De governance voor energiehubs is complex, met doorlooptijden van 1,5-3 jaar.' }
      ]}
      oplossingsIntro="Wij combineren de oplossingen die bij jouw terrein passen. Onafhankelijk, zonder hardware-belang."
      oplossingen={[
        {
          title: 'Energiegemeenschap oprichten (GTO & cable pooling)',
          description: 'Met je buren om tafel, samen transportcapaciteit contracteren of een aansluiting delen. Maximaal vier partijen, vanaf 100 kVA. Wij begeleiden het hele proces.',
          href: '/kennisbank/cable-pooling'
        },
        {
          title: 'Flexibiliteit rendabel maken',
          description: 'Batterijopslag, slim laden, peak shaving. Niet als gadget, maar als businesscase. Met de Flex-e subsidie dekt de overheid tot €300.000 van de investering.',
          href: '/kennisbank/transportrechten'
        },
        {
          title: 'Energiewet 2026 benutten',
          description: 'Sinds 1 januari is de nieuwe Energiewet van kracht. Cable pooling verbreed naar alle installatietypes, GTO\'s formeel geregeld. Wij navigeren de nieuwe mogelijkheden.',
          href: '/kennisbank/energiewet-2026'
        },
        {
          title: 'Zelfaanleg bij grotere behoefte',
          description: 'Drempel verlaagd naar 2,3 MVA. Jij schakelt een gekwalificeerde aannemer in, de netbeheerder koppelt aan. Sneller, goedkoper, meer regie.',
          href: '/kennisbank/zelfaanleg'
        }
      ]}
      closingText="Het verschil tussen bedrijven die stilstaan en bedrijven die doorgroeien? De eerste wachten op capaciteit op het net. De tweede laten hun aansluiting harder werken voor hun operatie."
    />
  )
}
