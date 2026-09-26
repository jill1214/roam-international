import type { Metadata } from "next";
import { faqs } from "@/data/faqs";
import { faqJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { Container, Section } from "@/components/ui";
import { PageHeader, WhatsAppCta } from "@/components/sections";
import { ChevronDownIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Travel FAQs",
  description:
    "Answers about inquiring, package rates, visa assistance, customized and group tours, and contacting ROAM International Travel and Tours.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader title="Travel FAQs" intro="Quick answers to what travelers ask us most. Don't see your question? Message us on WhatsApp." />
      <Section>
        <Container className="max-w-3xl">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold text-ink marker:hidden hover:text-brand-700 [&::-webkit-details-marker]:hidden">
                  <h2 className="text-lg font-semibold tracking-normal">{f.q}</h2>
                  <ChevronDownIcon className="shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="max-w-[65ch] pb-6 text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>
      <WhatsAppCta />
    </>
  );
}
