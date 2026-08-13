import { useState } from "react";

const papers = [
 { id: 1, title: "Differential Privacy for Mobile Health Data Collection in Low-Resource Environments", journal: "IEEE Security & Privacy", year: 2026, published: true },
 { id: 2, title: "Automated Quantum Circuit Search for Hybrid Classical-Quantum Classification", journal: "Nature Quantum Information", year: 2025, published: true },
 { id: 3, title: "Phishing Ecosystem Dynamics in West African Mobile Money Platforms", journal: "ACM CCS", year: 2025, published: true },
 { id: 4, title: "Synthetic Data Generation for Smallholder Agricultural Yield Prediction", journal: "NeurIPS", year: 2025, published: true },
];

export default function AdminPapers() {
 const [items] = useState(papers);

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Research Papers</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ Add Paper</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead><tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Title</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Journal</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Year</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Status</th>
 </tr></thead>
 <tbody>{items.map((p) => (
 <tr key={p.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{p.title}</td>
 <td className="p-3 font-mono text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>{p.journal}</td>
 <td className="p-3 font-mono text-[0.7rem]" style={{ color: "var(--dark-text-muted)" }}>{p.year}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem]" style={{ color: p.published ? "#4ade80" : "#fbbf24" }}>{p.published ? "Published" : "Draft"}</span></td>
 </tr>
 ))}</tbody>
 </table>
 </div>
 </div>
 );
}
