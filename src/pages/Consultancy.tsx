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
      <Hero tag="Consultancy" title="Advisory that funds our independence." subtitle="Our consultancy services translate research into practical support for organisations, and the revenue funds our independent research programme." />
      <Section>
        <SplitSection image="/images/team-working.jpg">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>How Consultancy Works</h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We provide advisory, assessment, and training services to organisations across all sectors. Every engagement is delivered by the same researchers who produce our published work.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            The revenue from our consultancy funds our independent research, ensuring our findings remain uncompromised.
          </p>
        </SplitSection>
      </Section>
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>Our Services</h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="space-y-0">
          {services.map((s, i) => (
            <Link to={`/consultancy/${s.slug}`} key={s.slug} className="rv flex gap-5 py-6 border-b no-underline transition-all group" style={{ borderColor: "var(--dark-hairline)" }}>
              <span className="font-mono text-[1.25rem] md:text-[1.5rem] font-bold min-w-[48px] pt-0.5" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[0.95rem] font-semibold" style={{ color: "var(--dark-text)" }}>{s.title}</h3>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--orange)" }} />
                </div>
                <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          Interested in engaging our team? Every consultancy project directly supports independent research.
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
