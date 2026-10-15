# Verification — 15 October 2026

- Production build: TypeScript and Vite passed. The inherited bundle-size advisory is non-blocking.
- Checked 52 public content routes at 375, 768 and 1440 pixels: 156 route/viewport checks passed, with no broken image elements, horizontal overflow or browser runtime errors.
- Collected internal links across those pages and verified their routes against the public-page inventory.
- Final targeted checks passed at 320, 375 and 1440 pixels after refining the supplied logo rendering and narrow-screen footer width.
- Verified four latest articles on the homepage; Finance last in the sector collection; Consultancy first under What We Do; the analytics shortcut navigates correctly.
- Both former quantum and blockchain detail URLs redirect to the combined emerging-technology page.
- Detail-page section navigation and service-specific contact enquiry links work; the selected service appears in the contact message.
- Six proposed events appear, and the community page uses the requested Join Our Community heading.
- Supplied logo and five team portrait files are byte-for-byte unchanged. Inspected header/footer logo rendering and representative desktop/mobile layouts.
- Ten current replacement/additional images are genuine stock photographs; credits and provenance are documented. Rejected generated replacements are not shipped.

No backend writes or enquiry messages were submitted. Responsive browsing used bundled content with external requests blocked. Live registration, administration and email delivery are not claimed as verified. Community and contact forms prepare email drafts for visitors to review and send.


## Netlify/GitHub readiness revision

Added netlify.toml (npm run build, dist, Node 22), .nvmrc, .gitignore and .env.example. Retained npm package-lock and removed competing Bun lockfile. Public client initialization tolerates missing/invalid backend URL; unconfigured API calls return a controlled error without external requests. Built with blank Supabase environment values; responsive interactions passed. Live Netlify deployment and a new Supabase database have not been tested or provisioned.


## Current visual restoration

- Restored all baseline image bytes from the pre-stock-overhaul archive, including page headers and sector/work card imagery.
- No public image-credit badges or Photography page. Source notes retained in IMAGE_NOTES.md.
- What We Do contains exactly Consultancy then Research; the mobile menu was opened and checked. Research navigates to /work. Analytics/cybersecurity content remains in the detail pages.
- Logo SVG keeps supplied artwork geometry, removes white edge halos and uses legible orange tones. Header/footer screenshots inspected.
- Production build passed. Targeted browser checks passed at 320, 375 and 1440 pixels, including no horizontal overflow, menu, article count, sector order, legacy redirects, detail jump navigation, contextual enquiries, events and community page. No runtime errors in that check.
- No live Netlify deployment or Supabase provisioning performed.


## Compact logo correction

Header logo reduced to 244px desktop/224px mobile, footer to 254px/244px. Supplied symbol and Solid Elf wordmark retained; descriptor rendered separately as regular-weight DM Sans (10–10.5px), without image masking. Header height reduced to 80px. Build passed; screenshots inspected and no overflow at 320, 375 and 1440px.


## About and security capabilities

Production build passed. Updated About and the consultancy index/detail pages were checked at 375 and 1440 pixels without horizontal overflow or runtime errors. Confirmed the About focus cards are absent and all five requested security services have dedicated content sections in the two existing security detail pages.
