import { Link, useLocation } from "react-router-dom";

interface HeroProps {
  tag?: string;
  title: string;
  subtitle: string;
  image?: string;
  actions?: { label: string; to: string; variant?: "primary" | "outline" | "ghost" }[];
}
const covers: Record<string, string> = {
  "about": "about",
  "mission": "mission",
  "team": "team",
  "work": "work",
  "consultancy": "consultancy",
  "datasets": "datasets",
  "reports": "reports",
  "opportunities": "opportunities",
  "apply": "apply",
  "contact": "contact",
  "partnerships": "partnerships",
  "policies": "policies",
  "research": "research-header",
  "blog": "blog-header",
  "events": "events-header",
  "work/data-collection-translation-integrity": "activity-collection",
  "work/cybersecurity-threat-intelligence": "activity-security",
  "work/privacy-engineering-data-protection": "activity-privacy",
  "work/ai-machine-learning-fairness": "activity-ai",
  "work/quantum-machine-learning": "activity-quantum",
  "work/interpretability-explainability": "activity-explain",
  "work/blockchain-emerging-technology": "activity-blockchain",
  "work/data-governance-policy": "activity-governance",
  "work/training-capacity-building": "activity-training",
  "consultancy/security-assessment-penetration-testing": "service-security",
  "consultancy/privacy-engineering-compliance": "service-privacy",
  "consultancy/data-strategy-governance": "service-governance",
  "consultancy/ai-fairness-interpretability-audits": "service-ai",
  "consultancy/custom-training-programmes": "service-training",
  "consultancy/bespoke-tool-development": "service-tools",
  "solutions/canarydrop": "canarydrop",
  "solutions/qkabrine": "qkabrine"
};
export default function Hero({ tag, title, subtitle, image, actions }: HeroProps) {
  const { pathname } = useLocation();
  const topic = covers[pathname.slice(1)] || covers[pathname.split("/")[1]];
  const cover = image || (topic ? `/images/editorial/${topic}.webp` : undefined);
  return <header className={`page-hero ${cover ? "page-hero-photo" : "page-hero-text"}`}>
    {cover && <><img className="page-hero-image" src={cover} alt="" fetchPriority="high" /><div className="page-hero-shade" /></>}
    <div className="page-hero-content">
      <Link to="/" className="text-xs no-underline inline-block mb-7" style={{ color: "var(--dark-text-secondary)" }}>Solid Elf <span aria-hidden="true"> / </span> {tag || "Explore"}</Link>
      {tag && <p className="font-mono text-xs uppercase tracking-[0.16em] mb-4" style={{ color: "var(--orange)" }}>{tag}</p>}
      <h1 className="font-semibold tracking-tight max-w-[850px] mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.7rem)", lineHeight: 1.12, color: "var(--dark-text)" }}>{title}</h1>
      <p className="max-w-[660px] text-base leading-relaxed" style={{ color: "var(--dark-text-secondary)" }}>{subtitle}</p>
      {actions && <div className="flex flex-wrap gap-3 mt-7">{actions.map(a => <Link key={a.label} to={a.to} className="inline-flex rounded-lg border px-5 py-3 text-sm font-semibold no-underline" style={{ borderColor: "var(--orange)", background: a.variant ? "transparent" : "var(--orange)", color: a.variant ? "var(--dark-text)" : "#211711" }}>{a.label}</Link>)}</div>}
    </div>
  </header>;
}
