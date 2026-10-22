import Header from './components/Header'
import Footer from './components/Footer'
import PageIntro from './components/PageIntro'
import Home from './pages/Home'
import Brand from './pages/Brand'
import Program from './pages/Program'
import Impact from './pages/Impact'
import Purpose from './components/Purpose'
import Approach from './components/Approach'
import Families from './components/Families'
import Leadership from './components/Leadership'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Faq from './components/Faq'
import { ArrowLink } from './components/Ui'
import { getPage, normalizePath } from './routes'

function PageContent({ path }: { path: string }) {
  switch (path) {
    case '/': return <Home />
    case '/about/': return <><PageIntro eyebrow="About iBootCamp" title={<>Practical skills.<br /><span className="text-teal">Shared purpose.</span></>} text="A proposed nonprofit technology academy helping young people in Liberia use technology with confidence and contribute to their communities." /><Purpose /><Approach /><NextStep title="Meet the people behind the plan." text="Clear responsibilities and independent oversight support the program’s purpose." href="/leadership/" label="Meet our leadership" /></>
    case '/program/': return <Program />
    case '/families/': return <><PageIntro eyebrow="Learners & families" title={<>A fair start.<br /><span className="text-teal">A safe place to learn.</span></>} text="For junior and senior high school students in Grades 7–12. No previous coding experience, personal computer, or home internet connection is required." /><Families /><Faq /><NextStep title="Have a question about joining?" text="Admissions are not yet open. Speak with the team about the proposed program and future launch updates." href="/contact/" label="Contact the team" /></>
    case '/leadership/': return <><PageIntro eyebrow="Leadership & governance" title={<>Clear roles.<br /><span className="text-teal">Shared accountability.</span></>} text="A three-person executive team leads strategy, learning technology, and operations, with a proposed five-member independent Board." /><Leadership /><NextStep title="Purpose guides the work." text="Read the vision, mission, and six values that shape the organization’s decisions." href="/about/" label="About iBootCamp" /></>
    case '/impact/': return <Impact />
    case '/partners/': return <><PageIntro eyebrow="Partner with iBootCamp" title={<>Make room<br /><span className="text-teal">for potential.</span></>} text="Support a reliable space for 40 young people to practice technology skills. Review the proposed budget and discuss a partnership built on clear responsibilities." /><Partners /><NextStep title="A plan that can be held accountable." text="Explore the planned results, sustainability measures, and governance behind the funding proposal." href="/impact/" label="See the impact plan" /></>
    case '/contact/': return <><PageIntro eyebrow="Contact iBootCamp" title={<>Let’s start<br /><span className="text-teal">a conversation.</span></>} text="Ask about learning, discuss a school partnership, or help support the proposed first cohort. Choose the contact option that fits you." /><Contact /><section className="section-space bg-white"><div className="site-shell grid gap-8 md:grid-cols-2"><div><h2 className="font-display text-2xl font-bold">Before you get in touch</h2><p className="body-copy mt-4">The launch date, venue, and admission arrangements will be announced when readiness conditions are met. Contacting the team is an inquiry and does not reserve a place.</p></div><div><h2 className="font-display text-2xl font-bold">Information for families</h2><p className="body-copy mt-4">If you are under 18, involve a parent or guardian. For common questions about fees, schedules, and access, visit our family information page.</p><ArrowLink href="/families/" className="mt-5">Read the FAQs</ArrowLink></div></div></section></>
    case '/brand/': return <Brand />
    default: return <PageIntro eyebrow="Page not found" title="Let’s get you back on track." text="The page you requested could not be found." action={{ label: 'Return to the homepage', href: '/' }} />
  }
}
export function NextStep({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return <section className="border-t border-line bg-warm py-12"><div className="site-shell flex flex-col items-start justify-between gap-7 md:flex-row md:items-center"><div className="max-w-2xl"><h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2><p className="mt-3 text-sm leading-7 text-muted">{text}</p></div><ArrowLink href={href} className="shrink-0">{label}</ArrowLink></div></section>
}
export default function App({ path = '/' }: { path?: string }) {
  const route = normalizePath(path)
  return <><a href="#main" className="skip-link">Skip to content</a><Header currentPath={getPage(route)?.path || '/404/'} /><main id="main" tabIndex={-1}><PageContent path={route} /></main><Footer /></>
}
