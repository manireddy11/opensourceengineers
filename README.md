# Open Source Engineers

A research-lab and course-platform website for **Open Source Engineers** — research toward AGI through neuroscience, metaphysics, and open systems.

Live domain: **opensourceengineers.com**

## Stack

- Next.js 16 (App Router, TypeScript)
- React 19
- Hand-authored CSS modules
- Vercel deployment
- No database required for the marketing site

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — research thesis, threads, featured courses, lab notes |
| `/research` | Research agenda, threads, publications, lab notes |
| `/courses` | Filterable course catalog and cohort process |
| `/courses/[slug]` | Course detail, curriculum, enrollment request |
| `/notes/[slug]` | Full lab-note articles |
| `/about` | Lab story, principles, open roles |
| `/privacy` | Privacy policy |
| `/api/waitlist` | Waitlist / syllabus request endpoint |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO assets |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build     # production build
npm run start     # run the production build
npm run lint      # ESLint
npm run typecheck # TypeScript
```

## Editing content

- **Brand, domain, email, social links:** `src/lib/site.ts`
- **Research threads, courses, papers, lab notes:** `src/lib/data.ts`
- **Global colors, type, buttons:** `src/app/globals.css`
- **Page layouts:** `src/app/**/page.tsx` and matching `*.module.css`

Course pages and note pages are statically generated from `src/lib/data.ts`. Add an entry there and the route, sitemap, and catalog update automatically.

## Waitlist / syllabus requests

The forms POST to `/api/waitlist`. By default they validate the email and log the request server-side, but **do not persist it**.

To store submissions, set `WAITLIST_WEBHOOK_URL` in Vercel to any endpoint that accepts JSON:

```json
{
  "email": "person@example.com",
  "course": "foundations-neural-computation",
  "source": "opensourceengineers.com",
  "submittedAt": "2026-11-23T12:00:00.000Z"
}
```

Works with Zapier, Make, n8n, a Vercel Function, or your own CRM endpoint. Add it under **Project → Settings → Environment Variables** in Vercel, then redeploy.

## Deploying

This project is designed to deploy directly from GitHub to Vercel.

```bash
git init
git add .
git commit -m "Build OSE research and course platform"
git remote add origin https://github.com/<account>/<repo>.git
git push -u origin main
```

Then import the repo at [vercel.com/new](https://vercel.com/new) and add the custom domain:

1. **Project → Settings → Domains → Add**
2. Enter `opensourceengineers.com`
3. Add the DNS records Vercel provides at your registrar
4. Add `www.opensourceengineers.com` and redirect it to the apex domain

Vercel issues the TLS certificate automatically after DNS resolves.

## Notes

- Social links are intentionally empty in `src/lib/site.ts` until the accounts are live.
- The visual system uses Instrument Serif + Manrope via `next/font`.
- The neural-field hero is a client-side canvas animation and respects `prefers-reduced-motion`.
