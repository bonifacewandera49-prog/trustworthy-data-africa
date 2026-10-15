import { createServer, loadEnv } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
const vite=await createServer({server:{middlewareMode:true},appType:'custom',mode:'production'});
try {
 const {render,publicRoutes,headHtml,metadata}=await vite.ssrLoadModule('/src/entry-server.tsx');
 if(new Set(publicRoutes).size!==publicRoutes.length)throw new Error("Duplicate public URL: check content slugs across collections.");
 const template=(await fs.readFile('dist/index.html','utf8')).replace(/<title>.*?<\/title>/,'');
 for(const route of publicRoutes){const target=path.join('dist',route,'index.html');await fs.mkdir(path.dirname(target),{recursive:true});const body=render(route);if(!body.includes('<h1'))throw new Error('Missing H1 '+route);const html=template.replace('</head>',headHtml(route)+'<style>.rv{opacity:1;transform:none}</style></head>').replace('<div id="root"></div>','<div id="root">'+body+'</div>');await fs.writeFile(target,html);}
 await fs.writeFile('dist/404.html',template.replace('</head>',headHtml('/404')+'</head>').replace('<div id="root"></div>','<div id="root">'+render('/404')+'</div>'));
 const origin=metadata('/').url.replace(/\/$/,'');
 await fs.writeFile('dist/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+publicRoutes.map(r=>`<url><loc>${origin+r}</loc></url>`).join('')+'</urlset>');
 await fs.writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /login\nSitemap: ${origin}/sitemap.xml\n`);
 console.log(`Prerendered ${publicRoutes.length} public pages with metadata, JSON-LD, sitemap and 404.`);
}finally{await vite.close();}
