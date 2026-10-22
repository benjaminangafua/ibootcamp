import { Compass, Flag } from 'lucide-react'
import { organization, values } from '../content'
import { Eyebrow } from './Ui'

export default function Purpose() {
  return <section id="about" aria-labelledby="about-title" className="section-space bg-white">
    <div className="site-shell">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <Eyebrow>Our purpose</Eyebrow>
          <h2 id="about-title" className="section-title mt-5">Technology skills.<br /><span className="text-teal">Community purpose.</span></h2>
          <p className="body-copy mt-6">iBootCamp is a proposed nonprofit technology education initiative for junior and senior high school students in Liberia.</p>
        </div>
        <div className="space-y-8">
          <article className="border-b border-line pb-8">
            <div className="flex items-center gap-3 text-teal"><Compass size={23} aria-hidden="true" /><h3 className="font-display text-xl font-bold">Our Vision</h3></div>
            <p className="mt-4 text-lg leading-8 text-ink sm:text-xl sm:leading-9">{organization.vision}</p>
          </article>
          <article>
            <div className="flex items-center gap-3 text-teal"><Flag size={23} aria-hidden="true" /><h3 className="font-display text-xl font-bold">Our Mission</h3></div>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{organization.mission}</p>
          </article>
        </div>
      </div>
      <div id="values" className="mt-14 border-t border-line pt-9 sm:mt-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><h3 className="font-display text-2xl font-bold tracking-[-0.8px] text-teal">Our Core Values</h3><p className="text-sm text-muted">The standards behind our everyday decisions.</p></div>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => <article key={value.title} className="flex gap-4"><span className="mt-1 text-xs font-semibold tabular-nums text-teal/55" aria-hidden="true">0{index + 1}</span><div><h4 className="font-display text-lg font-bold text-ink">{value.title}</h4><p className="mt-2 text-sm leading-7 text-muted">{value.description}</p></div></article>)}
        </div>
      </div>
    </div>
  </section>
}
