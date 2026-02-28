import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieRegioPage from '@/components/NetcongestieRegioPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Twente',
  description:
    'Het stroomnet in Twente zit vol. Bedrijven staan op wachtlijsten, uitbreidingen worden geblokkeerd. Leer wat netcongestie in Twente betekent voor jouw organisatie en welke oplossingen er nu al zijn.',
  keywords: [
    'netcongestie Twente',
    'stroomnet vol Twente',
    'wachtlijst netaansluiting Twente',
    'transportcapaciteit Twente',
    'energiecongestie Twente',
    'netcongestie Overijssel',
    'bedrijven netcongestie Twente',
    'netverzwaring Twente',
  ],
  path: '/netcongestie/twente',
})

export default function NetcongestieTwentePage() {
  return (
    <NetcongestieRegioPage
      stad="Twente"
      heroSubtitle="Bedrijven staan op wachtlijsten van jaren. Uitbreidingen worden geblokkeerd. Nieuwbouw is niet meer zomaar bouwrijp. Netcongestie raakt de hele regio — maar er zijn vandaag al routes die werken."
      situatie="Twente maakt deel uit van de grootste energie-upgrade die Nederland ooit heeft gezien. De vraag naar elektrisch vermogen groeit sneller dan netbeheerders kunnen bijbouwen. Bedrijven die willen uitbreiden, elektrificeren of verduurzamen lopen vast op één knelpunt: er is geen transportcapaciteit beschikbaar."
      situatieDetails={[
        'De komende jaren wordt miljarden geïnvesteerd in het elektriciteitsnet van Overijssel en Twente. Nieuwe regionale stations, tientallen uitbreidingen van bestaande stations en honderden kilometers aan nieuwe kabel staan op de planning.',
        'De investeringen zijn groot, maar de uitvoering kost tijd. Vergunningprocedures, grondverwerving en personeelstekorten bij netbeheerders vertragen de realisatie. Voltooiing van alle plannen duurt tot ver na 2035.',
        'Landelijk staan ruim 14.000 bedrijven op de wachtlijst voor transportcapaciteit. In Twente groeit de druk door de toename van elektrisch laden, warmtepompen, zonne- en windenergie en industriële elektrificatie.',
        'Het kabinet heeft een aansluitoffensief aangekondigd: tot 500 miljoen euro per jaar om bedrijven te helpen flexibel met energie om te gaan, zodat bestaande netruimte slimmer benut kan worden. Voor Overijssel zijn de vooruitzichten gunstiger dan voor sommige andere provincies.',
      ]}
      tijdlijn={[
        {
          jaar: 'Nu',
          beschrijving:
            'Transportschaarste in grote delen van Twente. Nieuwe aansluitingen worden geweigerd of op wachtlijst geplaatst. Kavels op bedrijventerreinen zijn soms niet meer bouwrijp te leveren.',
          highlight: false,
        },
        {
          jaar: '2027',
          beschrijving:
            'Eerste concrete verbetering in de regio: uitbreiding van een bestaand hoogspanningsstation in de Twente-regio wordt in gebruik genomen. Beperkte extra capaciteit beschikbaar.',
          highlight: true,
        },
        {
          jaar: '2030–2035',
          beschrijving:
            'Meerdere nieuwe hoogspanningsstations in Twente worden opgeleverd. Het netwerk wordt opgesplitst in kleinere deelnetten voor betere sturing en hogere betrouwbaarheid.',
          highlight: false,
        },
        {
          jaar: 'Na 2035',
          beschrijving:
            'Volledige vernieuwing van het Twentse elektriciteitsnet afgerond. Tot die tijd blijven creatieve oplossingen en flexibele netstrategieën noodzakelijk.',
          highlight: false,
        },
      ]}
      impactItems={[
        {
          title: 'Uitbreidingen geblokkeerd',
          description:
            'Bedrijven die willen groeien, meer machines aansluiten of elektrificeren krijgen geen extra transportcapaciteit. De wachtlijst bij netbeheerders loopt op tot soms meerdere jaren.',
        },
        {
          title: 'Kavels niet meer bouwrijp',
          description:
            'Gemeenten en projectontwikkelaars kunnen grond niet meer als bouwrijp aanmerken als er geen stroomaansluiting beschikbaar is. Dit raakt vastgoedinvesteerders direct.',
        },
        {
          title: 'Verduurzaming stagneert',
          description:
            'Warmtepompen, laadpalen en zonneparken zijn afhankelijk van netcapaciteit. Zonder transportruimte is verduurzaming niet mogelijk, ongeacht de investeringsbereidheid.',
        },
      ]}
      oplossingen={[
        {
          title: 'Cable pooling en energiegemeenschappen',
          description:
            'Door transportcapaciteit te delen met buurbedrijven ontstaat ruimte die individueel niet beschikbaar is. Wij begeleiden het opzetten van de benodigde juridische en technische structuur.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele transportrechten',
          description:
            'Non-firm contracten en tijdelijk beschikbare transportrechten bieden ruimte voor bedrijven die niet kunnen wachten. Wij navigeren de juridische en technische opties.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg bij grote capaciteitsvraag',
          description:
            'Vanaf 2,3 MVA mag je als ondernemer zelf kabels aanleggen. De netbeheerder koppelt vervolgens aan. Dit versnelt de aansluiting aanzienlijk.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Energiewet 2026 benutten',
          description:
            'Nieuwe spelregels bieden kansen die eerder niet mogelijk waren. Wij vertalen de Energiewet naar concrete opties voor jouw situatie in Twente.',
          href: '/kennisbank/energiewet-2026',
        },
      ]}
      closingText="Twente staat voor een enorme opgave. Maar bedrijven die nu actief nadenken over hun netstrategie, staan straks sterker — of er wel of geen capaciteit vrijkomt."
    />
  )
}
