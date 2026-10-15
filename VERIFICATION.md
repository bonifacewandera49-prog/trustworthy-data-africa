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


## Site-wide photography revision — current

- 53 former generated editorial assets were replaced (41) or removed (12). Hash checks found none in source public assets or the build.
- 51 editorial photographs have 51 unique file hashes; 10 established genuine stock photos were retained. Original team portraits and supplied logo retained.
- Checked all 52 content routes at 1440px and 375px: 104 route checks passed, no broken image elements, horizontal overflow or browser runtime errors.
- Seven informational headers are deliberately text-led; remaining subject pages use relevant stock. The community banner uses CSS colour rather than a blank photograph box.
- Photography credit page added. Original images are unaltered except download resizing/compression; art direction is implemented in CSS.
