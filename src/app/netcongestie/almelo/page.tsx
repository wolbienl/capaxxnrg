import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieRegioPage from '@/components/NetcongestieRegioPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Almelo',
  description:
    'Het stroomnet in Almelo zit vol. Twee nieuwe hoogspanningsstations zijn in voorbereiding. Leer wat netcongestie in Almelo betekent en welke oplossingen er zijn.',
  keywords: [
    'netcongestie Almelo',
    'stroomnet vol Almelo',
    'wachtlijst netaansluiting Almelo',
    'transportcapaciteit Almelo',
    'energiecongestie Almelo',
    'netcongestie Twente',
    'bedrijven netcongestie Almelo',
    'netverzwaring Almelo',
  ],
  path: '/netcongestie/almelo',
})

export default function NetcongestieAlmeloPage() {
  return (
    <NetcongestieRegioPage
      stad="Almelo"
      heroSubtitle="In Almelo wordt gewerkt aan nieuwe hoogspanningsstations — maar netverzwaring laat in veel gebieden tot na 2030 op zich wachten. Bedrijven en vastgoedeigenaren die nu iets willen, hebben andere routes nodig."
      situatie="Almelo staat midden in een ingrijpende netuitbreiding. Er wordt actief gebouwd aan nieuwe hoogspanningsinfrastructuur in en rond de stad. Toch betekent dit niet dat de transportschaarste nu al is opgelost — de werkzaamheden lopen door tot in de jaren dertig."
      situatieDetails={[
        'In Almelo worden twee nieuwe hoogspanningsstations gerealiseerd: één in de stad zelf, waarvan de werkzaamheden al zijn begonnen, en één in de driehoek Vroomshoop–Almelo–Tubbergen. Dit zijn significante investeringen in de energie-infrastructuur van de regio.',
        'Ondanks de lopende werkzaamheden geldt op veel locaties in Almelo nog steeds transportschaarste. De nieuwe stations bieden niet overal direct verlichting, en netverzwaring op lokaal niveau laat op sommige plekken tot na 2030 op zich wachten.',
        'Bedrijventerreinen in Almelo merken dit direct: aanvragen voor extra transportcapaciteit worden geweigerd of op een wachtlijst geplaatst. Vastgoed dat verduurzaamd of uitgebreid wil worden, stuit op hetzelfde knelpunt.',
        'De overheid heeft via het aansluitoffensief extra middelen vrijgemaakt om bedrijven te helpen flexibel om te gaan met energie. Dit biedt kansen voor Almelose ondernemers die bereid zijn om hun verbruik te spreiden.',
      ]}
      tijdlijn={[
        {
          jaar: 'Nu',
          beschrijving:
            'Bouwwerkzaamheden aan een nieuw hoogspanningsstation in Almelo zijn gestart. Transportschaarste geldt echter nog steeds breed in de regio — nieuwe capaciteit is nog niet beschikbaar.',
          highlight: false,
        },
        {
          jaar: 'Na 2030',
          beschrijving:
            'Netverzwaring op lokaal niveau in veel gebieden van Almelo afgerond. Extra transformatorcapaciteit beschikbaar voor aansluiting van bedrijven en vastgoed.',
          highlight: true,
        },
        {
          jaar: '2030–2035',
          beschrijving:
            'Hoogspanningsstations in Almelo en de driehoek Vroomshoop–Almelo–Tubbergen in gebruik genomen. Het netwerk wordt opgesplitst in kleinere deelnetten voor betere sturing.',
          highlight: false,
        },
        {
          jaar: 'Na 2035',
          beschrijving:
            'Volledig vernieuwd elektriciteitsnetwerk in Twente operationeel. Almelo profiteert van een robuuste energie-infrastructuur die de groeiende vraag aankan.',
          highlight: false,
        },
      ]}
      impactItems={[
        {
          title: 'Vastgoed kan niet verduurzamen',
          description:
            'Panden op bedrijventerreinen die van gas af willen of laadpalen willen installeren, kunnen zonder extra netcapaciteit niet verder. Netverzwaring laat nog jaren op zich wachten.',
        },
        {
          title: 'Collectieve aanpak noodzakelijk',
          description:
            'Op terreinen met meerdere eigenaren of huurders is individuele aanpak niet toereikend. Een gezamenlijke netstrategie voor het hele terrein is de enige werkbare route.',
        },
        {
          title: 'Groeipotentieel geblokkeerd',
          description:
            'Bedrijven die in Almelo willen uitbreiden, meer personeel willen aannemen of productiecapaciteit willen verhogen, lopen vast zonder extra elektrisch vermogen.',
        },
      ]}
      oplossingen={[
        {
          title: 'Collectieve energieaanpak op terreinniveau',
          description:
            'Door het elektriciteitsverbruik en de opwek van een heel bedrijventerrein als eenheid te behandelen, ontstaan oplossingen die individueel niet haalbaar zijn. Wij organiseren dit proces van begin tot eind.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Cable pooling en GTO-structuren',
          description:
            'Gedeeld transportrecht tussen meerdere aansluitingen maakt het mogelijk om bestaande capaciteit slimmer te benutten. De Energiewet 2026 formaliseert dit verder.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele transportcontracten',
          description:
            'Non-firm transportrechten bieden tijdelijk beschikbare netcapaciteit. Voor veel toepassingen — van laadinfrastructuur tot productie — is dit een werkbaar alternatief.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg bij grote vermogens',
          description:
            'Boven 2,3 MVA mag u als ondernemer zelf netinfrastructuur aanleggen. Dit versnelt de realisatie en vermindert de afhankelijkheid van de wachtlijst.',
          href: '/kennisbank/zelfaanleg',
        },
      ]}
      closingText="In Almelo is de infrastructuur in beweging. Bedrijven die nu een netstrategie ontwikkelen, staan straks in positie om als eerste van de nieuwe capaciteit te profiteren."
    />
  )
}
