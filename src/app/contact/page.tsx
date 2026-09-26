import type { Metadata } from "next";
import { tours } from "@/data/tours";
import { site } from "@/data/site";
import { InquiryForm } from "@/components/InquiryForm";
import { Container, Section } from "@/components/ui";
import { LocationBlock, PageHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact ROAM",
  description: `Inquire on WhatsApp, call or visit ROAM International Travel and Tours at ${site.address.street}, ${site.address.city}, ${site.address.province}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact ROAM"
        intro={`Send an inquiry, call, or visit our office in ${site.address.city}. The fastest way to reach us is WhatsApp at ${site.whatsapp.display}.`}
      />
      <Section id="inquire" className="scroll-mt-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <InquiryForm heading="Send an inquiry" tourNames={tours.map((t) => t.name)} />
          <div className="lg:pt-2">
            <h2 className="text-2xl font-bold">What happens next</h2>
            <ol className="mt-5 space-y-5">
              {[
                ["WhatsApp opens with your message", "Everything you entered is written out for you. Review it and press Send."],
                [`${site.whatsapp.name} replies`, "We confirm availability, the rate for your dates and what's included."],
                ["We prepare your trip together", "From documents and visa requirements to pre-departure reminders."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white" aria-hidden="true">{i + 1}</span>
                  <span><span className="block font-semibold text-ink">{t}</span><span className="text-[0.9375rem] text-muted">{d}</span></span>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-lg bg-mist p-4 text-[0.9375rem] text-body">
              Prefer email? Write to <a href={`mailto:${site.email}`} className="font-semibold text-brand-700 underline underline-offset-4">{site.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
      <Section tone="mist" labelledBy="visit-heading">
        <Container><LocationBlock /></Container>
      </Section>
    </>
  );
}
