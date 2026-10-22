import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from './Ui'
import { pages } from '../routes'
const links = pages.filter(page => page.path !== '/contact/' && page.path !== '/brand/')
export default function Header({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false)
  useEffect(() => { if (!open) return; const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); document.getElementById('mobile-menu-toggle')?.focus() } }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey) }, [open])
  return <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-lg">
    <div className="site-shell flex h-[88px] items-center justify-between gap-5"><Logo />
      <nav aria-label="Main navigation" className="hidden items-center gap-5 xl:flex">{links.map(page => <a className="nav-link" aria-current={currentPath === page.path ? 'page' : undefined} key={page.path} href={page.path}>{page.label}</a>)}</nav>
      <div className="flex items-center gap-3"><a href="/contact/" aria-current={currentPath === '/contact/' ? 'page' : undefined} className="hidden items-center gap-4 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink sm:inline-flex">Let’s talk <ArrowUpRight size={17} aria-hidden="true" /></a><button id="mobile-menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button></div>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-88px)] overflow-y-auto border-t border-line bg-white px-6 pb-5 pt-2 xl:hidden">{pages.filter(page => page.path !== '/brand/').map(page => <a key={page.path} href={page.path} aria-current={currentPath === page.path ? 'page' : undefined} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-line py-3 text-base font-medium aria-[current=page]:text-teal">{page.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}</nav>}
  </header>
}
