import { useState } from "react";

const team = [
 { id: "d1", name: "Eric Jagwara", role: "Founder & Director", bio: "Sets research strategy and institutional direction. Leads the firm's overall direction across security, data research, and product development.", image: "/images/team/eric-jagwara.jpg", category: "core_team" },
 { id: "d2", name: "Prof. Yawe Bruno Lule", role: "Principal Consultant", bio: "Provides academic and research oversight, drawing on a background in higher education and applied research supervision.", image: "/images/team/yawe-bruno-lule.jpg", category: "core_team" },
 { id: "d3", name: "Dr. Abubakhari Sserwadda", role: "Head of Data & Cybersecurity", bio: "Leads security research and the data protection agenda, overseeing threat intelligence and secure systems design.", image: "/images/team/abubakhari-sserwadda.webp", category: "core_team" },
 { id: "d4", name: "Soddo Paul", role: "Head of Embedded Systems & Firmware", bio: "Directs embedded systems and firmware development for field and hardware-facing research tools.", image: "/images/team/soddo-paul.jpg", category: "core_team" },
 { id: "d5", name: "Irene Akitwi", role: "Head of Computational Social Science & Product Strategy", bio: "Leads computational social science research and shapes product strategy, connecting research findings to real-world deployment.", image: "/images/team/irene-akitwi.webp", category: "core_team", link: "https://www.researchgate.net/profile/Irene-Akitwi-2" },
];

const categories: Record<string, string> = { core_team: "Core Team", researchers: "Researchers", students: "Students", alumni: "Alumni" };

export default function AdminTeam() {
 const [items] = useState(team);

 return (
 <div>
 <div className="flex justify-between items-center mb-6">
 <h1 className="text-2xl font-bold" style={{ color: "var(--dark-text)" }}>Team Members</h1>
 <button className="px-4 py-2 rounded-lg text-sm font-semibold border-none cursor-pointer" style={{ background: "var(--orange)", color: "var(--dark-text)" }}>+ Add Member</button>
 </div>
 <div className="rounded-lg border overflow-hidden" style={{ background: "hsl(var(--card))", borderColor: "var(--dark-hairline)" }}>
 <table className="w-full text-sm">
 <thead><tr style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Name</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Role</th>
 <th className="text-left p-3 font-mono text-[0.7rem] tracking-wider uppercase" style={{ color: "var(--dark-text-muted)" }}>Category</th>
 </tr></thead>
 <tbody>{items.map((m) => (
 <tr key={m.id} style={{ borderBottom: "1px solid var(--dark-hairline)" }}>
 <td className="p-3" style={{ color: "var(--dark-text)" }}>{m.name}</td>
 <td className="p-3 font-mono text-[0.7rem]" style={{ color: "var(--orange)" }}>{m.role}</td>
 <td className="p-3"><span className="font-mono text-[0.6rem] tracking-widest uppercase px-2 py-0.5 rounded-full" style={{ background: "hsl(var(--muted))", color: "var(--dark-text-muted)" }}>{categories[m.category]}</span></td>
 </tr>
 ))}</tbody>
 </table>
 </div>
 </div>
 );
}
