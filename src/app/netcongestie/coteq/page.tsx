import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieNetbeheerderPage from '@/components/NetcongestieNetbeheerderPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Coteq — wat werkt er?',
  description:
    'Coteq netcongestie voor bedrijven in Overijssel en de grensregio Drenthe. Wat werkt bij Coteq Netbeheer en welke routes creëren ruimte voor uw aansluiting?',
  keywords: [
    'Coteq netcongestie',
    'netcongestie Coteq oplossing',
    'Coteq Netbeheer',
    'netaansluiting Coteq',
    'congestie Overijssel Coteq',
    'transportcapaciteit Coteq',
    'Coteq Hardenberg',
    'Coteq Ommen',
    'netcongestie Coevorden',
  ],
  path: '/netcongestie/coteq',
})

export default function NetcongestionCoteqPage() {
  return (
    <NetcongestieNetbeheerderPage
      netbeheerder="Coteq"
      werkgebied="Overijssel · Hardenberg · Ommen · Coevorden"
      heroSubtitel="Coteq Netbeheer beheert het elektriciteitsnet in delen van Overijssel en de grensregio met Drenthe. Als onderdeel van Enexis Groep werkt Coteq met vergelijkbare processen, maar met meer directe aanspreekbaarheid op regionaal niveau."
      introductie="Coteq Netbeheer is een regionale netbeheerder actief in het noordoostelijke deel van Overijssel en aangrenzende gebieden van Drenthe. Coteq is onderdeel van de Enexis Groep, maar opereert onder een eigen naam en met eigen contactstructuren voor het werkgebied."
      introductieDetails={[
        'Coteq beheert het elektriciteitsnet in gemeenten zoals Hardenberg, Ommen, Staphorst en aangrenzende regio\'s richting Coevorden en Hoogeveen.',
        'Als onderdeel van Enexis Groep hanteert Coteq dezelfde technische standaarden, contractvormen en aanvraagprocedures als Enexis — inclusief non-firm contracten, cable pooling en GTO\'s.',
        'Coteq is bereikbaar via het Enexis-portaal (Mijn Aansluiting) voor grootverbruikaanvragen. Voor specifieke vragen over het Coteq-werkgebied zijn regionale contactpersonen beschikbaar.',
        'De congestiekaart van het Coteq-werkgebied is onderdeel van de bredere Enexis Capaciteitskaart. Postcodegebieden in het Coteq-werkgebied zijn hierin zichtbaar.',
      ]}
      aanpak={[
        {
          title: 'Regionaal netbeheer, dezelfde instrumenten',
          description:
            'Coteq maakt gebruik van dezelfde congestiemechanismen als Enexis: non-firm contracten, tijdsblokgebonden transportrechten en cable pooling-faciliteiten. De kaders zijn identiek; het voordeel is een regionaler aanspreekpunt.',
        },
        {
          title: 'Kleinschaliger werkgebied, meer directheid',
          description:
            'Het kleinere werkgebied van Coteq maakt dat aanvragen doorgaans sneller worden beoordeeld dan in de drukke kerngebieden van Enexis. Directe afstemming met regionale netplanners is vaker mogelijk.',
        },
        {
          title: 'Cable pooling en GTO\'s',
          description:
            'Coteq faciliteert cable pooling-constructies voor bedrijventerreinen in haar werkgebied. Meerdere partijen kunnen gezamenlijk transportcapaciteit contracteren via een GTO, wat de benodigde netcapaciteit per individuele partij verlaagt.',
        },
        {
          title: 'Non-firm en tijdsblokgebonden contracten',
          description:
            'Voor bedrijven die flexibel kunnen omgaan met hun energieverbruik zijn non-firm contracten beschikbaar. Dit geldt ook in delen van het Coteq-gebied die onder transportschaarste vallen.',
        },
      ]}
      proces={[
        {
          stap: '1',
          title: 'Check via Enexis Capaciteitskaart',
          description:
            'Controleer de capaciteitskaart van Enexis/Coteq voor de locatie. Het Coteq-werkgebied is opgenomen in de nationale Enexis Capaciteitskaart en geeft directe inzage in de transportstatus van jouw postcodegebied.',
        },
        {
          stap: '2',
          title: 'Aanvraag via Mijn Aansluiting',
          description:
            'Aanvragen voor nieuwe aansluitingen of uitbreidingen worden ingediend via het Enexis-portaal (Mijn Aansluiting). Geef daarbij het gewenste vermogen, de locatie en de gewenste ingebruiknamedatum op.',
        },
        {
          stap: '3',
          title: 'Regionaal haalbaarheidsonderzoek',
          description:
            'Coteq voert een technische check uit. In het Coteq-werkgebied is de kans op directe communicatie met regionale netplanners groter dan in de overvolle kerngebieden van Enexis. Dit kan het traject versnellen.',
        },
        {
          stap: '4',
          title: 'Contractvorm bepalen',
          description:
            'Op basis van de technische check wordt de contractvorm bepaald: firm transportrecht, non-firm, TDTR, cable pooling of GTO. Flexibiliteitsaanbod versterkt de positie bij de toewijzing.',
        },
        {
          stap: '5',
          title: 'Realisatie en ingebruikname',
          description:
            'Na contractakkoord start de technische realisatie. In het Coteq-werkgebied zijn doorlooptijden soms korter door minder druk op de netinfrastructuur, maar dit verschilt sterk per locatie en gevraagde capaciteit.',
        },
      ]}
      watWerkt={[
        {
          title: 'Cable pooling op bedrijventerreinen',
          description:
            'Bedrijven in het Coteq-werkgebied kunnen aansluitcapaciteit delen via cable pooling. Met meerdere partijen op één aansluiting hoeft minder individueel transportvermogen te worden gecontracteerd.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele transportrechten',
          description:
            'Non-firm contracten bieden transportcapaciteit buiten de congestiepieken. Voor bedrijven in de agrofood, logistiek of productie met een variabel energieprofiel is dit een realistische route.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg bij grotere capaciteitsvraag',
          description:
            'Boven 2,3 MVA mag u zelf bekabelen. Coteq verzorgt vervolgens de netaansluiting. Dit is ook toepasbaar in het Coteq-werkgebied en verkort de doorlooptijd voor de civiele fase.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Energiewet 2026: nieuwe kansen',
          description:
            'De nieuwe Energiewet biedt ook in het Coteq-werkgebied meer mogelijkheden: bredere cable pooling, formele GTO\'s en flexibele contractvormen die eerder niet bestonden.',
          href: '/kennisbank/energiewet-2026',
        },
      ]}
      verwachtingen={[
        'Aanvragen in het Coteq-werkgebied worden doorgaans sneller beoordeeld dan in de kerngebieden van Enexis, maar dit verschilt per locatie en gevraagde capaciteit.',
        'De technische processen en contractvormen zijn identiek aan Enexis. Kennis van Enexis-procedures is volledig toepasbaar bij Coteq.',
        'In sommige delen van het Coteq-werkgebied is direct contact met regionale netplanners mogelijk, wat de doorlooptijd van de haalbaarheidscheck kan verkorten.',
        'Bij grotere projecten (>1 MVA) is het aanleveren van een energieprofiel en flexibiliteitsdocumentatie ook bij Coteq een vereiste voor het haalbaarheidsonderzoek.',
        'GTO-trajecten met meerdere bedrijven op een terrein zijn ook bij Coteq mogelijk. Een gezamenlijke aanvraag via een trekker vergroot de kans op snelle toewijzing.',
      ]}
      closingText="Coteq biedt in haar werkgebied dezelfde tools als Enexis — met het voordeel van een regionaler proces. Weet je wat je kunt vragen, dan kom je sneller vooruit."
    />
  )
}
