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
    <section style={{ background: "#fff" }} className="pt-4 pb-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[420px] md:min-h-[480px]">
        {/* Image — rounded, with subtle bg */}
        <div className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[4/3]" style={{ background: "#F0EEEB" }}>
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
              color: "#B7412A",
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
              style={{ borderColor: "#B7412A", color: "#B7412A" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#B7412A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#B7412A";
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
              style={{ color: "#999" }}
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
                  background: i === active ? "#B7412A" : "#ccc",
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
    { num: "09", label: "Core Research Areas", color: "#2E8B57" },
    { num: "02", label: "Products", color: "#1E6FAD" },
    { num: "06", label: "Sectors We Serve", color: "#B7412A" },
  ];
  return (
    <section style={{ background: "#fff" }} className="py-14 md:py-18 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left — intro text */}
        <div>
          <h2
            className="font-normal mb-5"
            style={{
              fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)",
              lineHeight: 1.3,
              color: "#B7412A",
            }}
          >
            Solid Elf is a cybersecurity and data research lab that builds tools,
            frameworks, and datasets to keep systems secure and make data trustworthy.
          </h2>
          <p className="text-[0.88rem] leading-[1.75]" style={{ color: "#555" }}>
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
              <span className="text-[0.82rem] mt-1 block" style={{ color: "#555" }}>
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
      tags: [{ text: "Cybersecurity", bg: "#B7412A" }, { text: "Threat Intel", bg: "#D4A017" }],
      title: "Phishing Trends & Threat Intelligence for African Institutions",
      to: "/work/cybersecurity-threat-intelligence",
    },
    {
      img: "/images/data-lifecycle.jpg",
      tags: [{ text: "Data", bg: "#2E8B57" }],
      title: "Data Collection, Translation & Integrity in Low-Resource Environments",
      to: "/work/data-collection-translation-integrity",
    },
    {
      img: "/images/canarydrop.jpg",
      tags: [{ text: "AI & ML", bg: "#1E6FAD" }, { text: "Fairness", bg: "#8B5A9F" }],
      title: "AI Fairness Audits & Interpretability for Consequential Decisions",
      to: "/work/ai-machine-learning-fairness",
    },
  ];
  return (
    <section style={{ background: "#fff" }} className="py-14 md:py-18 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[1.4rem] md:text-[1.7rem] font-normal mb-2" style={{ color: "#333" }}>
          Changing the way we secure data and systems
        </h2>
        <p className="text-[0.88rem] mb-8" style={{ color: "#666" }}>
          We are building the security and data tools of tomorrow, while continuing to provide
          the research and protection the world requires today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <Link
              to={c.to}
              key={c.title}
              className="rounded-2xl overflow-hidden bg-white no-underline transition-shadow group border"
              style={{ borderColor: "#E8E4E0" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)"; }}
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
                      className="text-[0.58rem] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full text-white"
                      style={{ background: t.bg }}
                    >
                      {t.text}
                    </span>
                  ))}
                </div>
                <h3 className="text-[0.88rem] font-semibold leading-snug mb-3" style={{ color: "#333" }}>
                  {c.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold" style={{ color: "#B7412A" }}>
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
            style={{ borderColor: "#B7412A", color: "#B7412A" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#B7412A"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B7412A"; }}
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
    <section style={{ background: "#F5F3F0" }} className="py-14 md:py-18 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto">
        <h2
          className="text-center font-normal mb-10 max-w-[640px] mx-auto"
          style={{
            fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)",
            lineHeight: 1.35,
            color: "#1E7A8C",
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
              <span className="inline-flex items-center gap-1 text-[0.82rem] font-semibold" style={{ color: "#333" }}>
                <ChevronRight className="w-3.5 h-3.5" style={{ color: "#B7412A" }} /> {a.title}
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
    <section className="px-[clamp(1.5rem,4vw,4rem)] py-0" style={{ background: "#fff" }}>
      <div className="max-w-[1140px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-[400px]">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* White floating card */}
          <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 max-w-[380px] bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h2
              className="font-normal mb-6"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", lineHeight: 1.3, color: "#333" }}
            >
              Our research owes everything to its talents
            </h2>
            <div className="text-center">
              <Link
                to="/opportunities"
                className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
                style={{ borderColor: "#B7412A", color: "#B7412A" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#B7412A"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B7412A"; }}
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
    <section style={{ background: "#fff" }} className="py-14 md:py-18 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Events */}
        <div>
          <h3 className="text-[0.9rem] font-semibold tracking-wider uppercase mb-6" style={{ color: "#333" }}>
            Upcoming Events
          </h3>
          <div className="space-y-0">
            {events.map((e, i) => (
              <div key={i} className="flex gap-4 py-4 border-b" style={{ borderColor: "#E8E4E0" }}>
                <div className="min-w-[52px]">
                  <span className="font-bold text-[0.92rem] block" style={{ color: "#333" }}>{e.date}</span>
                  <span className="font-bold text-[0.92rem] block" style={{ color: "#333" }}>{e.year}</span>
                </div>
                <span className="text-[0.84rem] leading-snug pt-0.5" style={{ color: "#444" }}>
                  {e.title}
                </span>
              </div>
            ))}
          </div>
          <Link to="/events" className="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-semibold no-underline" style={{ color: "#B7412A" }}>
            <ChevronRight className="w-3.5 h-3.5" /> All events
          </Link>
        </div>
        {/* Papers */}
        <div>
          <h3 className="text-[0.9rem] font-semibold tracking-wider uppercase mb-6" style={{ color: "#333" }}>
            Featured Research
          </h3>
          <div className="space-y-0">
            {papers.map((p, i) => (
              <div key={i} className="flex gap-4 py-4 border-b" style={{ borderColor: "#E8E4E0" }}>
                <div className="min-w-[52px]">
                  <span className="font-bold text-[0.92rem] block" style={{ color: "#333" }}>{p.date}</span>
                  <span className="font-bold text-[0.92rem] block" style={{ color: "#333" }}>{p.year}</span>
                </div>
                <span className="text-[0.84rem] leading-snug pt-0.5" style={{ color: "#444" }}>
                  {p.title}
                </span>
              </div>
            ))}
          </div>
          <Link to="/research" className="inline-flex items-center gap-1 mt-4 text-[0.82rem] font-semibold no-underline" style={{ color: "#B7412A" }}>
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
    <section style={{ background: "#F5F3F0" }} className="py-14 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[1.3rem] font-normal mb-6" style={{ color: "#333" }}>
          Receive our research updates
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center px-7 py-2.5 rounded-full text-[0.85rem] font-semibold no-underline transition-all border"
          style={{ borderColor: "#B7412A", color: "#B7412A" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#B7412A"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B7412A"; }}
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
    <section style={{ background: "#fff" }} className="py-14 md:py-18 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[1.3rem] font-normal mb-8" style={{ color: "#333" }}>
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
                <h3 className="text-[0.86rem] font-medium leading-snug mb-2" style={{ color: "#333" }}>
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-[0.78rem] font-semibold" style={{ color: "#B7412A" }}>
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
            style={{ borderColor: "#B7412A", color: "#B7412A" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#B7412A"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#B7412A"; }}
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
    "capitello", "cyberhive", "eswatini", "deltanova",
    "athena", "zimtrust", "quantum", "regiondata",
  ];
  return (
    <section style={{ background: "#F5F3F0" }} className="py-14 px-[clamp(1.5rem,4vw,4rem)]">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-[1.1rem] font-normal mb-8 text-center" style={{ color: "#666" }}>
          Partners & Associates
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border p-5 flex items-center justify-center" style={{ background: "#fff", borderColor: "#E8E4E0" }}>
              <img src={`/images/partners/${p}.png`} alt={p} className="max-h-10 w-auto object-contain" />
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
    <div style={{ background: "#fff" }}>
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
