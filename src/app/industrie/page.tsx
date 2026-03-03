import type { Metadata } from 'next'
import DoelgroepPage from '@/components/DoelgroepPage'
import { generatePageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Industrie & Grootverbruikers',
  description: 'Elektrificatie geblokkeerd door netcongestie? CAPAXX Energy adviseert over transportrechten, peak shaving en zelfaanleg voor industriële afnemers.',
  keywords: ['netcongestie industrie', 'elektrificatie netcongestie', 'TDTR transportrecht', 'peak shaving industrie', 'congestiemanagement'],
  path: '/industrie',
})

export default function IndustriePage() {
  return (
    <DoelgroepPage
      iconName="Factory"
      label="Industrie & grootverbruikers"
      title="Je elektrificatie kan niet"
      titleHighlight="door."
      subtitle="75% van de industriële verduurzamingsplannen kan niet tijdig doorgaan door infrastructuurbeperkingen. De gemiste omzet wordt geschat op €10-35 miljard per jaar. Wij zorgen dat jouw fabriek wél kan elektrificeren."
      heroImage="/images/capaxx-energy-zelf-kabel-leggen16c.webp"
      heroImageAlt="Industriële netaansluiting"
      pijnpunten={[
        {
          title: 'Verduurzaming geblokkeerd',
          description: 'E-boilers, warmtepompen, inductieovens — je wilt elektrificeren maar kunt geen grotere aansluiting krijgen. Het afwijzen van verzwaringen is eerder regel dan uitzondering.'
        },
        {
          title: 'Miljarden aan gemiste omzet',
          description: 'Een rapport onder leiding van ex-ASML-topman Wennink schat dat €10-35 miljard per jaar aan omzet wordt gemist door infrastructuurbeperkingen.'
        },
        {
          title: 'Groei stopt bij het net',
          description: 'Nieuwe productielijnen, uitbreiding van capaciteit, verduurzaming van processen — alles stopt bij de netaansluiting. Je concurrent die wél een oplossing vindt, loopt voor.'
        }
      ]}
      complexiteitIntro="De nieuwe alternatieve transportrechten bieden kansen, maar vereisen operationele aanpassingen en specialistische kennis."
      complexiteit={[
        { text: 'Non-firm transportrechten geven geen gegarandeerd vermogen. Je moet je productieproces kunnen aanpassen aan beschikbare capaciteit.' },
        { text: 'TDTR-contracten garanderen 85% van de jaaruren vast transport — maar de overige 15% moet operationeel worden opgevangen.' },
        { text: 'Congestiemanagement via het GOPACS-platform biedt vergoedingen, maar vereist een Congestion Service Provider en operationele flexibiliteit.' },
        { text: 'De ACM merkt op dat het flexibiliteitsaanbod bij bestaande aangeslotenen nog beperkt is. Er is kennis nodig om dit te benutten.' }
      ]}
      oplossingsIntro="Het verschil tussen stilstaan en doorgroeien? Wij laten jouw aansluiting harder werken voor je operatie."
      oplossingen={[
        {
          title: 'Alternatieve transportrechten',
          description: 'Non-firm (~50% nettariefkorting), TDTR (85% jaaruren vast, 50-65% korting), tijdsblokgebonden rechten. Wij modelleren welk type bij jouw productieproces past.',
          href: '/kennisbank/transportrechten'
        },
        {
          title: 'Peak shaving & flexibiliteit',
          description: 'Batterijopslag voor piekafvlakking, slim laden, congestiemanagement-vergoedingen via GOPACS. De Flex-e subsidie dekt tot €300.000 van de investering.',
          href: '/kennisbank/transportrechten'
        },
        {
          title: 'Zelfaanleg bij grote vermogensbehoefte',
          description: 'Boven 2,3 MVA kun je zelf een aannemer inschakelen. Netbeheerders hebben simpelweg niet genoeg mensen — zelfaanleg geeft hen lucht en jou regie.',
          href: '/kennisbank/zelfaanleg'
        },
        {
          title: 'Energiewet 2026 benutten',
          description: 'Flexibele transportovereenkomsten zijn nu wettelijk verankerd. Groepstransportovereenkomsten en verruimde cable pooling creëren nieuwe mogelijkheden.',
          href: '/kennisbank/energiewet-2026'
        }
      ]}
      closingText="Bedrijven met meer dan 60 MW gecontracteerd transportvermogen zijn verplicht deel te nemen aan congestiemanagement. Maar ook onder die grens zijn er routes die werken. Wij vinden ze."
    />
  )
}
