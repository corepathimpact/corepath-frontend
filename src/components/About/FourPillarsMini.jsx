import React from "react";
import { motion } from "framer-motion";

export default function FourPillarsMini() {
  const pillars = [
    {
      id: 1,
      title: "Families",
      text: "Restoring the home as the seedbed of value formation through intentional parenting, discipleship, and accountability systems.",
    },
    {
      id: 2,
      title: "Schools",
      text: "Equipping teachers and students to integrate values into education, ensuring character is learned alongside competence.",
    },
    {
      id: 3,
      title: "Churches",
      text: "Partnering with ministries to make discipleship measurable through heart-based teaching and structured values training.",
    },
    {
      id: 4,
      title: "Organizations",
      text: "Transforming workplaces and leadership cultures with values-based coaching and ethical systems that reflect integrity.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800 py-24 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
          The Four Pillars of Transformation
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Every nation stands on four pillars — the home, the school, the church, and
          the organization. CorePath builds transformation from the foundation up.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.id}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: pillar.id * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-teal-700 mb-3">
              {pillar.title}
            </h3>
            <p className="text-gray-600">{pillar.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
