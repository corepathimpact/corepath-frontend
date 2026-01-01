import React from "react";

export default function FullPageLoader({ message = "Loading..." }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-teal-700 animate-spin" />
          <div>
            <div className="text-sm font-extrabold text-slate-900">Please wait</div>
            <div className="text-sm text-slate-600">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


