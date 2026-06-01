import { describe, expect, it } from "vitest";
import { buildSubmissionRecord } from "./submission-store.js";

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
});
