"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { Logo } from "./Logo";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { buttonClass, cx } from "./ui";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  // Clicking "Home" on the homepage is a no-op for the router, so scroll to the
  // top (the hero) ourselves and drop any stale hash left in the URL.
  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href !== "/" || pathname !== "/") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (window.location.hash) window.history.replaceState(null, "", "/");
    setTimeout(scrollToTop, 0);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-brand-700 focus:shadow">
          Skip to content
        </a>
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8 lg:gap-6">
          <Logo priority />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => onNavClick(e, l.href)}
                    aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    className={cx(
                      "rounded-md px-3 py-2 text-[0.9375rem] font-medium transition-colors",
                      isActive(pathname, l.href) ? "text-brand-700" : "text-ink/80 hover:text-brand-700",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link href="/contact#inquire" className={buttonClass("primary", "md", "shrink-0 whitespace-nowrap")}>
              Inquire Now
            </Link>
            <button
              ref={triggerRef}
              type="button"
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-line text-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <MenuIcon width={22} height={22} />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={cx("fixed inset-0 z-50 overflow-hidden transition-[visibility] lg:hidden", open ? "pointer-events-auto visible" : "pointer-events-none invisible delay-300")}
        aria-hidden={!open}
      >
        <div
          className={cx("absolute inset-0 bg-ink/40 transition-opacity duration-200", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open}
          className={cx(
            "absolute inset-y-0 right-0 flex h-dvh max-h-dvh w-[min(22rem,88vw)] flex-col bg-white shadow-2xl transition-transform duration-250 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line px-5">
            <span className="text-sm font-semibold text-muted">Menu</span>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center rounded-lg text-ink hover:bg-mist"
              aria-label="Close menu"
            >
              <CloseIcon width={22} height={22} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav aria-label="Mobile" className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => onNavClick(e, l.href)}
                    aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    className={cx(
                      "block rounded-lg px-3 py-3 text-lg font-semibold",
                      isActive(pathname, l.href) ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-mist",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="shrink-0 space-y-2.5 border-t border-line p-5">
            <a href={waLink(quickInquiryText())} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={buttonClass("whatsapp", "lg", "w-full")}>
              <WhatsAppIcon /> WhatsApp {site.whatsapp.name}
            </a>
            <Link href="/contact#inquire" onClick={() => setOpen(false)} className={buttonClass("primary", "lg", "w-full")}>
              Inquire Now
            </Link>
            <a href={`tel:${site.whatsapp.e164}`} onClick={() => setOpen(false)} className={buttonClass("secondary", "lg", "w-full")}>
              <PhoneIcon /> Call {site.whatsapp.display}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
