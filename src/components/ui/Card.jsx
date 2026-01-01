import React from "react";

export default function Card({ title, subtitle, actions, className = "", children }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {title || subtitle || actions ? (
        <div className="px-5 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              {title ? <div className="text-base font-extrabold text-slate-900">{title}</div> : null}
              {subtitle ? <div className="mt-1 text-sm text-slate-600">{subtitle}</div> : null}
            </div>
            {actions ? <div className="shrink-0">{actions}</div> : null}
          </div>
        </div>
      ) : null}

      <div className="px-5 pb-5 pt-4">{children}</div>
    </div>
  );
}


