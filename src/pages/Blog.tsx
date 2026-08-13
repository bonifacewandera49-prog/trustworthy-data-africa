import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";

const posts = [
  { id: 1, slug: "securing-health-data", title: "Securing Health Data in Low-Resource Environments", excerpt: "Practical approaches to implementing data security protocols in healthcare settings with limited technical infrastructure.", tag: "Cybersecurity", cover_image: "/images/fieldwork.jpg", published_at: "2026-04-15" },
  { id: 2, slug: "quantum-ml-primer", title: "A Primer on Quantum Machine Learning for Research Teams", excerpt: "An introduction to quantum ML concepts and how Qkabrine makes them accessible to non-specialist research teams.", tag: "Quantum Computing", cover_image: "/images/qkabrine.jpg", published_at: "2026-03-22" },
  { id: 3, slug: "phishing-trends-2026", title: "Emerging Phishing Trends Targeting African Institutions in 2026", excerpt: "Analysis of new threat vectors and social engineering tactics observed across the continent.", tag: "Threat Intelligence", cover_image: "/images/security-ops.jpg", published_at: "2026-02-10" },
  { id: 4, slug: "data-governance-framework", title: "Building a Data Governance Framework from Scratch", excerpt: "A step-by-step guide to establishing data governance in organisations with limited existing infrastructure.", tag: "Data Governance", cover_image: "/images/data-lifecycle.jpg", published_at: "2026-01-28" },
  { id: 5, slug: "synthetic-data-privacy", title: "When Synthetic Data Protects Privacy Without Losing Utility", excerpt: "How synthetic data generation techniques can preserve statistical properties while protecting individual privacy.", tag: "Privacy Engineering", cover_image: "/images/about-lab.jpg", published_at: "2025-12-15" },
  { id: 6, slug: "field-collection-security", title: "Security Protocols for Field Data Collection Teams", excerpt: "Practical security measures that field teams can implement with minimal technical overhead.", tag: "Field Security", cover_image: "/images/canarydrop.jpg", published_at: "2025-11-20" },
];

const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.tag === activeCategory);

  return (
    <>
      <Hero tag="Blog" title="Insights and Innovations" subtitle="Explore a collection of deep dives, industry analysis, and technical guides designed to bridge the gap between complex data and actionable strategy." />
      <Section>
        <FilterDropdown
          categories={allCategories}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {filtered.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.id} className="rv rounded-lg overflow-hidden border transition-colors no-underline group" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
              <div className="aspect-[16/9] flex items-center justify-center overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
                {p.cover_image ? <img src={p.cover_image} alt={p.title} loading="lazy" className="w-full h-full object-cover" style={{ opacity: 0.55 }} /> : <span className="text-xs" style={{ color: "var(--dark-text-muted)" }}>No cover</span>}
              </div>
              <div className="p-5">
                <span className="font-mono text-[0.66rem] tracking-widest uppercase mb-2 block" style={{ color: "var(--orange)" }}>{p.tag}</span>
                <h3 className="text-[0.9rem] font-semibold mb-2 leading-snug transition-colors group-hover:underline" style={{ color: "var(--dark-text)" }}>{p.title}</h3>
                <p className="text-[0.8rem] leading-relaxed mb-2.5 line-clamp-2" style={{ color: "var(--dark-text-muted)" }}>{p.excerpt}</p>
                <span className="font-mono text-[0.68rem]" style={{ color: "var(--dark-text-muted)" }}>
                  {p.published_at ? new Date(p.published_at).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : ""}
                </span>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>No posts in this category.</p>
        )}
      </Section>
    </>
  );
}
