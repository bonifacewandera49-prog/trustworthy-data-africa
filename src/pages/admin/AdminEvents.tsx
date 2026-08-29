import { useState } from "react";
import { Link } from "react-router-dom";

const events = [
 { id: "1", title: "Cybersecurity Workshop: Threat Intelligence for Financial Services", start_date: "2026-06-15", published: true, registration_open: true },
 { id: "2", title: "AI Platform Launch & Demo", start_date: "2026-07-10", published: true, registration_open: true },
 { id: "3", title: "African Data Governance Summit 2026", start_date: "2026-08-20", published: true, registration_open: false },
];

export default function AdminEvents() {
 const [items, setItems] = useState(events);
 const toggle = (id: string, field: "published" | "registration_open") => {
 setItems(items.map((e) => e.id === id ? { ...e, [field]: !e[field] } : e));
 };

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Events</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ New Event</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead>
 <tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Title</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Date</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Published</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Registration</th>
 <th className="text-right p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Actions</th>
 </tr>
 </thead>
 <tbody>
 {items.map((e) => (
 <tr key={e.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{e.title}</td>
 <td className="p-3 font-mono text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>{e.start_date}</td>
 <td className="p-3">
 <button onClick={() => toggle(e.id, "published")} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full cursor-pointer border-none" style={{ color: e.published ? "#4ade80" : "#fbbf24", background: e.published ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)" }}>{e.published ? "Yes" : "No"}</button>
 </td>
 <td className="p-3">
 <button onClick={() => toggle(e.id, "registration_open")} className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full cursor-pointer border-none" style={{ color: e.registration_open ? "#4ade80" : "#fbbf24", background: e.registration_open ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)" }}>{e.registration_open ? "Open" : "Closed"}</button>
 </td>
 <td className="p-3 text-right">
 <Link to={`/admin/events/${e.id}`} className="text-xs underline" style={{ color: "var(--orange)" }}>Manage</Link>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
