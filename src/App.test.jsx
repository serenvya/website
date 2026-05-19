import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App, { faqs, navItems, processSteps, services, solutionAreas } from "./App.jsx";
import "@testing-library/jest-dom/vitest";

describe("Serenvya website content", () => {
  it("has complete navigation", () => {
    expect(navItems.map((item) => item.label)).toEqual([
      "Home",
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
});
