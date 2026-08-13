import Hero from "@/components/Hero";
import Section from "@/components/Section";

const policies = [
 { title: "Privacy Policy", content: "We collect minimal personal data and process it in accordance with applicable data protection legislation. Information provided through our contact forms and donation system is used solely for the purposes stated at the point of collection. We do not share personal data with third parties for marketing purposes. All data is stored securely and retained only for as long as necessary to fulfil the stated purpose." },
 { title: "Terms of Use", content: "The content on this website is provided for informational purposes. Our research publications, datasets, and tools are made available under the specific licenses stated with each resource. Use of our website constitutes acceptance of these terms. We reserve the right to update these terms as necessary." },
 { title: "Data Protection", content: "As a data research lab, we hold ourselves to the highest standards of data protection. All personal data we collect is processed lawfully, fairly, and transparently. We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction." },
 { title: "Cookie Policy", content: "This website uses essential cookies required for basic functionality. We do not use tracking cookies or third-party analytics that collect personal data. Any changes to our cookie practices will be reflected in this policy." },
];

export default function Policies() {
 return (
 <>
 <Hero tag="Legal" title="Our policies." subtitle="Transparency in how we handle data is fundamental to our mission. These policies reflect the same standards we advocate for in our research." />
 <Section narrow>
 {policies.map((p) => (
 <div key={p.title} className="rv py-7 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
 <h3 className="text-base font-semibold mb-2.5" style={{ color: "var(--orange)" }}>{p.title}</h3>
 <p className="text-[0.86rem] leading-[1.85]" style={{ color: "var(--dark-text-secondary)" }}>{p.content}</p>
 </div>
 ))}
 </Section>
 </>
 );
}
