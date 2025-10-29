/**
 * StructuredData component for JSON-LD schema markup
 * Renders structured data in the page head for SEO and LLM optimization
 */

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
