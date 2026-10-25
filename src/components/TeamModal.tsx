import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { TeamMember } from '../content'
export default function TeamModal({ person, onClose, returnFocus }: { person: TeamMember; onClose: () => void; returnFocus: HTMLElement | null }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current!
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.showModal()
    return () => { if (dialog.open) dialog.close(); document.body.style.overflow = previousOverflow; returnFocus?.focus({preventScroll:true}) }
  }, [returnFocus])
  return <dialog ref={ref} className="team-dialog" aria-labelledby="team-modal-title" onClose={event=>{if(!event.currentTarget.open)onClose()}} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close() }}>
    <div className="team-modal-grid">
      <figure className="team-modal-photo"><img src={person.photo} alt="Illustrative profile image from the earlier presentation; not a verified portrait" style={{objectPosition:person.photoPosition}} /><div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-6 pt-20"><span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">{person.abbreviation}</span><p className="mt-3 font-display text-2xl font-bold text-white">{person.remit}</p><figcaption className="mt-3 text-xs text-white/80">{person.photoStatus} · confirmed photo pending</figcaption></div></figure>
      <div className="team-modal-copy"><p className="eyebrow text-teal">Meet the team</p><h2 id="team-modal-title" className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{person.name}</h2><p className="mt-3 text-base font-semibold text-teal">{person.role}</p><div className="my-6 h-1 w-12 rounded-full bg-accent" /><div className="space-y-4">{person.bio.map(paragraph => <p key={paragraph} className="text-base leading-8 text-muted">{paragraph}</p>)}</div><h3 className="mt-7 text-sm font-bold text-ink">Areas of responsibility</h3><ul className="mt-3 space-y-2">{person.focusAreas.map(area => <li key={area} className="flex gap-2.5 text-sm leading-6 text-muted"><ArrowUpRight size={17} className="mt-1 shrink-0 text-teal" aria-hidden="true" />{area}</li>)}</ul><p className="mt-7 border-t border-line pt-5 text-sm text-muted">Reports to <strong className="font-semibold text-ink">{person.reportsTo}</strong></p></div>
    </div>
    <button type="button" autoFocus onClick={()=>ref.current?.close()} aria-label="Close biography" className="modal-close"><X size={22} aria-hidden="true" /></button>
  </dialog>
}
