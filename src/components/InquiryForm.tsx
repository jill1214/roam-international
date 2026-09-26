"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { buildInquiryMessage, waLink } from "@/lib/whatsapp";
import { site } from "@/data/site";
import { WhatsAppIcon, InfoIcon, ChevronDownIcon } from "./Icons";
import { buttonClass, cx } from "./ui";

const OTHER_OPTIONS = ["Customized tour", "Group travel", "Visa assistance", "Other destination", "Not sure yet"];

type Props = {
  tourNames: string[];
  defaultTour?: string;
  heading?: string;
  className?: string;
};

type Errors = Partial<Record<"name" | "mobile" | "tour" | "otherDestination" | "adults", string>>;

export function InquiryForm({ tourNames, defaultTour, heading, className }: Props) {
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;
  const [tour, setTour] = useState(defaultTour ?? "");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sentLink, setSentLink] = useState<string | null>(null);
  const [today, setToday] = useState<string>();
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);

  const total = (Number(adults) || 0) + (Number(children) || 0);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Enter your name.";
    const digits = get("mobile").replace(/\D/g, "");
    if (digits.length < 10) next.mobile = "Enter a mobile number with at least 10 digits, e.g. 0917 123 4567.";
    if (!tour) next.tour = "Choose a tour or destination.";
    if (tour === "Other destination" && !get("otherDestination")) next.otherDestination = "Tell us where you'd like to go.";
    if (!(Number(adults) >= 1)) next.adults = "Enter at least 1 adult.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      document.getElementById(id(first))?.focus();
      return;
    }

    const tourLabel = tour === "Other destination" ? get("otherDestination") : tour;
    const message = buildInquiryMessage({
      name: get("name"),
      mobile: get("mobile"),
      email: get("email") || undefined,
      tour: tourLabel,
      travelDate: get("travelDate"),
      travelers: String(total),
      adults,
      children: children || "0",
      departureCity: get("departureCity"),
      message: get("message"),
      tourSpecific: tourNames.includes(tourLabel),
    });
    const link = waLink(message);
    const win = window.open(link, "_blank");
    if (win) win.opener = null;
    setSentLink(link);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={id(`${k}-error`)} className="mt-1.5 text-sm font-medium text-red-700">{errors[k]}</p>
    ) : null;
  const aria = (k: keyof Errors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? id(`${k}-error`) : undefined,
  });

  return (
    <div className={cx("rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[0_24px_48px_-32px_rgba(14,58,95,0.35)] sm:p-8", className)}>
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      <p className={cx("text-[0.9375rem] text-muted", heading && "mt-2")}>
        Fill this in and tap the button. WhatsApp opens with your details already written, ready to send to {site.whatsapp.name}.
      </p>

      <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="field-label">Name</label>
          <input id={id("name")} name="name" autoComplete="name" required className="field" {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor={id("mobile")} className="field-label">Mobile number</label>
          <input id={id("mobile")} name="mobile" type="tel" inputMode="tel" autoComplete="tel" required placeholder="0917 123 4567" className="field" {...aria("mobile")} />
          {err("mobile")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("email")} className="field-label">Email <span className="font-normal text-muted">(optional)</span></label>
          <input id={id("email")} name="email" type="email" autoComplete="email" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("tour")} className="field-label">Tour or destination</label>
          <div className="relative">
            <select id={id("tour")} name="tour" required value={tour} onChange={(e) => setTour(e.target.value)} className="field appearance-none pr-10" {...aria("tour")}>
            <option value="" disabled>Choose one</option>
            <optgroup label="Tour packages">
              {tourNames.map((n) => <option key={n} value={n}>{n}</option>)}
            </optgroup>
            <optgroup label="Other requests">
              {OTHER_OPTIONS.map((n) => <option key={n} value={n}>{n}</option>)}
            </optgroup>
          </select>
            <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted" />
          </div>
          {err("tour")}
        </div>
        {tour === "Other destination" && (
          <div className="sm:col-span-2">
            <label htmlFor={id("otherDestination")} className="field-label">Where would you like to go?</label>
            <input id={id("otherDestination")} name="otherDestination" className="field" {...aria("otherDestination")} />
            {err("otherDestination")}
          </div>
        )}
        <div>
          <label htmlFor={id("travelDate")} className="field-label">Preferred travel date <span className="font-normal text-muted">(optional)</span></label>
          <input id={id("travelDate")} name="travelDate" type="date" min={today} className="field" />
        </div>
        <div>
          <label htmlFor={id("departureCity")} className="field-label">Departure city <span className="font-normal text-muted">(optional)</span></label>
          <input id={id("departureCity")} name="departureCity" placeholder="e.g. Legazpi, Manila" autoComplete="address-level2" className="field" />
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="field-label">Number of travelers</legend>
          <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-3">
            <div>
              <label htmlFor={id("adults")} className="mb-1 block text-sm text-muted">Adults</label>
              <input id={id("adults")} name="adults" type="number" min={1} max={200} inputMode="numeric" value={adults} onChange={(e) => setAdults(e.target.value)} className="field" {...aria("adults")} />
            </div>
            <div>
              <label htmlFor={id("children")} className="mb-1 block text-sm text-muted">Children <span className="sr-only">(optional)</span></label>
              <input id={id("children")} name="children" type="number" min={0} max={200} inputMode="numeric" value={children} onChange={(e) => setChildren(e.target.value)} placeholder="0" className="field" />
            </div>
            <p className="min-h-[2.875rem] content-center rounded-lg bg-mist px-3.5 text-sm text-body" aria-live="polite">
              Total: <strong className="text-ink">{total}</strong>
            </p>
          </div>
          {err("adults")}
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className="field-label">Message or special requests <span className="font-normal text-muted">(optional)</span></label>
          <textarea id={id("message")} name="message" rows={4} className="field py-3" placeholder="Room arrangement, senior or child needs, questions about visas…" />
        </div>

        <div className="sm:col-span-2">
          <button type="submit" className={buttonClass("whatsapp", "lg", "w-full")}>
            <WhatsAppIcon /> Continue on WhatsApp
          </button>
          <p className="mt-3 flex gap-2 text-sm text-muted">
            <InfoIcon width={18} height={18} className="mt-0.5 shrink-0" />
            Your inquiry is sent only when you press Send in WhatsApp. Nothing is stored on this website.
          </p>
        </div>
      </form>

      {sentLink && (
        <div role="status" className="mt-6 rounded-xl border border-aqua-300 bg-aqua-100/60 p-4 text-[0.9375rem] text-ink">
          <p className="font-semibold">WhatsApp should now be open with your message.</p>
          <p className="mt-1 text-body">
            Press Send in WhatsApp to reach {site.whatsapp.name}. If it didn't open,{" "}
            <a href={sentLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-4">open WhatsApp again</a>{" "}
            or call {site.whatsapp.display}.
          </p>
        </div>
      )}
    </div>
  );
}
