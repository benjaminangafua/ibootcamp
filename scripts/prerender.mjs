import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App.tsx'
import { pages } from '../src/routes.ts'
const template = readFileSync('dist/index.html', 'utf8')
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;')
for (const page of pages) {
  const markup = renderToString(createElement(App, {path:page.path}))
  const html = template.replace(/<title>.*?<\/title>/, () => `<title>${escape(page.title)} | iBootCamp</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, () => `$1${escape(page.description)}`.replace('$1','<meta name="description" content="'))
    .replace(/(<meta property="og:title" content=")[^"]*/, () => `<meta property="og:title" content="${escape(page.title)} | iBootCamp`)
    .replace(/(<meta property="og:description" content=")[^"]*/, () => `<meta property="og:description" content="${escape(page.description)}`)
    .replace('<div id="root"></div>', () => `<div id="root">${markup}</div>`)
  const file = path.join('dist', page.path, 'index.html')
  mkdirSync(path.dirname(file), {recursive:true}); writeFileSync(file,html)
}
console.log(`Prerendered ${pages.length} separate pages with unique titles, descriptions, and React hydration.`)
