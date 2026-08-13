import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";

const papers = [
 { id: 1, title: "Differential Privacy for Mobile Health Data Collection in Low-Resource Environments", journal: "IEEE Security & Privacy", year: 2026, authors: "Okonkwo A., Mensah K., Diallo F.", tag: "Privacy & Security", cover_image: "/images/default-thumbnail.jpg", url: "#" },
 { id: 2, title: "Automated Quantum Circuit Search for Hybrid Classical-Quantum Classification", journal: "Nature Quantum Information", year: 2025, authors: "Nkrumah S., Diallo F.", tag: "Quantum Computing", cover_image: "/images/qkabrine.jpg", url: "#" },
 { id: 3, title: "Phishing Ecosystem Dynamics in West African Mobile Money Platforms", journal: "ACM CCS", year: 2025, authors: "Mensah K., Moyo T.", tag: "Cybersecurity", cover_image: "/images/canarydrop.jpg", url: "#" },
 { id: 4, title: "Synthetic Data Generation for Smallholder Agricultural Yield Prediction", journal: "NeurIPS", year: 2025, authors: "Nkrumah S., Dlamini Z.", tag: "Synthetic Data", cover_image: "/images/data-lifecycle.jpg", url: "#" },
 { id: 5, title: "Cross-Border Data Governance Frameworks for the African Union", journal: "Data & Policy", year: 2024, authors: "Bello A., Okonkwo A.", tag: "Data Governance", cover_image: "/images/fieldwork.jpg", url: "#" },
 { id: 6, title: "Explainable AI for Credit Scoring in Resource-Constrained Settings", journal: "FAccT", year: 2024, authors: "Habimana J.-P., Eze N.", tag: "AI Fairness", cover_image: "/images/about-lab.jpg", url: "#" },
];

const allCategories = ["All", ...Array.from(new Set(papers.map((p) => p.tag)))];

export default function Research() {
 const [activeCategory, setActiveCategory] = useState("All");
 const filtered = activeCategory === "All" ? papers : papers.filter((p) => p.tag === activeCategory);

 return (
 <>
 <Hero tag="Research Papers" title="Advancing the Frontier" subtitle="Bridging theory and application through experimental design and data-driven insights. Explore our latest findings in emerging technology and socio-technical frameworks." />
 <Section>
 <FilterDropdown
 categories={allCategories}
 active={activeCategory}
 onChange={setActiveCategory}
 />
 <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
 {filtered.map((p) => (
 <a href={p.url} target="_blank" rel="noopener noreferrer" key={p.id} className="rv rounded-lg overflow-hidden border transition-colors no-underline group"
 style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <div className="aspect-[16/9] flex items-center justify-center overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
 <img src={p.cover_image} alt={p.title} loading="lazy" className="w-full h-full object-cover" style={{ opacity: 0.55 }} />
 </div>
 <div className="p-5">
 <span className="font-mono text-[0.66rem] tracking-widest uppercase mb-2 block" style={{ color: "var(--orange)" }}>{p.tag}</span>
 <h3 className="text-[0.88rem] font-semibold mb-1.5 leading-snug group-hover:underline" style={{ color: "var(--dark-text)" }}>{p.title}</h3>
 <span className="font-mono text-[0.7rem] block mb-1" style={{ color: "var(--dark-text-muted)" }}>{p.journal}</span>
 <span className="text-[0.72rem] block" style={{ color: "var(--dark-text-muted)" }}>{p.authors}</span>
 <span className="font-mono text-[0.65rem] mt-2 block" style={{ color: "var(--dark-text-muted)" }}>{p.year}</span>
 </div>
 </a>
 ))}
 </div>
 {filtered.length === 0 && (
 <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>No papers in this category.</p>
 )}
 </Section>
 <Section narrow className="text-center">
 <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
 Our research programme depends on support from donors and partners.
 </p>
 <div className="rv mt-5">
 <Link to="/donate" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Support our research
 </Link>
 </div>
 </Section>
 </>
 );
}
