import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const services = [
  { slug: "security-assessment-penetration-testing", title: "Security Assessment & Penetration Testing", desc: "Comprehensive security evaluations of data infrastructure, applications, and workflows." },
  { slug: "privacy-engineering-compliance", title: "Privacy Engineering & Compliance", desc: "Practical support for implementing data protection legislation." },
  { slug: "data-strategy-governance", title: "Data Strategy & Governance", desc: "Frameworks for managing data assets securely across their lifecycle." },
  { slug: "ai-fairness-interpretability-audits", title: "AI Fairness & Interpretability Audits", desc: "Independent evaluations of automated decision-making systems." },
  { slug: "custom-training-programmes", title: "Custom Training Programmes", desc: "Cybersecurity, privacy, and data handling training tailored to organisational context." },
  { slug: "bespoke-tool-development", title: "Bespoke Tool Development", desc: "Custom data collection, security, and analytics tools built for specific requirements." },
];

export default function Consultancy() {
  return (
    <>
      <Hero tag="Consultancy" title="Clearer decisions. Stronger systems." subtitle="Practical security, privacy and data expertise—from identifying risk to implementing a workable response. Start with a defined challenge and leave with an actionable next step." actions={[{label:"Discuss your project",to:"/contact"}]} />
      <Section>
        <SplitSection eyebrow="Advisory">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>How Consultancy Works</h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We scope each engagement around your systems, operating constraints and decisions. That may mean assessing an application before launch, improving data governance, or helping a team build practical security skills.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            Before work begins, we agree the scope, authorised access, deliverables and points of review. Findings should be understandable to decision-makers and specific enough for the people implementing the changes.
          </p>
        </SplitSection>
      </Section>
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>Our Services</h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="practice-grid">
          {services.map((s, i) => (
            <Link to={`/consultancy/${s.slug}`} key={s.slug} className="rv practice-card flex gap-5 no-underline group" style={{ borderColor: "var(--dark-hairline)" }}>
              <span className="font-mono text-[1.25rem] md:text-[1.5rem] font-bold min-w-[48px] pt-0.5" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[0.95rem] font-semibold" style={{ color: "var(--dark-text)" }}>{s.title}</h3>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--orange)" }} />
                </div>
                <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>{s.desc}</p><p className="text-xs leading-relaxed mt-4" style={{color:"var(--dark-text-secondary)"}}><span style={{color:"var(--orange)"}}>Typical outputs</span><br />{["Prioritised findings, remediation guidance and agreed retesting.","Data-flow review, privacy controls and an implementation plan.","Ownership model, lifecycle policies and a prioritised roadmap.","Evaluation plan, documented limitations and improvement options.","Role-specific exercises, learning materials and an evaluation.","A scoped prototype, technical documentation and handover."][i]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{color:"var(--orange)"}}>The engagement</p>
        <h2 className="text-3xl font-semibold mb-9">A clear process, from question to action.</h2>
        <div className="engagement-steps">
          <div><span style={{color:"var(--orange)"}}>01 / Define</span><h3>Agree the problem</h3><p>Identify the system, decision and people involved. Set boundaries, access permissions and useful success criteria.</p></div>
          <div><span style={{color:"var(--orange)"}}>02 / Examine</span><h3>Build the evidence</h3><p>Review, test or prototype within the agreed scope. Share material findings early and validate them with your team.</p></div>
          <div><span style={{color:"var(--orange)"}}>03 / Apply</span><h3>Make the next step practical</h3><p>Present prioritised recommendations, explain the trade-offs and agree the handover or follow-up work.</p></div>
        </div>
      </Section>
      <Section narrow>
        <h2 className="text-2xl font-semibold mb-7">Before we begin</h2>
        <div className="space-y-5">
          <details className="practice-card"><summary className="cursor-pointer font-semibold">What should we bring to the first conversation?</summary><p className="text-sm leading-7 mt-4">A brief description of the challenge, the systems or data involved, your intended timeline and the decision you need to make. Please avoid sending credentials or sensitive datasets through the contact form.</p></details>
          <details className="practice-card"><summary className="cursor-pointer font-semibold">Can we start with a focused assessment?</summary><p className="text-sm leading-7 mt-4">A bounded review can help establish priorities before a larger programme. Scope, availability, cost and deliverables are agreed before an engagement starts.</p></details>
          <details className="practice-card"><summary className="cursor-pointer font-semibold">How are testing boundaries handled?</summary><p className="text-sm leading-7 mt-4">Security testing requires explicit authorisation and agreed rules of engagement, including the systems in scope, testing window, operational contacts and stop conditions.</p></details>
        </div>
      </Section>
      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          Tell us what you need to understand, improve or build. We can begin by defining a useful scope together.
        </p>
        <div className="rv mt-5">
          <Link to="/contact" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
            Get in touch
          </Link>
        </div>
      </Section>
    </>
  );
}
