import { content } from "./content";
export const defaultTeam = [
 { id: "d1", name: "Eric Jagwara", role: "Founder & Director", bio: "Sets research strategy and institutional direction. Leads the firm's overall direction across security, data research, and product development.", image: "/images/team/eric-jagwara.jpg", category: "core_team" },
 { id: "d2", name: "Prof. Yawe Bruno Lule", role: "Principal Consultant", bio: "Provides academic and research oversight, drawing on a background in higher education and applied research supervision.", image: "/images/team/yawe-bruno-lule.jpg", category: "core_team" },
 { id: "d3", name: "Dr. Abubakhari Sserwadda", role: "Head of Data & Cybersecurity", bio: "Leads security research and the data protection agenda, overseeing threat intelligence and secure systems design.", image: "/images/team/abubakhari-sserwadda.webp", category: "core_team" },
 { id: "d4", name: "Soddo Paul", role: "Head of Embedded Systems & Firmware", bio: "Directs embedded systems and firmware development for field and hardware-facing research tools.", image: "/images/team/soddo-paul.jpg", category: "core_team" },
 { id: "d5", name: "Irene Akitwi", role: "Head of Computational Social Science & Product Strategy", bio: "Leads computational social science research and shapes product strategy, connecting research findings to real-world deployment.", image: "/images/team/irene-akitwi.webp", category: "core_team", link: "https://www.researchgate.net/profile/Irene-Akitwi-2" },
];
export const members = content("team",defaultTeam);
