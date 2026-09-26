import type { Metadata } from "next";
import Image from "next/image";
import { inspiration } from "@/data/inspiration";
import { Container, Section, cx } from "@/components/ui";
import { PageHeader, RingMotif, WhatsAppCta } from "@/components/sections";
import { PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Travel Inspiration",
  description:
    "Destination notes, food finds, travel tips and visa preparation guidance from the ROAM International Travel and Tours team, including our 2026 South Korea familiarization tour.",
  alternates: { canonical: "/travel-inspiration" },
};

export default function InspirationPage() {
  const [feature, ...rest] = inspiration;
  return (
    <>
      <PageHeader
        title="Travel Inspiration"
        intro="Notes from the places we've been and the questions travelers ask us most. Full stories are on the way."
      />
      <Section>
        <Container>
          {/* Feature */}
          <article className="grid overflow-hidden rounded-[var(--radius-card)] border border-line lg:grid-cols-[1.4fr_1fr]">
            {feature.image && (
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]">
                <Image src={feature.image.src} alt={feature.image.alt} fill priority sizes="(min-width:1024px) 45rem, 100vw" className="object-cover" />
              </div>
            )}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm font-semibold text-brand-700">{feature.category}</p>
              <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.25rem)] font-bold">{feature.title}</h2>
              <p className="mt-4 text-lg text-body">{feature.excerpt}</p>
              {feature.location && (
                <p className="mt-5 flex items-center gap-1.5 text-sm text-muted"><PinIcon width={16} height={16} /> {feature.location}</p>
              )}
              {feature.status === "coming-soon" && <p className="mt-4 text-sm font-medium text-muted">Full story coming soon</p>}
            </div>
          </article>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((e) => (
              <li key={e.slug}>
                <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
                  <div className={cx("relative aspect-[4/3] overflow-hidden", !e.image && "bg-brand-50")}>
                    {e.image ? (
                      <Image src={e.image.src} alt={e.image.alt} fill sizes="(min-width:1024px) 20rem, (min-width:640px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      // Placeholder until ROAM's own photo is added (see src/data/inspiration.ts)
                      <RingMotif className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 text-brand-200" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-sm font-semibold text-brand-700">{e.category}</p>
                    <h2 className="mt-1.5 text-lg font-bold">{e.title}</h2>
                    <p className="mt-2 flex-1 text-[0.9375rem] text-muted">{e.excerpt}</p>
                    {e.status === "coming-soon" && <p className="mt-4 text-sm font-medium text-muted">Coming soon</p>}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <WhatsAppCta title="Have a destination in mind?" body="Ask us what it's really like there, and we'll help you plan the trip." />
    </>
  );
}
