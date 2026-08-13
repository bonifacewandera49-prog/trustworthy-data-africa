import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

interface ActivityData {
  index: number;
  tagline: string;
  overview: string;
  whatWeDo: string[];
}

const activities: Record<string, ActivityData> = {
  "data-collection-translation-integrity": {
    index: 1, tagline: "From the field to the database — accurately and securely.",
    overview: "Data enters systems through USSD, SMS, paper records, field enumerators, community networks, and informal channels. Each channel introduces its own risks of error, loss, and unauthorised access. We design secure collection protocols, translate and structure data from hard-to-use sources, and train field teams to maintain integrity from the point of first capture.",
    whatWeDo: [
      "Design secure data collection protocols for low-resource and low-connectivity environments",
      "Translate and structure data from paper, audio, and unstructured digital sources",
      "Build verification pipelines that catch errors before they propagate",
      "Train field teams on secure collection, handling, and transmission practices",
      "Assess data quality and integrity across multi-channel ingestion systems",
    ],
  },
  "cybersecurity-threat-intelligence": {
    index: 2, tagline: "Understanding threats before they reach your systems.",
    overview: "Security threats affecting organisations follow distinct patterns shaped by local platforms, languages, and social engineering methods. We gather intelligence on these patterns, develop tools calibrated to the threats we observe, and deliver training that prepares teams to recognise and respond.",
    whatWeDo: [
      "Monitor and analyse phishing and social engineering campaigns targeting African institutions",
      "Develop threat intelligence feeds calibrated to local attack patterns",
      "Build and deploy CanaryDrop for breach detection and early warning",
      "Conduct adversarial testing and security assessments",
      "Deliver threat awareness training for teams and organisations",
    ],
  },
  "privacy-engineering-data-protection": {
    index: 3, tagline: "Making data protection legislation practically enforceable.",
    overview: "Data protection legislation exists in most jurisdictions, but translating legal requirements into engineering decisions is a specialised challenge. We help organisations bridge that gap through synthetic data generation, differential privacy, secure computation, and compliance frameworks that work in real-world infrastructure.",
    whatWeDo: [
      "Design privacy-preserving data systems that meet regulatory requirements",
      "Implement differential privacy and synthetic data generation pipelines",
      "Develop secure computation protocols for sensitive data analysis",
      "Create compliance frameworks and data protection impact assessments",
      "Train engineering teams on privacy-by-design principles",
    ],
  },
  "ai-machine-learning-fairness": {
    index: 4, tagline: "Models that work for everyone they affect.",
    overview: "We build models suited to diverse data conditions — where data is sparse, biased, or incomplete — and develop interpretability tools so organisations can understand and explain automated decisions. Our fairness audits identify disparities in model outcomes across demographic groups, and we work with teams to address them.",
    whatWeDo: [
      "Build machine learning models for resource-constrained data environments",
      "Conduct independent fairness audits of automated decision-making systems",
      "Develop interpretability tools that explain model decisions to non-technical stakeholders",
      "Design bias mitigation strategies for production ML systems",
      "Advise on responsible AI deployment practices",
    ],
  },
  "quantum-machine-learning": {
    index: 5, tagline: "Exploring the next frontier in computational research.",
    overview: "We explore the intersection of quantum computing and machine learning, developing quantum circuit architectures, hybrid classical-quantum models, and automated quantum hyperparameter optimisation through Qkabrine. Our work focuses on making quantum ML accessible to research teams without deep quantum physics expertise.",
    whatWeDo: [
      "Design quantum circuit architectures for classification and optimisation tasks",
      "Develop hybrid classical-quantum ML pipelines",
      "Automate quantum hyperparameter search through Qkabrine",
      "Evaluate quantum advantage claims on real-world datasets",
      "Publish benchmark studies and best practices",
    ],
  },
  "interpretability-explainability": {
    index: 6, tagline: "Understanding how systems reach their conclusions.",
    overview: "When organisations deploy systems that make consequential decisions, they need to understand and explain how those systems reach their conclusions. We develop interpretability tools, conduct explainability audits, and create documentation frameworks that make automated decisions transparent to affected communities and regulatory bodies.",
    whatWeDo: [
      "Develop interpretability tools for complex ML models",
      "Conduct explainability audits of production systems",
      "Create model documentation frameworks (model cards, Datasheets for Datasets)",
      "Design human-readable explanations for automated decisions",
      "Advise on regulatory requirements for AI transparency",
    ],
  },
  "blockchain-emerging-technology": {
    index: 7, tagline: "Rigorous evaluation before deployment.",
    overview: "We conduct rigorous, independent assessments of emerging technologies proposed for real-world contexts, evaluating performance under local conditions. Our assessments consider technical feasibility, security implications, governance requirements, and actual utility — separating genuine innovation from speculative claims.",
    whatWeDo: [
      "Assess blockchain and distributed ledger proposals for real-world viability",
      "Evaluate emerging technologies (federated learning, edge computing, etc.) for local contexts",
      "Analyse security and governance implications of new technology deployments",
      "Publish independent, peer-reviewed technology assessments",
      "Advise organisations and governments on technology adoption decisions",
    ],
  },
  "data-governance-policy": {
    index: 8, tagline: "Frameworks that govern data responsibly.",
    overview: "We produce peer-reviewed research and frameworks that inform data governance policy globally. Our work spans cross-border data sharing, sovereign data strategies, compliance frameworks, and the governance of AI systems — always grounded in the realities of implementation.",
    whatWeDo: [
      "Research cross-border data governance frameworks for the African Union and beyond",
      "Develop sovereign data strategy recommendations for governments",
      "Analyse compliance requirements across jurisdictions",
      "Design governance frameworks for AI and automated systems",
      "Engage with policymakers to translate research into actionable policy",
    ],
  },
  "training-capacity-building": {
    index: 9, tagline: "Building the teams that sustain the work.",
    overview: "Every training programme is built from our active research and tailored to participant contexts. We cover cybersecurity, privacy engineering, safe data collection, threat awareness, and responsible AI — delivering practical skills that teams can apply immediately.",
    whatWeDo: [
      "Design and deliver cybersecurity training for teams and organisations",
      "Build privacy engineering capacity through hands-on workshops",
      "Train field teams on secure data collection and handling",
      "Develop threat awareness programmes calibrated to local attack patterns",
      "Create self-paced learning materials and documentation",
    ],
  },
};

