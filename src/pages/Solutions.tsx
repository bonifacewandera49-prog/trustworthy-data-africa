import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

interface SolutionPageProps {
 name: string;
 tagline: string;
 subtitle: string;
 overview: string[];
 capabilities: string[];
}

function SolutionPage({ name, subtitle, overview, capabilities }: SolutionPageProps) {
 return (
 <>
 <Hero tag="Our Products" title={name} subtitle={subtitle} />
 <Section>
 <SplitSection eyebrow={name}>
 {overview.map((p, i) => (
 <p key={i} className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>{p}</p>
 ))}
 </SplitSection>
 </Section>
 <Section narrow>
 <h2 className="rv font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>Capabilities</h2>
 <div className="space-y-0">
 {capabilities.map((c) => (
 <div key={c} className="rv flex gap-2.5 items-start py-2 border-b text-[0.86rem] leading-relaxed" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }}>
 <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2.5" style={{ background: "var(--orange)" }} />
 {c}
 </div>
 ))}
 </div>
 <div className="rv mt-7">
 <a href="mailto:info@solidelf.org" className="inline-flex items-center px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Enquire about {name}
 </a>
 </div>
 </Section>
 </>
 );
}

export function CanaryDrop() {
 return (
 <SolutionPage
 name="CanaryDrop"
 tagline="Breach detection"
 subtitle="Breach detection and early-warning system calibrated to the threat patterns and attack behaviours observed across global organisations and infrastructure."
 overview={[
 "CanaryDrop is our breach detection and early-warning system, calibrated to the threat landscape that organisations actually face.",
 "The system deploys canary tokens and honeypots tuned to the tactics, techniques, and procedures we observe through our active threat intelligence programme.",
 ]}
 capabilities={[
 "Canary tokens deployable across documents, databases, network shares, and APIs",
 "Honeypot configurations reflecting real infrastructure patterns",
 "Alert correlation tuned to reduce false positives in local contexts",
 "Integration with existing SIEM and incident response workflows",
 "Quarterly recalibration based on our latest threat intelligence",
 "Incident response playbooks developed from real-world case studies",
 ]}
 />
 );
}

export function Qkabrine() {
 return (
 <SolutionPage
 name="Qkabrine"
 tagline="Quantum ML & AutoML"
 subtitle="Qkabrine searches quantum circuits, encodings, and hyperparameters automatically, so you can focus on results, not circuit design."
 overview={[
 "Qkabrine is our Quantum ML and AutoML platform, designed to make machine learning and quantum computing accessible to research teams worldwide.",
 "The platform handles the full ML lifecycle from data preparation through model training, evaluation, and deployment, with built-in fairness auditing and quantum circuit optimisation at every stage.",
 ]}
 capabilities={[
 "Automated quantum circuit search across multiple encoding strategies",
 "End-to-end AutoML pipeline from data ingestion to model deployment",
 "Built-in fairness auditing for protected attributes across diverse contexts",
 "Support for tabular, text, and image data common in research",
 "Optimised for limited compute environments and intermittent connectivity",
 "Interpretability tools that explain model decisions in accessible terms",
 "Export and deployment options for resource-constrained infrastructure",
 ]}
 />
 );
}
