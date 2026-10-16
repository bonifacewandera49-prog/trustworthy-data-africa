export type FieldKind = "text" | "long" | "select" | "date" | "datetime" | "number" | "hidden";
export interface FieldMeta { label: string; help?: string; kind?: FieldKind; options?: string[]; item?: string; }

const hidden: FieldMeta = { label: "", kind: "hidden" };

const common: Record<string, FieldMeta> = {
  id: hidden, created_at: hidden, kind: hidden, parent: hidden, published: hidden, service: hidden,
  title: { label: "Title", help: "The main heading people will see." },
  name: { label: "Full name" },
  slug: { label: "Web address ending", help: "Short, lowercase, words joined by hyphens — e.g. data-governance-basics. Becomes part of the page link." },
  description: { label: "Short description", help: "One or two sentences shown on cards and search results.", kind: "long" },
  excerpt: { label: "Summary", help: "One or two sentences shown on the blog list.", kind: "long" },
  body: { label: "Full text", kind: "long" },
  image: { label: "Picture", help: "Upload a photo, or paste a link to one." },
  cover_image: { label: "Cover picture", help: "Upload a photo, or paste a link to one." },
  file: { label: "Downloadable file", help: "Optional PDF or spreadsheet visitors can download." },
  reference: { label: "Reference link", help: "Optional link to a source or standard." },
  link: { label: "Profile link", help: "Optional LinkedIn or personal website." },
  bio: { label: "Short biography", kind: "long" },
  role: { label: "Job title" },
  status: { label: "Status label", help: "Short tag shown on the card, e.g. 'In progress'." },
};

const perCollection: Record<string, Record<string, FieldMeta>> = {
  courses: {
    category: { label: "Subject area", kind: "select", options: ["Cybersecurity", "Data"] },
    price: { label: "Fee per person", kind: "number" },
    currency: { label: "Currency", kind: "select", options: ["UGX", "USD", "KES", "EUR"] },
    priceConfirmed: { label: "Fee is final", help: "Tick only once the fee is approved. Untick to show it as an estimate." },
    hours: { label: "Total learning hours", kind: "number" },
    level: { label: "Level", kind: "select", options: ["Beginner", "Intermediate", "Advanced"] },
    outcomes: { label: "What learners will be able to do", item: "Outcome" },
    modules: { label: "Course modules", item: "Module" },
    prerequisites: { label: "Who should join / requirements", kind: "long" },
    format: { label: "How it is taught", kind: "long" },
    includes: { label: "What the fee covers", kind: "long" },
  },
  blog: {
    tag: { label: "Topic", kind: "select", options: ["Cybersecurity", "Data Governance", "AI", "Research", "News"] },
    published_at: { label: "Publication date", kind: "date" },
    sections: { label: "Article sections", item: "Section" },
    heading: { label: "Section heading" },
    paragraphs: { label: "Paragraphs", item: "Paragraph" },
    sources: { label: "Sources", item: "Source" },
    label: { label: "Source name" },
    url: { label: "Source link" },
  },
  events: {
    event_type: { label: "Type of event", kind: "select", options: ["Workshop", "Webinar", "Conference", "Meetup", "Training"] },
    location_type: { label: "Where it happens", kind: "select", options: ["online", "in_person", "hybrid"] },
    location: { label: "Venue or place", help: "e.g. 'Bugiri, Uganda' or 'Online'." },
    meeting_url: { label: "Online meeting link", help: "Only shown to approved attendees." },
    start_date: { label: "Starts", kind: "datetime" },
    end_date: { label: "Ends", kind: "datetime" },
    max_capacity: { label: "Maximum attendees", help: "Leave empty for no limit.", kind: "number" },
    is_free: { label: "Free to attend" },
    registration_open: { label: "Accept registrations" },
    require_approval: { label: "I approve each registration manually" },
  },
  team: {
    category: { label: "Group", kind: "select", options: ["core_team", "advisors", "associates"] },
  },
  opportunities: {
    category: { label: "Type", kind: "select", options: ["Jobs", "Internships", "Fellowships", "Volunteering", "Partnerships"] },
    fit: { label: "Who this suits", kind: "long" },
    items: { label: "Key points", item: "Point" },
    open: { label: "Currently accepting applications" },
  },
};
["papers", "datasets", "reports"].forEach((c) => (perCollection[c] = { category: { label: "Topic" } }));

export function metaFor(collection: string, key: string): FieldMeta {
  return perCollection[collection]?.[key] ?? common[key] ?? { label: key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").replace(/^./, (x) => x.toUpperCase()) };
}
