"use client";

import { usePathname } from "next/navigation";
import { waLink, quickInquiryText } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/** Site-wide WhatsApp shortcut. Hidden on tour pages, which have their own sticky inquiry bar. */
export function FloatingWhatsApp() {
  const pathname = usePathname();
  if (/^\/tours\/[^/]+/.test(pathname)) return null;
  return (
    <a
      href={waLink(quickInquiryText())}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex size-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_30px_-8px_rgba(11,99,55,0.6)] transition-transform hover:scale-105 hover:bg-wa-dark sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon width={28} height={28} />
      <span className="sr-only">Chat with ROAM on WhatsApp</span>
    </a>
  );
}
