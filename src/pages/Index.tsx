import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Landmark,
  FlaskConical,
  Quote,
  Calendar,
  MapPin,
  Monitor,
} from "lucide-react";
import { blogPosts } from "@/data/blog";
import { activityAreas } from "@/data/activities";
import { supabase } from "@/integrations/supabase/client";
import type { EventRow } from "@/lib/events";

/* ═══════════════════════════════════════════
   HERO: full-bleed image, big two-line headline, CTA
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="pt-8 px-[clamp(1rem,4vw,4rem)]">
      <div
        className="max-w-[1240px] mx-auto relative rounded-2xl overflow-hidden min-h-[520px] md:min-h-[600px] flex items-end"
        style={{ background: "var(--dark-elevated)" }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(25,20,16,0.97) 0%, rgba(25,20,16,0.88) 30%, rgba(25,20,16,0.35) 62%, rgba(25,20,16,0.15) 100%)",
          }}
        />
        <div className="relative z-[1] p-8 md:p-16 pb-12 md:pb-16 max-w-[640px]">
          <h1
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 3.4rem)",
              lineHeight: 1.08,
              color: "var(--dark-text)",
            }}
          >
            Building trust
            <br />
            in <span style={{ color: "var(--orange)" }}>data & systems.</span>
          </h1>
          <p
            className="text-[0.95rem] md:text-[1rem] leading-relaxed mb-8 max-w-[480px]"
            style={{ color: "var(--dark-text-secondary)" }}
          >
            We're a security, data, and AI lab, building tools, running
            research, and training teams so businesses, governments, and
            communities across Africa can trust the systems they depend on.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-[0.86rem] font-semibold no-underline transition-colors"
            style={{ background: "var(--orange)", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}
          >
            About us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TRUSTED SOLUTIONS: 2x2 image cards
   ═══════════════════════════════════════════ */
const solutionCards = [
  {
    title: "Secure Data Collection",
    desc: "We design collection protocols and train field teams so data stays trustworthy from the very first entry point.",
    img: "/images/fieldwork.jpg",
    to: "/work/data-collection-translation-integrity",
  },
  {
    title: "Cybersecurity & Threat Intel",
    desc: "We track real-world threat patterns and build detection tools that catch breaches before they spread.",
    img: "/images/security-ops.jpg",
    to: "/work/cybersecurity-threat-intelligence",
  },
  {
    title: "Privacy Engineering",
    desc: "We turn data protection legislation into practical engineering: synthetic data, differential privacy, secure computation.",
    img: "/images/data-lifecycle.jpg",
    to: "/work/privacy-engineering-data-protection",
  },
  {
    title: "AI, ML & Quantum Research",
    desc: "We build fairness-audited models and explore quantum-classical hybrid approaches to machine learning.",
    img: "/images/qkabrine.jpg",
    to: "/work/ai-machine-learning-fairness",
  },
];

