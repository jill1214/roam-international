/**
 * Travel Inspiration entries. Not a CMS yet: set `status: "published"` and add a
 * `/travel-inspiration/[slug]` route when full articles are written.
 */
export type InspirationEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Familiarization Tour"
    | "Destination Discoveries"
    | "Food Experiences"
    | "Travel Tips"
    | "Visa Preparation";
  location?: string;
  /** Card-cropped to the 4:3 media box the story cards render. */
  image?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  status: "published" | "coming-soon";
};

export const inspiration: InspirationEntry[] = [
  {
    slug: "south-korea-famtour-2026",
    title: "On the ground in South Korea: our 2026 familiarization tour",
    excerpt:
      "In September 2026, ROAM joined the Philippine Travel Agent South Korea Famtour across Gyeonggi, Ulsan and Busan, seeing firsthand the places we recommend to travelers.",
    category: "Familiarization Tour",
    location: "Gyeonggi, Ulsan & Busan",
    image: {
      src: "/images/stories/south-korea-famtour-2026.jpg",
      width: 1800,
      height: 1013,
      alt: "ROAM team and fellow Philippine travel agents holding the 2026 South Korea Famtour banner at a harbor in South Korea",
    },
    status: "coming-soon",
  },
  {
    slug: "busan-by-the-sea",
    title: "Busan by the sea",
    excerpt:
      "A city where skyscrapers meet a long sandy beach. Notes from our walk along Busan's coastline and what to plan for your own visit.",
    category: "Destination Discoveries",
    location: "Busan, South Korea",
    image: {
      src: "/images/stories/busan-haeundae-group.png",
      width: 1448,
      height: 1086,
      alt: "ROAM travelers on Haeundae Beach in Busan, with the sweep of sand, the turquoise sea and the city's high-rise skyline behind them",
    },
    status: "coming-soon",
  },
  {
    slug: "what-to-eat-in-korea",
    title: "What we ate in Korea",
    excerpt:
      "치즈 닭갈비 (Cheese Dakgalbi): a popular Korean dish of spicy stir-fried chicken, vegetables and melted cheese, usually cooked and shared at the table.",
    category: "Food Experiences",
    location: "South Korea",
    image: {
      src: "/images/stories/roam-posts-cheese-dakgalbi-kor.jpg",
      width: 2048,
      height: 2048,
      alt: "A wide pan of cheese dakgalbi on a restaurant table: spicy stir-fried chicken, cabbage and spring onion around a centre of melted cheese, with a wooden spatula resting in the pan",
    },
    status: "coming-soon",
  },
  {
    slug: "packing-for-a-china-winter-tour",
    title: "Packing for a winter tour in China",
    excerpt:
      "Heading to Harbin or Zhangjiajie in winter? A checklist to talk through with us before you pack.",
    category: "Travel Tips",
    image: {
      src: "/images/stories/roam-winter-tour-china.png",
      width: 1448,
      height: 1086,
      alt: "ROAM Travel Tip Tuesday graphic, “Packing for a winter tour in China”, showing an open suitcase packed with a padded jacket, knitted sweater, scarf, gloves, beanie, thermal socks, moisturizer, lip balm and a charger",
    },
    status: "coming-soon",
  },
  {
    slug: "preparing-visa-documents",
    title: "Preparing your visa documents",
    excerpt:
      "How to organize your requirements before you apply, and why starting early matters.",
    category: "Visa Preparation",
    image: {
      src: "/images/stories/roam-preparing-visa.png",
      width: 1448,
      height: 1086,
      alt: "ROAM Travel Tip Tuesday graphic, “Planning an international trip? Check the visa requirements early”, with a Philippine passport, a visa application form on a clipboard, a world map and a note that ROAM can assist with visa processing",
    },
    status: "coming-soon",
  },
];
