import React, { useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { canPreview } from "../../../utils/raeAdminRoles";
import { getAuth } from "../../../services/authStorage";

export default function PreviewSimulation() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;

  const [form, setForm] = useState({
    engine: "VDP_APAT",
    license: "VDP",
    language: "EN",
    valueCode: "RESPECT",
    dayIndex: 7,
    age: 8,
    predisposition: "BLUE",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState(null);

  const previewOne = async (resourceType, logicArea) => {
    const res = await raeAdminApi.preview({
      engine: form.engine,
      userId: "550e8400-e29b-41d4-a716-4466554400aa",
      childId: null,
      license: form.license,
      resourceType,
      logicArea,
      valueCode: form.valueCode,
      dayIndex: Number(form.dayIndex),
      age: Number(form.age),
      predisposition: form.predisposition,
      language: form.language,
      cycleId: null,
    });
    return res.data.data;
  };

  const onPreview = async () => {
    try {
      setLoading(true);
      setError("");
      setOutput(null);

      // Preview multiple logic areas by calling RAE preview per resource type.
      const area03 = await previewOne("VALUE_DAILY_EXPLANATION", "AREA_03");
      const area06 = await previewOne("BIBLE_VERSE", "AREA_06");

      // Prayer may not exist in content set yet; treat failure as explicit placeholder.
      let area08 = null;
      try {
        area08 = await previewOne("PRAYER", "AREA_08");
      } catch (e) {
        area08 = { placeholder: true, message: "No PRAYER resource available for this context." };
      }

      setOutput({ area03, area06, area08 });
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Preview failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Preview & Simulation</h2>
      <p className="mt-1 text-sm text-slate-600">
        Governance-safe preview: “What would a user see?” Preview does not log allocations.
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input value={form.valueCode} onChange={(e) => setForm((f) => ({ ...f, valueCode: e.target.value.toUpperCase() }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Value (e.g., RESPECT)" />
        <input type="number" value={form.dayIndex} onChange={(e) => setForm((f) => ({ ...f, dayIndex: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Day index (1–21)" />
        <input type="number" value={form.age} onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Age" />
        <input value={form.predisposition} onChange={(e) => setForm((f) => ({ ...f, predisposition: e.target.value.toUpperCase() }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Predisposition (e.g., BLUE)" />
        <select value={form.language} onChange={(e) => setForm((f) => ({ ...f, language: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option value="EN">EN</option>
        </select>
        <button
          onClick={onPreview}
          disabled={!canPreview(role) || loading}
          className={`rounded-xl px-4 py-2 text-sm font-semibold ${
            canPreview(role) ? "bg-teal-800 text-white hover:bg-teal-700" : "bg-slate-200 text-slate-500"
          }`}
        >
          {loading ? "Previewing…" : "Preview"}
        </button>
      </div>

      {error ? <div className="mt-4 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">{error}</div> : null}

      {output ? (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-600">AREA_03 — Value Teaching</div>
            <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(output.area03, null, 2)}</pre>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-600">AREA_06 — Bible Verse</div>
            <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(output.area06, null, 2)}</pre>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="text-xs uppercase tracking-widest font-bold text-slate-600">AREA_08 — Prayer</div>
            <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(output.area08, null, 2)}</pre>
          </div>
        </div>
      ) : null}
    </div>
  );
}


