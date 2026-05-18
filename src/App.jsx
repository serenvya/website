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
  { label: "Services", page: "services" },
  { label: "Solutions", page: "solutions" },
  { label: "Process", page: "process" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
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

const pageMap = Object.fromEntries(navItems.map((item) => [item.page, item]));

function getInitialPage() {
  const page = window.location.hash.replace("#/", "") || "home";
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
  };
  return icons[name] || icons.spark;
}

function hrefFor(page) {
  return page === "home" ? "#/" : `#/${page}`;
}

function Button({ children, page, href, variant = "primary", className = "", onClick }) {
  const styles = {
    primary: "border-white/20 bg-white text-slate-950 shadow-[0_22px_70px_rgba(0,140,255,0.24)] hover:-translate-y-0.5 hover:bg-sky-50",
    dark: "border-white/15 bg-slate-950/80 text-white shadow-[0_18px_55px_rgba(2,8,23,0.26)] hover:-translate-y-0.5 hover:bg-slate-900",
    ghost: "border-white/20 bg-white/10 text-white backdrop-blur-2xl hover:-translate-y-0.5 hover:bg-white/16",
  };
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300 ${styles[variant]} ${className}`;
  return <a href={href || hrefFor(page)} className={classes} onClick={onClick}>{children}</a>;
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
            {navItems.map((item) => <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className={`rounded-full px-4 py-2 transition ${page === item.page ? "bg-white text-slate-950 shadow-lg" : "hover:bg-white/10 hover:text-white"}`}>{item.label}</a>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button href="mailto:info@serenvya.com" variant="ghost">Email</Button>
            <Button page="contact" onClick={() => setPage("contact")}>Book a consultation</Button>
          </div>
          <button className="rounded-full border border-white/15 bg-white/10 p-3 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-[#061225]/95 px-5 py-4 backdrop-blur-2xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => <a key={item.page} href={hrefFor(item.page)} onClick={() => { setPage(item.page); setMobileOpen(false); }} className={`rounded-2xl px-4 py-3 ${page === item.page ? "bg-white text-slate-950" : "bg-white/[0.06] text-white/80"}`}>{item.label}</a>)}
          </div>
        </div>}
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <Logo />
          <div className="flex flex-wrap gap-5 text-sm text-white/58">{navItems.map((item) => <a key={item.page} href={hrefFor(item.page)} onClick={() => setPage(item.page)} className="hover:text-white">{item.label}</a>)}</div>
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
              <Button page="contact" onClick={() => setPage("contact")}>Start a conversation <Icon name="arrow" className="ml-2 h-5 w-5" /></Button>
              <Button page="services" variant="ghost" onClick={() => setPage("services")}>Explore services</Button>
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
      <FeaturedBand setPage={setPage} />
      <ServiceGrid />
      <IllustrationStrip />
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

function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <PageHero kicker="Contact" title="Start with a workflow, a compliance gap, or both." text="Share the process you want to automate, the personal data practices you want to strengthen, or the DPDPA readiness work you need to structure." image={illustrations[6]}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button href="mailto:info@serenvya.com">Email Serenvya <Icon name="mail" className="ml-2 h-5 w-5" /></Button></div>
      </PageHero>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Glass className="p-7">
            <h2 className="text-3xl font-semibold tracking-tight">Good starting points</h2>
            <div className="mt-6 grid gap-3">
              {["A workflow that eats too much team time", "A document or approval process that needs AI assistance", "A DPDPA gap assessment or readiness roadmap", "A consent, notice, grievance, or breach response process"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4"><Icon name="check" className="mt-1 h-4 w-4 text-emerald-300" /><p className="text-white/72">{item}</p></div>)}
            </div>
          </Glass>
          <div className="space-y-3">
            {faqs.map((faq, index) => <Glass key={faq.q} className="overflow-hidden">
              <button className="flex w-full items-center justify-between gap-5 p-6 text-left" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span className="text-lg font-semibold">{faq.q}</span>
                <Icon name="chevron" className={`h-5 w-5 shrink-0 text-white/48 transition ${openFaq === index ? "rotate-180" : ""}`} />
              </button>
              {openFaq === index && <p className="border-t border-white/10 px-6 pb-6 pt-5 text-[15px] leading-8 text-white/66">{faq.a}</p>}
            </Glass>)}
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);

  useEffect(() => {
    const onHashChange = () => setPage(getInitialPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const pages = {
    home: <Home setPage={setPage} />,
    services: <ServicesPage />,
    solutions: <SolutionsPage />,
    process: <ProcessPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
  };

  return <Shell page={page} setPage={setPage}>{pages[page] || pages.home}</Shell>;
}
