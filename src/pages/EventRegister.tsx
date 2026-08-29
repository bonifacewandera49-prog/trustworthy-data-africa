import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { supabase } from "@/integrations/supabase/client";
import { formatEventDate, type EventRow, type RegistrationStatus } from "@/lib/events";

const inputCls = "w-full p-3 rounded-lg text-[0.86rem] outline-none transition-colors";
const inputStyle = { background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" } as const;

const statusCopy: Record<RegistrationStatus, { title: string; body: string }> = {
  approved: { title: "You're registered!", body: "Your spot is confirmed. Keep your access link safe, it's your ticket to the event." },
  pending: { title: "Registration received", body: "This event requires approval. We'll review your request and update your access page once a decision is made." },
  waitlist: { title: "You're on the waitlist", body: "This event is at capacity. We'll let you know via your access page if a spot opens up." },
  declined: { title: "Registration declined", body: "Unfortunately your registration was not approved." },
  cancelled: { title: "Registration cancelled", body: "This registration has been cancelled." },
};

export default function EventRegister() {
  const { slug } = useParams<{ slug: string }>();
  const [event, setEvent] = useState<EventRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ status: RegistrationStatus; token: string } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", organisation: "" });

  useEffect(() => {
    if (!slug) return;
    supabase.from("events").select("*").eq("slug", slug).eq("published", true).maybeSingle().then(({ data }) => {
      setEvent((data as EventRow) || null);
      setLoading(false);
    });
  }, [slug]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!event) return;
    setSubmitting(true);
    setError(null);
    const token = crypto.randomUUID();
    const { error: insErr } = await supabase.from("event_registrations").insert({
      event_id: event.id,
      full_name: form.name.trim(),
      email: form.email.trim(),
      organisation: form.organisation.trim() || null,
      access_token: token,
    });
    if (insErr) {
      setError(insErr.message);
      setSubmitting(false);
      return;
    }
    const { data } = await supabase.rpc("get_registration_by_token", { _slug: event.slug, _token: token });
    const row = Array.isArray(data) ? data[0] : data;
    setResult({ status: (row?.status as RegistrationStatus) || "approved", token });
    setSubmitting(false);
  };

  if (loading) return <Section narrow><p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>Loading…</p></Section>;

  if (!event) {
    return (
      <Section narrow>
        <p className="text-center py-16" style={{ color: "var(--dark-text-muted)" }}>Event not found. <Link to="/events" style={{ color: "var(--orange)" }}>Back to events</Link></p>
      </Section>
    );
  }

  if (result) {
    const copy = statusCopy[result.status];
    const link = `${window.location.origin}/events/${event.slug}/access/${result.token}`;
    return (
      <>
        <Hero tag="Registration Complete" title={copy.title} subtitle={copy.body} />
        <Section narrow>
          <div className="rounded-xl border p-6 space-y-4" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
            <p className="text-sm" style={{ color: "var(--dark-text-secondary)" }}>Your personal access link:</p>
            <code className="block text-xs break-all p-3 rounded-lg" style={{ background: "hsl(var(--muted))", color: "var(--orange)" }}>{link}</code>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => navigator.clipboard.writeText(link)} className="px-4 py-2 rounded-lg text-xs font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>Copy link</button>
              <Link to={`/events/${event.slug}/access/${result.token}`} className="px-4 py-2 rounded-lg text-xs font-semibold no-underline border" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Open access page</Link>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (!event.registration_open) {
    return (
      <>
        <Hero tag="Register" title={event.title} subtitle="Registration is closed for this event." />
        <Section narrow className="text-center">
          <Link to={`/events/${event.slug}`} style={{ color: "var(--orange)" }}>Back to event</Link>
        </Section>
      </>
    );
  }

  return (
    <>
      <Hero tag="Register" title={event.title} subtitle={formatEventDate(event.start_date, event.end_date)} />
      <Section narrow>
        <form onSubmit={submit} className="max-w-[480px] mx-auto space-y-4">
          <div>
            <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Full Name *</label>
            <input required className={inputCls} style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Email Address *</label>
            <input required type="email" className={inputCls} style={inputStyle} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Organisation (optional)</label>
            <input className={inputCls} style={inputStyle} value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
          </div>
          {error && <p className="text-xs" style={{ color: "#f87171" }}>{error}</p>}
          <button type="submit" disabled={submitting} className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)", opacity: submitting ? 0.6 : 1 }}>
            {submitting ? "Submitting…" : "Complete Registration"}
          </button>
        </form>
      </Section>
    </>
  );
}
