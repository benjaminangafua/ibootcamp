import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { organization, team } from '../content'

export default function Leadership() {
  return <section id="people" aria-labelledby="people-title" className="section-space bg-paper">
    <div className="site-shell">
      <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div><p className="eyebrow text-teal">People & accountability</p><h2 id="people-title" className="section-title mt-5">Meet the<br /><span className="text-teal">executive team.</span></h2></div>
        <p className="body-copy">Three clear areas of responsibility, supported by independent Board oversight.</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-7">
        {team.map(person => <article key={person.abbreviation} className="flex flex-col border-t border-teal/25 pt-7">
          <div className="flex items-center justify-between gap-4"><p className="font-display text-5xl font-bold tracking-[-2px] text-teal">{person.abbreviation}</p><span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-sm font-bold text-teal" aria-hidden="true">{person.initials}</span></div>
          <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-[1.1px] text-teal">{person.role}</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.8px]">{person.name}</h3>
          <p className="mb-6 mt-4 text-sm leading-7 text-muted">{person.description}</p>
          <p className="mt-auto border-t border-line pt-4 text-xs leading-6 text-muted"><span className="font-semibold text-teal">Reports to</span><br />{person.reportsTo}</p>
        </article>)}
      </div>
      <div id="governance" className="mt-14 grid gap-7 rounded-2xl bg-white p-7 ring-1 ring-line lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10">
        <div><ShieldCheck size={30} strokeWidth={1.5} className="text-teal" aria-hidden="true" /><h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.8px]">Independent oversight.</h3><p className="mt-3 text-sm leading-7 text-muted">A proposed Board of {organization.boardMembers} independent members oversees strategy, finance, and safeguarding. The CEO reports to the Board.</p></div>
        <div><h4 className="text-sm font-bold text-teal">How accountability works</h4><ul className="mt-4 space-y-4 text-sm leading-7 text-muted"><li><strong className="font-semibold text-ink">CTO and COO:</strong> report to the CEO, with defined responsibilities for learning and daily operations.</li><li><strong className="font-semibold text-ink">Learner Support:</strong> has a direct, confidential safeguarding route to a designated Board member.</li><li><strong className="font-semibold text-ink">Nonprofit controls:</strong> no profit distributions, documented financial duties, and an annual independent financial review.</li></ul></div>
      </div>
      <p className="mt-5 text-xs leading-6 text-muted">Proposed appointments and governance structure, as set out in the organization’s case study.</p>
      <a href="/program-overview.html#leadership" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">Read the organization overview <ArrowUpRight size={16} aria-hidden="true" /></a>
    </div>
  </section>
}
