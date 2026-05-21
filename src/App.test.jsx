import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import App, { faqs, navItems, processSteps, products, services, solutionAreas } from "./App.jsx";
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
});
