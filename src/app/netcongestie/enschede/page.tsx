import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieRegioPage from '@/components/NetcongestieRegioPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Enschede',
  description:
    'Het stroomnet in Enschede zit vol. Twee nieuwe HS-stations gepland, maar realisatie duurt tot 2034–2038. Ontdek wat bedrijven nu al kunnen doen.',
  keywords: [
    'netcongestie Enschede',
    'stroomnet vol Enschede',
    'wachtlijst netaansluiting Enschede',
    'transportcapaciteit Enschede',
    'energiecongestie Enschede',
    'netcongestie Twente',
    'bedrijven netcongestie Enschede',
    'netverzwaring Enschede',
  ],
  path: '/netcongestie/enschede',
})

export default function NetcongestieEnschedePage() {
  return (
    <NetcongestieRegioPage
      stad="Enschede"
      heroSubtitle="Enschede krijgt twee nieuwe hoogspanningsstations — maar de locaties worden nog bepaald en realisatie staat gepland voor 2034 tot 2038. Voor bedrijven die nu willen uitbreiden, zijn er andere routes."
      situatie="Als grootste stad van Twente staat Enschede voor een substantieel netcongestieprobleem. De groeiende vraag vanuit industrie, kenniseconomie en woningbouw overstijgt de huidige netcapaciteit. Netbeheerders werken aan structurele oplossingen, maar de horizon is ver."
      situatieDetails={[
        'Voor Enschede zijn twee nieuwe hoogspanningsstations gepland. De locaties worden momenteel in overleg met de gemeente bepaald. De benodigde ruimte, vergunningen en afstemming met omgeving maken dit een langdurig traject.',
        'Realisatie van de nieuwe stations wordt verwacht tussen 2034 en 2038. Dit betekent dat bedrijven die nu starten met hun aanvraag, rekening moeten houden met een wachttijd van tien jaar of meer voor volledige netuitbreiding.',
        'De energievraag in Enschede groeit ondertussen door. Technologiebedrijven, productie-industrie, datacenters en uitbreiding van laadinfrastructuur verhogen de druk op het bestaande net.',
        'Via het aansluitoffensief van de overheid wordt gestimuleerd dat bestaande netruimte slimmer wordt benut. Bedrijven die flexibel kunnen zijn in hun verbruik, maken kans om sneller aan de beurt te komen.',
      ]}
      tijdlijn={[
        {
          jaar: 'Nu',
          beschrijving:
            'Transportschaarste in Enschede. Aansluitingen voor uitbreiding of nieuwe vestigingen worden geweigerd of op wachtlijst geplaatst. Locatiekeuze voor nieuwe stations nog niet afgerond.',
          highlight: false,
        },
        {
          jaar: '2025–2027',
          beschrijving:
            'Locatieprocedures voor twee nieuwe hoogspanningsstations lopen. Vergunningtrajecten, inspraak en bestemmingsplanwijzigingen worden doorlopen.',
          highlight: false,
        },
        {
          jaar: '2034–2038',
          beschrijving:
            'Verwachte oplevering van de twee nieuwe hoogspanningsstations in Enschede. Dit biedt substantieel meer netcapaciteit voor de regio.',
          highlight: true,
        },
        {
          jaar: 'Na 2035',
          beschrijving:
            'Volledig vernieuwd elektriciteitsnetwerk in Twente operationeel. Enschede als grootste stad profiteert van de meeste extra capaciteit in de regio.',
          highlight: false,
        },
      ]}
      impactItems={[
        {
          title: 'Decennium van beperkingen',
          description:
            'Met een tijdlijn die doorloopt tot 2034–2038 moeten bedrijven rekening houden met een langdurige periode van netcongestie. Uitbreiden via reguliere routes is praktisch niet mogelijk.',
        },
        {
          title: 'Nieuwe vestigingen geblokkeerd',
          description:
            'Bedrijven die in Enschede willen starten of zich willen vestigen op een bedrijventerrein, stuiten op kavels die niet bouwrijp geleverd kunnen worden vanwege het volle net.',
        },
        {
          title: 'Kenniseconomie onder druk',
          description:
            'Hightech bedrijven, campusontwikkeling en innovatieve sectoren die elektrisch vermogen nodig hebben, worden geremd in hun groei. Dit raakt de concurrentiepositie van de regio.',
        },
      ]}
      oplossingen={[
        {
          title: 'Cable pooling als directe oplossing',
          description:
            'Door capaciteit te delen met buurbedrijven of binnen een bedrijventerrein ontstaat ruimte die individueel onbereikbaar is. Dit werkt ook in congestieregio\'s zoals Enschede.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Flexibele netcontracten',
          description:
            'Non-firm transportrechten bieden tijdelijk beschikbare capaciteit. Minder zeker dan een vaste aansluiting, maar voor veel toepassingen toereikend en direct beschikbaar.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg bij hogere capaciteitsvraag',
          description:
            'Boven 2,3 MVA mag u als ondernemer zelf kabels aanleggen. De netbeheerder sluit vervolgens aan. Dit omzeilt de wachtlijst voor de bouwfase.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Nieuwe kansen via de Energiewet 2026',
          description:
            'De Energiewet 2026 opent deuren die eerder gesloten waren: bredere cable pooling-mogelijkheden, formele GTO-structuren en nieuwe flexibele contractvormen.',
          href: '/kennisbank/energiewet-2026',
        },
      ]}
      closingText="Met een tijdlijn tot 2038 is wachten geen optie. Bedrijven die nu een netstrategie ontwikkelen, behouden hun groeimogelijkheden — ondanks het volle net."
    />
  )
}
