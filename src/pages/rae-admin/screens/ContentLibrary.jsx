import React, { useEffect, useMemo, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";

export default function ContentLibrary() {
  const [filters, setFilters] = useState({
    valueCode: "",
    resourceType: "",
    logicArea: "",
    status: "",
    approvalStatus: "",
    language: "EN",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [rows, setRows] = useState([]);

  const params = useMemo(() => {
    const p = { ...filters, limit: 50, offset: 0 };
    Object.keys(p).forEach((k) => {
      if (p[k] === "") delete p[k];
    });
    return p;
  }, [filters]);

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
        setError(
          e?.response?.data?.message || e.message || "Failed to load resources."
        );
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [params]);

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Content Library</h2>
      <p className="mt-1 text-sm text-slate-600">
        Canonical inventory of governed content. View-only (no inline edits, no
        deletions).
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          value={filters.valueCode}
          onChange={(e) =>
            setFilters((f) => ({ ...f, valueCode: e.target.value }))
          }
          placeholder="Value (e.g., RESPECT)"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          value={filters.resourceType}
          onChange={(e) =>
            setFilters((f) => ({ ...f, resourceType: e.target.value }))
          }
          placeholder="Resource Type (optional)"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
        <input
          value={filters.logicArea}
          onChange={(e) =>
            setFilters((f) => ({ ...f, logicArea: e.target.value }))
          }
          placeholder="Logic Area (optional)"
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
        />
      </div>

      {loading ? (
        <div className="mt-6 text-sm text-slate-600">Loading…</div>
      ) : error ? (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">
          {error}
        </div>
      ) : (
        <div className="mt-6 overflow-auto border border-slate-200 rounded-2xl">
          <table className="min-w-[900px] w-full text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="text-left px-4 py-3 font-bold">Value</th>
                <th className="text-left px-4 py-3 font-bold">Type</th>
                <th className="text-left px-4 py-3 font-bold">Logic Area</th>
                <th className="text-left px-4 py-3 font-bold">Day</th>
                <th className="text-left px-4 py-3 font-bold">Status</th>
                <th className="text-left px-4 py-3 font-bold">Approval</th>
                <th className="text-left px-4 py-3 font-bold">Language</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold">
                    {r.valueCode || "—"}
                  </td>
                  <td className="px-4 py-3">{r.resourceType}</td>
                  <td className="px-4 py-3">{r.logicArea || "—"}</td>
                  <td className="px-4 py-3">{r.dayIndex ?? "—"}</td>
                  <td className="px-4 py-3">{r.status}</td>
                  <td className="px-4 py-3">{r.approvalStatus}</td>
                  <td className="px-4 py-3">{r.language}</td>
                </tr>
              ))}
              {rows.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-slate-500" colSpan={7}>
                    No resources match these filters.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
