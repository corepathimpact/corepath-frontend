// -------------------------------------------------------------
// Testimonials.jsx — "Voices of Transformation"
// -------------------------------------------------------------
// 🧭 Purpose:
// Displays 4 visible testimonials scrolling continuously.
// Pauses when hovered, enlarges hovered card with color change.
// -------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    quote:
      "“The VDC Toolkit completely changed how I parent. My children now love practicing values daily and track their growth joyfully.”",
    name: "— Sarah N., Parent, Nairobi",
  },
  {
    quote:
      "“Our school adopted the VIE model, and discipline transformed overnight. The atmosphere of respect and diligence is remarkable.”",
    name: "— Principal, Rockfield Senior School",
  },
  {
    quote:
      "“Becoming a VDP Coach gave my ministry a new purpose — discipling families for national transformation.”",
    name: "— Coach James, Uganda",
  },
  {
    quote:
      "“Through the Parenting Accountability Groups, I found support, growth, and the joy of seeing my family flourish in godly values.”",
    name: "— Mary A., PAG Leader, Kampala",
  },
  {
    quote:
      "“The VDP-CC Course has completely redefined how I approach ministry. It’s not just teaching—it’s transforming hearts and families.”",
    name: "— Pastor Chris, Bungoma (Currently Enrolled on VDP-CC)",
  },
  {
    quote:
      "“As a student counsellor, the VDP-CC training has given me practical tools to guide teenagers through emotional and moral challenges.”",
    name: "— Adonijah, Student Counsellor, Lenana School (VDP-CC Participant)",
  },
  {
    quote:
      "“The CorePath frameworks have deepened my counseling sessions. I now see healing through values and structure working hand in hand.”",
    name: "— Eunice, Counselor, Nairobi",
  },
  {
    quote:
      "“Our Parenting Accountability Group became a true family. The reflection sessions transformed not just my home, but my heart.”",
    name: "— Daniel K., Parent, Kampala",
  },
];

export default function Testimonials() {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  // ✅ Run animation after component mounts
  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, duration: 45, ease: "linear" },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <section className="relative bg-gradient-to-b from-teal-800 via-teal-900 to-teal-800 text-white py-20 overflow-hidden">
      {/* --- Header --- */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-4">
          Voices of Transformation
        </h2>
        <p className="text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Real stories from parents, teachers, and leaders who are shaping a
          values-driven generation through CorePath Impact.
        </p>
      </div>

      {/* --- Continuous Scroll Area --- */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-teal-800 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-teal-800 to-transparent z-10" />

        {/* Scrolling Container */}
        <motion.div
          className="flex"
          animate={controls}
          initial={{ x: 0 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <HoverCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------
   🔹 HoverCard — Individual Card with Hover Interaction
   ------------------------------------------------------------- */
const HoverCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-none w-[90%] sm:w-[45%] md:w-[25%] lg:w-[25%] p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          backgroundColor: hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)",
          boxShadow: hovered
            ? "0 0 25px rgba(255, 215, 0, 0.4)"
            : "0 0 10px rgba(255,255,255,0.1)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="backdrop-blur-lg rounded-2xl p-6 h-full border border-white/10 cursor-pointer text-left"
      >
        <p className="italic text-base md:text-lg leading-relaxed text-white/90 mb-4">
          {item.quote}
        </p>
        <p className="font-semibold text-yellow-300 text-sm">{item.name}</p>
      </motion.div>
    </motion.div>
  );
};
