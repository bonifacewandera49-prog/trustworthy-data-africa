import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { researchPractices, consultancyPractices } from "@/data/practices";
import { blogPosts } from "@/data/blog";
import { fallbackEvents } from "@/data/events";
import { opportunities } from "@/data/opportunities";
import { resources } from "@/data/resources";
export const basePages:Record<string,[string,string]>={
"/short-courses":["Cybersecurity, NVivo, MAXQDA & Power BI Short Courses | Solid Elf","Explore instructor-led short courses in cybersecurity and data analysis. Compare course outlines, learning hours and indicative fees in Ugandan shillings."],
"/":["Secure Data, Cybersecurity & Analytics in Kampala | Solid Elf","Solid Elf connects secure data collection, quality assurance, storage, analytics, cybersecurity and responsible AI. Based in Ntinda, Kampala, Uganda."],
"/about":["About Solid Elf | Security and Data Research Firm","Meet Solid Elf: consultancy, implementation and research protecting data quality, integrity and systems throughout the data lifecycle."],
"/mission":["Our Mission | Trustworthy Data & Secure Systems","Our mission connects secure collection, systematic quality control, responsible analysis and reliable end use through controlled disposal."],
"/team":["Our Team | Solid Elf","Meet the people behind Solid Elf's security and data research, consultancy and practical delivery."],
"/sectors":["Sectors | Data & Security Consultancy","Explore how Solid Elf connects data integrity, analytics and cybersecurity with sector-specific challenges."],
"/consultancy":["Data Collection, Cybersecurity & Analytics Services | Solid Elf","Explore secure data collection, quality assurance, storage, analytics, cybersecurity, privacy, governance and responsible AI consultancy in Kampala."],
"/work":["Research Across the Data Lifecycle | Solid Elf","Explore research on collection methods, data quality, security threats, privacy, analytics, fairness and trustworthy systems."],
"/blog":["Cybersecurity & Data Insights | Solid Elf","Practical articles on digital safety, incident readiness, secure data collection, privacy, analytics and responsible AI."],
"/events":["Events & Workshops | Solid Elf","Explore proposed workshops and discussions on cybersecurity, trustworthy data and responsible technology. Confirmed registration details appear on each event page."],
"/opportunities":["Jobs, Fellowships, Internships & Contracts | Solid Elf","Explore professional, research, learning and contract pathways with Solid Elf. Register interest and read the status of each opportunity."],
"/research":["Research Papers & Themes | Solid Elf","Explore Solid Elf research themes in security, privacy, data integrity and responsible AI. Verified publication links are added when available."],
"/reports":["Reports & Research Briefings | Solid Elf","Explore proposed report themes in cybersecurity, governance, data collection and responsible technology."],
"/datasets":["Dataset Themes & Data Resources | Solid Elf","Explore proposed field-collected, translated and synthetic dataset themes, documentation needs and permitted-use enquiries."],
"/apply":["Join Our Community | Solid Elf","Connect around secure data, cybersecurity, analytics and research. Share your interests and preferred ways to learn or contribute."],
"/contact":["Contact Solid Elf","Get in touch with Solid Elf about security, data governance and research partnerships."],
"/partnerships":["Partnerships & Funding | Solid Elf","Collaborate on research, technical delivery, field methods, training or funding for trustworthy data and safer systems."],
"/policies":["Privacy & Website Policies | Solid Elf","Read Solid Elf's website privacy, contact and data-handling information."],
"/solutions/canarydrop":["CanaryDrop | Solid Elf","Explore the CanaryDrop solution concept and discuss security requirements with Solid Elf."],
"/solutions/qkabrine":["Qkabrine | Solid Elf","Explore the Qkabrine solution concept and related research at Solid Elf."]};
export const publicRoutes=[...Object.keys(basePages),...courses.map(c=>`/short-courses/${c.slug}`),...researchPractices.map(p=>`/work/${p.slug}`),...consultancyPractices.map(p=>`/consultancy/${p.slug}`),...blogPosts.map(p=>`/blog/${p.slug}`),...fallbackEvents.map(e=>`/events/${e.slug}`),...opportunities.map(o=>`/opportunities/${o.slug}`),...resources.map(r=>`/resources/${r.slug}`)];
export function metadata(path:string){
 path=path.replace(/\/+$/, "")||"/";
 const slug=path.split('/').pop();const service=path.startsWith('/consultancy/')?consultancyPractices.find(p=>p.slug===slug):undefined;
 const practice=service||(path.startsWith('/work/')?researchPractices.find(p=>p.slug===slug):undefined);
 const post=path.startsWith('/blog/')?blogPosts.find(p=>p.slug===slug):undefined;
 const event=path.startsWith('/events/')?fallbackEvents.find(e=>e.slug===slug):undefined;
 const opportunity=path.startsWith('/opportunities/')?opportunities.find(o=>o.slug===slug):undefined;
 const resource=path.startsWith('/resources/')?resources.find(r=>r.slug===slug):undefined;
 const course=path.startsWith("/short-courses/")?courses.find(c=>c.slug===slug):undefined;
 const item=practice||post||event||opportunity||resource||course;
 const title=item?`${item.title} | Solid Elf`:basePages[path]?.[0]||'Page not found | Solid Elf';
 const description=(practice?.desc||post?.excerpt||event?.description||opportunity?.description||resource?.description||course?.description||basePages[path]?.[1]||'This page is not available.').slice(0,180);
 const url=site.url+path;const imagePath=course?.image||practice?.image||post?.cover_image||event?.cover_image||'/images/og-share.jpg';const image=imagePath.startsWith('https://')?imagePath:site.url+imagePath;
 const org={"@type":"Organization","@id":site.url+'/#organization',name:site.name,url:site.url,logo:site.url+'/images/solid-elf-supplied.png',sameAs:site.socials.map(s=>s.url)};
 const parent=path.split('/').filter(Boolean).length>1?'/'+path.split('/')[1]:'';
 const crumbs=[{name:'Home',url:site.url},...(parent?[{name:basePages[parent]?.[0].split(' | ')[0]||(parent==='/solutions'?'Consultancy and Services':'Resources'),url:site.url+(parent==='/resources'?resource?.parent||'/research':parent==='/solutions'?'/consultancy':parent)}]:[]),...(path!=='/'?[{name:item?.title||title.split(' | ')[0],url}]:[])];
 const page:Record<string,unknown>={"@type":path==='/about'||path==='/mission'||path==='/team'?'AboutPage':path==='/contact'?'ContactPage':!item&&path!=='/'?'CollectionPage':'WebPage',"@id":url+'#webpage',url,name:title,description,inLanguage:'en',isPartOf:{"@id":site.url+'/#website'},about:{"@id":org['@id']}};
 const graph:Record<string,unknown>[]=[org,{"@type":"WebSite","@id":site.url+'/#website',url:site.url,name:site.name,publisher:{"@id":org['@id']}},page,{"@type":"BreadcrumbList",itemListElement:crumbs.map((c,i)=>({"@type":"ListItem",position:i+1,name:c.name,item:c.url}))}];
 if(course)graph.push({"@type":"Course","@id":url+"#course",name:course.title,description:course.description,url,provider:{"@id":org["@id"]},educationalLevel:course.level,timeRequired:`PT${course.hours}H`,image,teaches:course.outcomes,coursePrerequisites:course.prerequisites,inLanguage:"en",...(course.priceConfirmed?{offers:{"@type":"Offer",price:course.price,priceCurrency:course.currency,url}}:{})});
 if(service)graph.push({"@type":"Service","@id":url+'#service',name:service.title,serviceType:service.title,description:service.overview,url,provider:{"@id":org['@id']},image,mainEntityOfPage:{"@id":url+'#webpage'}});
 if(post)graph.push({"@type":"BlogPosting",headline:post.title,description:post.excerpt,image:[image],datePublished:post.published_at,author:{"@id":org['@id']},publisher:{"@id":org['@id']},mainEntityOfPage:{"@id":url+'#webpage'},articleSection:post.tag,wordCount:post.sections.flatMap(s=>s.paragraphs).join(' ').split(/\s+/).length});
 // Proposed events, interest pathways and unreleased resources must not masquerade as confirmed offers.
 if(event&&!event.location?.toLowerCase().includes('proposed'))graph.push({"@type":"Event",name:event.title,description:event.description,startDate:event.start_date,endDate:event.end_date,url,image,organizer:{"@id":org['@id']},location:event.location_type==='online'?{"@type":"VirtualLocation",url:event.meeting_url||url}:{"@type":"Place",name:event.location},eventStatus:'https://schema.org/EventScheduled'});
 if(resource)graph.push({"@type":"CreativeWork",name:resource.title,description:resource.description,creativeWorkStatus:resource.status,url,creator:{"@id":org['@id']}});
 const children=publicRoutes.filter(r=>r!==path&&r.startsWith(path+'/')&&!r.slice(path.length+1).includes('/'));
 if(children.length)graph.push({"@type":"ItemList",itemListElement:children.map((r,i)=>({"@type":"ListItem",position:i+1,url:site.url+r}))});
 return {title,description,url,image,graph,crumbs,noindex:!publicRoutes.includes(path),article:!!post};
}
export function headHtml(path:string){const m=metadata(path);const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');return `<title>${esc(m.title)}</title><meta name="description" content="${esc(m.description)}"><link rel="canonical" href="${esc(m.url)}"><meta name="robots" content="${m.noindex?'noindex,follow':'index,follow,max-image-preview:large'}"><meta property="og:title" content="${esc(m.title)}"><meta property="og:description" content="${esc(m.description)}"><meta property="og:url" content="${esc(m.url)}"><meta property="og:image" content="${esc(m.image)}"><meta property="og:type" content="${m.article?'article':'website'}"><meta property="og:site_name" content="Solid Elf"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@solidelf"><meta name="twitter:title" content="${esc(m.title)}"><meta name="twitter:description" content="${esc(m.description)}"><meta name="twitter:image" content="${esc(m.image)}"><script id="page-schema" type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':m.graph}).replace(/</g,'\\u003c')}</script>`;}
