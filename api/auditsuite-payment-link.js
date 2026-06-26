// Creates a unique Razorpay payment link per AuditSuite buyer.
// A single static payment link cannot be reused: a standard Razorpay payment link is
// single-use, so after the first buyer pays it shows "Payment Completed" to everyone
// else. This endpoint mints a fresh link for each buyer with their details and the
// server-decided amount prefilled, and returns its short_url for the browser to open.

const AUDITSUITE_DESCRIPTION = "AuditSuite Firm License — Annual Offer";
// Pricing (in rupees). The coupon discount is validated here, never trusted from the client.
const AUDITSUITE_BASE_AMOUNT = 20000;
const AUDITSUITE_COUPON_AMOUNT = 15000;
const AUDITSUITE_COUPON_CODE = "AUDITSUITE25";

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

function formatRupee(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.error("Razorpay credentials are not configured.");
    return response.status(500).json({ error: "Checkout is temporarily unavailable. Please contact the Serenvya team." });
  }

  const name = sanitize(request.body?.name || request.body?.fullName);
  const email = sanitize(request.body?.email);
  const mobile = normalizeMobile(request.body?.mobile || request.body?.phone);
  const firmName = sanitize(request.body?.firmName);
  const couponCode = sanitize(request.body?.couponCode).toUpperCase();

  if (!name || !email || !mobile || !firmName) {
    return response.status(400).json({ error: "Please provide your name, email, mobile number, and firm name." });
  }

  if (!isValidEmail(email)) {
    return response.status(400).json({ error: "Please provide a valid email address." });
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return response.status(400).json({ error: "Please provide a valid 10-digit mobile number." });
  }

  if (name.length > 120 || email.length > 160 || firmName.length > 160) {
    return response.status(400).json({ error: "Please shorten the submitted details and try again." });
  }

  const couponApplied = couponCode === AUDITSUITE_COUPON_CODE;
  const amount = couponApplied ? AUDITSUITE_COUPON_AMOUNT : AUDITSUITE_BASE_AMOUNT;

  const payload = {
    amount: amount * 100, // Razorpay expects the amount in paise.
    currency: "INR",
    accept_partial: false,
    description: AUDITSUITE_DESCRIPTION,
    customer: {
      name,
      email,
      contact: `+91${mobile}`,
    },
    notify: { sms: false, email: false },
    reminder_enable: false,
    notes: {
      product: "AuditSuite Firm License",
      billing: "Annual license",
      firmName,
      coupon: couponApplied ? AUDITSUITE_COUPON_CODE : "none",
      source: "serenvya-website",
    },
  };

  try {
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const razorpayResponse = await fetch("https://api.razorpay.com/v1/payment_links", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await razorpayResponse.json().catch(() => ({}));

    if (!razorpayResponse.ok || !result?.short_url) {
      console.error("Razorpay payment link creation failed", {
        status: razorpayResponse.status,
        error: result?.error?.description || result?.error || "Unknown Razorpay error",
      });
      return response.status(502).json({ error: "Unable to start your checkout right now. Please try again." });
    }

    return response.status(200).json({
      ok: true,
      paymentLink: result.short_url,
      paymentLinkId: result.id || "",
      amount,
      couponApplied,
      finalAmount: formatRupee(amount),
    });
  } catch (error) {
    console.error("Razorpay payment link request failed", { message: error?.message || "Unknown error" });
    return response.status(502).json({ error: "Unable to start your checkout right now. Please try again." });
  }
}
