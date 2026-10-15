# Short courses and content-management handoff

## Scope of this update

No Supabase project was created, changed, connected, migrated or seeded. No new backend code or SQL migrations were added. The existing backend files are inherited and must not be assumed to constitute a completed CMS.

The current deliverable provides a local draft editor and a deterministic content/build contract. Another AI or developer can connect this interface to the backend later without changing the public content layout.

## What works now

Open `/admin/courses` (or `/admin`) on the running site. The editor supports Short Courses, Blog, Events, Team, Opportunities, Research Papers, Datasets and Reports.

- Add and edit records through labelled fields, including list items and article sections.
- Upload PNG, JPEG, WebP, PDF or CSV files as appropriate, up to 3 MB per file. Images only are accepted for image fields. Uploads are local and included in JSON exports; they are not uploaded to a server.
- Save local browser drafts; include or exclude records from the publishable export; delete records with confirmation.
- Export `content.json` containing only included records. Back up all drafts separately, including unpublished records. Restore that editor backup when needed.
- Browser storage is limited; if storage fails, the editor explains that changes exist only in the current session and should be exported. Export regularly. Browser clearing or switching devices will not preserve these drafts.
- The editor is not a production authenticated CMS. It edits only browser-local drafts; it cannot alter the hosted site or another visitor's data. Never put private records in public content exports.

## Publish without a backend

1. Save the record before exporting. An open unsaved edit is not part of the export.
2. Download **Export publishable content**.
3. Replace `src/data/content.json` in the GitHub repository with that export.
4. Netlify runs `npm run build`. `scripts/prepare-content.mjs` validates the collection/slug structure and materializes approved uploaded assets into `public/content-assets/`, then creates `src/data/content-resolved.json`.
5. Public pages, navigation lists, sitemap and JSON-LD are rebuilt from the same resolved records. Deleted pages are no longer generated on the new deployment. Removing all records leaves an empty collection; it does not restore starter content.

The default `content.json` is `{}` and uses the supplied starter content. An explicit empty array, such as `"courses": []`, means intentionally no published courses. Do not remove that key when the intended result is an empty collection.

Never edit `content-resolved.json` directly: it is regenerated. Exported files may contain base64 asset data and can be larger than expected. A future backend should store binary assets separately.

## Content collections and fields

The canonical record templates are in `src/lib/content-editor.ts`; current content is in `src/data/`.

| Collection | Key | Main fields |
| --- | --- | --- |
| Courses | slug | title, category, description, price, currency, priceConfirmed, hours, level, modules[], outcomes[], prerequisites, format, includes, service, image, reference |
| Blog | slug | title, tag, cover_image, excerpt, published_at, sections[{heading, paragraphs[]}], sources[{label,url}] |
| Events | slug | title, description, cover_image, event_type, location_type, location, start_date, end_date and other existing display fields |
| Team | id | name, role, bio, image, category, link |
| Opportunities | slug | title, category, description, fit, items[], status, service, open |
| Papers / Datasets / Reports | slug | title, description, category, kind, parent, status, body, file |

Slugs must be lowercase words separated by hyphens. Resource slugs must be unique across papers, datasets and reports because they share `/resources/:slug`. Changing a published slug requires a redirect from its old URL. Price values are numeric; currencies use ISO codes such as UGX. Resource `file` can contain a public URL or an upload. Event dates use ISO timestamps with an explicit timezone. Current event enquiries use the Contact page; attendance registration, payments and course enrolments are not implemented.

## Proposed backend integration — for the next developer

1. Inventory the existing Supabase schema and migrations before applying anything. Some inherited files contain old seed data and registration prototypes. Do not blindly run or duplicate them.
2. Model collections and entries with immutable IDs, collection key, unique slug, content payload, draft/published state, ordering, created/updated/published timestamps and revision/version numbers. A collection needs an explicit initialization state so an empty live collection never falls back to starter content.
3. Create migrations for tables, constraints and indexes. Validate records server-side against the same contract; reject invalid field types, unsafe URLs and duplicate slugs. Use database-side authorization, not UI-only access checks.
4. Require authenticated authorized editors for writes. Enable row-level security; public reads should expose only published public content. Keep role assignment privileged. Do not put a service-role key in any `VITE_` variable or client bundle.
5. Store assets in a dedicated bucket with permitted MIME types and size limits. Restrict uploads/deletion to authorized editors. Use private storage and signed URLs for non-public assets. Never make participant records or enquiry data public. Track references before deleting a shared file.
6. Replace browser draft persistence in ContentEditor with authenticated CRUD, pagination, error feedback, concurrency/version checks, draft preview and audit records. Preserve the exported content shape for rendering.
7. Add an authenticated server-side publish operation that takes a validated published snapshot and triggers a Netlify build through a server-held hook. Keep the hook secret; do not expose it in frontend environment variables. Report build success/failure separately from saving an edit. A failed build must not claim a successful publication.
8. At build time, fetch only published records or export a versioned content snapshot. An unavailable backend must fail publication or deliberately retain the last verified snapshot—not silently restore demo records. Publish source content, HTML, sitemap and schema atomically.
9. Test admin/anonymous permissions, file uploads, draft visibility, deleting the last record, slug changes, expired opportunities, removed assets and publish failures against the actual backend before launch.
10. Extend events, real job listings and published research metadata only when genuine details are available. Existing opportunity pages are expressions of interest, not active vacancies. Do not emit JobPosting for them. Dataset/paper release schema needs real publication data, licence and access details.

## Courses, prices and search markup

Seven starter courses have indicative per-person tuition prices, proposed for review rather than researched market quotations:

| Course | Learning hours | Indicative UGX fee |
| --- | ---: | ---: |
| Cybersecurity & Digital Safety Foundations | 12 | 300,000 |
| Incident Response & Recovery Readiness | 18 | 550,000 |
| Application Security Assessment Fundamentals | 24 | 650,000 |
| Secure Data Collection & Quality Control | 12 | 350,000 |
| Qualitative Data Analysis with NVivo | 18 | 450,000 |
| Qualitative & Mixed Methods Analysis with MAXQDA | 18 | 450,000 |
| Data Analysis & Dashboards with Power BI | 24 | 500,000 |

Fees are prominently labelled indicative; dates, trainer, delivery format, final taxes and any completion documentation need confirmation before enrolment. Software licences are excluded. No affiliation, accreditation or vendor certification is claimed.

Each course has Course JSON-LD, breadcrumbs, canonical URL, unique title/description, sharing metadata and a sitemap entry. The catalogue has ItemList markup. Offer pricing is emitted only when `priceConfirmed` is true; proposed prices are not represented as confirmed offers. Live Google validation and ranking results are not claimed.

Reference: https://developers.google.com/search/docs/appearance/structured-data/course
