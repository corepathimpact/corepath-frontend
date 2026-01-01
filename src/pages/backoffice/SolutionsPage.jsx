import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockSolutions } from "./mock/backofficeMock";

export default function SolutionsPage() {
  return (
    <div>
      <SectionHeader title="Solutions" subtitle="Solution catalog (placeholder cards)." />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockSolutions.map((s) => (
          <Card
            key={s.title}
            title={s.title}
            subtitle={s.desc}
            actions={
              <button className="h-9 px-3 rounded-xl bg-teal-900 text-white text-sm font-semibold hover:bg-teal-800">
                {s.cta}
              </button>
            }
          >
            <div className="text-sm text-slate-700">
              Placeholder — enrollment, entitlements, and routing will be driven by backend.
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}


