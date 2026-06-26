import React, { useEffect, useMemo, useRef, useState } from "react";

const img = (name) => `/illustrations/${name}`;

export const illustrations = [
  img('hero-workflow.png'),        // [0] Home hero
  img('automation-dashboard.png'),  // [1] Services, automation
  img('privacy-governance.png'),    // [2] DPDPA, privacy
  img('products-floating-ui.png'),  // [3] Products hero
  img('solutions-network.png'),     // [4] Solutions page
  img('process-roadmap.png'),       // [5] Process page
  img('about-methodology.png'),     // [6] About page
  img('contact-nodes.png'),         // [7] Contact/Query
  img('data-pipeline.png'),         // [8] Featured band
  img('integration-tools.png'),     // [9] Integration/Products band
];

export const navItems = [
  { label: "Home", page: "home" },
  { label: "Products", page: "products" },
  { label: "Courses", page: "courses" },
  { label: "Survey", page: "survey", href: "/survey/" },
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

export const courses = [
  {
    slug: "ai-for-cs-cma",
    title: "AI For CS and CMA's",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "CS, CMA, compliance, finance, and professional practice teams",
    summary: "A practical course for CS and CMA professionals who want to use AI and office automation to reduce repetitive documentation, spreadsheet, research, review, and client-workflow effort.",
    outcomes: [
      "Use AI safely for drafting, summarization, review, and structured analysis",
      "Automate everyday office work across documents, spreadsheets, email, and task flows",
      "Build reusable prompts, checklists, trackers, and review workflows for professional practice",
      "Understand privacy-aware and governance-aware use of AI in client-facing work",
    ],
    accent: "blue",
    available: true,
  },
  {
    slug: "ai-office-automation-lawyers",
    title: "AI and Office Automation for Lawyers",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "Lawyers, legal teams, litigation offices, and legal operations teams",
    summary: "A practice-focused course on AI-assisted legal drafting, research support, matter workflows, document organization, and office automation for legal professionals.",
    outcomes: [
      "Legal drafting and review workflows",
      "Matter and document organization",
      "Client communication and office process automation",
      "Responsible AI use for legal teams",
    ],
    accent: "green",
    available: true,
  },
  {
    slug: "students-ai-basic",
    title: "AI for Students - Basic",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "Students beginning with AI tools and practical productivity workflows",
    summary: "A beginner-friendly course that introduces AI tools, prompt writing, responsible use, study workflows, document support, and everyday productivity habits.",
    outcomes: [
      "Understand practical AI use for study and assignments",
      "Write clear prompts for summaries, notes, planning, and research support",
      "Use AI with basic document, email, and productivity workflows",
      "Build responsible habits around accuracy, privacy, and review",
    ],
    accent: "blue",
    available: true,
  },
  {
    slug: "students-ai-advanced",
    title: "AI for Students - Advanced",
    status: "Open for Registration",
    originalPrice: "20000/-",
    offerPrice: "5000/-",
    audience: "Students ready to build advanced AI-assisted workflows and projects",
    summary: "An advanced course focused on structured AI workflows, research organization, project planning, automation ideas, and practical portfolio-ready use cases.",
    outcomes: [
      "Design multi-step AI workflows for projects and presentations",
      "Use AI for structured research, analysis, and revision cycles",
      "Create reusable prompt systems and productivity templates",
      "Understand responsible AI limitations and human review checkpoints",
    ],
    accent: "amber",
    available: true,
  },
  {
    slug: "students-excel-basic",
    title: "Excel for Students - Basic",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "Students learning spreadsheet basics for academics and internships",
    summary: "A foundations course covering workbook structure, formulas, formatting, tables, sorting, filtering, charts, and clean spreadsheet habits.",
    outcomes: [
      "Use essential formulas and spreadsheet formatting confidently",
      "Organize academic, internship, and project data in tables",
      "Create simple charts and summaries",
      "Avoid common spreadsheet mistakes with clean data practices",
    ],
    accent: "green",
    available: true,
  },
  {
    slug: "students-excel-advanced",
    title: "Excel for Students - Advanced",
    status: "Open for Registration",
    originalPrice: "20000/-",
    offerPrice: "5000/-",
    audience: "Students building advanced spreadsheet and analysis capability",
    summary: "An advanced Excel course covering lookups, pivots, dashboards, data cleaning, reporting structures, and productivity workflows.",
    outcomes: [
      "Use lookup, logical, text, and summary formulas",
      "Build pivot tables and structured reports",
      "Clean data and create analysis-ready worksheets",
      "Design simple dashboards for projects and internships",
    ],
    accent: "blue",
    available: true,
  },
  {
    slug: "students-power-bi-basic",
    title: "Power BI for Students - Basic",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "Students starting with dashboards and business intelligence",
    summary: "A basic Power BI course introducing data import, model basics, visuals, filters, and simple interactive dashboards.",
    outcomes: [
      "Import and prepare simple datasets",
      "Create basic visual reports and dashboard pages",
      "Use filters, slicers, and clean layout practices",
      "Understand core business intelligence concepts",
    ],
    accent: "green",
    available: true,
  },
  {
    slug: "students-power-bi-advanced",
    title: "Power BI for Students - Advanced",
    status: "Open for Registration",
    originalPrice: "20000/-",
    offerPrice: "5000/-",
    audience: "Students who want advanced dashboard and analytics project skills",
    summary: "An advanced Power BI course for stronger data models, DAX basics, dashboard storytelling, and portfolio-ready analytics projects.",
    outcomes: [
      "Build cleaner data models and relationships",
      "Use practical DAX measures for analysis",
      "Design polished dashboards with business storytelling",
      "Prepare a portfolio-ready Power BI project",
    ],
    accent: "amber",
    available: true,
  },
  {
    slug: "businessmen-ai-basic",
    title: "AI for Businessmen - Basic",
    status: "Open for Registration",
    originalPrice: "10000/-",
    offerPrice: "2500/-",
    audience: "Business owners, founders, traders, and operational decision-makers",
    summary: "A practical business-focused AI course for owners who want to use AI for communication, daily planning, customer follow-up, reports, and office productivity.",
    outcomes: [
      "Use AI for emails, proposals, customer replies, and business communication",
      "Create simple prompts for planning, marketing ideas, summaries, and reports",
      "Improve daily office productivity across documents, spreadsheets, and task follow-up",
      "Understand safe AI use for business data, privacy, and review",
    ],
    accent: "blue",
    available: true,
  },
  {
    slug: "businessmen-ai-advance",
    title: "AI for Businessmen - Advance",
    status: "Open for Registration",
    originalPrice: "20000/-",
    offerPrice: "5000/-",
    audience: "Business owners ready to build stronger AI workflows and automation ideas",
    summary: "An advanced business AI course focused on repeatable workflows, sales and operations support, reporting systems, team productivity, and automation planning.",
    outcomes: [
      "Design AI-assisted workflows for sales, operations, finance, and customer support",
      "Create reusable prompt systems for recurring business decisions and reports",
      "Plan simple automation opportunities across teams, tools, and documents",
      "Build governance habits for reviewing AI output before business use",
    ],
    accent: "amber",
    available: true,
  },
];

const coursePaymentLinks = {
  "ai-for-cs-cma": import.meta.env.VITE_COURSE_AI_OFFICE_CA_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "ai-office-automation-lawyers": import.meta.env.VITE_COURSE_AI_OFFICE_LAWYERS_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "students-ai-basic": import.meta.env.VITE_COURSE_STUDENTS_AI_BASIC_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "students-ai-advanced": import.meta.env.VITE_COURSE_STUDENTS_AI_ADVANCED_PAYMENT_LINK_URL || "https://rzp.io/rzp/Br058C5",
  "students-excel-basic": import.meta.env.VITE_COURSE_STUDENTS_EXCEL_BASIC_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "students-excel-advanced": import.meta.env.VITE_COURSE_STUDENTS_EXCEL_ADVANCED_PAYMENT_LINK_URL || "https://rzp.io/rzp/Br058C5",
  "students-power-bi-basic": import.meta.env.VITE_COURSE_STUDENTS_POWER_BI_BASIC_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "students-power-bi-advanced": import.meta.env.VITE_COURSE_STUDENTS_POWER_BI_ADVANCED_PAYMENT_LINK_URL || "https://rzp.io/rzp/Br058C5",
  "businessmen-ai-basic": import.meta.env.VITE_COURSE_BUSINESSMEN_AI_BASIC_PAYMENT_LINK_URL || "https://rzp.io/rzp/F3l97wh",
  "businessmen-ai-advance": import.meta.env.VITE_COURSE_BUSINESSMEN_AI_ADVANCE_PAYMENT_LINK_URL || "https://rzp.io/rzp/Br058C5",
};

const envValue = (key, fallback = "") => import.meta.env[key] || fallback;

const productInquiry = (name, focus) => `I want to enquire about ${name}. ${focus} Please share licensing options, implementation effort, customization possibilities, support terms, and the next steps for evaluating this product for our organization.`;

export const products = [
  {
    slug: "serenvya-auditsuite",
    key: "serenvyaAuditSuite",
    name: "Serenvya’s AuditSuite",
    eyebrow: "CA financial statement workflow",
    badge: "NEW RELEASE",
    summary: "Connect Tally through Edge, import accounting data, map ledgers, identify review exceptions, and prepare structured financial statement drafts for CA teams.",
    detail: "Prepare structured financial statement drafts from Tally data with a controlled workflow for imports, ledger mapping, exception review, and CA review and sign-off.",
    detailSupport: "Reduce manual compilation, standardise ledger treatment, and keep every review step visible to your team.",
    price: envValue("VITE_PRODUCT_SERENVYA_AUDITSUITE_PRICE", "Fixed annual firm license"),
    priceLabel: "Fixed annual license",
    deployment: "Secure web workspace with Tally Edge",
    deploymentLabel: "Deployment",
    image: illustrations[8],
    accent: "blue",
    detailEyebrow: "Controlled statement preparation",
    detailHeading: "Built for controlled statement preparation",
    idealFor: "For CA firms, audit practices, and finance teams preparing Balance Sheets, Profit & Loss statements, notes, and supporting schedules from Tally data.",
    inquiry: productInquiry("Serenvya’s AuditSuite", "We want to understand how it can connect Tally through Edge, import accounting data, map ledgers, identify review exceptions, and prepare structured financial statement drafts for CA teams."),
    primaryCtaLabel: "Ask about AuditSuite",
    outcomes: ["Connect Tally data through the secure Edge workflow", "Organise imported ledgers and reports in one review workspace", "Map ledgers consistently to financial statement heads", "Surface exceptions before statement drafting", "Generate structured drafts for CA review and sign-off"],
    features: ["Secure Tally data connection", "Import ledgers and reports", "Ledger-to-statement mapping", "Exception review and resolution", "Draft statements, notes and schedules", "CA review and sign-off"],
    outputsLine: "Outputs: Balance Sheet, Profit & Loss, notes, schedules, exception lists, and export-ready statement drafts.",
  },
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
    inquiry: productInquiry("Advanced Salary Slip Processor", "We want to understand how it can process salary slips across formats, handle PDF or image uploads, extract month-wise salary components, and generate Excel summaries for payroll, audit, or HR review."),
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
    inquiry: productInquiry("Quotation & Invoice Suite", "We want to understand how it can manage companies, product masters, quotations, invoices, GST-ready calculations, sales history, reporting, backup, and branded PDF generation."),
    outcomes: ["Generate quotation and invoice PDFs", "Maintain product masters with HSN, unit, rate, and GST", "Track quotation and invoice history by company", "Export sales analytics and backup data"],
    features: ["Multi-company support", "Quotation-to-invoice flow", "Product search and Excel import", "GST-ready calculations", "Sales reports", "Data backup and restore"],
  },
  {
    slug: "whatsapp-group-broadcaster",
    key: "whatsappBroadcaster",
    name: "Serenvya Reach",
    eyebrow: "Desktop outreach automation",
    summary: "Send text, image, video, or combined messages to WhatsApp Desktop groups from a CSV list with controlled batching and logs.",
    detail: "A Windows desktop automation tool built for carefully controlled WhatsApp group communication. It reads group names from CSV, supports image-only, text-only, and image-with-caption modes, offers pause, resume, stop, calibration, batch delays, and background mode that restores the user's active window after each send.",
    price: envValue("VITE_PRODUCT_WHATSAPP_BROADCASTER_PRICE", "Pricing on request"),
    deployment: "Windows desktop tool",
    image: illustrations[2],
    accent: "amber",
    idealFor: "Community managers, training teams, local business networks, and operators who need structured group messaging.",
    inquiry: productInquiry("Serenvya Reach", "We want to understand how it can send controlled WhatsApp Desktop group messages from CSV lists, support text or media campaigns, manage batch delays, and maintain sending logs."),
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
    inquiry: productInquiry("Contact QR Code Generator", "We want to understand how it can generate standardized vCard QR codes for team members, branches, event desks, or customer-facing staff, including branding and deployment options."),
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
    inquiry: productInquiry("Stuffing Plan Manager", "We want to understand how the hosted planning workflow can be adapted for our operations, what customization is possible, and how hosting, access, reporting, and rollout would work."),
    outcomes: ["Use a hosted tool with no desktop installation", "Adapt the workflow to client planning requirements", "License a working product instead of starting from scratch", "Extend with custom reporting or integration work"],
    features: ["Hosted deployment", "Reusable planning workflow", "Client-specific customization", "Quick launch path", "Operational visibility", "Optional integration roadmap"],
  },
  {
    slug: "income-tax-calculator-ay-2026-27",
    key: "incomeTaxCalculator",
    name: "Income Tax Calculator AY 2026-27",
    eyebrow: "Tax computation utility",
    summary: "Compare old and new tax regimes, salary components, deductions, terminal benefits, surcharge, cess, and print-ready summaries.",
    detail: "A professional income-tax computation utility for salaried employees and advisory teams. It supports AY 2026-27 calculations, old-versus-new regime comparison, Chapter VI-A deduction inputs, terminal benefit handling, visual tax comparison, slab references, and print or PDF-ready outputs.",
    price: envValue("VITE_PRODUCT_INCOME_TAX_CALCULATOR_PRICE", "Pricing on request"),
    deployment: "Standalone web utility",
    image: illustrations[5],
    accent: "amber",
    idealFor: "Chartered accountants, finance teams, tax consultants, HR payroll teams, and advisory firms supporting salaried taxpayers.",
    inquiry: productInquiry("Income Tax Calculator AY 2026-27", "We want to understand how it can support salaried employee tax estimates, old and new regime comparison, deduction planning, terminal benefit computation, and branded client-facing tax reports."),
    outcomes: ["Compare old and new tax regimes side by side", "Capture salary, deductions, terminal benefits, and other income", "Show slab, surcharge, cess, rebate, and net-income summaries", "Print or save computation summaries for review"],
    features: ["AY 2026-27 tax logic", "Regime recommendation", "Deduction checker", "Terminal benefit calculator", "Visual comparison charts", "Print-ready output"],
  },
  {
    slug: "lbh-lex-suite",
    key: "lbhLexSuite",
    name: "Legal Research & Drafting Suite",
    eyebrow: "Legal agent team",
    summary: "A legal AI team for case-law research, headnote generation, and structured legal or tax notice-response drafting.",
    detail: "A Serenvya product in partnership with Zijus for legal and tax knowledge workflows. The suite generalizes a team-of-agents pattern for law practices: a planner identifies user intent, a research agent queries case-law knowledge, a headnote writer prepares publication-style legal headnotes, and a drafting agent prepares structured notice replies based on provided facts and documents.",
    price: envValue("VITE_PRODUCT_LBH_LEX_SUITE_PRICE", "Pricing on request"),
    deployment: "Partner AI solution",
    image: illustrations[3],
    accent: "blue",
    partner: "Serenvya x Zijus",
    idealFor: "Law firms, tax practices, legal publishers, litigation support teams, and advisory teams that need governed legal research and drafting workflows.",
    inquiry: productInquiry("Legal Research & Drafting Suite", "We want to understand how a legal agent team can be configured for case-law research, legal query answering, headnote drafting, notice reply drafting, document-grounded workflows, and review controls for our practice."),
    outcomes: ["Route legal intent to specialized research, headnote, or drafting agents", "Answer case-law and legal principle queries from a controlled knowledge base", "Draft structured headnotes and notice replies from provided material", "Keep human review, source discipline, and non-invention rules at the center"],
    features: ["Planner agent", "Lex research agent", "Headnote writer", "Notice draft agent", "Knowledge workflow", "Human-review ready outputs"],
  },
  {
    slug: "zin-finance-agent",
    key: "zinFinanceAgent",
    name: "ZIN Finance Agent",
    eyebrow: "Finance and accounting AI",
    summary: "Serenvya's flagship enterprise agent for finance operations, developed in close partnership with Zijus. Automates document review, bank statement reconciliation, ledger extraction, and multi-tier approval workflows with institutional-grade security.",
    detail: "ZIN is Serenvya's flagship finance and accounting workflow agent built in close partnership with Zijus. Designed for document-heavy, high-security finance operations, ZIN offers institutional-grade ledger extraction, automated statement reconciliation, multi-level approval workflows, cryptographic audit trails, and seamless human-in-the-loop validation checkpoints.",
    price: envValue("VITE_PRODUCT_ZIN_FINANCE_AGENT_PRICE", "Pricing on request"),
    deployment: "Partner AI solution",
    image: illustrations[0],
    accent: "green",
    partner: "Serenvya x Zijus",
    idealFor: "CAs, CS teams, accounting firms, finance operations teams, controllers, and shared-service teams handling recurring finance workflows.",
    inquiry: productInquiry("ZIN Finance Agent", "We want to understand how the flagship finance agent can assist our workflows including document review, bank statement understanding, reconciliation-adjacent checks, reporting support, cryptographic audit trails, and human-in-the-loop validation."),
    outcomes: ["Deploy an enterprise-grade finance agent with built-in human-in-the-loop safeguards", "Automate statement reconciliation and multi-ledger data extraction", "Secure operations with cryptographic audit trails and active role-based routing", "Minimize human error across complex tax, auditing, and corporate accounting flows"],
    features: ["Institutional-grade OCR & Extraction", "Smart Ledger Reconciliation", "Multi-tier Approval Workflows", "Cryptographic Audit Trails", "Human-in-the-Loop Controls", "Seamless ERP & CRM Integrations"],
  },
];

