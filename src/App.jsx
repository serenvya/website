import React, { useEffect, useMemo, useState } from "react";

const img = (name) => `/illustrations/${name}`;

export const illustrations = [
  img("ChatGPT Image May 8, 2026, 08_58_18 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_05_55 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_07_30 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_09_15 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_10_31 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_12_48 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_14_00 PM.png"),
  img("ChatGPT Image May 8, 2026, 09_16_08 PM.png"),
];

export const navItems = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "Services", page: "services" },
  { label: "Solutions", page: "solutions" },
  { label: "Process", page: "process" },
  { label: "About", page: "about" },
  { label: "Query", page: "query" },
];

export const services = [
  { title: "Process Automation Using AI", text: "Identify repetitive workflows and redesign them with AI-assisted intake, routing, summarization, approvals, and reporting." },
  { title: "Workflow And Tool Integration", text: "Connect CRMs, forms, spreadsheets, inboxes, document stores, and internal systems so work moves without manual handoffs." },
  { title: "AI Assistants For Operations", text: "Build practical assistants for internal knowledge, customer inquiries, document review, and team support." },
  { title: "DPDPA Readiness Assessment", text: "Map personal data flows, consent touchpoints, notices, vendors, retention practices, and operational gaps against DPDPA expectations." },
  { title: "Privacy Process Design", text: "Create implementable processes for consent, data principal requests, breach response, grievance handling, and governance ownership." },
  { title: "Compliance Documentation Support", text: "Prepare structured registers, policies, SOPs, checklists, and implementation roadmaps for ongoing privacy operations." },
];

export const solutionAreas = [
  "AI-assisted process automation",
  "Internal workflow and approval automation",
  "Document processing and summarization",
  "Customer inquiry and lead routing systems",
  "DPDPA gap assessment and compliance roadmap",
  "Consent, notice, and data principal request workflows",
  "Data inventory, vendor, and retention mapping",
  "Privacy governance and breach response readiness",
];

export const processSteps = [
  { step: "01", title: "Assess", text: "Understand current workflows, tools, personal data touchpoints, risk areas, and business priorities." },
  { step: "02", title: "Design", text: "Create a practical automation or DPDPA implementation plan with clear owners, controls, and milestones." },
  { step: "03", title: "Implement", text: "Build workflows, integrations, assistant experiences, privacy processes, documents, and operating checklists." },
  { step: "04", title: "Operationalize", text: "Train teams, monitor outcomes, refine controls, and keep the system usable after launch." },
];

export const faqs = [
  { q: "What are Serenvya's core services?", a: "Serenvya focuses on two areas: AI-led process automation and DPDPA consultancy for practical privacy compliance readiness." },
  { q: "Can automation and DPDPA work happen together?", a: "Yes. Many automation projects touch personal data, so privacy-aware workflow design can reduce operational friction while improving governance." },
  { q: "Do we need to know exactly what to automate?", a: "No. Serenvya can start with a broad operational pain point, assess the workflow, and convert it into a prioritized automation roadmap." },
  { q: "Is DPDPA consultancy legal advice?", a: "Serenvya supports readiness, process design, documentation, and implementation. Formal legal interpretation should be reviewed with qualified legal counsel where required." },
];

const envValue = (key, fallback = "") => import.meta.env[key] || fallback;

export const productPaymentLinks = {
  salarySlipProcessor: envValue("VITE_PRODUCT_SALARY_SLIP_PROCESSOR_PAYMENT_LINK_URL"),
  quotationInvoiceSuite: envValue("VITE_PRODUCT_QUOTATION_INVOICE_SUITE_PAYMENT_LINK_URL"),
  whatsappBroadcaster: envValue("VITE_PRODUCT_WHATSAPP_BROADCASTER_PAYMENT_LINK_URL"),
  contactQrGenerator: envValue("VITE_PRODUCT_CONTACT_QR_GENERATOR_PAYMENT_LINK_URL"),
  stuffingPlanManager: envValue("VITE_PRODUCT_STUFFING_PLAN_MANAGER_PAYMENT_LINK_URL", "https://stuffing-plan-manager.replit.app"),
};

