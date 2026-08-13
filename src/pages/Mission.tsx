import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

export default function Mission() {
 return (
 <>
 <Hero
 tag="Mission & Vision"
 title="What drives our work."
 subtitle="These commitments guide every research project, tool, dataset, and training programme we undertake. They are measured against our outputs, not displayed as aspirations."
 />
 <Section>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="rv rounded-lg p-7 border" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <h3 className="text-base font-semibold mb-2.5" style={{ color: "var(--orange)" }}>Our Mission</h3>
 <p style={{ color: "var(--dark-text)", lineHeight: 1.85 }}>
 To advance the science and practice of security, privacy, and responsible data use worldwide by building the tools, frameworks, and knowledge that protect data from the point of first collection through to final use.
 </p>
 </div>
 <div className="rv rounded-lg p-7 border" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <h3 className="text-base font-semibold mb-2.5" style={{ color: "var(--orange)" }}>Our Vision</h3>
 <p style={{ color: "var(--dark-text)", lineHeight: 1.85 }}>
 A world where data is collected with integrity, secured with rigour, governed with care, and used to build systems that serve people equitably.
 </p>
 </div>
 </div>
 </Section>
 <Section>
 <SplitSection image="/images/team-working.jpg">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 From Principle to Practice
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Every research project begins with a clear connection to these commitments. When we talk about integrity, it means our data collection protocols include verification at every stage.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 These commitments are what make our work useful to the governments, organisations, and research institutions that partner with us.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <SplitSection image="/images/security-ops.jpg" reverse>
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 Security and Governance for a Digital World
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Digital transformation is creating enormous demand for data security, governance, and skilled professionals.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 Our work sits at the intersection of that need: building tools, conducting research, and training the people who will maintain these systems.
 </p>
 </SplitSection>
 </Section>
 </>
 );
}
