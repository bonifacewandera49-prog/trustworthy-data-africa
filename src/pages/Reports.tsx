import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";

const reports = [
 { id: 1, title: "State of Cybersecurity Threats in African Financial Services 2025", description: "A comprehensive analysis of threat patterns affecting mobile money platforms, agent banking networks, and digital lending services across the continent.", tag: "Threat Intelligence", year: 2025, cover_image: "/images/security-ops.jpg", pdf_url: "#", zenodo_url: "#" },
 { id: 2, title: "Data Governance Framework for Cross-Border Health Information Sharing", description: "Proposed governance structures and technical protocols for secure health data exchange between African Union member states.", tag: "Data Governance", year: 2025, cover_image: "/images/fieldwork.jpg", pdf_url: "#", zenodo_url: "#" },
 { id: 3, title: "Fairness Auditing of Automated Credit Scoring Systems in East Africa", description: "Results from independent audits of algorithmic lending systems deployed across Kenya, Tanzania, and Uganda.", tag: "AI Fairness", year: 2024, cover_image: "/images/about-lab.jpg", pdf_url: "#", zenodo_url: "#" },
 { id: 4, title: "Quantum ML Readiness Assessment for African Research Institutions", description: "An evaluation of infrastructure, skills, and research priorities for quantum machine learning adoption.", tag: "Quantum Computing", year: 2025, cover_image: "/images/qkabrine.jpg", pdf_url: "#", zenodo_url: "#" },
 { id: 5, title: "Mobile Data Collection Security: A Field Practitioner's Guide", description: "Practical guidance for securing data collection in low-connectivity, low-resource environments.", tag: "Field Security", year: 2024, cover_image: "/images/data-lifecycle.jpg", pdf_url: "#", zenodo_url: "#" },
 { id: 6, title: "Synthetic Data Generation Methods for Healthcare Privacy", description: "Technical methodology and validation results for generating privacy-preserving synthetic health datasets.", tag: "Privacy Engineering", year: 2025, cover_image: "/images/canarydrop.jpg", pdf_url: "#", zenodo_url: "#" },
];

const allCategories = ["All", ...Array.from(new Set(reports.map((r) => r.tag)))];

export default function Reports() {
 const [activeCategory, setActiveCategory] = useState("All");
 const filtered = activeCategory === "All" ? reports : reports.filter((r) => r.tag === activeCategory);

 return (
 <>
 <Hero tag="Reports" title="Strategic Intelligence" subtitle="Detailed documentation of our operational milestones, research outcomes, and system evaluations. We believe in transparency through rigorous reporting." />
 <Section>
 <FilterDropdown
 categories={allCategories}
 active={activeCategory}
 onChange={setActiveCategory}
 />
 <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
 {filtered.map((r) => (
 <div key={r.id} className="rv rounded-lg overflow-hidden border transition-colors" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <div className="aspect-[16/9] flex items-center justify-center overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
 {r.cover_image ? <img src={r.cover_image} alt={r.title} loading="lazy" className="w-full h-full object-cover" style={{ opacity: 0.55 }} /> : <span className="text-xs font-mono" style={{ color: "var(--dark-text-muted)" }}>Report</span>}
 </div>
 <div className="p-5">
 <span className="font-mono text-[0.66rem] tracking-widest uppercase mb-2 block" style={{ color: "var(--orange)" }}>{r.tag}</span>
 <h3 className="text-[0.9rem] font-semibold mb-2 leading-snug" style={{ color: "var(--dark-text)" }}>{r.title}</h3>
 <p className="text-[0.8rem] leading-relaxed line-clamp-2 mb-2.5" style={{ color: "var(--dark-text-muted)" }}>{r.description}</p>
 <div className="font-mono text-[0.68rem] flex justify-between items-center" style={{ color: "var(--dark-text-muted)" }}>
 <span>{r.year}</span>
 <div className="flex gap-3">
 {r.pdf_url && <a href={r.pdf_url} target="_blank" rel="noopener noreferrer" className="font-semibold no-underline hover:underline" style={{ color: "var(--orange)" }}>PDF &rarr;</a>}
 {r.zenodo_url && <a href={r.zenodo_url} target="_blank" rel="noopener noreferrer" className="font-semibold no-underline hover:underline" style={{ color: "var(--orange)" }}>Zenodo &rarr;</a>}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 {filtered.length === 0 && (
 <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>No reports in this category.</p>
 )}
 </Section>
 </>
 );
}
