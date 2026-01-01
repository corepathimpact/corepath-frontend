import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getSubscriptions } from "../services/subscriptionStorage";

const TOOLS = [
  {
    id: "vdp",
    name: "Values-Driven Parenting (VDP)",
    description: "Parenting system for structured character formation at home.",
    cta: "Activate VDP",
  },
  {
    id: "vdl",
    name: "Values-Driven Life (VDL)",
    description:
      "Personal development pathway with values-based accountability.",
    cta: "Activate VDL",
  },
  {
    id: "vdo",
    name: "Values-Driven Organization (VDO)",
    description:
      "Operationalize values across leadership, culture, and performance.",
    cta: "Activate VDO",
  },
  {
    id: "vie",
    name: "Values Ingrained Education (VIE)",
    description: "Embed character formation into everyday school life.",
    cta: "Activate VIE",
  },
];

export default function ActivationHub() {
  const [subs, setSubs] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubs(getSubscriptions());

    const onStorage = () => setSubs(getSubscriptions());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const tools = useMemo(() => {
    return TOOLS.map((tool) => {
      const status = subs?.[tool.id]?.active ? "Active" : "Not active";
      return { ...tool, status };
    });
  }, [subs]);

  return (
    <section className="bg-white text-gray-800 font-inter">
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Solution Activation Hub
          </h1>
          <p className="text-base md:text-lg text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Your account gives you access to the CorePath platform. Solutions
            are activated as modular subscriptions after you log in.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Tool selection and payment happen only at activation. Activating one
            tool does not automatically activate the others.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-extrabold text-teal-900 leading-snug">
                  {tool.name}
                </h2>
                <span
                  className={
                    tool.status === "Active"
                      ? "text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800"
                      : "text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                  }
                >
                  {tool.status}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                {tool.description}
              </p>

              <div className="mt-5 flex gap-3">
                <Link
                  to={`/activate/${tool.id}`}
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-800 text-white font-semibold hover:bg-teal-700 transition text-sm"
                >
                  {tool.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
