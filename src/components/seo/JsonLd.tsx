/**
 * JsonLd Component - Herbruikbaar component voor structured data
 * 
 * Gebruik dit component om JSON-LD structured data toe te voegen aan pagina's.
 * 
 * @example
 * ```tsx
 * import JsonLd from '@/components/seo/JsonLd';
 * import { generateServiceSchema } from '@/lib/seo/structured-data';
 * 
 * export default function Layout({ children }) {
 *   const schema = generateServiceSchema({
 *     name: 'Energieopslag',
 *     description: 'Batterijopslag',
 *     serviceType: 'Battery Storage'
 *   });
 *   
 *   return (
 *     <>
 *       <JsonLd data={schema} />
 *       {children}
 *     </>
 *   );
 * }
 * ```
 */

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(data, null, 0) 
      }}
      suppressHydrationWarning
    />
  );
}
