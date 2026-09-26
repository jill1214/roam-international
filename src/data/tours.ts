/**
 * Tour package data — the only place tour details live.
 * Sources: "Tour Packages" Google Doc + ROAM's official package flyers (Sept 2026).
 *
 * To add a package: add an object to `tours`, drop a cover image and flyer in
 * /public/images/tours, and the listing, detail page, sitemap, inquiry form and
 * related-tours sections pick it up automatically.
 */

export type MealCode = "B" | "L" | "D";

export type Departure = {
  /** Human-readable date range, e.g. "Nov 29 – Dec 4, 2026" */
  label: string;
  /** ISO start date, used for sorting / future filters */
  start: string;
  /** Surcharge on top of the starting rate, in USD. 0 = no surcharge. */
  surchargeUsd?: number;
  soldOut?: boolean;
};

export type ItineraryDay = {
  day: number;
  title: string;
  activities: string[];
  meals?: MealCode[];
  stay?: string;
  /** Mandatory shopping stops or optional add-ons stated on the flyer */
  notes?: string[];
};

export type FareOption = { label: string; priceUsd: number };

export type Tour = {
  slug: string;
  name: string;
  destination: string;
  country: string;
  region: "East Asia" | "Southeast Asia";
  category: "Guided tour" | "Cruise";
  tagline: string;
  summary: string;
  duration: string;
  durationShort: string;
  priceFromUsd: number;
  priceLabel: string;
  priceBasis: string;
  travelPeriod: string;
  cardHighlights: string[];
  highlights: string[];
  quickFacts: string[];
  departures?: Departure[];
  departuresNote?: string;
  fares?: FareOption[];
  itinerary?: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  optionalTours?: { label: string; priceUsd: number; note?: string }[];
  importantNotes: string[];
  /** `position` = Tailwind object-position class for cropping (default "object-top") */
  cover: { src: string; width: number; height: number; alt: string; position?: string };
  flyer: { src: string; width: number; height: number; alt: string };
  /** Future-filter tags (season, traveler type, etc.) */
  tags: string[];
};

const RATE_DISCLAIMER =
  "Rates, schedules, availability, surcharges and itinerary are subject to change and confirmation by ROAM.";

