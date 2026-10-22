import { resultTargets, sustainability } from '../content'
import { Eyebrow } from './Ui'

export default function Responsibility() {
  return <section id="responsibility" aria-labelledby="responsibility-title" className="section-space border-t border-line bg-white">
    <div className="site-shell">
      <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><Eyebrow>Results & sustainability</Eyebrow><h2 id="responsibility-title" className="section-title mt-5">A plan for progress.<br /><span className="text-teal">A commitment to continuity.</span></h2></div><p className="body-copy">We plan to track participation and practical learning across the first cohort of 40. These are program targets, with results to be reported as the cohort progresses.</p></div>
      <dl className="mt-10 grid grid-cols-2 gap-x-7 gap-y-8 border-y border-line py-8 lg:grid-cols-4">
        {resultTargets.map(target => <div key={target.label} className="flex flex-col"><dt className="order-2 mt-2 text-sm font-semibold text-ink">{target.label}</dt><dd className="order-1 font-display text-5xl font-bold tracking-[-2px] text-teal">{target.value}<span className="ml-1 text-accent">.</span></dd><dd className="order-3 mt-3 text-xs leading-6 text-muted">{target.detail}</dd></div>)}
      </dl>
      <p className="mt-4 text-xs leading-6 text-muted">Targets from the revised program presentation. The skill-gain scoring scale and assessment method will be finalized before baseline measurement.</p>
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"><div><h3 className="font-display text-2xl font-bold tracking-[-0.8px] text-teal">Built to continue.</h3><p className="mt-4 text-sm leading-7 text-muted">The program’s sustainability plan covers its public relationships, finances, people, and equipment.</p></div><div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">{sustainability.map(item => <article key={item.title} className="border-t border-line pt-5"><h4 className="text-base font-bold text-ink">{item.title}</h4><p className="mt-2 text-sm leading-7 text-muted">{item.description}</p></article>)}</div></div>
    </div>
  </section>
}
