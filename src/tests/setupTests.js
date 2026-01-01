import "@testing-library/jest-dom";
import "whatwg-fetch";
import { server } from "./mocks/server";

// Some dependencies expect TextEncoder/TextDecoder in the test runtime.
// eslint-disable-next-line no-undef
if (typeof global.TextEncoder === "undefined") {
  // eslint-disable-next-line global-require
  const { TextEncoder, TextDecoder } = require("util");
  // eslint-disable-next-line no-undef
  global.TextEncoder = TextEncoder;
  // eslint-disable-next-line no-undef
  global.TextDecoder = TextDecoder;
}

// Recharts uses ResizeObserver (via ResponsiveContainer). JSDOM doesn't implement it.
class MockResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

Object.defineProperty(global, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

// MSW lifecycle
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


