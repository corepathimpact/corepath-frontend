import React from "react";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import { getAuth } from "../../services/authStorage";

import Dashboard from "./screens/Dashboard";
import ContentLibrary from "./screens/ContentLibrary";
import DailyExplanations from "./screens/DailyExplanations";
import Practices from "./screens/Practices";
import SpiritualContent from "./screens/SpiritualContent";
import ApprovalQueue from "./screens/ApprovalQueue";
import PreviewSimulation from "./screens/PreviewSimulation";
import AuditLogs from "./screens/AuditLogs";
import GovernanceRules from "./screens/GovernanceRules";

const navItems = [
  { to: "dashboard", label: "Dashboard" },
  { to: "library", label: "Content Library" },
  { to: "explanations", label: "Daily Value Explanations (21-Day)" },
  { to: "practices", label: "Practices (Per Value)" },
  { to: "spiritual", label: "Spiritual Content" },
  { to: "approvals", label: "Approval Queue" },
  { to: "preview", label: "Preview & Simulation" },
  { to: "audit", label: "Audit Logs" },
  { to: "rules", label: "Governance Rules" },
];

export default function RaeAdminShell() {
  const auth = getAuth();
  const email = auth?.user?.email || "";
  const role = auth?.user?.raeRole || "—";

  return (
    <div className="min-h-[calc(100vh-140px)] bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  CorePath Impact — RAE Admin
                </div>
                <div className="text-lg font-extrabold text-teal-900">
                  Governed Content Authority Console
                </div>
              </div>
              <div className="text-xs text-slate-600">
                Logged in as: <span className="font-semibold">{email || "—"}</span>{" "}
                · Role: <span className="font-semibold">{role}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            <aside className="md:col-span-3 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50">
              <nav className="p-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
                        isActive
                          ? "bg-teal-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </aside>

            <main className="md:col-span-9 p-5">
              <Routes>
                <Route path="/" element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="library" element={<ContentLibrary />} />
                <Route path="explanations" element={<DailyExplanations />} />
                <Route path="practices" element={<Practices />} />
                <Route path="spiritual" element={<SpiritualContent />} />
                <Route path="approvals" element={<ApprovalQueue />} />
                <Route path="preview" element={<PreviewSimulation />} />
                <Route path="audit" element={<AuditLogs />} />
                <Route path="rules" element={<GovernanceRules />} />
                <Route path="*" element={<Navigate to="dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}


