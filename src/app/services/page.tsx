import type { Metadata } from "next";
import Link from "next/link";
import { services, otherServices } from "@/data/services";
import { waLink } from "@/lib/whatsapp";
import { site } from "@/data/site";
import { Container, ExternalButton, Section } from "@/components/ui";
import { PageHeader, WhatsAppCta } from "@/components/sections";
import { CheckIcon, DocumentIcon, GlobeIcon, InfoIcon, PeopleIcon, RouteIcon, WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Travel Services: Tours, Visa Assistance, Custom & Group Travel",
  description:
    "International tour packages, visa assistance, customized tours and group travel from ROAM International Travel and Tours in Legazpi City, Albay.",
  alternates: { canonical: "/services" },
};

const icons = { "international-tours": GlobeIcon, "visa-assistance": DocumentIcon, "customized-tours": RouteIcon, "group-travel": PeopleIcon } as const;

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Travel Made Easier"
        intro="Four ways we help, explained plainly. Whichever you need, you deal with real people who guide you from the first question to departure day."
      >
        <nav aria-label="Services on this page" className="mt-8 flex flex-wrap gap-2">
          {services.map((s) => (
            <Link key={s.slug} href={`#${s.slug}`} className="rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink hover:border-brand-300 hover:text-brand-700">
              {s.title}
            </Link>
          ))}
        </nav>
      </PageHeader>

      <Section>
        <Container className="space-y-6">
          {services.map((s) => {
            const Icon = icons[s.slug as keyof typeof icons];
            const msg = `Hi ${site.name},

I'd like to inquire about a trip.

Message:
I'd like to ask about ${s.title.toLowerCase()}.`;
            return (
              <article key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className="scroll-mt-24 grid gap-8 rounded-[var(--radius-card)] border border-line p-6 sm:p-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
                <div>
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Icon width={28} height={28} />
                  </span>
                  <h2 id={`${s.slug}-title`} className="mt-5 text-3xl font-bold">{s.title}</h2>
                  <p className="mt-3 text-lg text-body">{s.summary}</p>
                  <p className="mt-4 text-[0.9375rem] text-muted"><strong className="font-semibold text-ink">Good for:</strong> {s.forWho}</p>
                </div>
                <div className="flex flex-col">
                  <ul className="space-y-3.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3"><CheckIcon className="mt-1 shrink-0 text-aqua-600" />{d}</li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className="mt-6 flex gap-2.5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-[0.9375rem] text-amber-950">
                      <InfoIcon className="mt-0.5 shrink-0" /> {s.note}
                    </p>
                  )}
                  <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
                    <ExternalButton href={waLink(msg)} variant="whatsapp"><WhatsAppIcon /> {s.cta}</ExternalButton>
                    {s.slug === "international-tours" && (
                      <Link href="/tours" className="inline-flex min-h-11 items-center rounded-lg border border-line px-5 font-semibold text-ink hover:border-brand-300">See current tours</Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}

          <div className="rounded-[var(--radius-card)] bg-mist p-6 sm:p-8">
            <h2 className="text-xl font-bold">Also available</h2>
            <p className="mt-2 text-body">
              {otherServices.join(", ")}. Ask us on WhatsApp or call {site.whatsapp.display}.
            </p>
          </div>
        </Container>
      </Section>
      <WhatsAppCta />
    </>
  );
}
