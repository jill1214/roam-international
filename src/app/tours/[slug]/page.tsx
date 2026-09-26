import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatUsd, getRelatedTours, getTour, tours } from "@/data/tours";
import { site } from "@/data/site";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { tourJsonLd } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { InquiryForm } from "@/components/InquiryForm";
import { TourCard } from "@/components/TourCard";
import { ButtonLink, Container, ExternalButton, Section, cx } from "@/components/ui";
import { CalendarIcon, CheckIcon, ClockIcon, InfoIcon, MinusIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/Icons";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  const title = `${tour.name} ${tour.durationShort} Tour Package`;
  const description = `${tour.duration}. ${tour.priceLabel} ${formatUsd(tour.priceFromUsd)} ${tour.priceBasis}. ${tour.tagline} Inquire with ROAM International Travel and Tours.`;
  return {
    title,
    description,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: { title, description, images: [{ url: tour.cover.src, alt: tour.cover.alt }] },
  };
}

const mealNames = { B: "Breakfast", L: "Lunch", D: "Dinner" } as const;

export default async function TourPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const related = getRelatedTours(tour.slug);
  const bookable = tour.departures?.filter((d) => !d.soldOut) ?? [];

  return (
    <>
      <JsonLd data={tourJsonLd(tour)} />

      {/* Hero */}
      <section aria-labelledby="tour-heading" className="border-b border-line bg-mist">
        <Container className="grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <ol className="flex flex-wrap gap-1.5">
                <li><Link href="/" className="hover:text-brand-700">Home</Link> /</li>
                <li><Link href="/tours" className="hover:text-brand-700">Tours</Link> /</li>
                <li aria-current="page" className="text-ink">{tour.name}</li>
              </ol>
            </nav>
            <p className="mt-6 flex items-center gap-1.5 font-medium text-brand-700">
              <PinIcon width={18} height={18} /> {tour.destination}, {tour.country}
            </p>
            <h1 id="tour-heading" className="mt-2 text-[clamp(2.4rem,5.5vw,3.75rem)] font-extrabold tracking-[-0.03em]">{tour.name}</h1>
            <p className="mt-4 max-w-xl text-lg text-body">{tour.summary}</p>

            <dl className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
              <div className="bg-white p-4">
                <dt className="flex items-center gap-1.5 text-sm text-muted"><ClockIcon width={16} height={16} /> Duration</dt>
                <dd className="mt-1 font-bold text-ink">{tour.duration}</dd>
              </div>
              <div className="bg-white p-4">
                <dt className="flex items-center gap-1.5 text-sm text-muted"><CalendarIcon width={16} height={16} /> Travel period</dt>
                <dd className="mt-1 font-bold text-ink">{tour.travelPeriod}</dd>
              </div>
              <div className="col-span-2 bg-white p-4 sm:col-span-1">
                <dt className="text-sm text-muted">{tour.priceLabel}</dt>
                <dd className="mt-0.5">
                  <span className="text-2xl font-extrabold tracking-tight text-ink">{formatUsd(tour.priceFromUsd)}</span>
                  <span className="block text-xs text-muted">{tour.priceBasis}</span>
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#inquire" size="lg">Inquire About This Tour</ButtonLink>
              <ExternalButton href={waLink(quickInquiryText(tour.name))} variant="whatsapp" size="lg">
                <WhatsAppIcon /> WhatsApp Us
              </ExternalButton>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-brand-50 shadow-[0_30px_60px_-36px_rgba(14,58,95,0.55)]">
              <Image src={tour.cover.src} alt={tour.cover.alt} fill priority sizes="(min-width:1024px) 40rem, 100vw" className={`object-cover ${tour.cover.position ?? "object-top"}`} />
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section className="pb-28 sm:pb-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_22rem] lg:gap-16">
          <div className="min-w-0 space-y-16">
            <section aria-labelledby="highlights-heading">
              <h2 id="highlights-heading" className="text-3xl font-bold">Highlights</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5"><CheckIcon className="mt-1 shrink-0 text-aqua-600" />{h}</li>
                ))}
              </ul>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Quick facts">
                {tour.quickFacts.map((f) => (
                  <li key={f} className={cx("rounded-md border px-3 py-1.5 text-sm font-medium",
                    /mandatory shopping/i.test(f) ? "border-amber-300 bg-amber-50 text-amber-900" : "border-line bg-mist text-ink")}>{f}</li>
                ))}
              </ul>
            </section>

            {tour.fares && (
              <section aria-labelledby="fares-heading">
                <h2 id="fares-heading" className="text-3xl font-bold">Cruise fares</h2>
                <p className="mt-2 text-muted">Starting fares per person, based on twin sharing, including port taxes and fees.</p>
                <div className="mt-6 overflow-hidden rounded-xl border border-line">
                  <table className="w-full text-left">
                    <caption className="sr-only">Stateroom fares for {tour.name}</caption>
                    <thead className="bg-mist text-sm text-muted">
                      <tr><th scope="col" className="px-5 py-3 font-semibold">Stateroom</th><th scope="col" className="px-5 py-3 text-right font-semibold">From, per person</th></tr>
                    </thead>
                    <tbody>
                      {tour.fares.map((f) => (
                        <tr key={f.label} className="border-t border-line">
                          <th scope="row" className="px-5 py-4 font-semibold text-ink">{f.label}</th>
                          <td className="px-5 py-4 text-right text-lg font-bold text-ink">{formatUsd(f.priceUsd)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {tour.departures && (
              <section aria-labelledby="departures-heading">
                <h2 id="departures-heading" className="text-3xl font-bold">{tour.category === "Cruise" ? "Sailing dates" : "Departure dates"}</h2>
                <p className="mt-2 text-muted">
                  {tour.departuresNote ??
                    `Surcharges are added to the starting rate of ${formatUsd(tour.priceFromUsd)}. ${bookable.length} departures currently listed.`}
                </p>
                {tour.category === "Cruise" ? (
                  <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {tour.departures.map((d) => (
                      <li key={d.start} className="rounded-lg border border-line px-3 py-2.5 text-[0.9375rem] font-medium text-ink">
                        <time dateTime={d.start}>{d.label}</time>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-line">
                    <table className="w-full min-w-[26rem] text-left">
                      <caption className="sr-only">Departure dates and surcharges for {tour.name}</caption>
                      <thead className="bg-mist text-sm text-muted">
                        <tr>
                          <th scope="col" className="px-5 py-3 font-semibold">Travel dates</th>
                          <th scope="col" className="px-5 py-3 font-semibold">Surcharge</th>
                          <th scope="col" className="px-5 py-3 text-right font-semibold">Starting total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tour.departures.map((d) => (
                          <tr key={d.start} className={cx("border-t border-line", d.soldOut && "text-muted")}>
                            <th scope="row" className={cx("px-5 py-3.5 font-semibold", d.soldOut ? "text-muted line-through" : "text-ink")}>
                              <time dateTime={d.start}>{d.label}</time>
                            </th>
                            <td className="px-5 py-3.5">
                              {d.soldOut ? <span className="rounded bg-mist px-2 py-0.5 text-sm font-semibold no-underline">Sold out</span>
                                : d.surchargeUsd ? `+ ${formatUsd(d.surchargeUsd)}` : "None"}
                            </td>
                            <td className="px-5 py-3.5 text-right font-semibold text-ink">
                              {d.soldOut ? "—" : formatUsd(tour.priceFromUsd + (d.surchargeUsd ?? 0))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {tour.itinerary && (
              <section aria-labelledby="itinerary-heading">
                <h2 id="itinerary-heading" className="text-3xl font-bold">Day by day</h2>
                <ol className="mt-8 border-l-2 border-brand-100">
                  {tour.itinerary.map((d) => (
                    <li key={d.day} className="relative pb-9 pl-8 last:pb-0">
                      <span className="absolute -left-[0.8rem] top-0 inline-flex size-6 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white" aria-hidden="true">{d.day}</span>
                      <h3 className="text-lg font-bold"><span className="sr-only">Day {d.day}: </span>{d.title}</h3>
                      <ul className="mt-2 space-y-1 text-[0.9375rem] text-body">
                        {d.activities.map((a) => <li key={a}>{a}</li>)}
                      </ul>
                      {d.notes && (
                        <ul className="mt-3 space-y-1">
                          {d.notes.map((n) => (
                            <li key={n} className={cx("inline-block mr-2 rounded-md px-2.5 py-1 text-sm",
                              n.startsWith("Mandatory") ? "bg-amber-50 text-amber-900 ring-1 ring-amber-200" : "bg-brand-50 text-brand-800")}>{n}</li>
                          ))}
                        </ul>
                      )}
                      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                        <span>Meals: {d.meals?.length ? d.meals.map((m) => mealNames[m]).join(", ") : "None included"}</span>
                        {d.stay && <span>Stay: {d.stay}</span>}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section aria-labelledby="inclusions-heading" className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 id="inclusions-heading" className="text-2xl font-bold">What&apos;s included</h2>
                <ul className="mt-5 space-y-2.5">
                  {tour.inclusions.map((i) => <li key={i} className="flex gap-2.5"><CheckIcon className="mt-1 shrink-0 text-aqua-600" />{i}</li>)}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Not included</h2>
                <ul className="mt-5 space-y-2.5">
                  {tour.exclusions.map((i) => <li key={i} className="flex gap-2.5"><MinusIcon className="mt-1 shrink-0 text-muted" />{i}</li>)}
                </ul>
              </div>
            </section>

            {tour.optionalTours && (
              <section aria-labelledby="optional-heading">
                <h2 id="optional-heading" className="text-2xl font-bold">Optional tours</h2>
                <ul className="mt-5 divide-y divide-line rounded-xl border border-line">
                  {tour.optionalTours.map((o) => (
                    <li key={o.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                      <span>{o.label}{o.note && <span className="block text-sm text-muted">{o.note}</span>}</span>
                      <span className="shrink-0 font-semibold text-ink">+ {formatUsd(o.priceUsd)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="notes-heading" className="rounded-xl border border-line bg-mist p-6 sm:p-7">
              <h2 id="notes-heading" className="flex items-center gap-2 text-xl font-bold"><InfoIcon className="text-brand-600" /> Important notes</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.9375rem] text-body marker:text-brand-400">
                {tour.importantNotes.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </section>

            <section aria-labelledby="flyer-heading">
              <h2 id="flyer-heading" className="text-2xl font-bold">Package flyer</h2>
              <p className="mt-2 text-muted">The original flyer for this package, including flight details.</p>
              <a href={tour.flyer.src} target="_blank" rel="noopener noreferrer" className="mt-5 block max-w-md overflow-hidden rounded-xl border border-line hover:border-brand-300">
                <Image src={tour.flyer.src} alt={tour.flyer.alt} width={tour.flyer.width} height={tour.flyer.height} sizes="28rem" className="h-auto w-full" />
                <span className="sr-only"> (opens full size in a new tab)</span>
              </a>
            </section>

            <section id="inquire" aria-labelledby="inquire-heading" className="scroll-mt-24">
              <h2 id="inquire-heading" className="text-3xl font-bold">Inquire About This Tour</h2>
              <p className="mt-2 text-muted">We&apos;ll reply on WhatsApp with availability and the confirmed rate for your dates.</p>
              <InquiryForm className="mt-6" tourNames={tours.map((t) => t.name)} defaultTour={tour.name} />
            </section>
          </div>

          {/* Sticky summary (desktop) */}
          <aside aria-label="Tour summary" className="hidden lg:block">
            <div className="sticky top-24 rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[0_24px_48px_-32px_rgba(14,58,95,0.35)]">
              <p className="text-sm text-muted">{tour.priceLabel}</p>
              <p className="text-3xl font-extrabold tracking-tight text-ink">{formatUsd(tour.priceFromUsd)}</p>
              <p className="text-sm text-muted">{tour.priceBasis}</p>
              <p className="mt-4 border-t border-line pt-4 text-[0.9375rem] font-semibold text-ink">{tour.duration}</p>
              <p className="text-[0.9375rem] text-muted">{tour.travelPeriod}</p>
              <div className="mt-6 space-y-2.5">
                <ButtonLink href="#inquire" className="w-full">Inquire About This Tour</ButtonLink>
                <ExternalButton href={waLink(quickInquiryText(tour.name))} variant="whatsapp" className="w-full"><WhatsAppIcon /> WhatsApp {site.whatsapp.name}</ExternalButton>
                <ExternalButton href={`tel:${site.whatsapp.e164}`} variant="secondary" className="w-full"><PhoneIcon /> {site.whatsapp.display}</ExternalButton>
              </div>
              <p className="mt-4 text-xs text-muted">Rates and availability are confirmed by ROAM when you inquire.</p>
            </div>
          </aside>
        </Container>
      </Section>

      {/* Related */}
      <Section tone="mist" labelledBy="related-heading">
        <Container>
          <h2 id="related-heading" className="text-3xl font-bold">Other tours you might like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => <TourCard key={t.slug} tour={t} compact />)}
          </div>
        </Container>
      </Section>

      {/* Sticky inquiry bar (mobile & tablet) */}
      <div id="tour-sticky-bar" className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <p className="mr-auto leading-tight">
            <span className="block text-xs text-muted">{tour.priceLabel}</span>
            <span className="font-bold text-ink">{formatUsd(tour.priceFromUsd)}</span>
          </p>
          <ExternalButton href={waLink(quickInquiryText(tour.name))} variant="whatsapp" size="md" aria-label={`WhatsApp about ${tour.name}`}>
            <WhatsAppIcon /> <span className="hidden min-[400px]:inline">WhatsApp</span>
          </ExternalButton>
          <ButtonLink href="#inquire" size="md">Inquire</ButtonLink>
        </div>
      </div>
    </>
  );
}
