// -------------------------------------------------------------
// AboutHero.jsx — Seamless Infinite Marquee Hero Section
// -------------------------------------------------------------
// 🌍 Purpose:
// Creates a perfectly continuous left-to-right movement
// of the tagline without visible looping or stutter.
// -------------------------------------------------------------

import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section
      className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-teal-700 text-white py-36 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* 🌍 Animated Background Overlay */}
      <motion.div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/world-map-bg.png)`,
        }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      {/* ✨ Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-yellow-300 drop-shadow-lg">
          Restoring Nations through Values
        </h1>

        {/* Faith-integrated tagline */}
        <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto mb-10">
          We believe transformation is not accidental — it’s intentional. <br />
          It begins at home, is nurtured in schools, strengthened in the Church,
          and expressed through organizations and leadership — turning values
          into a movement that restores nations for God’s glory.
        </p>

        {/* Divider */}
        <div className="flex justify-center mt-8 mb-10">
          <div className="h-1 w-24 bg-yellow-400 rounded-full shadow-lg"></div>
        </div>

        {/* 🌟 Perfectly Continuous Rolling Tagline */}
        <div className="relative overflow-hidden w-full mt-8">
          <motion.div
            className="flex whitespace-nowrap text-lg md:text-2xl italic text-yellow-200 font-semibold tracking-wide"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* 🔁 Duplicate the text twice for seamless scroll */}
            <span className="pr-24">
              One Child. One Home. One School. One Church. One Leader at a Time.{" "}
            </span>
            <span className="pr-24">
              One Child. One Home. One School. One Church. One Leader at a Time.{" "}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
