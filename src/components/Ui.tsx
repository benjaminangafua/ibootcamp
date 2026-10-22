import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function Logo({ light = false }: { light?: boolean }) {
  return <a href="/" aria-label="iBootCamp home" className="inline-flex shrink-0"><img src={light ? '/brand/logo-reverse.png' : '/brand/logo-primary.png'} alt="iBootCamp" width="711" height="225" className="h-auto w-[174px] object-contain sm:w-[190px]" /></a>
}
export function Eyebrow({ children, light = false }: { children: ReactNode, light?: boolean }) {
  return <p className={`eyebrow ${light ? 'text-white/80' : 'text-teal'}`}><span className="h-1.5 w-1.5 shrink-0 bg-current" />{children}</p>
}
export function ArrowLink({ href, children, light = false, className = '', external = false }: { href: string, children: ReactNode, light?: boolean, className?: string, external?: boolean }) {
  return <a href={href} className={`button ${light ? 'button-light' : 'button-dark'} ${className}`} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}<ArrowUpRight size={19} aria-hidden="true" /></a>
}
export function SectionHeading({ eyebrow, title, text }: { eyebrow: string, title: ReactNode, text?: string }) {
  return <div className="max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="section-title mt-5">{title}</h2>{text && <p className="body-copy mt-6 max-w-xl">{text}</p>}</div>
}
