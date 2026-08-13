import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

interface ServiceData {
  index: number;
  tagline: string;
  overview: string;
  whatWeDo: string[];
}

const services: Record<string, ServiceData> = {
  "security-assessment-penetration-testing": {
    index: 1, tagline: "Know your vulnerabilities before attackers do.",
    overview: "We conduct comprehensive security evaluations of data infrastructure, applications, and workflows. Our assessments combine automated scanning with manual adversarial testing to identify vulnerabilities that tools alone cannot find. Every engagement produces a clear, prioritised remediation roadmap.",
    whatWeDo: [
      "Conduct full infrastructure and application penetration tests",
      "Perform adversarial testing calibrated to local threat patterns",
      "Assess data handling workflows for security gaps",
      "Evaluate third-party integrations and supply chain risks",
      "Deliver actionable remediation reports with prioritised recommendations",
    ],
  },
  "privacy-engineering-compliance": {
    index: 2, tagline: "From legal requirement to engineering reality.",
    overview: "Data protection legislation exists in most jurisdictions, but translating legal requirements into engineering decisions is a specialised challenge. We bridge that gap by designing privacy-preserving systems, implementing differential privacy and synthetic data generation, and creating compliance frameworks that work in real-world infrastructure.",
    whatWeDo: [
      "Map legal requirements to specific engineering controls",
      "Implement differential privacy and synthetic data pipelines",
      "Design secure computation protocols for sensitive analysis",
      "Create data protection impact assessments (DPIAs)",
      "Train engineering teams on privacy-by-design principles",
    ],
  },
  "data-strategy-governance": {
    index: 3, tagline: "Frameworks that make data assets manageable and secure.",
    overview: "Organisations accumulate data faster than they can govern it. We help design and implement data governance frameworks that account for real-world constraints — limited infrastructure, diverse data sources, and evolving regulatory requirements — while making data more secure, findable, and usable.",
    whatWeDo: [
      "Assess current data assets, flows, and governance gaps",
      "Design governance frameworks tailored to organisational context",
      "Implement data cataloguing and lineage tracking",
      "Create data quality standards and monitoring processes",
      "Train teams on governance practices and tools",
    ],
  },
  "ai-fairness-interpretability-audits": {
    index: 4, tagline: "Independent evaluation of automated decision-making.",
    overview: "When organisations deploy AI systems that make consequential decisions, independent evaluation is essential. We conduct fairness audits that identify disparities in model outcomes across demographic groups, assess interpretability for non-technical stakeholders, and provide actionable recommendations for improvement.",
    whatWeDo: [
      "Audit model outcomes for demographic disparities",
      "Evaluate interpretability and explainability of AI systems",
      "Assess data quality and representation in training sets",
      "Review model documentation and development practices",
      "Provide actionable recommendations with remediation guidance",
    ],
  },
  "custom-training-programmes": {
    index: 5, tagline: "Practical skills built from active research.",
    overview: "Every training programme is built from our active research and tailored to participant contexts. We cover cybersecurity, privacy engineering, safe data collection, threat awareness, and responsible AI — delivering practical skills that teams can apply immediately, not theoretical content that sits in a binder.",
    whatWeDo: [
      "Design curricula from current research and real case studies",
      "Deliver hands-on workshops with practical exercises",
      "Create self-paced learning modules for ongoing reference",
      "Assess participant progress and certify completion",
      "Provide post-training support and resources",
    ],
  },
  "bespoke-tool-development": {
    index: 6, tagline: "Purpose-built tools for specific challenges.",
    overview: "Sometimes off-the-shelf tools do not fit the context. We build custom data collection, security, and analytics tools designed for specific operational requirements — whether that means offline-first mobile apps, secure data pipelines, or specialised monitoring systems.",
    whatWeDo: [
      "Analyse operational requirements and constraints",
      "Design tools that work in target infrastructure",
      "Build and test with user feedback throughout development",
      "Document thoroughly for handover and maintenance",
      "Train teams on deployment and ongoing use",
    ],
  },
};

const serviceSlugs = Object.keys(services);
const serviceTitles: Record<string, string> = {};
serviceSlugs.forEach((s) => { serviceTitles[s] = services[s].tagline; });

export default function ConsultancyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services[slug || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1>
          <p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Service not found</p>
          <Link to="/consultancy" className="underline" style={{ color: "var(--orange)" }}>Back to Consultancy</Link>
        </div>
      </div>
    );
  }

  const currentIdx = serviceSlugs.indexOf(slug || "");
  const prevSlug = currentIdx > 0 ? serviceSlugs[currentIdx - 1] : null;
  const nextSlug = currentIdx < serviceSlugs.length - 1 ? serviceSlugs[currentIdx + 1] : null;

  return (
    <>
      <Hero tag={`${String(service.index).padStart(2, "0")} / 06`} title={serviceTitles[slug || ""]} subtitle={service.overview} />

      {/* What We Do */}
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>What We Do</h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="space-y-0">
          {service.whatWeDo.map((item, i) => (
            <div key={i} className="rv flex gap-5 py-6 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
              <span className="font-mono text-[0.9rem] md:text-[1.1rem] font-bold min-w-[36px] pt-0.5" style={{ color: "var(--orange)" }}>
                {String(service.index).padStart(2, "0")}.{String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Prev / Next */}
      <Section>
        <div className="flex items-center justify-between gap-4">
          {prevSlug ? (
            <Link to={`/consultancy/${prevSlug}`} className="rv flex items-center gap-2 no-underline group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" style={{ color: "var(--dark-text-muted)" }} />
              <div>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase block" style={{ color: "var(--dark-text-muted)" }}>Previous</span>
                <span className="text-[0.82rem] font-medium" style={{ color: "var(--dark-text-secondary)" }}>{serviceTitles[prevSlug]}</span>
              </div>
            </Link>
          ) : <div />}
          {nextSlug ? (
            <Link to={`/consultancy/${nextSlug}`} className="rv flex items-center gap-2 no-underline group text-right">
              <div>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase block" style={{ color: "var(--dark-text-muted)" }}>Next</span>
                <span className="text-[0.82rem] font-medium" style={{ color: "var(--dark-text-secondary)" }}>{serviceTitles[nextSlug]}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "var(--dark-text-muted)" }} />
            </Link>
          ) : <div />}
        </div>
      </Section>

      {/* CTA */}
      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          Interested in this service? Every consultancy project directly supports our independent research.
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
