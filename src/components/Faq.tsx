import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { faqs } from '../content'
import { Eyebrow } from './Ui'
export default function Faq() {
  const [open, setOpen] = useState<number | null>(1)
  return <section id="questions" className="section-space bg-white"><div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>A few good questions</Eyebrow><h2 className="section-title mt-5">Let’s make<br />things clear.</h2><p className="body-copy mt-5 max-w-sm">For learners, parents, and anyone who believes in what young people can build.</p><a href="/contact/" className="mt-7 inline-block border-b border-teal pb-1 text-sm font-semibold text-teal">Still have a question? Talk to us.</a></div><div>{faqs.map(([question, answer], index) => <article className="border-b border-line" key={question}><h3><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index} aria-controls={`faq-${index}`} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold">{question}{open === index ? <Minus size={18} className="shrink-0 text-teal" /> : <Plus size={18} className="shrink-0 text-teal" />}</button></h3>{open === index && <p id={`faq-${index}`} className="pb-6 pr-7 text-sm leading-7 text-muted">{answer}</p>}</article>)}</div></div></section>
}
