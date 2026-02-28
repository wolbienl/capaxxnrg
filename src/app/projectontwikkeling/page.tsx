import type { Metadata } from 'next'
import DoelgroepPage from '@/components/DoelgroepPage'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Projectontwikkeling Zon & Wind',
  description: 'Zonnepark krijgt geen aansluiting? CAPAXX Energy begeleidt zelfaanleg, cable pooling en transportrechten voor projectontwikkelaars.',
  keywords: ['netcongestie zonnepark', 'zelfaanleg aansluiting', 'cable pooling zon wind', 'transportrechten', 'SDE++ netcongestie'],
  path: '/projectontwikkeling',
})

export default function ProjectontwikkelingPage() {
  return (
    <DoelgroepPage
      iconName="Sun"
      label="Projectontwikkeling zon & wind"
      title="Je park krijgt geen"
      titleHighlight="aansluiting."
      subtitle="De businesscase van zonneparken staat onder druk. Curtailment stijgt, negatieve prijsuren nemen toe, en in congestiegebieden wordt geen transportindicatie afgegeven. Wij zorgen dat je project toch van de grond komt."
      heroImage="/images/capaxx-energy-zelf-kabel-leggen16c.png"
      heroImageAlt="Zelfaanleg van netaansluiting voor zonnepark"
      pijnpunten={[
        {
          title: 'Curtailment stijgt explosief',
          description: 'Van 1,4% in 2022 naar 13,2% in 2024, met verwachtingen van 11-18% in 2025. Elke procent kost direct rendement op je investering.'
        },
        {
          title: 'SDE++ botst met congestie',
          description: 'In congestiegebieden wordt geen transportindicatie afgegeven, waardoor geen SDE++-aanvraag mogelijk is. Je subsidie blokkeert op het net.'
        },
        {
          title: 'Businesscase verslechtert',
          description: 'De marktwaarde van het eigen vermogen van een zonnepark daalde van €235.100/MW naar €23.300/MW. Negatieve prijsuren stegen van 70 uur naar 458 in drie jaar.'
        }
      ]}
      complexiteitIntro="De combinatie van technische, financiële en juridische obstakels maakt dat je als ontwikkelaar niet meer met één oplossing wegkomt."
      complexiteit={[
        { text: 'Realisatietermijnen voor SDE++ (3 jaar voor projecten >1 MWp) zijn krap wanneer de aansluiting jaren op zich laat wachten.' },
        { text: 'Financieringskosten zijn door de ECB-renteverhogingen verdubbeld. Elke maand vertraging kost geld.' },
        { text: 'Cable pooling biedt technisch een uitweg — zon en wind zijn complementair, met slechts ~5% gelijktijdig piekvermogen — maar de juridische structurering is complex.' },
        { text: 'Non-firm en TDTR-rechten bieden kansen maar vereisen financiële modellering die de impact op je businesscase kwantificeert.' }
      ]}
      oplossingsIntro="Wij combineren de routes die bij jouw project passen. Van financiële modellering tot procesbegeleiding bij de netbeheerder."
      oplossingen={[
        {
          title: 'Zelfaanleg via artikel 3.39',
          description: 'De drempel is verlaagd van 10 MVA naar 2,3 MVA. Schakel zelf een gekwalificeerde aannemer in voor het kabeltracé. Sneller, goedkoper, en jij bepaalt het tempo.',
          href: '/kennisbank/zelfaanleg'
        },
        {
          title: 'Cable pooling (zon + wind)',
          description: 'Zon en wind zijn complementair met slechts ~5% gelijktijdig piekvermogen. Deel een aansluiting en maximaliseer de benutting. Sinds 2026 voor alle installatietypes.',
          href: '/kennisbank/cable-pooling'
        },
        {
          title: 'Flexibele transportrechten',
          description: 'Non-firm (~50% korting op nettarief), TDTR (85% van jaaruren vast, 50-65% korting). Wij modelleren welk transportrecht de beste businesscase oplevert.',
          href: '/kennisbank/transportrechten'
        },
        {
          title: 'Batterijopslag co-locatie',
          description: 'Piekafvlakking bij co-locatie met zonneparken. 30% aftopping van piekvermogen levert slechts ~5% productieverlies op — met de juiste businesscase rendabel.',
          href: '/kennisbank/transportrechten'
        }
      ]}
      closingText="Het is geen kwestie van even een kabel de grond in leggen. Je hebt te maken met technische eisen die per netbeheerder verschillen, vergunningen, KLIC-meldingen en het vinden van een partij die het daadwerkelijk kan uitvoeren. Zonder die puzzel goed te leggen, loop je vast."
    />
  )
}
