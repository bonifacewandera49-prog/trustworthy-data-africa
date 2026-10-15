import { courses } from "@/data/courses";
import { blogPosts } from "@/data/blog";
import { fallbackEvents } from "@/data/events";
import { members } from "@/data/team";
import { opportunities } from "@/data/opportunities";
import { papers, datasets, reports } from "@/data/resources";
export type Value=string|number|boolean|null|Value[]|{[key:string]:Value};
export type ContentRecord=Record<string,Value>;
export interface Entry {key:string;published:boolean;data:ContentRecord;}
export type Drafts=Record<string,Entry[]>;
export const labels:Record<string,string>={courses:"Short Courses",blog:"Blog",events:"Events",team:"Team",opportunities:"Opportunities",papers:"Research Papers",datasets:"Datasets",reports:"Reports"};
const resource={slug:"",title:"",description:"",category:"",kind:"Research theme",parent:"/research",status:"Proposed theme",file:"",body:""};
export const templates:Record<string,ContentRecord>={
 courses:{slug:"",title:"",category:"Cybersecurity",price:0,currency:"UGX",priceConfirmed:false,hours:12,level:"Beginner",description:"",outcomes:[""],modules:[""],prerequisites:"",format:"Instructor-led; dates and delivery format to be agreed.",includes:"Tuition and guided exercises. Software licences excluded.",service:"/consultancy/custom-training-programmes",image:"/images/editorial/service-training.webp",reference:"https://www.nist.gov/cyberframework"},
 blog:{id:0,slug:"",title:"",tag:"Cybersecurity",cover_image:"/images/editorial/blog-header.webp",excerpt:"",published_at:"",sections:[{heading:"",paragraphs:[""]}],sources:[{label:"",url:""}]},
 events:{id:"",slug:"",title:"",description:"",cover_image:"/images/editorial/events-header.webp",event_type:"Workshop",location_type:"online",location:"Online · proposed",meeting_url:"",start_date:"",end_date:"",max_capacity:null,is_free:true,registration_open:false,require_approval:false,published:true,created_at:""},
 team:{id:"",name:"",role:"",bio:"",image:"",category:"core_team",link:""},
 opportunities:{slug:"",category:"Jobs",title:"",description:"",fit:"",items:[""],status:"Expressions of interest",service:"/consultancy",open:false},
 papers:resource,datasets:{...resource,kind:"Dataset theme",parent:"/datasets"},reports:{...resource,kind:"Report theme",parent:"/reports"}
};
export function initialDrafts():Drafts{return Object.fromEntries(Object.entries({courses,blog:blogPosts,events:fallbackEvents,team:members,opportunities,papers,datasets,reports}).map(([key,items])=>[key,items.map((data,i)=>({key:`${key}-${i}`,published:true,data:JSON.parse(JSON.stringify(data)) as ContentRecord}))]));}
export function validateRecord(collection:string,data:ContentRecord){
 if(!String(data.title||data.name||"").trim())throw new Error("A title or name is required.");
 if(collection!=="team"&&!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(data.slug||"")))throw new Error("Use a URL slug with lowercase letters, numbers and hyphens.");
 if(collection==="courses"&&(Number(data.price)<=0||Number(data.hours)<=0||!Array.isArray(data.modules)||!data.modules.length||!Array.isArray(data.outcomes)||!data.outcomes.length))throw new Error("Courses need a positive fee and duration, learning outcomes and modules.");
 if(collection==="blog"&&(!Array.isArray(data.sections)||!data.sections.length||!/^\d{4}-\d{2}-\d{2}$/.test(String(data.published_at))))throw new Error("Articles need sections and a publication date (YYYY-MM-DD).");
 if(collection==="events"&&(!data.start_date||!Number.isFinite(Date.parse(String(data.start_date)))))throw new Error("Events need a valid start date and time, including timezone.");
 const check=(v:Value,k:string)=>{if(Array.isArray(v))v.forEach(x=>check(x,k));else if(v&&typeof v==='object')Object.entries(v).forEach(([n,x])=>check(x,n));else if(typeof v==='string'&&['image','cover_image','file','url','reference','link','service','parent','meeting_url'].includes(k)&&v&&!/^(https:\/\/|\/(?!\/)|data:(image\/(png|jpeg|webp)|application\/pdf|text\/csv);base64,)/.test(v))throw new Error(`Use an HTTPS URL, local path or supported uploaded asset for ${k}.`);};check(data,"");
}
export function exportContent(drafts:Drafts){const result:Record<string,ContentRecord[]>={};for(const [key,items] of Object.entries(drafts)){const seen=new Set();result[key]=items.filter(e=>e.published).map(e=>{validateRecord(key,e.data);const id=e.data.slug||e.data.id;if(seen.has(id))throw new Error(`Duplicate slug or ID in ${labels[key]}.`);seen.add(id);return e.data;});}return result;}
