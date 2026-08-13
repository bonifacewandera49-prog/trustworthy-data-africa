import { useParams, Link } from "react-router-dom";
import Section from "@/components/Section";

const posts: Record<string, { title: string; tag: string; published_at: string; content: string }> = {
 "securing-health-data": {
 title: "Securing Health Data in Low-Resource Environments",
 tag: "Cybersecurity",
 published_at: "2026-04-15",
 content: `<p>Health data is among the most sensitive information any organisation holds. In many parts of the world, health data is collected from fully digital hospital systems to paper records in rural clinics. The challenge is securing this data across its complete lifecycle.</p>
<p>At Solid Elf, we work with health facilities to design secure collection protocols that work in low-resource environments. This includes:</p>
<p>End-to-end encryption for data in transit, even over unreliable networks. Paper-to-digital transcription verification. Access controls that work with limited IT infrastructure. And training for frontline health workers on data security practices.</p>
<p>Our approach recognises that security cannot be an afterthought. It must be built into every stage of the data lifecycle, from the moment it is captured to the moment it is archived or destroyed.</p>`,
 },
 "quantum-ml-primer": {
 title: "A Primer on Quantum Machine Learning for Research Teams",
 tag: "Quantum Computing",
 published_at: "2026-03-22",
 content: `<p>Quantum machine learning represents one of the most promising frontiers in computational research. By leveraging quantum mechanical properties like superposition and entanglement, quantum ML algorithms can process information in ways that classical computers cannot.</p>
<p>For research teams without deep quantum physics expertise, getting started can seem daunting. Qkabrine was designed to bridge this gap by automating the most complex aspects of quantum circuit design.</p>
<p>The platform searches through possible circuit architectures, encoding strategies, and hyperparameters to find configurations that perform well on your specific dataset. This means research teams can focus on their domain expertise while Qkabrine handles the quantum mechanics.</p>`,
 },
 "phishing-trends-2026": {
 title: "Emerging Phishing Trends Targeting African Institutions in 2026",
 tag: "Threat Intelligence",
 published_at: "2026-02-10",
 content: `<p>Our threat intelligence programme has identified several new phishing trends specifically targeting African institutions. These campaigns are increasingly sophisticated, using local languages and cultural references to appear legitimate.</p>
<p>Key trends include: mobile money impersonation scams targeting both individuals and businesses. Fake government service portals designed to harvest credentials. And business email compromise campaigns exploiting trust relationships within organisations.</p>
<p>CanaryDrop was developed in response to these trends, providing early warning when attackers probe your systems using the same tactics we observe in the wild.</p>`,
 },
};

export default function BlogPost() {
 const { slug } = useParams<{ slug: string }>();
 const post = posts[slug || ""];

 if (!post) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1>
 <p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Post not found</p>
 <Link to="/blog" className="underline" style={{ color: "var(--orange)" }}>Back to Blog</Link>
 </div>
 </div>
 );
 }

 return (
 <>
 <div className="pt-28 pb-12 px-[clamp(1.5rem,4vw,4rem)]">
 <div className="max-w-[720px] mx-auto">
 <span className="rv font-mono text-[0.66rem] tracking-widest uppercase mb-4 block" style={{ color: "var(--orange)" }}>{post.tag}</span>
 <h1 className="rv font-bold tracking-tight mb-5" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.15, color: "var(--dark-text)" }}>
 {post.title}
 </h1>
 <span className="rv font-mono text-[0.68rem] block mb-8" style={{ color: "var(--dark-text-muted)" }}>
 {new Date(post.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
 </span>
 </div>
 </div>
 <Section narrow>
 <article className="max-w-[720px] mx-auto" style={{ color: "var(--dark-text)" }}>
 <div className="space-y-6 text-[1rem] leading-[1.85]" dangerouslySetInnerHTML={{ __html: post.content }} />
 </article>
 </Section>
 </>
 );
}
