import { useState } from "react";
import { Link } from "react-router-dom";
import { Database } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import FilterDropdown from "@/components/FilterDropdown";
import WavePattern from "@/components/WavePattern";

const datasets = [
 { id: 1, title: "African Mobile Money Transaction Patterns (Synthetic)", description: "Synthetic dataset modelled on real mobile money transaction patterns across East and West Africa.", tag: "Synthetic", status: "Available", zenodo_url: "#", doi: "10.5281/zenodo.1234567" },
 { id: 2, title: "Rural Health Facility Data Collection Protocols Dataset", description: "Structured data from health facility surveys, including paper-to-digital translation examples.", tag: "Field Collected", status: "Available", zenodo_url: "#", doi: "10.5281/zenodo.2345678" },
 { id: 3, title: "Phishing Corpus: French-Language Threat Vectors Targeting African Institutions", description: "Annotated collection of phishing materials targeting government and financial institutions.", tag: "Translated", status: "In Progress", zenodo_url: "#", doi: "10.5281/zenodo.3456789" },
 { id: 4, title: "Smallholder Farming Yield Data: Structured & Anonymised", description: "Cleaned agricultural yield data from smallholder farms across four African countries.", tag: "Field Collected", status: "Available", zenodo_url: "#", doi: "10.5281/zenodo.4567890" },
 { id: 5, title: "Quantum Circuit Benchmark Suite for Classification Tasks", description: "Standardised quantum circuit designs evaluated across multiple classification datasets.", tag: "Synthetic", status: "Available", zenodo_url: "#", doi: "10.5281/zenodo.5678901" },
 { id: 6, title: "Government Portal Security Assessment Dataset", description: "Anonymised security assessment results from government digital service portals across 12 countries.", tag: "Field Collected", status: "Available", zenodo_url: "#", doi: "10.5281/zenodo.6789012" },
];

const allCategories = ["All", ...Array.from(new Set(datasets.map((d) => d.tag)))];

export default function DatasetsPage() {
 const [activeCategory, setActiveCategory] = useState("All");
 const filtered = activeCategory === "All" ? datasets : datasets.filter((d) => d.tag === activeCategory);

 return (
 <>
 <Hero tag="Datasets" title="Open Datasets" subtitle="Cleaned, structured, and documented datasets curated for machine learning, economic modeling, and technical analysis. Built to support reproducible research and robust model training." actions={[{ label: "Browse on Zenodo", to: "https://zenodo.org" }]} />
 <Section>
 <SplitSection eyebrow="Open Data">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>Collected, Translated, and Synthetic</h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Access to representative, high-quality datasets is one of the most important enablers for better research, better policy, and better systems.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 Our datasets take three forms: field-collected data, translated and structured data rescued from poorly formatted sources, and synthetic data modelled on real environments.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <div className="mb-8">
 <h2 className="font-mono text-[0.75rem] font-semibold tracking-widest uppercase mb-1" style={{ color: "var(--dark-text-muted)" }}>Available Datasets</h2>
 <p className="text-[0.85rem]" style={{ color: "var(--dark-text-muted)" }}>Browse our open datasets, each released with a DOI on Zenodo for proper citation.</p>
 </div>
 <FilterDropdown
 categories={allCategories}
 active={activeCategory}
 onChange={setActiveCategory}
 />
 <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
 {filtered.map((d) => (
 <div key={d.id} className="rv rounded-xl overflow-hidden border transition-all group" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <div className="relative aspect-[16/9] flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(155deg, var(--dark-surface) 0%, var(--dark-elevated) 100%)" }}>
 <div className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"><WavePattern opacity={0.08} /></div>
 <Database className="relative z-[1] w-8 h-8" style={{ color: "var(--orange)", opacity: 0.55 }} />
 </div>
 <div className="p-5">
 <div className="flex items-center gap-3 mb-2.5 flex-wrap">
 <span className="font-mono text-[0.62rem] tracking-widest uppercase" style={{ color: "var(--orange)" }}>{d.tag}</span>
 <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] tracking-widest uppercase" style={{ color: d.status === "Available" ? "#4ade80" : "#fbbf24" }}>
 <span className="w-[5px] h-[5px] rounded-full" style={{ background: d.status === "Available" ? "#4ade80" : "#fbbf24" }} />
 {d.status}
 </span>
 </div>
 <h3 className="text-[0.9rem] font-semibold mb-1.5 leading-snug" style={{ color: "var(--dark-text)" }}>{d.title}</h3>
 <p className="text-[0.8rem] leading-relaxed line-clamp-2 mb-3" style={{ color: "var(--dark-text-muted)" }}>{d.description}</p>
 <div className="flex gap-3 font-mono text-[0.68rem]">
 {d.zenodo_url && <a href={d.zenodo_url} target="_blank" rel="noopener noreferrer" className="font-semibold no-underline hover:underline" style={{ color: "var(--orange)" }}>Zenodo &rarr;</a>}
 {d.doi && <span style={{ color: "var(--dark-text-muted)" }}>DOI: {d.doi}</span>}
 </div>
 </div>
 </div>
 ))}
 </div>
 {filtered.length === 0 && (
 <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>No datasets in this category.</p>
 )}
 </Section>
 <Section>
 <div className="liquid-glass p-7 text-center">
 <Database className="w-8 h-8 mx-auto mb-3 opacity-70" style={{ color: "var(--orange)" }} />
 <p className="text-[0.93rem] leading-[1.85] max-w-[600px] mx-auto mb-4" style={{ color: "var(--dark-text-secondary)" }}>
 All datasets are released under open licenses. Cite using the DOI provided with each dataset.
 </p>
 <div className="flex gap-2.5 justify-center flex-wrap">
 <a href="https://zenodo.org" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>Zenodo Archive</a>
 <Link to="/contact" className="inline-block border px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-all" style={{ background: "hsl(var(--muted))", borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }}
 onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.color = "var(--dark-text)"; }}
 onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--dark-hairline)"; e.currentTarget.style.color = "var(--dark-text-secondary)"; }}>Dataset enquiries</Link>
 </div>
 </div>
 </Section>
 </>
 );
}