export const products = [
  {
    slug: "salary-slip-processor",
    key: "salarySlipProcessor",
    name: "Advanced Salary Slip Processor",
    eyebrow: "Payroll document automation",
    summary: "Upload salary slips across PDF and image formats, extract months and allowance fields, and download a clean Excel summary.",
    detail: "A browser-based processing utility for teams that need to consolidate salary slip information across government, corporate, defense, railway, PSU, bank, and consulting formats. It supports password-protected PDFs, multi-page files, image inputs, smart field mapping, and Excel export.",
    price: envValue("VITE_PRODUCT_SALARY_SLIP_PROCESSOR_PRICE", "Pricing on request"),
    deployment: "Standalone web utility",
    image: illustrations[6],
    accent: "green",
    idealFor: "Payroll teams, HR consultants, audit support teams, and finance operations handling varied salary slip formats.",
    outcomes: ["Process PDF, JPG, JPEG, and PNG salary slips", "Handle optional PDF passwords and multi-page files", "Extract month-wise salary fields and unique allowances", "Export summarized output to Excel for downstream review"],
    features: ["Universal format support", "Smart field mapping", "OCR-ready workflow", "Password PDF support", "Excel summary download", "Processing log and status counters"],
  },
  {
    slug: "quotation-invoice-suite",
    key: "quotationInvoiceSuite",
    name: "Quotation & Invoice Suite",
    eyebrow: "Business billing workspace",
    summary: "Create quotations, invoices, product masters, company profiles, sales history, and PDF or Excel reports from one local browser tool.",
    detail: "A multi-company commercial document system for small and mid-sized teams that need quotation, invoice, product, GST, sales person, history, backup, import, and report workflows without a heavy ERP rollout.",
    price: envValue("VITE_PRODUCT_QUOTATION_INVOICE_SUITE_PRICE", "Pricing on request"),
    deployment: "Standalone web utility",
    image: illustrations[0],
    accent: "blue",
    idealFor: "Distributors, service businesses, trading firms, agencies, and teams that need fast branded billing documents.",
    outcomes: ["Generate quotation and invoice PDFs", "Maintain product masters with HSN, unit, rate, and GST", "Track quotation and invoice history by company", "Export sales analytics and backup data"],
    features: ["Multi-company support", "Quotation-to-invoice flow", "Product search and Excel import", "GST-ready calculations", "Sales reports", "Data backup and restore"],
  },
  {
    slug: "whatsapp-group-broadcaster",
    key: "whatsappBroadcaster",
    name: "WhatsApp Group Broadcaster",
    eyebrow: "Desktop outreach automation",
    summary: "Send text, image, video, or combined messages to WhatsApp Desktop groups from a CSV list with controlled batching and logs.",
    detail: "A Windows desktop automation tool built for carefully controlled WhatsApp group communication. It reads group names from CSV, supports image-only, text-only, and image-with-caption modes, offers pause, resume, stop, calibration, batch delays, and background mode that restores the user's active window after each send.",
    price: envValue("VITE_PRODUCT_WHATSAPP_BROADCASTER_PRICE", "Pricing on request"),
    deployment: "Windows desktop tool",
    image: illustrations[2],
    accent: "amber",
    idealFor: "Community managers, training teams, local business networks, and operators who need structured group messaging.",
    outcomes: ["Load target groups from CSV", "Send media, text, or media with caption", "Control batch size, delay, and rest gaps", "Export sending results for review"],
    features: ["WhatsApp Desktop automation", "CSV group import", "Batch throttling", "Pause and stop controls", "Background mode", "Calibration and result logs"],
  },
  {
    slug: "contact-qr-code-generator",
    key: "contactQrGenerator",
    name: "Contact QR Code Generator",
    eyebrow: "Lead capture and contact sharing",
    summary: "Generate downloadable vCard QR codes from contact details so prospects can save business contacts instantly.",
    detail: "A simple branded utility for teams that distribute contact cards at events, counters, branches, showrooms, and sales meetings. Enter contact details, generate a universal vCard 3.0 QR code, and download it as a PNG.",
    price: envValue("VITE_PRODUCT_CONTACT_QR_GENERATOR_PRICE", "Pricing on request"),
    deployment: "Standalone web utility",
    image: illustrations[4],
    accent: "green",
    idealFor: "Sales teams, consultants, clinics, counters, event desks, and customer-facing staff.",
    outcomes: ["Create QR codes with name, phone, company, email, website, address, and notes", "Use vCard 3.0 for broad iOS and Android compatibility", "Download QR codes as PNG files", "Standardize contact sharing across staff or branches"],
    features: ["vCard QR generation", "Mandatory field validation", "PNG download", "Mobile scanner compatibility", "Contact detail templates", "Lightweight browser use"],
  },
  {
    slug: "stuffing-plan-manager",
    key: "stuffingPlanManager",
    name: "Stuffing Plan Manager",
    eyebrow: "Hosted operations planner",
    summary: "A hosted Replit-based planning tool for managing stuffing plan workflows as a reusable operations product.",
    detail: "A hosted operational planning product suitable for teams that need a lightweight shared tool without local installation. The current live build is available on Replit and can be licensed, branded, and adapted for client-specific workflows.",
    price: envValue("VITE_PRODUCT_STUFFING_PLAN_MANAGER_PRICE", "Pricing on request"),
    deployment: "Hosted web app",
    image: illustrations[7],
    accent: "blue",
    idealFor: "Operations teams that coordinate planning steps, shared updates, and reusable process checklists.",
    outcomes: ["Use a hosted tool with no desktop installation", "Adapt the workflow to client planning requirements", "License a working product instead of starting from scratch", "Extend with custom reporting or integration work"],
    features: ["Hosted deployment", "Reusable planning workflow", "Client-specific customization", "Quick launch path", "Operational visibility", "Optional integration roadmap"],
  },
];

