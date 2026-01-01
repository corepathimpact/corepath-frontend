import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { activateTool, isActivated } from "../services/subscriptionStorage";

const TOOL_LABELS = {
  vdp: "Values-Driven Parenting (VDP)",
  vdl: "Values-Driven Life (VDL)",
  vdo: "Values-Driven Organization (VDO)",
  vie: "Values Ingrained Education (VIE)",
};

export default function ActivateSolution() {
  const { toolId } = useParams();
  const navigate = useNavigate();

  const label = useMemo(() => TOOL_LABELS[toolId] || toolId, [toolId]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActive(isActivated(toolId));
  }, [toolId]);

  const onActivate = () => {
    activateTool(toolId);
    setActive(true);
    navigate("/activate");
  };

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-14 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Activate {label}
          </h1>
          <p className="text-base md:text-lg text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Activation is where you choose a solution and subscription. Account
            creation/login only grants platform access.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-extrabold text-teal-900">Status</h2>
            <span
              className={
                active
                  ? "text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                  : "text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700"
              }
            >
              {active ? "Active" : "Not active"}
            </span>
          </div>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            Payment and plan selection will be handled during activation in the
            protected portal. This page is the activation stage (post-login).
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onActivate}
              className="px-5 py-2 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-700 transition text-sm"
            >
              Activate Now
            </button>
            <Link
              to="/activate"
              className="px-5 py-2 rounded-full border border-teal-800 text-teal-800 font-semibold hover:bg-teal-800 hover:text-white transition text-sm text-center"
            >
              Back to Activation Hub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
