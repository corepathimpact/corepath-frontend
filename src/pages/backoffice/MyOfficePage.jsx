import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import StatCard from "../../components/ui/StatCard";
import { mockChildren } from "./mock/backofficeMock";

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

function ChildCard({ child }) {
  return (
    <Card
      className="h-full"
      title={child.name}
      subtitle={`Predisposition: ${child.predisposition}`}
      actions={
        <button className="h-9 px-3 rounded-xl bg-teal-900 text-white text-sm font-semibold hover:bg-teal-800">
          Dashboard
        </button>
      }
    >
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Values Trained" value={String(child.valuesTrained)} />
          <StatCard label="Current Value" value={child.currentValue} />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Progress</span>
            <span className="font-bold">{child.progressPct}%</span>
          </div>
          <div className="mt-2">
            <ProgressBar pct={child.progressPct} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Average Score" value={String(child.averageScore)} />
          <StatCard label="Common Card" value={child.commonCard} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Area Struggled In" value={child.areaStruggledIn} tone="warn" />
          <StatCard label="Values Not Covered" value={String(child.valuesNotCovered)} tone="warn" />
        </div>
      </div>
    </Card>
  );
}

export default function MyOfficePage() {
  return (
    <div>
      <SectionHeader title="My Office" subtitle="Core page (mock placeholders only)." />

      {/* SECTION A: Top CTA */}
      <div className="mt-6">
        <Card
          className="bg-gradient-to-br from-teal-950 via-teal-800 to-teal-700 text-white border-teal-900"
          title="Continue with Today’s Value Training"
          subtitle="Complete your 10 logic areas"
          actions={
            <button className="h-10 px-5 rounded-full bg-white text-teal-950 font-extrabold hover:bg-teal-50">
              Continue
            </button>
          }
        >
          <div className="text-sm text-teal-100">
            Placeholder — will be driven by the VDP daily execution orchestrator.
          </div>
        </Card>
      </div>

      {/* SECTION B: Upper Grid (3 Columns) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4 space-y-4">
          <Card title="My VDL Training Progress" subtitle="Placeholder">
            <div className="h-20 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
              Progress placeholder
            </div>
          </Card>
          <Card title="My Performance" subtitle="Placeholder">
            <StatCard label="APAT (Today)" value="—" />
          </Card>
          <Card title="My Certifications" subtitle="Placeholder">
            <StatCard label="Status" value="—" />
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card title="My Financials (summary)" subtitle="Placeholder">
            <StatCard label="Wallet" value="—" />
          </Card>
          <Card title="My Impact Growth" subtitle="Placeholder">
            <StatCard label="ITS0 → ITS4" value="—" />
          </Card>
          <Card title="My PAG" subtitle="Placeholder">
            <StatCard label="PAG ID" value="—" />
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card title="Account Overview" subtitle="Placeholder">
            <div className="text-sm text-slate-700">Profile, enrollment, and links.</div>
          </Card>
          <Card title="Account Settings" subtitle="Placeholder">
            <div className="text-sm text-slate-700">Preferences and security.</div>
          </Card>
        </div>
      </div>

      {/* SECTION C: Parent Summary Strip */}
      <div className="mt-8">
        <SectionHeader title="Parent Summary" subtitle="High-level stats (placeholders)." />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <StatCard label="Certification Status" value="—" />
          <StatCard label="Current APAT Score" value="—" />
          <StatCard label="Average APAT Score" value="—" />
          <StatCard label="Current Value Training" value="—" />
        </div>
      </div>

      {/* SECTION D: Children’s Corner */}
      <div className="mt-8">
        <SectionHeader title="Children’s Corner" subtitle="Child cards (mock placeholders)." />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {mockChildren.map((c) => (
            <ChildCard key={c.id} child={c} />
          ))}
        </div>
      </div>

      {/* SECTION E: Lower Grid (4 Columns) */}
      <div className="mt-8">
        <SectionHeader title="Systems Snapshot" subtitle="PAG / Impact / Financials / Rankings (placeholders)." />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <Card title="PAG Details" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between"><span>PAG ID</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Coach Name</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Members</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Avg Score (Today/Week/Month)</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>PAG Wallet</span><span className="font-bold">—</span></div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card title="Impact Growth" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between"><span>Team summary</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>ITS0 → ITS4</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Active Members</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Inactive Members</span><span className="font-bold">—</span></div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card title="Financials" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between"><span>Wallet summary</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Sources</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>History</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Bot Purchases</span><span className="font-bold">—</span></div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card title="Rankings" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="font-bold">Leaderboard</div>
                <div className="text-slate-600">—</div>
                <div className="font-bold mt-2">PAG Performance Rankings</div>
                <div className="text-slate-600">—</div>
                <div className="font-bold mt-2">Coach Performance Rankings</div>
                <div className="text-slate-600">—</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


