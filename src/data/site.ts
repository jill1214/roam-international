/**
 * Single source of truth for ROAM business details.
 * Update contact numbers, links and accreditation here — every page reads from this file.
 */

const legazpiOffice = {
  id: "legazpi",
  name: "Legazpi office",
  primary: true,
  address: {
    street: "117 Washington Drive",
    city: "Legazpi City",
    province: "Albay",
    region: "Region V",
    country: "Philippines",
    countryCode: "PH",
    postalCode: "4500",
  },
  hours: "9:00 AM–6:00 PM",
  hoursNote: "Operating days and Saturday hours are pending confirmation.",
  maps: {
    query: "117 Washington Drive, Legazpi City, Albay 4500, Philippines",
    embedUrl:
      "https://www.google.com/maps?q=117+Washington+Drive,+Legazpi+City,+Albay,+Philippines&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=117+Washington+Drive%2C+Legazpi+City%2C+Albay%2C+Philippines",
  },
} as const;

const antipoloOffice = {
  id: "antipolo",
  name: "Antipolo office",
  primary: false,
  address: {
    street: "4A Santol St., Town & Country Executive Village",
    city: "Antipolo City",
    province: "Rizal",
    region: "Calabarzon",
    country: "Philippines",
    countryCode: "PH",
    postalCode: null,
  },
  hours: null,
  hoursNote: "Office hours pending confirmation.",
  maps: null,
} as const;

export const site = {
  name: "ROAM International Travel and Tours",
  shortName: "ROAM",
  legalType: "Travel and Tour Agency",
  tagline: "Your Gateway to ROAM the World",
  description:
    "DOT-accredited travel agency helping travelers discover Bicol, explore the Philippines and journey abroad through tours, visa assistance and trusted travel guidance.",
  // Replace with the production domain before launch (used for canonical URLs, sitemap and structured data).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://roam-international.vercel.app",
  established: { month: "December", year: 2004, iso: "2004-12" },
  locallyOwned: true,

  address: legazpiOffice.address,
  offices: [legazpiOffice, antipoloOffice],

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

  maps: legazpiOffice.maps,
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postalCode}, ${site.address.country}`;

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

export const tourNavGroups = [
  {
    label: "Philippines",
    links: [
      { href: "/tours#bicol-tours", label: "Bicol Tours" },
      { href: "/tours#other-philippines", label: "Other Philippine Destinations" },
    ],
  },
  {
    label: "International",
    links: [
      { href: "/tours#international-tours", label: "International Tour Packages" },
      { href: "/tours#cruises", label: "Cruises" },
    ],
  },
] as const;
