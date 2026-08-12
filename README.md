# Varsha Kotegar — Analyst Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

Design concept: a "field notebook / instrument panel" — case files instead of
project cards, a live ticker instead of a hero stat block, and a wait-time
calculator (Little's Law) that runs the same model VoxelQ uses live.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Fill in the real content

Everything text-based lives in **one file**: `lib/data.ts`. Search it for
`[Add:` to find every remaining placeholder — emails, social links, resume
paths, hackathon results, and benchmark numbers that weren't finalized yet.
Nothing was invented: unknown metrics are left as explicit placeholders
rather than guessed, so grep for `[Add:` before you deploy.

Specifically:

- `profile.email`, `profile.socials.linkedin/x/kaggle`
- `achievements` → the MINDS Association detail
- Each `caseStudies[i].findings / result` where marked `[Add: ...]`

## 3. Swap the placeholder assets

| File | Replace with |
|---|---|
| `public/profile-placeholder.svg` | a real portrait — `.jpg`/`.png`, update the `src` in `components/About.tsx` |
| `public/resume/resume-analyst.pdf` | your actual resume PDF (see `public/resume/README.txt`) |
| `public/favicon.svg` | optional — current one already matches the site's palette |

`app/opengraph-image.tsx` generates the social-share preview image
automatically from `lib/data.ts` — no static image file needed.

## 4. Deploy

1. Push this repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new) — framework preset
   "Next.js" is auto-detected, no config needed.
3. In Vercel → Project → Settings → Domains, add your `.me` domain and
   follow the DNS instructions Vercel gives you.
4. Once live, double-check `app/layout.tsx` and `app/sitemap.ts` still point
   at the correct production URL (currently `https://varshakotegar.me`).

## 5. Adding real analytics later

The site ships with **no tracking** by default (per the brief). To add
privacy-respecting analytics later, the cleanest options are:

- **Vercel Analytics** — `npm i @vercel/analytics`, then add
  `<Analytics />` from `@vercel/analytics/react` inside `app/layout.tsx`.
- **Plausible / Umami** — add their `<script>` tag inside `app/layout.tsx`'s
  `<head>` (Next.js App Router injects `<head>` content automatically when
  you export a `metadata` object, or you can use `next/script`).

Useful events to track once analytics is wired up: case-study opens
(`/projects/[slug]`), resume clicks, the Contact email click, and outbound
clicks to GitHub/LinkedIn/LeetCode.

## Project structure

```
app/
  layout.tsx          — fonts, global SEO/OG metadata
  page.tsx             — homepage, assembles all sections
  projects/[slug]/     — case-study route (static params from lib/data.ts)
  playground/          — experiments + the Little's-Law calculator
  not-found.tsx         — custom 404
  opengraph-image.tsx  — generated OG/share image
  sitemap.ts, robots.ts
components/            — one component per section, all reusable
lib/data.ts             — all site copy and project data — edit this file
```

## Accessibility & performance notes already handled

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link
- Visible focus rings on every interactive element (`:focus-visible`)
- `prefers-reduced-motion` disables all animation
- The ticker pauses on hover/focus and is exposed as `role="marquee"`
- Images use `next/image` with explicit `sizes`
- Case-study pages are statically generated (`generateStaticParams`)

Run `npm run build` before deploying to catch any type or lint errors.
