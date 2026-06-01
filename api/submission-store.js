const STORE_TIMEOUT_MS = 7000;

function redactEmpty(value) {
  return value || "";
}

export function buildSubmissionRecord(payload) {
  const now = new Date().toISOString();

  return {
    id: `${now}-${Math.random().toString(36).slice(2, 10)}`,
    createdAt: now,
    type: payload.type,
    label: payload.label,
    name: payload.name,
    email: payload.email,
    mobile: payload.mobile,
    query: payload.query,
    course: redactEmpty(payload.course),
    product: redactEmpty(payload.product),
    productSlug: redactEmpty(payload.productSlug),
    price: redactEmpty(payload.price),
    paymentLink: redactEmpty(payload.paymentLink),
    profession: redactEmpty(payload.profession),
    gstNumber: redactEmpty(payload.gstNumber),
    address: redactEmpty(payload.address),
    source: "serenvya-website",
  };
}

export function buildStorageUrl(storageUrl, secret) {
  if (!secret) return storageUrl;

  try {
    const url = new URL(storageUrl);
    url.searchParams.set("secret", secret);
    return url.toString();
  } catch {
    const separator = storageUrl.includes("?") ? "&" : "?";
    return `${storageUrl}${separator}secret=${encodeURIComponent(secret)}`;
  }
}

export async function saveSubmissionRecord(record) {
  const storageUrl = process.env.SUBMISSIONS_WEBHOOK_URL;

  if (!storageUrl) {
    return { configured: false, saved: false };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), STORE_TIMEOUT_MS);

  try {
    const secret = process.env.SUBMISSIONS_WEBHOOK_SECRET || "";
    const storageResponse = await fetch(buildStorageUrl(storageUrl, secret), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "serenvya-website-submission-store",
        ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
      },
      body: JSON.stringify(record),
      signal: controller.signal,
    });

    if (!storageResponse.ok) {
      const body = await storageResponse.text().catch(() => "");
      console.error("Submission storage failed", {
        status: storageResponse.status,
        body,
        type: record.type,
      });
      return { configured: true, saved: false };
    }

    const result = await storageResponse.json().catch(() => ({ ok: true }));

    if (result?.ok === false) {
      console.error("Submission storage rejected record", {
        error: result.error || "Unknown storage rejection",
        type: record.type,
      });
      return { configured: true, saved: false };
    }

    return { configured: true, saved: true };
  } catch (error) {
    console.error("Submission storage request failed", {
      message: error?.message || "Unknown storage error",
      type: record.type,
    });
    return { configured: true, saved: false };
  } finally {
    clearTimeout(timeout);
  }
}
