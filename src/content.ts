export type Track = 'junior' | 'senior'
export const phone = '+231775939247'
export const displayPhone = '+231 775 939 247'
export const program = {
  months: 24, terms: 8, sessionsPerTerm: 10, hoursPerSession: 4,
  learners: 40, waivers: 16, girlsTarget: 20,
  startup: 9500, monthly: 1480, periodic: 1400, contingencyRate: 0.1,
  feePayingLearners: 24, monthlyFee: 10,
} as const
export const baseBudget = program.startup + program.monthly * program.months + program.periodic
export const totalBudget = Math.round(baseBudget * (1 + program.contingencyRate))
export const totalHours = program.terms * program.sessionsPerTerm * program.hoursPerSession
export const initialCash = (program.startup + program.monthly * 6) * 1.1
export const currency = (value: number, decimals = 0) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value)
export const whatsappUrl = (message: string) => `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`

export const organization = {
  vision: 'A Liberia where every young person can use technology confidently and responsibly to improve their education and contribute to their community.',
  mission: 'To provide junior and senior high school students with accessible, practical technology education through a 24-month bootcamp, guided projects, and fair assessment.',
  boardMembers: 5,
} as const

export const values = [
  { title: 'Integrity', description: 'We act honestly and keep accurate learning and financial records.' },
  { title: 'Inclusion', description: 'We welcome different abilities and reduce barriers to participation.' },
  { title: 'Learner safety', description: 'We protect learners through clear rules, consent, and safe reporting.' },
  { title: 'Accountability', description: 'We assign responsibilities and transparently report results and spending.' },
  { title: 'Curiosity', description: 'We encourage questions, experimentation, and learning from mistakes.' },
  { title: 'Service', description: 'We use technology to address needs in schools and communities.' },
] as const

export const resultTargets = [
  { value: '34', label: 'learners retained', detail: 'Continued participation through the two-year program.' },
  { value: '32', label: 'learners completing', detail: 'Meeting the attendance, assessment, and safety requirements.' },
  { value: '34', label: 'learners competent', detail: 'Demonstrating the defined practical digital skills.' },
  { value: '28', label: 'point skill-gain target', detail: 'Comparing baseline and final practical assessments.' },
] as const

export const sustainability = [
  { title: 'Political', description: 'Nonpartisan delivery and written school agreements that clarify responsibilities.' },
  { title: 'Economic', description: 'Mixed income, regular cash forecasts, and a repair reserve to support reliable delivery.' },
  { title: 'Social', description: 'Fair admissions, learner protection, and parent feedback throughout the program.' },
  { title: 'Environmental', description: 'Device reuse, timely repairs, and responsible disposal of equipment.' },
] as const

