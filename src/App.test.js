import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders site header", () => {
  render(<App />);
  const banner = screen.getByRole("banner");
  expect(
    within(banner).getByRole("link", { name: /vdc toolkit/i })
  ).toBeInTheDocument();
});
