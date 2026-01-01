import React from "react";
import { Link } from "react-router-dom";

export default function ErrorState({ message = "Something went wrong." }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full rounded-2xl border border-rose-200 bg-rose-50 p-6">
        <div className="text-sm font-extrabold text-rose-900">Error</div>
        <div className="mt-2 text-sm text-rose-800">{message}</div>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="h-10 px-5 rounded-full bg-rose-700 text-white font-semibold hover:bg-rose-600"
          >
            Retry
          </button>
          <Link
            to="/home"
            className="h-10 inline-flex items-center px-5 rounded-full border border-rose-300 text-rose-900 font-semibold hover:bg-rose-100"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


