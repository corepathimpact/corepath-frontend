import React from "react";

export default function StatCard({ label, value, subvalue, tone = "neutral", className = "" }) {
  const toneClass =
    tone === "good"
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : tone === "warn"
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : tone === "bad"
      ? "border-rose-200 bg-rose-50 text-rose-900"
      : "border-slate-200 bg-white text-slate-900";

  return (
    <div className={`rounded-2xl border p-4 ${toneClass} ${className}`}>
      <div className="text-[11px] uppercase tracking-widest font-bold opacity-70">{label}</div>
      <div className="mt-2 text-xl font-extrabold">{value}</div>
      {subvalue ? <div className="mt-1 text-xs opacity-80">{subvalue}</div> : null}
    </div>
  );
}