const productMap = Object.fromEntries(products.map((product) => [product.slug, product]));
const utilityPages = [
  { label: "Problem Statement", page: "problem" },
];
const pageMap = Object.fromEntries([...navItems, ...utilityPages].map((item) => [item.page, item]));
const razorpayPaymentLink = import.meta.env.VITE_RAZORPAY_PAYMENT_LINK_URL || "";

function getInitialPage() {
  const page = window.location.hash.replace("#/", "") || "home";
  if (page === "products" || productMap[page.replace("products/", "")]) return page;
  return pageMap[page] ? page : "home";
}

function Icon({ name, className = "h-5 w-5" }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.85", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  const icons = {
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>,
    menu: <svg {...common}><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></svg>,
    close: <svg {...common}><path d="M6 6l12 12" /><path d="M18 6 6 18" /></svg>,
    check: <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>,
    spark: <svg {...common}><path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9L12 3Z" /></svg>,
    mail: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
    chevron: <svg {...common}><path d="m6 9 6 6 6-6" /></svg>,
    node: <svg {...common}><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" /><path d="M8.5 11 15.5 7" /><path d="M8.5 13 15.5 17" /></svg>,
    box: <svg {...common}><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /></svg>,
    qr: <svg {...common}><path d="M4 4h6v6H4z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6H4z" /><path d="M14 14h2" /><path d="M20 14v2" /><path d="M16 18h4" /><path d="M14 20h2" /></svg>,
    rupee: <svg {...common}><path d="M6 4h12" /><path d="M6 8h12" /><path d="M8 4c5.2 0 5.2 8 0 8H6l8 8" /></svg>,
  };
  return icons[name] || icons.spark;
}

function hrefFor(page) {
  return page === "home" ? "#/" : `#/${page}`;
}

