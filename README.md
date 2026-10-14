# Solid Elf — Security and Data Research Firm

Includes revised source and the compiled website in `dist/`.

## View

Run `python3 -m http.server 8080 --directory dist` from this folder, then open http://localhost:8080. Do not open index.html directly through file://.

## Develop

Run `npm ci`, then `npm run dev`. Run `npm run build` for the production build.

## Revision — complete visual refinement

- Homepage layout and section order preserved. Dedicated homepage hero, approach-carousel photo background and CTA image.
- Unique imagery for the main pages, nine research detail pages, six consultancy details, two products, ten articles and three proposed events. A card and its destination intentionally share the same subject image.
- All five supplied team portraits retained unchanged. Other imagery is editorial illustration; none represents Solid Elf staff or premises.
- Removed wave separators and text-section divider lines. Subtle charcoal/brown section variations and restrained copper lighting.
- Larger, readable logo descriptor: Security and Data Research Firm. Original symbol retained with a live-text wordmark. Near-black footer with brighter typography.
- Improved research/service cards, consultancy outputs, engagement process, FAQ and detail-page handover guidance.
- Ten full blog articles, including four new 635–705-word cybersecurity guides with source links and distinct stock-reference-reimagined covers.
- Who We Are pages remain text-led below the photographic headers, without empty photo panels.
- Existing sample-event labels, contact email-draft behaviour and removal of invented testimonials retained.
- Images bundled locally in WebP; no external image service required to view the site.

See IMAGE_NOTES.md for image provenance and VERIFICATION.md for checks performed.

## Backend and maintenance

Existing Supabase configuration is retained. Live registration and applications require the corresponding backend. Several original admin pages remain static prototypes, not a complete CMS; admin toggles do not update bundled articles. Maintain the public blog in src/data/blog.ts. Suggested events are in src/data/events.ts.

See IMAGE_NOTES.md for provenance and prompts, and VERIFICATION.md for checks.
