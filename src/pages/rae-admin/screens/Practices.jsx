import React, { useEffect, useMemo, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { getAuth } from "../../../services/authStorage";
import { canDraft } from "../../../utils/raeAdminRoles";

export default function Practices() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;
  const [valueCode, setValueCode] = useState("RESPECT");
  const [language, setLanguage] = useState("EN");
  const [ageMin, setAgeMin] = useState(4);
  const [ageMax, setAgeMax] = useState(9);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [newPractice, setNewPractice] = useState({
    practiceText: "",
    difficultyLevel: 1,
  });

  const params = useMemo(
    () => ({
      valueCode,
      resourceType: "VALUE_PRACTICE_OPTION",
      logicArea: "AREA_05",
      engine: "VDP_APAT",
      language,
      limit: 200,
      offset: 0,
    }),
    [valueCode, language]
  );

  const refresh = async () => {
    const res = await raeAdminApi.listResources(params);
    setRows(res.data.data.rows || []);
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        await refresh();
      } catch (e) {
        if (!mounted) return;
        setError(
          e?.response?.data?.message || e.message || "Failed to load practices."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const count = rows.length;
  const canAddMore = count < 10;

  const onAdd = async () => {
    try {
      setError("");
      await raeAdminApi.addPractice({
        valueCode,
        practiceText: newPractice.practiceText,
        difficultyLevel: Number(newPractice.difficultyLevel),
        ageMin: Number(ageMin),
        ageMax: Number(ageMax),
        language,
      });
      setNewPractice({ practiceText: "", difficultyLevel: 1 });
      await refresh();
    } catch (e) {
      setError(
        e?.response?.data?.message || e.message || "Failed to add practice."
      );
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">
        Practices Management (AREA_05)
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Fixed practice set per value (no day binding). Add disabled at 10. No
        delete (archive via governance).
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          value={valueCode}
          onChange={(e) => setValueCode(e.target.value.toUpperCase())}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Value (e.g., RESPECT)"
        />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="EN">EN</option>
        </select>
        <input
          type="number"
          value={ageMin}
          onChange={(e) => setAgeMin(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          type="number"
          value={ageMax}
          onChange={(e) => setAgeMax(e.target.value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-700">
          Practice Count: <span className="font-extrabold">{count}</span> / 10{" "}
          <span
            className={
              count >= 6 && count <= 10
                ? "text-emerald-700 font-bold"
                : "text-amber-700 font-bold"
            }
          >
            {count >= 6 && count <= 10
              ? "✓ Compliant (6–10)"
              : "⚠ Not compliant"}
          </span>
        </div>
      </div>

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">
          {error}
        </div>
      ) : null}
      {loading ? (
        <div className="mt-4 text-sm text-slate-600">Loading…</div>
      ) : null}

      <div className="mt-6 overflow-auto border border-slate-200 rounded-2xl">
        <table className="min-w-[800px] w-full text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="text-left px-4 py-3 font-bold">#</th>
              <th className="text-left px-4 py-3 font-bold">Practice</th>
              <th className="text-left px-4 py-3 font-bold">Difficulty</th>
              <th className="text-left px-4 py-3 font-bold">Status</th>
              <th className="text-left px-4 py-3 font-bold">Approval</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-semibold">{idx + 1}</td>
                <td className="px-4 py-3">{r.title || "Practice option"}</td>
                <td className="px-4 py-3">{r.difficultyLevel ?? "—"}</td>
                <td className="px-4 py-3">{r.status}</td>
                <td className="px-4 py-3">{r.approvalStatus}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-slate-500" colSpan={5}>
                  No practices found for this value.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-slate-900">+ Add Practice</div>
          <div className="text-xs text-slate-500">
            Draft-only. Approval required to allocate.
          </div>
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3">
          <textarea
            value={newPractice.practiceText}
            onChange={(e) =>
              setNewPractice((p) => ({ ...p, practiceText: e.target.value }))
            }
            className="md:col-span-3 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[70px]"
            placeholder="Practice Text (atomic, executable)"
          />
          <select
            value={newPractice.difficultyLevel}
            onChange={(e) =>
              setNewPractice((p) => ({ ...p, difficultyLevel: e.target.value }))
            }
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          >
            <option value={1}>Difficulty 1</option>
            <option value={2}>Difficulty 2</option>
            <option value={3}>Difficulty 3</option>
          </select>
        </div>
        <div className="mt-3">
          <button
            onClick={onAdd}
            disabled={
              !canDraft(role) || !canAddMore || !newPractice.practiceText.trim()
            }
            className={`px-5 py-2 rounded-full text-sm font-semibold ${
              canDraft(role) && canAddMore && newPractice.practiceText.trim()
                ? "bg-teal-800 text-white hover:bg-teal-700"
                : "bg-slate-200 text-slate-500"
            }`}
            title={!canAddMore ? "Max 10 practices reached" : ""}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}
