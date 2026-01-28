import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";
import JsonLd from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo/structured-data";
import { SITE_CONFIG } from "@/lib/seo/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata met volledige SEO optimalisatie
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  ...generatePageMetadata({
    title: 'Home',
    description: `Energie-oplossingen voor commercieel vastgoed in ${SITE_CONFIG.location.areaServed}. Zonnepanelen, energieopslag, laadinfra en EMS. Data-gedreven, resultaatgericht. Geen dikke praat, wel resultaat.`,
    keywords: [
      'energieoplossingen',
      'commercieel vastgoed',
      'zonnepanelen bedrijfspand',
      'batterijopslag',
      'laadinfrastructuur',
      'energy management systeem',
      'peak shaving',
      'netcongestie oplossing',
      'duurzaam vastgoed',
      'BREEAM',
      'ESG'
    ],
    path: '/'
  }),
};

// Viewport configuratie voor responsive design en mobile optimization
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  
  return (
    <html lang="nl">
      <head>
        {/* Structured Data voor Organization en Website */}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        
        {/* Geo-targeting meta tags voor Twente regio */}
        <meta name="geo.region" content="NL-OV" />
        <meta name="geo.placename" content="Twente" />
        <meta name="geo.position" content={`${SITE_CONFIG.location.coordinates.latitude};${SITE_CONFIG.location.coordinates.longitude}`} />
        <meta name="ICBM" content={`${SITE_CONFIG.location.coordinates.latitude}, ${SITE_CONFIG.location.coordinates.longitude}`} />
        
        {/* Privacy-friendly analytics by Plausible */}
        <Script 
          src="https://plausible.io/js/pa-4Q6umuHlL0k85wyHmvREP.js" 
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
