import Hero from "@/components/Hero";
import Section from "@/components/Section";

const opps = [
 { type: "Fellowship", duration: "12 months", title: "Graduate Research Fellowship \u2013 Cybersecurity", desc: "Work alongside our security research team on active threat intelligence projects. Full-time position with mentorship, publication support, and direct involvement in tool development.", label: "Apply \u2192" },
 { type: "Internship", duration: "6 months", title: "Research Internship \u2013 Privacy Engineering", desc: "Join our privacy engineering team to work on synthetic data generation, differential privacy implementations, and compliance frameworks.", label: "Apply \u2192" },
 { type: "Fellowship", duration: "12 months", title: "Data Science Fellowship", desc: "Contribute to our data programme spanning field collection, synthetic dataset development, and fairness auditing. Work directly on Qkabrine.", label: "Apply \u2192" },
 { type: "Internship", duration: "3 months", title: "Field Operations Internship", desc: "Deploy alongside our field team across health, agriculture, and government programmes. Hands-on experience with data collection protocols.", label: "Apply \u2192" },
];

export default function Opportunities() {
 return (
 <>
 <Hero tag="Opportunities" title="Join the work." subtitle="We offer research internships and graduate fellowships with direct involvement in active projects. Every position involves meaningful, publishable work." />
 <Section>
 <div className="space-y-0">
 {opps.map((o) => (
 <div key={o.title} className="rv py-7 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
 <div className="flex gap-2 mb-2.5">
 <span className="font-mono text-[0.68rem] px-2.5 py-0.5 rounded" style={{ color: "var(--orange)", background: "rgba(217,83,30,0.1)" }}>{o.type}</span>
 <span className="font-mono text-[0.68rem] px-2.5 py-0.5 rounded" style={{ color: "var(--dark-text-muted)", background: "hsl(var(--muted))" }}>{o.duration}</span>
 </div>
 <h3 className="text-[0.92rem] font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>{o.title}</h3>
 <p className="text-[0.86rem] leading-[1.75] mb-3" style={{ color: "var(--dark-text-secondary)" }}>{o.desc}</p>
 <a href="mailto:info@solidelf.org" className="text-[0.82rem] font-semibold no-underline hover:underline transition-colors cursor-pointer" style={{ color: "var(--orange)" }}>{o.label}</a>
 </div>
 ))}
 </div>
 </Section>
 </>
 );
}
