import type { ReactNode } from 'react'
import { ArrowLink, Eyebrow } from './Ui'
import HeroBackground, { heroImages } from './HeroBackground'
export default function PageIntro({ eyebrow, title, text, action, image = heroImages.learning, imagePosition }: { eyebrow: string; title: ReactNode; text: string; action?: { label: string; href: string }; image?: string; imagePosition?: string }) {
  return <section data-hero className="page-hero relative isolate overflow-hidden bg-ink text-white">
    <HeroBackground image={image} position={imagePosition} />
    <div className="site-shell relative z-10 grid min-h-[440px] gap-8 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-14 lg:pb-20 lg:pt-28">
      <div><Eyebrow light>{eyebrow}</Eyebrow><h1 className="page-title mt-6">{title}</h1></div>
      <div><p className="max-w-xl text-lg leading-8 text-white/90">{text}</p>{action && <ArrowLink href={action.href} light className="mt-7">{action.label}</ArrowLink>}</div>
    </div>
    <p className="site-shell relative z-10 pb-5 text-[11px] leading-5 text-white/70">Illustrative image from the program presentation.</p>
  </section>
}
