export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
          Privacyverklaring
        </h1>
        <p className="text-slate-500 text-sm mb-12">Versie 1.0 — Laatste update: maart 2026</p>

        <div className="prose prose-slate max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">1. Wie zijn wij?</h2>
            <p className="text-slate-600 leading-relaxed">
              CAPAXX Energy is een bedrijf gespecialiseerd in energie-oplossingen en advies voor commercieel vastgoed.
              Ons kantoor is gevestigd aan de Jan Tinbergenstraat 202, 7559 ST Hengelo. U kunt ons bereiken via{' '}
              <a href="mailto:mail@capaxx-energy.nl" className="text-primary hover:underline">
                mail@capaxx-energy.nl
              </a>{' '}
              of +31 (0)53 206 5066.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              CAPAXX Energy is de verwerkingsverantwoordelijke voor de verwerking van uw persoonsgegevens zoals
              beschreven in deze privacyverklaring.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">2. Welke persoonsgegevens verzamelen wij?</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Wij verwerken persoonsgegevens die u zelf aan ons verstrekt, bijvoorbeeld via het contactformulier,
              e-mail of telefonisch contact. Het gaat hierbij om:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
              <li>Naam en achternaam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer</li>
              <li>Bedrijfsnaam en functie</li>
              <li>Overige informatie die u vrijwillig verstrekt</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              Daarnaast verzamelen wij via onze website automatisch technische gegevens zoals IP-adres, browsertype
              en paginabezoeken. Deze gegevens worden geanonimiseerd verwerkt voor statistische analyse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">3. Waarvoor gebruiken wij uw gegevens?</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Wij gebruiken uw persoonsgegevens voor:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
              <li>Het beantwoorden van uw vragen en verzoeken</li>
              <li>Het opstellen van offertes en het uitvoeren van overeenkomsten</li>
              <li>Het versturen van relevante informatie over onze diensten (alleen na toestemming)</li>
              <li>Het verbeteren van onze website en dienstverlening</li>
              <li>Het naleven van wettelijke verplichtingen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">4. Grondslag voor verwerking</h2>
            <p className="text-slate-600 leading-relaxed">
              Wij verwerken uw persoonsgegevens op basis van:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2 mt-3">
              <li>Uw toestemming (bijv. voor nieuwsbrieven)</li>
              <li>De uitvoering van een overeenkomst</li>
              <li>Een gerechtvaardigd belang (bijv. het verbeteren van onze diensten)</li>
              <li>Een wettelijke verplichting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">5. Bewaartermijn</h2>
            <p className="text-slate-600 leading-relaxed">
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn
              verzameld, of zolang als wettelijk vereist. Contactgegevens bewaren wij maximaal 2 jaar na het laatste
              contact, tenzij er een lopende zakelijke relatie bestaat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">6. Delen met derden</h2>
            <p className="text-slate-600 leading-relaxed">
              Wij verkopen uw gegevens niet aan derden. Wij kunnen uw gegevens delen met dienstverleners die ons
              ondersteunen bij de uitvoering van onze diensten (verwerkers), zoals IT-dienstverleners en
              boekhoudsoftware. Met deze partijen sluiten wij verwerkersovereenkomsten af om een gelijke mate van
              beveiliging en vertrouwelijkheid van uw gegevens te waarborgen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">7. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Onze website maakt gebruik van functionele en analytische cookies. Functionele cookies zijn
              noodzakelijk voor het functioneren van de website. Analytische cookies gebruiken wij om het gebruik van
              onze website te analyseren en te verbeteren. Wij maken hierbij gebruik van geanonimiseerde data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">8. Uw rechten</h2>
            <p className="text-slate-600 leading-relaxed mb-3">Op grond van de AVG heeft u de volgende rechten:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1.5 ml-2">
              <li>Recht op inzage in uw persoonsgegevens</li>
              <li>Recht op rectificatie van onjuiste gegevens</li>
              <li>Recht op verwijdering ('recht op vergetelheid')</li>
              <li>Recht op beperking van de verwerking</li>
              <li>Recht op dataportabiliteit</li>
              <li>Recht van bezwaar tegen verwerking</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              U kunt uw rechten uitoefenen door contact met ons op te nemen via{' '}
              <a href="mailto:mail@capaxx-energy.nl" className="text-primary hover:underline">
                mail@capaxx-energy.nl
              </a>
              . Wij reageren binnen 4 weken op uw verzoek.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">9. Beveiliging</h2>
            <p className="text-slate-600 leading-relaxed">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen
              tegen ongeoorloofde toegang, verlies of vernietiging. Onze website maakt gebruik van een beveiligde
              HTTPS-verbinding.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">10. Klachten</h2>
            <p className="text-slate-600 leading-relaxed">
              Heeft u een klacht over de manier waarop wij met uw persoonsgegevens omgaan? Neem dan eerst contact
              met ons op. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens via{' '}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-secondary mb-3">11. Wijzigingen</h2>
            <p className="text-slate-600 leading-relaxed">
              Wij behouden ons het recht voor om deze privacyverklaring te wijzigen. De meest actuele versie is
              altijd te vinden op deze pagina. Wij adviseren u deze verklaring regelmatig te raadplegen.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
