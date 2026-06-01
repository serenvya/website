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

## Website submissions backend

The free query form, problem statement form, course participant form, and product licensing enquiry flow all post to the Vercel serverless endpoint at `/api/contact`. The request includes a `type` value so Serenvya can identify whether the submission is a simple query, paid-discovery problem statement, course registration, or product licensing enquiry.

For durable backend storage, configure a secure webhook that receives structured JSON records and saves them to your preferred system, such as Google Sheets through Apps Script, Airtable, Supabase, a CRM, or another internal database.

```bash
SUBMISSIONS_WEBHOOK_URL=https://your-secure-storage-webhook.example.com
SUBMISSIONS_WEBHOOK_SECRET=optional_shared_secret
```

When `SUBMISSIONS_WEBHOOK_SECRET` is set, the website backend sends it as a bearer token in the `Authorization` header. If the storage webhook is configured but fails, the website returns an error and does not move the course participant to payment.

Saved submission records include:

```json
{
  "id": "generated-submission-id",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "type": "course",
  "label": "Course Registration",
  "name": "Participant Name",
  "email": "participant@example.com",
  "mobile": "9876543210",
  "course": "AI For CS and CMA's",
  "product": "",
  "productSlug": "",
  "price": "2500/- +GST",
  "paymentLink": "https://rzp.io/...",
  "profession": "CS",
  "gstNumber": "",
  "address": "Participant address",
  "query": "Submission context",
  "source": "serenvya-website"
}
```

Email sending uses Resend. Add these environment variables in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=info@serenvya.com
CONTACT_TO_EMAIL=info@serenvya.com
```

Before using `info@serenvya.com` as the sender, verify the `serenvya.com` domain in Resend and add the DNS records Resend provides. If the domain is not verified yet, use a verified sender address temporarily.

## Razorpay payment option

The site includes payment entry points for consultancy fees and course fees. It is designed for the current business model where payments happen through Razorpay-hosted payment pages.

Recommended setup:

1. In Razorpay Dashboard, create a **Payment Link** or **Payment Button** for the consultation/payment flow.
2. Configure the amount, description, customer fields, expiry, and payment methods inside Razorpay.
3. Copy the hosted payment URL.
4. Add it in Vercel as:

```bash
VITE_RAZORPAY_PAYMENT_LINK_URL=https://rzp.io/...
VITE_COURSE_AI_OFFICE_CA_PAYMENT_LINK_URL=https://rzp.io/rzp/F3l97wh
VITE_COURSE_AI_OFFICE_LAWYERS_PAYMENT_LINK_URL=https://rzp.io/rzp/F3l97wh
VITE_COURSE_STUDENTS_AI_BASIC_PAYMENT_LINK_URL=https://rzp.io/rzp/F3l97wh
VITE_COURSE_STUDENTS_AI_ADVANCED_PAYMENT_LINK_URL=https://rzp.io/rzp/Br058C5
VITE_COURSE_STUDENTS_EXCEL_BASIC_PAYMENT_LINK_URL=https://rzp.io/rzp/F3l97wh
VITE_COURSE_STUDENTS_EXCEL_ADVANCED_PAYMENT_LINK_URL=https://rzp.io/rzp/Br058C5
VITE_COURSE_STUDENTS_POWER_BI_BASIC_PAYMENT_LINK_URL=https://rzp.io/rzp/F3l97wh
VITE_COURSE_STUDENTS_POWER_BI_ADVANCED_PAYMENT_LINK_URL=https://rzp.io/rzp/Br058C5
```

5. Redeploy the Vercel project.

Course register buttons take visitors to the participant details form. After details are submitted, the configured Razorpay payment page opens.
