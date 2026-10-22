import React, { act } from 'react'
import { renderToString } from 'react-dom/server'
import { parseHTML } from 'linkedom'
import { existsSync } from 'node:fs'
import assert from 'node:assert/strict'
import App from '../src/App'
import { pages, getPage } from '../src/routes'
import { organization, team } from '../src/content'

const documents = new Map(pages.map(page => [page.path, parseHTML(`<html><body>${renderToString(<App path={page.path} />)}</body></html>`).document]))
for (const [path, document] of documents) {
  assert.equal(document.querySelectorAll('h1').length, 1, path)
  const ids = [...document.querySelectorAll('[id]')].map(el => el.id)
  assert.equal(ids.length,new Set(ids).size, `Duplicate IDs: ${path}`)
  for (const link of document.querySelectorAll('a[href]')) {
    const href = link.getAttribute('href')!
    if (href.startsWith('#')) assert.ok(document.getElementById(href.slice(1)), `Missing ${href} on ${path}`)
    if (href.startsWith('/')) {
      const [target,fragment] = href.split('#')
      const page = getPage(target)
      assert.ok(page || existsSync(`public${target}`), `Missing linked page or asset: ${href}`)
      if (page && fragment) assert.ok(documents.get(page.path)?.getElementById(fragment), `Missing cross-page anchor ${href}`)
    }
  }
  for (const img of document.querySelectorAll('img')) { assert.ok(img.getAttribute('alt')); assert.ok(existsSync(`public${img.getAttribute('src')}`)) }
  for (const button of document.querySelectorAll('button')) assert.ok(button.textContent?.trim() || button.getAttribute('aria-label'))
  assert.ok(!document.querySelector('form'))
  if (path !== '/brand/') assert.equal(document.querySelector('header a[aria-current="page"]')?.getAttribute('href'),path)
}
assert.ok(documents.get('/about/')!.body.textContent.includes(organization.vision))
assert.ok(documents.get('/about/')!.body.textContent.includes(organization.mission))
for (const person of team) assert.ok(documents.get('/leadership/')!.body.textContent.includes(person.name))
assert.equal(team.find(person=>person.abbreviation==='CTO')?.name,'Benjamin A. Ngafua')
assert.equal(team.find(person=>person.abbreviation==='COO')?.name,'Joseph F. Cooper')
assert.ok(documents.get('/partners/')!.body.textContent.includes('$51,062'))
assert.ok(documents.get('/families/')!.body.textContent.includes('Admissions are not yet open.'))
assert.ok(!documents.get('/')!.querySelector('#program'), 'Homepage must not contain the full program page')
console.log(`All ${pages.length} pages render independently, with valid navigation, unique IDs, correct roles, and accessible controls.`)

const { document, window } = parseHTML(`<html><body><div id="root">${renderToString(<App path="/program/" />)}</div></body></html>`)
Object.assign(globalThis, { window, document, HTMLElement: window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true })
const { hydrateRoot } = await import('react-dom/client')
let root: ReturnType<typeof hydrateRoot>
await act(async()=>{ root = hydrateRoot(document.getElementById('root')!,<App path="/program/" />) })
async function click(text: string) {
  const button=[...document.querySelectorAll('button')].find(item=>item.textContent?.includes(text))
  assert.ok(button,`Missing control: ${text}`)
  await act(async()=>{button.dispatchEvent(new window.Event('click',{bubbles:true}))})
}
async function page(path:string) { await act(async()=>{root!.render(<App key={path} path={path} />)}) }
await click('Senior · Grades 10–12')
assert.ok(document.body.textContent.includes('Produce a formatted report and a safe research log.'))
await click('Year 2')
assert.ok(document.body.textContent.includes('Understand data. Question AI.'))
assert.ok(!document.querySelector('#program')?.textContent.includes('Start with the essentials'))
await page('/partners/')
await click('Back the cohort')
assert.ok(document.querySelector('#partners a.button')?.getAttribute('href')?.includes('back%20the%20cohort'))
await page('/families/')
await click('How much will it cost?')
assert.ok(document.querySelector('#faq-4')?.textContent.includes('US$240'))
await page('/contact/')
await click('School or educator')
assert.ok(document.querySelector('#contact a.button')?.getAttribute('href')?.includes('represent%20a%20school'))
await act(async()=>{document.getElementById('mobile-menu-toggle')!.dispatchEvent(new window.Event('click',{bubbles:true}))})
assert.equal(document.getElementById('mobile-menu-toggle')?.getAttribute('aria-expanded'),'true')
await act(async()=>{document.querySelector('#mobile-navigation a')!.dispatchEvent(new window.Event('click',{bubbles:true}))})
assert.equal(document.getElementById('mobile-menu-toggle')?.getAttribute('aria-expanded'),'false')
await act(async()=>{root!.unmount()})
console.log('Hydrated controls passed: curriculum, sponsorship, FAQ, contact, and navigation.')
