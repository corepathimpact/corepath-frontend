import React from "react";

export default function LeadershipCourse() {
  return (
    <section
      id="leadership"
      className="bg-gray-50 text-gray-800 py-20 px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        Values-Driven Leadership (VDL)
      </h2>

      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-12">
        Designed for organizational and church leaders seeking to align vision,
        culture, and performance with timeless godly values.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
        {[
          {
            title: "VDL Essentials",
            desc: "Leading with purpose, integrity, and moral conviction.",
          },
          {
            title: "VDL Executive",
            desc: "Building value-based cultures in teams and institutions.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/enroll/vdl"
          className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Enroll Your Team
        </a>
      </div>
    </section>
  );
}
