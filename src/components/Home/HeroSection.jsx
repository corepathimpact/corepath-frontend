// -------------------------------------------------------------
// HeroSection.jsx — CorePath Impact Homepage Hero Section
// -------------------------------------------------------------
// 🧭 Purpose:
// The top section of the homepage ("above the fold").
// It introduces CorePath Impact's mission through animated visuals,
// a full-screen layout, and clear call-to-action buttons.
//
// ✨ Features:
// • Full-screen layout (100vh height)
// • Smooth auto-rotating carousel with fade + zoom effect
// • Turquoise overlay for brand consistency
// • Centered headline, tagline, and CTAs
// • Responsive and fully mobile-friendly
// -------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 🔹 Background images — these should be stored in `public/images`
const heroImages = [
  "/images/hero-bg-1.jpg", // e.g., families together
  "/images/hero-bg-2.jpg", // e.g., school classroom
  "/images/hero-bg-3.jpg", // e.g., coaching session
  "/images/hero-bg-4.jpg", // e.g., youth event or community
];

export default function HeroSection() {
  // Keeps track of the currently active image in the carousel
  const [currentImage, setCurrentImage] = useState(0);

  // 🔁 Automatically rotate images every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    // ==========================================================
    // 🟢 HERO SECTION WRAPPER
    // Full-screen, covers 100% of the viewport height
    // ==========================================================
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* ========================================================
         🔹 BACKGROUND IMAGE LAYER
         Multiple stacked <img> tags; only the active one is visible.
         Adds a zoom-in animation using scale + opacity transition.
      ========================================================= */}
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`CorePath Impact Background ${index + 1}`}
          className={`
            absolute inset-0 w-full h-full object-cover 
            transition-all duration-[4000ms] ease-in-out
            ${
              index === currentImage
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }
          `}
        />
      ))}

      {/* ========================================================
         🔹 COLOR OVERLAY LAYER
         A turquoise gradient tint to unify all slides visually.
      ========================================================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-turquoise/80 via-turquoise/70 to-black/70"></div>

      {/* ========================================================
         🔹 CONTENT LAYER (Text + Buttons)
         Centered vertically and horizontally.
      ========================================================= */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        {/* --- MAIN HEADLINE --- */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl">
          Raising a <span className="text-gold">Values-Driven</span> Generation
        </h1>

        {/* --- SUBTEXT --- */}
        <p className="max-w-3xl text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
           Making values teachable, trainable, and liveable across families, schools, communities, and
          organizations.
        </p>

        {/* --- TAGLINE --- */}
        <p className="italic text-sm md:text-base text-yellow-200 mb-10">
          “From Home to Boardroom — Bringing Values Back to Life.”
        </p>

        {/* --- CALL-TO-ACTION BUTTONS --- */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/solutions"
            className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-md"
          >
            Explore Our Solutions
          </Link>
          <Link
            to="/courses"
            className="bg-white text-turquoise px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300 shadow-md"
          >
            Explore Our Training Courses
          </Link>
          <Link
            to="/get-started"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-turquoise hover:scale-105 transition duration-300 shadow-md"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* ========================================================
         🔹 CAROUSEL DOT INDICATORS
         Small interactive dots at the bottom center.
      ========================================================= */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {heroImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)} // manual switch on click
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentImage
                ? "bg-gold scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
