// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// JSDOM doesn't implement IntersectionObserver.
// Framer Motion (and other libs) may rely on it for in-view animations.
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// JSDOM doesn't implement scrollTo.
Object.defineProperty(window, "scrollTo", {
  writable: true,
  configurable: true,
  value: () => {},
});

// Framer Motion relies on browser APIs + style parsing that JSDOM doesn't fully support.
// For unit tests, mock it to simple passthrough components.
jest.mock("framer-motion", () => {
  const React = require("react");

  const MOTION_ONLY_PROPS = new Set([
    "animate",
    "initial",
    "exit",
    "transition",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileInView",
    "viewport",
    "layout",
    "layoutId",
    "drag",
    "dragConstraints",
    "dragElastic",
    "dragMomentum",
    "dragTransition",
    "onUpdate",
    "onAnimationStart",
    "onAnimationComplete",
    "onViewportEnter",
    "onViewportLeave",
  ]);

  const stripMotionProps = (props) => {
    if (!props) return props;
    const cleaned = {};
    for (const [key, value] of Object.entries(props)) {
      if (MOTION_ONLY_PROPS.has(key)) continue;
      cleaned[key] = value;
    }
    return cleaned;
  };

  const passthrough = (Tag) =>
    React.forwardRef(({ children, ...props }, ref) => {
      const domProps = stripMotionProps(props);
      return React.createElement(Tag, { ...domProps, ref }, children);
    });

  const motion = new Proxy(
    {},
    {
      get: (_target, key) => {
        const tag = typeof key === "string" ? key : "div";
        return passthrough(tag);
      },
    }
  );

  const createControls = () => ({
    start: () => Promise.resolve(),
    stop: () => {},
    set: () => {},
  });

  return {
    __esModule: true,
    motion,
    AnimatePresence: ({ children }) =>
      React.createElement(React.Fragment, null, children),
    useAnimation: createControls,
    useAnimationControls: createControls,
    useReducedMotion: () => false,
  };
});
