import { site } from "./site";

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "How do I inquire about a tour?",
    a: `Fill in the inquiry form on any tour page or on our Contact page, then tap "Continue on WhatsApp". WhatsApp opens with your details already written in a message to ${site.whatsapp.name} at ${site.whatsapp.display}. Just press send and we'll continue the conversation there. You can also call or email us.`,
  },
  {
    q: "Are the prices on the website final?",
    a: "No. Prices shown are starting rates per person. Your final price depends on your departure date (many dates carry a surcharge), room arrangement, and fees that some packages collect with the tour fee, such as the Philippine Travel Tax, visa fees and guide tips. We'll confirm the full amount with you before anything is booked.",
  },
  {
    q: "Are package rates subject to change?",
    a: "Yes. Rates, schedules, availability, surcharges and itineraries are subject to change and confirmation. Airlines may also impose fuel surcharges. Cruise fares are dynamic and can change daily.",
  },
  {
    q: "Does ROAM provide visa assistance?",
    a: "Yes. We guide you through your destination's visa requirements and help you prepare and organize your documents. For some group tours, the group visa is arranged as part of the package.",
  },
  {
    q: "Does visa assistance guarantee approval?",
    a: "No. Visa approval is always at the sole discretion of the embassy or consulate concerned. Our role is to help you prepare a complete and well-organized application.",
  },
  {
    q: "Can ROAM arrange customized tours?",
    a: "Yes. Tell us your preferred destination, travel dates, group size and interests, and we'll plan an itinerary around them.",
  },
  {
    q: "Can ROAM arrange group travel?",
    a: "Yes. We arrange trips for families, barkadas, organizations, corporate groups, pilgrimage groups and other private groups.",
  },
  {
    q: "Is ROAM a DOT-accredited agency?",
    a: `Yes. ROAM International Travel and Tours is a DOT-accredited travel and tour agency, Accreditation No. ${site.accreditation.number}, valid until ${site.accreditation.validUntil}.`,
  },
  {
    q: "How do I contact ROAM?",
    a: `WhatsApp or call ${site.whatsapp.name} at ${site.whatsapp.display}. You can also reach ${site.contacts[1].name} at ${site.contacts[1].display}, ${site.contacts[2].name} at ${site.contacts[2].display}, or email ${site.email}.`,
  },
  {
    q: "Where is the ROAM office located?",
    a: `Our office is at ${site.address.street}, ${site.address.city}, ${site.address.province}. We're a locally owned agency serving travelers from Bicol and across the Philippines.`,
  },
];
