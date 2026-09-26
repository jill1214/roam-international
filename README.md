# ROAM International Travel and Tours — Website

Next.js 16 · TypeScript · Tailwind CSS 4. Inquiry-based travel agency site; all inquiries continue on WhatsApp (+63 917 558 1494). No checkout, payments or database.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy (Vercel)
1. Push this folder to a GitHub repo and import it in Vercel (framework: Next.js, no settings needed).
2. Add env var `NEXT_PUBLIC_SITE_URL` = your production domain (e.g. `https://www.example.com`). Used for canonical URLs, sitemap and structured data.

## Where to edit content
| What | File |
|---|---|
| Business details, contacts, accreditation, social links, map | `src/data/site.ts` |
| Tour packages (prices, dates, itinerary, inclusions) | `src/data/tours.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Services | `src/data/services.ts` |
| FAQs | `src/data/faqs.ts` |
| Travel Inspiration cards | `src/data/inspiration.ts` |
| Colors & fonts | `src/app/globals.css` (`@theme`) |

**Add a tour:** add an object to `tours` in `src/data/tours.ts`, and put `<slug>-cover.jpg` (16:10) and `<slug>-flyer.jpg` in `public/images/tours/`. The listing, detail page, inquiry dropdown, footer, sitemap and related tours update automatically. `region`, `category` and `tags` are already on each tour for future filters.

## Before launch
- [ ] Set `NEXT_PUBLIC_SITE_URL`
- [ ] Add Facebook / Instagram URLs in `src/data/site.ts` (icons show as "coming soon" until then; the "Message on Facebook" button appears automatically once set)
- [ ] Optional: replace `maps.embedUrl` with the exact Google Maps "Embed a map" URL for the office pin
- [ ] Confirm fee amounts read from flyers with ROAM (travel tax, visa, tips, checked bag)
- [ ] Consider replacing flyer-based tour covers with licensed destination photos (flyers contain third-party characters)

See `docs/website-brief-updates.md` for everything changed from the original brief.
