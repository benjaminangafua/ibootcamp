import { Laptop, Code2, FolderCheck } from 'lucide-react'
import { SectionHeading } from './Ui'
export default function Approach() { return <section id="approach" className="section-space bg-paper"><div className="site-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr]"><SectionHeading eyebrow="A different kind of Saturday" title={<>Less watching.<br />More <span className="text-teal">making things happen.</span></>} /><p className="body-copy">Access to a computer is a start. Consistent practice, thoughtful guidance, and something to build are what turn access into ability.</p></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">{[
          { n: '01', Icon: Laptop, title: 'Learn by doing.', body: 'A device, a clear task, and a facilitator nearby. Practice each new skill in a supervised lab that welcomes questions.', tags: 'GUIDED PRACTICE', bg: 'bg-mist' },
          { n: '02', Icon: Code2, title: 'Build with purpose.', body: 'Turn lessons into useful projects: a simple budget, a website, a learning resource, or a response to a community need.', tags: 'REAL PROJECTS', bg: 'bg-warm' },
          { n: '03', Icon: FolderCheck, title: 'Own your progress.', body: 'Keep a portfolio, get feedback, improve your work, and demonstrate what you can do independently.', tags: 'VISIBLE PROGRESS', bg: 'bg-paper' },
        ].map(({ n, Icon, title, body, tags, bg }) => <article key={n} className={`rounded-2xl p-7 lg:p-8 ${bg}`}><div className="mb-12 flex items-start justify-between"><span className="font-display text-sm font-semibold text-teal/60">/{n}</span><Icon size={40} strokeWidth={1.2} className="text-teal" /></div><p className="mb-3 text-[9px] font-bold uppercase tracking-[1.6px] text-teal/70">{tags}</p><h3 className="font-display text-2xl font-bold tracking-[-0.8px]">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{body}</p></article>)}</div>
      </div></section> }
