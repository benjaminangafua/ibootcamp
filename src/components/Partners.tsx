import { useState } from 'react'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { budgetLines, currency, totalBudget, initialCash, whatsappUrl } from '../content'
import { Eyebrow } from './Ui'
const opportunities = [
  { label: 'Support a learner', amount: 1276.55, decimals: 2, description: 'Indicative share of the full 24-month program cost per enrolled learner.' },
  { label: 'Equip the program', amount: 9500, decimals: 0, description: 'The proposed startup and setup budget: devices, power, furniture, and learning-space readiness.' },
  { label: 'Back the cohort', amount: 51062, decimals: 0, description: 'The proposed complete two-year budget for 40 learners, including contingency.' },
]
export default function Partners() {
  const [selected, setSelected] = useState(0)
  const option = opportunities[selected]
  return <section id="partners" className="section-space bg-teal text-white">
    <div className="site-shell">
      <div className="grid items-end gap-8 md:grid-cols-[1.3fr_0.7fr]"><div><Eyebrow light>For schools, sponsors & communities</Eyebrow><h2 className="section-title mt-5">Talent is everywhere.<br /><span className="text-white">Opportunity should be, too.</span></h2></div><p className="max-w-md text-base leading-8 text-white/75">Help make a reliable learning space possible. Our first cohort is a proposal with a clear budget, defined targets, and conditions for a responsible launch.</p></div>
      <div className="mt-12 grid gap-7 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl border border-white/20 p-6 sm:p-9"><p className="text-xs font-semibold uppercase tracking-[2px] text-white/65">24-month funding target · USD</p><p className="mt-3 font-display text-[clamp(3rem,6vw,5rem)] font-bold leading-none tracking-[-3px]">{currency(totalBudget)}</p><p className="mt-4 text-sm text-white/65">Planning estimates. Funding is not yet confirmed.</p>
          <div className="mt-8 flex h-4 overflow-hidden rounded-full" role="img" aria-label="Budget allocation: startup 9,500 dollars; operations 35,520 dollars; reviews 1,400 dollars; contingency 4,642 dollars.">{budgetLines.map(line => <div key={line.label} style={{ width: `${line.amount / totalBudget * 100}%`, backgroundColor: line.color }} />)}</div>
          <div className="mt-5">{budgetLines.map(line => <div className="flex items-center justify-between gap-4 border-b border-white/15 py-3.5 text-sm last:border-0" key={line.label}><div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: line.color }} /><span>{line.label}</span></div><span className="font-semibold tabular-nums">{currency(line.amount)}</span></div>)}</div>
          <div className="mt-6 flex gap-3 rounded-xl bg-white/10 p-4"><ShieldCheck size={19} className="mt-0.5 shrink-0 text-white" /><p className="text-xs leading-6 text-white/80">Before enrollment: a safe venue, screened staff, ready devices, permissions, at least {currency(initialCash)} in initial cash, and a credible funded completion plan.</p></div>
        </div>
        <div className="flex flex-col rounded-2xl bg-paper p-6 text-ink sm:p-9"><p className="eyebrow text-teal">A practical way to help</p><h3 className="mt-4 font-display text-3xl font-bold tracking-[-1px]">Find your part in the story.</h3><div className="mt-6 flex flex-col gap-2" aria-label="Choose a partnership interest">{opportunities.map((item, index) => <button key={item.label} onClick={() => setSelected(index)} aria-pressed={selected === index} className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left text-sm font-semibold transition ${selected === index ? 'border-teal bg-teal text-white' : 'border-line bg-white hover:border-teal'}`}>{item.label}{selected === index ? <Check size={16} /> : <ArrowUpRight size={16} />}</button>)}</div>
          <div className="py-7" aria-live="polite"><p className="font-display text-4xl font-bold tracking-[-1.5px] text-teal">{currency(option.amount, option.decimals)}</p><p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">{option.description}</p></div>
          <a className="button button-dark mt-auto w-full" href={whatsappUrl(`Hello iBootCamp, I would like to discuss a partnership: ${option.label.toLowerCase()}. Please share the proposed delivery plan and funding arrangements.`)} target="_blank" rel="noopener noreferrer">Discuss a partnership <ArrowUpRight size={18} /></a><p className="mt-4 text-center text-xs leading-5 text-muted">Opens a WhatsApp draft. No payment is collected here.</p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/20 pt-7 text-xs text-white/65"><span className="font-semibold text-white">Core SDG alignment</span><span>04 Quality education</span><span>05 Gender equality</span><span>08 Decent work</span><span>09 Innovation</span><span>10 Inclusion</span><span>17 Partnerships</span></div>
    </div>
  </section>
}
