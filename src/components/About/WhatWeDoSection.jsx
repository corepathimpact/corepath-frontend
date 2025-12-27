// ------------------------------------------------------------
//  WHAT WE DO SECTION — Apple-Level Premium UI
//  🔰 FULLY COMMENTED FOR NOVICE-FRIENDLY UNDERSTANDING
// ------------------------------------------------------------

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WhatWeDoSection() {
  const [active, setActive] = useState(null);

  const items = [
    {
      id: 1,
      title: "We Provide Values Training Tools",
      lead: "We design and supply structured values-training tools...",
      full: `We design and supply structured tools—including toolkits, workbooks, guidebooks,
Sunday school materials, parenting books, digital habit-diagnostic tools, automated
career and purpose discovery systems, habit trackers, and discipleship resources—
created to help parents, teachers, church leaders, and mentors ingrain and train
values with clarity and consistency.`,
      icon: "📘",
    },
    {
      id: 2,
      title: "We Raise Nurturers",
      lead: "We equip parents, teachers, and leaders to shape values intentionally...",
      full: `We train parents, teachers, church leaders, and community influencers to become
intentional value-shapers. Through practical frameworks, hands-on methods, and proven
systems, we show them how to build environments that reinforce values daily and cultivate 
deep, lasting character in children.`,
      icon: "🎓",
    },
    {
      id: 3,
      title: "We Train Coaches",
      lead: "We raise Values-Driven Coaches to transform society...",
      full: `We raise Values-Driven Coaches who serve as catalysts of transformation across
families, schools, churches, and organizations. These coaches mentor parents, guide teachers,
facilitate values-based programs, and support institutions in building structured systems
that deliver measurable, sustainable change.`,
      icon: "🚀",
    },
    {
      id: 4,
      title: "We Run Character Reshape Programs",
      lead: "We coach children and teens to grow in purpose and discipline...",
      full: `We coach and reshape the character of children and teens, helping them align identity,
behavior, and choices with strong, life-giving values. Through personalized coaching,
structured pathways, and value-formation systems, young people build discipline, purpose,
and responsible character.`,
      icon: "🌱",
    },
  ];

  return (
    <section
      className="relative py-10 px-4 md:px-12"
      style={{
        background: "linear-gradient(135deg, #eefdfb 0%, #ffffff 50%, #e8fbf6 100%)",
      }}
    >
      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-center text-3xl font-extrabold text-teal-800 mb-6">
          🌟 What We Do
        </h2>

        {/* GRID OF 4 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {items.map((item) => {
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                className="relative"
                style={{ height: "210px" }}
                onMouseEnter={() => setActive(item.id)}
                onMouseLeave={() => setActive(null)}
              >
                <motion.div
                  layout
                  className="relative bg-white/70 backdrop-blur-xl border border-transparent
                             rounded-2xl shadow-md cursor-pointer p-4 text-center"
                  
                  animate={{
                    scale: isActive ? 1.15 : 1,
                    zIndex: isActive ? 40 : 1,
                    height: isActive ? "auto" : "210px",
                    boxShadow: isActive
                      ? "0 35px 70px rgba(0,0,0,0.22)"
                      : "0 6px 18px rgba(0,0,0,0.1)",
                    borderColor: isActive ? "rgba(13,148,136,0.6)" : "transparent",
                  }}
                  
                  transition={{
                    layout: { duration: 0.35, ease: "easeOut" },
                    scale: { type: "spring", stiffness: 120, damping: 12 },
                  }}

                  style={{
                    position: "absolute",
                    width: "100%",
                    left: 0,
                    top: 0,
                    transformOrigin: "top center",
                  }}
                >

                  {/* ICON */}
                  <div className="text-4xl text-teal-700 mb-2">{item.icon}</div>

                  {/* TITLE */}
                  <h3 className="text-md font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>

                  {/* LEAD TEXT */}
                  {!isActive && (
                    <p className="text-gray-700 text-xs leading-snug px-2">
                      {item.lead}
                    </p>
                  )}

                  {/* FULL TEXT */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      className="text-gray-700 text-xs leading-relaxed mt-2 px-2 pb-3"
                    >
                      {item.full}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}

        </div>

        {/* ------------------------------------------------------------
            🌱 THEORY OF CHANGE (NEW TEXT INSERTED HERE)
        ------------------------------------------------------------ */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-teal-700 mb-2">🌱 Theory of Change</h3>

          <p className="text-gray-800 text-base leading-relaxed font-semibold">
            We believe that when <span className="text-teal-700 font-bold">
            parents, educators, and mentors are equipped with structured, values-based systems</span>:
          </p>

          <div className="text-gray-700 text-sm leading-relaxed mt-3 space-y-1">
            <p>→ They raise children of <strong>character and conviction</strong>,</p>
            <p>→ Who grow into <strong>responsible, purpose-driven adults</strong>,</p>
            <p>→ Who build <strong>healthy families, strong schools, and value-anchored communities</strong>,</p>
            <p>→ Ultimately driving <strong>national transformation grounded in godly values</strong>.</p>
          </div>
        </div>

        {/* ------------------------------------------------------------
            CTA BUTTONS
        ------------------------------------------------------------ */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          <motion.a
            href="/products"
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="px-7 py-3 rounded-full font-semibold text-white bg-teal-700 shadow 
                       hover:bg-teal-600 hover:shadow-2xl transition-all duration-300 tracking-wide"
          >
            Check Our Products
          </motion.a>

          <motion.a
            href="/programs"
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="px-7 py-3 rounded-full font-semibold text-teal-800 bg-white border border-teal-500 shadow 
                       hover:bg-teal-600 hover:text-white hover:shadow-2xl transition-all duration-300 tracking-wide"
          >
            Check Our Programs
          </motion.a>

          <motion.a
            href="/tools"
            whileHover={{ scale: 1.08, y: -4 }}
            transition={{ type: "spring", stiffness: 160, damping: 12 }}
            className="px-7 py-3 rounded-full font-semibold text-white bg-teal-800 shadow 
                       hover:bg-teal-700 hover:shadow-2xl transition-all duration-300 tracking-wide"
          >
            Access Online Parenting Tools
          </motion.a>

        </div>

      </div>
    </section>
  );
}
