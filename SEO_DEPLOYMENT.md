# SEO and deployment

## Build and deploy from GitHub

Use Node 22, `npm ci`, then `npm run build`. Netlify builds the source and publishes `dist`. The build now generates 76 public HTML pages, a sitemap, robots.txt and a real 404 page. Clean URLs replace hash routing; old `#/...` bookmarks are converted in the browser. Assets use absolute paths so nested URLs load correctly. Do not deploy only source files as a static folder.

Set `VITE_SITE_URL` in Netlify to the canonical production origin before building. Its default is `https://www.solidelf.org`, matching the website address in the supplied project. If the production domain differs, change this variable and rebuild. Configure your alternate domain to redirect to that origin. Preview deployments should be kept out of search indexing using Netlify deploy-preview settings.

## Included

- Unique page titles, descriptions, canonicals, Open Graph and social sharing cards.
- Full HTML content at build time, descriptive links and visible breadcrumbs.
- Organization, WebSite, BreadcrumbList and page-type JSON-LD; Service on each consultancy detail, BlogPosting on each article, ItemList on collections and CreativeWork on proposed resource briefings.
- Organization address, telephone and supplied social handles.
- Event schema is emitted only for confirmed event records, not proposed sessions. Current events are proposed; they have WebPage markup. Event rich-result eligibility is subject to Google's current requirements and is not guaranteed.
- Opportunity pages are explicitly expressions of interest, not verified vacancies. They intentionally do not emit JobPosting schema. Publish a confirmed individual vacancy with a genuine description, date posted, location/remote eligibility, employment terms and application procedure before adding JobPosting. Remove or expire closed listings. Do not add invented salaries, deadlines or offers.
- Proposed datasets and research themes are not marked up as released datasets or published papers. Add Dataset/ScholarlyArticle/Report types, real authors, release dates, licence and actual distributions or publication links only when those records exist.
- Internal connections between service pages, research, related articles, events, resources and enquiries; contextual external reference frameworks on practice pages.
- Admin routes are noindex and excluded from the sitemap. Unknown routes use the generated 404 page.

## After deployment

Verify the production domain in Google Search Console and submit `/sitemap.xml`. Use URL Inspection for a service page and article, and test their structured data in Google's Rich Results Test. Observe actual indexing, impressions, click-through rates and conversions before changing content. No rankings, traffic increases or rich-result appearances are promised.

New public content requires a rebuild to appear in pre-rendered pages and the sitemap. Supabase-only content is not automatically included in this static build; publish it to the source content collections or implement a verified build-time CMS export before relying on it for organic search. Contact and community forms still prepare email drafts; no Supabase submission store has been provisioned.

Reference guidance:
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/appearance/structured-data/job-posting
- https://developers.google.com/search/docs/appearance/structured-data/event

## Short courses and editable content

Short courses are now available at `/short-courses` with individual Course schema and a catalogue ItemList. With the supplied seven courses, the public build contains 84 pages. Course offers are emitted only for explicitly approved prices. Public content collections now support `src/data/content.json` imports; see CONTENT_MANAGEMENT_HANDOFF.md. No live CMS connection was added. Local editor exports replace source content and require a Netlify rebuild; newly added/deleted records then update HTML, metadata and sitemap together.
