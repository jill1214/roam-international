/**
 * Travel Inspiration entries. Not a CMS yet: set `status: "published"` and add a
 * `/travel-inspiration/[slug]` route when full articles are written.
 */
export type InspirationEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Familiarization tour" | "Destination discoveries" | "Food experiences" | "Travel tips" | "Visa preparation";
  location?: string;
  image?: { src: string; width: number; height: number; alt: string };
  status: "published" | "coming-soon";
};

export const inspiration: InspirationEntry[] = [
  {
    slug: "south-korea-famtour-2026",
    title: "On the ground in South Korea: our 2026 familiarization tour",
    excerpt:
      "In September 2026, ROAM joined the Philippine Travel Agent South Korea Famtour across Gyeonggi, Ulsan and Busan, seeing firsthand the places we recommend to travelers.",
    category: "Familiarization tour",
    location: "Gyeonggi, Ulsan & Busan",
    image: {
      src: "/images/stories/south-korea-famtour-2026.jpg", width: 1800, height: 1013,
      alt: "ROAM team and fellow Philippine travel agents holding the 2026 South Korea Famtour banner at a harbor in South Korea",
    },
    status: "coming-soon",
  },
  {
    slug: "busan-by-the-sea",
    title: "Busan by the sea",
    excerpt:
      "A city where skyscrapers meet a long sandy beach. Notes from our walk along Busan's coastline and what to plan for your own visit.",
    category: "Destination discoveries",
    location: "Busan, South Korea",
    image: {
      src: "/images/stories/busan-haeundae-group.jpg", width: 1800, height: 1013,
      alt: "ROAM travelers taking a selfie on a Busan beach with high-rise towers behind them",
    },
    status: "coming-soon",
  },
  {
    slug: "what-to-eat-in-korea",
    title: "What we ate in Korea",
    excerpt: "The dishes worth planning a meal around, from our own trips.",
    category: "Food experiences",
    location: "South Korea",
    status: "coming-soon",
  },
  {
    slug: "packing-for-a-china-winter-tour",
    title: "Packing for a winter tour in China",
    excerpt:
      "Heading to Harbin or Zhangjiajie in winter? A checklist to talk through with us before you pack.",
    category: "Travel tips",
    status: "coming-soon",
  },
  {
    slug: "preparing-visa-documents",
    title: "Preparing your visa documents",
    excerpt:
      "How to organize your requirements before you apply, and why starting early matters.",
    category: "Visa preparation",
    status: "coming-soon",
  },
];
