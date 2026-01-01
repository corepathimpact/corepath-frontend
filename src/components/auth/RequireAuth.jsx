import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../services/authStorage";

export default function RequireAuth({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    const next = `${location.pathname}${location.search || ""}`;
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />;
  }

  return children;
}
