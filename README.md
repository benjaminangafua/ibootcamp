# iBootCamp website

A responsive React + TypeScript + Tailwind CSS website for the proposed iBootCamp technology learning program in Liberia.

## Development

Requires Node.js 22.12+ or 24 LTS.

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
```

The build generates nine separate prerendered HTML pages in `dist/`, with React hydration for the curriculum controls, frequently asked questions, mobile menu, and contact selectors. Fonts and images are served locally.

## Deploy to Vercel

Import the GitHub repository. Select **Vite**, build command `npm run build`, and output directory `dist`. No secrets or environment variables are required. Production should serve the public website; preview access follows account settings.

## Content and contact

- `src/content.ts`: vision, mission, six core values, leadership, governance, results, sustainability, curriculum, budget, and contact details.
- `src/components/Purpose.tsx`, `Leadership.tsx`, and `Responsibility.tsx`: organization sections based on the revised presentation.
- `src/routes.ts`: paths, titles, and descriptions for each page.
- `src/App.tsx` and `src/pages/`: separate page composition and launch-status messaging.
- `src/styles.css`: Tailwind theme and shared visual styles.
- `public/program-overview.html`: printable overview.
- `public/privacy.html`: website data and contact information.
- `public/brand/`: the original logo PNGs extracted unchanged from slide 13.
- `/brand/`: the current web brand reference, with logo downloads.

The supplied 13-slide `iBootCamp Presentation.pptx` is the current content and branding reference. Leadership follows its latest team slide: Veronica F. Davis as CEO, Benjamin A. Ngafua as CTO, and Joseph F. Cooper as COO. Claims of guaranteed expertise and scholarships have been qualified. The site identifies iBootCamp as proposed and does not claim registration, accreditation, a confirmed venue, secured funding, or open admissions.

The phone number is supplied in the presentation. WhatsApp links prepare a draft for the visitor to send; the website never sends messages automatically. There is no application database, payment processor, analytics tracker, or contact-form backend. Hosting providers may still process request logs.

Classroom images are supplied presentation illustrations and are labeled accordingly. Team members use initials rather than unverified portraits. Obtain suitable consent before replacing them with identifiable participant photographs.

The results section follows the revised presentation: 34 learners retained, 32 completing, 34 competent, and a 28-point skill-gain target. The presentation does not specify that target’s scoring scale, so the website identifies it as requiring definition before baseline measurement. Targets are never presented as achieved results. The Board structure now follows the revised deck’s five independent members.

## Readiness before admissions

Confirm registration and permissions, venue, staffing, safeguarding process, final fee/refund policy, start date, and funding. Do not switch the site to open applications until these are ready. No custom domain is assumed to be configured; add a verified domain and absolute social-image URLs when connected.

## Verification

The automated checks cover reconciled budgets and delivery hours, curriculum completeness, contact encoding, server-rendered content, anchor targets, unique IDs, alternative text, and accessible control names. These checks do not replace visual browser QA or assistive-technology testing.

## Rights

Website code is prepared for iBootCamp. The current logo artwork is supplied by the user. Included open-source libraries and fonts retain their own licenses. Supplied images remain subject to the source owner's rights and permissions. The logo has not undergone trademark clearance.

## Pages and branding

The production build has distinct HTML documents at `/`, `/about/`, `/program/`, `/families/`, `/leadership/`, `/impact/`, `/partners/`, `/contact/`, and `/brand/`. Navigation uses normal page links, not homepage section anchors. Each page has its own title, description, content, and active navigation state. The existing printable overview and privacy information remain separate documents.

Brand colors are Teal `#00687F`, Orange `#FF7033`, and Black `#000000`. Supplied Bighorn lettering is preserved in the original logo artwork. Manrope and DM Sans serve as readable supporting website fonts. The former teal/lime brand system and earlier guide are superseded in this website. No separate Bighorn webfont or webfont license was supplied, so it is not extracted or redistributed as a webfont.

## Portable preview

Run `node scripts/export-preview.mjs /absolute/path/Website.html` after the build. This self-contained preview includes every page, images, fonts, and printable documents. Its internal page navigation uses URL hashes solely to make the file portable. The production website uses the separate routes above. Browser back and forward work in both versions.

The ZIP contains the React source and the ready-to-host `dist/` directory. Run `npm ci` then `npm run dev` for development, or deploy `dist/` as a static site. Do not open production files directly from disk because their assets use website-root paths; use the portable preview or an HTTP server.

## Browser review

Desktop navigation and curriculum controls were reviewed in Chrome. Phone and tablet layouts were reviewed at 375 px and 768 px using responsive preview frames, including the mobile menu and separate leadership page. Automated checks verify every route and linked local asset.