export const curriculum = [
  { title: 'Start with the essentials', months: '01—03', category: 'DIGITAL FOUNDATIONS', description: 'Get comfortable with a computer. Manage files, type with confidence, navigate safely, and ask good questions.', junior: 'Create an illustrated digital story.', senior: 'Produce a formatted report and a safe research log.', skills: ['Computer basics', 'File management', 'Online safety'] },
  { title: 'Build safe digital habits', months: '04—06', category: 'COMPUTER USE & SAFETY', description: 'Practice file organization, careful research, privacy, and safe communication while building confidence with everyday computer tasks.', junior: 'Create a digital safety guide and organized project folder.', senior: 'Build a research log and demonstrate safe account and file practices.', skills: ['Digital safety', 'Research', 'Computer practice'] },
  { title: 'Create, organize, and code', months: '07—09', category: 'OFFICE TOOLS & PROGRAMMING', description: 'Create clear documents, spreadsheets, and presentations. Use simple programming to break problems into steps and test your ideas.', junior: 'Build a simple budget and an interactive story with block-based code.', senior: 'Create a formula-based budget and an introductory Python problem solver.', skills: ['Office tools', 'Programming logic', 'Debugging'] },
  { title: 'Build your first piece of the web', months: '10—12', category: 'WEB & DESIGN', description: 'Use structure, layout, and visual communication to make information useful on a screen.', junior: 'Build a simple HTML information page.', senior: 'Create a responsive HTML and CSS website.', skills: ['HTML', 'Visual design', 'CSS foundations'] },
  { title: 'Understand data. Question AI.', months: '13—15', category: 'DATA & RESPONSIBLE AI', description: 'Read charts, handle sample data carefully, and check AI-generated claims against trustworthy sources.', junior: 'Chart a fictional survey and explain what it shows.', senior: 'Clean a sample dataset and verify AI-generated claims.', skills: ['Data literacy', 'Source checking', 'Privacy'] },
  { title: 'Use AI with care', months: '16—18', category: 'RESPONSIBLE AI & DATA', description: 'Explore AI tools through supervised activities. Check accuracy, protect personal information, and explain where human judgment is needed.', junior: 'Compare a supervised AI response with reliable learning sources.', senior: 'Audit AI-generated content and document source checks using sample data.', skills: ['Responsible AI', 'Verification', 'Data privacy'] },
  { title: 'Build for your community', months: '19—21', category: 'COMMUNITY PROJECT', description: 'Investigate a real school or community need, propose a solution, and test it with guidance.', junior: 'Develop a supervised school-project prototype.', senior: 'Test a community-project prototype and document feedback.', skills: ['Research', 'Teamwork', 'User feedback'] },
  { title: 'Show what you can do', months: '22—24', category: 'PORTFOLIO & CAPSTONE', description: 'Select your strongest work, demonstrate your individual skills, and plan your next learning step.', junior: 'Present a portfolio, a capstone, and a next-learning plan.', senior: 'Demonstrate a capstone, publish a portfolio, and map further study.', skills: ['Portfolio', 'Individual demonstration', 'Reflection'] },
] as const

export const faqs = [
  ['Who is the program for?', 'The proposed first cohort is for learners entering Grades 7–12 in Liberia. Junior-entry learners in Grades 7–9 and senior-entry learners in Grades 10–12 follow different levels of the same practical pathway. No previous coding experience is required.'],
  ['Are applications open?', 'Not yet. iBootCamp is in its proposed launch phase. A start date, venue, admissions process, and scholarship awards will be announced only after the staffing, safety, permissions, and funding conditions are met. You can contact the team to ask about the program.'],
  ['Do I need my own laptop or internet?', 'No. The model provides shared laboratory devices during supervised sessions. Optional practice can be completed offline. Owning a device or having personal internet access is not an entry requirement.'],
  ['How does this fit around school?', 'The proposed schedule is Saturday mornings, 8:00 a.m.–12:00 noon, for junior learners, and 12:30–4:30 p.m. for senior learners. Each term has ten teaching Saturdays, with other weeks reserved for school exams, holidays, reviews, or make-up sessions. Sessions include breaks.'],
  ['How much will it cost?', 'The proposed subsidized fee is US$10 per month over 24 months, or US$240 in total, for 24 fee-paying learners. Sixteen full fee waivers are planned based on documented need and secured funding. The monthly payment plan spans the whole program, including non-teaching weeks. Final terms and refund arrangements will be published before admission.'],
  ['What qualification will learners receive?', 'Learners who meet the attendance, assessment, and digital-safety requirements receive an iBootCamp completion certificate and a portfolio. This is not a school diploma, externally accredited qualification, or guarantee of employment.'],
  ['How will learner safety be managed?', 'The proposed safeguarding model requires two screened adults per session, guardian consent and learner assent for minors, safe arrival and collection, a code of conduct, and confidential reporting with an independent Board route. Photos require separate consent.'],
  ['How can a school or sponsor help?', 'Schools can discuss learner referrals, venues, and supervised learning partnerships. Sponsors can discuss equipment, fee waivers, or cohort funding. Contact the team to review the delivery plan, budget, and written partnership terms. No donation payment is collected on this website.'],
] as const

