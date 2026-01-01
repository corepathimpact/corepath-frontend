import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth } from "../services/authStorage";

export default function BackOffice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const auth = getAuth();
  const email = auth?.user?.email;
  const raeRole = auth?.user?.raeRole || null;

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Back Office
          </h1>
          <p className="text-base md:text-lg text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Welcome{email ? `, ${email}` : ""}. This is your protected portal.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Your account grants platform access only. Solutions/tools are
            activated separately as modular subscriptions.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-extrabold text-teal-900">
              Solution Activation
            </h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Activate the tools you need (and only the tools you need) from the
              Activation Hub.
            </p>
            <div className="mt-5">
              <Link
                to="/activate"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-700 transition text-sm"
              >
                Go to Activation Hub
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-extrabold text-teal-900">Dashboard</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Your personalized dashboards will appear here.
            </p>
            <div className="mt-5">
              <span className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm">
                Coming soon
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
            <h2 className="text-lg font-extrabold text-teal-900">RAE Admin</h2>
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">
              Governed content authority console (admin-only). Manage 21-day
              explanations, practices, spiritual content, approvals, previews,
              and audit logs.
            </p>
            <div className="mt-5">
              {raeRole ? (
                <Link
                  to="/rae-admin"
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-700 transition text-sm"
                >
                  Open RAE Admin
                </Link>
              ) : (
                <span className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-semibold text-sm">
                  Restricted
                </span>
              )}
            </div>
            {!raeRole ? (
              <p className="mt-2 text-xs text-gray-500">
                Demo access: sign in with email containing{" "}
                <span className="font-mono">+rae-governance</span>,{" "}
                <span className="font-mono">+rae-reviewer</span>, or{" "}
                <span className="font-mono">+rae-creator</span>.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
