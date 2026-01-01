import React, { useEffect, useMemo, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { getAuth } from "../../../services/authStorage";
import { canDraft } from "../../../utils/raeAdminRoles";

function dayPillClass(status) {
  if (status === "APPROVED") return "bg-emerald-600 text-white";
  if (status === "PENDING") return "bg-amber-500 text-white";
  return "bg-slate-200 text-slate-800";
}

export default function DailyExplanations() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;
  const [valueCode, setValueCode] = useState("RESPECT");
  const [dayIndex, setDayIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    angleTag: "",
    ageMin: 4,
    ageMax: 9,
    language: "EN",
    part_1: "",
    part_2: "",
    part_3: "",
  });

  const params = useMemo(
    () => ({
      valueCode,
      resourceType: "VALUE_DAILY_EXPLANATION",
      logicArea: "AREA_03",
      engine: "VDP_APAT",
      language: form.language,
      limit: 500,
      offset: 0,
    }),
    [valueCode, form.language]
  );

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        const res = await raeAdminApi.listResources(params);
        if (!mounted) return;
        setRows(res.data.data.rows || []);
      } catch (e) {
        if (!mounted) return;
        setError(e?.response?.data?.message || e.message || "Failed to load explanations.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [params]);

  const dayStatusMap = useMemo(() => {
    const map = new Map();
    for (const r of rows) {
      if (r.dayIndex) map.set(Number(r.dayIndex), r.approvalStatus);
    }
    return map;
  }, [rows]);

  const onSaveDraft = async () => {
    try {
      setError("");
      await raeAdminApi.createOrUpdateExplanation({
        valueCode,
        dayIndex,
        angleTag: form.angleTag,
        ageMin: Number(form.ageMin),
        ageMax: Number(form.ageMax),
        language: form.language,
        contentParts: {
          part_1: { text: form.part_1 },
          part_2: { text: form.part_2 },
          part_3: { text: form.part_3 },
        },
      });
      // Refresh list
      const res = await raeAdminApi.listResources(params);
      setRows(res.data.data.rows || []);
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Failed to save draft.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Daily Value Explanations (AREA_03)</h2>
      <p className="mt-1 text-sm text-slate-600">
        A value is incomplete until all 21 days exist and are approved. Day index is locked (1–21).
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={valueCode}
          onChange={(e) => setValueCode(e.target.value.toUpperCase())}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Value (e.g., RESPECT)"
        />
        <select
          value={form.language}
          onChange={(e) => setForm((f) => ({ ...f, language: e.target.value }))}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="EN">EN</option>
        </select>
        <div className="text-sm text-slate-600 flex items-center">
          Status:{" "}
          <span className="ml-2 font-semibold">
            Day {dayIndex} — {dayStatusMap.get(dayIndex) || "MISSING"}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {Array.from({ length: 21 }).map((_, i) => {
          const d = i + 1;
          const status = dayStatusMap.get(d) || "MISSING";
          return (
            <button
              key={d}
              onClick={() => setDayIndex(d)}
              className={`px-3 py-1 rounded-full text-xs font-bold ${dayPillClass(status)} ${
                d === dayIndex ? "ring-2 ring-teal-800" : ""
              }`}
              title={status}
            >
              Day {d}
            </button>
          );
        })}
      </div>

      {loading ? <div className="mt-6 text-sm text-slate-600">Loading…</div> : null}
      {error ? <div className="mt-6 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">{error}</div> : null}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            value={form.angleTag}
            onChange={(e) => setForm((f) => ({ ...f, angleTag: e.target.value }))}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm md:col-span-3"
            placeholder="Angle / Perspective (required)"
          />
          <input
            type="number"
            value={form.ageMin}
            onChange={(e) => setForm((f) => ({ ...f, ageMin: e.target.value }))}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Age min"
          />
          <input
            type="number"
            value={form.ageMax}
            onChange={(e) => setForm((f) => ({ ...f, ageMax: e.target.value }))}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
            placeholder="Age max"
          />
        </div>

        <div className="mt-4 space-y-3">
          <textarea
            value={form.part_1}
            onChange={(e) => setForm((f) => ({ ...f, part_1: e.target.value }))}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[90px]"
            placeholder="Content Part 1 (NEXT 1)"
          />
          <textarea
            value={form.part_2}
            onChange={(e) => setForm((f) => ({ ...f, part_2: e.target.value }))}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[90px]"
            placeholder="Content Part 2 (NEXT 2)"
          />
          <textarea
            value={form.part_3}
            onChange={(e) => setForm((f) => ({ ...f, part_3: e.target.value }))}
            className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[90px]"
            placeholder="Content Part 3 (CHECKBOX CONFIRMATION)"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={onSaveDraft}
            disabled={!canDraft(role)}
            className={`px-5 py-2 rounded-full text-sm font-semibold ${
              canDraft(role) ? "bg-teal-800 text-white hover:bg-teal-700" : "bg-slate-200 text-slate-500"
            }`}
          >
            Save Draft
          </button>
          <button
            onClick={onSaveDraft}
            disabled={!canDraft(role)}
            className={`px-5 py-2 rounded-full text-sm font-semibold ${
              canDraft(role) ? "border border-teal-800 text-teal-900 hover:bg-teal-50" : "border border-slate-200 text-slate-400"
            }`}
            title="Submit for review (draft remains pending until approved)"
          >
            Submit for Review
          </button>
          {!canDraft(role) ? (
            <div className="text-xs text-slate-500 flex items-center">
              Drafting restricted by role.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}


