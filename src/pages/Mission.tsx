import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

export default function Mission() {
 return (
 <>
 <Hero
 tag="Mission & Vision"
 title="What drives our work."
 subtitle="These commitments guide every research project, tool, dataset, and training programme we undertake. They shape how we define questions, evaluate evidence, and translate findings into useful action."
 />
 <Section>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="rv rounded-lg p-7 border" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <h3 className="text-base font-semibold mb-2.5" style={{ color: "var(--orange)" }}>Our Mission</h3>
 <p style={{ color: "var(--dark-text)", lineHeight: 1.85 }}>
 To advance the science and practice of security, privacy, and responsible data use worldwide by building the tools, frameworks, and knowledge that protect data from the point of first collection through processing and use to controlled disposal.
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
 <SplitSection eyebrow="Our Mission">
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 From Principle to Practice
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Every service, implementation and research project begins with a clear connection to these commitments. When we talk about integrity, it means our data collection protocols include verification at every stage.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 These commitments are what make our work useful to the governments, organisations, and research institutions that partner with us.
 </p>
 </SplitSection>
 </Section>
 <Section>
 <SplitSection eyebrow="Our Vision" reverse>
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
 <Section><SplitSection eyebrow="Our Commitments"><h2 className="text-2xl font-semibold mb-6" style={{color:"var(--dark-text)"}}>What these principles mean in practice</h2><div className="space-y-6">{[
 ["Protect people as well as systems", "Consider the people represented in a dataset and affected by a decision. Minimise unnecessary collection, restrict access, and make the purpose of data use clear."],
 ["Make evidence reviewable", "Document assumptions, methods, and limitations. Distinguish what the evidence supports from what remains uncertain, so decisions can be challenged and improved."],
 ["Build for the operating environment", "Account for connectivity, available skills, maintenance, and the cost of change. Recommendations should fit the people who will operate the system."],
 ["Leave capability behind", "Provide clear documentation, practical handover, and learning materials so the organisation can maintain improvements beyond the engagement."]
 ].map(([title,body])=><div key={title} className="border-b pb-5" style={{borderColor:"var(--dark-hairline)"}}><h3 className="font-semibold mb-2" style={{color:"var(--dark-text)"}}>{title}</h3><p className="leading-relaxed">{body}</p></div>)}</div></SplitSection></Section>
 </>
 );
}
