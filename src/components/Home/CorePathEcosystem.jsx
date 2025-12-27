// -------------------------------------------------------------
// CorePathEcosystem.jsx — "The CorePath Impact Product Ecosystem"
// -------------------------------------------------------------
// 🧭 Purpose:
// Showcases CorePath Impact’s 6 flagship frameworks in a dynamic,
// responsive, animated grid with hover enlargement and CTA links.
// -------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  GraduationCap,
  Heart,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function CorePathEcosystem() {
  const frameworks = [
    {
      id: 1,
      title: "VDC Toolkit",
      icon: <BookOpen className="w-12 h-12 text-yellow-300" />,
      description:
        "Builds values early in children (ages 4–9 & 10–18) through measurable, daily character practices that make learning values fun, consistent, and trackable.",
      link: "/vdc-toolkit",
      cta: "Learn More →",
      color: "from-yellow-400 to-amber-500",
    },
    {
      id: 2,
      title: "VDP Course",
      icon: <Users className="w-12 h-12 text-green-300" />,
      description:
        "Equips parents to raise value-driven families using structure, accountability, and faith-centered parenting strategies that train the heart, not just behavior.",
      link: "/vdp-course",
      cta: "Enroll Now →",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: 3,
      title: "VIE Framework",
      icon: <GraduationCap className="w-12 h-12 text-blue-300" />,
      description:
        "Transforms schools into value-driven environments through teacher training, student workbooks, and value tracking integrated into daily learning.",
      link: "/vie-framework",
      cta: "Discover VIE →",
      color: "from-sky-400 to-blue-600",
    },
    {
      id: 4,
      title: "VDR Program",
      icon: <Heart className="w-12 h-12 text-pink-300" />,
      description:
        "Restores purpose, discipline, and direction in youth through mentorship, discipleship, and structured behavior transformation programs.",
      link: "/vdr-program",
      cta: "Explore VDR →",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 5,
      title: "VDL Coaching",
      icon: <Briefcase className="w-12 h-12 text-orange-300" />,
      description:
        "Brings values back to workplaces and leadership spaces through executive coaching, integrity systems, and organizational culture transformation.",
      link: "/vdl-coaching",
      cta: "Join VDL →",
      color: "from-orange-400 to-amber-600",
    },
    {
      id: 6,
      title: "VDP-CC Certification",
      icon: <ShieldCheck className="w-12 h-12 text-teal-300" />,
      description:
        "Trains and licenses Certified Parenting Coaches who multiply transformation by mentoring families, creating Parenting Accountability Groups, and leading communities.",
      link: "/vdp-cc",
      cta: "Become a Coach →",
      color: "from-teal-400 to-cyan-600",
    },
  ];

  return (
    <section
      id="ecosystem"
      className="relative bg-gradient-to-b from-white via-slate-50 to-teal-50 py-24 px-6 md:px-12 lg:px-20 text-gray-800 overflow-hidden"
    >
      {/* --- Section Header --- */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4">
          The CorePath Impact Ecosystem
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Our six flagship frameworks work together to transform lives from
          childhood to leadership — ensuring values are formed early,
          strengthened at home, reinforced in education, restored in youth,
          sustained in leadership, and multiplied through certified coaches.
        </p>
      </motion.div>

      {/* --- Frameworks Grid --- */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {frameworks.map((fw) => (
          <motion.div
            key={fw.id}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 10px 30px rgba(0, 128, 128, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`relative rounded-3xl shadow-lg bg-gradient-to-br ${fw.color} text-white p-8 flex flex-col justify-between cursor-pointer`}
          >
            <div>
              {/* Icon */}
              <div className="mb-4">{fw.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{fw.title}</h3>
              {/* Description */}
              <p className="text-sm md:text-base leading-relaxed mb-6 opacity-95">
                {fw.description}
              </p>
            </div>
            {/* CTA */}
            <Link
              to={fw.link}
              className="inline-block bg-white text-teal-900 font-semibold px-5 py-2 rounded-full hover:bg-teal-100 hover:text-teal-800 transition-all duration-300 self-start"
            >
              {fw.cta}
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Closing Statement --- */}
      <motion.div
        className="text-center mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="text-teal-700 italic text-lg leading-relaxed">
          Together, these frameworks form the{" "}
          <strong>CorePath Ecosystem</strong> — a generational model raising
          children of character, parents of purpose, educators of influence,
          youth of discipline, leaders of integrity, and coaches of
          transformation.
        </p>
      </motion.div>
    </section>
  );
}
