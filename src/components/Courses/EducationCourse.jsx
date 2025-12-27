import React from "react";

export default function EducationCourse() {
  return (
    <section
      id="education"
      className="bg-white text-gray-800 py-20 px-6 md:px-12 lg:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        Values-Ingrained Education (VIE)
      </h2>

      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-12">
        A teacher-training program designed to help schools integrate values
        into classroom culture, assessment, and co-curricular life.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "VIE Level 1",
            desc: "Understanding value formation in learning environments.",
          },
          {
            title: "VIE Level 2",
            desc: "Implementing values across subjects and activities.",
          },
          {
            title: "VIE Certification",
            desc: "Leadership course for school heads and education officers.",
          },
        ].map((course) => (
          <div
            key={course.title}
            className="bg-teal-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform"
          >
            <h3 className="text-2xl font-semibold text-teal-700 mb-3">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/enroll/vie"
          className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Register School
        </a>
      </div>
    </section>
  );
}
