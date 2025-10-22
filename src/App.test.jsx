// App.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

// Mock all lazy-loaded components using Vitest
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
vi.mock("./components/views/ContactpageView", () => ({
  default: () => <div>Contact</div>,
}));

vi.mock("./components/views/PricingpageView", () => ({
  default: () => <div>Pricing</div>,
}));
vi.mock("./components/views/CareerpageView", () => ({
  default: () => <div>Career</div>,
}));
vi.mock("./components/base/TermsAndCondition", () => ({
  default: () => <div>Terms</div>,
}));
vi.mock("./components/base/PrivacyPolicy", () => ({
  default: () => <div>Privacy</div>,
}));
vi.mock("./components/base/Chatbot", () => ({
  default: () => <div>Chatbot</div>,
}));

describe("App", () => {
  it("renders Header and Footer", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText("Header")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Footer")).toBeInTheDocument());
  });

  it("renders Home route by default", async () => {
    render(<App />);
    await waitFor(() => expect(screen.getByText("Home")).toBeInTheDocument());
  });

  it("renders About page", async () => {
    window.history.pushState({}, "", "/about");
    render(<App />);
    await waitFor(() => expect(screen.getByText("About")).toBeInTheDocument());
  });

  it("renders Services page", async () => {
    window.history.pushState({}, "", "/services");
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Services")).toBeInTheDocument()
    );
  });

  it("renders Contact page", async () => {
    window.history.pushState({}, "", "/contact");
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Contact")).toBeInTheDocument()
    );
  });

  it("renders Pricing page", async () => {
    window.history.pushState({}, "", "/pricing");
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Pricing")).toBeInTheDocument()
    );
  });

  it("renders Terms page", async () => {
    window.history.pushState({}, "", "/terms-and-conditions");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Terms")).toBeInTheDocument());
  });

  it("renders Privacy page", async () => {
    window.history.pushState({}, "", "/privacy-policy");
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Privacy")).toBeInTheDocument()
    );
  });

  it("renders Career page", async () => {
    window.history.pushState({}, "", "/career");
    render(<App />);
    await waitFor(() => expect(screen.getByText("Career")).toBeInTheDocument());
  });

  it("renders Chatbot globally", async () => {
    render(<App />);
    await waitFor(() =>
      expect(screen.getByText("Chatbot")).toBeInTheDocument()
    );
  });

  it("scrolls to top on route change", async () => {
    const scrollToSpy = vi
      .spyOn(window, "scrollTo")
      .mockImplementation(() => {});
    window.history.pushState({}, "", "/about");
    render(<App />);
    await waitFor(() => expect(scrollToSpy).toHaveBeenCalledWith({ top: 0 }));
    scrollToSpy.mockRestore();
  });
});
