import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { supabase } from "@/integrations/supabase/client";
import { formatEventDate, type RegistrationAccess } from "@/lib/events";

const statusLabel: Record<string, { text: string; color: string }> = {
  approved: { text: "Approved", color: "#4ade80" },
  pending: { text: "Pending approval", color: "#fbbf24" },
  waitlist: { text: "Waitlisted", color: "#fbbf24" },
  declined: { text: "Declined", color: "#f87171" },
  cancelled: { text: "Cancelled", color: "#f87171" },
};

export default function EventAccess() {
  const { slug, token } = useParams<{ slug: string; token: string }>();
  const [code, setCode] = useState(token || "");
  const [record, setRecord] = useState<RegistrationAccess | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const lookup = async (value: string) => {
    if (!slug || !value.trim()) return;
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase.rpc("get_registration_by_token", { _slug: slug, _token: value.trim() });
    const row = Array.isArray(data) ? data[0] : data;
    if (err || !row) {
      setError("No registration found for that access code.");
      setRecord(null);
    } else {
      setRecord(row as RegistrationAccess);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (token) lookup(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, slug]);

  if (record) {
    const s = statusLabel[record.status] || statusLabel.pending;
    return (
      <>
        <Hero tag="Event Access" title={record.event_title} subtitle={formatEventDate(record.event_start, null)} />
        <Section narrow>
          <div className="rounded-xl border p-8 space-y-4" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-[0.7rem] font-mono uppercase tracking-widest" style={{ color: "var(--dark-text-muted)" }}>Attendee</div>
                <div className="text-lg font-semibold" style={{ color: "var(--dark-text)" }}>{record.full_name}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase px-2.5 py-1 rounded" style={{ color: s.color, background: "hsl(var(--muted))" }}>
                <span className="w-[5px] h-[5px] rounded-full" style={{ background: s.color }} />
                {s.text}
              </span>
            </div>
            {record.event_location && (
              <p className="text-sm" style={{ color: "var(--dark-text-secondary)" }}>Location: {record.event_location}</p>
            )}
            {record.status === "approved" ? (
              record.meeting_url ? (
                <a href={record.meeting_url} target="_blank" rel="noreferrer" className="inline-block px-5 py-2.5 rounded-lg text-sm font-semibold no-underline" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>Join event</a>
              ) : (
                <p className="text-sm" style={{ color: "var(--dark-text-muted)" }}>Joining details will appear here closer to the event date.</p>
              )
            ) : (
              <p className="text-sm" style={{ color: "var(--dark-text-muted)" }}>Check back here for updates on your registration.</p>
            )}
            {record.checked_in && <p className="text-xs" style={{ color: "#4ade80" }}>Checked in</p>}
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Hero tag="Event Access" title="Access Required" subtitle="Enter the access code from your registration confirmation to view your ticket." />
      <Section narrow>
        <form onSubmit={(e) => { e.preventDefault(); lookup(code); }} className="max-w-[400px] mx-auto space-y-4">
          <input placeholder="Enter access code" className="w-full p-3 rounded-lg text-[0.86rem] outline-none text-center" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={code} onChange={(e) => setCode(e.target.value)} />
          {error && <p className="text-xs text-center" style={{ color: "#f87171" }}>{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Checking…" : "Access Event"}
          </button>
        </form>
      </Section>
    </>
  );
}
