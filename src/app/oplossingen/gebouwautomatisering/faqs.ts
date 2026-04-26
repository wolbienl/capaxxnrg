import type { FAQItem } from '@/lib/seo/types'

export const FAQS: FAQItem[] = [
  {
    question: 'Wat is de BACS-verplichting voor utiliteit in 2026?',
    answer:
      'Vanaf 2026 moeten utiliteitsgebouwen met een HVAC-vermogen boven 290 kW verplicht een Building Automation and Control System (BACS) hebben dat voldoet aan minimaal klasse C uit NEN-EN-ISO 52120-1. In 2030 wordt deze grens verlaagd naar 70 kW. EPBD IV maakt dit op Europees niveau verplicht; Nederland implementeert het via de GACS-route.',
  },
  {
    question: 'Wat betekent BACS klasse C in praktijk?',
    answer:
      'Klasse C is de basis: minimale automatisering met monitoring, planning en zone-regeling van klimaat en verlichting. Klasse B voegt geavanceerde regelstrategieën toe. Klasse A heeft de hoogste prestatie, met voorspellende sturing. Voor de meeste utiliteitsgebouwen is klasse B het verstandige doel. Het voldoet aan toekomstige aanscherpingen en levert directe besparingen.',
  },
  {
    question: 'Wanneer voldoet een gebouw aan EPBD IV?',
    answer:
      'EPBD IV vraagt aanwezigheids- en daglichtafhankelijke verlichting, individuele ruimteregeling, energiemonitoring en interoperabiliteit met laadinfra en EMS. Het komt erop neer dat het gebouw zelf moet kunnen reageren op gebruik, weer en netcondities. Niet alleen op een centraal schema.',
  },
  {
    question: 'Wat is het verschil tussen GACS/BACS en een EMS?',
    answer:
      'GACS/BACS is de compliance-laag voor gebouwgebonden installaties: HVAC, verlichting, zonwering, toegang. Een EMS (Energy Management System) is de optimalisatie-laag voor energiestromen: opwek, opslag, laden. Ze horen samen. BACS levert data en sturing; EMS optimaliseert op kosten, netcongestie en zelfconsumptie.',
  },
  {
    question: 'Wat zijn de voordelen van 24V/PELV-verlichting?',
    answer:
      'PELV (Protective Extra-Low Voltage, 24V DC) is veiliger voor onderhoudspersoneel, valt onder een lichter NEN 3140 / SCIOS Scope 8-inspectieregime, vereenvoudigt periodieke keuringen en maakt uitbreiden of verplaatsen van armaturen mogelijk zonder zware installatiewerkzaamheden. Voor multi-tenant en zorgomgevingen is dat een direct exploitatievoordeel.',
  },
  {
    question: 'Welke open standaarden gebruiken jullie voor gebouwautomatisering?',
    answer:
      'CAPAXX is niet aan één merk verbonden en werkt met KNX, BACnet, Modbus, DALI/DALI-2, MQTT, OPC UA en DMX512. Per project kiezen we de combinatie die past bij omvang, bestaande infrastructuur en compliance-eisen. Loxone is één van de platforms die we inzetten. We zijn officieel Loxone Silver Partner, maar het verhaal staat altijd op functionaliteit en open protocollen.',
  },
]