function Button({ children, page, href, variant = "primary", className = "", onClick, target, rel }) {
  const styles = {
    primary: "border-white/20 bg-white text-slate-950 shadow-[0_22px_70px_rgba(0,140,255,0.24)] hover:-translate-y-0.5 hover:bg-sky-50",
    dark: "border-white/15 bg-slate-950/80 text-white shadow-[0_18px_55px_rgba(2,8,23,0.26)] hover:-translate-y-0.5 hover:bg-slate-900",
    ghost: "border-white/20 bg-white/10 text-white backdrop-blur-2xl hover:-translate-y-0.5 hover:bg-white/16",
  };
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 ${styles[variant]} ${className}`;
  return <a href={href || hrefFor(page)} className={classes} onClick={onClick} rel={rel} target={target}>{children}</a>;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeMobile(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}

function validateForm(form, formType) {
  const errors = {};
  const mobileDigits = normalizeMobile(form.mobile);
  const requestLabel = formType === "problem" ? "problem statement" : "query";

  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!emailPattern.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(mobileDigits)) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!form.query.trim()) errors.query = `Please enter your ${requestLabel}.`;

  return errors;
}

function Field({ label, children, error, hint }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/72">{label}</span>
      {children}
      {hint && !error && <span className="mt-2 block text-xs leading-5 text-white/42">{hint}</span>}
      {error && <span className="mt-2 block text-xs leading-5 text-red-100">{error}</span>}
    </label>
  );
}

function IntakeForm({ formType = "query", title, intro, queryLabel, queryPlaceholder, buttonLabel, successMessage }) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", query: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const updateField = (event) => {
    setErrors((current) => ({ ...current, [event.target.name]: "" }));
    if (status === "error") setMessage("");
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form, formType);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please fix the highlighted fields and try again.");
      return;
    }

    setStatus("sending");
    setMessage("");
    setErrors({});

    try {
      const mobileDigits = normalizeMobile(form.mobile);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, mobile: mobileDigits, type: formType }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your query right now.");
      }

      setStatus("sent");
      setMessage(successMessage);
      setForm({ name: "", email: "", mobile: "", query: "" });
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to send your query right now.");
    }
  };

  return (
    <Glass className="p-6 sm:p-7">
      <form className="grid gap-5" onSubmit={submit}>
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-white/64">{intro}</p>
        </div>
        <Field label="Name" error={errors.name}>
          <input
            aria-invalid={Boolean(errors.name)}
            className={`w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-sky-300 ${errors.name ? "border-red-300/50" : "border-white/12"}`}
            name="name"
            onChange={updateField}
            placeholder="Your name"
            required
            value={form.name}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            aria-invalid={Boolean(errors.email)}
            className={`w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-sky-300 ${errors.email ? "border-red-300/50" : "border-white/12"}`}
            name="email"
            onChange={updateField}
            placeholder="you@example.com"
            required
            type="email"
            value={form.email}
          />
        </Field>
        <Field label="Mobile number" error={errors.mobile} hint="Use a 10-digit mobile number. +91, spaces, or dashes are okay.">
          <input
            aria-invalid={Boolean(errors.mobile)}
            className={`w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-sky-300 ${errors.mobile ? "border-red-300/50" : "border-white/12"}`}
            inputMode="tel"
            name="mobile"
            onChange={updateField}
            pattern="(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}"
            placeholder="+91 98765 43210"
            required
            type="tel"
            value={form.mobile}
          />
        </Field>
        <Field label={queryLabel} error={errors.query}>
          <textarea
            aria-invalid={Boolean(errors.query)}
            className={`min-h-36 w-full resize-y rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-sky-300 ${errors.query ? "border-red-300/50" : "border-white/12"}`}
            name="query"
            onChange={updateField}
            placeholder={queryPlaceholder}
            required
            value={form.query}
          />
        </Field>
        <button
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_22px_70px_rgba(0,140,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? "Sending..." : buttonLabel}
          <Icon name="arrow" className="ml-2 h-5 w-5" />
        </button>
        {message && <p className={`rounded-2xl border px-4 py-3 text-sm ${status === "error" ? "border-red-300/30 bg-red-400/10 text-red-100" : "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"}`}>{message}</p>}
      </form>
    </Glass>
  );
}

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_12px_36px_rgba(0,118,255,0.2)] backdrop-blur-xl">
        <img src="/serenvya-logo.png" alt="" className="absolute left-1/2 top-1/2 h-[72px] w-[96px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain" />
      </span>
      {!compact && <div>
        <p className="text-lg font-semibold tracking-tight text-white">Serenvya</p>
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/58">Consulting & Automations</p>
      </div>}
    </div>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#071325]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(0,160,255,0.34),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(255,176,0,0.24),transparent_26%),radial-gradient(circle_at_86%_72%,rgba(17,184,80,0.24),transparent_28%),linear-gradient(135deg,#071325_0%,#091b35_42%,#050912_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px] opacity-35" />
      <div className="absolute left-[8%] top-[18%] h-56 w-56 rounded-full bg-sky-400/18 blur-3xl" />
      <div className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl" />
    </div>
  );
}

function Shell({ children, page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen overflow-x-hidden text-white selection:bg-sky-200 selection:text-slate-950">
      <Backdrop />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061225]/62 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#/" onClick={() => setPage("home")} aria-label="Serenvya home"><Logo /></a>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1.5 text-sm font-medium text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex">
            {navItems.map((item) => {
              const active = page === item.page || (item.page === "products" && page.startsWith("products/"));
              return <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className={`rounded-full px-4 py-2 transition ${active ? "bg-white text-slate-950 shadow-lg" : "hover:bg-white/10 hover:text-white"}`}>{item.label}</a>;
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button page="query" onClick={() => setPage("query")}>Start here</Button>
          </div>
          <button className="rounded-full border border-white/15 bg-white/10 p-3 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-[#061225]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = page === item.page || (item.page === "products" && page.startsWith("products/"));
              return <a key={item.page} href={hrefFor(item.page)} onClick={() => { setPage(item.page); setMobileOpen(false); }} className={`rounded-2xl px-4 py-3 ${active ? "bg-white text-slate-950" : "bg-white/[0.06] text-white/80"}`}>{item.label}</a>;
            })}
          </div>
        </div>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <Logo />
          <div className="flex flex-wrap gap-5 text-sm text-white/58">{[...navItems, ...utilityPages].map((item) => <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className="hover:text-white">{item.label}</a>)}</div>
          <p className="text-sm text-white/48">© {year} Serenvya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children }) {
  return <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"><Icon name="spark" className="h-4 w-4 text-amber-300" />{children}</p>;
}

function Glass({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-white/14 bg-white/[0.075] shadow-[0_28px_90px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl ${className}`}>{children}</div>;
}

