import { useRef, useState } from 'react'
import { ArrowUpRight, Play, X } from 'lucide-react'
import { Eyebrow } from './Ui'

const video = {
  title: 'How Computers Work: What Makes a Computer, a Computer?',
  watch: 'https://www.youtube.com/watch?v=mCq8-xTH7jA',
  embed: 'https://www.youtube-nocookie.com/embed/mCq8-xTH7jA?autoplay=0&playsinline=1&cc_load_policy=1&rel=0',
}

export default function LearningVideo() {
  const [loaded, setLoaded] = useState(false)
  const [externalOnly, setExternalOnly] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  function loadVideo() {
    if (window.location?.protocol === 'file:' || window.location?.protocol === 'blob:') {
      setExternalOnly(true)
      window.open(video.watch, '_blank', 'noopener,noreferrer')
      return
    }
    setLoaded(true)
  }
  return <section id="learning-video" className="section-space bg-mist" aria-labelledby="learning-video-title">
    <div className="site-shell">
      <div className="mb-9 grid items-end gap-6 lg:grid-cols-[1fr_.8fr]">
        <div><Eyebrow>Watch & explore</Eyebrow><h2 id="learning-video-title" className="section-title mt-5">Start with a<br /><span className="text-teal">little curiosity.</span></h2></div>
        <p className="body-copy">What makes a computer different from other machines? This introduction from Code.org explores input, storage, processing, and output.</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
        <div className="learning-video-frame">
          {loaded ? <iframe src={video.embed} title={video.title} width="960" height="540" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" onLoad={event => event.currentTarget.focus()} /> : <button ref={trigger} type="button" onClick={loadVideo} className="video-poster group" aria-label={`Load YouTube video: ${video.title}`} aria-describedby="video-connection-note">
            <img src="/images/learning-lab.jpeg" alt="Illustrative computer learning space" width="897" height="1650" loading="lazy" decoding="async" />
            <span className="video-poster-title"><span>Code.org · Learning video</span>What makes a computer,<br />a computer?</span><span className="video-play"><Play size={30} fill="currentColor" aria-hidden="true" /><span>Watch the video</span></span>
          </button>}
        </div>
        <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1.1fr_.9fr]">
          <div><p className="text-xs font-bold uppercase tracking-wider text-teal">Video by Code.org</p><h3 className="mt-3 font-display text-2xl font-bold leading-snug">{video.title}</h3><p id="video-connection-note" className="mt-3 text-sm leading-7 text-muted">Internet required. YouTube loads only after you choose to watch. {externalOnly ? 'The downloaded preview opens the video on YouTube.' : 'YouTube’s privacy practices apply when the player loads.'}</p><div className="mt-4 flex flex-wrap items-center gap-5"><a href={video.watch} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-teal">Open on YouTube <ArrowUpRight size={17} aria-hidden="true" /></a>{loaded && <button type="button" onClick={()=>{setLoaded(false);requestAnimationFrame(()=>trigger.current?.focus())}} className="inline-flex items-center gap-2 text-sm font-semibold text-muted"><X size={17} aria-hidden="true" />Close video</button>}</div></div>
          <div className="rounded-2xl bg-paper p-6"><h4 className="font-display text-lg font-bold">Try this after watching</h4><p className="mt-3 text-sm leading-7 text-muted">Choose a phone or computer. Name one way it receives information, one thing it stores, and one result it displays.</p><a href="https://code.org/en-US/resources/videos" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">Explore the video series <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </div>
    </div>
  </section>
}
