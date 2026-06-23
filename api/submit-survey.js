function buildFormBody(report) {
  const body = new URLSearchParams();
  body.set("payload", JSON.stringify(report));
  return body;
}

function validateReport(report) {
  const participant = report?.participant || {};
  if (!participant.email || !participant.fullName || !participant.company) {
    return "Required participant details are missing.";
  }

  if (!report?.automation?.score || !report?.dpdpa?.score) {
    return "Survey scores are missing.";
  }

  if (report?.consent?.dataRetention !== "yes") {
    return "Data storage and processing consent is required to generate the report.";
  }

  return "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const report = request.body || {};
  const validationError = validateReport(report);
  if (validationError) {
    return response.status(400).json({ error: validationError });
  }

  const googleScriptUrl = process.env.SURVEY_GOOGLE_SCRIPT_URL || process.env.GOOGLE_SCRIPT_URL;
  if (!googleScriptUrl) {
    return response.status(500).json({
      error: "Survey backend is not configured. Please add SURVEY_GOOGLE_SCRIPT_URL in Vercel.",
    });
  }

  try {
    const gasResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "serenvya-website-survey",
      },
      body: buildFormBody(report),
    });

    const gasText = await gasResponse.text();
    let gasResult = {};
    try {
      gasResult = JSON.parse(gasText);
    } catch {
      gasResult = { ok: gasResponse.ok, raw: gasText };
    }

    if (!gasResponse.ok || gasResult.ok === false) {
      return response.status(502).json({
        error: `Google Apps Script rejected the request: ${gasResult.error || gasText}`,
      });
    }

    return response.status(200).json({ ok: true, provider: "Google Apps Script" });
  } catch (error) {
    return response.status(502).json({
      error: `Could not reach Google Apps Script: ${error?.message || "Unknown error"}`,
    });
  }
}
