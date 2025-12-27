// -------------------------------------------------------------
// RollingImagesSection.jsx — Continuous Moving Image Strip
// -------------------------------------------------------------
// 🧭 Purpose:
// Displays continuously scrolling images from /public/images/rolling_images.
// Serves as a visual transition between sections of the homepage.
// -------------------------------------------------------------

import React from "react";

export default function RollingImagesSection() {
  const images = [
    "family-training.jpg",
    "school-learning.jpg",
    "church-service.jpg",
    "organization-leadership.jpg",
    "vdc-toolkit.jpg",
    "parenting-workshop.jpg",
    "teacher-circle.jpg",
    "youth-session.jpg",
  ];

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      {/* --- Optional Heading --- */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-teal-800 mb-6">
        Capturing the Heart of Transformation
      </h2>

      {/* --- Rolling Container --- */}
      <div className="relative w-full overflow-hidden">
        {/* Fade Edges for Smoothness */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Wrapper */}
        <div className="flex animate-scroll-slow space-x-6">
          {/* Duplicate the image set twice for infinite loop */}
          {[...images, ...images].map((img, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/images/rolling_images/${img}`}
              alt={`CorePath Impact Visual ${index + 1}`}
              className="w-64 h-40 md:w-80 md:h-52 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