function ImagePanel({ src, alt, className = "", tone = "blue" }) {
  const glow = tone === "green" ? "shadow-[0_24px_80px_rgba(41,204,111,0.16)]" : tone === "amber" ? "shadow-[0_24px_80px_rgba(255,166,0,0.16)]" : "shadow-[0_24px_80px_rgba(0,140,255,0.18)]";
  return <div className={`group overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.07] ${glow} backdrop-blur-xl ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" /></div>;
}

function ProductVisual({ product, compact = false }) {
  const toneClasses = {
    green: "from-emerald-300/26 via-sky-400/10 to-white/8 text-emerald-100",
    amber: "from-amber-300/28 via-sky-400/10 to-white/8 text-amber-100",
    blue: "from-sky-300/26 via-emerald-400/10 to-white/8 text-sky-100",
  };

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-white/14 bg-gradient-to-br ${toneClasses[product.accent] || toneClasses.blue} p-5 shadow-[0_24px_80px_rgba(0,140,255,0.14)]`}>
      <img src={product.image} alt="" className={`absolute inset-0 h-full w-full object-cover opacity-18 mix-blend-luminosity ${compact ? "" : "scale-105"}`} />
      <div className="absolute inset-0 bg-[#071325]/48" />
      <div className="relative grid min-h-52 content-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-2xl border border-white/16 bg-white/12 p-3 backdrop-blur-xl"><Icon name={product.slug.includes("qr") ? "qr" : "box"} className="h-6 w-6" /></span>
          <span className="rounded-full border border-white/14 bg-black/20 px-3 py-1 text-xs font-semibold text-white/78 backdrop-blur-xl">{product.deployment}</span>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-white/62">{product.eyebrow}</p>
          <p className={`${compact ? "text-2xl" : "text-4xl"} mt-3 font-semibold leading-tight tracking-tight`}>{product.name}</p>
        </div>
      </div>
    </div>
  );
}

function ProductPrice({ product }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.065] p-4">
      <span className="rounded-full bg-white/10 p-2 text-amber-200"><Icon name="rupee" className="h-5 w-5" /></span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/42">Price</p>
        <p className="mt-1 text-lg font-semibold text-white">{product.price}</p>
      </div>
    </div>
  );
}

function ProductAction({ product, label = "License this product", variant = "primary", className = "" }) {
  const href = productPaymentLinks[product.key];
  if (href) {
    return <Button href={href} variant={variant} className={className} rel="noreferrer" target="_blank">{label} <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>;
  }
  return <Button page="query" variant={variant} className={className}>{label} <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>;
}

function ProductCard({ product, setPage, featured = false }) {
  const productPage = `products/${product.slug}`;
  return (
    <Glass className={`group flex h-full flex-col overflow-hidden ${featured ? "lg:grid lg:grid-cols-[0.86fr_1.14fr]" : ""}`}>
      <ProductVisual product={product} compact={!featured} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/68">{product.eyebrow}</span>
          <span className="rounded-full bg-emerald-300/12 px-3 py-1 text-xs font-semibold text-emerald-100">{product.deployment}</span>
        </div>
        <h3 className="mt-5 text-2xl font-semibold tracking-tight">{product.name}</h3>
        <p className="mt-4 text-[15px] leading-7 text-white/66">{product.summary}</p>
        <div className="mt-6"><ProductPrice product={product} /></div>
        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Button page={productPage} variant="ghost" onClick={() => setPage(productPage)}>Explore product</Button>
          <ProductAction product={product} label="Buy or license" variant="dark" />
        </div>
      </div>
    </Glass>
  );
}

