// App.test.jsx
import React, { Suspense } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AppContent from "./App";

// --- Mock all lazy-loaded components ---
vi.mock("./components/base/Header", () => ({
  default: () => <div>Header</div>,
}));
vi.mock("./components/base/Footer", () => ({
  default: () => <div>Footer</div>,
}));
vi.mock("./components/views/HomepageView", () => ({
  default: () => <div>Home</div>,
}));
vi.mock("./components/views/AboutpageView", () => ({
  default: () => <div>About</div>,
}));
vi.mock("./components/views/ServicepageView", () => ({
  default: () => <div>Services</div>,
}));
vi.mock("./components/views/DesigningpageView", () => ({
  default: () => <div>Designing</div>,
}));
vi.mock("./components/views/DevelopmentpageView", () => ({
  default: () => <div>Development</div>,
}));
vi.mock("./components/views/MarketingpageView", () => ({
  default: () => <div>Marketing</div>,
}));
vi.mock("./components/views/PortfoliopageView", () => ({
  default: () => <div>Portfolio</div>,
}));
vi.mock("./components/views/ContactpageView", () => ({
  default: () => <div>Contact</div>,
}));
vi.mock("./components/views/PricingpageView", () => ({
  default: () => <div>Pricing</div>,
}));
vi.mock("./components/views/CareerpageView", () => ({
  default: () => <div>Career</div>,
}));
vi.mock("./components/views/TermsAndConditionpageView", () => ({
  default: () => <div>Terms</div>,
}));
vi.mock("./components/views/PrivacyPolicypageView", () => ({
  default: () => <div>Privacy</div>,
}));
vi.mock("./components/views/ChatbotpageView", () => ({
  default: () => <div>Chatbot</div>,
}));

// --- Helper function: wrap App in Suspense ---
const renderWithSuspense = (ui) =>
  render(<Suspense fallback={<div>Loading...</div>}>{ui}</Suspense>);

describe("AppContent Routing & Layout", () => {
  it("renders Header and Footer globally", async () => {
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(screen.getByText("Header")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Footer")).toBeInTheDocument());
  });

  it("renders Home route by default", async () => {
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(screen.getByText("Home")).toBeInTheDocument());
  });

  it("renders About page", async () => {
    window.history.pushState({}, "", "/about");
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(screen.getByText("About")).toBeInTheDocument());
  });

  it("renders Designing subpage", async () => {
    window.history.pushState({}, "", "/services/designing");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Designing")).toBeInTheDocument()
    );
  });

  it("renders Marketing subpage", async () => {
    window.history.pushState({}, "", "/services/marketing");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Marketing")).toBeInTheDocument()
    );
  });

  it("renders Portfolio page", async () => {
    window.history.pushState({}, "", "/portfolio");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Portfolio")).toBeInTheDocument()
    );
  });

  it("renders Contact page", async () => {
    window.history.pushState({}, "", "/contact");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Contact")).toBeInTheDocument()
    );
  });

  it("renders Pricing page", async () => {
    window.history.pushState({}, "", "/pricing");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Pricing")).toBeInTheDocument()
    );
  });

  it("renders Terms page", async () => {
    window.history.pushState({}, "", "/terms-and-conditions");
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(screen.getByText("Terms")).toBeInTheDocument());
  });

  it("renders Privacy page", async () => {
    window.history.pushState({}, "", "/privacy-policy");
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Privacy")).toBeInTheDocument()
    );
  });

  it("renders Career page", async () => {
    window.history.pushState({}, "", "/career");
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(screen.getByText("Career")).toBeInTheDocument());
  });

  it("renders Chatbot globally", async () => {
    renderWithSuspense(<AppContent />);
    await waitFor(() =>
      expect(screen.getByText("Chatbot")).toBeInTheDocument()
    );
  });

  it("scrolls to top on route change", async () => {
    const scrollToSpy = vi
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});
    window.history.pushState({}, "", "/about");
    renderWithSuspense(<AppContent />);
    await waitFor(() => expect(scrollToSpy).toHaveBeenCalledWith({ top: 0 }));
    scrollToSpy.mockRestore();
  });
});
