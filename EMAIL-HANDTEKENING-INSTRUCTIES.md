# E-mail Handtekening CAPAXX Energy - Installatie Instructies

## Bestand
- `email-signature-kees-wolbers.html` - De HTML handtekening

---

## Methode 1: Outlook Desktop (Windows) - Aanbevolen

### Stap 1: Handtekeningenmap openen
1. Open Outlook
2. Ga naar **Bestand** → **Opties** → **E-mail** → **Handtekeningen**
3. Of druk `Windows + R`, typ: `%appdata%\Microsoft\Signatures` en druk Enter

### Stap 2: Handtekening toevoegen
1. Klik op **Nieuw** en geef de handtekening een naam (bijv. "CAPAXX Energy")
2. Open `email-signature-kees-wolbers.html` in een browser
3. Selecteer alles (Ctrl+A) en kopieer (Ctrl+C)
4. Plak in het handtekeningveld in Outlook (Ctrl+V)
5. Klik **OK**

### Stap 3: Als standaard instellen
1. Selecteer de handtekening bij "Nieuwe berichten"
2. Selecteer de handtekening bij "Antwoorden/doorsturen" (optioneel)

---

## Methode 2: Outlook Desktop (Mac)

1. Open Outlook
2. Ga naar **Outlook** → **Voorkeuren** → **Handtekeningen**
3. Klik op **+** om een nieuwe handtekening toe te voegen
4. Open de HTML in een browser, kopieer alles, en plak in Outlook
5. Stel in als standaard

---

## Methode 3: Outlook Web (Office 365)

1. Ga naar [outlook.office.com](https://outlook.office.com)
2. Klik op het tandwiel ⚙️ → **Alle Outlook-instellingen weergeven**
3. Ga naar **E-mail** → **Opstellen en beantwoorden**
4. Open de HTML in een browser, kopieer alles, en plak in het handtekeningveld
5. Klik **Opslaan**

---

## Belangrijk: Logo Hosting

De handtekening gebruikt een extern gehost logo. Je hebt twee opties:

### Optie A: Logo hosten op je website (Aanbevolen)
Zorg dat het logo beschikbaar is op:
```
https://capaxx-energy.nl/images/logo-dark.png
```

Als de website elders gehost is, pas de URL aan in de HTML:
```html
<img src="JOUW-URL-HIER/logo-dark.png" ...>
```

### Optie B: Logo uploaden naar een image host
Upload `logo-dark.png` naar:
- [Imgur](https://imgur.com)
- [ImgBB](https://imgbb.com)
- Je eigen webserver

Vervang dan de URL in de HTML.

---

## Problemen oplossen

### Logo wordt niet getoond
- Controleer of de afbeelding extern bereikbaar is
- Sommige ontvangers blokkeren externe afbeeldingen standaard
- Test door de URL direct in een browser te openen

### Opmaak ziet er anders uit
- De handtekening is geoptimaliseerd voor Outlook
- Kleine variaties tussen e-mailclients zijn normaal
- De tabel-layout zorgt voor maximale compatibiliteit

### Outlook Web toont geen opmaak
- Zorg dat je de "Rich Text" modus gebruikt, niet "Platte tekst"

---

## Aanpassingen

### Functietitel toevoegen
Zoek deze regel in de HTML:
```html
<!-- Voeg hier eventueel je functietitel toe -->
```
En vervang met bijv:
```html
Directeur
```

### Kleuren
- Oranje accent: `#f06a00`
- Donkerblauw tekst: `#0f172a`
- Grijs subtekst: `#64748b`

---

## Bestanden
- `email-signature-kees-wolbers.html` - Hoofd handtekening
- `public/images/logo-dark.png` - Logo (donkere versie, voor witte achtergrond)
- `public/images/logo-light.png` - Logo (lichte versie, voor donkere achtergrond)
