import React, { useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockProducts } from "./mock/backofficeMock";

export default function ShopPage() {
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


