import React from "react";

export default function CoursesHero() {
  return (
    <section className="relative bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900 text-white py-28 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Transform Your Impact Through{" "}
          <span className="text-gold">Values-Driven Training</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
          Whether you’re a parent, educator, coach, or leader — these courses
          equip you to shape hearts, build systems, and multiply transformation.
        </p>
        <a
          href="#parenting"
          className="bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Explore Courses
        </a>
      </div>

      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/training-bg.jpg)`,
        }}
      ></div>
    </section>
  );
}
