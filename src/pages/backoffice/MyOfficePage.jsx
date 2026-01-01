import React from "react";
import Card from "../../components/ui/Card";
import SectionHeader from "../../components/ui/SectionHeader";
import StatCard from "../../components/ui/StatCard";
import { useBackoffice } from "../../context/BackofficeContext";

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
  const { training, performance, financials, impact, pag, children, derived } =
    useBackoffice() || {};

  const apatToday = performance?.apatToday ?? 0;
  const apatAverage = performance?.apatAverage ?? 0;
  const walletLocked = Boolean(financials?.locked);
  const hasPag = Boolean(pag && pag.id);
  const hasChildren = Array.isArray(children) && children.length > 0;
  const trainingCompletionPct = derived?.trainingCompletionPct ?? 0;

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
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="Values Covered" value={`${training?.valuesCovered ?? 0}/${training?.totalValues ?? 0}`} />
              <StatCard label="Completion" value={`${trainingCompletionPct}%`} tone={trainingCompletionPct === 100 ? "good" : "neutral"} />
            </div>
            <div className="mt-3 text-sm text-slate-700">
              Current Value: <span className="font-bold">{training?.currentValue || "—"}</span>
            </div>
          </Card>
          <Card title="My Performance" subtitle="Placeholder">
            <div className="grid grid-cols-2 gap-3">
              <StatCard label="APAT Today" value={apatToday} tone={apatToday < 60 ? "warn" : "good"} />
              <StatCard label="APAT Average" value={apatAverage} />
            </div>
            {apatToday < 60 ? (
              <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                Low APAT warning (UI-only): catch up today.
              </div>
            ) : null}
          </Card>
          <Card title="My Certifications" subtitle="Placeholder">
            <StatCard label="Status" value="—" />
          </Card>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <Card title="My Financials (summary)" subtitle="Placeholder">
            <StatCard label="Wallet Balance" value={financials?.walletBalance ?? "—"} />
            {walletLocked ? (
              <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                Wallet Locked — Improve Learning Consistency
              </div>
            ) : null}
          </Card>
          <Card title="My Impact Growth" subtitle="Placeholder">
            <div className="space-y-2 text-sm text-slate-700">
              <div className="flex justify-between"><span>ITS0</span><span className="font-bold">{impact?.its0 ?? "—"}</span></div>
              <div className="flex justify-between"><span>ITS1</span><span className="font-bold">{impact?.its1 ?? "—"}</span></div>
              <div className="flex justify-between"><span>ITS2</span><span className="font-bold">{impact?.its2 ?? "—"}</span></div>
              <div className="flex justify-between"><span>ITS3</span><span className="font-bold">{impact?.its3 ?? "—"}</span></div>
              <div className="flex justify-between"><span>ITS4</span><span className="font-bold">{impact?.its4 ?? "—"}</span></div>
              <div className="mt-2 flex justify-between"><span>Active Members</span><span className="font-bold">{impact?.activeMembers ?? "—"}</span></div>
              <div className="flex justify-between"><span>Inactive Members</span><span className="font-bold">{impact?.inactiveMembers ?? "—"}</span></div>
            </div>
          </Card>
          <Card title="My PAG" subtitle="Placeholder">
            {hasPag ? (
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="PAG ID" value={pag.id} />
                <StatCard label="Coach" value={pag.coach} />
                <StatCard label="Members" value={pag.members} />
                <StatCard label="Wallet" value={pag.wallet} />
              </div>
            ) : (
              <div className="text-sm text-slate-600">
                No PAG assigned yet (empty state placeholder).
              </div>
            )}
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
          <StatCard label="Current APAT Score" value={apatToday} tone={apatToday < 60 ? "warn" : "good"} />
          <StatCard label="Average APAT Score" value={apatAverage} />
          <StatCard label="Current Value Training" value={training?.currentValue || "—"} />
        </div>
      </div>

      {/* SECTION D: Children’s Corner */}
      <div className="mt-8">
        <SectionHeader title="Children’s Corner" subtitle="Child cards (mock placeholders)." />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {hasChildren ? (
            children.map((c) => (
              <ChildCard
                key={c.id}
                child={{
                  name: c.name,
                  predisposition: c.predisposition,
                  valuesTrained: c.valuesTrained,
                  currentValue: c.currentValue,
                  progressPct: c.progress,
                  averageScore: c.averageScore,
                  commonCard: c.commonCard,
                  areaStruggledIn: c.struggledArea,
                  valuesNotCovered: c.valuesRemaining,
                }}
              />
            ))
          ) : (
            <Card title="No children yet" subtitle="Add Child placeholder (UI-only)">
              <div className="text-sm text-slate-700">
                You haven’t added any children yet. Add child onboarding will be wired in Phase 3.
              </div>
              <div className="mt-4">
                <button className="h-10 px-5 rounded-full bg-teal-900 text-white font-semibold hover:bg-teal-800">
                  Add Child
                </button>
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* SECTION E: Lower Grid (4 Columns) */}
      <div className="mt-8">
        <SectionHeader title="Systems Snapshot" subtitle="PAG / Impact / Financials / Rankings (placeholders)." />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-3 space-y-4">
            <Card title="PAG Details" subtitle="Placeholder">
              {hasPag ? (
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between"><span>PAG ID</span><span className="font-bold">{pag.id}</span></div>
                  <div className="flex justify-between"><span>Coach Name</span><span className="font-bold">{pag.coach}</span></div>
                  <div className="flex justify-between"><span>Members</span><span className="font-bold">{pag.members}</span></div>
                  <div className="flex justify-between"><span>Avg Score (Today/Week/Month)</span><span className="font-bold">{pag.scoreToday}/{pag.scoreWeek}/{pag.scoreMonth}</span></div>
                  <div className="flex justify-between"><span>PAG Wallet</span><span className="font-bold">{pag.wallet}</span></div>
                </div>
              ) : (
                <div className="text-sm text-slate-600">
                  No PAG assigned yet (empty state placeholder).
                </div>
              )}
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card title="Impact Growth" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between"><span>ITS0 → ITS4</span><span className="font-bold">{impact?.its0 ?? "—"} / {impact?.its1 ?? "—"} / {impact?.its2 ?? "—"} / {impact?.its3 ?? "—"} / {impact?.its4 ?? "—"}</span></div>
                <div className="flex justify-between"><span>Active Members</span><span className="font-bold">{impact?.activeMembers ?? "—"}</span></div>
                <div className="flex justify-between"><span>Inactive Members</span><span className="font-bold">{impact?.inactiveMembers ?? "—"}</span></div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card title="Financials" subtitle="Placeholder">
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between"><span>Wallet summary</span><span className="font-bold">{financials?.walletBalance ?? "—"}</span></div>
                <div className="flex justify-between"><span>Sources</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>History</span><span className="font-bold">—</span></div>
                <div className="flex justify-between"><span>Bot Purchases</span><span className="font-bold">—</span></div>
              </div>
              {walletLocked ? (
                <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                  Wallet Locked — Improve Learning Consistency
                </div>
              ) : null}
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


