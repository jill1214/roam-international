export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  forWho: string;
  note?: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "international-tours",
    title: "International Tour Packages",
    summary: "Carefully selected international experiences for individuals, families and groups.",
    details: [
      "Ready-to-book packages with airfare, hotels, transport, an English-speaking guide and sightseeing arranged for you.",
      "We explain what each package includes and excludes, how departure-date surcharges work, and what fees are collected with the tour fee.",
      "We help you pick the departure and package that fits your budget, schedule and the people you're traveling with.",
    ],
    forWho: "Families, couples, senior travelers and first-time international travelers.",
    cta: "View tour packages",
  },
  {
    slug: "visa-assistance",
    title: "Visa Assistance",
    summary: "Guidance in preparing visa requirements and documentation.",
    details: [
      "We walk you through the requirements for your destination and help you prepare and organize your documents.",
      "We point out missing or incomplete items before you submit, so you're not caught off guard.",
      "For group packages that include a group visa, we coordinate the visa as part of your tour arrangements.",
    ],
    forWho: "Travelers heading to destinations that require a visa, including first-time applicants.",
    note: "Visa approval remains at the sole discretion of the relevant embassy or consulate. ROAM assists with preparation but cannot guarantee approval.",
    cta: "Ask about visa assistance",
  },
  {
    slug: "customized-tours",
    title: "Customized Tours",
    summary: "Travel planning based on your destination, schedule, group size and preferences.",
    details: [
      "Tell us where you want to go, when, and who's coming. We'll put together an itinerary around it.",
      "Adjust the pace, hotels, activities and meals to suit seniors, young kids or special occasions.",
      "Useful when a ready-made package doesn't match your dates or interests.",
    ],
    forWho: "Travelers with specific dates, destinations or needs that standard packages don't cover.",
    cta: "Plan a customized tour",
  },
  {
    slug: "group-travel",
    title: "Group Travel",
    summary:
      "Travel arrangements for families, barkadas, organizations, corporate groups, pilgrimage groups and other private groups.",
    details: [
      "One point of contact for the whole group, from choosing the destination to pre-departure reminders.",
      "Arrangements for private groups, whether it's a family reunion, company trip, pilgrimage or barkada getaway.",
      "We help coordinate traveler details and documents so the organizer isn't doing it alone.",
    ],
    forWho: "Families, barkadas, organizations, corporate groups and pilgrimage groups.",
    cta: "Inquire about group travel",
  },
];

/** Also listed in ROAM's Facebook bio. Shown as a secondary line on the Services page. */
export const otherServices = [
  "Local and inbound tour packages",
  "Airline ticketing",
  "Hotel reservations",
  "Other travel arrangements",
];
