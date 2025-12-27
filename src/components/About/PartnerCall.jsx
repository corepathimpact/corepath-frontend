import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PartnerCall() {
  return (
    <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-24 px-6 md:px-12 lg:px-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-300 mb-6">
          Partner With Us
        </h2>
        <p className="text-lg md:text-xl text-teal-50 leading-relaxed mb-8">
          Join the movement to restore nations through values. Together, we can
          equip families, schools, churches, and leaders to raise a generation of
          integrity, purpose, and faith.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-teal-900 font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            Become a Partner
          </Link>
          <Link
            to="/donate"
            className="inline-block border-2 border-yellow-300 text-yellow-300 font-semibold px-8 py-4 rounded-full hover:bg-yellow-300 hover:text-teal-900 hover:scale-105 transition-all duration-300"
          >
            Support the Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
