const answerOptions = [
  { label: "Not started", value: 0 },
  { label: "Basic", value: 1 },
  { label: "Improving", value: 2 },
  { label: "Strong", value: 3 }
];

const automationQuestions = [
  "How much of your recurring data entry work is automated?",
  "How consistently do your teams use digital workflows instead of paper or manual handoffs?",
  "How automated are approvals, reminders, and follow-ups?",
  "How well do your systems exchange data without copy-paste work?",
  "How often do you use AI for drafting, classification, extraction, or decision support?",
  "How clearly are automation opportunities tracked and prioritised?",
  "How much reporting or dashboard work is generated automatically?",
  "How well are exceptions, errors, and escalations handled in automated workflows?"
];

const dpdpaQuestions = [
  "How clearly have you mapped the personal data your organisation collects, stores, shares, and deletes?",
  "How consistently do you capture consent or identify a lawful purpose before processing personal data?",
  "How clear and accessible are your privacy notices for customers, employees, or other individuals?",
  "How prepared are you to respond to data principal rights requests such as access, correction, grievance, or withdrawal?",
  "How well do you control access to personal data within your organisation?",
  "How ready is your organisation to detect, assess, and report personal data breaches?",
  "How well do your vendor contracts and processors address personal data protection duties?",
  "How consistently do you retain and delete personal data according to a defined policy?",
  "How prepared are you for child data or verifiable parental consent requirements, if applicable?",
  "How regularly do you train employees on privacy, security, and responsible data handling?"
];

const form = document.querySelector("#surveyForm");
const surveyBody = document.querySelector("#surveyBody");
const noConsentNote = document.querySelector("#noConsentNote");
const statusMessage = document.querySelector("#statusMessage");
const submitButton = document.querySelector("#submitButton");
const fallbackEmailLink = document.querySelector("#fallbackEmailLink");
const thankYouPanel = document.querySelector("#thankYouPanel");
const newResponseButton = document.querySelector("#newResponseButton");
const nextPageButton = document.querySelector("#nextPageButton");
const backPageButton = document.querySelector("#backPageButton");
const pageStatusMessage = document.querySelector("#pageStatusMessage");
const surveyPages = [...document.querySelectorAll(".survey-page")];
const pageTabs = [...document.querySelectorAll(".page-tab")];
const surveyConfig = window.SERENVYA_SURVEY_CONFIG || {};
let currentPage = 0;

