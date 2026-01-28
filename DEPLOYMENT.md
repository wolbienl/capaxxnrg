# Deployment Instructies voor Capaxx Energy

## Voorbereiding

### Vereisten
- `sshpass` moet geïnstalleerd zijn voor wachtwoord authenticatie:
  ```bash
  brew install hudochenkov/sshpass/sshpass
  ```

- `rsync` moet beschikbaar zijn (standaard op macOS ✅)

## Deployment Proces

### 1. Controleer of je in de juiste directory bent
```bash
cd /Users/kwolbers/dev/capaxx-energy2
```

### 2. Run het deployment script
```bash
./deploy-shock.sh
```

### 3. Voer SSH wachtwoord in
Het script vraagt aan het begin om het SSH wachtwoord voor `capaxxenergynl@31.7.7.98`

### 4. Bevestig deployment
Het script vraagt om bevestiging voordat het daadwerkelijk uploadt.

## Wat doet het script?

1. ✅ Controleert of je in de juiste directory bent
2. 🏗️ Bouwt de Next.js website statisch (`npm run build`)
3. 📦 Kopieert alle public assets naar de output folder
4. 🗺️ Voegt sitemap.xml toe
5. 🤖 Voegt robots.txt toe
6. 🔌 Test SSH verbinding
7. 💾 Maakt backup van huidige website op server
8. 📤 Upload nieuwe website via rsync
9. ⚙️ Configureert .htaccess voor clean URLs en HTTPS redirect

## Troubleshooting

### "sshpass: command not found"
Installeer sshpass:
```bash
brew install hudochenkov/sshpass/sshpass
```

### "SSH connection failed"
- Controleer of je wachtwoord correct is
- Test handmatig: `ssh capaxxenergynl@31.7.7.98`
- Controleer of de server bereikbaar is: `ping 31.7.7.98`

### Build fails
- Run `npm run build` handmatig om errors te zien
- Controleer of alle dependencies geïnstalleerd zijn: `npm install`

### Remote directory niet gevonden
Het script zoekt automatisch naar:
1. `public_html`
2. `domains/capaxx-energy.nl/public_html`

Als beide niet bestaan, vraagt het script om het juiste pad.

## Backup

Bij elke deployment wordt automatisch een backup gemaakt op de server:
- Locatie: `~/website_backup_YYYYMMDDHHMMSS.tar.gz`
- Format: `website_backup_20260128143022.tar.gz`

## Na Deployment

1. Test de website: https://capaxx-energy.nl
2. Controleer sitemap: https://capaxx-energy.nl/sitemap.xml
3. Controleer robots.txt: https://capaxx-energy.nl/robots.txt
4. Test verschillende pagina's en routes

## Server Details

- **Host**: Host Shock (DirectAdmin)
- **Server IP**: 31.7.7.98
- **Username**: capaxxenergynl
- **Website URL**: https://capaxx-energy.nl
- **Remote directory**: Waarschijnlijk `domains/capaxx-energy.nl/public_html`

## Next.js Static Export

Het project is geconfigureerd voor static export via `next.config.ts`:
```typescript
{
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

Dit zorgt ervoor dat `npm run build` automatisch een statische versie genereert in de `out/` folder.
