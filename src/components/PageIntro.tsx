import type { ReactNode } from 'react'
import { ArrowLink, Eyebrow } from './Ui'
export default function PageIntro({ eyebrow, title, text, action }: { eyebrow: string; title: ReactNode; text: string; action?: { label: string; href: string } }) {
  return <section className="border-b border-line bg-paper py-14 sm:py-20"><div className="site-shell grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><Eyebrow>{eyebrow}</Eyebrow><h1 className="page-title mt-6">{title}</h1></div><div><p className="body-copy max-w-xl">{text}</p>{action && <ArrowLink href={action.href} className="mt-6">{action.label}</ArrowLink>}</div></div></section>
}
