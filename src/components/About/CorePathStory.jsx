import React from "react";
import { motion } from "framer-motion";

export default function CorePathStory() {
  return (
    <section className="bg-white text-gray-800 py-24 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6">
          The CorePath Story
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
          CorePath Impact began with one belief — that values are not inherited;
          they are intentionally trained. What started as a simple parenting
          framework has grown into a global movement that equips families, schools,
          churches, and organizations to live by values that shape generations.
        </p>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Through the <strong>Values-Driven Frameworks</strong>, CorePath helps
          restore moral architecture in every sphere of life — creating measurable
          transformation that glorifies God and rebuilds nations from the inside out.
        </p>
      </motion.div>
    </section>
  );
}
