import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const tabs = [
 { value: "core_team", label: "Core Team" },
 { value: "researchers", label: "Researchers" },
 { value: "students", label: "Students" },
 { value: "alumni", label: "Alumni" },
];

const members = [
 { id: "d1", name: "Eric Jagwara", role: "Founder & Director", bio: "Sets research strategy and institutional direction. Leads the lab's overall vision across security, data, and product.", image: "/images/team/eric-jagwara.jpg", category: "core_team" },
 { id: "d2", name: "Prof. Yawe Bruno Lule", role: "Principal Consultant", bio: "Provides academic and research oversight, drawing on a background in higher education and applied research supervision.", image: "/images/team/yawe-bruno-lule.jpg", category: "core_team" },
 { id: "d3", name: "Dr. Abubakhari Sserwadda", role: "Head of Data & Cybersecurity", bio: "Leads security research and the data protection agenda, overseeing threat intelligence and secure systems design.", image: "/images/team/abubakhari-sserwadda.webp", category: "core_team" },
 { id: "d4", name: "Soddo Paul", role: "Head of Embedded Systems & Firmware", bio: "Directs embedded systems and firmware development for the lab's field and hardware-facing research tools.", image: "/images/team/soddo-paul.jpg", category: "core_team" },
 { id: "d5", name: "Irene Akitwi", role: "Head of Computational Social Science & Product Strategy", bio: "Leads computational social science research and shapes product strategy, connecting research findings to real-world deployment.", image: "/images/team/irene-akitwi.webp", category: "core_team", link: "https://www.researchgate.net/profile/Irene-Akitwi-2" },
 { id: "d6", name: "Dr. Nkechi Eze", role: "Senior Researcher - AI Fairness", bio: "Investigates bias in machine learning models deployed across African healthcare and financial systems.", image: "/images/qkabrine.jpg", category: "researchers" },
 { id: "d7", name: "Tendai Moyo", role: "Researcher - Threat Intelligence", bio: "Tracks phishing and social engineering campaigns targeting African mobile money platforms and government portals.", image: "/images/canarydrop.jpg", category: "researchers" },
 { id: "d8", name: "Amina Bello", role: "Researcher - Data Governance", bio: "Focuses on policy frameworks for cross-border data sharing and compliance with African data protection regulations.", image: "/images/data-lifecycle.jpg", category: "researchers" },
 { id: "d9", name: "Jean-Pierre Habimana", role: "Researcher - Interpretability", bio: "Works on making automated decision-making systems explainable for regulators and affected communities.", image: "/images/default-thumbnail.jpg", category: "researchers" },
 { id: "d10", name: "Grace Achieng", role: "Graduate Fellow - Privacy Engineering", bio: "Researching privacy-preserving techniques for mobile health data collection in rural East Africa.", image: "/images/fieldwork.jpg", category: "students" },
 { id: "d11", name: "Moussa Traore", role: "Research Intern - Security", bio: "Contributing to phishing simulation engine with a focus on French-language threat vectors.", image: "/images/security-ops.jpg", category: "students" },
 { id: "d12", name: "Zinhle Dlamini", role: "Graduate Fellow - Data Science", bio: "Building quality assurance models for multi-channel data ingestion pipeline.", image: "/images/data-lifecycle.jpg", category: "students" },
 { id: "d13", name: "Dr. Oluwaseun Adeyemi", role: "Former Lead Researcher (2021–2024)", bio: "Now heads data governance at the West African Health Organisation. Led our foundational privacy engineering research.", image: "/images/about-lab.jpg", category: "alumni" },
 { id: "d14", name: "Esther Wanjiku", role: "Former Research Intern (2023)", bio: "Currently pursuing a PhD in cybersecurity at the University of Cape Town. Co-authored two of our published papers.", image: "/images/team-working.jpg", category: "alumni" },
];

export default function Team() {
 const [activeTab, setActiveTab] = useState("core_team");
 const filtered = members.filter((m) => m.category === activeTab);

 return (
 <>
 <Hero
 tag="Our Team"
 title="Expertise in Action"
 subtitle="A dedicated group of investigators and problem-solvers. We are committed to transparency, thorough research, and the continuous pursuit of emerging technological frontiers."
 />
 <Section>
 <div className="flex flex-wrap gap-2 mb-8">
 {tabs.map((tab) => (
 <button
 key={tab.value}
 onClick={() => setActiveTab(tab.value)}
 className="px-4 py-2 rounded-lg text-sm font-medium transition-colors border cursor-pointer"
 style={
 activeTab === tab.value
 ? { background: "var(--orange)", color: "var(--dark-text)", borderColor: "var(--orange)" }
 : { background: "transparent", color: "var(--dark-text-muted)", borderColor: "var(--dark-hairline)" }
 }
 >
 {tab.label}
 </button>
 ))}
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
 {filtered.map((p) => (
 <div
 key={p.id}
 className="rv rounded-lg overflow-hidden border transition-all"
 style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}
 onMouseEnter={(e) => {
 e.currentTarget.style.borderColor = "rgba(217,83,30,0.2)";
 e.currentTarget.style.transform = "translateY(-2px)";
 e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
 }}
 onMouseLeave={(e) => {
 e.currentTarget.style.borderColor = "var(--dark-hairline)";
 e.currentTarget.style.transform = "none";
 e.currentTarget.style.boxShadow = "none";
 }}
 >
 <div className="aspect-square overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
 <img src={p.image} alt={p.name} className="w-full h-full object-cover" style={{ opacity: p.category === "core_team" ? 1 : 0.5 }} />
 </div>
 <div className="p-5">
 {p.link ? (
 <a href={p.link} target="_blank" rel="noopener noreferrer" className="no-underline">
 <h3 className="text-[0.92rem] font-semibold mb-0.5 hover:underline" style={{ color: "var(--dark-text)" }}>{p.name}</h3>
 </a>
 ) : (
 <h3 className="text-[0.92rem] font-semibold mb-0.5" style={{ color: "var(--dark-text)" }}>{p.name}</h3>
 )}
 <span className="font-mono text-[0.7rem] mb-2.5 block" style={{ color: "var(--orange)" }}>{p.role}</span>
 <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>{p.bio}</p>
 </div>
 </div>
 ))}
 </div>
 </Section>
 <Section>
 <SplitSection image="/images/team-working.jpg">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 How We Work
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Our team is organised around research questions rather than departmental hierarchies. Every researcher contributes to tool development and field operations.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 We recruit from across the world and prioritise candidates who bring direct experience with the data environments our work addresses.
 </p>
 </SplitSection>
 </Section>
 <Section narrow className="text-center">
 <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
 Interested in joining our team? We offer research internships and graduate fellowships.
 </p>
 <div className="rv mt-5">
 <Link to="/apply" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Apply now
 </Link>
 </div>
 </Section>
 </>
 );
}
