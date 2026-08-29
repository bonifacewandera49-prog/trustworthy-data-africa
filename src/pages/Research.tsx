import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";
import WavePattern from "@/components/WavePattern";

const papers = [
 { id: 1, title: "Differential Privacy for Mobile Health Data Collection in Low-Resource Environments", journal: "IEEE Security & Privacy", year: 2026, authors: "Okonkwo A., Mensah K., Diallo F.", tag: "Privacy & Security", url: "#" },
 { id: 2, title: "Automated Quantum Circuit Search for Hybrid Classical-Quantum Classification", journal: "Nature Quantum Information", year: 2025, authors: "Nkrumah S., Diallo F.", tag: "Quantum Computing", url: "#" },
 { id: 3, title: "Phishing Ecosystem Dynamics in West African Mobile Money Platforms", journal: "ACM CCS", year: 2025, authors: "Mensah K., Moyo T.", tag: "Cybersecurity", url: "#" },
 { id: 4, title: "Synthetic Data Generation for Smallholder Agricultural Yield Prediction", journal: "NeurIPS", year: 2025, authors: "Nkrumah S., Dlamini Z.", tag: "Synthetic Data", url: "#" },
 { id: 5, title: "Cross-Border Data Governance Frameworks for the African Union", journal: "Data & Policy", year: 2024, authors: "Bello A., Okonkwo A.", tag: "Data Governance", url: "#" },
 { id: 6, title: "Explainable AI for Credit Scoring in Resource-Constrained Settings", journal: "FAccT", year: 2024, authors: "Habimana J.-P., Eze N.", tag: "AI Fairness", url: "#" },
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
 <div className="relative aspect-[16/9] flex flex-col items-center justify-center gap-2 overflow-hidden" style={{ background: "linear-gradient(155deg, var(--dark-surface) 0%, var(--dark-elevated) 100%)" }}>
 <div className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"><WavePattern opacity={0.08} /></div>
 <FileText className="relative z-[1] w-6 h-6" style={{ color: "var(--orange)", opacity: 0.6 }} />
 <span className="relative z-[1] font-mono text-[0.62rem] tracking-widest uppercase" style={{ color: "var(--dark-text-muted)" }}>{p.tag}</span>
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
 Our research programme is sustained through consultancy engagements, grants, and institutional partnerships.
 </p>
 <div className="rv mt-5">
 <Link to="/partnerships" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Partner with us
 </Link>
 </div>
 </Section>
 </>
 );
}