export const tours: Tour[] = [
  {
    slug: "harbin-snow-town",
    name: "Harbin Snow Town",
    destination: "Harbin & Snow Town",
    country: "China",
    region: "East Asia",
    category: "Guided tour",
    tagline: "Snow-covered villages, ice sculptures and sleigh rides in China's far north.",
    summary:
      "Step into a real winter wonderland. Snow-covered villages, dazzling ice sculptures, sleigh rides, penguins and some of China's most magical winter scenery await on this six-day Harbin Snow Town tour.",
    duration: "6 Days / 5 Nights",
    durationShort: "6D5N",
    priceFromUsd: 1099,
    priceLabel: "From",
    priceBasis: "per person",
    travelPeriod: "Nov 2026 – Feb 2027 departures",
    cardHighlights: ["Snow Town & horse-drawn sleigh ride", "Harbin Polarpark", "Saint Sophia Cathedral"],
    highlights: [
      "Yabuli horse-drawn sleigh ride",
      "Explore picturesque Snow Town",
      "Harbin Polarpark",
      "Ice and Snow World (departures after December 20)",
      "Dream Ice and Snow Pavilion (departures before December 20)",
      "Saint Sophia Cathedral",
      "Russian-style Old Street",
      "Zhongyang Pedestrian Street",
      "Upgraded BBQ buffet and Korean-style cuisine",
      "Bullet train experience",
    ],
    quickFacts: [
      "5-star hotel accommodations",
      "No compulsory shopping",
      "Flights via Air China or China Southern",
      "English-speaking tour guide",
    ],
    departures: [
      { label: "Nov 25 – 30, 2026", start: "2026-11-25", soldOut: true },
      { label: "Nov 29 – Dec 4, 2026", start: "2026-11-29", surchargeUsd: 100 },
      { label: "Dec 1 – 6, 2026", start: "2026-12-01", surchargeUsd: 200 },
      { label: "Dec 2 – 7, 2026", start: "2026-12-02", surchargeUsd: 200 },
      { label: "Dec 8 – 13, 2026", start: "2026-12-08", surchargeUsd: 200 },
      { label: "Dec 16 – 21, 2026", start: "2026-12-16", surchargeUsd: 500 },
      { label: "Jan 1 – 6, 2027", start: "2027-01-01", surchargeUsd: 600 },
      { label: "Jan 3 – 8, 2027", start: "2027-01-03", surchargeUsd: 600 },
      { label: "Feb 7 – 12, 2027", start: "2027-02-07", surchargeUsd: 600 },
    ],
    itinerary: [
      { day: 1, title: "Arrive in Harbin", meals: ["D"], stay: "5-star hotel in Harbin",
        activities: ["Fly to Harbin; meet your tour guide at the airport", "Cotton-padded clothing store"] },
      { day: 2, title: "Sleigh ride and Snow Town", meals: ["B", "L", "D"], stay: "Local 5-star hotel in Snow Town",
        activities: ["Yabuli horse-drawn sleigh ride", "Snow Town", "Xueyun Street"] },
      { day: 3, title: "Snow Town to Mudanjiang", meals: ["B", "L", "D"], stay: "5-star hotel in Mudanjiang",
        activities: ["Snow Town Big Stone Tablet", "Bangchui Mountain Wooden Boardwalk", "Free time in Snow Town", "Upgraded dinner with Korean-style cuisine"] },
      { day: 4, title: "Harbin city", meals: ["B", "L", "D"], stay: "5-star hotel in Harbin",
        activities: ["Russian-style Old Street", "Middle East Railway Church Museum", "Oil Painting Village", "Qunli Music Square", "Saint Sophia Cathedral"] },
      { day: 5, title: "Polarpark and ice festival", meals: ["B", "L", "D"], stay: "Same hotel as Day 4",
        activities: ["Harbin Polarpark", "Dream Ice and Snow Pavilion (before Dec 20) or Ice and Snow World (after Dec 20)", "Zhongyang Pedestrian Street"] },
      { day: 6, title: "Fly home", meals: ["B"],
        activities: ["Breakfast and hotel check-out", "Transfer to the airport for your flight home"] },
    ],
    inclusions: [
      "International and domestic airfare",
      "Airport taxes and terminal fees",
      "23kg checked baggage (1 piece) and 7kg hand-carry",
      "5 nights hotel accommodation with daily breakfast, twin sharing",
      "Private transportation with English-speaking tour guide",
      "Sightseeing and entrance fees as specified",
      "Meals as indicated in the itinerary",
      "Complimentary bottled water daily",
    ],
    exclusions: [
      "Philippine Travel Tax (USD 30, collected with tour fee)",
      "China group visa (USD 40, collected with tour fee)",
      "Tips for driver and guide (USD 30, collected with tour fee)",
      "Travel insurance",
      "Single supplement",
      "Fuel surcharge increases",
      "Personal expenses such as telephone calls and minibar",
    ],
    importantNotes: [
      "Surcharges apply per departure date and are added to the starting rate.",
      "A fuel surcharge may be imposed without prior notice if required by the airline.",
      RATE_DISCLAIMER,
    ],
    cover: { src: "/images/tours/roam-package-harbin-snow-town.png", width: 1448, height: 1086,
      alt: "Harbin Snow Town with a snowy village, ice sculptures, a Ferris wheel, and a husky-drawn sleigh" },
    flyer: { src: "/images/tours/harbin-snow-town-flyer.jpg", width: 1080, height: 1350,
      alt: "ROAM Harbin Snow Town 6D5N flyer with departure dates, day-by-day itinerary, inclusions and exclusions" },
    tags: ["winter", "snow", "china", "family"],
  },
  {
    slug: "avatar-skiing",
    name: "Avatar Skiing",
    destination: "Changsha & Zhangjiajie",
    country: "China",
    region: "East Asia",
    category: "Guided tour",
    tagline: "Skiing, glass bridges and the towering peaks of Zhangjiajie.",
    summary:
      "Experience winter in a whole new way. This seven-day tour combines snowy landscapes, skiing and the spectacular sandstone pillars of Zhangjiajie, with city time in Changsha at either end.",
    duration: "7 Days / 6 Nights",
    durationShort: "7D6N",
    priceFromUsd: 599,
    priceLabel: "As low as",
    priceBasis: "per person",
    travelPeriod: "Jan – Feb 2027 departures",
    cardHighlights: ["Skiing at Qixing Mountain", "Grand Canyon Glass Bridge", "Zhangjiajie National Forest Park"],
    highlights: [
      "Skiing at Qixing Mountain Scenic Area (2 hours, free 2-piece ski rental)",
      "Glass Walkway and 1520 Sky Eye",
      "Zhangjiajie Grand Canyon Glass Bridge",
      "Zhangjiajie National Forest Park",
      "Golden Whip Stream",
      "Bailong Sky Lift and The First Nature Bridge",
      "Changsha sightseeing and pedestrian streets",
    ],
    quickFacts: [
      "5-star hotel in Changsha (2 nights), 4-star in Zhangjiajie",
      "Flights via China Southern",
      "English-speaking tour guide",
      "Includes mandatory shopping stops",
    ],
    departures: [
      { label: "Jan 10 – 16, 2027", start: "2027-01-10", surchargeUsd: 50 },
      { label: "Jan 11 – 17, 2027", start: "2027-01-11", surchargeUsd: 50 },
      { label: "Jan 15 – 21, 2027", start: "2027-01-15", surchargeUsd: 0 },
      { label: "Feb 13 – 19, 2027", start: "2027-02-13", surchargeUsd: 50 },
    ],
    itinerary: [
      { day: 1, title: "Arrive in Changsha", stay: "5-star hotel in Changsha",
        activities: ["Fly to Changsha", "Transfer to hotel"] },
      { day: 2, title: "Qixing Mountain skiing", meals: ["B", "L", "D"], stay: "4-star hotel in Zhangjiajie",
        activities: ["Transfer to Zhangjiajie", "Qixingshan Scenic Area", "Glass Walkway and 1520 Sky Eye", "Skiing (2 hours, free 2-piece ski rental). If the ski area is closed, it is replaced with Ice & Snow World"] },
      { day: 3, title: "Zhangjiajie town", meals: ["B", "L", "D"], stay: "4-star hotel in Zhangjiajie",
        activities: ["Junsheng Painting Institute", "72 Strange Buildings (outside view)"],
        notes: ["Mandatory shopping stop: Traditional Chinese Medicine", "Optional: Tianmen Mountain Scenic Area, +USD 85"] },
      { day: 4, title: "National Forest Park", meals: ["B", "L", "D"], stay: "4-star hotel in Zhangjiajie",
        activities: ["Zhangjiajie National Forest Park", "Golden Whip Stream", "Shuiraosimen (Four Gates Surrounded by Water)", "Yuanjiajie Scenic Area via Bailong Sky Lift", "The First Nature Bridge", "Mihuntai Scenic Spot", "Hallelujah Mountain"],
        notes: ["Mandatory shopping stop: Latex", "Optional: Charming Xiangxi Show, +USD 70"] },
      { day: 5, title: "Grand Canyon Glass Bridge", meals: ["B", "L", "D"], stay: "4-star hotel in Zhangjiajie",
        activities: ["Zhangjiajie Grand Canyon", "Grand Canyon Glass Bridge"],
        notes: ["Mandatory shopping stop: Tea & Jewelry", "Optional: Huanglong Cave with boat ride, +USD 70"] },
      { day: 6, title: "Back to Changsha", meals: ["B", "L", "D"], stay: "5-star hotel in Changsha",
        activities: ["Transfer to Changsha", "Snack Kingdom", "Wuyi Square", "Changsha IFS", "Huangxing Road Pedestrian Street"] },
      { day: 7, title: "Fly home", meals: ["B"],
        activities: ["Transfer to the airport for your flight home"] },
    ],
    inclusions: [
      "International airfare, airport tax and terminal fee",
      "23kg checked baggage (1 piece) and 7kg hand-carry",
      "Private bus with English-speaking tour guide",
      "Sightseeing as specified, including entrance fees",
      "6 nights accommodation with daily breakfast, twin sharing",
      "Meals: 6 breakfasts, 5 lunches, 5 dinners",
      "One complimentary bottle of water per person per day",
    ],
    exclusions: [
      "Philippine Travel Tax (USD 30, collected with tour fee)",
      "China group visa (USD 40, collected with tour fee)",
      "Tips for driver and guide (USD 35, collected with tour fee)",
      "Optional tours",
      "Travel insurance",
      "Single supplement",
      "Personal expenses such as telephone calls and minibar",
    ],
    optionalTours: [
      { label: "Tianmen Mountain Scenic Area", priceUsd: 85 },
      { label: "Charming Xiangxi Show", priceUsd: 70 },
      { label: "Huanglong Cave (with boat ride)", priceUsd: 70 },
    ],
    importantNotes: [
      "This itinerary includes mandatory shopping stops on Days 3, 4 and 5.",
      "Tianmen Mountain is an optional tour at an additional USD 85 per person.",
      "Additional fees and optional tours apply.",
      RATE_DISCLAIMER,
    ],
    cover: { src: "/images/tours/roam-package-avatar-skiing.png", width: 1448, height: 1086,
      alt: "Avatar Skiing with a skier above the snow-covered sandstone peaks of Zhangjiajie" },
    flyer: { src: "/images/tours/avatar-skiing-flyer.jpg", width: 1080, height: 1350,
      alt: "ROAM Avatar Skiing 7D6N flyer with departure dates, day-by-day itinerary, inclusions and exclusions" },
    tags: ["winter", "snow", "adventure", "china"],
  },
  {
    slug: "disney-adventure-langkawi",
    name: "Disney Adventure with Langkawi",
    destination: "Singapore & Langkawi",
    country: "Malaysia",
    region: "Southeast Asia",
    category: "Cruise",
    tagline: "A family cruise from Singapore with a call at Langkawi, Malaysia.",
    summary:
      "Set sail aboard Disney Adventure on a four-night cruise from Singapore featuring a visit to Langkawi, Malaysia on select sailings. From Disney magic at sea to tropical island scenery, it's a getaway the whole family can look forward to.",
    duration: "4-Night Cruise",
    durationShort: "4 nights",
    priceFromUsd: 774,
    priceLabel: "From",
    priceBasis: "per person, twin sharing",
    travelPeriod: "Sailings Dec 31, 2026 – Dec 2027",
    cardHighlights: ["Departs from Singapore", "Port call in Langkawi, Malaysia", "Family-friendly cruise"],
    highlights: [
      "Four nights aboard Disney Adventure",
      "Visit to Langkawi, Malaysia on select sailings",
      "Sails from Singapore",
      "Ideal for family holidays and special celebrations",
    ],
    quickFacts: [
      "Sailings depart Thursdays",
      "Fares include port taxes and fees",
      "Four stateroom categories",
    ],
    fares: [
      { label: "Inside Stateroom", priceUsd: 774 },
      { label: "Oceanview Stateroom", priceUsd: 1027 },
      { label: "Balcony Stateroom", priceUsd: 1146 },
      { label: "Concierge Stateroom", priceUsd: 2471 },
    ],
    departuresNote: "Sailing dates, all departing Thursdays.",
    departures: [
      { label: "Dec 31, 2026", start: "2026-12-31" },
      ...[
        ["Jan", "01", [21, 28]], ["Feb", "02", [11, 18]], ["Mar", "03", [4, 11, 18, 25]],
        ["Apr", "04", [8, 29]], ["May", "05", [6, 13, 20, 27]], ["Oct", "10", [7, 14, 21, 28]],
        ["Nov", "11", [4, 11, 18, 25]], ["Dec", "12", [2, 9, 16, 23]],
      ].flatMap(([m, mm, days]) =>
        (days as number[]).map((d) => ({
          label: `${m} ${d}, 2027`,
          start: `2027-${mm}-${String(d).padStart(2, "0")}`,
        })),
      ),
    ],
    inclusions: [
      "4-night cruise fare per person, based on twin sharing",
      "Port taxes and fees",
    ],
    exclusions: [
      "Airfare to and from Singapore, hotel stays and other arrangements are not part of the cruise fare. Ask ROAM for a complete quote.",
    ],
    importantNotes: [
      "Rates are per person, including port taxes and fees.",
      "Rates are dynamic and subject to change. Sailing dates and availability are subject to confirmation.",
    ],
    cover: { src: "/images/tours/roam-package-langkawi.png", width: 1448, height: 1086,
      alt: "Disney Adventure cruise ship at sea beside a tropical beach in Langkawi, Malaysia" },
    flyer: { src: "/images/tours/disney-adventure-langkawi-flyer.jpg", width: 755, height: 942,
      alt: "ROAM Disney Adventure with Langkawi flyer listing 2026 and 2027 sailing dates and stateroom fares" },
    tags: ["cruise", "family", "malaysia", "singapore"],
  },
  {
    slug: "osaka-kyoto-nara",
    name: "Osaka, Kyoto & Nara",
    destination: "Osaka, Kyoto & Nara",
    country: "Japan",
    region: "East Asia",
    category: "Guided tour",
    tagline: "Shrines, bamboo groves, friendly deer and a free day in Osaka.",
    summary:
      "From Kyoto's shrines and bamboo groves to the friendly deer of Nara and the energy of Osaka, experience some of Japan's most loved destinations in five days. Ideal for a first trip to Japan or a return visit.",
    duration: "5 Days / 4 Nights",
    durationShort: "5D4N",
    priceFromUsd: 799,
    priceLabel: "From",
    priceBasis: "per person",
    travelPeriod: "Oct 2026 – Apr 2027 departures",
    cardHighlights: ["Fushimi Inari Shrine", "Nara Deer Park", "Free day in Osaka"],
    highlights: [
      "Fushimi Inari Shrine",
      "Arashiyama Bamboo Grove",
      "Photo stop at Osaka Castle",
      "Nara Deer Park",
      "Photo stop at Todaiji Temple",
      "Rinku Premium Outlets",
      "Free day in Osaka, with optional Universal Studios Japan",
      "Upgraded Yakiniku BBQ lunch",
    ],
    quickFacts: [
      "3-star and 4-star hotels",
      "Flights via Cebu Pacific (Manila – Kansai)",
      "7kg hand-carry only; checked bags extra",
      "English-speaking tour guide",
    ],
    departures: [
      { label: "Oct 10 – 14, 2026", start: "2026-10-10", surchargeUsd: 100 },
      { label: "Oct 17 – 21, 2026", start: "2026-10-17", surchargeUsd: 100 },
      { label: "Nov 7 – 11, 2026", start: "2026-11-07", surchargeUsd: 160 },
      { label: "Dec 5 – 9, 2026", start: "2026-12-05", surchargeUsd: 60 },
      { label: "Dec 12 – 16, 2026", start: "2026-12-12", surchargeUsd: 100 },
      { label: "Jan 16 – 20, 2027", start: "2027-01-16", surchargeUsd: 0 },
      { label: "Jan 23 – 27, 2027", start: "2027-01-23", surchargeUsd: 0 },
      { label: "Feb 20 – 24, 2027", start: "2027-02-20", surchargeUsd: 60 },
      { label: "Feb 25 – Mar 1, 2027", start: "2027-02-25", surchargeUsd: 60 },
      { label: "Mar 6 – 10, 2027", start: "2027-03-06", surchargeUsd: 60 },
      { label: "Mar 13 – 17, 2027", start: "2027-03-13", surchargeUsd: 60 },
      { label: "Apr 17 – 21, 2027", start: "2027-04-17", surchargeUsd: 60 },
      { label: "Apr 24 – 28, 2027", start: "2027-04-24", surchargeUsd: 60 },
    ],
    itinerary: [
      { day: 1, title: "Arrive in Osaka", stay: "4-star hotel in Osaka",
        activities: ["Fly to Osaka", "Meet your tour guide at Kansai International Airport", "Transfer to hotel and check in"] },
      { day: 2, title: "Kyoto", meals: ["B", "L"], stay: "4-star hotel in Osaka",
        activities: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Duty-free household products store", "Photo stop at Osaka Castle"] },
      { day: 3, title: "Free day in Osaka", meals: ["B"], stay: "3-star hotel in Osaka",
        activities: ["Free and easy day, without tour guide and transfers"],
        notes: ["Optional: Universal Studios Japan with one-day pass and transfer, +USD 159 (minimum 10 travelers)"] },
      { day: 4, title: "Nara", meals: ["B", "L"], stay: "3-star hotel in Osaka",
        activities: ["General duty-free store", "Photo stop at Todaiji Temple", "Nara Deer Park", "Cosmetic drugstore", "Upgraded Yakiniku BBQ lunch"] },
      { day: 5, title: "Outlets and fly home", meals: ["B"],
        activities: ["Breakfast and check-out", "Rinku Premium Outlets", "Flight home"] },
    ],
    inclusions: [
      "International airfare, airport tax and terminal fee",
      "7kg hand-carry baggage",
      "Private coach with English-speaking tour guide",
      "Sightseeing and entrance fees as specified",
      "4 nights hotel accommodation with daily breakfast, twin sharing",
      "Meals as indicated in the itinerary",
      "Complimentary bottled water",
    ],
    exclusions: [
      "Checked baggage (USD 55 for 20kg, 1 piece)",
      "Japan visa",
      "Philippine Travel Tax (USD 30, collected with tour fee)",
      "Tips for driver and guide (USD 35, collected with tour fee)",
      "Universal Studios Japan (optional, USD 159, minimum 10 travelers)",
      "Travel insurance",
      "Single supplement",
      "Personal expenses such as telephone calls and minibar",
    ],
    optionalTours: [
      { label: "Universal Studios Japan (one-day pass and transfer)", priceUsd: 159, note: "Minimum 10 travelers" },
    ],
    importantNotes: [
      "Surcharges apply per departure date and are added to the starting rate.",
      "A Japan visa is required and is not included. ROAM can assist with visa preparation.",
      RATE_DISCLAIMER,
    ],
    cover: { src: "/images/tours/roam-package-osaka-kyoto-nara (2).jpeg", width: 2528, height: 1692,
      alt: "Osaka, Kyoto and Nara tour cover showing Mario and Luigi in a colorful Osaka street", position: "object-bottom" },
    flyer: { src: "/images/tours/osaka-kyoto-nara-flyer.jpg", width: 1080, height: 1350,
      alt: "ROAM Osaka, Kyoto and Nara 5D4N flyer with departure dates, day-by-day itinerary, inclusions and exclusions" },
    tags: ["japan", "culture", "first-timers", "shopping"],
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function getRelatedTours(slug: string, limit = 3): Tour[] {
  return tours.filter((t) => t.slug !== slug).slice(0, limit);
}

export function formatUsd(value: number): string {
  return `USD ${value.toLocaleString("en-US")}`;
}
