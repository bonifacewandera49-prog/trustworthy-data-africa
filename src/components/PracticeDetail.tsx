import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ShieldCheck, Compass, FileCheck2, Layers3 } from "lucide-react";
import Hero from "./Hero";
import Section from "./Section";
import type { Practice } from "@/data/practices";

export default function PracticeDetail({ practice: p, consultancy = false }: { practice: Practice; consultancy?: boolean }) {
 const base = consultancy ? "/consultancy" : "/work";
 const label = consultancy ? "Consultancy" : "Services & Research";
 const jump = (id:string) => document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
 return <>
  <Hero tag={label} title={p.title} subtitle={p.tagline} image={p.image} actions={[{label:"Discuss this service",to:`/contact?service=${encodeURIComponent(p.title)}`},{label:`All ${consultancy ? "consultancy" : "services"}`,to:base,variant:"outline"}]} />
  <nav className="detail-jump" aria-label="On this page"><div><Link to={base}>← {label}</Link>{[["overview","Overview"],["capabilities","Capabilities"],["deliverables","Deliverables"],["approach","Our approach"],["related","Explore further"]].map(([id,name])=><button type="button" key={id} onClick={()=>jump(id)}>{name}</button>)}</div></nav>
  <Section><div className="detail-layout">
    <div className="detail-main">
      <section id="overview" className="detail-block"><p className="detail-eyebrow">Purpose & context</p><h2>{p.tagline}</h2><p className="detail-intro">{p.overview}</p><div className="fit-panel"><h3><Compass size={20}/> A good fit when</h3><ul>{p.fit.map(x=><li key={x}><Check size={16}/><span>{x}</span></li>)}</ul></div></section>
      <section id="capabilities" className="detail-block"><p className="detail-eyebrow">What we cover</p><h2>Focused work. Useful evidence.</h2><div className="capability-list">{p.capabilities.map(x=><div key={x}><ShieldCheck size={20}/><p>{x}</p></div>)}</div></section>
      <section id="deliverables" className="detail-block deliverable-panel"><FileCheck2 size={28}/><p className="detail-eyebrow">What you take forward</p><h2>Outputs designed to be used.</h2><p>The final scope is agreed together. Depending on your needs, the engagement can include:</p><ul>{p.outputs.map(x=><li key={x}><Check size={18}/><span>{x}</span></li>)}</ul></section>
      <section id="approach" className="detail-block"><p className="detail-eyebrow">How we approach it</p><h2>From the question to a practical next step.</h2><div className="approach-track">{p.approach.map(x=><div key={x.title}><span className="approach-dot"/><h3>{x.title}</h3><p>{x.body}</p></div>)}</div></section>
      <section className="detail-block scenario-panel"><p className="detail-eyebrow">Illustrative use case</p><h2>What this can look like in practice.</h2><p>{p.scenario}</p><span className="scenario-note">An example of the work—not a client case study.</span></section>
      <section className="detail-block"><h2>Planning an engagement</h2><div className="detail-faq"><details><summary>What should we prepare?</summary><p>Bring the decision you need to make, a description of the relevant systems or data, known constraints and your timeline. We can agree the appropriate access and confidentiality arrangements before any sensitive information is shared.</p></details><details><summary>How do we define success?</summary><p>We agree specific questions and useful outputs at the start. Outputs such as {p.outputs[0].charAt(0).toLowerCase()+p.outputs[0].slice(1)} are reviewed against the decisions you need to make. Limitations, dependencies and follow-up work remain visible in the handover.</p></details></div></section>
    </div>
    <aside className="detail-aside"><div className="detail-brief"><Layers3 size={24}/><p className="detail-eyebrow">Start with your challenge</p><h3>Let’s define a useful scope.</h3><p>Tell us what you need to protect, understand or improve. We’ll begin with the question and the boundaries of the work.</p><Link className="detail-cta" to={`/contact?service=${encodeURIComponent(p.title)}`}>Discuss your project <ArrowUpRight size={17}/></Link><Link to="/sectors" className="detail-text-link">Explore sector applications →</Link></div><div className="aside-related"><h3>{consultancy ? "Related expertise" : "Apply this expertise"}</h3>{p.related.map(x=><Link key={x.to} to={x.to}>{x.label}<ArrowUpRight size={17}/></Link>)}</div></aside>
  </div></Section>
  <Section><div id="related" className="detail-related"><div><p className="detail-eyebrow">Connected thinking</p><h2>Keep exploring.</h2></div><div className="related-grid">{p.related.map(x=><Link className="related-card" key={x.to} to={x.to}><span>{consultancy ? "Service & research" : "Consultancy"}</span><h3>{x.label}</h3><ArrowUpRight/></Link>)}<Link className="related-card" to={p.article}><span>Practical reading</span><h3>Read a related guide</h3><ArrowUpRight/></Link><Link className="related-card" to="/events"><span>Learn together</span><h3>Explore workshops & events</h3><ArrowUpRight/></Link></div></div></Section>
 </>;
}
