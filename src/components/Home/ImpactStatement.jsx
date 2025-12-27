// -------------------------------------------------------------
// ImpactStatement.jsx — "Inspire Trust & Rally Visitors"
// -------------------------------------------------------------
// 🧭 Purpose:
// Engages visitors with looping scroll-triggered animations,
// glowing hover effects, and responsive design.
// Animations replay every time the user scrolls back to view it.
// -------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Home, HeartHandshake } from "lucide-react";

export default function ImpactStatement() {
  // 🔹 Button animation variants with stagger
  const buttonVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-24 px-6 md:px-12 text-center overflow-hidden">
      {/* --- Animated Gradient Glow Background --- */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_80%)]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* --- Content Wrapper --- */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ amount: 0.3 }} // ✅ replays every time 30% of the section enters view
      >
        {/* --- Title --- */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}
        >
          🌱 Transforming Nations Begins at Home
        </motion.h2>

        {/* --- Paragraph --- */}
        <motion.p
          className="text-lg md:text-xl text-teal-100 mb-12 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
        >
          Every leader, worker, minister, or thief was once an innocent child in
          someone’s hands. The difference between who transforms society and who
          breaks it lies in one thing — the{" "}
          <span className="font-semibold text-white">values planted early.</span>{" "}
          At CorePath Impact, we’re restoring intentional value formation —
          one parent, one school, one child at a time.
        </motion.p>

        {/* --- Buttons Grid --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mt-10">
          {[
            {
              id: 1,
              icon: <GraduationCap className="w-5 h-5" />,
              text: "Become a Certified Parenting Coach",
              link: "/vdp-cc",
              color: "bg-yellow-400 text-teal-900 hover:bg-yellow-300",
            },
            {
              id: 2,
              icon: <Users className="w-5 h-5" />,
              text: "Join a Parenting Class",
              link: "/vdp-course",
              color: "bg-white text-teal-900 hover:bg-teal-100",
            },
            {
              id: 3,
              icon: <Home className="w-5 h-5" />,
              text: "Start a PAG Group",
              link: "/pag",
              color: "bg-orange-400 text-white hover:bg-orange-300",
            },
            {
              id: 4,
              icon: <HeartHandshake className="w-5 h-5" />,
              text: "Partner with Us",
              link: "/partners",
              color: "bg-teal-600 text-white hover:bg-teal-500",
            },
          ].map((btn, i) => (
            <motion.div
              key={btn.id}
              custom={i}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }} // ✅ replay on re-entry
            >
              <Link
                to={btn.link}
                className={`flex items-center justify-center gap-3 ${btn.color} font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300`}
              >
                {btn.icon}
                {btn.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
