import React, { useEffect, useMemo, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { getAuth } from "../../../services/authStorage";
import { canDraft } from "../../../utils/raeAdminRoles";

export default function SpiritualContent() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;
  const [valueCode, setValueCode] = useState("RESPECT");
  const [language, setLanguage] = useState("EN");
  const [rows, setRows] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    book: "",
    chapter: "",
    verses: "",
    text: "",
    translation: "NIV",
  });

  const params = useMemo(
    () => ({
      valueCode,
      resourceType: "BIBLE_VERSE",
      logicArea: "AREA_06",
      engine: "VDP_APAT",
      language,
      limit: 500,
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
        setError(e?.response?.data?.message || e.message || "Failed to load bible verses.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const onAdd = async () => {
    try {
      setError("");
      await raeAdminApi.addBibleVerse({
        valueCode,
        book: form.book,
        chapter: Number(form.chapter),
        verses: form.verses,
        text: form.text,
        translation: form.translation,
        language,
        ageMin: 4,
        ageMax: 18,
      });
      setForm({ book: "", chapter: "", verses: "", text: "", translation: "NIV" });
      await refresh();
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Failed to add bible verse.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Spiritual Content</h2>
      <p className="mt-1 text-sm text-slate-600">
        Bible Verses (AREA_06). No day binding. APAT selects per day; RAE governs availability.
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={valueCode}
          onChange={(e) => setValueCode(e.target.value.toUpperCase())}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
          placeholder="Value (e.g., RESPECT)"
        />
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
          <option value="EN">EN</option>
        </select>
        <div className="text-sm text-slate-700 flex items-center">
          Verse Count: <span className="ml-2 font-extrabold">{rows.length}</span> / 30{" "}
          <span className={rows.length >= 30 ? "ml-2 text-emerald-700 font-bold" : "ml-2 text-amber-700 font-bold"}>
            {rows.length >= 30 ? "✓" : "⚠"}
          </span>
        </div>
      </div>

      {error ? <div className="mt-4 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">{error}</div> : null}
      {loading ? <div className="mt-4 text-sm text-slate-600">Loading…</div> : null}

      <div className="mt-6 overflow-auto border border-slate-200 rounded-2xl">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="text-left px-4 py-3 font-bold">Title</th>
              <th className="text-left px-4 py-3 font-bold">Status</th>
              <th className="text-left px-4 py-3 font-bold">Approval</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-200">
                <td className="px-4 py-3 font-semibold">{r.title}</td>
                <td className="px-4 py-3">{r.status}</td>
                <td className="px-4 py-3">{r.approvalStatus}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-slate-500" colSpan={3}>
                  No bible verses found for this value.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="font-extrabold text-slate-900">+ Add Bible Verse</div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          <input value={form.book} onChange={(e) => setForm((f) => ({ ...f, book: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Book (e.g., Ephesians)" />
          <input value={form.chapter} onChange={(e) => setForm((f) => ({ ...f, chapter: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Chapter (e.g., 6)" />
          <input value={form.verses} onChange={(e) => setForm((f) => ({ ...f, verses: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Verses (e.g., 1-3)" />
          <input value={form.translation} onChange={(e) => setForm((f) => ({ ...f, translation: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Translation (e.g., NIV)" />
          <textarea value={form.text} onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))} className="md:col-span-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[90px]" placeholder="Scripture text (immutable; versioned on edit)" />
        </div>
        <div className="mt-3">
          <button
            onClick={onAdd}
            disabled={!canDraft(role) || !form.book || !form.chapter || !form.verses || !form.text}
            className={`px-5 py-2 rounded-full text-sm font-semibold ${
              canDraft(role) && form.book && form.chapter && form.verses && form.text
                ? "bg-teal-800 text-white hover:bg-teal-700"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}


