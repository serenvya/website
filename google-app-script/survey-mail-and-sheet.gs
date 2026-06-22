var CC_EMAIL = "info@serenvya.com";
var SHEET_NAME = "Survey";
var SPREADSHEET_ID = "";

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Serenvya survey mail and sheet service is live."
  });
}

function doPost(e) {
  try {
    var payload = e.parameter.payload;
    if (!payload) {
      throw new Error("Missing survey payload.");
    }

    var report = JSON.parse(payload);
    var participant = report.participant || {};
    if (!participant.email || !participant.fullName || !participant.company) {
      throw new Error("Required participant details are missing.");
    }

    appendSurveyRow(report);

    MailApp.sendEmail({
      to: participant.email,
      cc: CC_EMAIL,
      subject: "Serenvya Readiness Report - " + participant.company,
      htmlBody: buildEmailHtml(report),
      body: buildEmailText(report),
      name: "Serenvya"
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function appendSurveyRow(report) {
  var sheet = getSurveySheet();
  var participant = report.participant || {};
  var automation = report.automation || {};
  var dpdpa = report.dpdpa || {};
  var automationScore = automation.score || {};
  var dpdpaScore = dpdpa.score || {};

  ensureHeaders(sheet, [
    "Name",
    "Email Id",
    "Mobile Number",
    "Timestamp",
    "Company / Organisation",
    "Role / Designation",
    "Team Size",
    "Automation Score",
    "Automation Band",
    "DPDPA Score",
    "DPDPA Band",
    "Generated At",
    "Report JSON"
  ]);

  sheet.appendRow([
    valueOrBlank(participant.fullName),
    valueOrBlank(participant.email),
    valueOrBlank(participant.phone),
    new Date(),
    valueOrBlank(participant.company),
    valueOrBlank(participant.role),
    valueOrBlank(participant.teamSize),
    valueOrBlank(automationScore.percent) + "%",
    valueOrBlank(automation.band),
    valueOrBlank(dpdpaScore.percent) + "%",
    valueOrBlank(dpdpa.band),
    valueOrBlank(report.generatedAt),
    JSON.stringify(report)
  ]);
}

function getSurveySheet() {
  var spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("No active spreadsheet found. Bind this script to the Google Sheet or set SPREADSHEET_ID.");
  }

  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeaders(sheet, headers) {
  var existing = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  var merged = [];

  for (var i = 0; i < headers.length; i += 1) {
    merged.push(String(existing[i] || "").trim() || headers[i]);
  }

  sheet.getRange(1, 1, 1, headers.length).setValues([merged]);
  sheet.setFrozenRows(1);
}

function testMail() {
  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    cc: CC_EMAIL,
    subject: "Serenvya survey mail test",
    body: "This is a test email from the Serenvya survey Google Apps Script.",
    name: "Serenvya"
  });
}

function buildEmailHtml(report) {
  var participant = report.participant || {};
  var automation = report.automation || {};
  var dpdpa = report.dpdpa || {};
  var automationScore = automation.score || {};
  var dpdpaScore = dpdpa.score || {};

  return [
    '<div style="font-family: Arial, sans-serif; color: #132033; line-height: 1.55;">',
    '<h1 style="color: #075abd;">Serenvya Readiness Report</h1>',
    "<p>Hello " + escapeHtml(participant.fullName) + ",</p>",
    "<p>Thank you for completing the Serenvya Consulting and Automations P. L. survey. Based on your responses, here is your indicative readiness snapshot.</p>",
    "<h2>Participant Details</h2>",
    '<table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">',
    "<tr><td><strong>Company</strong></td><td>" + escapeHtml(participant.company) + "</td></tr>",
    "<tr><td><strong>Role</strong></td><td>" + escapeHtml(participant.role) + "</td></tr>",
    "<tr><td><strong>Team size</strong></td><td>" + escapeHtml(participant.teamSize) + "</td></tr>",
    "<tr><td><strong>Phone</strong></td><td>" + escapeHtml(participant.phone) + "</td></tr>",
    "</table>",
    "<h2>Automation Readiness</h2>",
    "<p><strong>Score:</strong> " + escapeHtml(automationScore.percent) + "% (" + escapeHtml(automation.band) + ")</p>",
    "<p>This reflects how far your office workflows appear to have moved from manual, person-dependent execution toward reliable digital and AI-assisted processes.</p>",
    "<h3>Suggested next actions</h3>",
    "<ul>" + listItems(automation.recommendations) + "</ul>",
    "<h2>DPDPA Readiness</h2>",
    "<p><strong>Score:</strong> " + escapeHtml(dpdpaScore.percent) + "% (" + escapeHtml(dpdpa.band) + ")</p>",
    "<p>This reflects preparedness across data mapping, consent or lawful purpose, notices, data principal rights, breach readiness, vendor controls, retention, and employee awareness.</p>",
    "<p>" + escapeHtml(dpdpa.timeline) + "</p>",
    "<h3>Suggested next actions</h3>",
    "<ul>" + listItems(dpdpa.recommendations) + "</ul>",
    "<p><strong>Important note:</strong> " + escapeHtml(dpdpa.note) + "</p>",
    "<p>Regards,<br />Serenvya Consulting and Automations P. L.<br />" + CC_EMAIL + "</p>",
    "</div>"
  ].join("");
}

function buildEmailText(report) {
  var participant = report.participant || {};
  var automation = report.automation || {};
  var dpdpa = report.dpdpa || {};
  var automationScore = automation.score || {};
  var dpdpaScore = dpdpa.score || {};
  var lines = [
    "Serenvya Readiness Report",
    "",
    "Name: " + valueOrBlank(participant.fullName),
    "Company: " + valueOrBlank(participant.company),
    "Role: " + valueOrBlank(participant.role),
    "Team size: " + valueOrBlank(participant.teamSize),
    "Phone: " + valueOrBlank(participant.phone),
    "",
    "Automation Readiness: " + valueOrBlank(automationScore.percent) + "% (" + valueOrBlank(automation.band) + ")"
  ];

  appendRecommendations(lines, automation.recommendations);

  lines.push("");
  lines.push("DPDPA Readiness: " + valueOrBlank(dpdpaScore.percent) + "% (" + valueOrBlank(dpdpa.band) + ")");
  lines.push(valueOrBlank(dpdpa.timeline));
  appendRecommendations(lines, dpdpa.recommendations);

  lines.push("");
  lines.push("Important note: " + valueOrBlank(dpdpa.note));
  lines.push("");
  lines.push("Serenvya Consulting and Automations P. L.");
  lines.push(CC_EMAIL);

  return lines.join("\n");
}

function appendRecommendations(lines, recommendations) {
  var items = recommendations || [];
  for (var i = 0; i < items.length; i += 1) {
    lines.push("- " + items[i]);
  }
}

function listItems(items) {
  var recommendations = items || [];
  var html = "";
  for (var i = 0; i < recommendations.length; i += 1) {
    html += "<li>" + escapeHtml(recommendations[i]) + "</li>";
  }
  return html;
}

function valueOrBlank(value) {
  return value === undefined || value === null ? "" : String(value);
}

function escapeHtml(value) {
  return valueOrBlank(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
