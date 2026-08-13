import { useState } from "react";

const posts = [
 { id: 1, title: "Securing Health Data in Low-Resource Environments", tag: "Cybersecurity", published: true },
 { id: 2, title: "A Primer on Quantum Machine Learning for Research Teams", tag: "Quantum Computing", published: true },
 { id: 3, title: "Emerging Phishing Trends Targeting African Institutions in 2026", tag: "Threat Intelligence", published: true },
];

export default function AdminBlog() {
 const [items, setItems] = useState(posts);

 const togglePublish = (id: number) => {
 setItems(items.map((p) => p.id === id ? { ...p, published: !p.published } : p));
 };

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Blog Posts</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ New Post</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead>
 <tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Title</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Tag</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Status</th>
 <th className="text-right p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Actions</th>
 </tr>
 </thead>
 <tbody>
 {items.map((p) => (
 <tr key={p.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{p.title}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "rgba(217,83,30,0.1)", color: "var(--orange)" }}>{p.tag}</span></td>
 <td className="p-3"><span className="font-mono text-[0.6rem]" style={{ color: p.published ? "#4ade80" : "#fbbf24" }}>{p.published ? "Published" : "Draft"}</span></td>
 <td className="p-3 text-right">
 <button onClick={() => togglePublish(p.id)} className="text-xs underline cursor-pointer bg-transparent border-none" style={{ color: "var(--orange)" }}>{p.published ? "Unpublish" : "Publish"}</button>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 );
}
