import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { site } from "@/data/site";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const inputCls = "w-full p-3 rounded-lg text-[0.86rem] outline-none transition-colors";

export default function Contact() {
 const [params] = useSearchParams();
 const service = params.get("service") || "";
 const [submitted, setSubmitted] = useState(false);

 return (
 <>
 <Hero tag="Contact" title="Get in touch." subtitle="Whether you are interested in consultancy, research collaboration, training, or partnership, we would like to hear from you." />
 <Section>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-start">
 <div>
 <div className="space-y-0">
 {[{ label: "Email", value: site.email, href: `mailto:${site.email}` }, { label: "Phone", value: site.phone, href: `tel:${site.phone}` }, { label: "Main offices", value: site.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}` }].map((r) => (
 <div key={r.label} className="rv flex gap-3 py-2.5 border-b text-[0.86rem]" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text-secondary)" }}>
 <span className="font-mono text-[0.76rem] min-w-[60px]" style={{ color: "var(--dark-text-muted)" }}>{r.label}</span>
 <a href={r.href} className="hover:underline">{r.value}</a>
 </div>
 ))}
 </div>
 </div>
 <div>
 <div className="flex flex-wrap gap-4 mb-6">{site.socials.map(s=><a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="detail-text-link">{s.name} ↗</a>)}</div><h3 className="rv text-[0.95rem] font-semibold mb-4" style={{ color: "var(--dark-text)" }}>Send a Message</h3>
 {submitted ? (
 <div className="rv liquid-glass-light-light p-6 text-center">
 <p style={{ color: "var(--dark-text-secondary)" }}>Your email draft has been opened. Send it from your email application, or contact info@solidelf.org directly.</p>
 </div>
 ) : (
 <form className="space-y-2.5" onSubmit={(e) => { e.preventDefault(); const data = new FormData(e.currentTarget); window.location.href = `mailto:info@solidelf.org?subject=${encodeURIComponent((service ? service + " — " : "Website enquiry from ") + data.get("name"))}&body=${encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nOrganisation: ${data.get("organisation")}\n\n${data.get("message")}`)}`; setSubmitted(true); }}>
 <input name="name" aria-label="Your name" placeholder="Your name" required className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <input name="email" aria-label="Email address" placeholder="Email address" required type="email" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <input name="organisation" aria-label="Organisation" placeholder="Organisation (optional)" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <textarea defaultValue={service ? `I would like to discuss ${service}.\n\n` : ""} name="message" aria-label="Your message" placeholder="Your message" required rows={5} className={`${inputCls} resize-none`} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} />
 <button type="submit" className="rv py-2.5 px-6 rounded-lg font-semibold text-[0.86rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Open email draft
 </button>
 </form>
 )}
 </div>
 </div>
 </Section>
 </>
 );
}
