import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const source=JSON.parse(await fs.readFile('src/data/content.json','utf8'));
const collections=['courses','blog','events','team','opportunities','papers','datasets','reports'];
if(!source||Array.isArray(source)||typeof source!=='object')throw new Error('Content must be an object of collections.');
const mimeExt={'image/png':'png','image/jpeg':'jpg','image/webp':'webp','application/pdf':'pdf','text/csv':'csv'};
async function resolve(value){
 if(typeof value==='string'){
  if(value.startsWith('data:')){const m=value.match(/^data:([^;]+);base64,([A-Za-z0-9+/=\r\n]+)$/);if(!m||!mimeExt[m[1]])throw new Error('Unsupported uploaded asset');const bytes=Buffer.from(m[2],'base64');if(bytes.length>3*1024*1024)throw new Error('Upload exceeds 3 MB');const name=crypto.createHash('sha256').update(bytes).digest('hex').slice(0,24)+'.'+mimeExt[m[1]];await fs.mkdir('public/content-assets',{recursive:true});await fs.writeFile('public/content-assets/'+name,bytes);return '/content-assets/'+name;}
  return value;
 }
 if(Array.isArray(value))return Promise.all(value.map(resolve));
 if(value&&typeof value==='object')return Object.fromEntries(await Promise.all(Object.entries(value).map(async([k,v])=>[k,await resolve(v)])));
 return value;
}
for(const [key,records] of Object.entries(source)){
 if(!collections.includes(key)||!Array.isArray(records))throw new Error('Invalid collection: '+key);
 const required={courses:['title','description','category','currency','level','prerequisites','format','includes','service','image','reference'],blog:['title','tag','cover_image','excerpt','published_at'],events:['id','title','description','event_type','location_type','start_date'],team:['id','name','role','bio','image','category'],opportunities:['title','category','description','fit','status','service'],papers:['title','description','category','kind','parent','status','file','body'],datasets:['title','description','category','kind','parent','status','file','body'],reports:['title','description','category','kind','parent','status','file','body']};
 const checkLinks=(v,k='')=>{if(Array.isArray(v))v.forEach(x=>checkLinks(x,k));else if(v&&typeof v==='object')Object.entries(v).forEach(([n,x])=>checkLinks(x,n));else if(typeof v==='string'&&['image','cover_image','file','url','reference','link','service','parent','meeting_url'].includes(k)&&v&&!/^(https:\/\/|\/(?!\/)|data:(image\/(png|jpeg|webp)|application\/pdf|text\/csv);base64,)/.test(v))throw new Error('Unsafe URL in '+key+'.'+k);};
 const slugs=new Set();for(const r of records){
  for(const field of required[key])if(typeof r?.[field]!=='string')throw new Error('Missing/invalid '+key+'.'+field);
  checkLinks(r);
  if(key==='courses'&&(!(r.price>0)||!(r.hours>0)||typeof r.priceConfirmed!=='boolean'||!Array.isArray(r.modules)||!r.modules.length||!r.modules.every(x=>typeof x==='string')||!Array.isArray(r.outcomes)||!r.outcomes.length||!r.outcomes.every(x=>typeof x==='string')))throw new Error('Invalid course price, duration or curriculum');
  if(key==='blog'&&(!Array.isArray(r.sections)||!r.sections.every(s=>typeof s.heading==='string'&&Array.isArray(s.paragraphs)&&s.paragraphs.every(p=>typeof p==='string'))||!Array.isArray(r.sources)))throw new Error('Invalid blog sections or sources');
  if(key==='opportunities'&&(!Array.isArray(r.items)||!r.items.every(x=>typeof x==='string')))throw new Error('Invalid opportunity items');
  if(key==='events'&&!Number.isFinite(Date.parse(r.start_date)))throw new Error('Invalid event start date');
if(!r||typeof r!=='object'||!(r.title||r.name))throw new Error('Missing title/name in '+key);if(key!=='team'){if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.slug||'')||slugs.has(r.slug))throw new Error('Invalid or duplicate slug in '+key);slugs.add(r.slug);}}
}
await fs.writeFile('src/data/content-resolved.json',JSON.stringify(await resolve(source),null,2)+'\n');
console.log('Prepared content collections and uploaded assets.');
