import React from "react";

export default function GovernanceRules() {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Governance Rules (Read-only)</h2>
      <p className="mt-1 text-sm text-slate-600">
        This console is a governed content authority — not a CMS. No inline publishing, no quick edits, no bypass of approval.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 space-y-3 text-sm text-slate-700">
        <div>
          <div className="font-extrabold text-slate-900">Core</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>RAE is the sole authority over meaning-bearing content artifacts.</li>
            <li>Engines request allocations; RAE decides deterministically.</li>
            <li>No engine may embed or duplicate content artifacts.</li>
            <li>Allocation is server-side, deterministic, audit-reproducible.</li>
            <li>RAE must never score, judge, reward, or track behavior.</li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold text-slate-900">AREA_03 — 21-day explanations</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Exactly 21 explanations per value (dayIndex 1–21).</li>
            <li>Angle tag required; no repetition within cycle.</li>
            <li>Multi-part artifact: part_1 → part_2 → part_3 (stored together).</li>
            <li>No fallback: missing day-indexed content is a hard failure.</li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold text-slate-900">AREA_05 — Practices</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Fixed set: minimum 6, maximum 10 practices per value.</li>
            <li>Practices are not day-indexed and must not rotate daily.</li>
            <li>No deletion from UI (archive only through governance).</li>
          </ul>
        </div>

        <div>
          <div className="font-extrabold text-slate-900">Approval</div>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Creator ≠ Approver (self-approval forbidden).</li>
            <li>Decision is immutable; rejected content never allocates.</li>
            <li>New versions require re-approval.</li>
          </ul>
        </div>

        <div className="text-xs text-slate-500">
          Full governance source: `docs/RAE_Updated.md` (backend repo).
        </div>
      </div>
    </div>
  );
}


