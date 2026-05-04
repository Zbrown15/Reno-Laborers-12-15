/** Approximate centroids for service-area Place schema (maps / local SEO) */
export const SERVICE_AREA_GEO: Record<string, { latitude: string; longitude: string }> = {
  reno: { latitude: "39.5296", longitude: "-119.8138" },
  sparks: { latitude: "39.5349", longitude: "-119.7527" },
  "spanish-springs": { latitude: "39.6576", longitude: "-119.6794" },
  "incline-village": { latitude: "39.2516", longitude: "-119.9528" },
};

export function getServiceAreaGeo(slug: string) {
  return SERVICE_AREA_GEO[slug] ?? SERVICE_AREA_GEO.reno;
}
