# Solid Elf — Security and Data Research Firm

Includes revised source and the compiled website in `dist/`.

## View

Run `python3 -m http.server 8080 --directory dist` from this folder, then open http://localhost:8080. Do not open index.html directly through file://.

## Develop

Run `npm ci`, then `npm run dev`. Run `npm run build` for the production build.

## Revision

- Homepage section order and carousel layout retained; photos replaced.
- Twelve old non-team photos removed. Nine new editorial topic images installed; no generated employees or company premises.
- All five supplied team portraits retained unchanged. Sample employees removed from public and admin team listings.
- About, Mission, Team, and Sectors reworked with text-led content and no blank image panels.
- Photographic headers for sectors, services, research, resources, products, blogs, and events. About, Mission, Team, contact, and legal pages use typography-led headers.
- Six full blog guides at /#/blog, visible covers, article navigation, and related reading. Articles are bundled in src/data/blog.ts and do not need database publication.
- Placeholder image panels removed from resource listings. Fake publication metadata and DOI links removed; verified resource files still need to be supplied.
- Suggested events clearly labelled provisional. Contact enquiries open an email draft instead of claiming an unconfigured email was sent.
- Invented testimonial copy replaced with approach statements in the same homepage layout.
- Logo caption corrected in layout while retaining the supplied symbol and wordmark.
- New photos compressed to WebP. Narrow grids, visibility, and navigation labels improved.

## Backend and maintenance

Existing Supabase configuration is retained. Live registration and applications require the corresponding backend. Several original admin pages remain static prototypes, not a complete CMS; admin toggles do not update bundled articles. Maintain the public blog in src/data/blog.ts. Suggested events are in src/data/events.ts.

See IMAGE_NOTES.md for provenance and prompts, and VERIFICATION.md for checks.
