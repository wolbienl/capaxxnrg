import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieNetbeheerderPage from '@/components/NetcongestieNetbeheerderPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Enexis — wat werkt er?',
  description:
    'Enexis netcongestie in Twente en Overijssel. Capaciteitskaart, Flexmarkt, non-firm contracten en GTO\'s: wat werkt bij Enexis en hoe doorloop je het proces?',
  keywords: [
    'Enexis netcongestie',
    'netcongestie Enexis oplossing',
    'Enexis capaciteitskaart',
    'Enexis Flexmarkt',
    'non-firm contract Enexis',
    'GTO Enexis',
    'netaansluiting Enexis',
    'congestie Twente Enexis',
    'transportcapaciteit Enexis',
  ],
  path: '/netcongestie/enexis',
})

export default function NetcongestieEnexisPage() {
  return (
    <NetcongestieNetbeheerderPage
      netbeheerder="Enexis"
      werkgebied="Twente · Overijssel · Noord- en Oost-Nederland"
      heroSubtitel="Enexis beheert het elektriciteitsnet in Twente en groot deel van Noord- en Oost-Nederland. Het net zit vol, maar Enexis biedt specifieke routes die wél ruimte creëren — als je weet hoe het systeem werkt."
      introductie="Enexis Netbeheer is de grootste regionale netbeheerder van Nederland en verantwoordelijk voor het elektriciteitsnet in Overijssel, Twente, Groningen, Friesland, Drenthe en delen van Noord-Brabant en Limburg. Voor bedrijven in Twente en Overijssel is Enexis daarmee de directe gesprekspartner bij netcongestie."
      introductieDetails={[
        'Enexis beheert ruim 230.000 kilometer aan kabels en leidingen en bedient meer dan 3 miljoen aansluitingen in Noord-, Oost- en Zuid-Nederland.',
        'De congestiegebieden worden gepubliceerd op de Enexis Capaciteitskaart (capaciteitskaart.enexis.nl). Hieruit blijkt welke postcodegebieden en stations onder transportschaarste vallen.',
        'Enexis maakt onderscheid tussen aansluitingen tot 3×80 Ampère (kleinverbruik) en grootverbruik. Netcongestie treft met name grootverbruikers boven 3×80 A die willen uitbreiden of nieuw aansluiten.',
        'Enexis is via Mijn Aansluiting (mijn.enexis.nl) bereikbaar voor aanvragen, statusupdates en communicatie over transport­overeenkomsten.',
      ]}
      aanpak={[
        {
          title: 'Capaciteitskaart en congestiegebieden',
          description:
            'Enexis publiceert actief welke stations en gebieden onder transportschaarste vallen. Per postcodegebied is inzichtelijk of uitbreiding mogelijk is, op een wachtlijst staat of geblokkeerd is. Dit maakt de situatie transparanter dan bij veel andere netbeheerders.',
        },
        {
          title: 'Enexis Flexmarkt',
          description:
            'Via de Enexis Flexmarkt kunnen grootverbruikers met flexibel verbruik of opslag capaciteit vrijspelen. Bedrijven die bereid zijn hun piekverbruik te verschuiven of op aanvraag terug te regelen, krijgen voorrang bij transporttoewijzing of ontvangen een vergoeding.',
        },
        {
          title: 'Non-firm transportcontracten',
          description:
            'Enexis biedt non-firm overeenkomsten waarbij transportcapaciteit beschikbaar is behalve in congestiesituaties. Dit is voor veel bedrijven een werkbare tussenstap: wel een aansluiting, maar met acceptabele beperkingen op piekmomenten.',
        },
        {
          title: 'Groepstransportovereenkomsten (GTO\'s)',
          description:
            'Meerdere bedrijven op een bedrijventerrein kunnen gezamenlijk transportcapaciteit contracteren via een GTO. Enexis faciliteert dit proces, waarbij één technische aansluiting wordt gedeeld terwijl iedere deelnemer een eigen contract behoudt.',
        },
        {
          title: 'Congestiemanagement bij >60 MW',
          description:
            'Bedrijven met meer dan 60 MW gecontracteerd transportvermogen zijn wettelijk verplicht deel te nemen aan congestiemanagement. Enexis heeft hiervoor een gestructureerd aanbestedingsproces met duidelijke rapportageverplichtingen. CAPAXX Energy begeleidt je door dit traject.',
        },
        {
          title: 'Zelfaanleg (artikel 3.39 Energiewet)',
          description:
            'Boven de drempel van 2,3 MVA mag een eindgebruiker zelf de bekabeling aanleggen. Enexis verzorgt vervolgens de aansluiting op het hoofdnet. Dit omzeilt de wachtlijst voor de civiele bouwfase en kan de doorlooptijd significant verkorten.',
        },
      ]}
      proces={[
        {
          stap: '1',
          title: 'Oriëntatie via Capaciteitskaart',
          description:
            'Controleer eerst de Enexis Capaciteitskaart voor jouw locatie. Dit geeft direct inzicht of er überhaupt transportcapaciteit beschikbaar is en of jouw wens realiseerbaar is op korte termijn.',
        },
        {
          stap: '2',
          title: 'Aanvraag indienen via Mijn Aansluiting',
          description:
            'Een formele aanvraag voor een nieuwe aansluiting of uitbreiding wordt ingediend via het Enexis-portaal. Zorg voor correcte opgave van het gevraagde transportvermogen (in kVA of MW) en het beoogde in-gebruik-namedatum.',
        },
        {
          stap: '3',
          title: 'Haalbaarheidsonderzoek en capaciteitscheck',
          description:
            'Enexis voert een technische toets uit op het verzoek. In congestiegebieden resulteert dit in een aanbod voor een wachtrij-positie, een non-firm contract of een alternatieve route zoals cable pooling of GTO.',
        },
        {
          stap: '4',
          title: 'Onderhandeling over contractvorm',
          description:
            'Op basis van de haalbaarheidscheck volgt overleg over de contractvorm: firm, non-firm, TDTR of tijdsblokgebonden transportrecht. Hier is ruimte voor maatwerk, zeker als u flexibiliteit kunt aantonen.',
        },
        {
          stap: '5',
          title: 'Technische realisatie en ingebruikname',
          description:
            'Na akkoord op het contract start de technische realisatie. Doorlooptijden variëren van enkele weken (bij bestaande netcapaciteit) tot meerdere jaren (bij benodigde netverzwaring). Zelfaanleg kan de bouwfase verkorten.',
        },
      ]}
      watWerkt={[
        {
          title: 'Cable pooling & energiegemeenschappen',
          description:
            'Door aansluitcapaciteit te delen met buurbedrijven of binnen een bedrijventerrein ontstaat ruimte die individueel onbereikbaar is. Enexis faciliteert dit actief en heeft hiervoor gestandaardiseerde contracten beschikbaar.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele transportrechten',
          description:
            'Non-firm en tijdsblokgebonden rechten bieden beschikbare capaciteit buiten piekuren. Voor bedrijven met een flexibel energieprofiel — zoals koel- of laadinfrastructuur — is dit een directe oplossing.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg bij capaciteitsvraag boven 2,3 MVA',
          description:
            'De drempel voor zelfaanleg is met de Energiewet 2026 verlaagd van 10 MVA naar 2,3 MVA. Hierdoor kom je als grotere ondernemer in aanmerking om zelf te bekabelen en de wachtrij voor de civiele bouwfase te omzeilen.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Energiehub op bedrijventerrein',
          description:
            'Een energiehub combineert opwek, opslag en gedeeld verbruik op één locatie. Dit verlaagt de gecombineerde netbelasting en creëert structurele transportruimte — ook in verzadigde Enexis-gebieden.',
          href: '/kennisbank/energiehubs',
        },
      ]}
      verwachtingen={[
        'Een formele aanvraag bij Enexis krijgt doorgaans binnen 3 tot 10 werkdagen een eerste reactie. De haalbaarheidscheck in congestiegebieden duurt 4 tot 8 weken.',
        'Voor een grootverbruikaansluiting in een congestiegebied moet je rekening houden met een doorlooptijd van 1 tot 3 jaar voor volledige technische realisatie door Enexis.',
        'Enexis werkt met een prioriteringskader: aanvragen met flexibiliteitspotentieel, maatschappelijk belang of aantoonbare duurzaamheidsprestaties worden hoger geprioriteerd.',
        'Voor non-firm contracten gelden documentatievereisten over je energieprofiel en flexibiliteitsmogelijkheden. Hoe concreter het dossier, hoe sneller het traject. CAPAXX Energy stelt dit dossier voor je op.',
        'GTO-trajecten met meerdere bedrijven op een terrein vereisen een trekker die het gezamenlijke verzoek bij Enexis indient. CAPAXX Energy vervult deze trekkersrol en coördineert de aanvraag voor alle deelnemers.',
      ]}
      closingText="Enexis is transparanter over congestie dan de meeste netbeheerders — maar het systeem is complex. Weten welke route voor jou het snelst werkt, vraagt om kennis van de regels én de contacten."
    />
  )
}
