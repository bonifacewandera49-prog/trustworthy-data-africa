import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FilterDropdown from "@/components/FilterDropdown";
import { blogPosts } from "@/data/blog";
const categories = ["All", ...new Set(blogPosts.map(p => p.tag))];
export default function Blog() {
 const [category, setCategory] = useState("All");
 const posts = blogPosts.filter(p => category === "All" || p.tag === category);
 return <><Hero tag="Blog" title="Practical thinking. Clearer decisions." subtitle="Guides to security, data governance, privacy, and responsible AI. Written to help teams turn complex questions into practical next steps." />
 <Section><div className="flex flex-wrap items-center justify-between gap-4 mb-7"><h2 className="text-2xl font-semibold" style={{color:"var(--dark-text)"}}>Articles & guides</h2><p className="text-sm">{posts.length} articles</p></div>
 <FilterDropdown categories={categories} active={category} onChange={setCategory} />
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{posts.map(p => <Link key={p.slug} to={`/blog/${p.slug}`} className="border rounded-xl overflow-hidden no-underline group flex flex-col" style={{borderColor:"var(--dark-hairline)",background:"var(--dark-surface)"}}>
 <img src={p.cover_image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />
 <div className="p-6 flex-1 flex flex-col"><p className="font-mono text-xs uppercase tracking-wider mb-3" style={{color:"var(--orange)"}}>{p.tag}</p><h3 className="text-xl font-semibold leading-snug mb-3 group-hover:underline" style={{color:"var(--dark-text)"}}>{p.title}</h3><p className="text-sm leading-relaxed mb-5">{p.excerpt}</p><span className="text-sm font-semibold mt-auto" style={{color:"var(--orange)"}}>Read article →</span></div></Link>)}</div></Section></>;
}
