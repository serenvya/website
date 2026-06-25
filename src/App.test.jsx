import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App, { courses, faqs, navItems, processSteps, products, services, solutionAreas } from "./App.jsx";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
  window.location.hash = "";
});

describe("Serenvya website content", () => {
  it("has complete navigation", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Home",
      "Products",
      "Courses",
      "Survey",
      "Services",
      "Solutions",
      "Process",
      "About",
      "Query",
    ]);
  });

  it("has expected content collections", () => {
    expect(services).toHaveLength(6);
    expect(processSteps).toHaveLength(4);
    expect(products).toHaveLength(9);
    expect(courses).toHaveLength(10);
    expect(courses.some((course) => course.title === "AI For CS and CMA's" && course.available)).toBe(true);
    expect(courses.some((course) => course.title === "AI and Office Automation for Lawyers" && course.available)).toBe(true);
    expect(courses.some((course) => course.title === "AI for Businessmen - Basic" && course.available)).toBe(true);
    expect(courses.some((course) => course.title === "AI for Businessmen - Advance" && course.available)).toBe(true);
    expect(courses.filter((course) => course.offerPrice === "2500/-").every((course) => course.originalPrice === "10000/-")).toBe(true);
    expect(courses.filter((course) => course.offerPrice === "5000/-").every((course) => course.originalPrice === "20000/-")).toBe(true);
    expect(products.every((product) => product.slug && product.name && product.price && product.inquiry)).toBe(true);
    expect(solutionAreas.length).toBeGreaterThanOrEqual(6);
    expect(faqs.every((faq) => faq.q && faq.a)).toBe(true);
  });

  it("renders the homepage headline and intake CTAs", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /where intelligent automation meets compliance precision/i,
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/ask a query/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/submit problem statement/i).length).toBeGreaterThan(0);
  });

  it("requires email and mobile fields on intake forms", () => {
    window.location.hash = "#/query";
    render(<App />);

    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/mobile number/i)).toBeRequired();
  });

  it("renders course cards with participant details before payment", () => {
    window.location.hash = "#/courses";
    render(<App />);

    expect(screen.getAllByText(/AI For CS and CMA's/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI for Students - Basic/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Excel for Students - Advanced/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Power BI for Students - Advanced/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI for Businessmen - Basic/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI for Businessmen - Advance/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 10000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 2500\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 20000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 5000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/participant details/i).length).toBeGreaterThan(0);
    expect(screen.getByLabelText(/^name$/i)).toBeRequired();
    expect(screen.getByLabelText(/address/i)).toBeRequired();
    expect(screen.getByLabelText(/mobile number/i)).toBeRequired();
    expect(screen.getByLabelText(/email id/i)).toBeRequired();
    expect(screen.getByLabelText(/profession/i)).toBeRequired();
    expect(screen.getByLabelText(/gst number/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /continue to payment/i })).toBeInTheDocument();
  });
});
