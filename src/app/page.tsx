import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { tours } from "@/data/tours";
import { services } from "@/data/services";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { TourCard } from "@/components/TourCard";
import {
  ButtonLink,
  Container,
  ExternalButton,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  AccreditationPanel,
  LocationBlock,
  RingMotif,
  Testimonials,
  WhatsAppCta,
} from "@/components/sections";
import {
  CompassIcon,
  DocumentIcon,
  GlobeIcon,
  PeopleIcon,
  RouteIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const serviceIcons = {
  "international-tours": GlobeIcon,
  "visa-assistance": DocumentIcon,
  "customized-tours": RouteIcon,
  "group-travel": PeopleIcon,
} as const;

export default function HomePage() {
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
      body: "Real people guide you before your trip and throughout your preparation. Message, call or visit us.",
    },
    {
      Icon: RouteIcon,
      title: "From Planning to Departure",
      body: "Help with choosing a tour, preparing for the trip, visa requirements and pre-departure questions.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-white"
      >
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-mist lg:h-40"
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-20">
          <div className="max-w-xl">
            <h1
              id="hero-heading"
              className="text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em]"
            >
              Your Gateway to ROAM the World
            </h1>
            <p className="mt-6 text-lg text-body sm:text-xl">
              Thoughtfully planned journeys, trusted travel assistance, and
              personal guidance from planning to departure.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tours" size="lg">
                View Tour Packages
              </ButtonLink>
              <ExternalButton
                href={waLink(quickInquiryText())}
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon /> Inquire on WhatsApp
              </ExternalButton>
            </div>
            <p className="mt-7 flex items-center gap-2.5 text-[0.9375rem] font-medium text-muted">
              <ShieldIcon width={20} height={20} className="text-brand-600" />
              Serving travelers since {site.established.year} • DOT Accredited
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]">
            <RingMotif className="animate-ring-in-late absolute -inset-[7%] text-aqua-400/70" />
            <RingMotif className="animate-ring-in absolute -inset-[3%] text-brand-500" />
            <div className="relative aspect-square overflow-hidden rounded-full bg-brand-50 shadow-[0_40px_80px_-40px_rgba(14,58,95,0.55)]">
              <Image
                src="/images/stories/roam-posts-image-busan3.jpg"
                alt="A cable-stayed bridge spanning Busan's harbor, with the city and mountains behind it under a cloudy sky, in South Korea"
                fill
                priority
                sizes="(min-width: 1024px) 34rem, 90vw"
                className="object-cover"
              />
            </div>
            <p className="absolute -bottom-3 left-1/2 w-max max-w-[90%] -translate-x-1/2 rounded-lg border border-line bg-white px-4 py-2.5 text-sm shadow-lg sm:bottom-6 sm:left-0 sm:translate-x-0">
              <span className="font-semibold text-ink">Busan, South Korea</span>
              <span className="text-muted"> with ROAM, 2026</span>
            </p>
          </div>
        </Container>
      </section>

      {/* Featured tours */}
      <Section tone="mist" labelledBy="tours-heading" className="pt-4 sm:pt-6">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              id="tours-heading"
              title="Where Will You ROAM Next?"
              intro="Current international packages. Starting rates are per person and subject to confirmation."
            />
            <ButtonLink href="/tours" variant="secondary">
              See all tours
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {tours.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Why ROAM */}
      <Section labelledBy="why-heading">
        <Container>
          <SectionHeading id="why-heading" title="Why Travel With ROAM" />
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ Icon, title, body }) => (
              <li key={title} className="border-t-2 border-brand-500 pt-6">
                <Icon width={28} height={28} className="text-brand-600" />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-[0.9375rem] text-muted">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Services */}
      <Section tone="mist" labelledBy="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            title="Travel Made Easier"
            intro="Whether you pick a ready-made package or need something built around your group, we handle the arrangements with you."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug as keyof typeof serviceIcons];
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="group flex h-full gap-5 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-colors hover:border-brand-300 sm:p-7"
                  >
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Icon width={24} height={24} />
                    </span>
                    <span>
                      <span className="block text-lg font-bold text-ink group-hover:text-brand-700">
                        {s.title}
                      </span>
                      <span className="mt-1.5 block text-[0.9375rem] text-muted">
                        {s.summary}
                      </span>
                      {s.note && (
                        <span className="mt-3 block text-sm text-body">
                          {s.note}
                        </span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Real travel */}
      <Section labelledBy="real-heading">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHeading
              id="real-heading"
              title="Travel Experiences, Not Just Itineraries"
            />
            <p className="mt-5 text-lg text-body">
              We recommend places we know. In September 2026, the ROAM team
              joined the Philippine Travel Agent South Korea Familiarization
              Tour across Gyeonggi, Ulsan and Busan, walking the same streets
              and beaches our travelers will.
            </p>
            <p className="mt-4 text-body">
              That firsthand knowledge is what we bring to every conversation,
              from which season to go to what to pack.
            </p>
            <ButtonLink
              href="/travel-inspiration"
              variant="text"
              className="mt-6"
            >
              Read travel inspiration
            </ButtonLink>
          </div>
          <div className="grid grid-cols-6 gap-4">
            <figure className="col-span-6 sm:col-span-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
                <Image
                  src="/images/stories/south-korea-famtour-2026.jpg"
                  alt="ROAM with fellow Philippine travel agents holding the 2026 South Korea Famtour banner at a Korean harbor"
                  fill
                  sizes="(min-width:1024px) 36rem, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted">
                South Korea Famtour, September 2026
              </figcaption>
            </figure>
            <figure className="col-span-6 sm:col-span-2 sm:mt-24">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] sm:aspect-[3/4]">
                <Image
                  src="/images/stories/busan-haeundae-group.jpg"
                  alt="ROAM travelers on a Busan beach with high-rise towers behind them"
                  fill
                  sizes="(min-width:1024px) 18rem, 100vw"
                  className="object-cover object-[30%_center]"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted">
                Busan coastline
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>

      {/* About preview */}
      <Section tone="mist" labelledBy="about-heading">
        <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="about-heading"
              title="Travel With People Who Guide You"
            />
            <div className="prose-roam mt-6 max-w-2xl text-lg text-body">
              <p>
                ROAM International Travel and Tours helps make travel planning
                easier with thoughtfully arranged tour packages and reliable
                assistance from planning to departure.
              </p>
              <p>
                ROAM goes beyond simply booking your trip. We guide you through
                the journey, from choosing the right travel experience and
                preparing for your trip to visa processing assistance, so you
                can travel with greater confidence and less stress.
              </p>
            </div>
            <ButtonLink href="/about" variant="primary" className="mt-8">
              About ROAM
            </ButtonLink>
          </div>
          <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
            {[
              [
                "Established",
                `${site.established.month} ${site.established.year}`,
              ],
              ["Ownership", "Locally owned"],
              ["Home base", "Legazpi City, Albay"],
              ["In travel", "More than 20 years"],
            ].map(([k, v]) => (
              <div key={k} className="bg-white p-6">
                <dt className="text-sm text-muted">{k}</dt>
                <dd className="mt-1 text-lg font-bold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Testimonials />

      <section aria-labelledby="dot-heading" className="pb-16 sm:pb-24">
        <Container>
          <AccreditationPanel className="bg-mist" />
        </Container>
      </section>

      <WhatsAppCta />

      <Section labelledBy="visit-heading">
        <Container>
          <LocationBlock />
        </Container>
      </Section>
    </>
  );
}