const activitySlugs = Object.keys(activities);
const activityTitles: Record<string, string> = {};
activitySlugs.forEach((s) => { activityTitles[s] = activities[s].tagline; });

export default function ActivityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const activity = activities[slug || ""];

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1>
          <p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Activity not found</p>
          <Link to="/work" className="underline" style={{ color: "var(--orange)" }}>Back to Core Activities</Link>
        </div>
      </div>
    );
  }

  const currentIdx = activitySlugs.indexOf(slug || "");
  const prevSlug = currentIdx > 0 ? activitySlugs[currentIdx - 1] : null;
  const nextSlug = currentIdx < activitySlugs.length - 1 ? activitySlugs[currentIdx + 1] : null;

  return (
    <>
      <Hero tag={`${String(activity.index).padStart(2, "0")} / 09`} title={activityTitles[slug || ""]} subtitle={activity.overview} />

      {/* What We Do */}
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>What We Do</h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="space-y-0">
          {activity.whatWeDo.map((item, i) => (
            <div key={i} className="rv flex gap-5 py-6 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
              <span className="font-mono text-[0.9rem] md:text-[1.1rem] font-bold min-w-[36px] pt-0.5" style={{ color: "var(--orange)" }}>
                {String(activity.index).padStart(2, "0")}.{String(i + 1).padStart(2, "0")}
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
            <Link to={`/work/${prevSlug}`} className="rv flex items-center gap-2 no-underline group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" style={{ color: "var(--dark-text-muted)" }} />
              <div>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase block" style={{ color: "var(--dark-text-muted)" }}>Previous</span>
                <span className="text-[0.82rem] font-medium" style={{ color: "var(--dark-text-secondary)" }}>{activityTitles[prevSlug]}</span>
              </div>
            </Link>
          ) : <div />}
          {nextSlug ? (
            <Link to={`/work/${nextSlug}`} className="rv flex items-center gap-2 no-underline group text-right">
              <div>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase block" style={{ color: "var(--dark-text-muted)" }}>Next</span>
                <span className="text-[0.82rem] font-medium" style={{ color: "var(--dark-text-secondary)" }}>{activityTitles[nextSlug]}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" style={{ color: "var(--dark-text-muted)" }} />
            </Link>
          ) : <div />}
        </div>
      </Section>

      {/* CTA */}
      <Section narrow className="text-center">
        <p className="rv" style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)", lineHeight: "1.4", color: "var(--dark-text-secondary)" }}>
          Want to engage our team on this activity?
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
