import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import StatCard from "../../components/ui/StatCard";
import { mockPromotions } from "./mock/backofficeMock";

export default function PromotionsPage() {
  return (
    <div>
      <SectionHeader
        title="Promotions"
        subtitle="Active promotions, referral bonuses, and campaigns (placeholders)."
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <Card title="Referral Bonuses" subtitle="Placeholder">
            <StatCard label="Active bonuses" value="—" />
          </Card>
        </div>
        <div className="lg:col-span-8">
          <Card title="Campaigns" subtitle="Placeholder campaign cards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mockPromotions.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-extrabold text-slate-900">{p.title}</div>
                    <div className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
                      {p.status}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{p.desc}</div>
                  <div className="mt-4">
                    <button className="h-9 px-4 rounded-xl bg-teal-900 text-white text-sm font-semibold hover:bg-teal-800">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}


