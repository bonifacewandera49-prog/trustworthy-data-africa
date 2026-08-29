import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users, Monitor, Globe, Building2, Search, CalendarDays } from "lucide-react";
import WavePattern from "@/components/WavePattern";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import type { EventRow } from "@/lib/events";

const locationIcon = (type: string) => {
  if (type === "online") return <Monitor className="w-3.5 h-3.5" />;
  if (type === "hybrid") return <Globe className="w-3.5 h-3.5" />;
  return <Building2 className="w-3.5 h-3.5" />;
};

export default function Events() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("events")
      .select("*")
      .eq("published", true)
      .order("start_date", { ascending: true })
      .then(({ data }) => {
        setEvents((data as EventRow[]) || []);
        setLoading(false);
      });
  }, []);

  const now = new Date();
  const filtered = events.filter((e) => !search || e.title.toLowerCase().includes(search.toLowerCase()));
  const upcoming = filtered.filter((e) => new Date(e.start_date) >= now);
  const past = filtered.filter((e) => new Date(e.start_date) < now).reverse();
  const display = view === "upcoming" ? upcoming : past;

  const grouped = display.reduce<Record<string, EventRow[]>>((acc, e) => {
    const d = new Date(e.start_date);
    const key = d.toLocaleDateString("en-GB", { weekday: "long", month: "short", day: "numeric", year: "numeric" });
    if (!acc[key]) acc[key] = [];
    acc[key].push(e);
    return acc;
  }, {});

  return (
    <>
      <Hero tag="Events" title="Calendar & Events" subtitle="An overview of upcoming workshops, webinars, and research presentations. Stay connected with our latest activities." />
      <Section>
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--dark-text-muted)" }} />
            <Input placeholder="Search events..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }} />
          </div>
          <div className="flex rounded-lg p-0.5" style={{ background: "hsl(var(--muted))" }}>
            <button onClick={() => setView("upcoming")} className="px-4 py-1.5 rounded-md text-xs font-semibold transition-colors" style={view === "upcoming" ? { background: "var(--orange)", color: "var(--dark-text)" } : { color: "var(--dark-text-muted)" }}>Upcoming</button>
            <button onClick={() => setView("past")} className="px-4 py-1.5 rounded-md text-xs font-semibold transition-colors" style={view === "past" ? { background: "var(--orange)", color: "var(--dark-text)" } : { color: "var(--dark-text-muted)" }}>Past</button>
          </div>
        </div>
        {loading ? (
          <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>Loading events…</p>
        ) : display.length === 0 ? (
          <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>{view === "upcoming" ? "No upcoming events. Check back soon!" : "No past events found."}</p>
        ) : (
          <div className="space-y-0">
            {Object.entries(grouped).map(([date, evts]) => (
              <div key={date} className="flex gap-6 rv">
                <div className="w-28 shrink-0 pt-6 max-sm:hidden">
                  <div className="text-sm font-semibold" style={{ color: "var(--dark-text)" }}>{date.split(",")[0]}</div>
                  <div className="text-xs" style={{ color: "var(--dark-text-muted)" }}>{date.split(",").slice(1).join(",").trim()}</div>
                </div>
                <div className="flex flex-col items-center max-sm:hidden">
                  <div className="w-2 h-2 rounded-full mt-7 shrink-0" style={{ background: "var(--orange)" }} />
                  <div className="w-px flex-1" style={{ background: "var(--dark-hairline)" }} />
                </div>
                <div className="flex-1 py-3 space-y-3">
                  {evts.map((e) => (
                    <Link key={e.id} to={`/events/${e.slug}`} className="block rounded-xl p-5 border transition-colors no-underline group" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}
                      onMouseEnter={(evt) => (evt.currentTarget.style.borderColor = "rgba(217,83,30,0.3)")}
                      onMouseLeave={(evt) => (evt.currentTarget.style.borderColor = "var(--dark-hairline)")}>
                      <div className="flex gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs mb-1 font-mono" style={{ color: "var(--dark-text-muted)" }}>
                            {new Date(e.start_date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                          </div>
                          <h3 className="text-base font-semibold mb-1 leading-snug transition-colors" style={{ color: "var(--dark-text)" }}>{e.title}</h3>
                          <div className="flex items-center gap-3 text-xs flex-wrap" style={{ color: "var(--dark-text-muted)" }}>
                            {e.location && <span className="flex items-center gap-1">{locationIcon(e.location_type)} {e.location}</span>}
                            {e.max_capacity && <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {e.max_capacity} spots</span>}
                          </div>
                          <p className="text-xs mt-2 line-clamp-2 max-sm:hidden" style={{ color: "var(--dark-text-muted)" }}>{e.description}</p>
                          <div className="flex items-center gap-2 mt-3 flex-wrap">
                            <Badge variant="secondary" className="rounded font-mono text-[0.55rem] tracking-widest uppercase" style={{ background: "hsl(var(--muted))" }}>{e.event_type}</Badge>
                            {e.require_approval && <Badge className="rounded font-mono text-[0.55rem] tracking-widest uppercase" style={{ background: "rgba(245,158,11,0.1)", color: "#fbbf24", borderColor: "rgba(245,158,11,0.2)" }}>Approval Required</Badge>}
                            {!e.is_free && <Badge variant="outline" className="rounded font-mono text-[0.55rem] tracking-widest uppercase" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text-muted)" }}>Paid</Badge>}
                            {e.registration_open && new Date(e.start_date) >= now && <span className="text-[0.7rem] font-semibold ml-auto" style={{ color: "var(--orange)" }}>Register &rarr;</span>}
                          </div>
                        </div>
                        {e.cover_image && (
                          <div className="relative w-32 h-24 rounded-lg shrink-0 max-sm:w-20 max-sm:h-16 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(155deg, var(--dark-surface) 0%, var(--dark-elevated) 100%)" }}>
                            <div className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"><WavePattern opacity={0.08} /></div>
                            <CalendarDays className="relative z-[1] w-6 h-6" style={{ color: "var(--orange)", opacity: 0.55 }} />
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
