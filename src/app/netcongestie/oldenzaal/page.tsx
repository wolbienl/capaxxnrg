import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieRegioPage from '@/components/NetcongestieRegioPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Oldenzaal',
  description:
    'Het stroomnet in Oldenzaal zit vol. Kavels langs de A1 zijn niet meer bouwrijp te leveren. Natura 2000-ligging vergroot de complexiteit. Ontdek uw opties.',
  keywords: [
    'netcongestie Oldenzaal',
    'stroomnet vol Oldenzaal',
    'wachtlijst netaansluiting Oldenzaal',
    'transportcapaciteit Oldenzaal',
    'energiecongestie Oldenzaal',
    'netcongestie Twente',
    'bedrijventerrein Oldenzaal netcongestie',
    'netverzwaring Oldenzaal',
    'A1 bedrijventerrein netcongestie',
  ],
  path: '/netcongestie/oldenzaal',
})

export default function NetcongestieOldenzaalPage() {
  return (
    <NetcongestieRegioPage
      stad="Oldenzaal"
      heroSubtitle="Bedrijventerreinen langs de A1 bij Oldenzaal kampen met netcongestie én aangrenzend Natura 2000-gebied. Kavels die jaren geleden als toplocatie golden, zijn niet meer bouwrijp te leveren. Maar er zijn routes die wél werken."
      situatie="Oldenzaal heeft een sterke ligging aan de A1, direct bij de grens. Bedrijventerreinen op zichtlocaties langs de snelweg behoren tot de meest gewilde commerciële grond in de regio. Toch blokkeren twee factoren de ontwikkeling: een elektriciteitsnet dat vol zit en de nabijheid van Natura 2000-beschermde natuur."
      situatieDetails={[
        'Het stroomnet in Oldenzaal heeft geen ruimte meer voor grote nieuwe aansluitingen. Bedrijven die willen vestigen op kavels langs de A1 of op bestaande bedrijventerreinen, kunnen geen transportcapaciteit krijgen. De gemeente heeft bevestigd dat kavels voorlopig niet opnieuw worden uitgegeven totdat er duidelijkheid is over stroomaansluitingen.',
        'Naast de netcongestie speelt de ligging naast Natura 2000-gebied een rol. Extra verkeersbewegingen van vrachtwagens of andere emissies kunnen stoten op milieuregels, wat de complexiteit van nieuwe ontwikkelingen vergroot.',
        'Het aansluitoffensief van de overheid biedt ook voor Oldenzaal perspectief. Door flexibeler netgebruik en slimme contractvormen kan een deel van de wachtlijst worden omzeild. De gemeente en bedrijven zoeken actief naar oplossingen.',
        'Voor bestaande bedrijven in Oldenzaal die willen uitbreiden of verduurzamen, geldt dezelfde realiteit: individueel meer stroom aanvragen lukt niet. Collectieve aanpak en slimme netstrategie zijn de enige werkbare weg.',
      ]}
      tijdlijn={[
        {
          jaar: 'Nu',
          beschrijving:
            'Transportschaarste in Oldenzaal. Gemeente geeft kavels op bedrijventerreinen voorlopig niet opnieuw uit. Duidelijkheid over stroomaansluitingen is afgewacht.',
          highlight: false,
        },
        {
          jaar: '2026–2028',
          beschrijving:
            'Aansluitoffensief van de overheid biedt beperkte ruimte. Bedrijven die flexibel met verbruik kunnen omgaan, kunnen sneller aan de beurt komen. Eerste collectieve oplossingen worden gerealiseerd.',
          highlight: true,
        },
        {
          jaar: '2030–2035',
          beschrijving:
            'Bredere netuitbreidingen in Twente worden opgeleverd. Extra capaciteit beschikbaar voor de regio Oldenzaal. Bedrijventerreinen kunnen volledig worden benut.',
          highlight: false,
        },
        {
          jaar: 'Na 2035',
          beschrijving:
            'Volledig vernieuwd elektriciteitsnetwerk in Twente operationeel. Oldenzaal profiteert van de verbeterde verbinding met het regionale hoogspanningsnet.',
          highlight: false,
        },
      ]}
      impactItems={[
        {
          title: 'A1-locaties liggen stil',
          description:
            'Zichtlocaties langs de snelweg — jarenlang in trek bij logistieke en commerciële bedrijven — kunnen niet worden ontwikkeld. Kavels worden teruggegeven of niet in gebruik genomen vanwege het volle net.',
        },
        {
          title: 'Gemeente wacht op duidelijkheid',
          description:
            'De gemeente Oldenzaal heeft aangegeven dat kavels voorlopig niet opnieuw worden uitgegeven zolang er geen zekerheid is over stroomaansluitingen. Dit zet projectplanning op slot.',
        },
        {
          title: 'Dubbele beperking door Natura 2000',
          description:
            'Bedrijven die willen vestigen naast beschermde natuur, krijgen niet alleen te maken met netcongestie maar ook met extra milieuregels rondom stikstof en verkeersbewegingen. De combinatie vergroot de complexiteit sterk.',
        },
      ]}
      oplossingen={[
        {
          title: 'Collectieve netoplossing op terreinniveau',
          description:
            'Door alle verbruikers op een bedrijventerrein als één eenheid te benaderen, kan bestaande capaciteit slimmer worden verdeeld. Dit schept ruimte zonder dat het net zwaarder belast hoeft te worden.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele contractvormen',
          description:
            'Non-firm transportrechten en flexibele aansluitingen bieden ruimte voor bedrijven die hun verbruik kunnen aanpassen. Het aansluitoffensief maakt dit financieel aantrekkelijker.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg als versnelling',
          description:
            'Bij een capaciteitsvraag boven 2,3 MVA mag u zelf kabels aanleggen en de netbeheerder aansluiten. Dit versnelt de realisatie en omzeilt de reguliere wachtlijst.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Energiewet 2026 als kader',
          description:
            'De nieuwe Energiewet biedt formele structuren voor gedeeld netgebruik en energiegemeenschappen. Wij vertalen dit naar een werkbaar plan voor locaties in en rond Oldenzaal.',
          href: '/kennisbank/energiewet-2026',
        },
      ]}
      closingText="De ligging langs de A1 blijft waardevol. Maar die waarde verzilveren lukt alleen als de netstrategie klopt. Dat is precies waar wij mee beginnen."
    />
  )
}
