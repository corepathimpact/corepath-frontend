// -------------------------------------------------------------
// FaithProgram.jsx — CorePath Impact Faith Pillar
// -------------------------------------------------------------
// Purpose: Represents Church & Discipleship Integration.
// Focus: Partnering with churches to disciple both hearts and habits.
// -------------------------------------------------------------

import React from "react";

export default function FaithProgram() {
  return (
    <section className="relative bg-gradient-to-b from-teal-900 via-teal-800 to-black text-white py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-8 text-center">
        Faith — Church & Discipleship Integration
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-center max-w-5xl mx-auto mb-12">
        The Faith Pillar equips churches to disciple both hearts and habits,
        embedding values into ministry, parenting, and youth programs so faith
        becomes a lived daily lifestyle.
      </p>

      {/* Three Dimensions */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[
          { title: "Equip", desc: "Train pastors, youth leaders, and parents with values-based discipleship frameworks." },
          { title: "Embed", desc: "Integrate values into all church programs and ministries for consistent impact." },
          { title: "Empower", desc: "Support churches as ongoing accountability and transformation centers." },
        ].map((item) => (
          <div key={item.title} className="bg-white/10 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-gold mb-3">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gold">Outcomes</h3>
        <ul className="list-disc list-inside text-gray-100 text-lg space-y-2 max-w-3xl mx-auto">
          <li>Churches discipling families holistically</li>
          <li>Youth growing in biblical and moral strength</li>
          <li>Faith communities transforming society</li>
        </ul>
      </div>

      <p className="italic text-center text-yellow-200 mt-10">
        “Faith is not inherited — it is nurtured. When the church equips families, it strengthens the nation.”
      </p>
    </section>
  );
}
