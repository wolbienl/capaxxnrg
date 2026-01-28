import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { generateLocalBusinessSchema } from '@/lib/seo/structured-data';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_CONFIG } from '@/lib/seo/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description: `Neem contact op met CAPAXX Energy in ${SITE_CONFIG.location.areaServed}. Plan een energiescan of vraag advies over zonnepanelen, energieopslag of laadinfra voor jouw vastgoed. Tel: ${SITE_CONFIG.contact.phoneDisplay}`,
  keywords: [
    'contact',
    'advies',
    'energiescan',
    'offerte aanvragen',
    'kennismaking',
    'consultatie',
    'energieadvies',
    'gratis scan'
  ],
  path: '/contact'
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // LocalBusiness schema voor lokale SEO
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      {children}
    </>
  );
}
