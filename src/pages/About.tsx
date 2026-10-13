import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import PartnersSection from "@/components/PartnersSection";

const principles = [
  { title: "Integrity First", description: "Every method, tool, finding, and dataset we produce is held to a rigorous and reviewable standard." },
  { title: "Built for Reality", description: "We design for the infrastructure, workflows, threat models, regulatory obligations, and operational constraints organisations actually face." },
  { title: "Security by Default", description: "Security and privacy are treated as design requirements from first collection through storage, analysis, sharing, and disposal." },
  { title: "Evidence Over Assumption", description: "Our recommendations are grounded in observed behaviour, measurable risk, documented methods, and reproducible analysis." },
  { title: "Knowledge That Transfers", description: "We build internal capability through clear documentation, training, and systems that teams can maintain after an engagement ends." },
  { title: "Multidisciplinary by Necessity", description: "Security and data problems cross technical, organisational, legal, and human boundaries, so our work does too." },
];

export default function About() {
  return (
    <>
      <Hero
        tag="About Solid Elf"
        title="A security and data research firm built for complex systems."
        subtitle="Solid Elf combines applied research, security engineering, data practice, and organisational capacity building. We help teams understand risk, strengthen critical systems, govern sensitive information, and make better decisions from trustworthy evidence."
      />

      <Section>
        <SplitSection eyebrow="What We Do">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Research that moves into practice
          </h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            Our work begins with the system as it really operates: how information is collected, where it moves, who can access it, which decisions depend on it, and what can go wrong. We then combine technical assessment, research, data analysis, and practical implementation support to address the most important weaknesses.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            That may mean reviewing an organisation's security posture, designing a data governance framework, testing a digital service, developing a privacy-preserving workflow, analysing operational data, or building tools that make a recurring process safer and more reliable.
          </p>
        </SplitSection>
      </Section>

      <Section>
        <SplitSection eyebrow="How We Work" reverse>
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Clear questions, defensible methods, useful outputs
          </h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We define the decision or risk that matters before choosing a method. Research plans, assessments, models, and technical controls are designed around the evidence needed to make that decision with confidence.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            Deliverables are designed to be used: concise executive findings, technical documentation, implementation roadmaps, reusable datasets, training materials, prototypes, or production-ready tools depending on the engagement.
          </p>
        </SplitSection>
      </Section>

      <Section>
        <h2 className="rv font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
          What Guides Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div key={p.title} className="rv p-6 rounded-lg border transition-all" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
              <h3 className="text-[0.88rem] font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>{p.title}</h3>
              <p className="text-[0.8rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SplitSection eyebrow="Our Model">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Security, data research, tools, and capability
          </h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            Solid Elf operates across four connected areas: security advisory and testing, applied data research, practical tool development, and training. Treating these areas together helps us avoid recommendations that are technically sound but operationally unrealistic.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            We work with organisations that need independent thinking and practical execution, from focused assessments to longer research and implementation programmes.
          </p>
        </SplitSection>
      </Section>

      <Section><PartnersSection /></Section>

      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          If you are strengthening a sensitive system, launching a data-intensive service, or need independent research to guide a difficult decision, we can help define the problem and build a practical path forward.
        </p>
        <div className="rv mt-5">
          <Link to="/partnerships" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>
            Partner with us
          </Link>
        </div>
      </Section>
    </>
  );
}
