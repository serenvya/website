# Serenvya Website

Modern React + Vite + Tailwind website for Serenvya Consulting & Automations. The generated illustrations are served from `public/illustrations`.

## Run locally with hot reload

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal, usually `http://localhost:5173`. Vite hot module reload is enabled by default, so edits update in the browser as you work.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This repo includes `vercel.json` with the Vite framework, build command, output directory, and SPA rewrite.

1. Push the `website` folder to your GitHub repository, or make `website` the Vercel project root.
2. In Vercel, create a new project and import the repo.
3. Confirm these settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.
5. In Vercel project settings, open **Domains** and add your domain, for example `serenvya.com` and `www.serenvya.com`.

## Connect a GoDaddy domain

Vercel will show the exact DNS records to add. In GoDaddy, open your domain DNS management and add or update:

- Apex/root domain: usually an `A` record for `@` pointing to Vercel's IP, commonly `76.76.21.21`.
- `www`: usually a `CNAME` record for `www` pointing to `cname.vercel-dns.com`.

Use the values shown in Vercel as the source of truth. After saving GoDaddy DNS, return to Vercel and click **Refresh** or wait for propagation.

## Contact form

The form is currently UI-only. Connect it to Formspree, Resend, EmailJS, or a Vercel serverless function before launch.
