// -------------------------------------------------------------
// WhoWeAreSection.jsx — One-Screen + Link Highlight Only
// -------------------------------------------------------------

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function WhoWeAreSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-6 md:px-12 text-gray-800">
      <div className="max-w-4xl text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-4"
        >
          🏛 Who We Are
        </motion.h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-teal-600 mx-auto mb-6 rounded-full"></div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4 text-base md:text-lg leading-relaxed"
        >
          <p>
            <strong className="font-semibold">CorePath Impact</strong> is a social impact organization that equips homes, schools, churches, 
            and organizations to raise a Values-Driven Generation.
          </p>

          <p>
            We operate at the intersection of the four most powerful ecosystems of society — family, education, faith, and organizational culture — providing structured, measurable, and scalable tools that turn values into a lifestyle.
          </p>

          <p>
            Our work integrates biblical truth, Neuroscience, behavioral science, and habit-formation psychology to show that when values are intentionally trained, change is predictable, measurable, and sustainable.
          </p>

          <p>
            Through our{" "}
            <Link to="/toolkits" className="font-bold text-teal-700 hover:underline">toolkits</Link>,{" "}
            <Link to="/courses" className="font-bold text-teal-700 hover:underline">courses</Link>, and{" "}
            <Link to="/coaching" className="font-bold text-teal-700 hover:underline">coaching systems</Link>, we equip{" "}
            <Link to="/homes" className="font-bold text-teal-700 hover:underline">parents</Link>,{" "}
            <Link to="/schools" className="font-bold text-teal-700 hover:underline">teachers</Link>,{" "}
            <Link to="/churches" className="font-bold text-teal-700 hover:underline">pastors</Link>, and{" "}
            <Link to="/organizations" className="font-bold text-teal-700 hover:underline">organizational leaders</Link>{" "}
            to build environments where character is formed and purpose is discovered.
          </p>

          <p className="font-semibold text-teal-800">
            Transforming society — one child, one home, one school, one organization at a time.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex justify-center flex-wrap gap-4"
        >
          <Link
            to="/programs"
            className="bg-teal-700 text-white px-6 py-2 rounded-xl shadow hover:bg-teal-800 transition-all text-base"
          >
            Explore Programs
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
