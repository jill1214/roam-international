/**
 * Single source of truth for ROAM business details.
 * Update contact numbers, links and accreditation here — every page reads from this file.
 */

export const site = {
  name: "ROAM International Travel and Tours",
  shortName: "ROAM",
  legalType: "Travel and Tour Agency",
  tagline: "Your Gateway to ROAM the World",
  description:
    "DOT-accredited travel and tour agency in Legazpi City, Albay. International tour packages, visa assistance, customized tours and group travel, with personal guidance from planning to departure.",
  // Replace with the production domain before launch (used for canonical URLs, sitemap and structured data).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.roaminternationaltravel.com",
  established: { month: "December", year: 2004, iso: "2004-12" },
  locallyOwned: true,

  address: {
    street: "117 Washington Drive",
    city: "Legazpi City",
    province: "Albay",
    region: "Region V",
    country: "Philippines",
    countryCode: "PH",
  },

  accreditation: {
    body: "Department of Tourism",
    label: "DOT Accredited Travel and Tour Agency",
    number: "DOT-R05-TTA-00270-2021",
    validUntil: "June 30, 2028",
    validUntilIso: "2028-06-30",
  },

  email: "roaminquiry@gmail.com",

  // Primary WhatsApp inquiry line.
  whatsapp: {
    name: "Miggie",
    display: "+63 917 558 1494",
    e164: "+639175581494",
    waNumber: "639175581494",
  },

  // Messenger chat link (kept out of `social` so it is not listed as a profile in JSON-LD sameAs).
  messengerUrl: "https://m.me/RoamIntlTraveltours",

  contacts: [
    { name: "Miggie", display: "+63 917 558 1494", tel: "+639175581494", primary: true },
    { name: "Raul", display: "+63 917 820 7953", tel: "+639178207953", primary: false },
    { name: "Betsy", display: "+63 908 811 8691", tel: "+639088118691", primary: false },
  ],

  // Leave as null to hide a link.
  social: {
    facebook: "https://www.facebook.com/RoamIntlTraveltours" as string | null,
    instagram: "https://www.instagram.com/roam_international/" as string | null,
    tiktok: null as string | null,
  },

  maps: {
    query: "117 Washington Drive, Legazpi City, Albay, Philippines",
    // TODO: optionally replace with the exact Google Maps "Share > Embed a map" URL for the office pin.
    embedUrl:
      "https://www.google.com/maps?q=117+Washington+Drive,+Legazpi+City,+Albay,+Philippines&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=117+Washington+Drive%2C+Legazpi+City%2C+Albay%2C+Philippines",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.province}, ${site.address.country}`;

/** Travelers served "since 2004". Computed so the copy never goes stale. */
export function yearsInTravel(now = new Date()): number {
  const start = new Date(2004, 11, 1); // December 2004
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years -= 1;
  return years;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/travel-inspiration", label: "Travel Inspiration" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;
