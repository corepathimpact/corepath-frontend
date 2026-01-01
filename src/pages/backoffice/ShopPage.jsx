import React, { useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockProducts } from "./mock/backofficeMock";
import { useEligibility } from "../../context/EligibilityContext";

function EligibilityReasons({ reasons }) {
  if (!Array.isArray(reasons) || reasons.length === 0) return null;
  return (
    <ul className="mt-3 list-disc pl-5 text-xs text-slate-700">
      {reasons.map((r, idx) => (
        <li key={`${idx}-${r}`}>{r}</li>
      ))}
    </ul>
  );
}

export default function ShopPage() {
  const eligibility = useEligibility();
  const [filter, setFilter] = useState("ALL");
  const filters = useMemo(() => ["ALL", "Featured", "Popular", "New", "Add-on"], []);

  const rows = mockProducts.filter((p) => filter === "ALL" || p.tag === filter);

  return (
    <div>
      <SectionHeader
        title="Shop"
        subtitle="Product grid (placeholders; purchase flows wired later)."
        right={
          <div className="flex items-center gap-2">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-500">
              Filters
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-9 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            >
              {filters.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        }
      />

      {/* Bot purchase eligibility (UI-level only) */}
      <div className="mt-6">
        <Card
          title="Trading Bot Purchase"
          subtitle="Eligibility is read-only and provided by the backend (mocked in Phase 4)."
          actions={
            <button
              disabled={eligibility ? eligibility.canPurchaseBot === false : true}
              className={`h-10 px-5 rounded-full text-sm font-semibold ${
                eligibility && eligibility.canPurchaseBot === false
                  ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                  : eligibility
                  ? "bg-teal-900 text-white hover:bg-teal-800"
                  : "bg-slate-200 text-slate-500 cursor-not-allowed"
              }`}
            >
              Purchase Bot
            </button>
          }
        >
          {eligibility ? (
            eligibility.canPurchaseBot ? (
              <div className="text-sm text-slate-700">
                Eligible to purchase.{" "}
                {eligibility.maxBotTier ? (
                  <span>
                    Max tier: <span className="font-bold">{eligibility.maxBotTier}</span>
                  </span>
                ) : null}
              </div>
            ) : (
              <div className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                <div className="font-extrabold">Bot purchase locked</div>
                <div className="mt-1">
                  {eligibility.maxBotTier ? (
                    <span>
                      Eligible up to Tier <span className="font-bold">{eligibility.maxBotTier}</span>
                    </span>
                  ) : (
                    <span>Eligibility tier will be provided by the backend.</span>
                  )}
                </div>
                <EligibilityReasons reasons={eligibility.reasons} />
              </div>
            )
          ) : (
            <div className="text-sm text-slate-600">Loading eligibility…</div>
          )}
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {rows.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            subtitle={`Tag: ${p.tag}`}
            actions={
              <button className="h-9 px-3 rounded-xl bg-teal-900 text-white text-sm font-semibold hover:bg-teal-800">
                Purchase
              </button>
            }
          >
            <div className="text-sm text-slate-700">
              Price: <span className="font-bold">{p.price}</span>
            </div>
            <div className="mt-3 h-28 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-xs text-slate-500">
              Product image placeholder
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


