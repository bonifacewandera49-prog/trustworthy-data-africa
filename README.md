# Solid Elf — Security and Data Research Firm

This ZIP contains the complete editable project at its root, plus a compiled `dist/` preview. See NETLIFY_SETUP.md for GitHub → Netlify deployment and new Supabase configuration.

## View locally

From this folder, run `python3 -m http.server 8080 --directory dist`, then open http://localhost:8080. Do not open index.html directly through file://.

## Develop

Run `npm ci` and `npm run dev`. Build with `npm run build`.

## Latest revision — 15 October 2026

- Restored the exact supplied logo artwork at visible header/footer sizes, blended into both backgrounds.
- Rebuilt all 17 service/research and consultancy detail pages with full titles, context, suitability, capabilities, deliverables, a tailored approach, illustrative use cases, FAQs and related links.
- Added dedicated Data Analytics & Decision Intelligence and Data Analytics & Business Intelligence pages.
- Added Cybersecurity Strategy & Digital Safety consultancy; strengthened security, safety and analytics throughout About, navigation and consultancy.
- Combined quantum machine learning and blockchain in one emerging-technology page. Both old URLs redirect to the combined page.
- Added meaningful links between expertise, consultancy, guides, sectors and events. Service enquiries carry the selected topic into the contact form.
- Consultancy appears first under What We Do; analytics and digital-safety shortcuts are included. Dropdowns support click/keyboard use.
- Changed Join the Team to Join Our Community and replaced the simulated application form with a community enquiry email-draft workflow.
- Homepage layout retained. Replaced the first two work-card images with real stock, placed Finance last, and displayed four latest articles.
- Added three proposed events, bringing the bundled programme to six. New local events are retained alongside live events, with duplicate slugs reconciled.
- Removed decorative service numbering and unnecessary About process numbering.
- Installed ten genuine stock photos for the current replacements/additions, including consultancy and analytics imagery. Rejected generated replacements are not shipped. See IMAGE_NOTES.md for exact provenance and limits.

## Content and integration

Service content: `src/data/practices.ts`. Blog: `src/data/blog.ts`. Events: `src/data/events.ts`. Photo credits: `src/data/photo-credits.ts`.

Configure your new Supabase project through the environment variables documented in NETLIFY_SETUP.md. The old .env is excluded from this delivery, and the bundled build was made with no backend configured. No backend writes were submitted. Proposed event dates are provisional and registration is closed. Contact/community forms prepare an email draft for the visitor to review and send; they do not claim automatic delivery or enrolment. Several inherited admin pages remain prototypes, not a complete CMS.


## Visual restoration

Restored the pre-stock-overhaul headers, sector imagery and card treatments, with warm dark shading. Removed on-page image-credit badges. What We Do now contains Consultancy and Research only; analytics and cybersecurity remain within those pages. Corrected logo proportions/colour, strengthened the orange accent and retained the expanded content and GitHub/Netlify configuration.


## About and security services update

Removed the About focus-card grid and converted principle cards into plain text. Repositioned the page around consultancy, security services, data expertise and research. Added detailed Incident Response, Endpoint Protection and IAM sections under Cybersecurity Strategy & Digital Safety; added Application Security Assessment and Security Hardening under Security Assessment & Penetration Testing. Updated related service summaries, outputs and cross-links. The menu and footer now say Consultancy and Services.


## Full data lifecycle positioning

Added Secure Data Collection & Quality Assurance and Secure Data Storage & Management as dedicated consultancy services. Homepage, About, Research, Mission and footer now connect collection methods and systematic quality control with storage, processing, secure use, consuming systems, fairness, interpretability, transparency, retention and disposal. Existing service pages expand lineage, governance and intended-use reliability. Partnerships & Funding now leads with joint research, co-delivery, sector collaboration and knowledge exchange; funding is a separate route with its own enquiry.

## SEO, opportunities and community update

The source now builds clean-URL, pre-rendered public pages for GitHub → Netlify deployment. Read SEO_DEPLOYMENT.md before publishing, especially the canonical-domain setting and Search Console steps. The latest package also contains the full data-lifecycle service and partnership changes: secure collection and quality assurance, secure storage and management, responsible processing and use, integrity and controlled disposal.

Added categorized Jobs, Fellowships, Internships and Contracts interest pathways with detail pages; individual detail pages for all 18 existing resource themes; stronger related service/article links; an expanded consent-based community introduction form; supplied contact and social information; and the exact supplied logo artwork rendered intact at compact dimensions with white-background blending.

## Short courses and editable content (latest)

Added seven course detail pages with indicative UGX prices, learning outcomes, prerequisites and Course schema. Short Courses is linked from Resources and the footer. The course prices are proposals, not approved live offers.

The content editor at `/admin` now supports all eight collections with local draft saving, add/edit/delete, file selection, publishable JSON export and full draft backup/restore. **It is not connected to Supabase and does not publish live changes.** Replace `src/data/content.json` with the export and rebuild from GitHub to publish. The complete next-developer integration plan is in CONTENT_MANAGEMENT_HANDOFF.md; no Supabase project or new migrations were created.
