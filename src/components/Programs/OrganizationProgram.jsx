// -------------------------------------------------------------
// OrganizationProgram.jsx — CorePath Impact Organizational Pillar
// -------------------------------------------------------------
// Purpose: Represents the Workplace & Leadership Transformation pillar.
// Focus: Embedding values into leadership, culture, and systems.
// -------------------------------------------------------------

import React from "react";

export default function OrganizationProgram() {
  return (
    <section className="relative bg-gray-100 text-gray-800 py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        Organizations — Workplace & Community Value Systems
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-center max-w-5xl mx-auto mb-12">
        CorePath Impact helps organizations embed values into leadership,
        teamwork, and culture through the Organizational Transformation
        Framework (OTF) — turning belief into behavior and purpose into
        performance.
      </p>

      {/* OTF Process */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-4 text-center">
        {["Define", "Align", "Train", "Coach", "Sustain"].map((step) => (
          <div
            key={step}
            className="bg-teal-50 p-6 rounded-xl shadow hover:bg-teal-100 hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-bold text-teal-700 mb-2">{step}</h3>
            <p className="text-gray-600 text-sm">
              Core stage in embedding values within organizational systems.
            </p>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-teal-700 mb-4">Key Outcomes</h3>
        <ul className="text-gray-700 space-y-2 max-w-3xl mx-auto text-lg">
          <li>Ethical workplaces balancing profit with principle</li>
          <li>Leaders who model empathy, integrity, and accountability</li>
          <li>Work cultures that sustain excellence and compassion</li>
        </ul>
      </div>

      <p className="italic text-center text-teal-600 mt-10">
        “When values guide leadership, excellence follows naturally.”
      </p>
    </section>
  );
}
