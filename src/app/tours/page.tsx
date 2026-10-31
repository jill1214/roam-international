import type { Metadata } from "next";
import Link from "next/link";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { ButtonLink, Container, Section } from "@/components/ui";
import { PageHeader, WhatsAppCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Philippine, Bicol & International Tour Packages",
  description:
    "Explore Bicol and Philippine travel options, international guided tours and cruises with ROAM International Travel and Tours. Package details and availability are confirmed on inquiry.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  const internationalTours = tours.filter((tour) => tour.market === "International" && tour.category === "Guided tour");
  const cruises = tours.filter((tour) => tour.category === "Cruise");

  return (
    <>
      <PageHeader
        title="Tours in the Philippines and Beyond"
        intro="Start with Bicol and the Philippines, or explore ROAM's current international tours and cruises. Confirmed package details are shared when you inquire."
      >
        <nav aria-label="Tour categories" className="mt-8 flex flex-wrap gap-2">
          {[
            ["#bicol-tours", "Bicol Tours"],
            ["#other-philippines", "Other Philippine Destinations"],
            ["#international-tours", "International Tours"],
            ["#cruises", "Cruises"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
              {label}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <Section id="philippines" className="scroll-mt-24" labelledBy="philippines-heading">
        <Container>
          <h2 id="philippines-heading" className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold">Explore the Philippines</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">ROAM is preparing confirmed Philippine package details. In the meantime, tell us your dates, group and interests for a tailored proposal without fictional schedules or rates.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article id="bicol-tours" className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-brand-50 p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Philippines · Bicol</p>
              <h3 className="mt-2 text-2xl font-bold">Discover Bicol</h3>
              <p className="mt-3 text-body">Ask ROAM about experiences in Albay and nearby Bicol destinations. Package schedules, rates and inclusions will be provided only after confirmation.</p>
              <ButtonLink href="/contact#inquire" className="mt-6">Plan a Bicol trip</ButtonLink>
            </article>
            <article id="other-philippines" className="scroll-mt-24 rounded-[var(--radius-card)] border border-line bg-mist p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Philippines · Nationwide</p>
              <h3 className="mt-2 text-2xl font-bold">Other Philippine Destinations</h3>
              <p className="mt-3 text-body">Planning travel elsewhere in the Philippines? Share your destination, dates and group size, and ROAM will confirm the available options.</p>
              <ButtonLink href="/contact#inquire" variant="secondary" className="mt-6">Ask about a destination</ButtonLink>
            </article>
          </div>
        </Container>
      </Section>

      <Section id="international-tours" tone="mist" className="scroll-mt-24" labelledBy="international-heading">
        <Container>
          <h2 id="international-heading" className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold">International Tour Packages</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Current guided packages with published starting rates and details. Check for availability before making travel plans.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {internationalTours.map((tour) => <TourCard key={tour.slug} tour={tour} headingLevel="h2" />)}
          </div>
        </Container>
      </Section>

      <Section id="cruises" className="scroll-mt-24" labelledBy="cruises-heading">
        <Container>
          <h2 id="cruises-heading" className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold">Cruises</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">Cruise fares and sailing availability can change. ROAM will confirm the current rate and inclusions when you inquire.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cruises.map((tour) => <TourCard key={tour.slug} tour={tour} headingLevel="h2" />)}
          </div>
        </Container>
      </Section>

      <WhatsAppCta title="Looking for a different destination or dates?" body="Tell us where, when and who's coming, and ROAM will confirm suitable options for your trip." />
    </>
  );
}
