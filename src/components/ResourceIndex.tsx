import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Section from "./Section";
import FilterDropdown from "./FilterDropdown";
import type { Resource } from "@/data/resources";
export default function ResourceIndex({title,description,items}:{title:string;description:string;items:Resource[]}){const [category,setCategory]=useState("All");return <><Hero tag={title} title={title} subtitle={description}/><Section><FilterDropdown categories={["All",...new Set(items.map(r=>r.category))]} active={category} onChange={setCategory}/><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{items.filter(r=>category==="All"||r.category===category).map(r=><article className="practice-card" key={r.slug}><p className="detail-eyebrow">{r.category}</p><h2 className="text-xl mb-3"><Link to={`/resources/${r.slug}`}>{r.title}</Link></h2><p className="text-sm leading-7 mb-3">{r.description}</p><p className="text-xs mb-5">{r.status}</p><Link className="detail-text-link" to={`/resources/${r.slug}`}>Read details →</Link></article>)}</div>{items.length===0&&<p>No resources are published in this collection yet.</p>}</Section></>}
