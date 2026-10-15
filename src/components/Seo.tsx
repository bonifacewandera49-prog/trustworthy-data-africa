import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { metadata, headHtml } from "@/lib/seo";
import { site } from "@/data/site";
export default function Seo(){const {pathname}=useLocation();const m=metadata(pathname);useEffect(()=>{document.head.querySelectorAll('title,meta[name="description"],link[rel="canonical"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],#page-schema').forEach(n=>n.remove());const template=document.createElement('template');template.innerHTML=headHtml(pathname);document.head.append(template.content);},[pathname]);return pathname==='/'?null:<nav className="seo-breadcrumb relative z-[2]" aria-label="Breadcrumb">{m.crumbs.map((c,i)=><span key={c.url}>{i>0&&<span aria-hidden="true"> / </span>}{i===m.crumbs.length-1?<span aria-current="page">{c.name}</span>:<Link to={c.url.replace(site.url,'')||'/'}>{c.name}</Link>}</span>)}</nav>}