function ProductsBand({ setPage }) {
  return (
    <section className="px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Ready products</SectionLabel>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Automation products Serenvya can license, host, or customize.</h2>
            <p className="mt-5 text-lg leading-8 text-white/68">These are working tools shaped from real client requirements, packaged for reuse with clear pricing variables and dedicated product pages.</p>
          </div>
          <Button page="products" variant="ghost" onClick={() => setPage("products")}>View all products <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2"><ProductCard product={products[1]} setPage={setPage} featured /></div>
          <div className="grid gap-4">
            {products.slice(0, 3).filter((product) => product.slug !== products[1].slug).map((product) => <ProductCard key={product.slug} product={product} setPage={setPage} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function PageHero({ kicker, title, text, image, children }) {
  return (
    <section className="px-5 pb-12 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="fade-up">
          <SectionLabel>{kicker}</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
          {children}
        </div>
        <div className="fade-up" style={{ animationDelay: "100ms" }}>
          <ImagePanel src={image} alt="" className="aspect-[16/10]" />
        </div>
      </div>
    </section>
  );
}

function Home({ setPage }) {
  return (
    <>
      <section className="relative px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-18">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="fade-up">
            <SectionLabel>AI automation and DPDPA consultancy</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.01] tracking-tight sm:text-6xl lg:text-7xl">Where Intelligent Automation meets Compliance Precision</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">Serenvya helps businesses redesign operational processes using AI and prepare for DPDPA compliance with practical privacy workflows, documentation, and governance support.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button page="query" onClick={() => setPage("query")}>Ask a query <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
              <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Submit problem statement</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[["Automate", "reduce repetitive operational work"], ["Comply", "prepare for DPDPA obligations"], ["Operate", "make controls usable for teams"]].map(([value, label]) => <Glass key={label} className="p-5"><p className="text-2xl font-semibold">{value}</p><p className="mt-2 text-sm leading-6 text-white/62">{label}</p></Glass>)}
            </div>
          </div>
          <div className="grid gap-4 fade-up lg:grid-cols-[0.72fr_1fr]" style={{ animationDelay: "120ms" }}>
            <ImagePanel src={illustrations[2]} alt="AI consultant with workflow interface" className="aspect-[4/5] lg:mt-16" tone="green" />
            <ImagePanel src={illustrations[0]} alt="Automation dashboard and connected systems" className="aspect-[16/10]" />
            <Glass className="relative overflow-hidden p-6 lg:col-span-2">
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-100">Serenvya focus areas</p>
                  <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight">AI process automation for efficiency, and DPDPA consultancy for responsible data operations.</p>
                </div>
                <div className="hidden rounded-3xl bg-white p-3 shadow-[0_18px_55px_rgba(255,255,255,0.12)] sm:block">
                  <img src="/serenvya-logo.png" alt="Serenvya logo" className="h-16 w-28 object-contain" />
                </div>
              </div>
            </Glass>
          </div>
        </div>
      </section>
      <ProductsBand setPage={setPage} />
      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <Glass className="p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-sky-100">Free query</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Ask if Serenvya can help.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Use this for quick questions, service fit, DPDPA readiness doubts, or early exploration.</p>
            <div className="mt-6"><Button page="query" onClick={() => setPage("query")}>Send query</Button></div>
          </Glass>
          <Glass className="p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Problem statement</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Share what you have and what you want to achieve.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Use this for a serious automation or compliance problem where you want structured review and next steps.</p>
            <div className="mt-6"><Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Submit problem</Button></div>
          </Glass>
        </div>
      </section>
      <FeaturedBand setPage={setPage} />
      <ServiceGrid />
      <IllustrationStrip />
    </>
  );
}

function ProductsPage({ setPage }) {
  return (
    <>
      <PageHero
        kicker="Products"
        title="Working automation products ready for reuse."
        text="Serenvya turns client-built automation tools into licenseable products. Each product can be bought as-is, branded, hosted, or extended for a specific workflow."
        image={illustrations[1]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button page="query" onClick={() => setPage("query")}>Ask about licensing <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
          <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Request customization</Button>
        </div>
      </PageHero>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} setPage={setPage} />)}
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <Glass className="mx-auto grid max-w-7xl gap-8 p-7 lg:grid-cols-[0.8fr_1.2fr] lg:p-9">
          <div>
            <SectionLabel>Commercial setup</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pricing and payment links are configurable.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Each product uses a separate price and payment-link variable, so Serenvya can publish list pricing, seasonal offers, hosted subscription links, or one-time license payment links without changing the code.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "One-time license or hosted subscription",
              "White-label branding and deployment support",
              "Client-specific feature extension",
              "Implementation, onboarding, and maintenance options",
            ].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-[15px] leading-6 text-white/72">{item}</p></div>)}
          </div>
        </Glass>
      </section>
    </>
  );
}

