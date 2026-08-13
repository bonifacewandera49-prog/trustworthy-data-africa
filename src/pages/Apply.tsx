import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const categories = [
 { value: "core_team", label: "Core Team" },
 { value: "researchers", label: "Researcher" },
 { value: "students", label: "Student / Intern" },
 { value: "alumni", label: "Alumni / Affiliate" },
];

const expertiseAreas = [
 "Cybersecurity",
 "Data Science",
 "Privacy Engineering",
 "Machine Learning / AI",
 "Field Operations",
 "Policy & Governance",
 "Software Engineering",
 "Other",
];

const inputCls = "w-full p-3 rounded-lg text-[0.86rem] outline-none transition-colors";

export default function Apply() {
 const [submitting, setSubmitting] = useState(false);
 const [submitted, setSubmitted] = useState(false);
 const [form, setForm] = useState({
 fullName: "", email: "", phone: "", nationality: "", currentLocation: "",
 organisation: "", roleTitle: "", category: "researchers", expertise: [] as string[],
 linkedIn: "", website: "", education: "", yearsExperience: "",
 motivation: "", relevantWork: "", availability: "", referral: "",
 });

 const set = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));
 const toggleExpertise = (area: string) => {
 setForm((p) => ({ ...p, expertise: p.expertise.includes(area) ? p.expertise.filter((a) => a !== area) : [...p.expertise, area] }));
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (!form.fullName.trim() || !form.email.trim() || !form.motivation.trim()) return;
 setSubmitting(true);
 setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1000);
 };

 if (submitted) {
 return (
 <>
 <Hero tag="Thank You" title="Application submitted!" subtitle="We'll review your application and get back to you within two weeks." />
 <Section narrow className="text-center">
 <p style={{ color: "var(--dark-text-secondary)" }}>In the meantime, feel free to explore our research and events.</p>
 </Section>
 </>
 );
 }

 return (
 <>
 <Hero tag="Join Us" title="Apply to join the team." subtitle="We're always looking for talented researchers, engineers, and students who want to contribute to meaningful work in security and data." />
 <Section>
 <form onSubmit={handleSubmit} className="max-w-[720px] mx-auto space-y-8">
 <div>
 <h3 className="text-[0.92rem] font-semibold mb-4 pb-2 border-b" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Personal Information</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Full Name *</label><input required className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.fullName} onChange={(e) => set("fullName", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Email Address *</label><input required type="email" className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Phone Number</label><input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.phone} onChange={(e) => set("phone", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Nationality</label><input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.nationality} onChange={(e) => set("nationality", e.target.value)} /></div>
 <div className="sm:col-span-2"><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Current Location (City, Country)</label><input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.currentLocation} onChange={(e) => set("currentLocation", e.target.value)} /></div>
 </div>
 </div>
 <div>
 <h3 className="text-[0.92rem] font-semibold mb-4 pb-2 border-b" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Professional Background</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Organisation / University</label><input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.organisation} onChange={(e) => set("organisation", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Current Role / Title</label><input className={inputCls} style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.roleTitle} onChange={(e) => set("roleTitle", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Highest Education Level</label><input className={inputCls} placeholder="e.g. MSc Computer Science" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.education} onChange={(e) => set("education", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Years of Experience</label><input className={inputCls} placeholder="e.g. 3 years" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.yearsExperience} onChange={(e) => set("yearsExperience", e.target.value)} /></div>
 </div>
 </div>
 <div>
 <h3 className="text-[0.92rem] font-semibold mb-4 pb-2 border-b" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Role & Interests</h3>
 <div className="space-y-4">
 <div>
 <label className="block text-[0.76rem] mb-2" style={{ color: "var(--dark-text-muted)" }}>Category You're Applying For *</label>
 <div className="flex flex-wrap gap-2">
 {categories.map((c) => (
 <button key={c.value} type="button" onClick={() => set("category", c.value)} className="px-4 py-2 rounded-lg text-[0.82rem] font-medium border cursor-pointer transition-colors"
 style={form.category === c.value ? { background: "var(--orange)", color: "var(--dark-text)", borderColor: "var(--orange)" } : { background: "hsl(var(--card))", color: "var(--dark-text-muted)", borderColor: "var(--dark-hairline)" }}>
 {c.label}
 </button>
 ))}
 </div>
 </div>
 <div>
 <label className="block text-[0.76rem] mb-2" style={{ color: "var(--dark-text-muted)" }}>Areas of Expertise (select all that apply)</label>
 <div className="flex flex-wrap gap-2">
 {expertiseAreas.map((area) => (
 <button key={area} type="button" onClick={() => toggleExpertise(area)} className="px-3 py-1.5 rounded-lg text-[0.78rem] border cursor-pointer transition-colors"
 style={form.expertise.includes(area) ? { background: "rgba(217,83,30,0.2)", color: "var(--orange)", borderColor: "rgba(217,83,30,0.4)" } : { background: "hsl(var(--card))", color: "var(--dark-text-muted)", borderColor: "var(--dark-hairline)" }}>
 {area}
 </button>
 ))}
 </div>
 </div>
 </div>
 </div>
 <div>
 <h3 className="text-[0.92rem] font-semibold mb-4 pb-2 border-b" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Online Presence</h3>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>LinkedIn Profile</label><input className={inputCls} placeholder="https://linkedin.com/in/..." style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.linkedIn} onChange={(e) => set("linkedIn", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Website / Portfolio</label><input className={inputCls} placeholder="https://..." style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.website} onChange={(e) => set("website", e.target.value)} /></div>
 </div>
 </div>
 <div>
 <h3 className="text-[0.92rem] font-semibold mb-4 pb-2 border-b" style={{ borderColor: "var(--dark-hairline)", color: "var(--dark-text)" }}>Motivation & Experience</h3>
 <div className="space-y-3">
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Why do you want to join Solid Elf? *</label><textarea required className={`${inputCls} resize-none`} rows={4} value={form.motivation} onChange={(e) => set("motivation", e.target.value)} placeholder="Tell us what excites you about our work..." style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Relevant Work or Projects</label><textarea className={`${inputCls} resize-none`} rows={3} value={form.relevantWork} onChange={(e) => set("relevantWork", e.target.value)} placeholder="Describe any relevant research, publications, or projects..." style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} /></div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>Availability / Start Date</label><input className={inputCls} placeholder="e.g. Immediately, July 2026" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.availability} onChange={(e) => set("availability", e.target.value)} /></div>
 <div><label className="block text-[0.76rem] mb-1" style={{ color: "var(--dark-text-muted)" }}>How did you hear about us?</label><input className={inputCls} placeholder="e.g. Website, referral, conference" style={{ background: "hsl(var(--card))", border: "1px solid var(--dark-hairline)", color: "var(--dark-text)" }} value={form.referral} onChange={(e) => set("referral", e.target.value)} /></div>
 </div>
 </div>
 </div>
 <button type="submit" disabled={submitting} className="w-full py-3 rounded-lg font-semibold text-[0.88rem] border-none cursor-pointer transition-colors" style={{ background: "var(--orange)", color: "var(--dark-text)", opacity: submitting ? 0.5 : 1 }}>
 {submitting ? "Submitting..." : "Submit Application"}
 </button>
 </form>
 </Section>
 </>
 );
}
