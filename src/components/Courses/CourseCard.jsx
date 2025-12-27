// ============================================================================
// CourseCard.jsx — Enterprise Reusable Course Card Component
// -----------------------------------------------------------------------------
// PURPOSE:
//   • Display a clean, modern summary of a course
//   • Used in course list, featured sections, and marketing pages
//
// PROPS:
//   • course = {
//       id,
//       title,
//       bannerImage,
//       description,
//       price,
//       courseType,
//       duration,
//       slug
//     }
//
// CONNECTS TO:
//   - CourseDetails.jsx via URL: /courses/:slug or /courses/:id
//
// NOTES:
//   - Fully responsive & animated
//   - Supports Zoom / LMS / Hybrid badges
//   - Integrates well with TailwindCSS and Framer Motion (optional)
// ============================================================================

import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  const {
    id,
    title,
    bannerImage,
    description,
    price,
    courseType,
    duration,
    slug,
  } = course;

  // Format price nicely
  const formattedPrice = price
    ? `KES ${price.toLocaleString()}`
    : "Free";

  // Fallback banner if none exists
  const imageSrc =
    bannerImage ||
    "https://via.placeholder.com/600x400?text=Course+Image";

  // Badge styling for type
  const typeColors = {
    zoom: "bg-blue-600",
    lms: "bg-green-600",
    hybrid: "bg-purple-600",
  };

  const badgeClass = typeColors[courseType?.toLowerCase()] || "bg-gray-700";

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col">
      {/* BANNER IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        {/* COURSE TYPE BADGE */}
        <span
          className={`text-xs text-white px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wide ${badgeClass}`}
        >
          {courseType}
        </span>

        {/* TITLE */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        {/* DESCRIPTION PREVIEW */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {description || "No description available."}
        </p>

        {/* PRICE + DURATION */}
        <div className="mt-auto flex justify-between items-center">
          <span className="text-teal-700 font-semibold">{formattedPrice}</span>

          {duration && (
            <span className="text-gray-500 text-sm">
              {duration} hrs
            </span>
          )}
        </div>

        {/* ACTION BUTTON */}
        <Link
          to={`/courses/${slug || id}`}
          className="mt-5 block text-center bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition-all"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
