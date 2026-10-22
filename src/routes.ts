export const pages = [
  { path: '/', label: 'Home', title: 'Practical technology learning in Liberia', description: 'A proposed 24-month technology bootcamp for junior and senior high school students in Liberia. Learn, create, and contribute.' },
  { path: '/about/', label: 'About', title: 'Our vision, mission & values', description: 'The purpose and principles behind iBootCamp: accessible, practical technology education for young people in Liberia.' },
  { path: '/program/', label: 'Program', title: 'The 24-month program', description: 'Eight terms of Saturday learning, junior and senior tracks, and practical projects across 320 supervised hours.' },
  { path: '/families/', label: 'Families', title: 'For learners & families', description: 'Eligibility, proposed fees, safeguards, schedules, and answers to common questions about iBootCamp.' },
  { path: '/leadership/', label: 'Leadership', title: 'Leadership & governance', description: 'CEO Veronica F. Davis, CTO Benjamin A. Ngafua, and COO Joseph F. Cooper lead the proposed program.' },
  { path: '/impact/', label: 'Impact', title: 'Planned results & sustainability', description: 'First-cohort targets, four dimensions of sustainability, and core SDG alignment.' },
  { path: '/partners/', label: 'Partners', title: 'Partner with iBootCamp', description: 'Review the proposed $51,062 two-year budget and explore school, equipment, and cohort partnerships.' },
  { path: '/contact/', label: 'Contact', title: 'Contact the team', description: 'Talk with iBootCamp about learning, school partnerships, or support for the first cohort in Liberia.' },
  { path: '/brand/', label: 'Brand', title: 'Brand identity', description: 'The supplied Bighorn logo and the iBootCamp teal, orange, and black palette.' },
] as const
export type PagePath = typeof pages[number]['path']
export const normalizePath = (path: string) => {
  const cleaned = path.split(/[?#]/)[0].replace(/\/index\.html$/, '/').replace(/\/+$/, '')
  return cleaned ? `${cleaned}/` : '/'
}
export const getPage = (path: string) => pages.find(page => page.path === normalizePath(path))
