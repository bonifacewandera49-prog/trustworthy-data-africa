import { useState } from "react";

const datasets = [
 { id: 1, title: "African Mobile Money Transaction Patterns (Synthetic)", tag: "Synthetic", status: "Available" },
 { id: 2, title: "Rural Health Facility Data Collection Protocols Dataset", tag: "Field Collected", status: "Available" },
 { id: 3, title: "Phishing Corpus: French-Language Threat Vectors", tag: "Translated", status: "In Progress" },
 { id: 4, title: "Smallholder Farming Yield Data: Structured & Anonymised", tag: "Field Collected", status: "Available" },
];

export default function AdminDatasets() {
 const [items] = useState(datasets);

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Datasets</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ Add Dataset</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead><tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Title</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Tag</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Status</th>
 </tr></thead>
 <tbody>{items.map((d) => (
 <tr key={d.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{d.title}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "hsl(var(--muted))", color: "var(--dark-text-muted)" }}>{d.tag}</span></td>
 <td className="p-3"><span className="font-mono text-[0.6rem] px-2 py-0.5 rounded-full" style={{ color: d.status === "Available" ? "#4ade80" : "#fbbf24", background: d.status === "Available" ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)" }}>{d.status}</span></td>
 </tr>
 ))}</tbody>
 </table>
 </div>
 </div>
 );
}
