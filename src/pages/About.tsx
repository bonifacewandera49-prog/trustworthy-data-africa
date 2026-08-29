import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import PartnersSection from "@/components/PartnersSection";

const principles = [
 { title: "Integrity First", description: "Every method, tool, finding, and dataset we produce is held to a rigorous standard." },
 { title: "Built for Reality", description: "Our work starts from the realities of diverse data environments, including local infrastructure, threat landscapes, and connectivity conditions." },
 { title: "Security by Default", description: "Cybersecurity is woven into every layer of what we build, from data collection through to deployed systems." },
 { title: "Knowledge That Transfers", description: "Everything we undertake is designed to build lasting capacity." },
 { title: "Global Reach, Local Relevance", description: "We are a global lab producing work rooted in real-world contexts meeting international standards." },
 { title: "Multidisciplinary by Necessity", description: "Data challenges do not respect sector boundaries. We work across disciplines because the problems require it." },
];

export default function About() {
 return (
 <>
 <Hero
 tag="About Solid Elf"
 title="A global lab for cybersecurity and data."
 subtitle="We defend systems, secure data, and develop the methods of tomorrow. By training the teams that sustain these defenses, we produce work rooted in real-world impact and held to rigorous international standards."
 />
 <Section>
 <SplitSection eyebrow="Field Practice">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 How We Work
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Data flows through an extraordinary range of channels. Health facilities running paper records alongside digital systems, mobile money platforms processing millions of transactions daily, agricultural extension workers collecting yield data on feature phones.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 That close engagement with how data actually moves, where it needs protection, and what organisations need to manage it responsibly is what defines our approach.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <SplitSection eyebrow="Our People" reverse>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 We combine research and practice in a way that keeps both grounded. Our researchers contribute directly to tool development, threat intelligence, and field deployment, and the challenges we encounter in the field feed back into our published research.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 Our datasets are released openly, our tools are built for real conditions, and our publications are peer-reviewed.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <h2 className="rv font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 What Guides Us
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 {principles.map((p) => (
 <div
 key={p.title}
 className="rv p-6 rounded-lg border transition-all"
 style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}
 onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(217,83,30,0.2)")}
 onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--dark-hairline)")}
 >
 <h3 className="text-[0.88rem] font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>{p.title}</h3>
 <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>{p.description}</p>
 </div>
 ))}
 </div>
 </Section>
 <Section>
 <SplitSection eyebrow="The Lab">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 Research, Tools, Training & Open Data
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Our approach combines deep research with practical tool development, hands-on training, and open knowledge sharing.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 Strengthening data security and governance requires better technology, better-trained teams, stronger frameworks, and open resources.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <PartnersSection />
 </Section>

 <Section narrow className="text-center">
 <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
 Our research and tools help governments, organisations, and partners stay secure and make better decisions with their data. We welcome grants, contracts, and institutional partnerships that help us do more of it.
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
