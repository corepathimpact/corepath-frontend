// ------------------------------------------------------------
//  Mission, Vision & Core Values Component
//  • One-screen Mission & Vision (centered, compact)
//  • Colored sections + soft gradients
//  • Divider between Mission & Vision
//  • Core Values section below with icons
//  • Apple-level smooth animations
// ------------------------------------------------------------

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="relative bg-white py-16 px-6 md:px-14">

      <div className="max-w-6xl mx-auto">

        {/* ------------------------------------------------------------
            MISSION & VISION (Two columns, centered, compact)
        ------------------------------------------------------------ */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-12"
          style={{ minHeight: "75vh" }}
        >

          {/* ----------------------------- */}
          {/*          MISSION              */}
          {/* ----------------------------- */}
          <motion.div
            className="flex-1 text-center p-6 rounded-2xl shadow-md bg-gradient-to-b from-teal-50 to-teal-100 border border-teal-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-teal-800 mb-3">
              🔥 Our Mission
            </h2>

            <p className="text-gray-800 text-base md:text-lg font-semibold leading-snug max-w-lg mx-auto">
              Transforming homes, schools, churches, and organizations into{" "}
              <span className="text-teal-700 font-bold">
                sacred centers of value formation.
              </span>
            </p>

            <p className="mt-4 text-gray-700 text-sm md:text-base leading-snug max-w-lg mx-auto">
              We equip parents, teachers, pastors, and leaders with structured tools,
              systems, and frameworks that shape hearts, build character, and establish
              daily value-formation habits.
            </p>

            <ul className="mt-4 text-gray-700 text-sm leading-snug space-y-1 max-w-sm mx-auto">
              <li>• Structured systems for daily value formation</li>
              <li>• Practical biblical & scientific character tools</li>
              <li>• Mentorship & corrective programs</li>
              <li>• Training Values-Driven Coaches nationwide</li>
            </ul>
          </motion.div>

          {/* ----------------------------- */}
          {/*          DIVIDER              */}
          {/* ----------------------------- */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-1 h-24 bg-teal-200 rounded-full"></div>
          </div>

          {/* ----------------------------- */}
          {/*           VISION              */}
          {/* ----------------------------- */}
          <motion.div
            className="flex-1 text-center p-6 rounded-2xl shadow-md bg-gradient-to-b from-amber-50 to-amber-100 border border-amber-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-800 mb-3">
              🌍 Our Vision
            </h2>

            <p className="text-gray-800 text-base md:text-lg font-semibold leading-snug max-w-lg mx-auto">
              Every heart shaped and anchored in{" "}
              <span className="text-amber-700 font-bold">timeless godly values.</span>
            </p>

            <p className="mt-4 text-gray-700 text-sm md:text-base leading-snug max-w-lg mx-auto">
              We envision a generation rooted in truth, guided by purpose,
              and empowered to transform families, institutions, and nations.
            </p>

            <ul className="mt-4 text-gray-700 text-sm leading-snug space-y-1 max-w-sm mx-auto">
              <li>• Shape hearts, not just habits</li>
              <li>• Reach every child, home, school & church</li>
              <li>• Build families anchored in values</li>
              <li>• Raise leaders who reflect God’s heart</li>
            </ul>
          </motion.div>

        </div>

        {/* ------------------------------------------------------------
            ORGANIZATIONAL CORE VALUES (Full-width section)
        ------------------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-lg border border-gray-200"
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-4">
            🧱 Organizational Core Values
          </h2>

          <p className="text-center text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            At the heart of CorePath Impact lies a commitment to raising a generation
            anchored in values that transform families, communities, and nations.
            These core values guide every tool we design, every training we deliver,
            and every coach we equip.
          </p>

          {/* VALUES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">

            {/* 1. Scripture */}
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-bold text-xl text-teal-700 mb-2">📖 Scripture as the Foundation</h3>
              <p className="text-gray-700 text-sm leading-snug">
                God’s Word is our unshakable anchor. It provides the wisdom and truth on which
                the VDC Toolkit and our entire approach to parenting are built.
              </p>
            </div>

            {/* 2. Character */}
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-bold text-xl text-amber-700 mb-2">💡 Character as the Motivation</h3>
              <p className="text-gray-700 text-sm leading-snug">
                True leadership flows from character. Integrity, honesty, and responsibility
                guide the way we serve parents, children, and communities.
              </p>
            </div>

            {/* 3. Innovation */}
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-bold text-xl text-blue-700 mb-2">⚙️ Innovation as the Driving Force</h3>
              <p className="text-gray-700 text-sm leading-snug">
                We embrace creativity, scientific insight, and excellence. Blending Scripture
                with behavioral science, we create practical and life-changing solutions.
              </p>
            </div>

            {/* 4. Transformation */}
            <div className="p-5 bg-white rounded-xl border shadow-sm">
              <h3 className="font-bold text-xl text-green-700 mb-2">🌱 Transformation as the Inevitable Change</h3>
              <p className="text-gray-700 text-sm leading-snug">
                When values are taught, practiced, and lived out, transformation becomes
                inevitable—first in the child, then the family, and ultimately society.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
