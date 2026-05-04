type JsonRecord = Record<string, unknown>;

/**
 * Renders JSON-LD for Google (Search, Maps, rich results). Use from Server Components only.
 * Pass a single object or multiple nodes (wrapped in @graph).
 */
export function JsonLdScript({ schema }: { schema: JsonRecord | JsonRecord[] }) {
  const payload: JsonRecord = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : { "@context": "https://schema.org", ...schema };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
