import React, { useEffect, useMemo, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { getAuth } from "../../../services/authStorage";
import { canAudit } from "../../../utils/raeAdminRoles";

export default function AuditLogs() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;

  const [filters, setFilters] = useState({
    engine: "VDP_APAT",
    valueCode: "",
    fromDate: "",
    toDate: "",
  });
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useMemo(() => {
    const p = { ...filters, limit: 100 };
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
        const res = await raeAdminApi.allocations(params);
        if (!mounted) return;
        setRows(res.data.data || []);
      } catch (e) {
        if (!mounted) return;
        setError(e?.response?.data?.message || e.message || "Failed to load audit logs.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [params]);

  if (!canAudit(role)) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
        Audit logs are restricted to Governance Admin.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Audit Logs</h2>
      <p className="mt-1 text-sm text-slate-600">Regulatory and governance traceability. Read-only.</p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input value={filters.engine} onChange={(e) => setFilters((f) => ({ ...f, engine: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Engine" />
        <input value={filters.valueCode} onChange={(e) => setFilters((f) => ({ ...f, valueCode: e.target.value.toUpperCase() }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" placeholder="Value (optional)" />
        <input type="date" value={filters.fromDate} onChange={(e) => setFilters((f) => ({ ...f, fromDate: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" />
        <input type="date" value={filters.toDate} onChange={(e) => setFilters((f) => ({ ...f, toDate: e.target.value }))} className="rounded-xl border border-slate-200 px-3 py-2 text-sm" />
      </div>

      {loading ? <div className="mt-6 text-sm text-slate-600">Loading…</div> : null}
      {error ? <div className="mt-6 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">{error}</div> : null}

      <div className="mt-6 overflow-auto border border-slate-200 rounded-2xl">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th className="text-left px-4 py-3 font-bold">Date</th>
              <th className="text-left px-4 py-3 font-bold">Engine</th>
              <th className="text-left px-4 py-3 font-bold">Value</th>
              <th className="text-left px-4 py-3 font-bold">Resource</th>
              <th className="text-left px-4 py-3 font-bold">Version</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t border-slate-200">
                <td className="px-4 py-3">{r.allocatedOn}</td>
                <td className="px-4 py-3">{r.engine}</td>
                <td className="px-4 py-3">{r.valueCode || "—"}</td>
                <td className="px-4 py-3">{r.resourceId}</td>
                <td className="px-4 py-3">{r.resourceVersion}</td>
              </tr>
            ))}
            {rows.length === 0 ? (
              <tr>
                <td className="px-4 py-6 text-slate-500" colSpan={5}>
                  No logs match these filters.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}


