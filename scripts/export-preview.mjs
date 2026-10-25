import fs from 'node:fs'
import path from 'node:path'
const dist = path.resolve('dist')
const output = process.argv[2]
if (!output || !path.isAbsolute(output)) throw new Error('Provide an absolute output HTML path.')
const mime = file => ({'.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2','.woff':'font/woff','.html':'text/html'})[path.extname(file)] || 'application/octet-stream'
const dataUrl = file => `data:${mime(file)};base64,${fs.readFileSync(path.join(dist,file)).toString('base64')}`
let html = fs.readFileSync(path.join(dist,'index.html'),'utf8').replace('<html lang="en">','<html lang="en" data-preview="true">')
const jsPath = html.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/)[1]
let js = fs.readFileSync(path.join(dist,jsPath),'utf8')
const cssPath = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/)[1]
let css = fs.readFileSync(path.join(dist,cssPath),'utf8')
css = css.replace(/url\(([^)]+)\)/g,(match,target)=>{const file=target.replace(/["']/g,'');return file.startsWith('/assets/') ? `url("${dataUrl(file)}")` : match})
const files = ['images','brand'].flatMap(directory => fs.readdirSync(path.join(dist,directory)).filter(file=>/\.(png|jpe?g|webp|svg)$/.test(file)).map(file=>`${directory}/${file}`))
for (const file of files) { const data=dataUrl(file); html=html.split(`/${file}`).join(data); js=js.split(`/${file}`).join(data) }
html = html.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/,'').replace(/<link[^>]+rel="stylesheet"[^>]+href="[^"]+"[^>]*>/,()=>`<style>${css}</style>`)
const documents = Object.fromEntries(['program-overview.html','privacy.html'].map(file=>{
 let content=fs.readFileSync(path.join(dist,file),'utf8')
 for(const asset of files) content=content.split(`/${asset}`).join(dataUrl(asset))
 return [file,content]
}))
const support = `const previewDocs=${JSON.stringify(documents)};document.addEventListener('click',event=>{const link=event.target.closest('a');if(!link)return;const [name,fragment]=link.getAttribute('href')?.replace(/^\\//,'').split('#')||[];if(!previewDocs[name])return;event.preventDefault();const base=location.href.split('#')[0];let content=previewDocs[name].replace(/href="\\/(?:contact\\/)?"/g,m=>'href="'+base+(m.includes('contact')?'#page=/contact/':'#page=/')+'"');content=content.replace(/<a href="\\/privacy.html">.*?<\\/a>/g,'Privacy information is available from the website footer.');const url=URL.createObjectURL(new Blob([content],{type:'text/html'}));window.open(url+(fragment?'#'+fragment:''),'_blank','noopener');});`
html = html.replace('</body>',()=>`<script type="module">${js.replace(/<\/script/gi,'<\\/script')}</script><script>${support.replace(/<\/script/gi,'<\\/script')}</script></body>`)
fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,html)
console.log(`Portable website preview: ${fs.statSync(output).size} bytes. Production routes remain separate HTML files.`)
