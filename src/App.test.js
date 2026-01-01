import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders site header", () => {
  render(<App />);
  const banner = screen.getByRole("banner");
  expect(
    within(banner).getByRole("link", { name: /solutions/i })
  ).toBeInTheDocument();
  expect(
    within(banner).getByRole("link", { name: /login/i })
  ).toBeInTheDocument();
  expect(
    within(banner).getByRole("link", { name: /get started/i })
  ).toBeInTheDocument();
});
