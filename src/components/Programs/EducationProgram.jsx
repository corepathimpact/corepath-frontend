// -------------------------------------------------------------
// EducationProgram.jsx — CorePath Impact Education Pillar
// -------------------------------------------------------------
// Purpose: Represents the VIE Framework (Values-Ingrained Education).
// Focus: Integrating values in teaching, learning, and culture.
// -------------------------------------------------------------

import React from "react";

export default function EducationProgram() {
  return (
    <section className="relative bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        Education — Values-Ingrained Education (VIE)
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-center max-w-5xl mx-auto mb-12">
        The VIE Framework ensures schools nurture both intellect and integrity.
        We integrate values into learning so that education shapes not only what
        students know, but who they become.
      </p>

      {/* Process */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {["Teach & Model", "Reinforce & Track", "Reflect & Celebrate"].map((step) => (
          <div
            key={step}
            className="bg-teal-50 border border-teal-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">{step}</h3>
            <p className="text-gray-600">
              Core principles that guide daily value integration in classrooms.
            </p>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-teal-800 mb-4">Key Outcomes</h3>
        <ul className="text-gray-700 space-y-2 max-w-3xl mx-auto text-lg">
          <li>Schools that shape both minds and hearts</li>
          <li>Teachers who model integrity and mentorship</li>
          <li>Students who demonstrate values in learning and life</li>
        </ul>
      </div>

      <p className="italic text-center text-teal-600 mt-10">
        “Education without values creates intellect without conscience. Values give direction to knowledge.”
      </p>
    </section>
  );
}
