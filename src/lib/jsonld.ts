import { site } from "@/data/site";
import type { Tour } from "@/data/tours";
import type { Faq } from "@/data/faqs";

export function agencyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${site.url}/#agency`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/brand/logo-stacked.png`,
    image: `${site.url}/og-image.jpg`,
    description: site.description,
    email: site.email,
    telephone: site.whatsapp.e164,
    foundingDate: site.established.iso,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: `${site.address.province}, ${site.address.region}`,
      addressCountry: site.address.countryCode,
      postalCode: site.address.postalCode,
    },
    location: site.offices.map((office) => ({
      "@type": "Place",
      name: office.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.address.street,
        addressLocality: office.address.city,
        addressRegion: office.address.province,
        addressCountry: office.address.countryCode,
        ...(office.address.postalCode ? { postalCode: office.address.postalCode } : {}),
      },
    })),
    hasMap: site.maps.directionsUrl,
    areaServed: "PH",
    contactPoint: site.contacts.map((c) => ({
      "@type": "ContactPoint",
      name: c.name,
      telephone: c.tel,
      contactType: "customer service",
      areaServed: "PH",
    })),
    sameAs: Object.values(site.social).filter(Boolean),
  };
}

export function tourJsonLd(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.summary,
    url: `${site.url}/tours/${tour.slug}`,
    image: `${site.url}${tour.cover.src}`,
    touristType: tour.tags,
    provider: { "@id": `${site.url}/#agency` },
    offers: {
      "@type": "Offer",
      price: tour.priceFrom,
      priceCurrency: tour.currency,
      url: `${site.url}/tours/${tour.slug}`,
      description: `${tour.priceLabel} ${tour.priceFrom} ${tour.currency} ${tour.priceBasis}. Check for availability; schedules, rates and inclusions are subject to confirmation by ROAM.`,
    },
  };
}

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
