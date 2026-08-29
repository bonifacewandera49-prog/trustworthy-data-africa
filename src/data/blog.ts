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
  { id: 1, slug: "securing-health-data", title: "Securing Health Data in Low-Resource Environments", excerpt: "Practical approaches to implementing data security protocols in healthcare settings with limited technical infrastructure.", tag: "Cybersecurity", cover_image: "/images/fieldwork.jpg", published_at: "2026-04-15" },
  { id: 2, slug: "quantum-ml-primer", title: "A Primer on Quantum Machine Learning for Research Teams", excerpt: "An introduction to quantum ML concepts and how automated tooling makes them accessible to non-specialist research teams.", tag: "Quantum Computing", cover_image: "/images/qkabrine.jpg", published_at: "2026-03-22" },
  { id: 3, slug: "phishing-trends-2026", title: "Emerging Phishing Trends Targeting African Institutions in 2026", excerpt: "Analysis of new threat vectors and social engineering tactics observed across the continent.", tag: "Threat Intelligence", cover_image: "/images/security-ops.jpg", published_at: "2026-02-10" },
  { id: 4, slug: "data-governance-framework", title: "Building a Data Governance Framework from Scratch", excerpt: "A step-by-step guide to establishing data governance in organisations with limited existing infrastructure.", tag: "Data Governance", cover_image: "/images/data-lifecycle.jpg", published_at: "2026-01-28" },
  { id: 5, slug: "synthetic-data-privacy", title: "When Synthetic Data Protects Privacy Without Losing Utility", excerpt: "How synthetic data generation techniques can preserve statistical properties while protecting individual privacy.", tag: "Privacy Engineering", cover_image: "/images/about-lab.jpg", published_at: "2025-12-15" },
  { id: 6, slug: "field-collection-security", title: "Security Protocols for Field Data Collection Teams", excerpt: "Practical security measures that field teams can implement with minimal technical overhead.", tag: "Field Security", cover_image: "/images/canarydrop.jpg", published_at: "2025-11-20" },
];
