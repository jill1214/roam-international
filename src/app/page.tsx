import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { services } from "@/data/services";
import { TourCard } from "@/components/TourCard";
import { ButtonLink, Container, Section, SectionHeading } from "@/components/ui";
import { AccreditationPanel, LocationBlock } from "@/components/sections";
import { CompassIcon, DocumentIcon, PeopleIcon, RouteIcon, ShieldIcon } from "@/components/Icons";
import { BadgeCheck, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: "Bicol & Philippine Tours, Visa Assistance and International Travel",
  description:
    "Discover Bicol, explore the Philippines and travel abroad with ROAM International Travel and Tours. Get thoughtful tour planning, visa assistance and trusted guidance.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const visaAssistance = services[0];
  const internationalTours = tours.filter((tour) => tour.market === "International");
  const reasons = [
    {
      Icon: CompassIcon,
      title: "Travel experience since 2004",
      body: `Established in ${site.established.month} ${site.established.year}, ROAM has been arranging trips for more than two decades.`,
    },
    {
      Icon: ShieldIcon,
      title: "DOT Accredited",
      body: `Accreditation No. ${site.accreditation.number}, valid through ${site.accreditation.validUntil}.`,
    },
    {
      Icon: PeopleIcon,
      title: "Personal Travel Assistance",
      body: "Real people guide you before your trip and throughout your preparation, helping you feel ready at every step.",
    },
    {
      Icon: RouteIcon,
      title: "From Planning to Departure",
      body: "Help with choosing a tour, preparing for the trip, visa requirements and pre-departure questions.",
    },
  ];

  return (
    <>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-mist lg:h-40" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md bg-brand-500 px-3 py-1.5 text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="size-5" /> DOT Accredited</span>
              <span className="inline-flex items-center gap-1.5"><Plane className="size-5" /> Serving travelers since {site.established.year}</span>
            </p>
            <h1 id="hero-heading" className="text-[clamp(2.75rem,7vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              Discover the Philippines. <span className="text-brand-600">Experience Bicol.</span> Roam Beyond.
            </h1>
            <p className="mt-6 text-lg text-body sm:text-xl">
              Explore Bicol, the Philippines, and beyond with thoughtfully planned tours, visa assistance, and trusted travel guidance from ROAM International Travel & Tours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tours#philippines" size="lg">Explore Philippine Tours</ButtonLink>
              <ButtonLink href="/services#visa-assistance" variant="secondary" size="lg">Get Visa Assistance</ButtonLink>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[38rem]">
            <div className="overflow-hidden rounded-[var(--radius-card)] bg-brand-50 shadow-[0_40px_80px_-40px_rgba(14,58,95,0.55)]">
              <Image
                src="/images/roam-mayon-hero.webp"
                alt="Mayon Volcano rising above palm trees with its reflection on calm water in Albay, Philippines."
                width={1920}
                height={1280}
                priority
                sizes="(min-width: 1024px) 38rem, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-2 text-sm text-muted">Mayon Volcano, Albay, Philippines.</figcaption>
          </figure>
        </Container>
      </section>

      <Section id="discover-bicol" tone="mist" labelledBy="bicol-heading">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <SectionHeading id="bicol-heading" title="Discover Bicol" intro="Begin in ROAM's home region, from the landscapes of Albay to experiences across Bicol. Share your dates and group so the team can prepare confirmed options around your trip." />
          <div className="rounded-[var(--radius-card)] border border-brand-100 bg-white p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Local knowledge, planned for you</p>
            <p className="mt-3 text-body">Bicol package schedules, rates and inclusions are provided on inquiry. ROAM will not present a package as available until its details are confirmed.</p>
            <ButtonLink href="/tours#bicol-tours" className="mt-6">Explore Bicol tours</ButtonLink>
          </div>
        </Container>
      </Section>

      <Section id="explore-philippines" labelledBy="philippines-heading">
        <Container>
          <SectionHeading id="philippines-heading" title="Explore the Philippines" intro="Planning beyond Bicol? ROAM can help shape Philippine travel around your destination, dates, group and interests." />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[var(--radius-card)] border border-line p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Bicol</p>
              <h3 className="mt-2 text-2xl font-bold">Albay and nearby destinations</h3>
              <p className="mt-3 text-body">Ask about a Bicol itinerary prepared for your travel dates and group.</p>
              <ButtonLink href="/contact#inquire" variant="text" className="mt-5">Plan a Bicol trip</ButtonLink>
            </article>
            <article className="rounded-[var(--radius-card)] border border-line p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Across the country</p>
              <h3 className="mt-2 text-2xl font-bold">Other Philippine destinations</h3>
              <p className="mt-3 text-body">Tell ROAM where you want to go and receive confirmed travel options without fictional dates or prices.</p>
              <ButtonLink href="/tours#other-philippines" variant="text" className="mt-5">Explore Philippine travel</ButtonLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="visa-heading">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100"><DocumentIcon width={28} height={28} /></span>
            <SectionHeading id="visa-heading" title={visaAssistance.title} intro={visaAssistance.summary} className="mt-5" />
            <ButtonLink href="/services#visa-assistance" className="mt-7">Get visa assistance</ButtonLink>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
            <ul className="space-y-3 text-body">
              {visaAssistance.details.map((detail) => <li key={detail} className="border-l-2 border-brand-300 pl-4">{detail}</li>)}
            </ul>
            {visaAssistance.note && <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">{visaAssistance.note}</p>}
          </div>
        </Container>
      </Section>

      <Section labelledBy="international-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading id="international-heading" title="International Tours" intro="ROAM continues to arrange outbound guided tours and cruises. Published starting rates and schedules remain subject to confirmation." />
            <ButtonLink href="/tours#international-tours" variant="secondary">See international tours</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {internationalTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </Container>
      </Section>

      <Section tone="mist" labelledBy="why-heading">
        <Container>
          <SectionHeading id="why-heading" title="Why Choose ROAM" />
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ Icon, title, body }) => (
              <li key={title} className="border-t-2 border-brand-500 pt-6">
                <Icon width={28} height={28} className="text-brand-600" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{body}</p>
              </li>
            ))}
          </ul>
          <AccreditationPanel className="mt-14 bg-white" />
        </Container>
      </Section>

      <Section tone="brand" labelledBy="purpose-heading">
        <Container>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-aqua-300">ROAM's community initiative</p>
            <h2 id="purpose-heading" className="mt-2 text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold text-white">Roam with Purpose</h2>
            <p className="mt-4 max-w-2xl text-lg text-brand-100">ROAM supports a school community in Matanag, Albay.</p>
          </div>
        </Container>
      </Section>

      <Section labelledBy="visit-heading">
        <Container><LocationBlock /></Container>
      </Section>
    </>
  );
}
