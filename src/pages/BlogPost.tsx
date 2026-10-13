import { useParams, Link } from "react-router-dom";
import Section from "@/components/Section";

const posts: Record<string, { title: string; tag: string; published_at: string; content: string }> = {
  "security-review-before-launch": {
    title: "What a Security Review Should Cover Before a Digital Service Launch",
    tag: "Security Engineering",
    published_at: "2026-10-08",
    content: `<p>A pre-launch security review should answer a simple question: what could realistically cause harm once this service is exposed to real users, real data, and real attackers?</p><p>Start with assets and trust boundaries. Identify the sensitive information, privileged actions, integrations, administrative functions, credentials, and external dependencies that matter most. Then examine authentication, authorisation, secrets management, logging, data handling, API exposure, recovery procedures, and the assumptions built into third-party services.</p><p>Testing should be proportional to risk. A marketing site and a payment platform do not require the same depth of assurance. For higher-risk systems, combine architecture review, threat modelling, configuration review, dependency analysis, and targeted penetration testing rather than relying on a single automated scanner.</p><p>The final output should be prioritised. Teams need to know which findings block launch, which can be mitigated immediately, which should be monitored, and who owns the remaining risk.</p>`,
  },
  "data-governance-operating-model": {
    title: "Turning Data Governance from Policy into an Operating Model",
    tag: "Data Governance",
    published_at: "2026-09-18",
    content: `<p>Data governance often fails because organisations stop at policy. A document may define principles, but teams still need practical answers about ownership, access, retention, quality, sharing, and escalation.</p><p>An operating model translates those principles into repeatable decisions. It should identify accountable data owners, maintain an inventory of important datasets, define access approval routes, establish retention and deletion rules, document data quality responsibilities, and create a process for reviewing exceptions.</p><p>The best governance model is proportionate. High-risk datasets deserve stronger controls and more frequent review, while low-risk operational information should not be trapped in unnecessary bureaucracy.</p><p>Governance becomes useful when it is visible in everyday workflows: onboarding, procurement, product design, research, incident response, analytics, and offboarding.</p>`,
  },
  "phishing-trends-2026": {
    title: "Phishing in 2026: The Patterns Security Teams Should Be Watching",
    tag: "Threat Intelligence",
    published_at: "2026-08-27",
    content: `<p>Phishing remains effective because attackers continue to improve context, timing, and presentation. Generic messages have not disappeared, but the more dangerous campaigns increasingly resemble normal business communication.</p><p>Common patterns include supplier and executive impersonation, fake document-sharing alerts, credential harvesting through cloned authentication pages, malicious QR codes, and business email compromise built around genuine organisational relationships.</p><p>Defence therefore requires more than awareness training. Strong authentication, mailbox protections, domain monitoring, payment verification procedures, rapid reporting channels, and well-practised incident response all reduce the chance that one convincing message becomes a serious breach.</p>`,
  },
  "synthetic-data-privacy": {
    title: "When Synthetic Data Protects Privacy Without Losing Utility",
    tag: "Privacy Engineering",
    published_at: "2026-07-30",
    content: `<p>Synthetic data can be useful when teams need realistic records for testing, modelling, demonstrations, or external collaboration but cannot expose the original sensitive data.</p><p>Good synthetic data is not simply random data. It should preserve the statistical relationships that matter for the intended use while reducing the likelihood that real individuals or records can be reconstructed.</p><p>That requires explicit evaluation of utility and privacy. Teams should test whether downstream analyses behave similarly, inspect rare combinations, measure disclosure risk, and document where the synthetic data is not an acceptable substitute for real observations.</p>`,
  },
  "field-collection-security": {
    title: "Security Protocols for Field and Distributed Data Collection",
    tag: "Field Security",
    published_at: "2026-06-19",
    content: `<p>Distributed data collection introduces risks that are easy to underestimate: shared devices, weak connectivity, delayed synchronisation, lost equipment, inconsistent identity checks, and informal transfer methods.</p><p>A practical protocol should minimise locally stored data, encrypt devices and transfers, separate user privileges, define safe offline workflows, verify records during synchronisation, and give field teams a clear process for reporting loss, compromise, or suspected manipulation.</p><p>Controls must match the environment. A security measure that field teams routinely bypass is not a strong control; it is an undocumented exception.</p>`,
  },
  "responsible-ai-assurance": {
    title: "Responsible AI Needs an Assurance Process, Not Just Principles",
    tag: "AI Assurance",
    published_at: "2026-05-28",
    content: `<p>Responsible AI statements are useful only when they are connected to evidence. Organisations need a repeatable assurance process that can show how a model was developed, tested, approved, monitored, and challenged.</p><p>That process should cover data provenance, performance across relevant groups, explainability appropriate to the use case, human oversight, security, change control, monitoring, and escalation when outcomes drift.</p><p>The objective is not to make every model risk-free. It is to make risk visible, owned, measured, and reviewable throughout the system lifecycle.</p>`,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts[slug || ""];
  if (!post) return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1><p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Post not found</p><Link to="/blog" className="underline" style={{ color: "var(--orange)" }}>Back to Blog</Link></div></div>;
  return <><div className="pt-20 sm:pt-28 pb-10 sm:pb-12 px-[clamp(1.25rem,4vw,4rem)]"><div className="max-w-[720px] mx-auto"><span className="rv font-mono text-[0.66rem] tracking-widest uppercase mb-4 block" style={{ color: "var(--orange)" }}>{post.tag}</span><h1 className="rv font-bold tracking-tight mb-5" style={{ fontSize: "clamp(1.65rem, 5vw, 2.5rem)", lineHeight: 1.15, color: "var(--dark-text)" }}>{post.title}</h1><span className="rv font-mono text-[0.68rem] block mb-8" style={{ color: "var(--dark-text-muted)" }}>{new Date(post.published_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span></div></div><Section narrow><article className="max-w-[720px] mx-auto" style={{ color: "var(--dark-text)" }}><div className="space-y-6 text-[0.95rem] sm:text-[1rem] leading-[1.85]" dangerouslySetInnerHTML={{ __html: post.content }} /></article></Section></>;
}
