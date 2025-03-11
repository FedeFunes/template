import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";
import { TestingProvider } from "@/components";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <TestingProvider>
        <Page />
      </TestingProvider>
    );

    const heading = screen.getByText("Hello World!");

    expect(heading).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <TestingProvider>
        <Page />
      </TestingProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
