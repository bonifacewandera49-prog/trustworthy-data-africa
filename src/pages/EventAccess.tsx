import { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function EventAccess() {
 const { token } = useParams<{ slug: string; token: string }>();
 const [code, setCode] = useState(token || "");
 const [granted, setGranted] = useState(!!token);

 if (granted) {
 return (
 <>
 <Hero tag="Event Access" title="Welcome to the Event" subtitle="You have been granted access to this private event." />
 <Section narrow>
 <div className="liquid-glass-light-light p-8 text-center">
 <p style={{ color: "var(--dark-text-secondary)" }}>The event link and materials will be shared here closer to the event date.</p>
 </div>
 </Section>
 </>
 );
 }

 return (
 <>
 <Hero tag="Private Event" title="Access Required" subtitle="This is a private event. Enter your access code to join." />
 <Section narrow>
 <form onSubmit={(e) => { e.preventDefault(); if (code.trim()) setGranted(true); }} className="max-w-[400px] mx-auto space-y-4">
 <input placeholder="Enter access code" className="w-full p-3 rounded-lg text-[0.86rem] outline-none text-center" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={code} onChange={(e) => setCode(e.target.value)} />
 <button type="submit" className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Access Event
 </button>
 </form>
 </Section>
 </>
 );
}
