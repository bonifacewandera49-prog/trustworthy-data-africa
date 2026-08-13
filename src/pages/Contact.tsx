import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const inputCls = "w-full p-3 rounded-lg text-[0.86rem] outline-none transition-colors";

export default function Contact() {
 const [submitted, setSubmitted] = useState(false);

 return (
 <>
 <Hero tag="Contact" title="Get in touch." subtitle="Whether you are interested in consultancy, research collaboration, training, or partnership, we would like to hear from you." />
 <Section>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-start">
 <div>
 <div className="space-y-0">
 {[{ label: "Email", value: "info@solidelf.org" }, { label: "Web", value: "www.solidelf.org" }].map((r) => (
 <div key={r.label} className="rv flex gap-3 py-2.5 border-b text-[0.86rem]" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }}>
 <span className="font-mono text-[0.76rem] min-w-[60px]" style={{ color: "var(--dark-text-muted)" }}>{r.label}</span>
 <span>{r.value}</span>
 </div>
 ))}
 </div>
 </div>
 <div>
 <h3 className="rv text-[0.95rem] font-semibold mb-4" style={{ color: "var(--dark-text)" }}>Send a Message</h3>
 {submitted ? (
 <div className="rv liquid-glass-light-light p-6 text-center">
 <p style={{ color: "var(--dark-text-secondary)" }}>Thank you for your message. We'll get back to you soon.</p>
 </div>
 ) : (
 <form className="space-y-2.5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
 <input placeholder="Your name" required className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <input placeholder="Email address" required type="email" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <input placeholder="Organisation (optional)" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <textarea placeholder="Your message" required rows={5} className={`${inputCls} resize-none`} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <button type="submit" className="rv py-2.5 px-6 rounded-lg font-semibold text-[0.86rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Send Message
 </button>
 </form>
 )}
 </div>
 </div>
 </Section>
 </>
 );
}
