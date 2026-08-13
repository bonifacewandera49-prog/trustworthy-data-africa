import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const inputCls = "w-full p-3 rounded-lg text-[0.86rem] outline-none transition-colors";

export default function EventRegister() {
 const [submitted, setSubmitted] = useState(false);
 const [form, setForm] = useState({ name: "", email: "", organisation: "" });

 if (submitted) {
 return (
 <>
 <Hero tag="Registration Complete" title="You're registered!" subtitle="Thank you for registering. We'll send you a confirmation email with the event details and access link." />
 <Section narrow className="text-center">
 <p style={{ color: "var(--dark-text-secondary)" }}>Check your inbox for the confirmation email. If you don't see it, check your spam folder.</p>
 </Section>
 </>
 );
 }

 return (
 <>
 <Hero tag="Register" title="Event Registration" subtitle="Fill in your details to secure your spot at this event." />
 <Section narrow>
 <form
 onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
 className="max-w-[480px] mx-auto space-y-4"
 >
 <div>
 <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Full Name *</label>
 <input required className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
 </div>
 <div>
 <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Email Address *</label>
 <input required type="email" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
 </div>
 <div>
 <label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Organisation (optional)</label>
 <input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
 </div>
 <button type="submit" className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Complete Registration
 </button>
 </form>
 </Section>
 </>
 );
}
