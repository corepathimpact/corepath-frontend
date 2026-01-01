// -------------------------------------------------------------
// FamiliesDetails.jsx — Family Pillar (CorePath Impact)
// -------------------------------------------------------------
// 🧭 Purpose:
// Professional, responsive Family Pillar details page highlighting:
// - Family transformation
// - Values-Driven Parenting (VDP)
// - Parenting Accountability Groups (PAGs)
// - Testimonials and outcomes
// -------------------------------------------------------------

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FamiliesDetails() {
  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      {/* -------------------------------------------------------------
         🔹 HERO / TOP SECTION (No background image)
         ------------------------------------------------------------- */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            The Family Pillar
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Restoring the home as the center of value formation — where hearts
            are nurtured, habits are shaped, and transformation begins.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 INTRODUCTION SECTION
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 leading-relaxed">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              Restoring the Home as the Center of Transformation
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              The Family Pillar focuses on restoring the home as the{" "}
              <strong>seedbed of transformation</strong> — where values are
              first modeled, practiced, and reinforced. The family is the first
              classroom of life and the most powerful influence on a child’s
              heart.
            </p>
            <p className="text-lg text-gray-700">
              CorePath Impact equips parents to move from{" "}
              <strong>reactive</strong> to{" "}
              <strong>intentional, values-based parenting</strong> — helping
              them disciple their children’s hearts through structure, love, and
              spiritual guidance.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/family-section.jpg`}
              alt="Family transformation through parenting"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
   🔹 OUR APPROACH SECTION (Image on Side)
   ------------------------------------------------------------- */}
      <div className="bg-teal-50 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* --- TEXT --- */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
              🌱 Our Approach within the Family Pillar
            </h2>
            <p className="text-lg mb-6 text-gray-700">
              We use the{" "}
              <Link
                to="/values-driven-parenting"
                className="text-teal-700 font-semibold hover:underline"
              >
                Values-Driven Parenting (VDP) Framework
              </Link>{" "}
              to help parents:
            </p>

            <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-8">
              <li>Train and track daily value practices at home.</li>
              <li>
                Build consistency through structured tools such as{" "}
                <Link
                  to="/vdc-toolkit"
                  className="text-teal-700 font-semibold hover:underline"
                >
                  VDC Toolkit
                </Link>
                , Star Reward Cards, and Corrective Cards.
              </li>
              <li>
                Reinforce godly character through accountability, reflection,
                and reward systems.
              </li>
            </ul>

            <p className="text-lg text-gray-700">
              But training parents is only the first step — sustaining
              transformation requires community.
            </p>
          </div>

          {/* --- IMAGE --- */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/vdc-toolkit.jpg`}
              alt="VDC Toolkit for Parenting"
              className="w-full h-auto object-cover md:max-h-[450px]"
            />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 PAG SECTION
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          🤝 Parenting Accountability Groups (PAGs)
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Parenting Accountability Groups (
          <Link
            to="/pag"
            className="text-teal-700 font-semibold hover:underline"
          >
            PAGs
          </Link>
          ) are small guided circles that turn learning into lifestyle — helping
          parents reflect, grow, and sustain transformation together.
        </p>

        <h3 className="text-xl font-semibold text-teal-700 mb-3">
          Purpose of PAGs
        </h3>
        <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-8">
          <li>Create safe, encouraging spaces for shared growth.</li>
          <li>Promote spiritual fellowship and peer mentorship.</li>
          <li>Ensure transformation is collective and sustainable.</li>
        </ul>

        {/* PAG flow visual */}
        <div className="bg-teal-800 text-white text-center py-10 px-6 rounded-2xl shadow-md mb-10">
          <p className="text-xl md:text-2xl font-semibold">
            Reflect → Review → Action → Prayer
          </p>
          <p className="text-teal-200 mt-2 text-sm uppercase tracking-wide">
            The Weekly Parenting Accountability Flow
          </p>
        </div>

        {/* PAG structure */}
        <h3 className="text-xl font-semibold text-teal-700 mb-3">
          Structure of PAGs
        </h3>
        <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-8">
          <li>6–10 parents per accountability circle.</li>
          <li>
            Weekly or biweekly sessions led by a facilitator using{" "}
            <Link
              to="/pat"
              className="text-teal-700 font-semibold hover:underline"
            >
              Parenting Accountability Trackers (PAT)
            </Link>
            .
          </li>
          <li>
            Reflection Format:{" "}
            <strong>Reflect → Review → Action → Prayer</strong>
          </li>
          <li>
            Support Tools: VDP Manuals, Family Value Trackers, PAG Sheets.
          </li>
        </ul>
      </div>

      {/* -------------------------------------------------------------
         🔹 TESTIMONIALS SECTION
         ------------------------------------------------------------- */}
      <div className="bg-teal-900 text-white py-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">💬 Parent Testimonies</h2>
          <p className="text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Real stories from parents who have embraced Values-Driven Parenting
            and Accountability Groups — walking the journey of transformation
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "“The Parenting Accountability Group changed our family rhythm. It’s not just about discipline anymore — we’re growing together.”",
              name: "Parent, VDP Class 001",
            },
            {
              quote:
                "“Through the Train-Up Cards, our children now understand respect, diligence, and time management in a fun way.”",
              name: "Parent, VDC Toolkit User",
            },
            {
              quote:
                "“The weekly reflections helped us bring God back to the center of our parenting.”",
              name: "Parent, PAG Cluster Leader",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="italic text-base mb-4">{t.quote}</p>
              <p className="text-teal-700 font-semibold text-sm">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 WHAT WE DO SECTION
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          🌿 What We Do
        </h2>
        <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-8">
          <li>
            Train parents through the{" "}
            <Link
              to="/values-driven-parenting"
              className="text-teal-700 font-semibold hover:underline"
            >
              Values-Driven Parenting Framework
            </Link>{" "}
            — teaching them to train, track, and reward values at home.
          </li>
          <li>
            Provide tools like the{" "}
            <Link
              to="/vdc-toolkit"
              className="text-teal-700 font-semibold hover:underline"
            >
              VDC Toolkit
            </Link>{" "}
            that comes with Train-Up Cards, Reward Systems, and Corrective
            Frameworks.
          </li>
          <li>
            Empower families to create nurturing environments that promote
            emotional stability, moral consistency, and spiritual growth.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-teal-700 mb-3">
          Key Outcomes
        </h3>
        <ul className="list-disc pl-8 space-y-3 text-gray-700 text-lg mb-10">
          <li>Spiritually grounded and emotionally resilient children.</li>
          <li>Improved family communication and shared values.</li>
          <li>Homes that become micro-centers of transformation.</li>
        </ul>

        <blockquote className="text-lg italic text-gray-700 border-l-4 border-teal-700 pl-4 mb-10">
          “The home is the first place values are planted, and the heart is the
          first soil they grow in.”
        </blockquote>
      </div>

      {/* -------------------------------------------------------------
         🔹 BACK LINK
         ------------------------------------------------------------- */}
      <div className="text-center pb-20">
        <Link
          to="/?scroll=families-section"
          className="inline-block px-8 py-3 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition-all duration-300"
        >
          ← Back to Families Section
        </Link>
      </div>
    </section>
  );
}