function ProductDetailPage({ product, setPage }) {
  if (!product) return <ProductsPage setPage={setPage} />;

  return (
    <>
      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="fade-up">
            <a href="#/products" onClick={() => setPage("products")} className="mb-6 inline-flex items-center text-sm font-semibold text-sky-100/78 hover:text-white">
              <span className="mr-2">&larr;</span> Back to products
            </a>
            <SectionLabel>{product.eyebrow}</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">{product.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{product.detail}</p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <ProductPrice product={product} />
              <div className="rounded-2xl border border-white/12 bg-white/[0.065] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">Delivery</p>
                <p className="mt-1 text-lg font-semibold text-white">{product.deployment}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ProductAction product={product} />
              <Button page="query" variant="ghost" onClick={() => setPage("query")}>Discuss customization</Button>
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: "100ms" }}>
            <ProductVisual product={product} />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <Glass className="p-7">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Best fit</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Who this is for</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/68">{product.idealFor}</p>
            <div className="mt-7 grid gap-3">
              {product.outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-[15px] leading-6 text-white/72">{outcome}</p></div>)}
            </div>
          </Glass>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature, index) => <Glass key={feature} className="p-6">
              <p className="text-sm font-semibold text-sky-200">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{feature}</h3>
            </Glass>)}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <Glass className="mx-auto grid max-w-7xl gap-7 overflow-hidden p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-9">
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">License it, brand it, or adapt it for your workflow.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Serenvya can provide the product as a reusable tool, configure hosting or desktop packaging where relevant, and add client-specific fields, reports, branding, integrations, or access controls.</p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <ProductAction product={product} label="Proceed with this product" />
            <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Request a custom version</Button>
          </div>
        </Glass>
      </section>
    </>
  );
}

function FeaturedBand({ setPage }) {
  return (
    <section className="px-5 py-12 lg:px-8">
      <Glass className="mx-auto grid max-w-7xl gap-8 overflow-hidden p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <ImagePanel src={illustrations[1]} alt="Connected workflow and data systems" className="aspect-[16/9]" tone="amber" />
        <div className="flex flex-col justify-center">
          <SectionLabel>Two clear service lines</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Operational efficiency and privacy readiness should work together.</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">AI automation improves how work moves. DPDPA consultancy improves how personal data is handled inside that work. Serenvya brings both into practical business workflows.</p>
          <div className="mt-7"><Button page="solutions" onClick={() => setPage("solutions")}>View service areas</Button></div>
        </div>
      </Glass>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Two practices. One practical implementation mindset.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <Glass key={service.title} className="p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.105]">
            <p className="text-sm font-semibold text-amber-200">0{index + 1}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight">{service.title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-white/66">{service.text}</p>
          </Glass>)}
        </div>
      </div>
    </section>
  );
}

function IllustrationStrip() {
  return (
    <section className="px-5 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {[illustrations[3], illustrations[4], illustrations[5], illustrations[6]].map((src, index) => <ImagePanel key={src} src={src} alt={`Serenvya illustration ${index + 1}`} className={`${index % 2 ? "md:mt-10" : ""} aspect-[4/5]`} tone={index === 1 ? "green" : index === 2 ? "amber" : "blue"} />)}
      </div>
    </section>
  );
}

function ServicesPage() {
  return <><PageHero kicker="Services" title="AI process automation and DPDPA consultancy." text="Serenvya works across two focused service lines: redesigning business processes with AI, and helping organizations prepare practical privacy operations for DPDPA." image={illustrations[0]} /><ServiceGrid /></>;
}

