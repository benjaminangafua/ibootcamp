import type { ReactNode } from 'react'
import { ArrowLink, Eyebrow } from './Ui'

export function ProgramPhoto({ src, alt, position = 'center', className = '', caption = 'Illustrative image from the program presentation.' }: { src: string; alt: string; position?: string; className?: string; caption?: string }) {
  return <figure className={`program-photo ${className}`}>
    <img src={src} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: position }} />
    <figcaption>{caption}</figcaption>
  </figure>
}

export function ExperienceGallery() {
  return <section className="section-space bg-white" aria-labelledby="experience-title">
    <div className="site-shell">
      <div className="grid items-end gap-7 lg:grid-cols-[1.2fr_.8fr]">
        <div><Eyebrow>The learning experience</Eyebrow><h2 id="experience-title" className="section-title mt-5">Make Saturday<br /><span className="text-teal">mean something.</span></h2></div>
        <p className="body-copy">The proposed program combines a place to practice, guidance when you need it, and people to learn alongside.</p>
      </div>
      <div className="experience-gallery mt-10">
        <article><ProgramPhoto src="/images/learning-with-confidence.webp" alt="Illustration of two students practicing together at a computer" position="center 32%" /><p className="mt-6 text-xs font-bold uppercase tracking-wider text-teal">01 · Practice</p><h3 className="mt-2 font-display text-2xl font-bold">Small steps. Useful skills.</h3><p className="mt-3 text-sm leading-7 text-muted">Learn a skill, try it yourself, and improve with feedback.</p></article>
        <article><ProgramPhoto src="/images/learning-lab.jpeg" alt="Illustrative computer learning space with laptops and charging equipment" position="center 52%" /><p className="mt-6 text-xs font-bold uppercase tracking-wider text-teal">02 · Access</p><h3 className="mt-2 font-display text-2xl font-bold">A space to focus.</h3><p className="mt-3 text-sm leading-7 text-muted">Shared equipment and supervised sessions are part of the plan.</p></article>
        <article><ProgramPhoto src="/images/future-learners.jpeg" alt="Illustration of a group of young learners together outdoors" /><p className="mt-6 text-xs font-bold uppercase tracking-wider text-teal">03 · Belonging</p><h3 className="mt-2 font-display text-2xl font-bold">Grow together.</h3><p className="mt-3 text-sm leading-7 text-muted">Ask questions, exchange ideas, and build confidence with peers.</p></article>
      </div>
      <ArrowLink href="/program/" className="mt-9">See what you’ll learn</ArrowLink>
    </div>
  </section>
}

export function PhotoStory({ image, alt, position, eyebrow, title, children, reverse = false }: { image: string; alt: string; position?: string; eyebrow: string; title: ReactNode; children: ReactNode; reverse?: boolean }) {
  return <section className="section-space bg-white"><div className="site-shell grid items-center gap-9 lg:grid-cols-2 lg:gap-16">
    <ProgramPhoto src={image} alt={alt} position={position} className={`story-photo ${reverse ? 'lg:order-2' : ''}`} />
    <div><Eyebrow>{eyebrow}</Eyebrow><h2 className="section-title mt-5">{title}</h2><div className="mt-6 space-y-5 text-base leading-8 text-muted">{children}</div></div>
  </div></section>
}
