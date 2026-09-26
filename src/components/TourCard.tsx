import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/data/tours";
import { formatUsd } from "@/data/tours";
import { CalendarIcon, CheckIcon, ClockIcon, PinIcon } from "./Icons";
import { buttonClass, cx } from "./ui";

export function TourCard({ tour, headingLevel = "h3", compact = false }: { tour: Tour; headingLevel?: "h2" | "h3"; compact?: boolean }) {
  const H = headingLevel;
  const href = `/tours/${tour.slug}`;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(14,58,95,0.45)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-50">
        <Image
          src={tour.cover.src}
          alt={tour.cover.alt}
          fill
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
          className={`object-cover ${tour.cover.position ?? "object-top"} transition-transform duration-500 group-hover:scale-[1.03]`}
        />
        <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-semibold text-brand-800 shadow-sm">
          {tour.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="flex items-center gap-1.5 text-sm font-medium text-muted">
          <PinIcon width={15} height={15} className="text-brand-500" />
          {tour.destination}, {tour.country}
        </p>
        <H className="mt-1.5 text-xl font-bold sm:text-[1.375rem]">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {tour.name}
          </Link>
        </H>

        <dl className="mt-3 mb-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-body">
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Duration</dt>
            <ClockIcon width={16} height={16} className="text-brand-500" />
            <dd>{tour.duration}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Travel period</dt>
            <CalendarIcon width={16} height={16} className="text-brand-500" />
            <dd>{tour.travelPeriod}</dd>
          </div>
        </dl>

        {!compact && (
          <ul className="-mt-1 mb-5 space-y-1.5 text-[0.9375rem]">
            {tour.cardHighlights.map((h) => (
              <li key={h} className="flex gap-2">
                <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-aqua-600" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
          <p className="leading-tight">
            <span className="block text-xs font-medium text-muted">{tour.priceLabel}</span>
            <span className="text-2xl font-bold tracking-tight text-ink">{formatUsd(tour.priceFromUsd)}</span>
            <span className="block text-xs text-muted">{tour.priceBasis}</span>
          </p>
          <div className="relative z-10 flex gap-2">
            <Link href={`${href}#inquire`} className={buttonClass("secondary", "sm")} aria-label={`Inquire about ${tour.name}`}>
              Inquire
            </Link>
            <Link href={href} className={cx(buttonClass("primary", "sm"))} aria-label={`View ${tour.name} tour`}>
              View Tour
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