const productMap = Object.fromEntries(products.map((product) => [product.slug, product]));
const utilityPages = [
  { label: "Problem Statement", page: "problem" },
];
const pageMap = Object.fromEntries([...navItems, ...utilityPages].map((item) => [item.page, item]));
const razorpayPaymentLink = import.meta.env.VITE_RAZORPAY_PAYMENT_LINK_URL || "";
const AUDITSUITE_LICENSE_URL = import.meta.env.VITE_AUDITSUITE_LICENSE_URL || "#/products/auditsuite/license";
const AUDITSUITE_LICENSE_PAGE = "products/auditsuite/license";
const AUDITSUITE_CHECKOUT_PAGE = "products/auditsuite/license/checkout";
const AUDITSUITE_PLAN_IDS = ["firm-license"];
const auditsuitePaymentLink20000 = String(import.meta.env.NEXT_PUBLIC_AUDITSUITE_PAYMENT_LINK_20000 || (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_AUDITSUITE_PAYMENT_LINK_20000 : "") || "").trim();
const auditsuitePaymentLink15000 = String(import.meta.env.NEXT_PUBLIC_AUDITSUITE_PAYMENT_LINK_15000 || (typeof process !== "undefined" ? process.env.NEXT_PUBLIC_AUDITSUITE_PAYMENT_LINK_15000 : "") || "").trim();
const AUDITSUITE_PAYMENT_LINKS = {
  20000: auditsuitePaymentLink20000,
  15000: auditsuitePaymentLink15000,
};
// Demo-only client coupon. Move validation server-side before production use.
const AUDITSUITE_DEMO_COUPON_CODE = "AUDITSUITE25";

function getAuditSuitePaymentLink(planId, { couponApplied = false } = {}) {
  if (!AUDITSUITE_PLAN_IDS.includes(planId)) {
    if (import.meta.env.DEV) console.error(`Unsupported AuditSuite plan id: ${planId}`);
    return "";
  }

  const selectedPaymentLink = couponApplied ? AUDITSUITE_PAYMENT_LINKS[15000] : AUDITSUITE_PAYMENT_LINKS[20000];
  if (!selectedPaymentLink || !selectedPaymentLink.startsWith("https://")) {
    if (import.meta.env.DEV) {
      console.error(couponApplied ? "Missing ₹15,000 AuditSuite payment link configuration" : "Missing ₹20,000 AuditSuite payment link configuration");
    }
    return "";
  }

  return selectedPaymentLink;
}

