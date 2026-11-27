# Ulan Akhmet Portfolio

An English-language portfolio built with Next.js App Router and TypeScript. The homepage groups the featured work, additional hackathons, and coursework with jump links to each section. The homepage and assets export to static files. Edit the profile and project copy in `app/content.ts`.

## Run locally

Requires Node.js 22 or later and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`. Run `pnpm lint` and `pnpm build` to check the code and generate the static site in `out/`.

## CV and project links

`public/ulan-akhmet-cv.pdf` is the public copy. It contains the three approved contact methods. NextBuy is marked as access restricted because GitHub returns 404 for the repository when signed out.

## How Codex helped

The brief was agreed in a requirements interview, and Ulan reviewed a local preview before the first deployment. Codex implemented the page, used UI UX Pro Max to explore layout and typography, and prepared the public CV from the original.

- [Pull request #2](https://github.com/8zellorr8/ulan-akhmet-portfolio/pull/2) shows the feature branch, project updates, and the checks run before merging to `main`.
- The initial code review caught a mismatch between the visible “View code” label and its accessible name. The links now start their accessible names with the same words users see.
- The first production smoke check caught a 404 on the homepage. Vercel was serving `public/` instead of the Next.js static export in `out/`. [The deployment fix](https://github.com/8zellorr8/ulan-akhmet-portfolio/commit/9580598) sets the correct output directory.

Verification covers linting, the production build, mobile and desktop layout, keyboard navigation, project links, social previews, and the public PDF download. The PDF was also checked for visual changes outside the contact line and for the removal of the phone number from extracted text and links.
