import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, it, expect } from "vitest";

describe("Homepage Component", () => {
  it("renders main heading", () => {
    render(<App />);
    const heading = screen.getByText(/OptixDigitalAI/i);
    expect(heading).toBeVisible();
  });

  it("shows under development message", () => {
    render(<App />);
    const message = screen.getByText(
      /Our website is currently under development/i
    );
    expect(message).toBeVisible();
  });
});
