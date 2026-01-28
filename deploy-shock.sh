#!/bin/bash

# Capaxx Energy Deployment Script voor Host Shock
# Gebruik: ./deploy-shock.sh

set -e  # Stop bij eerste error

# Kleuren voor output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Functie voor status output
print_status() {
    echo -e "${BLUE}[$(date '+%H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Header
echo -e "${PURPLE}"
echo "Capaxx Energy Deployment Script voor Host Shock"
echo "================================================="
echo -e "${NC}"

# Vraag SSH wachtwoord
echo -e "${CYAN}Voer SSH wachtwoord in voor capaxxenergynl@31.7.7.98:${NC}"
read -s SSH_PASSWORD
echo ""
export SSHPASS=$SSH_PASSWORD

# Controleer of we in de juiste directory zijn
print_status "Checking project directory..."
if [ ! -f "package.json" ]; then
    print_error "Niet in project directory. Ga naar /Users/kwolbers/dev/capaxx-energy2"
    exit 1
fi
print_success "Project directory correct"

# Lokale build
print_status "Building static website..."
echo -e "${YELLOW}Building...${NC}"
if npm run build > build.log 2>&1; then
    print_success "Build successful"
    rm build.log
else
    print_error "Build failed. Check build.log for details"
    echo "Last 10 lines of build log:"
    tail -10 build.log
    exit 1
fi

# Next.js genereert nu automatisch een statische export naar de out directory

# Controleer of de out directory bestaat
if [ ! -d "out" ]; then
    print_error "Out directory niet gevonden na export. Check next.config.ts voor output: 'export'"
    exit 1
fi

# Zorg dat alle assets uit public/ ook in out/ staan (ook als ze niet in pagina's gebruikt worden)
print_status "Copying public assets to out folder..."
rsync -av public/ out/

# Genereer sitemap
print_status "Checking sitemap..."
if [ -f ".next/server/app/sitemap.xml/route.js" ] || [ -f ".next/server/app/sitemap.xml.body" ]; then
    if [ -f ".next/server/app/sitemap.xml.body" ]; then
        cp .next/server/app/sitemap.xml.body out/sitemap.xml
        print_success "Sitemap copied to out folder"
        print_info "Sitemap contains $(grep -c '<url>' out/sitemap.xml) URLs"
    else
        print_warning "Sitemap route found but body not generated yet"
    fi
elif [ -f "out/sitemap.xml" ]; then
    print_success "Sitemap already in out folder"
    print_info "Sitemap contains $(grep -c '<url>' out/sitemap.xml) URLs"
elif [ -f "public/sitemap.xml" ]; then
    cp public/sitemap.xml out/sitemap.xml
    print_success "Sitemap copied from public folder"
    print_info "Sitemap contains $(grep -c '<url>' out/sitemap.xml) URLs"
else
    print_warning "No sitemap found, skipping"
fi

# Controleer of robots.txt bestaat
if [ -f "out/robots.txt" ]; then
    print_success "robots.txt already in out folder"
elif [ -f "public/robots.txt" ]; then
    cp public/robots.txt out/robots.txt
    print_success "robots.txt copied to out folder"
else
    print_warning "No robots.txt found, creating default one"
    echo "User-agent: *
Allow: /

Sitemap: https://capaxx-energy.nl/sitemap.xml" > out/robots.txt
    print_success "Default robots.txt created"
fi

# Vraag bevestiging voor deployment
echo ""
echo -e "${CYAN}🚀 Klaar om te deployen naar Host Shock server!${NC}"
echo -e "${YELLOW}⚠️  Dit zal de website uploaden naar 31.7.7.98${NC}"
echo -e "${CYAN}Wil je doorgaan? (y/n):${NC}"
read -r deploy_response
if [ "$deploy_response" != "y" ]; then
    print_info "Deployment geannuleerd door gebruiker"
    exit 0
fi

echo ""
echo -e "${PURPLE}🔄 Starting Deployment to Host Shock...${NC}"
echo "=================================="

# Test SSH verbinding
print_status "Testing SSH connection to Host Shock..."
if sshpass -e ssh -o StrictHostKeyChecking=no capaxxenergynl@31.7.7.98 "echo 'Connection successful'" > /dev/null 2>&1; then
    print_success "SSH connection successful"
else
    print_error "SSH connection failed. Check your password and connection details."
    exit 1
fi

# Bepaal de public_html directory
print_status "Checking remote directory structure..."
REMOTE_DIR=""
if sshpass -e ssh -o StrictHostKeyChecking=no capaxxenergynl@31.7.7.98 "[ -d 'public_html' ]"; then
    REMOTE_DIR="public_html"
    print_info "Using public_html directory"
elif sshpass -e ssh -o StrictHostKeyChecking=no capaxxenergynl@31.7.7.98 "[ -d 'domains/capaxx-energy.nl/public_html' ]"; then
    REMOTE_DIR="domains/capaxx-energy.nl/public_html"
    print_info "Using domains/capaxx-energy.nl/public_html directory"
else
    print_warning "Geen standaard DirectAdmin directory structuur gevonden"
    echo -e "${CYAN}Voer het pad in naar de public_html directory (relatief vanaf home):${NC}"
    read -r custom_dir
    if [ -z "$custom_dir" ]; then
        print_error "Geen directory opgegeven. Deployment geannuleerd."
        exit 1
    fi
    REMOTE_DIR=$custom_dir
fi

# Backup maken van huidige website
print_status "Creating backup of current website..."
BACKUP_DATE=$(date +"%Y%m%d%H%M%S")
if sshpass -e ssh -o StrictHostKeyChecking=no capaxxenergynl@31.7.7.98 "tar -czf website_backup_$BACKUP_DATE.tar.gz $REMOTE_DIR" 2>/dev/null; then
    print_success "Backup created: website_backup_$BACKUP_DATE.tar.gz"
else
    print_warning "Could not create backup, continuing anyway"
fi

# Upload static website
print_status "Uploading static website to Host Shock..."
echo -e "${YELLOW}Uploading files...${NC}"

# Rsync de statische website naar de server
rsync -avz --progress \
  -e "sshpass -e ssh -o StrictHostKeyChecking=no" \
  ./out/ capaxxenergynl@31.7.7.98:$REMOTE_DIR/

if [ $? -eq 0 ]; then
    print_success "Website upload successful"
else
    print_error "Website upload failed"
    exit 1
fi

# Controleer of .htaccess nodig is
print_status "Checking if .htaccess is needed..."
if [ ! -f "out/.htaccess" ]; then
    print_info "Creating .htaccess file for clean URLs and redirects"
    echo "RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js routes (trailing slash)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !\.
RewriteRule ^(.+)/$ /\$1.html [L]

# Error pages
ErrorDocument 404 /404.html" > htaccess_temp

    # Upload .htaccess
    sshpass -e scp -o StrictHostKeyChecking=no htaccess_temp capaxxenergynl@31.7.7.98:$REMOTE_DIR/.htaccess
    rm htaccess_temp
    print_success ".htaccess file created and uploaded"
fi

# Verificatie met visuele feedback
echo ""
echo -e "${PURPLE}Verifying Deployment...${NC}"
echo "=========================="

# Test website
print_status "Testing website availability..."
echo -e "${CYAN}Probeer handmatig de website te bezoeken via browser${NC}"
echo -e "${CYAN}URL: https://capaxx-energy.nl${NC}"

# Deployment summary
echo ""
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo -e "${PURPLE}========================${NC}"
echo -e "${CYAN}Website:${NC} https://capaxx-energy.nl"
echo -e "${CYAN}Time:${NC} $(date)"
echo -e "${CYAN}Status:${NC} Deployed to Host Shock ✅"
echo ""
echo -e "${YELLOW}💡 Tips:${NC}"
echo "• Check website manually: https://capaxx-energy.nl"
echo "• Backup location: ~/website_backup_$BACKUP_DATE.tar.gz on Host Shock"
echo "• Check sitemap: https://capaxx-energy.nl/sitemap.xml"
echo "• Check robots.txt: https://capaxx-energy.nl/robots.txt"
echo ""
echo -e "${GREEN}Deployment Successful!${NC}"