function validateAuditSuiteCustomerForm(form) {
  const errors = {};
  const mobileDigits = normalizeMobile(form.phone);

  if (!form.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!emailPattern.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!/^[6-9]\d{9}$/.test(mobileDigits)) errors.phone = "Enter a valid 10-digit mobile number.";
  if (!form.firmName.trim()) errors.firmName = "Please enter your firm name.";

  return errors;
}

// Temporary test pricing only. Replace these values with approved pricing before enabling payment checkout.
// Handoff: Serenvya displays plan choices and redirects buyers with only ?plan=<planId>.
// ZIN / AuditSuite validates the plan ID, collects buyer details, creates pending purchase records, handles Razorpay checkout, and issues licenses after verified payment.
const auditsuitePlans = [
  {
    id: "firm-license",
    name: "AuditSuite Firm License",
    description: "For CA firms preparing structured financial statement drafts from Tally data with a controlled review workflow.",
    regularPrice: "₹30,000 / year",
    price: "₹20,000 / year",
    couponPrice: "₹15,000 / year",
    cta: "Get AuditSuite license",
    highlighted: true,
    // A 25% discount coupon may be applied later during billing to bring the final price to ₹15,000. Do not display that coupon on this plan card.
    features: ["1 secure firm workspace", "Up to 10 team members", "Tally Edge connectivity", "Controlled ledger mapping", "Exception review workflow", "Structured statement drafts"],
  },
];

const auditsuitePlanMap = Object.fromEntries(auditsuitePlans.map((plan) => [plan.id, plan]));

function parseHash() {
  const raw = window.location.hash.replace("#/", "") || "home";
  const [path, query = ""] = raw.split("?");
  return { path: path || "home", params: new URLSearchParams(query) };
}

function getInitialPage() {
  const { path: page } = parseHash();
  if (page === AUDITSUITE_LICENSE_PAGE || page === AUDITSUITE_CHECKOUT_PAGE) return page;
  if (page === "products" || productMap[page.replace("products/", "")]) return page;
  return pageMap[page] ? page : "home";
}

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal(page) {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
      return undefined;
    }

    // Instantly scroll window to top on page transition to avoid blank-fold reveal issues
    if (typeof window.scrollTo === "function") {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once the element is visible, stop observing to keep animation static and smooth
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const timer = setTimeout(() => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight) {
          // If the element is in or above the initial viewport, reveal it immediately
          el.classList.add("visible");
        } else {
          // Otherwise, observe it for scroll reveal
          observer.observe(el);
        }
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [page]);
}

/* ─── Expanded Icon Component ─── */
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
    shield: <svg {...common}><path d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4Z" /></svg>,
    workflow: <svg {...common}><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="3" width="6" height="6" rx="1" /><rect x="9" y="15" width="6" height="6" rx="1" /><path d="M9 6h6" /><path d="M12 9v6" /></svg>,
    database: <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" /><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></svg>,
    lock: <svg {...common}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
    chart: <svg {...common}><path d="M4 20h16" /><rect x="4" y="12" width="4" height="8" rx="1" /><rect x="10" y="6" width="4" height="14" rx="1" /><rect x="16" y="10" width="4" height="10" rx="1" /></svg>,
    document: <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h8" /></svg>,
    integration: <svg {...common}><path d="M5.5 7.5h3v3h-3z" /><path d="M15.5 7.5h3v3h-3z" /><path d="M10.5 13.5h3v3h-3z" /><path d="M8.5 9l2 4.5" /><path d="M15.5 9l-2 4.5" /></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2c2.76 3.2 4 6.5 4 10s-1.24 6.8-4 10c-2.76-3.2-4-6.5-4-10s1.24-6.8 4-10Z" /></svg>,
    lightning: <svg {...common}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /></svg>,
    users: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    terminal: <svg {...common}><path d="m4 17 6-5-6-5" /><path d="M12 19h8" /></svg>,
    clipboard: <svg {...common}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 14l2 2 4-4" /></svg>,
    compass: <svg {...common}><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>,
    layers: <svg {...common}><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>,
    target: <svg {...common}><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    fingerprint: <svg {...common}><path d="M2 12a10 10 0 0 1 18-6" /><path d="M7 20.7A10 10 0 0 1 2 12" /><path d="M12 12a2 2 0 0 0-2 2c0 1.02-.1 2.52-.4 4" /><path d="M12 12a2 2 0 0 1 2 2c0 1.02.1 2.52.4 4" /><path d="M12 2a10 10 0 0 1 10 10c0 4.25-1.56 7.43-4 9.5" /><path d="M12 12v-2a4 4 0 0 0-4 4c0 1.59-.18 3.7-.6 5.5" /><path d="M16 8a4 4 0 0 0-8 0v4" /></svg>,
    filter: <svg {...common}><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" /></svg>,
  };
  return icons[name] || icons.spark;
}

function hrefFor(page) {
  if (page === "survey") return "/survey/";
  return page === "home" ? "#/" : `#/${page}`;
}

function inquiryHref(product) {
  return `#/query?product=${encodeURIComponent(product.slug)}`;
}

function Button({ children, page, href, variant = "primary", className = "", onClick, target, rel }) {
  const styles = {
    primary: "border-orange-300/30 bg-[#F97316] text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] hover:-translate-y-0.5 hover:bg-[#F59E0B]",
    dark: "border-white/15 bg-[#07111F]/90 text-white shadow-[0_14px_40px_rgba(2,8,23,0.26)] hover:-translate-y-0.5 hover:bg-[#0D1B2E]",
    ghost: "border-[#0878C9]/28 bg-white/78 text-[#0F172A] shadow-[0_12px_34px_rgba(8,120,201,0.10)] backdrop-blur-2xl hover:-translate-y-0.5 hover:border-[#18A8DC]/55 hover:bg-[#EAF7FF]",
  };
  const classes = `inline-flex min-h-12 items-center justify-center rounded-xl border px-6 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 ${styles[variant]} ${className}`;
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

function IntakeForm({ formType = "query", title, intro, queryLabel, queryPlaceholder, buttonLabel, successMessage, initialQuery = "", extraPayload = {} }) {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", query: initialQuery });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setForm((current) => ({ ...current, query: initialQuery }));
  }, [initialQuery]);

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
        body: JSON.stringify({ ...form, ...extraPayload, mobile: mobileDigits, type: formType }),
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

  const inputBase = "w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-[#18A8DC] focus:shadow-[0_0_0_3px_rgba(24,168,220,0.16)]";

  return (
    <Glass className="p-6 sm:p-7">
      <form className="grid gap-5" onSubmit={submit}>
        <div>
          <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-white/64">{intro}</p>
        </div>
        <Field label="Name" error={errors.name}>
          <input
            aria-invalid={Boolean(errors.name)}
            className={`${inputBase} ${errors.name ? "border-red-300/50" : "border-white/12"}`}
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
            className={`${inputBase} ${errors.email ? "border-red-300/50" : "border-white/12"}`}
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
            className={`${inputBase} ${errors.mobile ? "border-red-300/50" : "border-white/12"}`}
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
            className={`min-h-36 resize-y ${inputBase} ${errors.query ? "border-red-300/50" : "border-white/12"}`}
            name="query"
            onChange={updateField}
            placeholder={queryPlaceholder}
            required
            value={form.query}
          />
        </Field>
        <button
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
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
        <p className="text-lg font-medium tracking-tight text-white">Serenvya</p>
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/58">Consulting & Automations</p>
      </div>}
    </div>
  );
}

/* Backdrop with dot grid and brand gradients */
function Backdrop() {
  return (
    <div className="noise-overlay pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#F8FBFF]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF7FF_46%,#F8FBFF_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(24,168,220,0.20),transparent_32%),radial-gradient(circle_at_78%_12%,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_86%_72%,rgba(22,163,74,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,120,201,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(8,120,201,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-45" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#18A8DC]/40 to-transparent" />
    </div>
  );
}

/* ─── Decorative Components ─── */
function GradientDivider() {
  return <div className="shimmer-line mx-auto max-w-5xl my-2" />;
}

function Ticker() {
  const items = ['Workflow Automation', 'DPDPA Readiness', 'AI Assistants', 'Consent Workflows', 'Document Processing', 'Privacy Governance', 'Data Mapping', 'Process Design'];
  return (
    <div className="overflow-hidden py-4 border-y border-white/6 mt-8">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-medium text-white/30 whitespace-nowrap flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-white/20" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Shell ─── */
function Shell({ children, page, setPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useScrollReveal(page);

  return (
    <div className="bright-theme min-h-screen overflow-x-hidden text-slate-950 selection:bg-[#FACC15] selection:text-slate-950">
      <Backdrop />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111F]/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#/" onClick={() => setPage("home")} aria-label="Serenvya home"><Logo /></a>
          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-1.5 text-sm font-medium text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:flex">
            {navItems.map((item) => {
              const active = page === item.page || (item.page === "products" && page.startsWith("products/"));
              return <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className={`rounded-full px-4 py-2 transition ${active ? "bg-[#0878C9] text-white shadow-lg shadow-sky-950/30" : "hover:bg-white/10 hover:text-white"}`}>{item.label}</a>;
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button page="query" onClick={() => setPage("query")}>Start Here</Button>
          </div>
          <button className="rounded-full border border-white/15 bg-white/10 p-3 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-[#07111F]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => {
              const active = page === item.page || (item.page === "products" && page.startsWith("products/"));
              return <a key={item.page} href={hrefFor(item.page)} onClick={() => { setPage(item.page); setMobileOpen(false); }} className={`rounded-2xl px-4 py-3 ${active ? "bg-[#0878C9] text-white" : "bg-white/[0.06] text-white/80"}`}>{item.label}</a>;
            })}
          </div>
        </div>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="shimmer-line mx-auto max-w-7xl mb-8" />
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <Logo />
          <div className="flex flex-wrap gap-5 text-sm font-medium text-white/58">{[...navItems, ...utilityPages].map((item) => <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className="hover:text-white">{item.label}</a>)}</div>
          <p className="text-sm text-white/48">© {year} Serenvya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, icon = "spark" }) {
  return <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"><Icon name={icon} className="h-4 w-4 text-amber-300" />{children}</p>;
}

function Glass({ children, className = "", ...props }) {
  return <div {...props} className={`gradient-border rounded-2xl bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl hover:bg-white/[0.055] transition-colors duration-500 ${className}`}>{children}</div>;
}

function ImagePanel({ src, alt, className = "" }) {
  return <div className={`gradient-border group overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-xl ${className}`}><img src={src} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]" /></div>;
}

function ProductVisual({ product, compact = false }) {
  const toneClasses = {
    green: "from-[#16A34A]/20 via-[#18A8DC]/10 to-transparent text-emerald-300",
    amber: "from-[#F97316]/20 via-[#FACC15]/10 to-transparent text-amber-300",
    blue: "from-[#0878C9]/22 via-[#18A8DC]/10 to-transparent text-sky-300",
  };

  const productIconMap = {
    "salary-slip-processor": "document",
    "quotation-invoice-suite": "rupee",
    "whatsapp-group-broadcaster": "node",
    "serenvya-auditsuite": "clipboard",
    "contact-qr-code-generator": "qr",
    "stuffing-plan-manager": "clipboard",
    "income-tax-calculator-ay-2026-27": "chart",
    "lbh-lex-suite": "document",
    "zin-finance-agent": "database",
  };

  return (
    <div className={`relative overflow-hidden w-full rounded-2xl ${compact ? "h-52" : "h-full min-h-[220px] lg:min-h-full"} flex items-center justify-center bg-gradient-to-br ${toneClasses[product.accent] || toneClasses.blue}`}>
      <img src={product.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity scale-105" />
      <div className="absolute inset-0 bg-[#07111F]/42" />
      
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/16 bg-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.32)] backdrop-blur-xl">
        {product.partner ? (
          <img src="/zijus-icon.png" alt="" className="h-9 w-9 object-contain" />
        ) : (
          <Icon name={productIconMap[product.slug] || "box"} className="h-9 w-9 text-sky-300" />
        )}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-[#18A8DC]/20 blur-md" />
      </div>
    </div>
  );
}

function ProductPrice({ product }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.065] p-4">
      <span className="rounded-full bg-white/10 p-2 text-amber-200"><Icon name="rupee" className="h-5 w-5" /></span>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/42">{product.priceLabel || "Price"}</p>
        <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
      </div>
    </div>
  );
}

