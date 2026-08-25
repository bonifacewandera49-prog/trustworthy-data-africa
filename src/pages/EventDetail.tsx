import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Users, Monitor, Globe, Building2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { supabase } from "@/integrations/supabase/client";
import { formatEventDate, type EventRow } from "@/lib/events";

const locationIcon = (type: string) => {
  if (type === "online") return <Monitor className="w-4 h-4" />;
  if (type === "hybrid") return <Globe className="w-4 h-4" />;
  return <Building2 className="w-4 h-4" />;
};

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<EventRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [taken, setTaken] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase.from("events").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(async ({ data }) => {
      setEvent((data as EventRow) || null);
      setLoading(false);
      if (data) {
        const { data: av } = await supabase.rpc("event_availability", { _event_id: (data as EventRow).id });
        const row = Array.isArray(av) ? av[0] : av;
        if (row) setTaken(Number(row.taken));
      }
    });
  }, [slug]);

  if (loading) {
    return <Section narrow><p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>Loading…</p></Section>;
  }

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
      <Hero title={event.title} subtitle={formatEventDate(event.start_date, event.end_date)} />
      <Section narrow>
        <div className="space-y-6">
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
                <Link to={`/events/${slug}/register`} className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
                  {isFull ? "Join Waitlist" : "Register Now"}
                </Link>
                {event.require_approval && <span className="text-xs" style={{ color: "#fbbf24" }}>Registration requires approval</span>}
              </>
            ) : (
              <span className="text-sm" style={{ color: "var(--dark-text-muted)" }}>Registration is closed for this event.</span>
            )}
            <Link to={`/events/${slug}/access`} className="text-xs underline" style={{ color: "var(--dark-text-muted)" }}>Already registered?</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
