import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Pause, Play, Download } from "lucide-react";

/* ═══════════════════════════════════════════
   HERO CAROUSEL — split image/text + slides
   ═══════════════════════════════════════════ */
const heroSlides = [
  {
    img: "/images/hero-bg.jpg",
    title: "Cybersecurity & Data Research",
    line2: "End to End.",
    btn: "Learn more",
    to: "/about",
  },
  {
    img: "/images/security-ops.jpg",
    title: "Threat Intelligence &",
    line2: "Breach Detection.",
    btn: "Learn more",
    to: "/work/cybersecurity-threat-intelligence",
  },
  {
    img: "/images/qkabrine.jpg",
    title: "Quantum ML & AutoML",
    line2: "Through Qkabrine.",
    btn: "Learn more",
    to: "/solutions/qkabrine",
  },
];

function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const s = heroSlides[active];

  return (
    <section style={{ background: "var(--dark-base)" }} className="pt-4 pb-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px] md:min-h-[480px]">
        {/* Image — rounded, with subtle bg */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[4/3]" style={{ background: "var(--dark-elevated)" }}>
          <img
            src={s.img}
            alt=""
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        {/* Text — on white */}
        <div className="flex flex-col justify-center px-4 md:px-8">
          <h1
            className="font-bold mb-6 transition-all duration-500"
            style={{
              fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)",
              lineHeight: 1.15,
              color: "var(--orange)",
            }}
          >
            {s.title}
            <br />
            {s.line2}
          </h1>
          <div>
            <Link
              to={s.to}
              className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
              style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--orange)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--orange)";
              }}
            >
              {s.btn}
            </Link>
          </div>
          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-10">
            <button
              onClick={() => setPaused(!paused)}
              className="bg-transparent border-none cursor-pointer p-1"
              style={{ color: "var(--dark-text-muted)" }}
            >
              {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-[3px] rounded-full border-none cursor-pointer transition-all"
                style={{
                  width: i === active ? "32px" : "20px",
                  background: i === active ? "var(--orange)" : "var(--dark-hairline)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMPANY INTRO — large text left + stats right
   ═══════════════════════════════════════════ */
function CompanyIntro() {
  const stats = [
    { num: "09", label: "Core Research Areas", color: "var(--orange)" },
    { num: "02", label: "Products", color: "var(--orange)" },
    { num: "06", label: "Sectors We Serve", color: "var(--orange)" },
  ];
  return (
    <section style={{ background: "var(--dark-base)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left — intro text */}
        <div>
          <h2
            className="font-normal mb-5"
            style={{
              fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
              lineHeight: 1.3,
              color: "var(--orange)",
            }}
          >
            Solid Elf is a cybersecurity and data research lab that builds tools,
            frameworks, and datasets to keep systems secure and make data trustworthy.
          </h2>
          <p className="text-[0.88rem] leading-[1.75]" style={{ color: "var(--dark-text-secondary)" }}>
            We work across the full data lifecycle — from secure field collection
            through governance and interpretability — and the full security spectrum,
            from adversarial testing to defensive architecture and privacy engineering.
          </p>
        </div>
        {/* Right — stats */}
        <div className="grid grid-cols-1 gap-6 pt-2">
          {stats.map((s) => (
            <a key={s.label} href="#" className="no-underline group">
              <span
                className="font-light block"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1, color: s.color }}
              >
                {s.num}
              </span>
              <span className="text-[0.82rem] mt-1 block" style={{ color: "var(--dark-text-secondary)" }}>
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROJECT CARDS — 3 large rounded image cards
   ═══════════════════════════════════════════ */
function ProjectCards() {
  const cards = [
    {
      img: "/images/security-ops.jpg",
      tags: [{ text: "Cybersecurity" }, { text: "Threat Intel" }],
      title: "Phishing Trends & Threat Intelligence for African Institutions",
      to: "/work/cybersecurity-threat-intelligence",
    },
    {
      img: "/images/data-lifecycle.jpg",
      tags: [{ text: "Data" }],
      title: "Data Collection, Translation & Integrity in Low-Resource Environments",
      to: "/work/data-collection-translation-integrity",
    },
    {
      img: "/images/canarydrop.jpg",
      tags: [{ text: "AI & ML" }, { text: "Fairness" }],
      title: "AI Fairness Audits & Interpretability for Consequential Decisions",
      to: "/work/ai-machine-learning-fairness",
    },
  ];
  return (
    <section style={{ background: "var(--dark-base)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.7rem] font-normal mb-2" style={{ color: "var(--dark-text)" }}>
          Changing the way we secure data and systems
        </h2>
        <p className="text-[0.88rem] mb-8" style={{ color: "var(--dark-text-secondary)" }}>
          We are building the security and data tools of tomorrow, while continuing to provide
          the research and protection the world requires today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Link
              to={c.to}
              key={c.title}
              className="rounded-2xl overflow-hidden no-underline transition-shadow group border"
              style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.45)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {c.tags.map((t) => (
                    <span
                      key={t.text}
                      className="eyebrow text-[0.58rem] px-2.5 py-1 rounded-full border"
                      style={{ background: "var(--dark-elevated)", borderColor: "var(--dark-hairline)", color: "var(--orange)" }}
                    >
                      {t.text}
                    </span>
                  ))}
                </div>
                <h3 className="text-[0.88rem] font-semibold leading-snug mb-3" style={{ color: "var(--dark-text)" }}>
                  {c.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold" style={{ color: "var(--orange)" }}>
                  <ChevronRight className="w-3.5 h-3.5" /> Find out more
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/work"
            className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
          >
            Discover our activities and achievements
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   RESEARCH AREAS — centered heading + 4 image cards
   ═══════════════════════════════════════════ */
function ResearchAreas() {
  const areas = [
    { img: "/images/fieldwork.jpg", title: "Privacy Engineering" },
    { img: "/images/team-working.jpg", title: "Quantum ML" },
    { img: "/images/about-lab.jpg", title: "Interpretability" },
    { img: "/images/data-lifecycle.jpg", title: "Data Governance" },
  ];
  return (
    <section style={{ background: "var(--dark-surface)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto">
        <h2
          className="text-center font-normal mb-10 max-w-[640px] mx-auto"
          style={{
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.35,
            color: "var(--dark-text)",
          }}
        >
          Place security and data governance at the heart of our research,
          tools and operations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((a) => (
            <Link
              to="/work"
              key={a.title}
              className="no-underline group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold" style={{ color: "var(--dark-text)" }}>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: "var(--orange)" }} /> {a.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CAREERS BANNER — bg image + floating white card
   ═══════════════════════════════════════════ */
function CareersBanner() {
  return (
    <section className="px-[clamp(1.5rem,4vw,4rem)] py-0" style={{ background: "var(--dark-base)" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-[400px]">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* White floating card */}
          <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 max-w-[380px] rounded-2xl p-8 md:p-10 shadow-2xl border" style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}>
            <h2
              className="font-normal mb-6"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", lineHeight: 1.3, color: "var(--dark-text)" }}
            >
              Our research owes everything to its talents
            </h2>
            <div className="text-center">
              <Link
                to="/opportunities"
                className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
                style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
              >
                Find out about opportunities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   NEWS — two-column: events + research
   ═══════════════════════════════════════════ */
function News() {
  const events = [
    { date: "07/12", year: "2026", title: "Cybersecurity Workshop: Phishing Detection & Response" },
    { date: "08/05", year: "2026", title: "Data Governance Framework Launch Event" },
    { date: "09/18", year: "2026", title: "Quantum ML Symposium 2026" },
  ];
  const papers = [
    { date: "06/02", year: "2026", title: "Emerging Phishing Trends Targeting African Institutions" },
    { date: "05/15", year: "2026", title: "A Primer on Quantum Machine Learning for Research Teams" },
    { date: "04/22", year: "2026", title: "Securing Health Data in Low-Resource Environments" },
  ];
  return (
    <section style={{ background: "var(--dark-base)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Events */}
        <div>
          <h3 className="text-[0.9rem] font-semibold tracking-wider uppercase mb-6" style={{ color: "var(--dark-text)" }}>
            Upcoming Events
          </h3>
          <div className="space-y-0">
            {events.map((e, i) => (
              <div key={i} className="flex gap-4 py-4 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
                <div className="min-w-[52px]">
                  <span className="font-bold text-[0.92rem] block" style={{ color: "var(--dark-text)" }}>{e.date}</span>
                  <span className="font-bold text-[0.92rem] block" style={{ color: "var(--dark-text)" }}>{e.year}</span>
                </div>
                <span className="text-[0.84rem] leading-snug pt-0.5" style={{ color: "var(--dark-text-secondary)" }}>
                  {e.title}
                </span>
              </div>
            ))}
          </div>
          <Link to="/events" className="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-semibold no-underline" style={{ color: "var(--orange)" }}>
            <ChevronRight className="w-3.5 h-3.5" /> All events
          </Link>
        </div>
        {/* Papers */}
        <div>
          <h3 className="text-[0.9rem] font-semibold tracking-wider uppercase mb-6" style={{ color: "var(--dark-text)" }}>
            Featured Research
          </h3>
          <div className="space-y-0">
            {papers.map((p, i) => (
              <div key={i} className="flex gap-4 py-4 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
                <div className="min-w-[52px]">
                  <span className="font-bold text-[0.92rem] block" style={{ color: "var(--dark-text)" }}>{p.date}</span>
                  <span className="font-bold text-[0.92rem] block" style={{ color: "var(--dark-text)" }}>{p.year}</span>
                </div>
                <span className="text-[0.84rem] leading-snug pt-0.5" style={{ color: "var(--dark-text-secondary)" }}>
                  {p.title}
                </span>
              </div>
            ))}
          </div>
          <Link to="/research" className="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-semibold no-underline" style={{ color: "var(--orange)" }}>
            <ChevronRight className="w-3.5 h-3.5" /> All research
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   SUBSCRIBE — centered heading + button
   ═══════════════════════════════════════════ */
function Subscribe() {
  return (
    <section style={{ background: "var(--dark-surface)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[1.3rem] font-normal mb-6" style={{ color: "var(--dark-text)" }}>
          Receive our research updates
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
          style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
        >
          Subscribe
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PUBLICATIONS — 3 card thumbnails
   ═══════════════════════════════════════════ */
function Publications() {
  const pubs = [
    { img: "/images/about-lab.jpg", title: "Annual Security Threat Report 2026", link: "/reports" },
    { img: "/images/data-lifecycle.jpg", title: "Data Governance Framework Guide", link: "/reports" },
    { img: "/images/qkabrine.jpg", title: "Quantum ML Benchmark Study", link: "/research" },
  ];
  return (
    <section style={{ background: "var(--dark-base)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[1.3rem] font-normal mb-8" style={{ color: "var(--dark-text)" }}>
          Our reference publications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pubs.map((p) => (
            <Link
              to={p.link}
              key={p.title}
              className="no-underline group flex gap-4 items-start"
            >
              <div className="w-[100px] h-[130px] rounded-lg overflow-hidden shrink-0 relative">
                <img src={p.img} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.15)" }}>
                  <Download className="w-6 h-6 text-white opacity-80" />
                </div>
              </div>
              <div className="pt-1">
                <h3 className="text-[0.86rem] font-medium leading-snug mb-2" style={{ color: "var(--dark-text)" }}>
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[0.78rem] font-semibold" style={{ color: "var(--orange)" }}>
                  <Download className="w-3 h-3" /> PDF
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/reports"
            className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
          >
            All our publications
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PARTNERS
   ═══════════════════════════════════════════ */
function Partners() {
  const partners = [
    "techbuzzhub", "geolens", "tensorview", "fencher",
    "tonative", "intellisys", "aieswatini", "zindi",
  ];
  return (
    <section style={{ background: "var(--dark-surface)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[1.1rem] font-normal mb-8 text-center" style={{ color: "var(--dark-text-secondary)" }}>
          Partners & Associates
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border p-5 flex items-center justify-center" style={{ background: "var(--dark-base)", borderColor: "var(--dark-hairline)" }}>
              <img src={`/images/partners/${p}.png`} alt={p} loading="lazy" className="max-h-10 w-auto object-contain brightness-0 invert opacity-55 hover:opacity-90 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Index() {
  return (
    <div style={{ background: "var(--dark-base)" }}>
      <HeroCarousel />
      <CompanyIntro />
      <ProjectCards />
      <ResearchAreas />
      <CareersBanner />
      <News />
      <Subscribe />
      <Publications />
      <Partners />
    </div>
  );
}
