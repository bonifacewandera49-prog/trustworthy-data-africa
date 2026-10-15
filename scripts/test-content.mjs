import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createServer } from 'vite';
import assert from 'node:assert/strict';
const vite=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
 const {initialDrafts,exportContent,validateRecord}=await vite.ssrLoadModule('/src/lib/content-editor.ts');
 const drafts=initialDrafts();const result=exportContent(drafts);assert.equal(result.courses.length,7);assert.equal(Object.keys(result).length,8);
 drafts.courses[0].published=false;assert.equal(exportContent(drafts).courses.length,6);
 drafts.courses=[];assert.deepEqual(exportContent(drafts).courses,[]);
 assert.throws(()=>validateRecord('courses',{title:'Invalid',slug:'bad/slug'}));
 assert.throws(()=>validateRecord('team',{name:'Test',image:'javascript:alert(1)'}));
 const {metadata,publicRoutes}=await vite.ssrLoadModule('/src/lib/seo.ts');
 assert.equal(publicRoutes.filter(r=>r.startsWith('/short-courses/')).length,7);
 const course=metadata('/short-courses/qualitative-analysis-nvivo').graph.find(x=>x['@type']==='Course');assert(course);assert.equal(course.offers,undefined);assert.equal(course.provider['@id'],'https://www.solidelf.org/#organization');
 const {courses}=await vite.ssrLoadModule('/src/data/courses.ts');const nvivo=courses.find(c=>c.slug==='qualitative-analysis-nvivo');nvivo.priceConfirmed=true;assert.equal(metadata('/short-courses/qualitative-analysis-nvivo').graph.find(x=>x['@type']==='Course').offers.price,450000);nvivo.priceConfirmed=false;
 const temp=await fs.mkdtemp(path.join(os.tmpdir(),'solid-elf-content-test-'));
 try {await fs.mkdir(path.join(temp,'src/data'),{recursive:true});result.papers[0].file='data:application/pdf;base64,'+Buffer.from('%PDF-1.4 test fixture').toString('base64');await fs.writeFile(path.join(temp,'src/data/content.json'),JSON.stringify(result));const prepare=path.resolve('scripts/prepare-content.mjs');execFileSync(process.execPath,[prepare],{cwd:temp,stdio:'pipe'});const resolved=JSON.parse(await fs.readFile(path.join(temp,'src/data/content-resolved.json'),'utf8'));assert.equal(resolved.courses.length,7);assert(resolved.papers[0].file.startsWith('/content-assets/'));await fs.access(path.join(temp,'public',resolved.papers[0].file));result.courses=[];await fs.writeFile(path.join(temp,'src/data/content.json'),JSON.stringify(result));execFileSync(process.execPath,[prepare],{cwd:temp,stdio:'pipe'});assert.equal(JSON.parse(await fs.readFile(path.join(temp,'src/data/content-resolved.json'),'utf8')).courses.length,0);result.team[0].image='javascript:alert(1)';await fs.writeFile(path.join(temp,'src/data/content.json'),JSON.stringify(result));assert.throws(()=>execFileSync(process.execPath,[prepare],{cwd:temp,stdio:'pipe'}));}finally{await fs.rm(temp,{recursive:true,force:true});}
 console.log('PASS: eight collections export, unpublish/delete semantics, validation, seven course routes conditional price schema, full content import, uploaded asset materialization and unsafe-URL rejection.');
}finally{await vite.close();}
