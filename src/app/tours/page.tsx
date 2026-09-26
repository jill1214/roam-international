import type { Metadata } from "next";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import { Container, Section } from "@/components/ui";
import { PageHeader, WhatsAppCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "International Tour Packages",
  description:
    "Current ROAM tour packages: Harbin Snow Town, Avatar Skiing in Zhangjiajie, Disney Adventure cruise with Langkawi, and Osaka, Kyoto & Nara. Starting rates, departure dates and inclusions.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  // Grouping keys (region, category, tags) are already on each tour, ready for filters later.
  return (
    <>
      <PageHeader
        title="Tour Packages"
        intro="Our current international packages. Each one lists the starting rate, departure dates, what's included and what isn't, so you can compare before you message us."
      />
      <Section>
        <Container>
          <p className="text-[0.9375rem] text-muted" aria-live="polite">
            Showing {tours.length} packages. Prices are starting rates per person and are confirmed by ROAM at the time of inquiry.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {tours.map((t) => <TourCard key={t.slug} tour={t} headingLevel="h2" />)}
          </div>
          <div className="mt-14 rounded-[var(--radius-card)] border border-dashed border-brand-200 bg-brand-50/50 p-6 sm:p-8">
            <h2 className="text-xl font-bold">Looking for a different destination or dates?</h2>
            <p className="mt-2 max-w-2xl text-body">
              We also arrange customized tours and private group trips. Tell us where, when and who's coming, and we'll plan around it.
            </p>
          </div>
        </Container>
      </Section>
      <WhatsAppCta />
    </>
  );
}
