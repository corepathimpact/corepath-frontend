// -------------------------------------------------------------
// FamilyProgram.jsx — CorePath Impact Family Pillar
// -------------------------------------------------------------
// Purpose: Represents the Family Pillar (VDP + PAG).
// Focus: Values-Driven Parenting, Home Transformation.
// -------------------------------------------------------------

import React from "react";

export default function FamilyProgram() {
  return (
    <section className="relative bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-20 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-8 text-center drop-shadow-lg">
        Family — Values-Driven Parenting & Home Transformation
      </h2>

      {/* Overview */}
      <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-5xl mx-auto mb-10 text-center">
        The Family Pillar restores the home as the center of value formation.
        CorePath Impact helps parents move from reactive to intentional parenting
        through structured discipleship using the Values-Driven Parenting (VDP)
        framework and practical tools like Train-Up Cards, Star Reward, and
        Corrective Cards.
      </p>

      {/* Approach */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-gold mb-3">Train & Track</h3>
          <p>Daily values practiced and monitored using structured VDC tools.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-gold mb-3">Build Consistency</h3>
          <p>
            Reinforce godly character through accountability, reflection, and
            measurable growth.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
          <h3 className="text-2xl font-semibold text-gold mb-3">
            Sustain Through Community
          </h3>
          <p>
            Parenting Accountability Groups (PAGs) ensure ongoing transformation
            through peer support and reflection.
          </p>
        </div>
      </div>

      {/* Outcomes */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gold">Outcomes</h3>
        <ul className="list-disc list-inside text-gray-200 text-lg space-y-2 max-w-3xl mx-auto">
          <li>Spiritually grounded, emotionally resilient children</li>
          <li>Stronger family communication and unity</li>
          <li>Homes functioning as centers of transformation</li>
        </ul>
      </div>

      {/* Quote */}
      <p className="italic text-center text-yellow-200 mt-10">
        “The home is the first place values are planted, and the heart is the first soil they grow in.”
      </p>
    </section>
  );
}