export const budgetLines = [
  { label: 'Learning spaces & equipment', detail: 'Startup and setup', amount: 9500, color: '#FFFFFF' },
  { label: 'People & program delivery', detail: '24 months of operations', amount: 35520, color: '#FF7033' },
  { label: 'Reviews & exhibitions', detail: 'Periodic activities', amount: 1400, color: '#B3D2D9' },
  { label: 'Contingency', detail: '10% of the base budget', amount: 4642, color: '#000000' },
] as const

export const team = [
  {
    name: 'Veronica F. Davis', role: 'Chief Executive Officer', abbreviation: 'CEO', initials: 'VD',
    description: 'Leads the organization’s direction, builds partnerships, and coordinates fundraising for the proposed program.',
    reportsTo: 'Board of Directors', remit: 'Strategy & partnerships',
    photo: '/images/profile-sample-one.jpeg', photoPosition: '65% center', photoStatus: 'Illustrative portrait',
    bio: [
      'Veronica F. Davis is the proposed Chief Executive Officer of iBootCamp. The role brings together organizational strategy, school and community partnerships, and fundraising for the 24-month technology education program.',
      'Veronica’s responsibilities include coordinating launch readiness, aligning the executive team with the organization’s mission, and reporting performance and risk to the Board of Directors.',
      'The CEO works with the technology and operations leads to connect the learning plan with the resources and safeguards needed for delivery. This profile describes the proposed role and its responsibilities.'
    ],
    focusAreas: ['Organizational direction', 'Partnerships & fundraising', 'Board reporting & readiness'],
  },
  {
    name: 'Benjamin A. Ngafua', role: 'Chief Technology Officer', abbreviation: 'CTO', initials: 'BN',
    description: 'Leads curriculum, teaching quality, and learning technology, with practical projects at the center of the program.',
    reportsTo: 'Chief Executive Officer', remit: 'Learning & technology',
    photo: '/images/profile-sample-two.jpeg', photoPosition: '66% center', photoStatus: 'Illustrative portrait',
    bio: [
      'Benjamin A. Ngafua is the proposed Chief Technology Officer of iBootCamp. The role covers curriculum design, teaching quality, and the technology used across the junior and senior learning tracks.',
      'Benjamin’s responsibilities include supervising trainers and lab support, organizing practical learning activities, and helping learners demonstrate their progress through assessed work and portfolios.',
      'The CTO coordinates with operations on laboratory readiness and supports responsible technology use throughout the program. This profile describes the proposed role and its responsibilities.'
    ],
    focusAreas: ['Curriculum & assessment', 'Teaching quality', 'Learning technology & lab support'],
  },
  {
    name: 'Joseph F. Cooper', role: 'Chief Operating Officer', abbreviation: 'COO', initials: 'JC',
    description: 'Coordinates daily operations, finance, administration, and learner support to keep the program organized.',
    reportsTo: 'Chief Executive Officer', remit: 'Operations & learner support',
    photo: '/images/profile-sample-three.jpeg', photoPosition: '61% center', photoStatus: 'Illustrative portrait',
    bio: [
      'Joseph F. Cooper is the proposed Chief Operating Officer of iBootCamp. The role connects daily program delivery with the financial, administrative, and logistical arrangements needed to run the bootcamp.',
      'Joseph’s responsibilities include coordinating learner support, keeping operational records organized, and supporting the schedules and resources required for supervised Saturday sessions.',
      'The COO works with the CEO and CTO to coordinate delivery and maintain clear operational accountability. Learner Support also retains a direct, confidential safeguarding route to a designated Board member. This profile describes the proposed role and its responsibilities.'
    ],
    focusAreas: ['Finance & administration', 'Program logistics', 'Learner support'],
  },
] as const
export type TeamMember = typeof team[number]
