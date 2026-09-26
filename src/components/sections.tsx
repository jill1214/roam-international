import Image from "next/image";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { Container, ExternalButton, Section, SectionHeading, cx } from "./ui";
import { FacebookIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

/** Interior page header. Quiet, left-aligned, pale band. */
export function PageHeader({ title, intro, children }: { title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-mist">
      <RingMotif className="absolute -right-24 -top-28 hidden size-[26rem] text-brand-200 md:block" />
      <Container className="relative py-14 sm:py-20">
        <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">{intro}</p>}
        {children}
      </Container>
    </div>
  );
}

/** Double ring taken from the logo mark — the site's single recurring motif. */
export function RingMotif({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function WhatsAppCta({
  title = "Ready to Start Planning?",
  body = "Tell us where you'd like to go and we'll help you take the next step.",
}: { title?: string; body?: string }) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-brand-800 text-white">
      <RingMotif className="absolute -bottom-40 -right-20 size-[34rem] text-brand-600/60" />
      <RingMotif className="absolute -left-32 -top-44 size-[22rem] text-aqua-400/25" />
      <Container className="relative grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 id="cta-heading" className="text-[clamp(2rem,4.4vw,3rem)] font-bold text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-brand-100">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
          <ExternalButton href={waLink(quickInquiryText())} variant="whatsapp" size="lg">
            <WhatsAppIcon /> Start a WhatsApp Inquiry
          </ExternalButton>
          <ExternalButton href={`tel:${site.whatsapp.e164}`} variant="ghostLight" size="lg">
            <PhoneIcon /> Call {site.whatsapp.display}
          </ExternalButton>
        </div>
      </Container>
    </section>
  );
}

export function Testimonials({ tone = "white" as "white" | "mist" }) {
  return (
    <Section tone={tone} labelledBy="stories-heading">
      <Container>
        <SectionHeading id="stories-heading" title="Stories From Our Travelers" intro="Recommendations shared by travelers who joined ROAM tours." />
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-7">
                <svg viewBox="0 0 32 24" className="h-6 w-8 text-aqua-400" aria-hidden="true" fill="currentColor">
                  <path d="M0 24V13.7C0 5.9 4.4 1.1 12.1 0l1.2 3.3C8.9 4.6 6.8 7.2 6.6 11H12v13H0Zm18.7 0V13.7C18.7 5.9 23.1 1.1 30.8 0L32 3.3c-4.4 1.3-6.5 3.9-6.7 7.7h5.4v13h-12Z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="text-sm text-muted">{t.destination} trip, {t.date}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function AccreditationPanel({ className }: { className?: string }) {
  return (
    <div className={cx("grid items-center gap-8 rounded-[var(--radius-card)] border border-line p-6 sm:grid-cols-[auto_1fr] sm:p-10", className)}>
      <Image
        src="/images/brand/dot-quality-seal.png"
        alt="Department of Tourism Quality Seal"
        width={360}
        height={344}
        className="h-28 w-auto sm:h-36"
      />
      <div>
        <h2 id="dot-heading" className="text-2xl font-bold sm:text-3xl">{site.accreditation.label}</h2>
        <dl className="mt-5 grid gap-x-10 gap-y-4 text-[0.9375rem] sm:grid-cols-3">
          <div>
            <dt className="text-sm text-muted">Accreditation No.</dt>
            <dd className="font-semibold text-ink">{site.accreditation.number}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Valid until</dt>
            <dd className="font-semibold text-ink">{site.accreditation.validUntil}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Registered office</dt>
            <dd className="font-semibold text-ink">
              {site.address.street}, {site.address.city}, {site.address.province}, {site.address.region}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function MapEmbed({ className }: { className?: string }) {
  return (
    <div className={cx("overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist", className)}>
      <iframe
        title={`Map showing ${site.name} at ${site.address.street}, ${site.address.city}`}
        src={site.maps.embedUrl}
        className="h-full min-h-[20rem] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export function ContactList({ showEmail = true }: { showEmail?: boolean }) {
  return (
    <ul className="space-y-4">
      {site.contacts.map((c) => (
        <li key={c.name} className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <p className="font-semibold text-ink">
              {c.name}
              {c.primary && <span className="ml-2 rounded bg-brand-50 px-1.5 py-0.5 align-middle text-xs font-semibold text-brand-700">WhatsApp</span>}
            </p>
            <a href={`tel:${c.tel}`} className="text-body hover:text-brand-700">{c.display}</a>
          </div>
          <div className="flex gap-2">
            {c.primary && (
              <a href={waLink(quickInquiryText())} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-lg bg-wa text-white hover:bg-wa-dark">
                <WhatsAppIcon /><span className="sr-only">WhatsApp {c.name}</span>
              </a>
            )}
            <a href={`tel:${c.tel}`} className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-brand-700 hover:border-brand-300">
              <PhoneIcon /><span className="sr-only">Call {c.name}</span>
            </a>
          </div>
        </li>
      ))}
      {showEmail && (
        <li className="flex items-center gap-3">
          <MailIcon className="text-brand-600" />
          <a href={`mailto:${site.email}`} className="break-all font-medium text-ink hover:text-brand-700">{site.email}</a>
        </li>
      )}
    </ul>
  );
}

export function LocationBlock({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <H id="visit-heading" className="text-[clamp(1.85rem,3.6vw,2.5rem)] font-bold">Visit or Message Us</H>
        <address className="mt-5 flex gap-3 not-italic text-lg text-ink">
          <PinIcon className="mt-1.5 shrink-0 text-brand-600" />
          <span>
            {site.name}<br />
            {site.address.street}<br />
            {site.address.city}, {site.address.province}<br />
            {site.address.country}
          </span>
        </address>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <ExternalButton href={site.maps.directionsUrl} variant="primary"><PinIcon /> Get Directions</ExternalButton>
          <ExternalButton href={`tel:${site.whatsapp.e164}`} variant="secondary"><PhoneIcon /> Call</ExternalButton>
          <ExternalButton href={waLink(quickInquiryText())} variant="whatsapp"><WhatsAppIcon /> WhatsApp</ExternalButton>
          {site.social.facebook && (
            <ExternalButton href={site.social.facebook} variant="secondary"><FacebookIcon /> Message on Facebook</ExternalButton>
          )}
        </div>
        <div className="mt-8"><ContactList /></div>
      </div>
      <MapEmbed className="min-h-[22rem] lg:min-h-full" />
    </div>
  );
}
