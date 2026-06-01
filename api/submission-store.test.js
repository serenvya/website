import { afterEach, describe, expect, it, vi } from "vitest";
import { buildStorageUrl, buildSubmissionRecord, saveSubmissionRecord } from "./submission-store.js";

afterEach(() => {
  vi.restoreAllMocks();
  delete process.env.SUBMISSIONS_WEBHOOK_URL;
  delete process.env.SUBMISSIONS_WEBHOOK_SECRET;
});

describe("submission storage records", () => {
  it("builds a structured course registration record", () => {
    const record = buildSubmissionRecord({
      type: "course",
      label: "Course Registration",
      name: "Test Participant",
      email: "test@example.com",
      mobile: "9876543210",
      query: "Course registration for AI For CS and CMA's.",
      course: "AI For CS and CMA's",
      price: "2500/- +GST",
      paymentLink: "https://rzp.io/rzp/F3l97wh",
      profession: "CS",
      gstNumber: "",
      address: "Test address",
    });

    expect(record).toMatchObject({
      type: "course",
      label: "Course Registration",
      name: "Test Participant",
      email: "test@example.com",
      mobile: "9876543210",
      course: "AI For CS and CMA's",
      price: "2500/- +GST",
      source: "serenvya-website",
    });
    expect(record.id).toBeTruthy();
    expect(record.createdAt).toBeTruthy();
  });

  it("adds the Apps Script secret as a URL parameter", () => {
    expect(buildStorageUrl("https://script.google.com/macros/s/test/exec", "private secret")).toBe(
      "https://script.google.com/macros/s/test/exec?secret=private+secret"
    );
    expect(buildStorageUrl("https://example.com/hook?sheet=one", "abc123")).toBe(
      "https://example.com/hook?sheet=one&secret=abc123"
    );
  });

  it("treats Apps Script ok false responses as failed saves", async () => {
    process.env.SUBMISSIONS_WEBHOOK_URL = "https://script.google.com/macros/s/test/exec";
    process.env.SUBMISSIONS_WEBHOOK_SECRET = "wrong";
    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: true,
      text: async () => JSON.stringify({ ok: false, error: "Unauthorized" }),
    })));

    await expect(saveSubmissionRecord({ type: "course" })).resolves.toEqual({ configured: true, saved: false });
  });

  it("treats non-JSON storage responses as failed saves", async () => {
    process.env.SUBMISSIONS_WEBHOOK_URL = "https://script.google.com/macros/s/test/exec";
    vi.stubGlobal("fetch", vi.fn(async () => ({
      ok: true,
      text: async () => "<html>Google error page</html>",
    })));

    await expect(saveSubmissionRecord({ type: "course" })).resolves.toEqual({ configured: true, saved: false });
  });
});
