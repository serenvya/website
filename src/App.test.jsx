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
    expect(products).toHaveLength(8);
    expect(courses).toHaveLength(8);
    expect(courses.some((course) => course.title === "AI For CS and CMA's" && course.available)).toBe(true);
    expect(courses.some((course) => course.title === "AI and Office Automation for Lawyers" && course.available)).toBe(true);
    expect(courses.filter((course) => course.title.includes("Basic")).every((course) => course.originalPrice === "10000/-" && course.offerPrice === "2500/-")).toBe(true);
    expect(courses.filter((course) => course.title.includes("Advanced")).every((course) => course.originalPrice === "20000/-" && course.offerPrice === "5000/-")).toBe(true);
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

  it("renders course cards with direct payment links", () => {
    window.location.hash = "#/courses";
    render(<App />);

    expect(screen.getAllByText(/AI For CS and CMA's/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/AI for Students - Basic/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Excel for Students - Advanced/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Power BI for Students - Advanced/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 10000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 2500\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 20000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Rs\. 5000\/- \+GST/i).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /register to the course/i }).some((link) => link.getAttribute("href") === "https://rzp.io/rzp/F3l97wh")).toBe(true);
    expect(screen.getAllByRole("link", { name: /register to the course/i }).some((link) => link.getAttribute("href") === "https://rzp.io/rzp/Br058C5")).toBe(true);
    expect(screen.queryByLabelText(/^name$/i)).not.toBeInTheDocument();
  });
});
