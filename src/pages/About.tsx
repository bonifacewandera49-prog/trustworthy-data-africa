import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

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
        title="Trustworthy data. Protected throughout its journey."
        subtitle="Solid Elf is a Security and Data Research Firm working across the full data lifecycle: secure collection and systematic quality control, storage and management, processing, responsible use and disposal. We protect data and the systems that consume it, and assess whether its integrity and quality are sufficient for the intended end use."
      />

      <Section>
        <SplitSection eyebrow="What We Do">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Practical security services, data expertise and research
          </h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We provide consultancy, practical implementation and research across the methods, systems and decisions that shape data. We begin with how information is collected and checked, follow how it is stored, transformed and used, and define how it should be retained or disposed of. Security, quality and integrity are considered together at every handover.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            Our cybersecurity services include Incident Response (IR), Endpoint Protection, Identity and Access Management (IAM), Application Security Assessment and Security Hardening. We also deliver data analysis, governance frameworks, privacy engineering, secure tools and training, with implementation support agreed for each engagement.
          </p>
          <p className="mt-6 text-sm"><Link to="/consultancy" className="underline underline-offset-4" style={{color:"var(--orange)"}}>Explore our consultancy and services →</Link></p>
        </SplitSection>
      </Section>

      <Section>
        <SplitSection eyebrow="How We Work" reverse>
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Clear questions, defensible methods, useful outputs
          </h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            We define the decision or risk that matters before choosing a method. Service plans, assessments, models, and technical controls are designed around the evidence needed to make that decision with confidence.
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
        <div className="max-w-[800px] space-y-6">
          {principles.map((p) => (
            <div key={p.title} className="rv">
              <h3 className="text-base font-semibold mb-2" style={{color:"var(--dark-text)"}}>{p.title}</h3>
              <p className="text-[0.93rem] leading-relaxed" style={{color:"var(--dark-text-secondary)"}}>{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SplitSection eyebrow="The full data lifecycle">
          <h2 className="text-2xl font-semibold mb-6" style={{color:"var(--dark-text)"}}>Reliability is built across the whole pipeline.</h2>
          <p className="leading-relaxed mb-8">A secure system can still produce an unreliable decision if its source data is incomplete, its transformations are unclear or its output is misinterpreted. We connect quality control, threat assessment and research across every stage, for structured records, text, images, sensor readings and other data forms within the agreed scope.</p>
          <div className="space-y-7">{[
            ["Collect and verify", "Design suitable methods and capture systems, pilot instruments, train collectors and apply systematic checks for accuracy, completeness, consistency and provenance.", "/consultancy/secure-data-collection-quality-assurance"],
            ["Store and manage securely", "Protect data at rest and in transit. Define ownership, access, metadata, versioning, integrity checks and tested recovery processes.", "/consultancy/secure-data-storage-management"],
            ["Process and make sense of data", "Validate cleaning, integration and transformations. Protect data during processing and analysis, document uncertainty and assess fitness for the intended use.", "/consultancy/data-analytics-business-intelligence"],
            ["Protect consuming systems", "Assess applications, APIs, devices and identities that access data. Examine threats to confidentiality, integrity and availability across the pipeline.", "/consultancy/security-assessment-penetration-testing"],
            ["Use responsibly and transparently", "Examine fairness, interpretability and transparency in models and decisions. Make assumptions, limitations and accountability clear to the people using the results.", "/consultancy/ai-fairness-interpretability-audits"],
            ["Retain and dispose with control", "Define retention periods, review responsibilities and disposal policies, accounting for copies, backups and holds. Record what can be verified when data is deleted or sanitised.", "/consultancy/data-strategy-governance"]
          ].map(([title,body,to])=><div key={title}><h3 className="font-semibold text-lg mb-2" style={{color:"var(--dark-text)"}}><Link to={to} className="hover:underline underline-offset-4">{title}</Link></h3><p className="leading-relaxed">{body}</p></div>)}</div>
          <p className="mt-8 leading-relaxed">Our research investigates weaknesses and trade-offs throughout this journey. Our services turn the findings into collection protocols, quality controls, secure systems, dependable analysis and practical operating procedures.</p>
        </SplitSection>
      </Section>

      <Section><SplitSection eyebrow="An Engagement"><h2 className="text-2xl font-semibold mb-5" style={{color:"var(--dark-text)"}}>From the first question to a practical handover</h2><ol className="space-y-5">{[
["Understand the problem", "Agree the decision, the affected systems, and the people who need to use the result. Define scope, access, and confidentiality before the work begins."],
["Gather and assess evidence", "Review the relevant architecture, information flows, data, and working practices. Select research and testing methods that answer the agreed questions."],
["Turn findings into action", "Explain the evidence and its limitations. Prioritise the changes, assign responsibilities, and identify the resources needed to carry them out."],
["Support implementation", "Provide the documentation and handover needed to use the findings. Where agreed, support testing, training, and follow-up review."]
].map(([title,body])=><li key={title} className="flex gap-4"><div><h3 className="font-semibold mb-1" style={{color:"var(--dark-text)"}}>{title}</h3><p>{body}</p></div></li>)}</ol></SplitSection></Section>

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
