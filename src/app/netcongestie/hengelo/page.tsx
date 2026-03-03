import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo/metadata'
import NetcongestieRegioPage from '@/components/NetcongestieRegioPage'

export const metadata: Metadata = generatePageMetadata({
  title: 'Netcongestie Hengelo',
  description:
    'Het stroomnet in Hengelo zit vol. Uitbreiding van het HS-station staat gepland voor 2027. Ontdek wat u nu kunt doen om toch capaciteit te krijgen.',
  keywords: [
    'netcongestie Hengelo',
    'stroomnet vol Hengelo',
    'wachtlijst netaansluiting Hengelo',
    'transportcapaciteit Hengelo',
    'energiecongestie Hengelo',
    'netcongestie Twente',
    'bedrijven netcongestie Hengelo',
    'netverzwaring Hengelo',
  ],
  path: '/netcongestie/hengelo',
})

export default function NetcongestieHengeloPage() {
  return (
    <NetcongestieRegioPage
      stad="Hengelo"
      heroSubtitle="Bedrijven in Hengelo die willen uitbreiden of elektrificeren lopen aan tegen volle netten. De eerste verbetering in de regio staat gepland voor 2027 — maar tot die tijd zijn er al werkbare routes."
      situatie="Hengelo is een industrieel hart van Twente. De energievraag van maakindustrie, logistiek en groeiende bedrijventerreinen legt grote druk op het stroomnet. Terwijl de vraag naar elektrisch vermogen stijgt, kan het huidige netwerk dit nog niet bijbenen."
      situatieDetails={[
        'Een bestaand hoogspanningsstation in de Hengelo-regio wordt uitgebreid met een extra transformator. Dit project staat gepland voor ingebruikname in 2027 en is daarmee de eerste concrete netverbetering in de regio.',
        'Tot die uitbreiding er is, geldt transportschaarste als harde realiteit. Nieuwe aanvragen voor transportcapaciteit worden op een wachtlijst geplaatst of geweigerd.',
        'Bedrijven die afhankelijk zijn van grote elektrische vermogens — van productiemachines tot laadinfrastructuur — ondervinden de gevolgen direct. Uitbreidingen worden gepauzeerd of in het ergste geval heroverwogen.',
        'Het kabinetsbeleid biedt enige verlichting: via het aansluitoffensief wordt gestimuleerd dat bedrijven flexibel met hun verbruik omgaan, waardoor bestaande netruimte beter benut wordt.',
      ]}
      tijdlijn={[
        {
          jaar: 'Nu',
          beschrijving:
            'Transportschaarste in Hengelo. Aanvragen voor extra capaciteit worden op wachtlijst geplaatst. Bedrijven die willen uitbreiden of laadinfrastructuur willen aanleggen, lopen vast.',
          highlight: false,
        },
        {
          jaar: '2027',
          beschrijving:
            'Uitbreiding van het hoogspanningsstation in de regio Hengelo wordt in gebruik genomen. Dit biedt de eerste concrete extra transportruimte in de regio — een belangrijke maar beperkte stap.',
          highlight: true,
        },
        {
          jaar: '2030–2035',
          beschrijving:
            'Bredere netuitbreidingen in Twente worden opgeleverd. Het totale netwerk krijgt meer capaciteit en betere sturing door opdeling in kleinere deelnetten.',
          highlight: false,
        },
        {
          jaar: 'Na 2035',
          beschrijving:
            'Volledig vernieuwd regionaal elektriciteitsnetwerk. De stapsgewijze uitbreiding maakt Hengelo klaar voor de energievraag van de toekomst.',
          highlight: false,
        },
      ]}
      impactItems={[
        {
          title: 'Industriële uitbreiding geblokkeerd',
          description:
            'Maakindustrie en logistieke bedrijven die extra machines willen aansluiten of productielijnen willen uitbreiden, krijgen geen transportcapaciteit toegewezen. De wachtlijst loopt op.',
        },
        {
          title: 'Laadinfrastructuur onmogelijk',
          description:
            'Bedrijventerreinen die laadpalen willen plaatsen voor medewerkers of eigen wagenpark, botsen op de grenzen van het net. EV-transitie stagneert zonder netcapaciteit.',
        },
        {
          title: 'Verduurzamingsplannen vertraagd',
          description:
            'Warmtepompen en industriële elektrificatie zijn essentieel voor verduurzaming. Zonder extra transportruimte blijven deze investeringen op de plank liggen.',
        },
      ]}
      oplossingen={[
        {
          title: 'Cable pooling met buurbedrijven',
          description:
            'Op bedrijventerreinen in Hengelo is samenwerking tussen buren een bewezen route. Door transportcapaciteit te poolen ontstaat ruimte die individueel niet beschikbaar is.',
          href: '/kennisbank/cable-pooling',
        },
        {
          title: 'Non-firm en flexibele transportrechten',
          description:
            'Tijdelijk beschikbare transportcapaciteit via niet-vaste contracten kan snel worden benut. Ideaal voor bedrijven die niet jarenlang willen wachten.',
          href: '/kennisbank/transportrechten',
        },
        {
          title: 'Zelfaanleg netinfrastructuur',
          description:
            'Bij een capaciteitsvraag boven 2,3 MVA mag u als ondernemer zelf kabels aanleggen. Dit versnelt de realisatie aanzienlijk ten opzichte van de reguliere wachtlijst.',
          href: '/kennisbank/zelfaanleg',
        },
        {
          title: 'Strategisch gebruik van de Energiewet 2026',
          description:
            'De nieuwe Energiewet biedt kansen op het gebied van cable pooling, GTO\'s en flexibele aansluitingen. Wij zetten de nieuwe spelregels om naar een werkbare strategie.',
          href: '/kennisbank/energiewet-2026',
        },
      ]}
      closingText="2027 is dichterbij dan 2035. Maar ook die twee jaar kosten tijd als u nu niet start met een netstrategie."
    />
  )
}
