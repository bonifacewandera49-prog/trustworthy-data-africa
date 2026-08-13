import { useParams, Link } from "react-router-dom";
import { Calendar, Users, Monitor, Globe, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const eventsMap: Record<string, { title: string; description: string; cover_image: string; event_type: string; location_type: string; location: string; start_date: string; end_date: string | null; max_capacity: number; is_free: boolean; registration_open: boolean; require_approval: boolean }> = {
 "cybersecurity-workshop-2026": {
 title: "Cybersecurity Workshop: Threat Intelligence for Financial Services",
 description: "A hands-on workshop on identifying and mitigating cyber threats targeting African financial institutions. Participants will learn practical techniques for threat detection, incident response, and security framework implementation. The workshop combines lectures with hands-on exercises using real-world scenarios.\n\nBy the end of this workshop, participants will be able to identify common attack vectors targeting financial services, implement basic threat detection measures, develop incident response plans, and understand compliance requirements for financial data protection.",
 cover_image: "/images/security-ops.jpg", event_type: "Workshop", location_type: "online", location: "Online", start_date: "2026-06-15T09:00:00", end_date: "2026-06-16T17:00:00", max_capacity: 50, is_free: true, registration_open: true, require_approval: false,
 },
 "qkabrine-launch": {
 title: "Qkabrine Platform Launch & Demo",
 description: "Join us for the public launch of the Qkabrine Quantum ML platform. This event will feature live demonstrations of the platform's capabilities, including automated quantum circuit search, AutoML pipelines, and fairness auditing tools.\n\nThe event will include a presentation on the research behind Qkabrine, a live demo of key features, and a Q&A session with the development team. Whether you're a researcher, developer, or simply curious about quantum ML, this event is for you.",
 cover_image: "/images/qkabrine.jpg", event_type: "Webinar", location_type: "online", location: "Online", start_date: "2026-07-10T14:00:00", end_date: null, max_capacity: 200, is_free: true, registration_open: true, require_approval: false,
 },
 "data-governance-summit": {
 title: "African Data Governance Summit 2026",
 description: "A three-day gathering of policymakers, researchers, and practitioners working on data governance frameworks for the African context. The summit will feature keynote presentations, panel discussions, and working groups focused on developing practical governance solutions.\n\nTopics include cross-border data sharing, compliance with national and regional regulations, privacy-preserving technologies, and capacity building for data governance institutions.",
 cover_image: "/images/team-working.jpg", event_type: "Conference", location_type: "in_person", location: "Accra, Ghana", start_date: "2026-08-20T08:00:00", end_date: "2026-08-22T18:00:00", max_capacity: 150, is_free: false, registration_open: false, require_approval: true,
 },
 "privacy-engineering-bootcamp": {
 title: "Privacy Engineering Bootcamp",
 description: "An intensive 3-day training programme on privacy engineering fundamentals. Designed for software developers and data engineers who want to build privacy-preserving systems.\n\nThe bootcamp covers differential privacy, synthetic data generation, secure multi-party computation, and practical implementation techniques. Participants will work on hands-on projects throughout the programme.",
 cover_image: "/images/about-lab.jpg", event_type: "Training", location_type: "hybrid", location: "Nairobi, Kenya / Online", start_date: "2026-05-10T09:00:00", end_date: "2026-05-12T17:00:00", max_capacity: 30, is_free: false, registration_open: true, require_approval: true,
 },
};

const locationIcon = (type: string) => {
 if (type === "online") return <Monitor className="w-4 h-4" />;
 if (type === "hybrid") return <Globe className="w-4 h-4" />;
 return <Building2 className="w-4 h-4" />;
};

const formatDate = (start: string, end: string | null) => {
 const s = new Date(start);
 if (!end) return s.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" });
 const e = new Date(end);
 if (s.getMonth() === e.getMonth())
 return `${s.toLocaleDateString("en-GB", { day: "numeric", hour: "2-digit", minute: "2-digit" })} \u2013 ${e.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}`;
 return `${s.toLocaleDateString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })} \u2013 ${e.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}`;
};

export default function EventDetail() {
 const { slug } = useParams<{ slug: string }>();
 const event = eventsMap[slug || ""];

 if (!event) {
 return (
 <div className="min-h-screen flex items-center justify-center">
 <div className="text-center">
 <h1 className="mb-4 text-4xl font-bold" style={{ color: "var(--dark-text)" }}>404</h1>
 <p className="mb-4 text-xl" style={{ color: "var(--dark-text-muted)" }}>Event not found</p>
 <Link to="/events" className="underline" style={{ color: "var(--orange)" }}>Back to Events</Link>
 </div>
 </div>
 );
 }

 return (
 <>
 <Hero title={event.title} subtitle={formatDate(event.start_date, event.end_date)} />
 <Section narrow>
 <div className="space-y-6">
 <div className="flex flex-wrap gap-4 mb-4">
 <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}>{locationIcon(event.location_type)} {event.location}</span>
 <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}><Users className="w-3.5 h-3.5" /> {event.max_capacity} spots</span>
 <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}><Calendar className="w-3.5 h-3.5" /> {event.event_type}</span>
 </div>
 <p className="text-[0.93rem] leading-[1.85] whitespace-pre-line" style={{ color: "var(--dark-text)" }}>{event.description}</p>
 {event.registration_open && (
 <div className="pt-4">
 <Link to={`/events/${slug}/register`} className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Register Now
 </Link>
 </div>
 )}
 </div>
 </Section>
 </>
 );
}
