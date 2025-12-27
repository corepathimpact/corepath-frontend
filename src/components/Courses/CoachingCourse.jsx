import React from "react";

export default function CoachingCourse() {
  return (
    <section
      id="coaching"
      className="bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-gold mb-8 text-center">
        Values-Driven Coaching (VDC-C)
      </h2>

      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-12">
        Become a certified Values-Driven Coach equipped with CorePath tools like
        the ATTR Framework, 4D Corrective Diagnostic Tool, and Color
        Predisposition System.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        {[
          {
            title: "Level 1 — Foundations",
            desc: "Introduction to the science of habit formation, values systems, and parenting psychology.",
          },
          {
            title: "Level 2 — Certification",
            desc: "Advanced facilitation, group coaching, and community transformation models.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/10 p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-gold mb-3">
              {item.title}
            </h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/enroll/vdc"
          className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Apply for Certification
        </a>
      </div>
    </section>
  );
}
