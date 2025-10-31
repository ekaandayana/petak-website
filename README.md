# Website Desa Petak — Next.js (App Router)

This repository is a production-ready scaffold for **Desa Petak** (Next.js + App Router),
prepared for deployment to **Vercel**. It includes subsites, dark mode, gallery, calendar
placeholder, OpenSID integration stub, and serverless mailer stub.

## What is included
- Next.js (app directory) structure under `src/app`
- Components under `src/components` (Header, Footer, Gallery, Calendar, DarkModeToggle)
- `lib/mailer.js` — serverless mailer function stub (can be wired to SendGrid / Mailgun)
- `lib/openSidApi.js` — stub for OpenSID integration
- `public/logo.png` — village logo (provided)
- `vercel.json` — Vercel config

## Run locally
1. Install dependencies:
```bash
npm install
```
2. Run development server:
```bash
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (recommended)
1. Push this repo to GitHub.
2. On Vercel dashboard, import the GitHub repository and deploy (Vercel auto-detects Next.js).
3. Add custom domain (e.g. `petak.desa.id`) in Vercel Domains settings and follow DNS instructions.

### DNS notes for `petak.desa.id`
- Point the domain to Vercel by adding an ALIAS/ANAME or CNAME depending on registrar.
- If `petak.desa.id` is managed by government infrastructure, coordinate with your IT/DNS operator.

## Future enhancements (recommended)
- Integrate OpenSID API (if OpenSID instance available) for live data.
- Add authentication for admin dashboard to post news/events.
- Connect mailer to SendGrid and WhatsApp API for announcements.
- Add SSG/ISR for high-traffic pages.

