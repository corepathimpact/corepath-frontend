// -------------------------------------------------------------
// ScrollToTop.js — Ensures every route loads from the top
// -------------------------------------------------------------
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top every time route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
