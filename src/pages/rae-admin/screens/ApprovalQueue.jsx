import React, { useEffect, useState } from "react";
import { raeAdminApi } from "../../../api/raeAdminApi";
import { getAuth } from "../../../services/authStorage";
import { canApprove } from "../../../utils/raeAdminRoles";

export default function ApprovalQueue() {
  const auth = getAuth();
  const role = auth?.user?.raeRole || null;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedBody, setSelectedBody] = useState(null);
  const [notes, setNotes] = useState("");

  const refresh = async () => {
    const res = await raeAdminApi.approvalQueue({ limit: 100, offset: 0 });
    setItems(res.data.data || []);
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
        setError(e?.response?.data?.message || e.message || "Failed to load approval queue.");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const onReview = async (resource) => {
    setSelected(resource);
    setSelectedBody(null);
    setNotes("");
    try {
      const res = await raeAdminApi.getResource(resource.id);
      setSelectedBody(res.data.data.activeVersionBody);
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Failed to load resource detail.");
    }
  };

  const onDecision = async (decision) => {
    try {
      setError("");
      await raeAdminApi.approveDecision({
        resourceId: selected.id,
        decision,
        notes,
      });
      setSelected(null);
      setSelectedBody(null);
      await refresh();
    } catch (e) {
      setError(e?.response?.data?.message || e.message || "Decision failed.");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">Approval Queue</h2>
      <p className="mt-1 text-sm text-slate-600">
        Separation of power. Creator ≠ Approver. Rejected content never allocates.
      </p>

      {error ? <div className="mt-4 rounded-xl border border-red-200 bg-red-50 text-red-800 p-4 text-sm">{error}</div> : null}

      {loading ? (
        <div className="mt-6 text-sm text-slate-600">Loading…</div>
      ) : (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-6 border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">Pending Items</div>
            <div className="divide-y divide-slate-200">
              {items.map((r) => (
                <button
                  key={r.id}
                  onClick={() => onReview(r)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50"
                >
                  <div className="font-semibold text-slate-900">
                    {r.title || `${r.valueCode || "—"} ${r.resourceType}`}
                  </div>
                  <div className="text-xs text-slate-600">
                    {r.valueCode || "—"} · {r.logicArea || "—"} · {r.resourceType} · {r.approvalStatus}
                  </div>
                </button>
              ))}
              {items.length === 0 ? (
                <div className="px-4 py-6 text-sm text-slate-500">No pending approvals.</div>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-6 border border-slate-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">Review</div>
            {selected ? (
              <div className="p-4 space-y-3">
                <div className="text-sm">
                  <div className="font-extrabold text-slate-900">{selected.title || selected.id}</div>
                  <div className="text-xs text-slate-600">
                    Value: {selected.valueCode || "—"} · Type: {selected.resourceType} · Area: {selected.logicArea || "—"}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs overflow-auto max-h-[240px]">
                  <pre className="whitespace-pre-wrap">{JSON.stringify(selectedBody, null, 2)}</pre>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
                    Reviewer Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm min-h-[80px]"
                    placeholder="Decision notes (immutable)"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    disabled={!canApprove(role)}
                    onClick={() => onDecision("APPROVE")}
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${
                      canApprove(role) ? "bg-emerald-600 text-white hover:bg-emerald-500" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    Approve
                  </button>
                  <button
                    disabled={!canApprove(role)}
                    onClick={() => onDecision("REJECT")}
                    className={`px-5 py-2 rounded-full text-sm font-semibold ${
                      canApprove(role) ? "bg-rose-600 text-white hover:bg-rose-500" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    Reject
                  </button>
                  {!canApprove(role) ? (
                    <div className="text-xs text-slate-500 flex items-center">
                      Approvals restricted by role.
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="p-4 text-sm text-slate-500">Select an item to review.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