function SolutionsPage() {
  return (
    <>
      <PageHero kicker="Solutions" title="Better workflows for business operations and personal data governance." text="Serenvya focuses on high-friction business processes and the privacy controls that should sit around personal data collection, use, sharing, retention, and response." image={illustrations[3]} />
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel src={illustrations[7]} alt="AI and privacy operations assistant" className="aspect-[4/5]" tone="green" />
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionAreas.map((item) => <Glass key={item} className="flex items-start gap-3 p-5"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-[15px] leading-7 text-white/76">{item}</p></Glass>)}
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessPage() {
  return (
    <>
      <PageHero kicker="Process" title="A clear path from assessment to operational adoption." text="Whether the work is AI automation or DPDPA readiness, the approach stays practical: assess, design, implement, and operationalize." image={illustrations[4]} />
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-4">
          {processSteps.map((item) => <Glass key={item.step} className="p-6">
            <p className="text-sm font-semibold text-sky-200">{item.step}</p>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-white/66">{item.text}</p>
          </Glass>)}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero kicker="About Serenvya" title="Technology execution with a governance-aware lens." text="Serenvya Consulting & Automations Private Limited helps businesses improve operations through AI automation while building more disciplined personal data practices." image={illustrations[5]} />
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            ["Business-first automation", "AI is applied where it improves real workflows, reduces repetitive effort, and creates measurable operational value."],
            ["DPDPA readiness", "Privacy work is translated into processes, responsibilities, documentation, and controls that teams can actually operate."],
            ["Implementation support", "The work balances strategy, documentation, systems, training, and practical handover for long-term use."],
          ].map(([title, text]) => <Glass key={title} className="p-7"><h3 className="text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-4 text-[15px] leading-7 text-white/66">{text}</p></Glass>)}
        </div>
      </section>
    </>
  );
}

function ProblemPage({ setPage }) {
  const paymentReady = Boolean(razorpayPaymentLink);

  return (
    <>
      <section className="px-5 py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="fade-up">
            <SectionLabel>Problem statement</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">Share the problem you want Serenvya to study.</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">Use this when you already have a business process, compliance gap, or automation idea and want structured review from the team.</p>
            <div className="mt-8 rounded-[2rem] border border-amber-200/20 bg-amber-300/10 p-5 text-white/72">
              <p className="font-semibold text-amber-100">Paid discovery flow</p>
              <p className="mt-2 text-[15px] leading-7">Submit the problem statement first. If you have been asked to pay the consultation fee, complete payment through the secure Razorpay link below. The team will review your statement and get back with the next steps.</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {paymentReady ? (
                <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_22px_70px_rgba(0,140,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-50" href={razorpayPaymentLink} rel="noreferrer" target="_blank">
                  Pay consultation fee <Icon name="arrow" className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <Button page="query" onClick={() => setPage("query")}>Discuss fee first</Button>
              )}
              <Button page="query" variant="ghost" onClick={() => setPage("query")}>Ask a free query</Button>
            </div>
          </div>
          <IntakeForm
            buttonLabel="Send problem statement"
            formType="problem"
            intro="Describe the current situation, what is not working, and what outcome you want. Include tools, data, documents, teams, or compliance context if relevant."
            queryLabel="Problem statement"
            queryPlaceholder="Example: We receive customer requests in email and WhatsApp, manually update a sheet, and need an AI-assisted workflow with DPDPA-aware consent and tracking..."
            successMessage="Thanks. Your problem statement has been sent to Serenvya. The team will review it and get back to you."
            title="Submit your problem"
          />
        </div>
        {!paymentReady && <Glass className="mx-auto mt-6 max-w-7xl p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Setup pending</p>
          <p className="mt-3 text-lg leading-8 text-white/72">Add `VITE_RAZORPAY_PAYMENT_LINK_URL` in Vercel once the Razorpay consultation fee link is ready. Until then, visitors can submit the problem statement and discuss the fee first.</p>
        </Glass>}
      </section>
    </>
  );
}

function QueryPage() {
  return (
    <section className="relative px-5 py-14 lg:px-8 lg:py-20">
      <div className="absolute inset-x-0 top-0 -z-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.22),transparent_58%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="fade-up">
          <SectionLabel>Free query</SectionLabel>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">Ask a simple question.</h1>
          <p className="mt-6 text-lg leading-8 text-white/70">Use this when you want to know whether Serenvya can help, what service fits, or how to think about an automation or DPDPA requirement.</p>
          <div className="mt-8 grid gap-3">
            {["Can you help with this workflow?", "Is this a DPDPA readiness concern?", "What is the right next step?"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 text-emerald-300" /><p className="text-white/72">{item}</p></div>)}
          </div>
        </div>
        <IntakeForm
          buttonLabel="Send query"
          formType="query"
          intro="Write the question in plain language. This is for early-stage queries and quick clarification."
          queryLabel="Query"
          queryPlaceholder="Example: Can Serenvya help us automate invoice review, or help assess our DPDPA readiness?"
          successMessage="Thanks. Your query has been sent to Serenvya."
          title="Send your query"
        />
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);

  useEffect(() => {
    const onHashChange = () => setPage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeProduct = page.startsWith("products/") ? productMap[page.replace("products/", "")] : null;
  const pages = {
    home: <Home setPage={setPage} />,
    products: <ProductsPage setPage={setPage} />,
    services: <ServicesPage />,
    solutions: <SolutionsPage />,
    process: <ProcessPage />,
    about: <AboutPage />,
    query: <QueryPage />,
    problem: <ProblemPage setPage={setPage} />,
  };

  return <Shell page={page} setPage={setPage}>{activeProduct ? <ProductDetailPage product={activeProduct} setPage={setPage} /> : pages[page] || pages.home}</Shell>;
}
