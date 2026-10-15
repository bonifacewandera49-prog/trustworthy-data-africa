import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

import { consultancyPractices as services } from "@/data/practices";

export default function Consultancy() {
  return (
    <>
      <Hero tag="Consultancy and Services" image="/images/editorial/consultancy-relevant.webp" title="Secure data. Reliable systems. From collection to use." subtitle="Secure data collection and quality assurance, storage and management, processing and analytics, cybersecurity, responsible AI and lifecycle governance—from the first record to controlled disposal." actions={[{label:"Discuss your project",to:"/contact"}]} />
      <Section>
        <SplitSection eyebrow="Advisory">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>How Consultancy Works</h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We scope each engagement around the full journey of your data and its intended use. Start with a focused collection or quality-control requirement, secure storage, processing and analysis, or assessment of a consuming application. We identify dependencies on the other stages so improvements remain useful beyond a single system.
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
          {services.map((s) => (
            <Link to={`/consultancy/${s.slug}`} key={s.slug} className="rv practice-card flex gap-5 no-underline group" style={{ borderColor: "var(--dark-hairline)" }}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[0.95rem] font-semibold" style={{ color: "var(--dark-text)" }}>{s.title}</h3>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--orange)" }} />
                </div>
                <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>{s.desc}</p><p className="text-xs leading-relaxed mt-4" style={{color:"var(--dark-text-secondary)"}}><span style={{color:"var(--orange)"}}>Typical outputs</span><br />{s.outputs.slice(0,2).join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{color:"var(--orange)"}}>The engagement</p>
        <h2 className="text-3xl font-semibold mb-9">A clear process, from question to action.</h2>
        <div className="engagement-steps">
          <div><span style={{color:"var(--orange)"}}>Define</span><h3>Agree the problem</h3><p>Identify the system, decision and people involved. Set boundaries, access permissions and useful success criteria.</p></div>
          <div><span style={{color:"var(--orange)"}}>Examine</span><h3>Build the evidence</h3><p>Review, test or prototype within the agreed scope. Share material findings early and validate them with your team.</p></div>
          <div><span style={{color:"var(--orange)"}}>Apply</span><h3>Make the next step practical</h3><p>Present prioritised recommendations, explain the trade-offs and agree the handover or follow-up work.</p></div>
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
