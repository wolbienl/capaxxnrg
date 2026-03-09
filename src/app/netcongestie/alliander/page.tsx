import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieNetbeheerderPage from '@/components/NetcongestieNetbeheerderPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Alliander / Liander — wat werkt er?',
  description:
    'Alliander en Liander netcongestie voor bedrijven in Noord-Holland, Gelderland en Friesland. FlexPower, non-firm contracten en GTO\'s: wat werkt?',
  keywords: [
    'Alliander netcongestie',
    'Liander netcongestie',
    'netcongestie Liander oplossing',
    'Liander FlexPower',
    'non-firm contract Liander',
    'GTO Liander',
    'netaansluiting Alliander',
    'transportcapaciteit Liander',
    'congestie Noord-Holland Liander',
    'netcongestie Gelderland',
  ],
  path: '/netcongestie/alliander',
})

export default function NetcongestieAlliandersPage() {
  return (
    <NetcongestieNetbeheerderPage
      breadcrumbItems={[{ name: 'Home', url: '/' }, { name: 'Netcongestie', url: '/netcongestie' }, { name: 'Alliander' }]}
      netbeheerder="Alliander / Liander"
      werkgebied="Noord-Holland · Gelderland · Friesland · Flevoland"
      heroSubtitel="Liander, de uitvoerende netbeheerder van Alliander, beheert het elektriciteitsnet in Noord-Holland, Gelderland, Friesland en Flevoland. Het net staat er onder grote druk — maar Liander biedt specifieke programma's voor flexibiliteit en alternatieve aansluitroutes."
      introductie="Alliander is de beursgenoteerde moedermaatschappij; Liander is de netbeheerder die daadwerkelijk het net beheert en aanspreekbaar is voor aanvragen en contracten. Liander is actief in een van de meest onder druk staande regio's van Nederland, waaronder de Metropoolregio Amsterdam en de Foodvalley in Gelderland."
      introductieDetails={[
        'Liander beheert het elektriciteitsnet voor meer dan 3,4 miljoen aansluitingen in Noord-Holland, Gelderland, Friesland, Flevoland en Zeeland.',
        'De congestiegebieden van Liander zijn gepubliceerd op de Liander Capaciteitskaart (capaciteitskaart.liander.nl). Hierin is per postcodegebied zichtbaar of transport beschikbaar, schaars of geblokkeerd is.',
        'Liander heeft via haar moeder Alliander actief ingezet op publieke communicatie over netcongestie — inclusief concrete data over wachtrijen en doorlooptijden per regio.',
        'Aanvragen worden ingediend via het Liander klantportaal. Voor grootverbruik is een apart traject beschikbaar met een dedicated accountmanager.',
      ]}
      aanpak={[
        {
          title: 'Capaciteitskaart en transparantie',
          description:
            'Liander publiceert uitgebreide data over congestiegebieden en wachtrijen. De capaciteitskaart geeft per postcodegebied aan of uitbreiding mogelijk is en wat de verwachte doorlooptijd is voor netverzwaring.',
        },
        {
          title: 'FlexPower programma',
          description:
            'Via het FlexPower programma kunnen bedrijven met flexibel verbruik of opslagcapaciteit capaciteitsruimte vrijspelen. Deelnemers worden voorrangspositie geboden bij transporttoewijzing in ruil voor aantoonbare flexibiliteit.',
        },
        {
          title: 'Non-firm en TDTR contracten',
          description:
            'Liander biedt non-firm transportcontracten aan waarbij capaciteit beschikbaar is buiten congestiepieken. Tijdsduurgebonden transportrechten (TDTR) geven zekerheid over een minimumaantal uren capaciteit per periode.',
        },
        {
          title: 'Groepstransportovereenkomsten (GTO\'s)',
          description:
            'Liander faciliteert GTO\'s voor bedrijventerreinen en vastgoedclusters. Meerdere partijen contracteren gezamenlijk transportvermogen; iedere deelnemer behoudt de eigen aansluiting. Dit is inmiddels wettelijk verankerd via de Energiewet 2026.',
        },
        {
          title: 'Zelfaanleg (artikel 3.39 Energiewet)',
          description:
            'Boven 2,3 MVA mag u als eindgebruiker zelf kabelinfrastructuur aanleggen. Liander verzorgt de netaansluiting. Deze route is ook in het Liander-werkgebied toepasbaar en omzeilt de civiele wachtrij.',
        },
        {
          title: 'Prioriteringskader en maatschappelijke urgentie',
          description:
            'Liander hanteert een maatschappelijk prioriteringskader voor aanvragen in congestiegebieden. Projecten met een aantoonbaar maatschappelijk belang, duurzaamheidsprestatie of flexibiliteitsbijdrage worden hoger geprioriteerd.',
        },
      ]}
      proces={[
        {
          stap: '1',
          title: 'Oriëntatie via Liander Capaciteitskaart',
          description:
            'Controleer capaciteitskaart.liander.nl voor jouw locatie. De kaart toont direct de transportstatus en eventuele verwachte verbetertermijnen per postcodegebied.',
        },
        {
          stap: '2',
          title: 'Aanvraag indienen via Liander klantportaal',
          description:
            'Dien een formele aanvraag in via het Liander portaal met het gevraagde transportvermogen, locatie en beoogde datum. Voor grootverbruik (>3×80A) start hiermee het haalbaarheidsonderzoek.',
        },
        {
          stap: '3',
          title: 'Haalbaarheidsonderzoek en capaciteitscheck',
          description:
            'Liander beoordeelt de aanvraag technisch. In congestiegebieden resulteert dit in een wachtrij-positie, een aanbod voor een alternatieve contractvorm of een afwijzing met motivering en alternatief advies.',
        },
        {
          stap: '4',
          title: 'FlexPower of alternatieve route bepalen',
          description:
            'Op basis van uw energieprofiel en flexibiliteitsmogelijkheden bespreekt Liander of deelname aan FlexPower of een non-firm contract de juiste route is. Dit vereist documentatie van uw verbruiksprofiel.',
        },
        {
          stap: '5',
          title: 'Contractering en technische realisatie',
          description:
            'Na akkoord op contractvorm start de realisatiefase. Doorlooptijden variëren van enkele maanden (non-firm, bestaande capaciteit) tot meerdere jaren (firm, netverzwaring vereist). Zelfaanleg verkort de bouwfase.',
        },
      ]}
      watWerkt={[
        {
          title: 'Cable pooling & energiegemeenschappen',
          description:
            'Liander faciliteert cable pooling voor bedrijven die aansluitcapaciteit willen delen. In gebieden als de Metropoolregio Amsterdam en Foodvalley wordt dit actief ingezet als congestie-oplossing.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele transportrechten',
          description:
            'Non-firm contracten en TDTR zijn bij Liander beschikbaar. Bedrijven met een flexibel verbruiksprofiel — datacenters, koelhuizen, laadparken — zijn bij uitstek geschikt voor deze contractvormen.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Energiehub op locatie',
          description:
            'Een energiehub combineert opwek, opslag en gedeeld verbruik. Dit verlaagt de gecombineerde netbelasting en is ook in het Liander-werkgebied een effectieve route naast de reguliere transportaanvraag.',
          href: '/kennisbank/energiehubs',
        },
        {
          title: 'Flex-e subsidie 2026 benutten',
          description:
            'De Flex-e subsidie van €62 miljoen vergoedt investeringen in batterijen en flexibiliteitsmaatregelen. Gecombineerd met deelname aan FlexPower van Liander is dit financieel een aantrekkelijke combinatie.',
          href: '/kennisbank/flex-e-subsidie-2026',
        },
      ]}
      verwachtingen={[
        'Liander heeft in haar werkgebied (met name Noord-Holland en Gelderland) te maken met extreme transportschaarste. Doorlooptijden voor firm-aansluitingen lopen in sommige gebieden op tot 5 jaar of meer.',
        'Via non-firm contracten en FlexPower zijn er snellere routes beschikbaar — in veel gevallen binnen 6 tot 18 maanden realiseerbaar voor bedrijven met een flexibel profiel.',
        'Liander is transparanter dan gemiddeld over haar wachtrijen en communiceert actief via haar capaciteitskaart en klantcommunicatie. Dit maakt de eigen positie beter inschatbaar.',
        'De documentatievereisten bij Liander zijn omvangrijker dan bij kleinere netbeheerders. Een goed onderbouwde aanvraag met energiedata vergroot de kans op snelle behandeling.',
        'Voor GTO-aanvragen en cable pooling-constructies is een projectcoördinator nodig. CAPAXX Energy kan deze rol vervullen als trekker van het gezamenlijke aanvraagproces.',
      ]}
      closingText="In het Liander-werkgebied is de druk op het net het hoogst van Nederland — maar juist hier zijn de alternatieve routes het best ontwikkeld. Het loont om die te kennen."
    />
  )
}
