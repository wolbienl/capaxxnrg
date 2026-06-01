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
    description: `Energie-oplossingen en advies voor commercieel vastgoed in ${SITE_CONFIG.location.areaServed}. Zonnepanelen, energieopslag, laadinfra en EMS. Data-gedreven en resultaatgericht.`,
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
        
        {/* Leadinfo tracking */}
        <Script id="leadinfo-init" strategy="afterInteractive">
          {`(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];
l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;
l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}
}(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-699BF5A23C8FF'));`}
        </Script>

        {/* Microsoft Clarity Analytics */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vpdpxg4ngo");
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ft+Z/2kh+5KKBTCL7kP3bw"
          strategy="afterInteractive"
        />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1332158182212301');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1332158182212301&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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
