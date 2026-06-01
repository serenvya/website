import { buildSubmissionRecord, saveSubmissionRecord } from "./submission-store.js";

const CONTACT_EMAIL = "info@serenvya.com";

function sanitize(value) {
  return String(value || "").replace(/[<>]/g, "").trim();
}

function normalizeMobile(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || CONTACT_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const storageConfigured = Boolean(process.env.SUBMISSIONS_WEBHOOK_URL);

  if (!apiKey && !storageConfigured) {
    return response.status(500).json({ error: "Contact form is not configured yet." });
  }

  const name = sanitize(request.body?.name);
  const email = sanitize(request.body?.email);
  const mobile = normalizeMobile(request.body?.mobile);
  const query = sanitize(request.body?.query);
  const requestedType = sanitize(request.body?.type);
  const type = ["problem", "course", "license"].includes(requestedType) ? requestedType : "query";
  const submissionLabel = type === "problem" ? "Problem Statement" : type === "course" ? "Course Registration" : type === "license" ? "Product Licensing Inquiry" : "Query";
  const course = sanitize(request.body?.course);
  const product = sanitize(request.body?.product);
  const productSlug = sanitize(request.body?.productSlug);
  const price = sanitize(request.body?.price);
  const address = sanitize(request.body?.address);
  const gstNumber = sanitize(request.body?.gstNumber);
  const profession = sanitize(request.body?.profession);
  const paymentLink = sanitize(request.body?.paymentLink);

  if (!name || !email || !mobile || !query) {
    return response.status(400).json({ error: `Please provide your name, email, mobile number, and ${type === "problem" ? "problem statement" : type === "course" ? "course registration details" : "query"}.` });
  }

  if (type === "course" && (!course || !address || !profession)) {
    return response.status(400).json({ error: "Please provide the course, address, and profession for registration." });
  }

  if (type === "license" && !product) {
    return response.status(400).json({ error: "Please provide the product name for licensing enquiries." });
  }

  if (!isValidEmail(email)) {
    return response.status(400).json({ error: "Please provide a valid email address." });
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return response.status(400).json({ error: "Please provide a valid 10-digit mobile number." });
  }

  if (name.length > 120 || email.length > 160 || query.length > 3000 || address.length > 1000 || profession.length > 120 || gstNumber.length > 30 || product.length > 160 || productSlug.length > 120) {
    return response.status(400).json({ error: "Please shorten the submission and try again." });
  }

  const submissionRecord = buildSubmissionRecord({
    type,
    label: submissionLabel,
    name,
    email,
    mobile,
    query,
    course,
    product,
    productSlug,
    price,
    paymentLink,
    profession,
    gstNumber,
    address,
  });

  const storageResult = await saveSubmissionRecord(submissionRecord);

  if (storageResult.configured && !storageResult.saved) {
    return response.status(502).json({ error: "Unable to save your details right now." });
  }

  const lines = [
    `New Serenvya ${submissionLabel.toLowerCase()}`,
    "",
    `Type: ${submissionLabel}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile: ${mobile}`,
    ...(type === "course" ? [
      `Course: ${course}`,
      `Offer Price: Rs. ${price || "2500/-"} per course`,
      `Payment Link: ${paymentLink || "Pending setup"}`,
      `Profession: ${profession}`,
      `GST Number: ${gstNumber || "Not provided"}`,
      "Address:",
      address,
    ] : []),
    ...(type === "license" ? [
      `Product: ${product}`,
      `Product Slug: ${productSlug || "Not provided"}`,
    ] : []),
    `Saved to backend storage: ${storageResult.configured ? "Yes" : "Not configured"}`,
    "",
    `${submissionLabel}:`,
    query,
  ];

  if (apiKey) {
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
  }

  return response.status(200).json({ ok: true, saved: storageResult.saved, storageConfigured: storageResult.configured, emailed: Boolean(apiKey) });
}
