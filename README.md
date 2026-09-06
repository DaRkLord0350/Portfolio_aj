# Anshuman Jha — Portfolio

Personal portfolio of **Anshuman Jha**, Backend & Full-Stack Developer — scalable APIs, enterprise systems and AI-powered applications.

[![Live Demo](https://img.shields.io/badge/live_demo-ajportfolio0350.vercel.app-7c3aed?style=for-the-badge&logo=vercel&logoColor=white)](https://ajportfolio0350.vercel.app/)
[![Deployed on Vercel](https://img.shields.io/github/deployments/DaRkLord0350/Portfolio_aj/production?style=flat-square&label=vercel&logo=vercel&logoColor=white)](https://ajportfolio0350.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**[ajportfolio0350.vercel.app →](https://ajportfolio0350.vercel.app/)**

---

## Overview

A production-quality, single-page developer portfolio built to communicate real backend and full-stack engineering work — not a generic template. Every fact on the site (experience, projects, skills, education) is sourced directly from the underlying resume data; nothing is fabricated.

**Highlights**

- Animated hero visual — a stylized "API system" diagram (FastAPI → PostgreSQL → Auth → Background Jobs) with connected node badges, built in CSS/SVG/Framer Motion (no 3D dependency)
- Professional experience timeline with categorized responsibilities, not a flat bullet dump
- Projects presented as engineering case studies: Problem → Approach → What I Built → Architecture → Key Concepts
- A dedicated "Engineering Foundations" section grouping real, demonstrated concepts (backend, databases, security, system design, AI/data, DevOps, frontend)
- Education & certifications with the primary credential given real visual weight
- Working contact form (opens a pre-filled `mailto:`, no backend required)
- Dark, glassmorphic, violet-accented design system with restrained motion and full `prefers-reduced-motion` support
- SEO: dynamically generated OpenGraph image and favicon, `sitemap.xml`, `robots.txt`
- Fully responsive from 375px to 1920px, keyboard-accessible, semantic HTML

## Tech stack

| Layer      | Choice                                    |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router, Turbopack)         |
| Language   | TypeScript                                 |
| Styling    | Tailwind CSS v4 (CSS-first theme)          |
| Animation  | Framer Motion                              |
| Icons      | Lucide                                     |
| Hosting    | Vercel                                     |

## Getting started

```bash
git clone https://github.com/DaRkLord0350/Portfolio_aj.git
cd Portfolio_aj
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # eslint
```

## Deployment

The live site is deployed on [Vercel](https://vercel.com) at **[ajportfolio0350.vercel.app](https://ajportfolio0350.vercel.app/)**, built from this repository.

**Deploy your own copy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DaRkLord0350/Portfolio_aj)

Or manually:

```bash
npm install -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

Vercel auto-detects the Next.js App Router setup — no extra configuration is required. Pushing to the connected branch triggers a new deployment automatically.

## Content model

All personal content (profile, experience, projects, skills, concepts, education) lives in `src/data/*.ts`, kept separate from presentation. Update those files to change site content — no need to touch components.

One thing to know:

- The contact form (`src/components/contact/ContactForm.tsx`) opens the visitor's email client via a `mailto:` link — there is no backend. Wire it to an email API (e.g. Resend, Formspree) if you want in-page submission instead.

## Project structure

```
src/
  app/            routes, layout, SEO (sitemap, robots, icon, opengraph-image)
  components/     one folder per section (hero, about, experience, skills, projects, concepts, education, contact, ...)
  components/ui/  shared primitives (Button, Chip, GlowCard, Reveal, SectionHeading)
  data/           content — the single source of truth, grounded in the resume
  lib/            small utilities
```

## Design reference

`design-reference/` holds the original visual reference and resume PDF used to build the site. They aren't part of the deployed app.

## Author

**Anshuman Jha** — Backend & Full-Stack Developer
[Email](mailto:anshuman.jha325@gmail.com) · [GitHub](https://github.com/DaRkLord0350) · [LinkedIn](https://www.linkedin.com/in/anshuman-jha35)

---

This is a personal portfolio. Feel free to read the code for reference, but please don't republish it as your own.
