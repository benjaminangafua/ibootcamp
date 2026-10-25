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

The build generates nine separate prerendered HTML pages in `dist/`, with React hydration for the curriculum controls, frequently asked questions, mobile menu, team biography dialogs, optional video playback, and contact selectors. Fonts and images are served locally.

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

All page heroes use locally served images from the supplied presentation. Team cards and biography dialogs use sample portraits from the earlier deck, visibly labeled “Illustrative portrait · confirmed photo pending.” These are not verified photographs of the named team members. Replace them with approved portraits when available. Bios describe the proposed responsibilities in the current deck and do not invent qualifications or career history. Update portraits, crop positions, bios, and focus areas in `src/content.ts`.

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

Desktop navigation and curriculum controls were reviewed in Chrome. Phone and tablet layouts were reviewed at 375 px and 768 px using responsive preview frames, including the mobile menu and separate leadership page. The updated photo heroes and team biography dialogs were reviewed in Chrome, including the two-column desktop layout, stacked phone layout, scrolling, close control, Escape dismissal, and focus return. Automated checks verify every route and linked local asset.

## Photography and learning video

Content photos accompany the homepage learning experience, About page approach cards, program assessment section, partner learning-space feature, and impact story. These locally served images are illustrative assets from the supplied presentation, not evidence of current operations or measured results. The existing family and team photos remain.

The Program page includes Code.org’s **How Computers Work: What Makes a Computer, a Computer?**: https://www.youtube.com/watch?v=mCq8-xTH7jA. Its identity was checked against the official video collection at https://code.org/en-US/resources/videos on October 25, 2026. The illustrated poster uses a locally hosted program image; the video remains on YouTube and belongs to its publisher.

`src/components/LearningVideo.tsx` displays a local illustrated poster until a visitor chooses to load the privacy-enhanced YouTube player. Playback does not autoplay. The player supports captions and fullscreen, with a persistent direct YouTube link and a close control that removes the iframe. Internet access is required. Portable previews opened using `file:` or `blob:` open the direct video link because embedded players need a valid website referrer. The website information page describes this optional third-party connection.

Media QA: content photos and the responsive video layout were reviewed in Chrome. The YouTube player loaded with the correct title and controls; removing the player returned focus to the watch button. Full playback could not be confirmed in the preview environment. Verify playback on the final hosting domain.
