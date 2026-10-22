import { useState } from 'react'
import { ArrowUpRight, Check, Minus, Plus } from 'lucide-react'
import { curriculum, type Track } from '../content'
import { Eyebrow } from './Ui'
export default function Curriculum() {
  const [track, setTrack] = useState<Track>('junior')
  const [year, setYear] = useState<1 | 2>(1)
  const [expanded, setExpanded] = useState<number>(0)
  return <section id="program" className="section-space border-t border-line bg-white">
    <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <Eyebrow>The learning journey</Eyebrow>
        <h2 className="section-title mt-5">Small steps.<br />Real <span className="text-teal">possibilities.</span></h2>
        <p className="body-copy mt-6 max-w-md">You don’t need to know how to code. Just bring your curiosity. We start with the basics and build towards work you can show.</p>
        <div className="mt-8 inline-flex max-w-full gap-1 rounded-full border border-line bg-paper p-1" aria-label="Choose a learning track">
          {(['junior', 'senior'] as const).map(value => <button key={value} aria-pressed={track === value} onClick={() => setTrack(value)} className={`track-button ${track === value ? 'bg-teal text-white shadow-sm' : 'text-ink hover:bg-mist'}`}>{value === 'junior' ? 'Junior · Grades 7–9' : 'Senior · Grades 10–12'}</button>)}
        </div>
        <div className="mt-7 border-l-2 border-teal pl-5" aria-live="polite"><p className="font-semibold">{track === 'junior' ? 'A confident first step' : 'A stronger foundation for what’s next'}</p><p className="mt-2 max-w-md text-sm leading-7 text-muted">{track === 'junior' ? 'Creative, guided activities for younger learners. Saturday sessions: 8:00 a.m.–12:00 noon.' : 'More independent projects, introductory Python, and practical web skills. Saturday sessions: 12:30–4:30 p.m.'}</p></div>
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"><span className="flex items-center gap-2"><Check size={16} className="text-teal" />Devices provided in class</span><span className="flex items-center gap-2"><Check size={16} className="text-teal" />Beginner friendly</span></div>
        <a href="/program-overview.html" className="mt-9 inline-flex items-center gap-3 border-b border-teal pb-1 text-sm font-semibold text-teal">Read the program overview <ArrowUpRight size={16} /></a>
      </div>
      <div>
        <div className="mb-5 flex items-center justify-between border-b border-line pb-5"><span className="eyebrow text-muted">8 terms. One purposeful path.</span><div className="flex gap-1">{([1, 2] as const).map(n => <button key={n} aria-pressed={year === n} onClick={() => {setYear(n); setExpanded((n - 1) * 4)}} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${year === n ? 'bg-warm text-teal' : 'text-muted hover:bg-paper'}`}>Year {n}</button>)}</div></div>
        <div className="space-y-3">{curriculum.map((term, index) => (index < 4 ? 1 : 2) === year && <article key={term.title} className={`curriculum-row ${expanded === index ? 'border-teal/25 bg-paper' : 'border-line bg-white'}`}>
          <h3><button onClick={() => setExpanded(expanded === index ? -1 : index)} aria-expanded={expanded === index} aria-controls={`term-${index}`} className="flex w-full items-center gap-4 p-5 text-left sm:p-6"><span className="font-display text-sm font-bold text-teal">0{index + 1}</span><span className="flex-1"><span className="mb-1 block text-[10px] font-semibold uppercase tracking-[1.7px] text-muted">Months {term.months}</span><span className="font-display text-lg font-bold tracking-[-0.4px]">{term.title}</span></span><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${expanded === index ? 'bg-teal text-white' : 'bg-paper text-teal'}`}>{expanded === index ? <Minus size={15} /> : <Plus size={15} />}</span></button></h3>
          {expanded === index && <div id={`term-${index}`} className="px-5 pb-6 sm:pl-[61px] sm:pr-6"><p className="text-sm leading-7 text-muted">{term.description}</p><div className="mt-4 rounded-xl border border-line bg-white p-4"><p className="text-[10px] font-bold uppercase tracking-[1.5px] text-teal">Your project</p><p className="mt-2 text-sm font-medium leading-6" aria-live="polite">{term[track]}</p></div><div className="mt-4 flex flex-wrap gap-2">{term.skills.map(skill => <span key={skill} className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted">{skill}</span>)}</div></div>}
        </article>)}</div>
        <p className="mt-5 text-xs leading-6 text-muted">Proposed curriculum. Progress is reviewed at Month 12; grade promotion does not restart the program.</p>
      </div>
    </div>
  </section>
}
