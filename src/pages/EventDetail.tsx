import { useParams, Link } from "react-router-dom";
import { Calendar, Users, Monitor, Globe, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { formatEventDate } from "@/lib/events";
import { fallbackEvents } from "@/data/events";

const locationIcon = (type: string) => {
  if (type === "online") return <Monitor className="w-4 h-4" />;
  if (type === "hybrid") return <Globe className="w-4 h-4" />;
  return <Building2 className="w-4 h-4" />;
};

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event=fallbackEvents.find(e=>e.slug===slug);
  const taken: number | null=null;

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

  const remaining = event.max_capacity != null && taken != null ? Math.max(event.max_capacity - taken, 0) : null;
  const isFull = remaining === 0;
  const isPast = new Date(event.start_date) < new Date();

  return (
    <>
      <Hero image={event.cover_image || undefined} tag={!!event.location?.toLowerCase().includes("proposed") ? "Proposed event" : "Event"} title={event.title} subtitle={formatEventDate(event.start_date, event.end_date)} />
      <Section narrow>
        <div className="space-y-6">
          {!!event.location?.toLowerCase().includes("proposed") && <p className="border-l-2 pl-4 text-sm" style={{borderColor:"var(--orange)"}}>Proposed session. The date and format are provisional. <Link to="/contact" className="underline">Contact us to register interest.</Link></p>}
          <div className="flex flex-wrap gap-4 mb-4">
            {event.location && <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}>{locationIcon(event.location_type)} {event.location}</span>}
            {event.max_capacity != null && (
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}>
                <Users className="w-3.5 h-3.5" /> {remaining != null ? `${remaining} of ${event.max_capacity} spots left` : `${event.max_capacity} spots`}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--dark-text-muted)" }}><Calendar className="w-3.5 h-3.5" /> {event.event_type}</span>
          </div>
          <p className="text-[0.93rem] leading-[1.85] whitespace-pre-line" style={{ color: "var(--dark-text)" }}>{event.description}</p>
          <div className="pt-4 flex items-center gap-4 flex-wrap">
            {isPast ? (
              <span className="text-sm" style={{ color: "var(--dark-text-muted)" }}>This event has already taken place.</span>
            ) : event.registration_open ? (
              <>
                <Link to={`/contact?service=${encodeURIComponent("Event enquiry: "+event.title)}`} className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
                  {!!event.location?.toLowerCase().includes("proposed") ? "Enquire to attend" : isFull ? "Join Waitlist" : "Register Now"}
                </Link>
                {event.require_approval && <span className="text-xs" style={{ color: "#fbbf24" }}>Registration requires approval</span>}
              </>
            ) : (
              <span className="text-sm" style={{ color: "var(--dark-text-muted)" }}>Registration is closed for this event.</span>
            )}
            <p className="text-xs leading-6">Enquire to confirm attendance arrangements. This website does not process registrations for these listings.</p>
          </div>
        </div>
      </Section>
      <Section><div className="related-grid"><Link className="related-card" to="/apply"><span>Community</span><h3>Join Our Community</h3></Link><Link className="related-card" to="/consultancy/custom-training-programmes"><span>For your team</span><h3>Explore tailored training</h3></Link><Link className="related-card" to="/blog"><span>Keep learning</span><h3>Read practical guides</h3></Link><Link className="related-card" to="/events"><span>Programme</span><h3>View all events</h3></Link></div></Section>
    </>
  );
}