function renderQuestions(containerId, section, questions) {
  const container = document.querySelector(containerId);
  const template = document.querySelector("#questionTemplate");

  questions.forEach((question, index) => {
    const node = template.content.cloneNode(true);
    const fieldset = node.querySelector(".question");
    const legend = node.querySelector("legend");
    const optionRow = node.querySelector(".option-row");
    const name = `${section}_${index}`;

    legend.textContent = `${index + 1}. ${question}`;
    fieldset.dataset.section = section;

    answerOptions.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="${name}" value="${option.value}" required />
        <span>${option.label}</span>
      `;
      optionRow.appendChild(label);
    });

    container.appendChild(node);
  });
}

function getSectionScore(section, totalQuestions) {
  const values = [...new FormData(form).entries()]
    .filter(([key]) => key.startsWith(`${section}_`))
    .map(([, value]) => Number(value));
  const max = totalQuestions * 3;
  const actual = values.reduce((sum, value) => sum + value, 0);
  return {
    actual,
    max,
    percent: max ? Math.round((actual / max) * 100) : 0,
    answered: values.length
  };
}

function scoreBand(percent) {
  if (percent >= 78) return "Advanced";
  if (percent >= 55) return "Developing";
  if (percent >= 32) return "Early stage";
  return "Needs attention";
}

function recommendations(type, percent) {
  const automation = {
    low: [
      "Identify the top five repetitive office processes by time spent and error rate.",
      "Start with simple automations for reminders, approvals, document generation, and data movement.",
      "Create one owner for automation discovery and monthly improvement tracking."
    ],
    mid: [
      "Connect high-volume workflows across departments so data does not need to be re-entered.",
      "Add AI-assisted extraction, drafting, and classification where documents or emails drive work.",
      "Define exception handling so automation improves reliability instead of hiding process gaps."
    ],
    high: [
      "Measure time saved, error reduction, turnaround time, and adoption for each automated workflow.",
      "Move from task automation to end-to-end orchestration across sales, finance, HR, and operations.",
      "Review access, audit logs, and controls around AI-enabled automations."
    ]
  };

  const dpdpa = {
    low: [
      "Create a personal data inventory covering collection, purpose, storage location, access, sharing, and retention.",
      "Review consent, notices, grievance handling, breach response, vendor controls, and deletion practices.",
      "Nominate internal responsibility for DPDPA readiness and maintain evidence of decisions and actions."
    ],
    mid: [
      "Standardise privacy notices, consent records, data principal request handling, and retention schedules.",
      "Test breach response, vendor review, access control, and employee training procedures.",
      "Prioritise higher-risk personal data processing before the wider compliance deadlines."
    ],
    high: [
      "Maintain audit-ready evidence for notices, consent, requests, breach assessments, and vendor oversight.",
      "Run periodic privacy reviews when new systems, AI tools, or data-sharing arrangements are introduced.",
      "Keep readiness aligned to DPDPA and DPDP Rules implementation timelines."
    ]
  };

  const bucket = percent >= 78 ? "high" : percent >= 45 ? "mid" : "low";
  return (type === "automation" ? automation : dpdpa)[bucket];
}

function buildReport() {
  const data = Object.fromEntries(new FormData(form).entries());
  const automationScore = getSectionScore("automation", automationQuestions.length);
  const dpdpaScore = getSectionScore("dpdpa", dpdpaQuestions.length);

  return {
    generatedAt: new Date().toISOString(),
    participant: {
      fullName: data.fullName,
      email: data.email,
      company: data.company,
      role: data.role || "Not shared",
      phone: data.phone || "Not shared",
      teamSize: data.teamSize
    },
    consent: {
      marketingCall: data.marketingCallConsent || "no",
      marketingEmail: data.marketingEmailConsent || "no",
      messaging: data.messagingConsent || "no",
      dataRetention: data.dataRetentionConsent || "no",
      partnerSharing: data.partnerSharingConsent || "no",
      noticeVersion: "DPDPA notice and consent - 2026-06-23",
      withdrawalContact: "info@serenvya.com"
    },
    automation: {
      score: automationScore,
      band: scoreBand(automationScore.percent),
      recommendations: recommendations("automation", automationScore.percent)
    },
    dpdpa: {
      score: dpdpaScore,
      band: scoreBand(dpdpaScore.percent),
      recommendations: recommendations("dpdpa", dpdpaScore.percent),
      timeline: "The Digital Personal Data Protection Rules, 2025 are being implemented in phases. Key obligations are tied to the official enforcement timeline, including one-year and eighteen-month commencement points from the 13 November 2025 Gazette publication.",
      note: "This is a readiness assessment based on survey responses. It is not legal advice, a statutory audit, or a certification of compliance."
    }
  };
}

function buildReportText(report) {
  const { participant, automation, dpdpa } = report;
  return [
    "Serenvya Readiness Report",
    "",
    `Name: ${participant.fullName}`,
    `Company: ${participant.company}`,
    `Role: ${participant.role}`,
    `Team size: ${participant.teamSize}`,
    `Phone: ${participant.phone}`,
    "",
    "Consent Preferences",
    `Marketing calls: ${report.consent.marketingCall}`,
    `Marketing emails: ${report.consent.marketingEmail}`,
    `WhatsApp / SMS: ${report.consent.messaging}`,
    `Data storage and processing: ${report.consent.dataRetention}`,
    `Partner sharing: ${report.consent.partnerSharing}`,
    "",
    `Automation Readiness: ${automation.score.percent}% (${automation.band})`,
    ...automation.recommendations.map((item) => `- ${item}`),
    "",
    `DPDPA Readiness: ${dpdpa.score.percent}% (${dpdpa.band})`,
    dpdpa.timeline,
    ...dpdpa.recommendations.map((item) => `- ${item}`),
    "",
    `Important note: ${dpdpa.note}`,
    "",
    "Serenvya Consulting and Automations P. L.",
    "info@serenvya.com"
  ].join("\n");
}

function buildFallbackEmailHref(report) {
  const subject = `Serenvya Readiness Report - ${report.participant.company}`;
  const body = buildReportText(report);
  return `mailto:${encodeURIComponent(report.participant.email)}?cc=${encodeURIComponent("info@serenvya.com")}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function sendViaGoogleScript(report) {
  const googleScriptUrl = (surveyConfig.googleScriptUrl || "").trim();
  if (!googleScriptUrl) {
    return Promise.reject(new Error("Google Apps Script URL is not configured."));
  }

  return new Promise((resolve, reject) => {
    const iframeName = `gas_submit_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.hidden = true;

    const gasForm = document.createElement("form");
    gasForm.method = "POST";
    gasForm.action = googleScriptUrl;
    gasForm.target = iframeName;
    gasForm.hidden = true;

    const payloadInput = document.createElement("input");
    payloadInput.type = "hidden";
    payloadInput.name = "payload";
    payloadInput.value = JSON.stringify(report);
    gasForm.appendChild(payloadInput);

    const cleanup = () => {
      gasForm.remove();
      iframe.remove();
    };

    let timeoutId;
    const handleLoad = () => {
      window.clearTimeout(timeoutId);
      cleanup();
      resolve({ ok: true });
    };

    document.body.appendChild(iframe);

    window.setTimeout(() => {
      iframe.addEventListener("load", handleLoad, { once: true });
      document.body.appendChild(gasForm);
      gasForm.submit();
    }, 50);

    timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Google Apps Script did not respond in time."));
    }, 15000);
  });
}

async function sendReport(report) {
  if ((surveyConfig.useDirectGoogleScript || false) && (surveyConfig.googleScriptUrl || "").trim()) {
    await sendViaGoogleScript(report);
    return { provider: "Google Apps Script" };
  }

  const response = await fetch("/api/submit-survey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(report)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || "Unable to send the report.");
  }
  return { provider: result.provider || "Netlify email service" };
}

function showPage(pageIndex) {
  currentPage = pageIndex;
  surveyPages.forEach((page, index) => {
    page.classList.toggle("active", index === pageIndex);
  });
  pageTabs.forEach((tab, index) => {
    tab.classList.toggle("active", index === pageIndex);
    tab.setAttribute("aria-current", index === pageIndex ? "step" : "false");
  });
  pageStatusMessage.textContent = "";
  statusMessage.textContent = "";
  fallbackEmailLink.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSurveyForm() {
  form.hidden = false;
  thankYouPanel.hidden = true;
}

function showThankYou() {
  form.hidden = true;
  thankYouPanel.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function controlsForPage(pageIndex) {
  return [...surveyPages[pageIndex].querySelectorAll("input, select")];
}

function validatePage(pageIndex) {
  const firstInvalid = controlsForPage(pageIndex).find((control) => !control.checkValidity());
  if (firstInvalid) {
    firstInvalid.reportValidity();
    return false;
  }

  if (pageIndex === 0 && new FormData(form).get("dataRetentionConsent") !== "yes") {
    const dataRetentionYes = form.elements.dataRetentionConsent?.[0];
    dataRetentionYes?.focus();
    pageStatusMessage.textContent = "Please consent to storage and processing so we can generate and email your report.";
    return false;
  }

  return true;
}

function updateScores() {
  const automation = getSectionScore("automation", automationQuestions.length);
  const dpdpa = getSectionScore("dpdpa", dpdpaQuestions.length);

  document.querySelector("#automationScore").textContent = `${automation.percent}%`;
  document.querySelector("#dpdpaScore").textContent = `${dpdpa.percent}%`;
  document.querySelector("#automationBar").style.width = `${automation.percent}%`;
  document.querySelector("#dpdpaBar").style.width = `${dpdpa.percent}%`;
}

function handleConsentChange() {
  const consent = new FormData(form).get("consent");
  const wantsSurvey = consent === "yes";

  if (!wantsSurvey) {
    surveyBody.querySelectorAll("input, select").forEach((control) => {
      if (control.type === "radio" || control.type === "checkbox") {
        control.checked = false;
      } else {
        control.value = "";
      }
    });
  }

  surveyBody.hidden = !wantsSurvey;
  noConsentNote.hidden = consent !== "no";
  thankYouPanel.hidden = true;
  statusMessage.textContent = "";
  pageStatusMessage.textContent = "";
  fallbackEmailLink.hidden = true;
  fallbackEmailLink.removeAttribute("href");

  surveyBody.querySelectorAll("input, select, button").forEach((control) => {
    control.disabled = !wantsSurvey;
  });

  if (wantsSurvey) {
    showPage(0);
  }
}

renderQuestions("#automationQuestions", "automation", automationQuestions);
renderQuestions("#dpdpaQuestions", "dpdpa", dpdpaQuestions);
surveyBody.querySelectorAll("input, select, button").forEach((control) => {
  control.disabled = true;
});

form.addEventListener("change", (event) => {
  if (event.target.name === "consent") {
    handleConsentChange();
  }
  fallbackEmailLink.hidden = true;
  updateScores();
});

nextPageButton.addEventListener("click", () => {
  if (!validatePage(0)) {
    pageStatusMessage.textContent ||= "Please complete Page 1 before moving to DPDPA.";
    return;
  }
  showPage(1);
});

backPageButton.addEventListener("click", () => {
  showPage(0);
});

pageTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    if (index === 1 && !validatePage(0)) {
      pageStatusMessage.textContent ||= "Please complete Page 1 before moving to DPDPA.";
      return;
    }
    showPage(index);
  });
});

newResponseButton.addEventListener("click", () => {
  form.reset();
  surveyBody.hidden = true;
  noConsentNote.hidden = true;
  showPage(0);
  surveyBody.querySelectorAll("input, select, button").forEach((control) => {
    control.disabled = true;
  });
  updateScores();
  showSurveyForm();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const consent = new FormData(form).get("consent");

  if (consent === "no") {
    statusMessage.textContent = "No survey response was collected.";
    return;
  }

  if (!validatePage(0)) {
    showPage(0);
    validatePage(0);
    pageStatusMessage.textContent ||= "Please complete Page 1 before submitting.";
    return;
  }

  if (!validatePage(1)) {
    showPage(1);
    validatePage(1);
    statusMessage.textContent = "Please complete all required questions before submitting.";
    return;
  }

  const report = buildReport();
  fallbackEmailLink.href = buildFallbackEmailHref(report);
  fallbackEmailLink.hidden = true;
  submitButton.disabled = true;
  statusMessage.textContent = "Preparing and sending your report...";

  try {
    await sendReport(report);
    form.reset();
    surveyBody.hidden = true;
    noConsentNote.hidden = true;
    showPage(0);
    surveyBody.querySelectorAll("input, select, button").forEach((control) => {
      control.disabled = true;
    });
    updateScores();
    showThankYou();
  } catch (error) {
    fallbackEmailLink.hidden = false;
    statusMessage.textContent = `${error.message} Use the email draft button to send this report now, and check the mail sending setup.`;
  } finally {
    submitButton.disabled = false;
  }
});
