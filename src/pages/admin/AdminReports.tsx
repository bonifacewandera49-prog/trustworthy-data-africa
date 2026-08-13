import { useState } from "react";

const reports = [
 { id: 1, title: "State of Cybersecurity Threats in African Financial Services 2025", tag: "Threat Intelligence", year: 2025, published: true },
 { id: 2, title: "Data Governance Framework for Cross-Border Health Information Sharing", tag: "Data Governance", year: 2025, published: true },
 { id: 3, title: "Fairness Auditing of Automated Credit Scoring Systems in East Africa", tag: "AI Fairness", year: 2024, published: true },
];

export default function AdminReports() {
 const [items] = useState(reports);

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Reports</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ Add Report</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead><tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Title</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Tag</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Year</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Status</th>
 </tr></thead>
 <tbody>{items.map((r) => (
 <tr key={r.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{r.title}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(217,83,30,0.1)", color: "var(--orange)" }}>{r.tag}</span></td>
 <td className="p-3 font-mono text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>{r.year}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem]" style={{ color: r.published ? "#4ade80" : "#fbbf24" }}>{r.published ? "Published" : "Draft"}</span></td>
 </tr>
 ))}</tbody>
 </table>
 </div>
 </div>
 );
}
