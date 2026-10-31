import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { tours } from "@/data/tours";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { Container } from "./ui";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";

export function Footer() {
  const socials = [
    {
      key: "facebook",
      label: "Facebook",
      href: site.social.facebook,
      Icon: FacebookIcon,
    },
    {
      key: "instagram",
      label: "Instagram",
      href: site.social.instagram,
      Icon: InstagramIcon,
    },
  ];

  return (
    <footer className="border-t border-line bg-mist">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr]">
        <div>
          <Image
            src="/images/brand/logo-stacked.png"
            alt="ROAM International Travel and Tours"
            width={640}
            height={493}
            className="h-28 w-auto"
          />
          <p className="mt-5 max-w-sm text-[0.9375rem] text-muted">
            A locally owned, DOT-accredited travel and tour agency in Legazpi
            City, guiding travelers from planning to departure since{" "}
            {site.established.year}.
          </p>

          <ul className="mt-5 flex gap-2" aria-label="Social media and email">
            {socials.map(({ key, label, href, Icon }) => (
              <li key={key}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ROAM on ${label} (opens in a new tab)`}
                    className={`inline-flex size-10 items-center justify-center rounded-lg border border-line bg-white hover:border-brand-300 ${
                      key === "facebook" ? "text-[#0866FF]" : "text-[#C13584]"
                    }`}
                  >
                    <Icon width={22} height={22} />
                  </a>
                ) : (
                  <span
                    title={`${label} link coming soon`}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-dashed border-line text-muted/60"
                  >
                    <Icon width={22} height={22} />
                    <span className="sr-only">{label} (link coming soon)</span>
                  </span>
                )}
              </li>
            ))}

            <li>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email ROAM"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-white text-brand-700 hover:border-brand-300"
              >
                <MailIcon width={22} height={22} />
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold text-ink">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-brand-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-ink">Current tours</h2>
          <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
            {tours.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/tours/${t.slug}`}
                  className="text-muted hover:text-brand-700"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-ink">Contact</h2>
          <ul className="mt-4 space-y-3 text-[0.9375rem]">
            {site.offices.map((office) => (
              <li key={office.id} className="flex gap-3">
                <PinIcon className="mt-1 shrink-0 text-brand-600" width={18} height={18} />
                <address className="not-italic text-muted">
                  <span className="font-semibold text-ink">{office.name}</span><br />
                  {office.address.street}<br />
                  {office.address.city}, {office.address.province}{office.address.postalCode ? ` ${office.address.postalCode}` : ""}<br />
                  {office.address.country}
                </address>
              </li>
            ))}
            <li className="flex gap-3">
              <WhatsAppIcon
                className="mt-1 shrink-0 text-wa"
                width={18}
                height={18}
              />
              <a
                href={waLink(quickInquiryText())}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-brand-700"
              >
                {site.whatsapp.name}: {site.whatsapp.display}
              </a>
            </li>
            {site.contacts
              .filter((c) => !c.primary)
              .map((c) => (
                <li key={c.name} className="flex gap-3">
                  <PhoneIcon
                    className="mt-1 shrink-0 text-brand-600"
                    width={18}
                    height={18}
                  />
                  <a
                    href={`tel:${c.tel}`}
                    className="text-muted hover:text-brand-700"
                  >
                    {c.name}: {c.display}
                  </a>
                </li>
              ))}
            <li className="flex gap-3">
              <MailIcon
                className="mt-1 shrink-0 text-brand-600"
                width={18}
                height={18}
              />
              <a
                href={`mailto:${site.email}`}
                className="break-all text-muted hover:text-brand-700"
              >
                {site.email}
              </a>
            </li>
            {site.messengerUrl && (
              <li className="flex gap-3">
                <MessengerIcon
                  className="mt-1 shrink-0 text-brand-700"
                  width={18}
                  height={18}
                />
                <a
                  href={site.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message ROAM on Messenger (opens in a new tab)"
                  className="text-muted hover:text-brand-700"
                >
                  Messenger
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col gap-3 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>
            {site.accreditation.label}. Accreditation No.{" "}
            {site.accreditation.number}, valid until{" "}
            {site.accreditation.validUntil}.
          </p>

          <div className="flex items-center gap-5">
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line bg-white px-3 font-semibold text-brand-700 hover:border-brand-300"
            >
              <span aria-hidden="true">↑</span>
              Back to top
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
