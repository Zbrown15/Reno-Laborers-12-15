import type { Metadata } from "next";

/** Default for all public pages — full indexing + Google rich-result hints */
export const INDEX_FOLLOW_PUBLIC: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};
