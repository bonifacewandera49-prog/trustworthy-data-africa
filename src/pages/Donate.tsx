import { useState } from "react";
import { CreditCard, Phone, Building, Lock, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const amounts = [25, 50, 100, 250, 500, 1000];

export default function Donate() {
 const [freq, setFreq] = useState<"one" | "monthly">("one");
 const [amount, setAmount] = useState(100);
 const [customAmount, setCustomAmount] = useState("");
 const [payMethod, setPayMethod] = useState<"card" | "mobile" | "bank">("card");
 const [submitted, setSubmitted] = useState(false);

 const effectiveAmount = customAmount ? parseFloat(customAmount) : amount;

 if (submitted) {
 return (
 <>
 <Hero tag="Thank You" title="Your support makes a difference." subtitle="Your donation will directly fund research, tools, and capacity building worldwide." />
 <Section>
 <div className="max-w-lg mx-auto text-center py-8">
 <CheckCircle2 className="w-20 h-20 mx-auto mb-6" style={{ color: "#22c55e" }} />
 <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--dark-text)" }}>Donation Received!</h2>
 <p style={{ color: "var(--dark-text-secondary)" }}>Thank you for your generous contribution. A confirmation has been sent to your email.</p>
 </div>
 </Section>
 </>
 );
 }

 return (
 <>
 <Hero tag="Support Our Work" title="Fund the research that secures data." subtitle="Your support goes directly to cybersecurity research, tool development, training, and the open datasets that the world needs." />
 <Section>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-11 items-start">
 <div className="rv liquid-glass-light-light p-8">
 <h3 className="text-lg font-semibold mb-1.5" style={{ color: "var(--dark-text)" }}>Make a Donation</h3>
 <p className="text-[0.84rem] mb-5" style={{ color: "var(--dark-text-muted)" }}>Choose an amount. All contributions fund research, tools, and capacity building.</p>
 <div className="flex mb-4 rounded-lg overflow-hidden border" style={{ borderColor: "var(--dark-hairline)" }}>
 <button className="flex-1 py-2.5 text-[0.84rem] font-semibold border-none cursor-pointer transition-all" style={freq === "one" ? { background: "var(--orange)", color: "var(--dark-text)" } : { background: "transparent", color: "var(--dark-text-muted)" }} onClick={() => setFreq("one")}>One-time</button>
 <button className="flex-1 py-2.5 text-[0.84rem] font-semibold border-none cursor-pointer transition-all" style={freq === "monthly" ? { background: "var(--orange)", color: "var(--dark-text)" } : { background: "transparent", color: "var(--dark-text-muted)" }} onClick={() => setFreq("monthly")}>Monthly</button>
 </div>
 <div className="grid grid-cols-3 gap-2 mb-3.5">
 {amounts.map((a) => (
 <button key={a} className="py-3 rounded-lg text-[0.92rem] font-semibold border cursor-pointer transition-all"
 style={a === amount && !customAmount ? { background: "var(--orange)", color: "var(--dark-text)", borderColor: "var(--orange)" } : { background: "hsl(var(--muted))", color: "var(--dark-text-muted)", borderColor: "var(--dark-hairline)" }}
 onClick={() => { setAmount(a); setCustomAmount(""); }}>
 ${a.toLocaleString()}
 </button>
 ))}
 </div>
 <div className="flex items-center rounded-lg px-3.5 mb-4" style={{ background: "hsl(var(--muted))", border: "1px solid var(--dark-hairline)" }}>
 <span className="font-semibold mr-2" style={{ color: "var(--dark-text-muted)" }}>$</span>
 <input type="number" placeholder="Other amount" className="flex-1 py-3 bg-transparent border-none text-[0.88rem] outline-none" style={{ color: "var(--dark-text)" }} value={customAmount} onChange={(e) => setCustomAmount(e.target.value)} onFocus={() => setAmount(0)} />
 <span className="text-[0.76rem]" style={{ color: "var(--dark-text-muted)" }}>USD</span>
 </div>
 <div className="h-px my-4" style={{ background: "var(--dark-hairline)" }} />
 <p className="font-mono text-[0.7rem] tracking-widest uppercase mb-3" style={{ color: "var(--dark-text-muted)" }}>Payment Method</p>
 <div className="flex gap-2 flex-wrap mb-3.5">
 {[{ key: "card" as const, label: "Card", icon: <CreditCard className="w-4 h-4" /> }, { key: "mobile" as const, label: "Mobile Money", icon: <Phone className="w-4 h-4" /> }, { key: "bank" as const, label: "Bank Transfer", icon: <Building className="w-4 h-4" /> }].map((m) => (
 <button key={m.key} className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-[0.82rem] font-semibold border cursor-pointer transition-all"
 style={payMethod === m.key ? { background: "var(--orange)", color: "var(--dark-text)", borderColor: "var(--orange)" } : { background: "hsl(var(--muted))", color: "var(--dark-text-muted)", borderColor: "var(--dark-hairline)" }}
 onClick={() => setPayMethod(m.key)}>
 {m.icon} {m.label}
 </button>
 ))}
 </div>
 <button className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onClick={() => setSubmitted(true)}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Donate ${effectiveAmount.toLocaleString()}
 </button>
 <p className="text-[0.72rem] text-center mt-3 flex items-center justify-center gap-1" style={{ color: "var(--dark-text-muted)" }}><Lock className="w-3 h-3" /> Secure, encrypted donation.</p>
 </div>
 <div>
 <div className="rv">
 <h3 className="text-base font-semibold mb-5" style={{ color: "var(--dark-text)" }}>Where Your Support Goes</h3>
 {[
 { title: "Research & Publication", desc: "Supporting peer-reviewed research on cybersecurity, privacy, and AI fairness." },
 { title: "Tool Development", desc: "Building and maintaining CanaryDrop and Qkabrine." },
 { title: "Training & Capacity Building", desc: "Delivering cybersecurity and privacy training to health workers, financial institutions, and government agencies." },
 { title: "Open Datasets", desc: "Building representative datasets and releasing them freely on Zenodo." },
 ].map((item, i) => (
 <div key={item.title} className="rv flex gap-5 py-6 border-b" style={{ borderColor: "var(--dark-hairline)" }}>
 <span className="font-mono text-[0.72rem] min-w-[28px] pt-0.5" style={{ color: "var(--dark-text-muted)" }}>{String(i + 1).padStart(2, "0")}</span>
 <div>
 <h3 className="text-[0.9rem] font-semibold mb-1" style={{ color: "var(--dark-text)" }}>{item.title}</h3>
 <p className="text-[0.86rem] leading-[1.75]" style={{ color: "var(--dark-text-muted)" }}>{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 <div className="rv liquid-glass-light-light p-7 text-center mt-6">
 <h3 className="text-[0.9rem] font-semibold mb-2" style={{ color: "var(--dark-text)" }}>Institutional Partnerships</h3>
 <p className="text-[0.93rem] leading-[1.85] mb-2" style={{ color: "var(--dark-text-secondary)" }}>For institutional contributions or partnership discussions, contact us directly.</p>
 <a href="mailto:info@solidelf.org" className="inline-block px-6 py-2.5 rounded-lg font-semibold text-[0.86rem] no-underline transition-colors mt-2" style={{ background: "var(--orange)", color: "var(--dark-text)" }}
 onMouseEnter={(e) => (e.currentTarget.style.background = "var(--orange-hover)")}
 onMouseLeave={(e) => (e.currentTarget.style.background = "var(--orange)")}>
 Email info@solidelf.org
 </a>
 </div>
 </div>
 </div>
 </Section>
 </>
 );
}
