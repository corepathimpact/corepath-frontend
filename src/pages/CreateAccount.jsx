import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAuth } from "../services/authStorage";
import { deriveRaeRoleFromEmail } from "../utils/raeAdminRoles";

export default function CreateAccount() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nextPath = useMemo(() => {
    const params = new URLSearchParams(location.search || "");
    const next = params.get("next");
    return next || "/backoffice";
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please choose a password.");
      return;
    }

    // Demo registration only: platform access token. No tool selection/activation here.
    const raeRole = deriveRaeRoleFromEmail(email.trim());
    setAuth({
      token: `demo-${Date.now()}`,
      user: { email: email.trim(), raeRole },
    });

    navigate(nextPath, { replace: true });
  };

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Create Account
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Create an account for platform access. Activate solutions after
            login.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-lg mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            Account registration does not activate any tools. You’ll choose and
            activate solutions from the protected Activation Hub.
          </p>

          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/30"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/30"
                placeholder="Choose a password"
                autoComplete="new-password"
              />
            </div>

            {error ? (
              <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-700 transition text-sm"
            >
              Create Account
            </button>

            <div className="flex items-center justify-between text-sm">
              <Link to="/login" className="text-teal-800 font-semibold">
                I already have an account
              </Link>
              <Link to="/get-started" className="text-gray-600">
                Back to Get Started
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
