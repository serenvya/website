import { describe, expect, it } from "vitest";
import { buildStorageUrl, buildSubmissionRecord } from "./submission-store.js";

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
});
