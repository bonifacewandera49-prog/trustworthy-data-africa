import { Link, useParams } from "react-router-dom";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { blogPosts } from "@/data/blog";
export default function BlogPost() {
 const { slug } = useParams();
 const post = blogPosts.find(p => p.slug === slug);
 if (!post) return <Section><h1 className="text-3xl">Article not found</h1><Link to="/blog">Back to all articles</Link></Section>;
 const minutes = Math.max(2, Math.ceil(post.sections.flatMap(s => s.paragraphs).join(" ").split(/\s+/).length / 200));
 return <><Hero tag={post.tag} title={post.title} subtitle={post.excerpt} image={post.cover_image} />
 <Section><div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,760px)] gap-10 lg:gap-16">
 <aside><Link to="/blog" className="text-sm" style={{color:"var(--orange)"}}>← All articles</Link><p className="text-xs mt-5">Solid Elf Editorial<br />{minutes} min read</p><nav aria-label="Article sections" className="mt-6 space-y-3">{post.sections.map((s,i) => <button key={s.heading} type="button" onClick={() => {document.getElementById(`article-section-${i}`)?.scrollIntoView({behavior:"smooth",block:"start"});}} className="block text-left text-sm no-underline hover:underline">{s.heading}</button>)}</nav></aside>
 <article className="article-body min-w-0 text-base leading-[1.85]">{post.sections.map((s,i)=><section key={s.heading} id={`article-section-${i}`} className="scroll-mt-24"><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}{post.sources.length > 0 && <section><h2>Further reading</h2><ul>{post.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" style={{color:"var(--orange)"}}>{source.label} ↗</a></li>)}</ul></section>}<div className="border-t pt-7 mt-10" style={{borderColor:"var(--dark-hairline)"}}><p>Have a related challenge in your organisation?</p><Link to="/contact" style={{color:"var(--orange)"}}>Talk to Solid Elf →</Link></div></article>
 </div></Section><Section><h2 className="text-2xl mb-6">Continue reading</h2><div className="grid sm:grid-cols-2 gap-6">{blogPosts.filter(p=>p.slug!==slug).slice(0,2).map(p=><Link key={p.slug} to={`/blog/${p.slug}`} className="border-t pt-5 no-underline hover:underline"><span className="text-xs block mb-2" style={{color:"var(--orange)"}}>{p.tag}</span><h3 className="text-lg">{p.title}</h3></Link>)}</div></Section></>;
}