function TrustedSolutions() {
  return (
    <section
      style={{ background: "var(--dark-base)" }}
      className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2
          className="font-normal mb-3 max-w-[560px]"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25, color: "var(--dark-text)" }}
        >
          What we do, grounded in real conditions
        </h2>
        <p className="text-[0.9rem] mb-10 max-w-[560px]" style={{ color: "var(--dark-text-secondary)" }}>
          We pair field expertise with tooling, research, and hands-on training,
          so the systems and data you rely on hold up under real-world conditions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {solutionCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="relative rounded-2xl overflow-hidden no-underline group min-h-[260px] flex flex-col justify-end p-6"
            >
              <img
                src={c.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(25,20,16,0.05) 0%, rgba(25,20,16,0.55) 55%, rgba(25,20,16,0.92) 100%)",
                }}
              />
              <div className="relative z-[1]">
                <h3 className="text-[1.05rem] font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>
                  {c.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed max-w-[320px]" style={{ color: "var(--dark-text-secondary)" }}>
                  {c.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-[0.78rem] font-semibold mt-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                  style={{ color: "var(--orange)" }}
                >
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHATEVER YOUR WORLD: 3 sector pillar cards
   ═══════════════════════════════════════════ */
const worldCards = [
  {
    icon: Shield,
    title: "Health & Government",
    desc: "Securing patient data, sovereign systems, and citizen-facing services from field clinics to national infrastructure.",
    img: "/images/security-ops.jpg",
    to: "/sectors",
  },
  {
    icon: Landmark,
    title: "Finance & Enterprise",
    desc: "Adversarial testing, fraud models, and fairness auditing grounded in local, real-world threat intelligence.",
    img: "/images/canarydrop.jpg",
    to: "/sectors",
  },
  {
    icon: FlaskConical,
    title: "Research, AI & Emerging Tech",
    desc: "Independent technology assessment, interpretability tooling, and ethical data collection for research and NGOs.",
    img: "/images/qkabrine.jpg",
    to: "/sectors",
  },
];

function WhateverYourWorld() {
  return (
    <section
      style={{ background: "var(--dark-surface)" }}
      className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2
          className="font-normal mb-3"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25, color: "var(--dark-text)" }}
        >
          Whatever your sector, we're here to help you succeed
        </h2>
        <p className="text-[0.9rem] mb-10 max-w-[620px]" style={{ color: "var(--dark-text-secondary)" }}>
          Data security, privacy, and governance challenges look different in every
          sector. Our aim is the same everywhere: to put rigour behind the systems
          that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {worldCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="rounded-2xl overflow-hidden no-underline group border transition-all"
              style={{ background: "var(--dark-base)", borderColor: "var(--dark-hairline)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,122,61,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--dark-hairline)")}
            >
              <div className="p-6 pb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(255,122,61,0.12)" }}
                >
                  <c.icon className="w-5 h-5" style={{ color: "var(--orange)" }} />
                </div>
                <h3 className="text-[0.98rem] font-semibold mb-2" style={{ color: "var(--dark-text)" }}>
                  {c.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed mb-3" style={{ color: "var(--dark-text-secondary)" }}>
                  {c.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-[0.78rem] font-semibold"
                  style={{ color: "var(--orange)" }}
                >
                  Explore <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={c.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   OUR SERVICES: real activity areas + view-all button
   ═══════════════════════════════════════════ */
function OurServices() {
  const shown = activityAreas.slice(0, 6);

  return (
    <section
      style={{ background: "var(--dark-base)" }}
      className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
          <div>
            <h2
              className="font-normal mb-2"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25, color: "var(--dark-text)" }}
            >
              Our services
            </h2>
            <p className="text-[0.9rem] max-w-[560px]" style={{ color: "var(--dark-text-secondary)" }}>
              Nine areas of work spanning security, data, privacy, and AI,
              from field data collection to quantum machine learning.
            </p>
          </div>
          <Link
            to="/work"
            className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[0.85rem] font-semibold no-underline transition-all border shrink-0"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
          >
            View all services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((a) => (
            <Link
              key={a.slug}
              to={`/work/${a.slug}`}
              className="rounded-2xl p-6 no-underline border transition-all group flex flex-col"
              style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,122,61,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--dark-hairline)"; e.currentTarget.style.transform = "none"; }}
            >
              <h3 className="text-[0.98rem] font-semibold mb-2.5 leading-snug" style={{ color: "var(--dark-text)" }}>
                {a.title}
              </h3>
              <p className="text-[0.82rem] leading-relaxed mb-5 flex-1" style={{ color: "var(--dark-text-secondary)" }}>
                {a.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[0.8rem] font-semibold" style={{ color: "var(--orange)" }}>
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 px-7 py-2.5 rounded-lg text-[0.85rem] font-semibold no-underline transition-all border"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
          >
            View all services <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIAL: accent gradient quote block
   ═══════════════════════════════════════════ */
const testimonials = [
  {
    quote:
      "Solid Elf's threat intelligence work gave us a real, ground-level picture of the phishing patterns actually hitting our users, not a generic global model. It changed how we prioritise security training.",
    name: "Partner Organisation",
    role: "Technology & Data Partner",
  },
  {
    quote:
      "The data governance framework the lab built with us is the first one that actually reflected how our field teams collect data: paper records, USSD, and all. It's now core to how we onboard new partners.",
    name: "Sector Collaborator",
    role: "Programme Lead, Research & NGOs",
  },
];

function Testimonial() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((v) => (v + 1) % testimonials.length);
  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="py-16 md:py-24 px-[clamp(1.5rem,4vw,4rem)]"
      style={{ background: "linear-gradient(120deg, var(--dark-base) 0%, #3a2415 45%, var(--orange) 130%)" }}
    >
      <div className="max-w-[1240px] mx-auto">
        <span className="font-mono text-[0.72rem] tracking-widest uppercase mb-8 block" style={{ color: "rgba(255,255,255,0.75)" }}>
          What our partners think
        </span>
        <div className="max-w-[760px]">
          <Quote className="w-8 h-8 mb-5" style={{ color: "rgba(255,255,255,0.55)" }} />
          <p
            className="font-normal mb-8"
            style={{ fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", lineHeight: 1.4, color: "#fff" }}
          >
            {t.quote}
          </p>
          <p className="text-[0.9rem] font-semibold" style={{ color: "#fff" }}>{t.name}</p>
          <p className="text-[0.8rem]" style={{ color: "rgba(255,255,255,0.7)" }}>{t.role}</p>
        </div>
        <div className="flex gap-3 mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff", background: "transparent" }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff", background: "transparent" }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   UPCOMING EVENTS: live data from Supabase
   ═══════════════════════════════════════════ */
function locationIcon(type: string) {
  if (type === "online") return <Monitor className="w-3.5 h-3.5" />;
  return <MapPin className="w-3.5 h-3.5" />;
}

function UpcomingEvents() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("events")
      .select("*")
      .eq("published", true)
      .gte("start_date", new Date().toISOString())
      .order("start_date", { ascending: true })
      .limit(3)
      .then(({ data }) => {
        setEvents((data as EventRow[]) || []);
        setLoading(false);
      });
  }, []);

  if (!loading && events.length === 0) return null;

  return (
    <section
      style={{ background: "var(--dark-base)" }}
      className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2
              className="font-normal mb-2"
              style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25, color: "var(--dark-text)" }}
            >
              Upcoming events
            </h2>
            <p className="text-[0.9rem] max-w-[560px]" style={{ color: "var(--dark-text-secondary)" }}>
              Workshops, webinars, and training sessions, open to the organisations and communities we work with.
            </p>
          </div>
          <Link
            to="/events"
            className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-lg text-[0.85rem] font-semibold no-underline transition-all border shrink-0"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
          >
            View all events <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {loading ? (
          <p className="text-[0.85rem]" style={{ color: "var(--dark-text-secondary)" }}>Loading events…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {events.map((e) => (
              <Link
                key={e.id}
                to={`/events/${e.slug}`}
                className="rounded-2xl overflow-hidden no-underline border transition-all group flex flex-col"
                style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}
                onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = "rgba(255,122,61,0.35)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = "var(--dark-hairline)")}
              >
                {e.cover_image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={e.cover_image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[0.66rem] tracking-widest uppercase mb-3 flex items-center gap-1.5" style={{ color: "var(--orange)" }}>
                    <Calendar className="w-3 h-3" />
                    {new Date(e.start_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <h3 className="text-[1rem] font-semibold mb-2 leading-snug" style={{ color: "var(--dark-text)" }}>
                    {e.title}
                  </h3>
                  {e.location && (
                    <span className="inline-flex items-center gap-1.5 text-[0.78rem] mb-4" style={{ color: "var(--dark-text-secondary)" }}>
                      {locationIcon(e.location_type)} {e.location}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[0.8rem] font-semibold mt-auto" style={{ color: "var(--orange)" }}>
                    {e.registration_open ? "Register" : "Details"} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LATEST STORIES: big card + two smaller
   ═══════════════════════════════════════════ */
function LatestStories() {
  const posts = [...blogPosts].sort((a, b) => b.published_at.localeCompare(a.published_at)).slice(0, 3);
  const [main, ...rest] = posts;
  const dateFmt = (d: string) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

  return (
    <section
      style={{ background: "var(--dark-surface)" }}
      className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]"
    >
      <div className="max-w-[1240px] mx-auto">
        <h2
          className="font-normal mb-8"
          style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)", lineHeight: 1.25, color: "var(--dark-text)" }}
        >
          Latest stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to={`/blog/${main.slug}`}
            className="rounded-2xl overflow-hidden no-underline group border"
            style={{ background: "var(--dark-base)", borderColor: "var(--dark-hairline)" }}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={main.cover_image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="font-mono text-[0.66rem] tracking-widest uppercase mb-2 block" style={{ color: "var(--orange)" }}>
                {main.tag} · {dateFmt(main.published_at)}
              </span>
              <h3 className="text-[1.15rem] font-semibold leading-snug mb-2" style={{ color: "var(--dark-text)" }}>
                {main.title}
              </h3>
              <p className="text-[0.84rem] leading-relaxed" style={{ color: "var(--dark-text-secondary)" }}>
                {main.excerpt}
              </p>
            </div>
          </Link>
          <div className="flex flex-col gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="flex gap-4 rounded-2xl overflow-hidden no-underline group border p-4"
                style={{ background: "var(--dark-base)", borderColor: "var(--dark-hairline)" }}
              >
                <div className="w-[120px] h-[100px] rounded-lg overflow-hidden shrink-0">
                  <img src={p.cover_image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="py-1">
                  <span className="font-mono text-[0.62rem] tracking-widest uppercase mb-1.5 block" style={{ color: "var(--orange)" }}>
                    {p.tag} · {dateFmt(p.published_at)}
                  </span>
                  <h3 className="text-[0.88rem] font-semibold leading-snug" style={{ color: "var(--dark-text)" }}>
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center px-7 py-2.5 rounded-lg text-[0.85rem] font-semibold no-underline transition-all border"
            style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
          >
            Read our blog
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CAREERS BANNER
   ═══════════════════════════════════════════ */
function CareersBanner() {
  return (
    <section className="px-[clamp(1.5rem,4vw,4rem)] py-16 md:py-20" style={{ background: "var(--dark-base)" }}>
      <div className="max-w-[1240px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] md:min-h-[400px]">
          <img src="/images/team-working.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(25,20,16,0.45)" }} />
          <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 max-w-[380px] rounded-2xl p-8 md:p-10 shadow-2xl border" style={{ background: "var(--dark-surface)", borderColor: "var(--dark-hairline)" }}>
            <h2 className="font-normal mb-6" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", lineHeight: 1.3, color: "var(--dark-text)" }}>
              Our research owes everything to its talents
            </h2>
            <Link
              to="/opportunities"
              className="inline-flex items-center px-7 py-2.5 rounded-lg text-[0.85rem] font-semibold no-underline transition-all border"
              style={{ borderColor: "var(--orange)", color: "var(--orange)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange)"; }}
            >
              Find out about opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PARTNERS
   ═══════════════════════════════════════════ */
function Partners() {
  const partners = ["techbuzzhub", "geolens", "tensorview", "fencher", "tonative", "intellisys", "aieswatini", "zindi"];
  return (
    <section style={{ background: "var(--dark-surface)" }} className="py-16 md:py-20 px-[clamp(1.5rem,4vw,4rem)] border-t border-[var(--dark-hairline)]">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-[1.1rem] font-normal mb-8 text-center" style={{ color: "var(--dark-text-secondary)" }}>
          Partners & Associates
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border p-5 h-24 flex items-center justify-center" style={{ background: "var(--dark-base)", borderColor: "var(--dark-hairline)" }}>
              <img src={`/images/partners/${p}.png`} alt={p} loading="lazy" className="max-h-14 max-w-[70%] w-auto object-contain brightness-0 invert opacity-55 hover:opacity-90 transition-opacity duration-300" />
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
    <div>
      <Hero />
      <TrustedSolutions />
      <WhateverYourWorld />
      <OurServices />
      <Testimonial />
      <UpcomingEvents />
      <LatestStories />
      <CareersBanner />
      <Partners />
    </div>
  );
}
