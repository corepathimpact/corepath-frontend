// -------------------------------------------------------------
// OurPillarsOfImpact.jsx — "The 4 Pillars of Impact"
// -------------------------------------------------------------
// 🧭 Purpose:
// Displays CorePath Impact’s four transformation ecosystems —
// Families, Schools, Churches, and Organizations —
// with animated entry, alternating layouts, and replayable scroll effects.
// -------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OurPillarsOfImpact() {
  const pillars = [
    {
      id: 1,
      title: "Families",
      description:
        "The family is the foundation of all moral and emotional development. CorePath Impact restores the home as the center of value formation, equipping parents to disciple hearts, nurture purpose-driven children, and build homes that transform communities.",
      framework:
        "Values-Driven Parenting (VDP) — empowering parents through structured training, accountability groups (PAGs), and home transformation tools.",
      image: `${process.env.PUBLIC_URL}/images/family.jpg`,
      link: "/families",
      layout: "text-left",
      sectionId: "families-section",
    },
    {
      id: 2,
      title: "Schools",
      description:
        "Schools shape the way children think, relate, and aspire. CorePath integrates values into education systems so that academic excellence is grounded in integrity, diligence, and character. We turn classrooms into culture-shaping environments where knowledge meets wisdom.",
      framework:
        "Values-Ingrained Education (VIE) — empowering teachers, learners, and school leaders to embed values into everyday learning and classroom culture.",
      image: `${process.env.PUBLIC_URL}/images/education.jpg`,
      link: "/schools",
      layout: "image-left",
      sectionId: "schools-section",
    },
    {
      id: 3,
      title: "Churches",
      description:
        "Faith forms the moral compass of society. Through church partnerships, CorePath equips ministries to make discipleship measurable — integrating values into children’s, youth, and family ministries. We help churches disciple both hearts and habits for lasting transformation.",
      framework:
        "Values-Driven Child & Parenting Tools (VDC + VDP) — structured lessons, reflection frameworks, and accountability groups that align spiritual formation with daily living.",
      image: `${process.env.PUBLIC_URL}/images/church.jpg`,
      link: "/churches",
      layout: "text-left",
      sectionId: "churches-section",
    },
    {
      id: 4,
      title: "Organizations",
      description:
        "Organizations are the public expression of private values. CorePath partners with institutions and companies to cultivate ethical leadership, integrity-driven cultures, and emotionally intelligent teams that reflect character, excellence, and purpose in every action.",
      framework:
        "Values-Driven Life & Leadership (VDL) — coaching leaders and teams to align belief with behavior, ensuring culture reflects conviction, not convenience.",
      image: `${process.env.PUBLIC_URL}/images/organization.jpg`,
      link: "/organizations",
      layout: "image-left",
      sectionId: "organizations-section",
    },
  ];

  // 🔹 Shared animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  });

  return (
    <section
      id="pillars"
      className="bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* -------------------------------------------------------------
         🔹 SECTION HEADER — Overview Text
         ------------------------------------------------------------- */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ amount: 0.3 }} // 👈 replayable
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
          Our Pillars of Impact
        </h2>
        <p className="text-lg md:text-xl font-light leading-relaxed text-teal-100">
          Every society stands on the strength of its families, the direction of its education,
          the conviction of its faith, and the integrity of its organizations. These four pillars
          shape CorePath Impact’s transformation ecosystem — restoring moral architecture from
          homes to schools, churches, and workplaces.
        </p>
      </motion.div>

      {/* -------------------------------------------------------------
         🔹 MAIN CONTENT — Four Pillars (Animated)
         ------------------------------------------------------------- */}
      <div className="space-y-24">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            id={pillar.sectionId}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              pillar.layout === "image-left" ? "md:[&>*:first-child]:order-last" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }} // 👈 triggers each time
          >
            {/* --- TEXT BLOCK --- */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-300">
                {pillar.title}
              </h3>
              <p className="text-teal-50 text-lg leading-relaxed mb-4">
                {pillar.description}
              </p>
              <p className="text-teal-100 mb-8">
                <span className="font-semibold text-white">Framework:</span>{" "}
                {pillar.framework}
              </p>
              <Link
                to={pillar.link}
                className="inline-block bg-yellow-400 text-teal-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                Learn More →
              </Link>
            </motion.div>

            {/* --- IMAGE BLOCK --- */}
            <motion.div
              variants={slideIn(pillar.layout === "image-left" ? "left" : "right")}
              className="w-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-teal-900 hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={pillar.image}
                alt={pillar.title}
                className="w-full h-auto max-h-[550px] object-contain object-center"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* -------------------------------------------------------------
         🔹 FOOTNOTE — Closing Message
         ------------------------------------------------------------- */}
      <motion.div
        className="text-center mt-24 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ amount: 0.3 }}
      >
        <p className="text-teal-100 italic text-lg leading-relaxed">
          Family plants values → Education nurtures them → Faith strengthens them → Organizations reflect them.
          <br />
          Together, they form the ecosystem of a Values-Driven Generation.
        </p>
      </motion.div>
    </section>
  );
}