function ProductAction({ product, label = "License this product", variant = "primary", className = "" }) {
  return <Button href={inquiryHref(product)} variant={variant} className={className}>{label} <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>;
}

function ProductCard({ product, setPage }) {
  const productPage = `products/${product.slug}`;
  const productIconMap = {
    "salary-slip-processor": "document",
    "quotation-invoice-suite": "rupee",
    "whatsapp-group-broadcaster": "node",
    "contact-qr-code-generator": "qr",
    "stuffing-plan-manager": "clipboard",
    "income-tax-calculator-ay-2026-27": "chart",
    "lbh-lex-suite": "document",
    "zin-finance-agent": "database",
  };

  const accentColors = {
    green: {
      text: "text-emerald-400",
      bg: "bg-[#16A34A]/10",
      border: "border-[#16A34A]/22",
      glow: "bg-[#16A34A]/20"
    },
    amber: {
      text: "text-amber-400",
      bg: "bg-[#F97316]/10",
      border: "border-[#F97316]/22",
      glow: "bg-[#F97316]/20"
    },
    blue: {
      text: "text-sky-400",
      bg: "bg-[#0878C9]/12",
      border: "border-[#18A8DC]/24",
      glow: "bg-[#18A8DC]/20"
    }
  };

  const accent = accentColors[product.accent] || accentColors.blue;

  return (
    <Glass className="group flex flex-col justify-between overflow-hidden h-full min-h-[380px] p-6 hover:translate-y-[-4px] transition-all duration-300">
      <div>
        {/* Header Row */}
        <div className="flex items-start gap-4">
          <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${accent.border} ${accent.bg} ${accent.text} shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition duration-500 group-hover:scale-105`}>
            {product.partner ? (
              <img src="/zijus-icon.png" alt="" className="h-6 w-6 object-contain" />
            ) : (
              <Icon name={productIconMap[product.slug] || "box"} className="h-6 w-6" />
            )}
            <div className={`absolute inset-0 -z-10 rounded-xl ${accent.glow} blur-sm opacity-50 group-hover:opacity-100 transition duration-500`} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-[10px] uppercase tracking-[0.14em] ${accent.text} font-medium`}>{product.eyebrow}</p>
            <h3 className="mt-1 text-lg font-medium tracking-tight text-white group-hover:text-sky-300 transition duration-300 leading-snug">
              {product.name}
            </h3>
          </div>
          {product.badge && (
            <span className={`shrink-0 rounded-full border ${accent.border} ${accent.bg} px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] ${accent.text} shadow-[0_4px_20px_rgba(0,0,0,0.15)]`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Summary Description */}
        <p className="mt-5 text-[14px] leading-6 text-white/60 font-normal">
          {product.summary}
        </p>
      </div>

      <div>
        {/* Metadata Tags Row */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4 text-[11px] text-white/40">
          <span className="rounded-md bg-white/[0.03] border border-white/5 px-2.5 py-1 backdrop-blur-md">
            {product.deployment}
          </span>
          <span className="rounded-md bg-white/[0.03] border border-white/5 px-2.5 py-1 backdrop-blur-md">
            {product.price}
          </span>
          {product.partner && (
            <span className="rounded-md bg-rose-500/5 border border-rose-500/10 px-2.5 py-1 text-rose-300/80 font-medium">
              {product.partner}
            </span>
          )}
        </div>

        {/* Explore CTA */}
        <div className="mt-5">
          <Button
            href={`#/${productPage}`}
            onClick={() => setPage(productPage)}
            variant="ghost"
            className="w-full text-xs py-2.5"
          >
            Explore specifications <Icon name="arrow" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Glass>
  );
}

function ProductsBand({ setPage }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const featuredProducts = ["zin-finance-agent", "quotation-invoice-suite", "lbh-lex-suite"].map((slug) => productMap[slug]);
  const activeProduct = featuredProducts[activeIdx];

  const productIconMap = {
    "salary-slip-processor": "document",
    "quotation-invoice-suite": "rupee",
    "whatsapp-group-broadcaster": "node",
    "serenvya-auditsuite": "clipboard",
    "contact-qr-code-generator": "qr",
    "stuffing-plan-manager": "clipboard",
    "income-tax-calculator-ay-2026-27": "chart",
    "lbh-lex-suite": "document",
    "zin-finance-agent": "database",
  };

  const toneClasses = {
    green: {
      text: "text-emerald-300",
      bg: "from-[#16A34A]/20 via-[#18A8DC]/10 to-transparent",
      glow: "bg-[#16A34A]/20",
      accentBorder: "border-[#16A34A]/30",
      tabActive: "bg-[#16A34A]/10 border-[#16A34A]/30 shadow-[0_0_20px_rgba(22,163,74,0.15)]",
    },
    amber: {
      text: "text-amber-300",
      bg: "from-[#F97316]/20 via-[#FACC15]/10 to-transparent",
      glow: "bg-[#F97316]/20",
      accentBorder: "border-[#F97316]/30",
      tabActive: "bg-[#F97316]/10 border-[#F97316]/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    },
    blue: {
      text: "text-sky-300",
      bg: "from-[#0878C9]/22 via-[#18A8DC]/10 to-transparent",
      glow: "bg-[#18A8DC]/20",
      accentBorder: "border-[#18A8DC]/30",
      tabActive: "bg-[#0878C9]/12 border-[#18A8DC]/30 shadow-[0_0_20px_rgba(24,168,220,0.16)]",
    },
  };

  return (
    <section className="px-5 py-14 lg:px-8 reveal">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel icon="box">Ready products</SectionLabel>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Automation products Serenvya can license, host, or customize.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/68">
              These are working tools shaped from real client requirements, packaged for reuse with clear pricing variables and dedicated product pages.
            </p>
          </div>
          <Button page="products" variant="ghost" onClick={() => setPage("products")}>
            View all products <Icon name="arrow" className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Moving Marquee with generous top margins */}
        <div className="mt-12 sm:mt-16">
          <Ticker />
        </div>

        {/* Dashboard Showcase Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.8fr] items-start">
          
          {/* Left Panel: Selector Tabs */}
          <div className="flex flex-col gap-4">
            {featuredProducts.map((product, idx) => {
              const isActive = activeIdx === idx;
              const accent = product.accent || "blue";
              const colors = toneClasses[accent];
              const isZin = product.slug === "zin-finance-agent";

              return (
                <button
                  key={product.slug}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative flex items-start gap-4 rounded-2xl border text-left p-5 transition-all duration-500 cursor-pointer ${
                    isActive
                      ? colors.tabActive
                      : "border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  <span
                    className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r transition-all duration-500 ${
                      isActive ? (isZin ? "bg-[#16A34A] scale-y-100" : "bg-[#18A8DC] scale-y-100") : "bg-transparent scale-y-0"
                    }`}
                  />

                  {/* Icon Container */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.04] text-white/50 group-hover:border-white/20 group-hover:text-white"
                    }`}
                  >
                    {product.partner ? (
                      <img src="/zijus-icon.png" alt="" className="h-6 w-6 object-contain" />
                    ) : (
                      <Icon name={productIconMap[product.slug] || "box"} className="h-6 w-6" />
                    )}
                  </div>

                  {/* Product Tag and Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-white">{product.name}</p>
                      {isZin && (
                        <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 text-[9px] font-medium tracking-wider text-amber-300 uppercase animate-pulse">
                          Flagship
                        </span>
                      )}
                      {product.partner && !isZin && (
                        <span className="rounded-full bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 text-[9px] font-medium text-rose-300">
                          Zijus Partner
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-white/50 leading-relaxed">
                      {product.eyebrow}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Workspace Preview Details */}
          <Glass className="overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full min-h-[480px]">
            <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-center">
              
              {/* Product Visual Area */}
              <div className={`relative overflow-hidden aspect-[4/3] rounded-2xl bg-gradient-to-br ${toneClasses[activeProduct.accent || "blue"].bg} flex items-center justify-center p-6 border border-white/8`}>
                <img src={activeProduct.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity scale-105" />
                <div className="absolute inset-0 bg-[#07111F]/42" />

                {/* Floating Interactive Micro-UI Layout */}
                <div className="dark-preview relative z-10 w-full max-w-[240px] rounded-2xl border border-white/12 bg-[#07111F]/84 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-wider text-white/42 font-medium">LIVE PREVIEW</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/16 bg-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                      {activeProduct.partner ? (
                        <img src="/zijus-icon.png" alt="" className="h-6 w-6 object-contain" />
                      ) : (
                        <Icon name={productIconMap[activeProduct.slug] || "box"} className="h-6 w-6 text-sky-300" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-white truncate max-w-[120px]">{activeProduct.name}</p>
                      <p className="text-[9px] text-white/42">{activeProduct.deployment}</p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/8 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-white/50">Status</span>
                      <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-medium text-emerald-300">Ready</span>
                    </div>
                  </div>
                </div>

                {/* Glow ring in the back */}
                <div className={`absolute h-40 w-40 rounded-full ${toneClasses[activeProduct.accent || "blue"].glow} blur-2xl -z-10`} />
              </div>

              {/* Product Info Block */}
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/42 font-medium">
                  {activeProduct.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">
                  {activeProduct.name}
                </h3>
                
                {/* Premium Inline Metadata Row */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/42">
                  <span className="font-medium text-sky-200">{activeProduct.deployment}</span>
                  <span>•</span>
                  <span>{activeProduct.price}</span>
                  {activeProduct.partner && (
                    <>
                      <span>•</span>
                      <span className="text-rose-300 font-medium">{activeProduct.partner}</span>
                    </>
                  )}
                </div>

                <p className="mt-4 text-[14px] leading-relaxed text-white/66">
                  {activeProduct.summary}
                </p>

                {/* Smart outcomes checklist */}
                <div className="mt-6 flex flex-col gap-3">
                  {activeProduct.outcomes.slice(0, 3).map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      <p className="text-xs leading-5 text-white/70">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Premium CTA Panel */}
            <div className="mt-8 border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <p className="text-xs text-white/50">Fully customizable for your organization</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href={`#/products/${activeProduct.slug}`}
                  onClick={() => setPage(`products/${activeProduct.slug}`)}
                  className="text-xs font-medium text-white/62 hover:text-white transition duration-200 flex items-center gap-1 cursor-pointer w-full sm:w-auto justify-center"
                >
                  Explore specifications <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
                <a
                  href={inquiryHref(activeProduct)}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-5 text-xs font-medium text-white shadow-[0_12px_36px_rgba(249,115,22,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-orange-300 w-full sm:w-auto cursor-pointer"
                >
                  License & Customize
                </a>
              </div>
            </div>

          </Glass>
        </div>
      </div>
    </section>
  );
}

function PageHero({ kicker, title, text, image, children, kickerIcon = "spark" }) {
  return (
    <section className="px-5 pb-12 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="fade-up">
          <SectionLabel icon={kickerIcon}>{kicker}</SectionLabel>
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">{title}</h1>
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

/* ─── Home Page ─── */
function Home({ setPage }) {
  return (
    <>
      <section className="relative px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-18">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="fade-up">
            <SectionLabel icon="workflow">AI automation and DPDPA consultancy</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.01] tracking-tight sm:text-6xl">Where Intelligent Automation meets Compliance Precision</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">Serenvya helps businesses redesign operational processes using AI and prepare for DPDPA compliance with practical privacy workflows, documentation, and governance support.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button page="query" onClick={() => setPage("query")}>Ask a query <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
              <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Submit problem statement</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[["Automate", "reduce repetitive operational work", "lightning"], ["Comply", "prepare for DPDPA obligations", "shield"], ["Operate", "make controls usable for teams", "users"]].map(([value, label, icon]) => <Glass key={label} className="p-5"><div className="flex items-center gap-3 mb-2"><Icon name={icon} className="h-5 w-5 text-sky-300" /><p className="text-2xl font-medium">{value}</p></div><p className="mt-1 text-sm leading-6 text-white/62">{label}</p></Glass>)}
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <ImagePanel src={illustrations[0]} alt="Serenvya hero workflow" className="aspect-[16/10]" />
            <Glass className="relative overflow-hidden p-6 mt-4">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/45 to-transparent" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-sky-100">Serenvya focus areas</p>
                  <p className="mt-3 max-w-2xl text-xl font-medium tracking-tight">AI process automation for efficiency, and DPDPA consultancy for responsible data operations.</p>
                </div>
                <div className="hidden rounded-3xl bg-white p-3 shadow-[0_14px_40px_rgba(255,255,255,0.10)] sm:block">
                  <img src="/serenvya-logo.png" alt="Serenvya logo" className="h-16 w-28 object-contain" />
                </div>
              </div>
            </Glass>
          </div>
        </div>
      </section>

      <GradientDivider />
      <ProductsBand setPage={setPage} />

      <section className="px-5 py-10 lg:px-8 reveal">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <Glass className="p-7 border border-sky-400/10">
            <p className="text-sm uppercase tracking-[0.18em] text-sky-100">Free query</p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">Ask if Serenvya can help.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Use this for quick questions, service fit, DPDPA readiness doubts, or early exploration.</p>
            <div className="mt-6"><Button page="query" onClick={() => setPage("query")}>Send query</Button></div>
          </Glass>
          <Glass className="p-7 border border-amber-400/10">
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Problem statement</p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">Share what you have and what you want to achieve.</h2>
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

/* ─── Products Page ─── */
function ProductsPage({ setPage }) {
  return (
    <>
      <section className="relative px-5 pb-12 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <img src={illustrations[3]} alt="" className="pointer-events-none absolute right-0 top-0 h-96 w-96 object-contain opacity-[0.06] mix-blend-luminosity" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="fade-up">
            <SectionLabel icon="box">Products</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">Working automation products ready for reuse.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Serenvya turns client-built automation tools into licenseable products. Each product can be bought as-is, branded, hosted, or extended for a specific workflow.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button page="query" onClick={() => setPage("query")}>Ask about licensing <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
              <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Request customization</Button>
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: "100ms" }}>
            <ImagePanel src={illustrations[3]} alt="" className="aspect-[16/10]" />
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} setPage={setPage} />)}
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <Glass className="mx-auto grid max-w-7xl gap-8 p-7 lg:grid-cols-[0.8fr_1.2fr] lg:p-9">
          <div>
            <SectionLabel icon="integration">Product inquiry</SectionLabel>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Start with a focused product conversation.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Each product CTA opens the query form with a product-specific message already drafted. Visitors can add their contact details, edit the message, and optionally complete the consultation-fee flow from the same query page.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Product-specific inquiry draft",
              "White-label branding and deployment support",
              "Client-specific feature extension",
              "Consultation-fee link available after query context",
            ].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-[15px] leading-6 text-white/72">{item}</p></div>)}
          </div>
        </Glass>
      </section>
    </>
  );
}

/* ─── Product Detail Page ─── */
function CourseCard({ course, onRegister }) {
  const isAdvancedCourse = course.offerPrice === "5000/-" || /advance/i.test(course.title);
  const accent = isAdvancedCourse
    ? {
        border: "border-[#18A8DC]/24",
        bg: "bg-[#0878C9]/8",
        icon: "text-sky-300",
        badge: "border-[#18A8DC]/24 bg-[#0878C9]/10 text-sky-300",
      }
    : {
        border: "border-[#16A34A]/24",
        bg: "bg-[#16A34A]/8",
        icon: "text-emerald-300",
        badge: "border-[#16A34A]/24 bg-[#16A34A]/10 text-emerald-300",
      };

  return (
    <Glass className={`flex h-full flex-col justify-between overflow-hidden p-7 ${course.available ? "" : "opacity-86"}`}>
      <div>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.badge}`}>
            {course.status}
          </span>
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">{course.audience}</p>
        <h2 className="mt-3 text-3xl font-medium leading-tight tracking-tight">{course.title}</h2>
        <p className="mt-5 text-[15px] leading-7 text-white/68">{course.summary}</p>
        <div className="mt-6 flex flex-wrap items-end gap-4 rounded-2xl border border-[#F97316]/18 bg-white/[0.06] p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/42">Regular price</p>
            <p className="mt-1 text-lg font-medium text-white/48 line-through">Rs. {course.originalPrice} +GST</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-200">Offer price</p>
            <p className="mt-1 text-3xl font-medium text-white">Rs. {course.offerPrice} +GST</p>
          </div>
          <p className="pb-1 text-sm font-medium text-white/62">per course</p>
        </div>
        <div className="mt-7 grid gap-3">
          {course.outcomes.map((outcome) => (
            <div key={outcome} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4">
              <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
              <p className="text-[15px] leading-6 text-white/72">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7">
        {course.available ? (
          <Button href="#/courses" onClick={(event) => { event.preventDefault(); onRegister(course); }}>
            Register to the course <Icon name="arrow" className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <div className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0878C9]/18 bg-white/70 px-6 text-sm font-medium text-white/62">
            Coming Soon
          </div>
        )}
      </div>
    </Glass>
  );
}

function CourseRegistrationForm({ selectedCourse }) {
  const paymentLink = coursePaymentLinks[selectedCourse.slug] || "https://rzp.io/rzp/F3l97wh";
  const [form, setForm] = useState({
    name: "",
    address: "",
    gstNumber: "",
    mobile: "",
    email: "",
    profession: "",
  });
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
    const mobileDigits = normalizeMobile(form.mobile);
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.address.trim()) nextErrors.address = "Please enter your address.";
    if (!/^[6-9]\d{9}$/.test(mobileDigits)) nextErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!emailPattern.test(form.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!form.profession.trim()) nextErrors.profession = "Please enter your profession.";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "course",
          course: selectedCourse.title,
          price: `${selectedCourse.offerPrice} +GST`,
          paymentLink,
          name: form.name,
          address: form.address,
          gstNumber: form.gstNumber,
          mobile: mobileDigits,
          email: form.email,
          profession: form.profession,
          query: `Course registration for ${selectedCourse.title}. Redirect participant to Razorpay payment link after details submission.`,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to save your details right now.");
      }

      setStatus("sent");
      setMessage("Details saved. Opening the secure payment page...");
      window.location.assign(paymentLink);
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to save your details right now.");
    }
  };

  const inputBase = "w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-[#18A8DC] focus:shadow-[0_0_0_3px_rgba(24,168,220,0.16)]";

  return (
    <Glass className="p-6 sm:p-7" id="course-registration">
      <form className="grid gap-5" onSubmit={submit}>
        <div>
          <SectionLabel icon="document">Participant Details</SectionLabel>
          <h2 className="text-2xl font-medium tracking-tight">Register for {selectedCourse.title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-white/64">Offer price: Rs. {selectedCourse.offerPrice} +GST per course. Fill in the participant details below; the secure Razorpay payment page opens after submission.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Name" error={errors.name}>
            <input className={`${inputBase} ${errors.name ? "border-red-300/50" : "border-white/12"}`} name="name" onChange={updateField} required value={form.name} />
          </Field>
          <Field label="Profession" error={errors.profession}>
            <input className={`${inputBase} ${errors.profession ? "border-red-300/50" : "border-white/12"}`} name="profession" onChange={updateField} placeholder="CS, CMA, Lawyer, Student..." required value={form.profession} />
          </Field>
          <Field label="Mobile Number" error={errors.mobile}>
            <input className={`${inputBase} ${errors.mobile ? "border-red-300/50" : "border-white/12"}`} inputMode="tel" name="mobile" onChange={updateField} placeholder="+91 98765 43210" required type="tel" value={form.mobile} />
          </Field>
          <Field label="Email Id" error={errors.email}>
            <input className={`${inputBase} ${errors.email ? "border-red-300/50" : "border-white/12"}`} name="email" onChange={updateField} placeholder="you@example.com" required type="email" value={form.email} />
          </Field>
          <Field label="GST Number" hint="Leave blank if not applicable.">
            <input className={`${inputBase} border-white/12`} name="gstNumber" onChange={updateField} placeholder="GSTIN, if available" value={form.gstNumber} />
          </Field>
          <Field label="Address" error={errors.address}>
            <textarea className={`min-h-28 resize-y ${inputBase} ${errors.address ? "border-red-300/50" : "border-white/12"}`} name="address" onChange={updateField} required value={form.address} />
          </Field>
        </div>
        <button className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-60" disabled={status === "sending"} type="submit">
          {status === "sending" ? "Saving details..." : "Continue to payment"}
          <Icon name="arrow" className="ml-2 h-5 w-5" />
        </button>
        {message && <p className={`rounded-2xl border px-4 py-3 text-sm ${status === "error" ? "border-red-300/30 bg-red-400/10 text-red-100" : "border-emerald-300/30 bg-emerald-400/10 text-emerald-100"}`}>{message}</p>}
      </form>
    </Glass>
  );
}

function CoursesPage({ setPage }) {
  const defaultCourse = courses.find((course) => course.available) || courses[0];
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);

  const registerCourse = (course) => {
    setSelectedCourse(course);
    window.setTimeout(() => document.getElementById("course-registration")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
  };

  return (
    <>
      <section className="relative px-5 pb-12 pt-12 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="fade-up">
            <SectionLabel icon="layers">Courses</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">Practical AI and office automation courses for professionals.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Serenvya courses are designed for working professionals who want usable AI workflows, better office systems, and responsible automation habits inside real practice environments.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#/courses" onClick={(event) => { event.preventDefault(); registerCourse(defaultCourse); }}>Register now <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
              <Button page="services" variant="ghost" onClick={() => setPage("services")}>Explore services</Button>
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: "100ms" }}>
            <ImagePanel src={illustrations[9]} alt="" className="aspect-[16/10]" />
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {courses.map((course) => <CourseCard key={course.title} course={course} onRegister={registerCourse} />)}
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CourseRegistrationForm selectedCourse={selectedCourse} />
        </div>
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
            <a href="#/products" onClick={() => setPage("products")} className="mb-6 inline-flex items-center text-sm font-medium text-sky-100/78 hover:text-white">
              <span className="mr-2">&larr;</span> Back to products
            </a>
            <SectionLabel>{product.eyebrow}</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">{product.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{product.detail}</p>
            {product.detailSupport && <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/58">{product.detailSupport}</p>}
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <ProductPrice product={product} />
              <div className="rounded-2xl border border-white/12 bg-white/[0.065] p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/42">{product.deploymentLabel || "Delivery"}</p>
                <p className="mt-1 text-lg font-medium text-white">{product.deployment}</p>
              </div>
            </div>
            {product.partner && <div className="mt-5 inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.065] px-4 py-3">
              <img src="/serenvya-logo.png" alt="" className="h-8 w-10 rounded-lg bg-white object-contain" />
              <span className="text-sm font-medium text-white/78">in partnership with</span>
              <img src="/zijus-icon.png" alt="" className="h-8 w-8 rounded-lg object-contain" />
              <span className="text-sm font-medium text-white">{product.partner.replace("Serenvya x ", "")}</span>
            </div>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {product.slug === "serenvya-auditsuite" ? (
                <>
                  <Button href={AUDITSUITE_LICENSE_URL}>
                    Get your license <Icon name="arrow" className="ml-2 h-5 w-5" />
                  </Button>
                  <ProductAction product={product} label={product.primaryCtaLabel || "Ask about this product"} variant="ghost" />
                </>
              ) : (
                <>
                  <ProductAction product={product} label={product.primaryCtaLabel || "Ask about this product"} />
                  <Button href={inquiryHref(product)} variant="ghost">Discuss customization</Button>
                </>
              )}
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
            <p className="text-sm uppercase tracking-[0.18em] text-amber-200">{product.detailEyebrow || "Best fit"}</p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight">{product.detailHeading || "Who this is for"}</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/68">{product.idealFor}</p>
            <div className="mt-7 grid gap-3">
              {product.outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-[15px] leading-6 text-white/72">{outcome}</p></div>)}
            </div>
          </Glass>
          <div className="grid gap-4 sm:grid-cols-2">
            {product.features.map((feature, index) => <Glass key={feature} className="p-6">
              <p className="text-sm font-semibold text-sky-200">0{index + 1}</p>
              <h3 className="mt-5 text-xl font-medium tracking-tight">{feature}</h3>
            </Glass>)}
            {product.outputsLine && <p className="text-[13px] leading-6 text-white/56 sm:col-span-2">{product.outputsLine}</p>}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <Glass className="mx-auto grid max-w-7xl gap-7 overflow-hidden p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-9">
          <div>
            <SectionLabel>Next step</SectionLabel>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">License it, brand it, or adapt it for your workflow.</h2>
            <p className="mt-4 text-[15px] leading-7 text-white/66">Serenvya can provide the product as a reusable tool, configure hosting or desktop packaging where relevant, and add client-specific fields, reports, branding, integrations, or access controls.</p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <ProductAction product={product} label="Send a product inquiry" />
            <Button page="problem" variant="ghost" onClick={() => setPage("problem")}>Request a custom version</Button>
          </div>
        </Glass>
      </section>
    </>
  );
}

function AuditSuiteCustomerDetailsModal({ couponApplied, onClose, plan }) {
  const closeButtonRef = useRef(null);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", firmName: "" });
  const [errors, setErrors] = useState({});
  const [checkoutError, setCheckoutError] = useState("");
  const [status, setStatus] = useState("idle");
  const finalAmount = couponApplied ? "₹15,000" : "₹20,000";
  const finalPrice = couponApplied ? plan.couponPrice : plan.price;

  useEffect(() => {
    const previouslyFocusedElement = document.activeElement;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus?.();
    };
  }, [onClose]);

  const inputBase = "w-full rounded-2xl border bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/34 focus:border-[#18A8DC] focus:shadow-[0_0_0_3px_rgba(24,168,220,0.16)]";

  const updateField = (event) => {
    setErrors((current) => ({ ...current, [event.target.name]: "" }));
    setCheckoutError("");
    if (status === "error") setStatus("idle");
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const continueToPayment = async (event) => {
    event.preventDefault();
    if (status === "sending") return;

    const nextErrors = validateAuditSuiteCustomerForm(form);

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    const selectedPaymentLink = getAuditSuitePaymentLink(plan.id, { couponApplied });
    if (!selectedPaymentLink) {
      setCheckoutError("Checkout is temporarily unavailable. Please contact the Serenvya team.");
      setStatus("error");
      return;
    }

    setErrors({});
    setCheckoutError("");
    setStatus("sending");

    try {
      const mobileDigits = normalizeMobile(form.phone);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "auditsuite_checkout_started",
          product: plan.name,
          billing: "Annual license",
          name: form.fullName,
          email: form.email,
          mobile: mobileDigits,
          firmName: form.firmName,
          price: finalPrice,
          finalAmount: couponApplied ? "15000" : "20000",
          originalAmount: "30000",
          offerAmount: "20000",
          couponCode: couponApplied ? AUDITSUITE_DEMO_COUPON_CODE : "",
          couponSavings: couponApplied ? "₹5,000" : "",
          paymentLink: selectedPaymentLink,
          submittedAt: new Date().toISOString(),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to start your checkout right now.");
      }

      window.location.href = selectedPaymentLink;
    } catch (error) {
      setCheckoutError(error.message || "Unable to start your checkout right now.");
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-5 py-6" role="presentation">
      <button aria-label="Close customer details form" className="absolute inset-0 cursor-default bg-[#07111F]/70 backdrop-blur-sm" onClick={onClose} type="button" />
      <Glass className="relative max-h-[calc(100vh-3rem)] w-full max-w-3xl overflow-y-auto p-6 shadow-[0_30px_90px_rgba(2,8,23,0.34)] sm:p-7" role="dialog" aria-modal="true" aria-labelledby="auditsuite-customer-title">
        <button
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.08] text-white/70 transition hover:bg-white/[0.14] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
          onClick={onClose}
          ref={closeButtonRef}
          type="button"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
        <form className="grid gap-5" onSubmit={continueToPayment}>
          <div className="pr-12">
            <SectionLabel icon="document">Customer details</SectionLabel>
            <h2 id="auditsuite-customer-title" className="text-2xl font-medium tracking-tight">Complete your AuditSuite license details</h2>
            <p className="mt-3 text-[15px] leading-7 text-white/64">Add the buyer and firm details below. The secure Razorpay payment page opens after this step.</p>
          </div>

          <div className="rounded-2xl border border-[#18A8DC]/20 bg-[#EAF7FF]/[0.07] p-4">
            <div className="grid gap-3 text-[15px] leading-6 text-white/72 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Product</p>
                <p className="mt-1 font-medium text-white">AuditSuite Firm License</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Billing</p>
                <p className="mt-1 font-medium text-white">Annual license</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/42">Final payable amount</p>
                <p className="mt-1 font-medium text-white">{finalPrice}</p>
              </div>
            </div>
            {couponApplied && <p className="mt-3 rounded-xl border border-emerald-300/22 bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-100">Coupon AUDITSUITE25 applied — ₹5,000 saved</p>}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" error={errors.fullName}>
              <input aria-invalid={Boolean(errors.fullName)} className={`${inputBase} ${errors.fullName ? "border-red-300/50" : "border-white/12"}`} name="fullName" onChange={updateField} placeholder="Enter your full name" value={form.fullName} />
            </Field>
            <Field label="Email address" error={errors.email}>
              <input aria-invalid={Boolean(errors.email)} className={`${inputBase} ${errors.email ? "border-red-300/50" : "border-white/12"}`} name="email" onChange={updateField} placeholder="you@firm.com" type="email" value={form.email} />
            </Field>
            <Field label="Phone number" error={errors.phone} hint="Use a 10-digit Indian mobile number. +91, spaces, or dashes are okay.">
              <input aria-invalid={Boolean(errors.phone)} className={`${inputBase} ${errors.phone ? "border-red-300/50" : "border-white/12"}`} inputMode="tel" name="phone" onChange={updateField} placeholder="Enter mobile number" type="tel" value={form.phone} />
            </Field>
            <Field label="Firm name" error={errors.firmName}>
              <input aria-invalid={Boolean(errors.firmName)} className={`${inputBase} ${errors.firmName ? "border-red-300/50" : "border-white/12"}`} name="firmName" onChange={updateField} placeholder="Enter your firm name" value={form.firmName} />
            </Field>
          </div>

          {checkoutError && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 shadow-[0_10px_28px_rgba(185,28,28,0.08)]">{checkoutError}</p>}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0878C9]/28 bg-white/78 px-6 text-sm font-medium text-[#0F172A] shadow-[0_12px_34px_rgba(8,120,201,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#18A8DC]/55 hover:bg-[#EAF7FF] focus:outline-none focus:ring-2 focus:ring-sky-300" onClick={onClose} type="button">
              Cancel
            </button>
            <button className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-70" disabled={status === "sending"} type="submit">
              {status === "sending" ? "Preparing secure payment…" : `Continue to secure payment — ${finalAmount}`}
              {status !== "sending" && <Icon name="arrow" className="ml-2 h-5 w-5" />}
            </button>
          </div>
        </form>
      </Glass>
    </div>
  );
}

function AuditSuiteLicensePage({ setPage }) {
  const [couponCode, setCouponCode] = useState("");
  const [couponStatus, setCouponStatus] = useState("idle");
  const [detailsPlan, setDetailsPlan] = useState(null);
  const couponApplied = couponStatus === "applied";
  const reassuranceItems = [
    "Secure web workspace",
    "Tally Edge connectivity",
    "Controlled ledger mapping and exception review",
    "Structured financial statement drafts",
    "CA review and sign-off workflow",
  ];

  return (
    <>
      <section className="relative px-5 pb-12 pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="fade-up max-w-4xl">
            <SectionLabel icon="clipboard">AuditSuite licensing</SectionLabel>
            <h1 className="text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">Get your AuditSuite firm license</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">Start with a secure firm license for your financial statement workflow. The license includes a secure web workspace, Tally Edge connectivity, structured ledger mapping, and CA review controls.</p>
            <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/60">Built for CA-led import, mapping, exception review, and structured statement draft preparation.</p>
            <p className="mt-3 text-[15px] leading-7 text-white/56">All licenses are billed annually. Secure online payment and license delivery are included.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto grid max-w-2xl items-stretch gap-4">
          {auditsuitePlans.map((plan) => (
            <Glass key={plan.id} className={`flex h-full flex-col justify-between p-6 transition duration-300 hover:-translate-y-1 ${plan.highlighted ? "border-[#18A8DC]/55 bg-[#0878C9]/10 shadow-[0_30px_82px_rgba(8,120,201,0.25),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-[#18A8DC]/22" : ""}`}>
              <div>
                <div className="flex min-h-7 items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">Annual license</p>
                  {plan.badge && <span className="rounded-full border border-[#18A8DC]/30 bg-[#0878C9]/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-200">{plan.badge}</span>}
                </div>
                <h2 className="mt-5 text-[28px] font-medium leading-tight tracking-tight text-white">{plan.name}</h2>
                <p className="mt-4 min-h-[76px] text-[15px] leading-7 text-white/66">{plan.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  {plan.regularPrice && (
                    <span className="relative inline-block text-base font-medium text-white/44">
                      {plan.regularPrice}
                      <span aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 z-10 h-0.5 w-full -translate-y-1/2 rounded-full bg-[#111827]" />
                    </span>
                  )}
                  <span className="rounded-full border border-[#18A8DC]/24 bg-[#0878C9]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-200">Limited-time offer</span>
                </div>
                <p className="mt-2 text-3xl font-medium tracking-tight text-white">{couponApplied ? plan.couponPrice : plan.price}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/46">Annual firm license</p>
                <p className="mt-2 text-[13px] leading-6 text-white/48">{couponApplied ? "You save ₹15,000 on the annual license" : "Save ₹10,000 on the annual license"}</p>
                <div className="mt-5 grid gap-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 rounded-xl bg-[#EAF7FF]/[0.07] px-3.5 py-2.5">
                      <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-300" />
                      <p className="text-[15px] leading-6 text-white/72">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                    <input
                      aria-label="AuditSuite coupon code"
                      className={`min-h-12 rounded-xl border bg-[#EAF7FF]/10 px-4 text-sm font-medium text-white outline-none transition placeholder:text-white/36 focus:border-[#18A8DC] focus:shadow-[0_0_0_3px_rgba(24,168,220,0.16)] ${couponStatus === "error" ? "border-red-300/40" : couponApplied ? "border-emerald-300/35" : "border-white/12"}`}
                      onChange={(event) => {
                        setCouponCode(event.target.value);
                        if (couponStatus !== "idle") setCouponStatus("idle");
                      }}
                      placeholder="Enter coupon code"
                      value={couponCode}
                    />
                    <button
                      className={`inline-flex min-h-12 items-center justify-center rounded-xl border px-5 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 ${couponApplied ? "border-emerald-300/35 bg-emerald-500/80 text-white shadow-[0_10px_24px_rgba(16,185,129,0.16)]" : "border-[#18A8DC]/35 bg-[#0878C9] text-white shadow-[0_12px_28px_rgba(8,120,201,0.18)] hover:-translate-y-0.5 hover:bg-[#0B6FB8]"}`}
                      onClick={() => {
                        const normalizedCode = couponCode.trim().toUpperCase();
                        if (normalizedCode === AUDITSUITE_DEMO_COUPON_CODE) {
                          setCouponCode(AUDITSUITE_DEMO_COUPON_CODE);
                          setCouponStatus("applied");
                          return;
                        }
                        setCouponStatus("error");
                      }}
                      type="button"
                    >
                      {couponApplied ? "Applied" : "Apply coupon"}
                    </button>
                  </div>
                  {couponApplied && <p className="mt-3 rounded-xl border border-emerald-300/22 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-100">✓ Coupon applied — ₹5,000 saved</p>}
                  {couponStatus === "error" && <p className="mt-3 rounded-xl border border-red-300/22 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-100">This coupon code is not valid.</p>}
                </div>
              </div>
              <div className="mt-7">
                <Button
                  href="#"
                  className="w-full"
                  onClick={(event) => {
                    event.preventDefault();
                    setDetailsPlan(plan);
                  }}
                  variant={plan.highlighted ? "primary" : "ghost"}
                >
                  {plan.cta} <Icon name="arrow" className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Glass>
          ))}
        </div>
        <div className="mx-auto mt-7 max-w-3xl text-center">
          <p className="inline-flex items-center justify-center gap-2 text-[15px] leading-7 text-white/62"><Icon name="lock" className="h-4 w-4 text-sky-200/80" />Secure checkout powered by Razorpay.</p>
          <p className="mt-2 text-[15px] leading-7 text-white/60">Not sure which plan fits your firm? <a href={inquiryHref(productMap["serenvya-auditsuite"])} onClick={() => setPage("query")} className="font-medium text-sky-200 hover:text-white">Contact the Serenvya team</a>.</p>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <Glass className="mx-auto max-w-7xl p-7 lg:p-9">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Every AuditSuite license includes</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {reassuranceItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                <p className="text-[15px] leading-6 text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </Glass>
      </section>
      {detailsPlan && <AuditSuiteCustomerDetailsModal couponApplied={couponApplied} onClose={() => setDetailsPlan(null)} plan={detailsPlan} />}
    </>
  );
}

function AuditSuiteCheckoutPlaceholder({ setPage }) {
  const selectedPlan = auditsuitePlanMap[parseHash().params.get("plan") || ""] || auditsuitePlans[0];

  return (
    <section className="relative px-5 py-14 lg:px-8 lg:py-20">
      <img src={illustrations[8]} alt="" className="pointer-events-none absolute right-0 top-0 h-96 w-96 object-contain opacity-[0.06] mix-blend-luminosity" />
      <div className="mx-auto max-w-3xl">
        <Glass className="fade-up p-7 lg:p-9">
          <SectionLabel icon="clipboard">AuditSuite license</SectionLabel>
          <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{selectedPlan.name}</h1>
          <p className="mt-5 text-3xl font-medium tracking-tight text-white">{selectedPlan.price}</p>
          <p className="mt-4 text-lg leading-8 text-white/70">Secure Razorpay checkout will be available here.</p>
          <div className="mt-8">
            <Button href={`#/${AUDITSUITE_LICENSE_PAGE}`} variant="ghost" onClick={() => setPage(AUDITSUITE_LICENSE_PAGE)}>
              Back to plans <Icon name="arrow" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Glass>
      </div>
    </section>
  );
}

/* ─── Featured Band ─── */
function FeaturedBand({ setPage }) {
  return (
    <section className="px-5 py-12 lg:px-8 reveal">
      <Glass className="mx-auto grid max-w-7xl gap-8 overflow-hidden p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <ImagePanel src={illustrations[8]} alt="Connected workflow and data systems" className="aspect-[16/9]" />
        <div className="flex flex-col justify-center">
          <SectionLabel icon="node">Two clear service lines</SectionLabel>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Operational efficiency and privacy readiness should work together.</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">AI automation improves how work moves. DPDPA consultancy improves how personal data is handled inside that work. Serenvya brings both into practical business workflows.</p>
          <div className="mt-7"><Button page="solutions" onClick={() => setPage("solutions")}>View service areas</Button></div>
        </div>
      </Glass>
    </section>
  );
}

/* ─── Service Grid ─── */
function ServiceGrid() {
  const serviceIcons = ['workflow', 'integration', 'lightning', 'shield', 'fingerprint', 'document'];
  return (
    <section className="px-5 py-16 lg:px-8 reveal">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel icon="workflow">Services</SectionLabel>
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Two practices. One practical implementation mindset.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <Glass key={service.title} className="p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-4 inline-flex rounded-2xl border border-white/12 bg-white/[0.08] p-3">
              <Icon name={serviceIcons[index]} className="h-6 w-6 text-sky-300" />
            </div>
            <p className="text-xs font-semibold text-amber-200">0{index + 1}</p>
            <h3 className="mt-3 text-xl font-medium tracking-tight">{service.title}</h3>
            <p className="mt-4 text-[15px] leading-7 text-white/66">{service.text}</p>
          </Glass>)}
        </div>
      </div>
    </section>
  );
}

/* ─── Illustration Strip ─── */
function IllustrationStrip() {
  const stripImages = [illustrations[2], illustrations[4], illustrations[6], illustrations[9]];
  return (
    <section className="px-5 py-14 lg:px-8 reveal">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stripImages.map((src, index) => (
          <div key={src} className="reveal" style={{ transitionDelay: `${index * 100}ms` }}>
            <ImagePanel src={src} alt={`Serenvya illustration ${index + 1}`} className={`${index % 2 ? "md:mt-10" : ""} aspect-[4/5]`} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Services Page ─── */
function ServicesPage() {
  return <><PageHero kicker="Services" kickerIcon="workflow" title="AI process automation and DPDPA consultancy." text="Serenvya works across two focused service lines: redesigning business processes with AI, and helping organizations prepare practical privacy operations for DPDPA." image={illustrations[1]} /><ServiceGrid /></>;
}

/* ─── Solutions Page ─── */
function SolutionsPage() {
  return (
    <>
      <PageHero kicker="Solutions" kickerIcon="target" title="Better workflows for business operations and personal data governance." text="Serenvya focuses on high-friction business processes and the privacy controls that should sit around personal data collection, use, sharing, retention, and response." image={illustrations[4]} />
      <section className="px-5 pb-20 lg:px-8 reveal">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel src={illustrations[8]} alt="Data pipeline visualization" className="aspect-[4/5]" />
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionAreas.map((item, index) => (
              <Glass key={item} className="flex items-start gap-3 p-5">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${index < 4 ? 'bg-sky-400' : 'bg-emerald-400'}`} />
                <p className="text-[15px] leading-7 text-white/76">{item}</p>
              </Glass>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Process Page (Timeline Layout) ─── */
function ProcessPage() {
  const stepIcons = ['compass', 'layers', 'terminal', 'users'];
  return (
    <>
      <PageHero kicker="Process" kickerIcon="compass" title="A clear path from assessment to operational adoption." text="Whether the work is AI automation or DPDPA readiness, the approach stays practical: assess, design, implement, and operationalize." image={illustrations[5]} />
      <section className="px-5 pb-20 lg:px-8 reveal">
        <div className="mx-auto max-w-7xl">
          {/* Desktop timeline */}
          <div className="hidden lg:block">
            {/* Connecting gradient line */}
            <div className="relative mx-auto mb-8" style={{ maxWidth: '85%' }}>
              <div className="h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #0878C9, #18A8DC, #16A34A, #F97316, rgba(255,255,255,0.6))' }} />
            </div>
            <div className="grid grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/16 bg-white/[0.08] shadow-[0_0_24px_rgba(24,168,220,0.12)]">
                    <Icon name={stepIcons[index]} className="h-7 w-7 text-sky-300" />
                  </div>
                  <p className="text-sm font-semibold text-sky-200">{item.step}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/66">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile fallback */}
          <div className="grid gap-4 lg:hidden">
            {processSteps.map((item, index) => <Glass key={item.step} className="p-6">
              <div className="mb-4 inline-flex rounded-2xl border border-white/12 bg-white/[0.08] p-3">
                <Icon name={stepIcons[index]} className="h-6 w-6 text-sky-300" />
              </div>
              <p className="text-sm font-semibold text-sky-200">{item.step}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-white/66">{item.text}</p>
            </Glass>)}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── About Page ─── */
function AboutPage() {
  const aboutCards = [
    ["Business-first automation", "AI is applied where it improves real workflows, reduces repetitive effort, and creates measurable operational value.", "lightning"],
    ["DPDPA readiness", "Privacy work is translated into processes, responsibilities, documentation, and controls that teams can actually operate.", "shield"],
    ["Implementation support", "The work balances strategy, documentation, systems, training, and practical handover for long-term use.", "clipboard"],
  ];
  return (
    <>
      <PageHero kicker="About Serenvya" kickerIcon="globe" title="Technology execution with a governance-aware lens." text="Serenvya Consulting & Automations Private Limited helps businesses improve operations through AI automation while building more disciplined personal data practices." image={illustrations[6]} />
      <section className="px-5 pb-20 lg:px-8 reveal">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {aboutCards.map(([title, text, icon]) => (
            <Glass key={title} className="p-7">
              <div className="mb-5 inline-flex rounded-2xl border border-white/12 bg-white/[0.08] p-3">
                <Icon name={icon} className="h-6 w-6 text-sky-300" />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-4 text-[15px] leading-7 text-white/66">{text}</p>
            </Glass>
          ))}
        </div>
      </section>
    </>
  );
}

/* ─── Problem Page ─── */
function ProblemPage({ setPage }) {
  const paymentReady = Boolean(razorpayPaymentLink);

  return (
    <>
      <section className="relative px-5 py-14 lg:px-8 lg:py-20">
        {/* Custom Premium Background Redesign */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FBFF]">
          {/* Soft, deep ambient glows */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),transparent_38%),linear-gradient(315deg,rgba(8,120,201,0.08),transparent_42%)] fade-in" />
          {/* Fine dot-grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(8,120,201,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="fade-up">
            <SectionLabel icon="document">Problem statement</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">Share the problem you want Serenvya to study.</h1>
            <p className="mt-6 text-lg leading-8 text-white/70">Use this when you already have a business process, compliance gap, or automation idea and want structured review from the team.</p>
            <div className="mt-8 gradient-border rounded-2xl border border-amber-200/20 bg-amber-300/10 p-5 text-white/72">
              <p className="font-medium text-amber-100">Paid discovery flow</p>
              <p className="mt-2 text-[15px] leading-7">Submit the problem statement first. If you have been asked to pay the consultation fee, complete payment through the secure Razorpay link below. The team will review your statement and get back with the next steps.</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {paymentReady ? (
                <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B]" href={razorpayPaymentLink} rel="noreferrer" target="_blank">
                  Pay consultation fee <Icon name="arrow" className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <Button page="query" onClick={() => setPage("query")}>Discuss fee first</Button>
              )}
              <Button page="query" variant="ghost" onClick={() => setPage("query")}>Ask a free query</Button>
            </div>
          </div>
          <div className="fade-up" style={{ animationDelay: "120ms" }}>
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
        </div>
        {!paymentReady && <Glass className="mx-auto mt-6 max-w-7xl p-6">
          <p className="text-sm uppercase tracking-[0.18em] text-amber-200">Setup pending</p>
          <p className="mt-3 text-lg leading-8 text-white/72">Add `VITE_RAZORPAY_PAYMENT_LINK_URL` in Vercel once the Razorpay consultation fee link is ready. Until then, visitors can submit the problem statement and discuss the fee first.</p>
        </Glass>}
      </section>
    </>
  );
}

/* ─── Query Page ─── */
function QueryPage() {
  const selectedProduct = productMap[parseHash().params.get("product") || ""];
  const initialQuery = selectedProduct?.inquiry || "";
  const paymentReady = Boolean(razorpayPaymentLink);

  return (
    <section className="relative px-5 py-14 lg:px-8 lg:py-20">
      {/* Custom Premium Background Redesign */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F8FBFF]">
        {/* Soft, deep ambient glows */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,120,201,0.14),transparent_40%),linear-gradient(315deg,rgba(22,163,74,0.10),transparent_42%)] fade-in" />
        {/* Fine dot-grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(8,120,201,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
      </div>
      {/* Translucent bg illustration */}
      <img src={illustrations[7]} alt="" className="pointer-events-none absolute right-[5%] top-[10%] h-72 w-72 object-contain opacity-[0.04] mix-blend-luminosity" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="fade-up">
          <SectionLabel icon={selectedProduct ? "box" : "mail"}>{selectedProduct ? "Product inquiry" : "Free query"}</SectionLabel>
          <h1 className="text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">{selectedProduct ? `Ask about ${selectedProduct.name}.` : "Ask a simple question."}</h1>
          <p className="mt-6 text-lg leading-8 text-white/70">{selectedProduct ? "The message is prefilled with the product context. Add your contact details, adjust the note if needed, and Serenvya will respond with the right licensing or customization path." : "Use this when you want to know whether Serenvya can help, what service fits, or how to think about an automation or DPDPA requirement."}</p>
          <div className="mt-8 grid gap-3">
            {(selectedProduct ? ["Licensing and deployment options", "Customization and integration scope", "Implementation timeline and support"] : ["Can you help with this workflow?", "Is this a DPDPA readiness concern?", "What is the right next step?"]).map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" /><p className="text-white/72">{item}</p></div>)}
          </div>
          <div className="mt-6 gradient-border rounded-2xl border border-amber-200/20 bg-amber-300/10 p-5 text-white/72">
            <p className="font-medium text-amber-100">Consultation fee</p>
            <p className="mt-2 text-[15px] leading-7">Submit the query first so the team has context. If you have been asked to pay the consultation fee, use the secure Razorpay link below.</p>
            <div className="mt-4">
              {paymentReady ? (
                <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-300/30 bg-[#F97316] px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(249,115,22,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B]" href={razorpayPaymentLink} rel="noreferrer" target="_blank">
                  Pay consultation fee <Icon name="arrow" className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <p className="text-sm text-white/62">Payment link setup is pending. The query form is ready to use.</p>
              )}
            </div>
          </div>
        </div>
        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          <IntakeForm
            buttonLabel="Send query"
            extraPayload={selectedProduct ? { product: selectedProduct.name, productSlug: selectedProduct.slug } : {}}
            formType={selectedProduct ? "license" : "query"}
            initialQuery={initialQuery}
            intro={selectedProduct ? "Review the drafted inquiry below, add any context about your organization or workflow, and send it to Serenvya." : "Write the question in plain language. This is for early-stage queries and quick clarification."}
            queryLabel="Query"
            queryPlaceholder="Example: Can Serenvya help us automate invoice review, or help assess our DPDPA readiness?"
            successMessage="Thanks. Your query has been sent to Serenvya."
            title="Send your query"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── App Root ─── */
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
    [AUDITSUITE_LICENSE_PAGE]: <AuditSuiteLicensePage setPage={setPage} />,
    [AUDITSUITE_CHECKOUT_PAGE]: <AuditSuiteCheckoutPlaceholder setPage={setPage} />,
    courses: <CoursesPage setPage={setPage} />,
    services: <ServicesPage />,
    solutions: <SolutionsPage />,
    process: <ProcessPage />,
    about: <AboutPage />,
    query: <QueryPage />,
    problem: <ProblemPage setPage={setPage} />,
  };

  return <Shell page={page} setPage={setPage}>{activeProduct ? <ProductDetailPage product={activeProduct} setPage={setPage} /> : pages[page] || pages.home}</Shell>;
}
