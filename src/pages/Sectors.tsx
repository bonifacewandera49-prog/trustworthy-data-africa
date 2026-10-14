import { useSearchParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const sectors = [
 { name: "Health", desc: "Patient data is among the most sensitive information any organisation holds. Health data is collected from fully digital hospital systems to paper records in rural clinics.", points: ["Securing patient data across its complete lifecycle", "Designing collection protocols for low-resource environments", "Auditing AI diagnostics for bias and reliability", "Privacy frameworks that protect individuals while enabling research", "Cybersecurity training for frontline health workers"] },
 { name: "Finance", desc: "Financial services depend on trusted transactions, resilient digital channels, and responsible use of customer information. We consider payments, lending, fraud monitoring, and access controls together.", points: ["Adversarial testing of financial data infrastructure", "Privacy-preserving transaction analysis", "Fraud models grounded in local threat intelligence", "Security frameworks for formal and informal financial activity", "Fairness auditing of automated credit scoring"] },
 { name: "Agriculture", desc: "Agriculture connects field observations, sensors, weather, markets, and supply chains. Reliable decisions depend on the quality of that evidence and on clear rules for collecting and sharing it.", points: ["Secure, integrity-preserving data collection in field conditions", "Synthetic datasets modelling smallholder farming patterns", "Structuring and analysing existing agricultural data", "Governance frameworks for responsible cross-sector data sharing"] },
 { name: "Education", desc: "Student data carries long-term sensitivity. Educational institutions increasingly use digital platforms.", points: ["Data governance frameworks for student information systems", "Privacy compliance under applicable legislation", "Security testing of digital learning platforms", "Fairness auditing of AI in educational decision-making"] },
 { name: "Government", desc: "Government systems hold the most consequential data in any country. Digitisation of public services is accelerating.", points: ["Sovereign data architecture for national datasets", "Threat resilience for critical infrastructure", "Privacy-by-design for citizen-facing digital services", "Accountability frameworks for automated public decisions"] },
 { name: "Research & NGOs", desc: "Organisations conducting research and delivering humanitarian programmes collect deeply sensitive data.", points: ["Ethical data collection for sensitive population research", "Privacy-preserving analysis protecting participant identities", "Secure data sharing for multi-organisation collaboration", "Synthetic datasets enabling research without exposing participants"] },
];

export default function Sectors() {
 const [params, setParams] = useSearchParams();
 const active = Math.max(0, sectors.findIndex(x => x.name.toLowerCase().split(" ")[0] === params.get("sector")));
 const setActive = (i: number) => setParams({ sector: sectors[i].name.toLowerCase().split(" ")[0] });
 const images = ["health", "finance", "agriculture", "education", "government", "research"];
 const s = sectors[active];

 return (
 <>
 <Hero image={`/images/editorial/${images[active]}.webp`} tag="Sectors" title="Security and data, in context." subtitle="Data security, privacy, and governance challenges appear in every sector that handles sensitive information. We work across all of them." />
 <Section>
 <div className="rv flex flex-wrap gap-1.5 mb-7">
 {sectors.map((sec, i) => (
 <button
 key={sec.name}
 className="text-[0.82rem] font-medium px-4 py-2 rounded-lg cursor-pointer transition-all border"
 style={i === active ? { background: "var(--orange)", color: "var(--dark-text)", borderColor: "var(--orange)" } : { background: "transparent", color: "var(--dark-text-secondary)", borderColor: "var(--dark-hairline)" }}
 aria-pressed={i === active} onClick={() => setActive(i)}
 >
 {sec.name}
 </button>
 ))}
 </div>
 <div className="max-w-[720px]">
 <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--dark-text)" }}>{s.name}</h3>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>{s.desc}</p>
 <div className="space-y-0">
 {s.points.map((p) => (
 <div key={p} className="flex gap-2.5 items-start py-2 border-b text-[0.86rem] leading-relaxed" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }}>
 <span className="w-[5px] h-[5px] rounded-full flex-shrink-0 mt-2.5" style={{ background: "var(--orange)" }} />
 {p}
 </div>
 ))}
 </div>
 </div>
 </Section>
 <Section>
 <SplitSection eyebrow="Cross-Sector" reverse>
 <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
 Cross-Sector Expertise
 </h2>
 <p className="text-[0.93rem] leading-[1.85] mb-4" style={{ color: "var(--dark-text)" }}>
 Many sectors face shared challenges: controlling access, establishing data quality, tracing decisions, and responding to incidents. We adapt these methods to the information, people, and operating conditions involved.
 </p>
 <p className="text-[0.93rem] leading-[1.85]" style={{ color: "var(--dark-text)" }}>
 An engagement starts with the decisions you need to support, the information you hold, and the consequences of failure. That context determines the research questions, technical checks, and practical recommendations.
 </p>
 </SplitSection>
 </Section>
 </>
 );
}
