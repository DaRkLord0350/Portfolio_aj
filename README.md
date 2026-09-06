# Anshuman Jha — Portfolio

Personal portfolio for Anshuman Jha, Backend & Full-Stack Developer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Content

All personal content (profile, experience, projects, skills, education) lives in `src/data/*.ts`, kept separate from presentation. Update those files to change site content — no need to touch components.

Two placeholders to be aware of:

- `src/data/profile.ts` — `seo.siteUrl` is set to a placeholder domain (`https://anshumanjha.dev`); update it once the site has a real domain, since it feeds metadata, `sitemap.ts` and `robots.ts`.
- The contact form (`src/components/contact/ContactForm.tsx`) opens the visitor's email client via a `mailto:` link — there is no backend. Wire it to an email API (e.g. Resend, Formspree) if you want in-page submission.

## Structure

```
src/
  app/            routes, layout, SEO (sitemap, robots, icon, opengraph-image)
  components/     one folder per section (hero, about, experience, skills, projects, ...)
  components/ui/  shared primitives (Button, Chip, GlowCard, Reveal, SectionHeading)
  data/           content — the single source of truth, grounded in the resume
  lib/            small utilities
```

## Design reference

`design-reference/` holds the original visual reference and resume PDF used to build the site. They aren't part of the deployed app.
