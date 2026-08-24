import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";
import { activityAreas } from "@/data/activities";

const areas = activityAreas;

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
