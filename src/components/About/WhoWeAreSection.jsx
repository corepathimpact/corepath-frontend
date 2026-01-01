// -------------------------------------------------------------
// WhoWeAreSection.jsx — One-Screen + Link Highlight Only
// -------------------------------------------------------------

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhoWeAreSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-6 text-gray-800">
      <div className="w-full max-w-4xl h-[calc(100vh-3rem)] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 sm:px-8 pt-7 pb-5 text-center border-b border-gray-100">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-teal-700"
          >
            🏛 Who We Are
          </motion.h2>

          {/* Divider */}
          <div className="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Text (scrolls if needed to keep everything within one viewport) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 overflow-y-auto px-6 sm:px-8 py-6"
        >
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-center">
            <p>
              <strong className="font-semibold">CorePath Impact</strong> is a
              social impact organization dedicated to raising a Values-Driven
              Generation by making values teachable, trainable, ingrainable and
              livable across homes, organizations, and communities.
            </p>

            <p>
              We operate at the intersection of four foundational ecosystems of
              society — family, education, faith, and organizational culture —
              where character is formed daily and life direction is shaped.
              Within these environments, we provide structured, measurable, and
              scalable systems that move values beyond ideals into lived
              practice.
            </p>

            <p>
              Our work integrates biblical truth, Neuroscience, behavioral
              science, and habit-formation psychology, grounded in a clear
              conviction: when values are intentionally trained, through
              consistent practice and accountability, change becomes
              predictable, measurable, and sustainable.
            </p>

            <p>
              Through our{" "}
              <Link
                to="/solutions/parents"
                className="font-bold text-teal-700 hover:underline"
              >
                Integrated Parenting
              </Link>
              ,{" "}
              <Link
                to="/solutions/schools"
                className="font-bold text-teal-700 hover:underline"
              >
                Education
              </Link>
              ,{" "}
              <Link
                to="/solutions/teens-adults"
                className="font-bold text-teal-700 hover:underline"
              >
                Life-formation
              </Link>
              , and{" "}
              <Link
                to="/solutions/organizations-workplaces"
                className="font-bold text-teal-700 hover:underline"
              >
                organizational culture systems
              </Link>
              — delivered through toolkits, diagnostic solutions, training
              programs, and coaching frameworks — we equip parents, educators,
              pastors, and organizational leaders to create environments where
              values are practiced daily, character is intentionally formed, and
              purpose is discovered and lived.
            </p>

            <p className="font-semibold text-teal-800">
              Transforming society — one child, one home, one school, one
              organization at a time.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="px-6 sm:px-8 py-5 border-t border-gray-100 bg-white flex justify-center flex-wrap gap-4"
        >
          <Link
            to="/solutions/parents"
            className="bg-teal-700 text-white px-6 py-2 rounded-xl shadow hover:bg-teal-800 transition-all text-base"
          >
            Explore Solutions
          </Link>

          <Link
            to="/courses"
            className="border border-teal-700 text-teal-700 px-6 py-2 rounded-xl hover:bg-teal-700 hover:text-white transition-all text-base"
          >
            View Courses
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
