#!/bin/bash

# SSH Key Setup Script voor Capaxx Energy deployment
# Dit script helpt je een SSH key te genereren en te uploaden naar de server

set -e

# Kleuren
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}SSH Key Setup voor Capaxx Energy Deployment${NC}"
echo "=============================================="
echo ""

SSH_KEY_PATH="$HOME/.ssh/capaxx_energy_deploy"
SSH_USER="capaxxenergynl"
SSH_HOST="31.7.7.98"

# Controleer of key al bestaat
if [ -f "$SSH_KEY_PATH" ]; then
    echo -e "${YELLOW}⚠️  SSH key bestaat al: $SSH_KEY_PATH${NC}"
    echo -e "${CYAN}Wil je de bestaande key gebruiken? (y/n):${NC}"
    read -r use_existing
    if [ "$use_existing" != "y" ]; then
        echo "Setup geannuleerd."
        exit 0
    fi
else
    # Genereer nieuwe SSH key
    echo -e "${CYAN}Genereren van nieuwe SSH key...${NC}"
    ssh-keygen -t ed25519 -f "$SSH_KEY_PATH" -N "" -C "capaxx-energy-deployment"
    echo -e "${GREEN}✅ SSH key gegenereerd: $SSH_KEY_PATH${NC}"
    echo ""
fi

# Upload public key naar server
echo -e "${CYAN}Uploaden van public key naar server...${NC}"
echo -e "${YELLOW}Je moet nu het SSH wachtwoord invoeren (dit is de laatste keer!):${NC}"
echo ""

# Kopieer public key naar server
ssh-copy-id -i "${SSH_KEY_PATH}.pub" "${SSH_USER}@${SSH_HOST}"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ SSH key succesvol geïnstalleerd!${NC}"
    echo ""
    echo -e "${CYAN}Test de verbinding:${NC}"
    echo "ssh -i $SSH_KEY_PATH ${SSH_USER}@${SSH_HOST}"
    echo ""
    echo -e "${GREEN}Je kunt nu deployen zonder wachtwoord:${NC}"
    echo "./deploy-shock.sh"
else
    echo ""
    echo -e "${YELLOW}⚠️  Er ging iets mis bij het uploaden van de key.${NC}"
    echo "Probeer handmatig:"
    echo "ssh-copy-id -i ${SSH_KEY_PATH}.pub ${SSH_USER}@${SSH_HOST}"
    exit 1
fi
