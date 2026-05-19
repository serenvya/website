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

## Query and problem statement forms

The free query form and the problem statement form both post to the Vercel serverless endpoint at `/api/contact`. The request includes a `type` value so Serenvya can identify whether the submission is a simple query or a paid-discovery problem statement.

Email sending uses Resend. Add these environment variables in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=info@serenvya.com
CONTACT_TO_EMAIL=info@serenvya.com
```

Before using `info@serenvya.com` as the sender, verify the `serenvya.com` domain in Resend and add the DNS records Resend provides. If the domain is not verified yet, use a verified sender address temporarily.

## Razorpay payment option

The site includes a payment entry point on the Problem Statement page for consultancy fees. It is designed for the current business model where the amount is discussed or pre-agreed first, then the client pays through a Razorpay-hosted payment page.

Recommended setup:

1. In Razorpay Dashboard, create a **Payment Link** or **Payment Button** for the consultation/payment flow.
2. Configure the amount, description, customer fields, expiry, and payment methods inside Razorpay.
3. Copy the hosted payment URL.
4. Add it in Vercel as:

```bash
VITE_RAZORPAY_PAYMENT_LINK_URL=https://rzp.io/...
```

5. Redeploy the Vercel project.

If this variable is not set, the Problem Statement page remains usable and sends visitors to the free query page to discuss payment details first.
