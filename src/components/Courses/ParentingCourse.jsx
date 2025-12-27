import React from "react";

export default function ParentingCourse() {
  return (
    <section
      id="parenting"
      className="bg-gray-50 text-gray-800 py-20 px-6 md:px-12 lg:px-20"
    >
      {/* HEADER */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        Values-Driven Parenting (VDP)
      </h2>

      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-12">
        Designed for parents and caregivers who want to raise children of
        conviction, not just compliance. Learn how to train the heart, not just
        behavior.
      </p>

      {/* COURSE LEVELS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            level: "VDP Level 1",
            desc: "Foundations of Sacred Stewardship — 4-week foundational training.",
            link: "/courses/vdp-level-1",
          },
          {
            level: "VDP Level 2",
            desc: "Advanced Application — tracking growth, correcting with grace.",
            link: "/courses/vdp-level-2",
          },
          {
            level: "VDP-C Certification",
            desc: "Become a certified parenting coach using CorePath frameworks.",
            link: "/courses/vdp-certification",
          },
        ].map((course, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">
              {course.level}
            </h3>
            <p className="text-gray-600 mb-6">{course.desc}</p>

            {/* CTA BUTTONS */}
            <div className="flex justify-center gap-4 mt-4">
              {/* Read More */}
              <a
                href={course.link}
                className="px-5 py-2 rounded-full border border-teal-600 text-teal-600 font-semibold
                hover:bg-teal-600 hover:text-white transition-all duration-300"
              >
                Read More
              </a>

              {/* Enroll */}
              <a
                href="/enroll/vdp"
                className="px-5 py-2 rounded-full bg-teal-700 text-white font-semibold
                hover:bg-teal-800 transition-all duration-300"
              >
                Enroll
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-16 bg-teal-900 text-white py-10 px-6 rounded-2xl text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Begin Your Parenting Transformation?
        </h3>

        <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
          Join hundreds of parents learning to train the heart, not just
          behavior. Start your journey toward intentional, values-based
          parenting today.
        </p>

        <a
          href="/enroll/vdp"
          className="bg-yellow-400 text-black px-10 py-3 rounded-full font-semibold
          hover:bg-yellow-300 transition duration-300"
        >
          Enroll in VDP Course
        </a>
      </div>
    </section>
  );
}
