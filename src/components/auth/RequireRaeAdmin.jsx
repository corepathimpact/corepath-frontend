import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAuth, isAuthenticated } from "../../services/authStorage";

export default function RequireRaeAdmin({ children }) {
  const location = useLocation();

  if (!isAuthenticated()) {
    const next = `${location.pathname}${location.search || ""}`;
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />;
  }

  const auth = getAuth();
  const role = auth?.user?.raeRole || null;

  if (!role) {
    return (
      <section className="bg-white text-gray-800 font-inter">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h1 className="text-xl font-extrabold text-teal-900">
              RAE Admin Access Required
            </h1>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              This console is admin-only. For this demo, sign in with an email
              containing one of:
            </p>
            <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
              <li>
                <span className="font-semibold">+rae-creator</span> (Content
                Creator)
              </li>
              <li>
                <span className="font-semibold">+rae-reviewer</span> (Reviewer)
              </li>
              <li>
                <span className="font-semibold">+rae-governance</span>{" "}
                (Governance Admin)
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              Example: <span className="font-mono">you+rae-governance@example.com</span>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return children;
}


