# Publication handover

The site is ready for a new repository named `ibootcamp` and a new Vercel project named `ibootcamp`. It does not modify the existing `ibenz` project.

## Verified locally

- React + TypeScript production build with Tailwind CSS.
- Nine separate prerendered pages, then React hydration.
- Curriculum track and year controls, sponsorship selections, FAQs, contact selections, and mobile navigation.
- Reconciled program hours and budget totals.
- Navigation between separate pages, accessible control names, image alternatives, and required program-status disclosures.
- Printable program overview, privacy information, and a brand identity page using the supplied logos.

Desktop navigation and curriculum controls were verified in Chrome. Phone and tablet layouts were reviewed at 375 px and 768 px, including the mobile menu and separate leadership page. Verify the live deployment URL after publishing.

## GitHub

GitHub's connector is connected and can write repository files, but its exposed tools do not create repositories. Repository creation was attempted through GitHub's website. Google sign-in was declined, so that authentication attempt was stopped. No repository has been created or pushed by this task.

The local `main` branch contains the complete source and its revisions. Publication can resume when the user chooses to retry sign-in or supplies an existing repository. Preserve the included GitHub Actions check and publish only this project.

## Vercel

The connected account is Benjamin A. Ngafua, username `benjaminangafua`, default scope `benjamin-ngafua`.

Creating the new project returned HTTP 403: the connection was not authorized for that scope. No Vercel project or deployment was created by this task. No authenticated CLI fallback was available. The user authorized deployment through the Vercel website as a fallback. That deployment remains pending GitHub repository creation and successful authentication. The connector can also be used if access to the intended scope is restored.

After access is resolved, import the GitHub repository using:

- Framework: Vite
- Node.js: 24.x
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

Confirm the resulting production URL, public access, static assets, program overview, contact actions, and logo downloads. Update the Open Graph image to an absolute URL on the verified production domain. A custom domain is not configured by this package; verify ownership and the intended DNS changes before connecting `ibootcamp.tech`.
