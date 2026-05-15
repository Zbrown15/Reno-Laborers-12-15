import { JsonLdScript } from "@/components/seo/json-ld-script";
import { globalBusinessGraph } from "@/lib/seo/structured-data";

/** Site-wide WebSite + Organization + LocalBusiness JSON-LD (Google Search & Maps) */
export function LocalBusinessSchema() {
  return <JsonLdScript schema={globalBusinessGraph()} />;
}
