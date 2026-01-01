import React, { useMemo, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { clearAuth, getAuth } from "../services/authStorage";
import { useBackoffice } from "../context/BackofficeContext";

const NAV_TABS = [
  { label: "HOME", to: "/home" },
  { label: "WELCOME TO COREPATH IMPACT", to: "/welcome" },
  { label: "MY OFFICE", to: "/my-office" },
  { label: "SOLUTIONS", to: "/solutions" },
  { label: "COURSES", to: "/courses" },
  { label: "ACCOUNT OVERVIEW", to: "/account-overview" },
  { label: "SHOP", to: "/shop" },
  { label: "PROMOTIONS", to: "/promotions" },
];

export default function BackofficeLayout({ children }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const { user: boUser } = useBackoffice() || {};

  const displayUser = useMemo(() => {
    const email = auth?.user?.email || "user@corepathimpact.com";
    const fullName =
      boUser?.fullName || auth?.user?.fullName || "CorePath Member";
    return { email, fullName };
  }, [auth, boUser]);

  const [language, setLanguage] = useState(boUser?.language || "EN");
  const [country, setCountry] = useState(boUser?.country || "Kenya");
  const [menuOpen, setMenuOpen] = useState(false);

  const onLogout = () => {
    clearAuth();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Utility Bar (fixed) */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xs uppercase tracking-widest font-extrabold text-teal-900">
              CorePath Impact
            </div>
            <div className="hidden md:block text-xs text-slate-500">
              Backoffice (Parent)
            </div>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="h-9 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            >
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="h-9 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            >
              <option value="Kenya">Kenya</option>
              <option value="US">US</option>
              <option value="NG">Nigeria</option>
              <option value="GB">UK</option>
            </select>

            <div className="hidden md:flex flex-col items-end leading-tight">
              <div className="text-sm font-extrabold">{displayUser.fullName}</div>
              <div className="text-xs text-slate-500">{displayUser.email}</div>
            </div>

            <div className="relative">
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="h-9 w-9 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-sm font-extrabold"
                aria-label="Open user menu"
              >
                {String(displayUser.fullName || "U").trim().slice(0, 1).toUpperCase()}
              </button>

              {menuOpen ? (
                <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/account-overview");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      navigate("/account-overview");
                    }}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-slate-50"
                  >
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-rose-700 hover:bg-rose-50"
                  >
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="pt-14">
        <div className="border-b border-slate-200 bg-white">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6">
            <div className="h-14 flex items-center justify-between gap-4">
              <nav className="flex items-center gap-2 overflow-auto whitespace-nowrap">
                {NAV_TABS.map((t) => (
                  <NavLink
                    key={t.to}
                    to={t.to}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-xl text-xs font-extrabold tracking-wide transition ${
                        isActive
                          ? "bg-teal-900 text-white"
                          : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {t.label}
                  </NavLink>
                ))}
              </nav>

              <div className="hidden lg:flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-200 border border-slate-300" />
                <div className="text-sm font-extrabold">{displayUser.fullName}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <main className="max-w-[1320px] mx-auto px-4 sm:px-6 py-8">
          {children ? children : <Outlet />}
        </main>
      </div>
    </div>
  );
}


