import React, { useEffect, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";

function StatCard({ label, value, tone = "neutral" }) {
  const toneClass =
    tone === "good"
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : tone === "warn"
      ? "border-amber-200 bg-amber-50 text-amber-900"
      : "border-slate-200 bg-white text-slate-900";

  return (
    <div className={`rounded-2xl border p-4 ${toneClass}`}>
      <div className="text-xs uppercase tracking-widest font-bold opacity-70">
        {label}
      </div>
      <div className="mt-2 text-2xl font-extrabold">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await raeAdminApi.dashboard({
          license: "VDP",
          engine: "VDP_APAT",
          language: "EN",
        });
        if (!mounted) return;
        setData(res.data.data);
      } catch (e) {
        if (!mounted) return;
        setError(
          e?.response?.data?.message || e.message || "Failed to load dashboard."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">
            RAE Governance Dashboard
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Governance health summary (not analytics). Read-only.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="mt-6 text-sm text-slate-600">Loading…</div>
      ) : error ? (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">
          {error}
        </div>
      ) : data ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="Active Values" value={data.activeValues} />
          <StatCard
            label="Values with full 21-day explanations"
            value={data.valuesWithFull21DayExplanations}
            tone="good"
          />
          <StatCard
            label="Values missing explanations"
            value={data.valuesMissingExplanations}
            tone={data.valuesMissingExplanations > 0 ? "warn" : "good"}
          />

          <StatCard
            label="Practices compliant (8–10)"
            value={data.practices?.compliant_8_10 ?? 0}
            tone="good"
          />
          <StatCard
            label="Practices below minimum"
            value={data.practices?.belowMinimum ?? 0}
            tone="warn"
          />
          <StatCard
            label="Practices above maximum"
            value={data.practices?.aboveMaximum ?? 0}
            tone="warn"
          />

          <StatCard
            label="Bible verses ≥ 30"
            value={data.bibleVerses?.atLeast30 ?? 0}
            tone="good"
          />
          <StatCard
            label="Bible verses < 30"
            value={data.bibleVerses?.below30 ?? 0}
            tone="warn"
          />

          <StatCard
            label="Pending approvals"
            value={data.approvals?.pending ?? 0}
            tone="warn"
          />
          <StatCard
            label="Rejected (last 30 days)"
            value={data.approvals?.rejectedLast30Days ?? 0}
          />
        </div>
      ) : null}
    </div>
  );
}
