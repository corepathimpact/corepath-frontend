import React, { useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import { mockCoursesByTab } from "./mock/backofficeMock";

function ProgressBar({ pct }) {
  const safe = Math.max(0, Math.min(100, Number(pct || 0)));
  const stepped = Math.round(safe / 5) * 5;
  const widthClassByStep = {
    0: "w-[0%]",
    5: "w-[5%]",
    10: "w-[10%]",
    15: "w-[15%]",
    20: "w-[20%]",
    25: "w-[25%]",
    30: "w-[30%]",
    35: "w-[35%]",
    40: "w-[40%]",
    45: "w-[45%]",
    50: "w-[50%]",
    55: "w-[55%]",
    60: "w-[60%]",
    65: "w-[65%]",
    70: "w-[70%]",
    75: "w-[75%]",
    80: "w-[80%]",
    85: "w-[85%]",
    90: "w-[90%]",
    95: "w-[95%]",
    100: "w-[100%]",
  };
  const w = widthClassByStep[stepped] || "w-[0%]";
  return (
    <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
      <div className={`h-2 bg-teal-700 ${w}`} />
    </div>
  );
}

export default function CoursesPage() {
  const tabs = useMemo(() => ["VDP", "VDP-CC", "VDL"], []);
  const [tab, setTab] = useState(tabs[0]);

  const courses = mockCoursesByTab[tab] || [];

  return (
    <div>
      <SectionHeader
        title="Courses"
        subtitle="Course cards (placeholder progress + status)."
        right={
          <div className="flex items-center gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`h-9 px-4 rounded-xl text-xs font-extrabold tracking-wide transition ${
                  tab === t ? "bg-teal-900 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        }
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {courses.map((c) => (
          <Card
            key={c.name}
            title={c.name}
            subtitle={`Status: ${c.status}`}
            actions={
              <button className="h-9 px-3 rounded-xl bg-teal-900 text-white text-sm font-semibold hover:bg-teal-800">
                {c.cta}
              </button>
            }
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>Progress</span>
                <span className="font-bold">{c.progressPct}%</span>
              </div>
              <ProgressBar pct={c.progressPct} />
            </div>
          </Card>
        ))}
        {courses.length === 0 ? (
          <Card title="No courses" subtitle="Placeholder">
            <div className="text-sm text-slate-600">No courses available for this tab.</div>
          </Card>
        ) : null}
      </div>
    </div>
  );
}


