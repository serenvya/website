const CONTACT_EMAIL = "info@serenvya.com";

function sanitize(value) {
  return String(value || "").replace(/[<>]/g, "").trim();
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || CONTACT_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;

  if (!apiKey) {
    return response.status(500).json({ error: "Contact form is not configured yet." });
  }

  const name = sanitize(request.body?.name);
  const email = sanitize(request.body?.email);
  const query = sanitize(request.body?.query);
  const type = sanitize(request.body?.type) === "problem" ? "problem" : "query";
  const submissionLabel = type === "problem" ? "Problem Statement" : "Query";

  if (!name || !query) {
    return response.status(400).json({ error: `Please provide your name and ${type === "problem" ? "problem statement" : "query"}.` });
  }

  if (name.length > 120 || email.length > 160 || query.length > 3000) {
    return response.status(400).json({ error: "Please shorten the query and try again." });
  }

  const lines = [
    `New Serenvya ${submissionLabel.toLowerCase()}`,
    "",
    `Type: ${submissionLabel}`,
    `Name: ${name}`,
    `Email: ${email || "Not provided"}`,
    "",
    `${submissionLabel}:`,
    query,
  ];

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "serenvya-website-contact-form",
    },
    body: JSON.stringify({
      from: `Serenvya Website <${fromEmail}>`,
      to: [toEmail],
      reply_to: email || toEmail,
      subject: `New Serenvya ${submissionLabel.toLowerCase()} from ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const errorBody = await resendResponse.text().catch(() => "");
    console.error("Resend email send failed", {
      status: resendResponse.status,
      body: errorBody,
      fromEmail,
      toEmail,
    });
    return response.status(502).json({ error: "Unable to send your query right now." });
  }

  return response.status(200).json({ ok: true });
}
