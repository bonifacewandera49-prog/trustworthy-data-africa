export interface BlogPostMeta {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  cover_image: string;
  published_at: string;
}

export const blogPosts: BlogPostMeta[] = [
  { id: 1, slug: "security-review-before-launch", title: "What a Security Review Should Cover Before a Digital Service Launch", excerpt: "A practical checklist for teams preparing a new platform, data product, or public-facing service for production.", tag: "Security Engineering", cover_image: "/images/security-ops.jpg", published_at: "2026-10-08" },
  { id: 2, slug: "data-governance-operating-model", title: "Turning Data Governance from Policy into an Operating Model", excerpt: "Why ownership, inventories, access rules, retention decisions, and review routines matter more than a policy document alone.", tag: "Data Governance", cover_image: "/images/data-lifecycle.jpg", published_at: "2026-09-18" },
  { id: 3, slug: "phishing-trends-2026", title: "Phishing in 2026: The Patterns Security Teams Should Be Watching", excerpt: "A field-oriented look at impersonation, credential theft, business email compromise, and increasingly convincing social engineering.", tag: "Threat Intelligence", cover_image: "/images/canarydrop.jpg", published_at: "2026-08-27" },
  { id: 4, slug: "synthetic-data-privacy", title: "When Synthetic Data Protects Privacy Without Losing Utility", excerpt: "How synthetic data can support testing, research, and analytics while reducing exposure of sensitive records.", tag: "Privacy Engineering", cover_image: "/images/qkabrine.jpg", published_at: "2026-07-30" },
  { id: 5, slug: "field-collection-security", title: "Security Protocols for Field and Distributed Data Collection", excerpt: "Controls for devices, credentials, transfers, verification, and incident handling when data is collected outside controlled office environments.", tag: "Field Security", cover_image: "/images/fieldwork.jpg", published_at: "2026-06-19" },
  { id: 6, slug: "responsible-ai-assurance", title: "Responsible AI Needs an Assurance Process, Not Just Principles", excerpt: "A practical structure for testing fairness, explainability, provenance, monitoring, and accountability around consequential models.", tag: "AI Assurance", cover_image: "/images/team-working.jpg", published_at: "2026-05-28" },
];
