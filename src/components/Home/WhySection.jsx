// -------------------------------------------------------------
// WhySection.jsx — "Why CorePath Exists"
// -------------------------------------------------------------
// 🧭 Purpose:
// This section explains the “why” behind CorePath Impact.
// It connects emotionally with visitors by explaining the
// moral problem being solved and introduces the 4 Pillars of Character.
// -------------------------------------------------------------

import React from "react";

export default function WhySection() {
  return (
    // 🔹 Section Wrapper
    // Replaced background image with a soft white background (#F8F9FA)
    // and adjusted text colors for better contrast.
    <section className="relative bg-[#F8F9FA] text-teal-900 py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* 🔹 Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* --- Title --- */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-teal-800">
          Why CorePath Impact Exists
        </h2>

        {/* --- Introduction Paragraph --- */}
        <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-10 text-gray-700">
          The continued moral decay in society is the result of neglected values. 
          CorePath Impact exists to rebuild the moral architecture of families and communities 
          by nurturing hearts, transforming mindsets, and restoring value-driven living — 
          one heart, one home, one generation at a time.
        </p>

        {/* --- Supporting Paragraph --- */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
          Through <span className="font-semibold text-teal-700">science</span>,
          <span className="font-semibold text-teal-700"> Scripture</span>, and
          <span className="font-semibold text-teal-700"> structure</span>, CorePath Impact
          equips parents, educators, and leaders to train hearts — not just
          behaviors — restoring moral excellence from the home to society.
        </p>

        {/* --- Visual Representation (Four Pillars) --- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 justify-items-center">

          {/* Each pillar uses a color contrast suitable for the light background */}
          {[
            { title: "Beliefs", color: "bg-teal-700 text-white" },
            { title: "Wiring", color: "bg-white text-teal-900 border border-gray-200" },
            { title: "Values", color: "bg-teal-500 text-white" },
            { title: "Parenting Support", color: "bg-yellow-400 text-teal-900" },
          ].map((pillar, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-36 h-36 rounded-2xl shadow-xl ${pillar.color} hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-2xl font-bold mb-2">{pillar.title}</div>
              <div className="w-10 h-1 bg-white/70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
