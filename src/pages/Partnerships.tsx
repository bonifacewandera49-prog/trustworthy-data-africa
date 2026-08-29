import { Mail, FileCheck, Building2, HandCoins, Handshake } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SplitSection from "@/components/SplitSection";

const routes = [
  {
    icon: FileCheck,
    title: "Grants & Innovation Funds",
    desc: "We apply for and deliver against research and innovation grants, including challenge funds and multilateral programmes focused on data, security, and applied AI.",
  },
  {
    icon: Building2,
    title: "Government & Multilateral Contracts",
    desc: "We take on procured, contracted work for government agencies, multilateral bodies, and development programmes that need independent technical expertise.",
  },
  {
    icon: Handshake,
    title: "Institutional Partnerships",
    desc: "We collaborate with universities, NGOs, and other labs, including as a technical subcontractor on grants that someone else holds.",
  },
  {
    icon: HandCoins,
    title: "Sponsorship of Open Research",
    desc: "Organisations aligned with our mission can sponsor specific research programmes, open datasets, or fellowship positions.",
  },
];

const supported = [
  { title: "Research & Publication", desc: "Peer-reviewed research on cybersecurity, privacy, and AI fairness." },
  { title: "Tool Development", desc: "Building and maintaining our breach-detection and quantum ML tooling." },
  { title: "Training & Capacity Building", desc: "Delivering cybersecurity and privacy training to health workers, financial institutions, and government agencies." },
  { title: "Open Datasets", desc: "Building representative datasets and releasing them freely on Zenodo." },
];

export default function Partnerships() {
  return (
    <>
      <Hero
        tag="Partnerships & Funding"
        title="Fund the research that secures data."
        subtitle="We're a consultancy and research lab. Most of our work is funded through client engagements, but we also take on grants, contracts, and institutional partnerships that extend our research and keep our tools and datasets open."
      />
      <Section>
        <div className="mb-8">
          <h2 className="rv text-[1.75rem] md:text-[2rem] font-bold tracking-tight mb-2" style={{ color: "var(--dark-text)" }}>
            Ways to work with us
          </h2>
          <div className="rv w-16 h-1 rounded-full" style={{ background: "var(--orange)" }} />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {routes.map((r) => (
            <div
              key={r.title}
              className="rv border rounded-lg p-6 transition-all"
              style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--hairline))" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "hsl(var(--primary))"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "hsl(var(--hairline))"; }}
            >
              <r.icon className="w-6 h-6 mb-4" style={{ color: "var(--orange)" }} />
              <h3 className="text-[0.9rem] font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>{r.title}</h3>
              <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--dark-text-muted)" }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SplitSection eyebrow="How Funding Is Used" reverse>
          <h2 className="font-mono text-[0.92rem] font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--orange)" }}>
            Where partnership funding goes
          </h2>
          <div className="space-y-0">
            {supported.map((item, i) => (
              <div key={item.title} className="flex gap-4 py-4 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
                <span className="font-mono text-[0.72rem] min-w-[24px] pt-0.5" style={{ color: "var(--dark-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[0.88rem] font-semibold mb-1" style={{ color: "var(--dark-text)" }}>{item.title}</h3>
                  <p className="text-[0.82rem] leading-[1.7]" style={{ color: "var(--dark-text-muted)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SplitSection>
      </Section>

      <Section narrow className="text-center">
        <div className="rv liquid-glass-light-light p-8">
          <h3 className="text-[1.05rem] font-semibold mb-2" style={{ color: "var(--dark-text)" }}>Let's talk</h3>
          <p className="text-[0.93rem] leading-[1.85] mb-5" style={{ color: "var(--dark-text-secondary)" }}>
            Whether you're a funder scoping a grant, a government team issuing a tender, or an organisation looking to
            sponsor open research, reach out and we'll find the right fit.
          </p>
          <a
            href="mailto:info@solidelf.org"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors"
            style={{ background: "var(--orange)", color: "var(--dark-text)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}
          >
            <Mail className="w-4 h-4" /> Email info@solidelf.org
          </a>
        </div>
      </Section>
    </>
  );
}
