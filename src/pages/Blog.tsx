import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";
import { blogPosts } from "@/data/blog";

const posts = blogPosts;

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
