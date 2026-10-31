import type { Metadata } from "next";
import { site } from "@/data/site";
import { ButtonLink, Container, Section } from "@/components/ui";
import { AccreditationPanel, PageHeader, Testimonials, WhatsAppCta } from "@/components/sections";

const pendingTeamNames = ["Miggie", "Raul", "Betsy", "Abbey", "Gladys", "Cathy", "Ella"];

export const metadata: Metadata = {
  title: "About ROAM",
  description:
    "ROAM International Travel and Tours is a locally owned, DOT-accredited travel agency in Legazpi City, Albay, established December 2004.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About ROAM International Travel and Tours"
        intro={`A locally owned travel and tour agency from Legazpi City, helping travelers see the world since ${site.established.month} ${site.established.year}.`}
      />

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div className="prose-roam max-w-2xl text-lg text-body">
            <h2 className="mb-5 text-3xl font-bold">Who we are</h2>
            <p>
              ROAM International Travel and Tours helps make travel planning easier with thoughtfully arranged tour
              packages in Bicol, across the Philippines and abroad, with reliable assistance from planning to departure. We also provide visa processing assistance,
              helping travelers understand requirements and prepare the documents they need for their journey.
            </p>
            <p>
              We started in {site.address.city}, {site.address.province} in {site.established.month} {site.established.year},
              and we're still locally owned and based here. We plan trips for travelers from Bicol and across the
              Philippines: families, couples, barkadas, senior travelers, pilgrimage and corporate groups, and people
              taking their first trip abroad.
            </p>
            <h2 className="mb-5 mt-12 text-3xl font-bold">More than a booking</h2>
            <p>
              ROAM goes beyond simply booking your trip. We guide you through the journey, from choosing the right travel
              experience and preparing for your trip to visa processing assistance, so you can travel with greater
              confidence and less stress.
            </p>
            <p>
              In practice, that means you can message or call a real person with your questions, whether it's which
              departure date works best, what's excluded from a package, or what documents to prepare. You'll talk to
              {" "}{site.contacts.map((c) => c.name).join(", ").replace(/, ([^,]*)$/, " and $1")}, a team that visits
              destinations firsthand on familiarization tours.
            </p>
            <ButtonLink href="/contact#inquire" className="mt-8">Talk to us about your trip</ButtonLink>
          </div>

          <aside className="space-y-6">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
              {[
                ["Established", `${site.established.month} ${site.established.year}`],
                ["Ownership", "Locally owned"],
                ["Based in", "Legazpi City, Albay"],
                ["In travel", "More than 20 years"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white p-5">
                  <dt className="text-sm text-muted">{k}</dt>
                  <dd className="mt-1 font-bold text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-[var(--radius-card)] border border-brand-100 bg-brand-50 p-6">
              <h2 className="text-2xl font-bold">Local roots, wider journeys</h2>
              <p className="mt-3 text-body">ROAM remains based in Legazpi City, with an additional Antipolo office, while helping travelers explore the Philippines and destinations abroad.</p>
            </div>
          </aside>
        </Container>
      </Section>

      {process.env.NODE_ENV === "development" && (
        <Section tone="mist" labelledBy="team-draft-heading">
          <Container>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Development placeholder — not included in production</p>
            <h2 id="team-draft-heading" className="mt-2 text-3xl font-bold">Team roster awaiting confirmation</h2>
            <p className="mt-3 max-w-2xl text-body">Names and original portraits must be approved before public team profiles are added. No roles or biographies have been inferred.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {pendingTeamNames.map((name) => <li key={name} className="rounded-lg border border-line bg-white px-4 py-2 font-semibold text-ink">{name}</li>)}
            </ul>
          </Container>
        </Section>
      )}

      <section aria-labelledby="dot-heading" className="pb-16 sm:pb-24">
        <Container>
          <AccreditationPanel className="bg-mist" />
        </Container>
      </section>

      <Testimonials tone="mist" />
      <WhatsAppCta />
    </>
  );
}
