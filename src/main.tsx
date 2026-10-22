import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import '@fontsource/dm-sans/latin-700.css'
import './styles.css'
import App from './App'
import { getPage } from './routes'

const container = document.getElementById('root')!
// Published routes are separate HTML documents. The downloaded preview uses
// hash routes so every page can be reviewed from one portable file.
const portable = document.documentElement.dataset.preview === 'true'
const currentPath = () => portable && location.hash.startsWith('#page=') ? location.hash.slice(6) : portable ? '/' : location.pathname
const element = () => <React.StrictMode><App key={currentPath()} path={currentPath()} /></React.StrictMode>
const metadata = getPage(currentPath())
if (metadata) document.title = `${metadata.title} | iBootCamp`
const root = container.hasChildNodes() && (!portable || currentPath() === '/') ? hydrateRoot(container, element()) : createRoot(container)
if (!container.hasChildNodes() || (portable && currentPath() !== '/')) root.render(element())
if (portable) {
  const navigate = () => { root.render(element()); document.title = `${getPage(currentPath())?.title || 'Page not found'} | iBootCamp`; window.scrollTo(0,0) }
  window.addEventListener('hashchange', () => { if (!location.hash || location.hash.startsWith('#page=')) navigate() })
  document.addEventListener('click', event => {
    const link = (event.target as Element).closest('a')
    const href = link?.getAttribute('href')
    if (href?.startsWith('#')) {
      const target = document.getElementById(href.slice(1))
      if (target) { event.preventDefault(); target.scrollIntoView(); if (target.id === 'main') target.focus({preventScroll:true}) }
      return
    }
    if (!href || !href.startsWith('/') || !getPage(href) || link?.hasAttribute('download') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    const route = getPage(href)!.path
    if (currentPath() === route) window.scrollTo(0,0)
    else location.hash = `page=${route}`
  })
}
