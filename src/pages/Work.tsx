import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const areas = [
  { slug: "data-collection-translation-integrity", title: "Data Collection, Translation & Integrity", desc: "Data enters systems through USSD, SMS, paper records, field enumerators, community networks, and informal channels. We design secure collection protocols, translate and structure data from hard-to-use sources, and train field teams." },
  { slug: "cybersecurity-threat-intelligence", title: "Cybersecurity & Threat Intelligence", desc: "Security threats affecting organisations follow distinct patterns shaped by local platforms, languages, and social engineering methods. We gather intelligence, develop tools like CanaryDrop, and deliver training." },
  { slug: "privacy-engineering-data-protection", title: "Privacy Engineering & Data Protection", desc: "We help organisations translate data protection legislation into practical engineering decisions through synthetic data, differential privacy, secure computation, and compliance training." },
  { slug: "ai-machine-learning-fairness", title: "AI, Machine Learning & Fairness", desc: "We build models suited to diverse data conditions through Qkabrine, conduct fairness audits, and develop interpretability tools so organisations can understand and explain automated decisions." },
  { slug: "quantum-machine-learning", title: "Quantum Machine Learning", desc: "We explore the intersection of quantum computing and machine learning, developing quantum circuit architectures, hybrid classical-quantum models, and automated quantum hyperparameter optimisation through Qkabrine." },
  { slug: "interpretability-explainability", title: "Interpretability & Explainability", desc: "When organisations deploy systems that make consequential decisions, they need to understand and explain how those systems reach their conclusions." },
  { slug: "blockchain-emerging-technology", title: "Blockchain & Emerging Technology Assessment", desc: "We conduct rigorous, independent assessments of emerging technologies proposed for real-world contexts, evaluating performance under local conditions." },
  { slug: "data-governance-policy", title: "Data Governance & Policy Research", desc: "We produce peer-reviewed research and frameworks that inform data governance policy globally." },
  { slug: "training-capacity-building", title: "Training & Capacity Building", desc: "Every training programme is built from our active research and tailored to participant contexts, covering cybersecurity, privacy engineering, safe data collection, and threat awareness." },
];

export default function Work() {
  return (
    <>
      <Hero tag="Core Activities" title="From first collection to final decision." subtitle="Our work covers the full data lifecycle because data security, privacy, and governance challenges are connected at every stage." />
      <Section>
        <SplitSection image="/images/canarydrop.jpg">
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>The Full Data Lifecycle</h2>
          <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
            Consider the journey of a single health record. It may be captured on paper in a rural clinic, digitised by a field worker, transmitted over a mobile network, stored in a government database, and eventually used to inform treatment decisions.
          </p>
          <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
            We work across all these stages because addressing any one of them in isolation produces incomplete results.
          </p>
        </SplitSection>
      </Section>
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>
            Our Research and Practice Areas
          </h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="space-y-0">
          {areas.map((a, i) => (
            <Link
              to={`/work/${a.slug}`}
              key={a.slug}
              className="rv flex gap-5 py-6 border-b no-underline transition-all group"
              style={{ borderColor: "var(--dark-hairline)" }}
            >
              <span className="font-mono text-[1.25rem] md:text-[1.5rem] font-bold min-w-[48px] pt-0.5" style={{ color: "var(--orange)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-[0.95rem] font-semibold" style={{ color: "var(--dark-text)" }}>{a.title}</h3>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--orange)" }} />
                </div>
                <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          Every activity produces open research. Explore our published papers, datasets, and reports.
        </p>
        <div className="rv mt-5">
          <Link to="/research" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
            View our research
          </Link>
        </div>
      </Section>
    </>
  );
}
