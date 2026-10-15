import { members } from "@/data/team";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";



export default function Team() {


 return (
 <>
 <Hero
 tag="Our Team"
 title="Expertise in Action"
 subtitle="A dedicated group of investigators and problem-solvers. We are committed to transparency, thorough research, and the continuous pursuit of emerging technological frontiers."
 />
 <Section>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {members.map((p) => (
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
 {p.category === "core_team" && (
 <div className="aspect-[4/3] overflow-hidden" style={{ background: "hsl(var(--muted))" }}>
 <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top" loading="lazy" />
 </div>
 )}
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
 <SplitSection eyebrow="Working Together">
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
 Interested in contributing to security and data research? Tell us about your expertise, interests, and the problems you want to work on.
 </p>
 <div className="rv mt-5">
 <Link to="/contact" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Start a conversation
 </Link>
 </div>
 </Section>
 </>
 );
}
