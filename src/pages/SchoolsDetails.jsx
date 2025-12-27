// -------------------------------------------------------------
// SchoolsDetails.jsx — Education Pillar (CorePath Impact)
// -------------------------------------------------------------
// 🧭 Purpose:
// Professionally structured and responsive details page for the
// Education Pillar — highlighting the Values-Ingrained Education (VIE)
// Framework, Teacher Accountability Circles (TACs), and outcomes.
// -------------------------------------------------------------

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SchoolsDetails() {
  // ✅ Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      {/* -------------------------------------------------------------
         🎓 HERO SECTION
         ------------------------------------------------------------- */}
      <div className="relative bg-teal-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Education Pillar — Values-Ingrained Education (VIE)
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Where knowledge meets character — transforming classrooms into
            culture-shaping environments of wisdom, diligence, and integrity.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 OVERVIEW
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              Education with Values, Not Just Information
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Education shapes how children think, relate, and envision their
              place in the world. Yet without values, knowledge becomes
              directionless. The{" "}
              <Link
                to="/vie-framework"
                className="text-teal-700 font-semibold hover:underline"
              >
                Values-Ingrained Education (VIE) Framework
              </Link>{" "}
              integrates moral formation with academic learning — ensuring that
              students don’t just grow in knowledge but in wisdom and virtue.
            </p>
            <p className="text-lg text-gray-700">
              VIE transforms schools into value-driven environments where
              academic excellence and moral integrity coexist — empowering
              teachers, students, and leaders to make values part of everyday
              learning.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/schools-classroom.jpg`}
              alt="Students learning with values"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 WHAT WE DO
         ------------------------------------------------------------- */}
      <div className="bg-teal-50 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
            🌱 What We Do
          </h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700 mb-10">
            <li>
              Partner with schools to embed value-based learning into classroom
              culture — aligning academic and moral development.
            </li>
            <li>
              Provide{" "}
              <Link
                to="/vie-workbook"
                className="text-teal-700 font-semibold hover:underline"
              >
                VIE Workbooks
              </Link>{" "}
              and Value Tracker Systems that help learners practice virtues like
              diligence, respect, teamwork, and honesty.
            </li>
            <li>
              Train teachers to use habit formation, reinforcement psychology,
              and biblical foundations in lesson design and discipline.
            </li>
            <li>
              Establish{" "}
              <Link
                to="/teacher-circles"
                className="text-teal-700 font-semibold hover:underline"
              >
                Teacher Accountability Circles (TACs)
              </Link>{" "}
              — reflective peer groups that sustain value integration.
            </li>
            <li>
              Guide school leadership in developing values policies and
              evaluation tools for tracking character growth.
            </li>
            <li>
              Engage parents and communities through workshops that extend
              school values into the home, promoting consistency.
            </li>
          </ul>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 HOW IT WORKS
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          ⚙️ How It Works
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The VIE system follows a structured cycle that ensures values move
          from concept to culture:
        </p>
        <div className="bg-teal-800 text-white rounded-2xl p-10 text-center shadow-md">
          <p className="text-2xl md:text-3xl font-semibold">
            Teach → Model → Reinforce → Track → Reflect → Celebrate
          </p>
          <p className="text-teal-200 mt-2 uppercase text-sm tracking-wide">
            The CorePath Value Integration Cycle
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 KEY OUTCOMES
         ------------------------------------------------------------- */}
      <div className="bg-teal-900 text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🌟 Key Outcomes
          </h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-teal-100">
            <li>
              Schools that nurture both minds and hearts — creating value-rich
              learning environments.
            </li>
            <li>
              Learners who demonstrate respect, diligence, empathy, and teamwork.
            </li>
            <li>
              Teachers who mentor through example, not just instruction.
            </li>
            <li>
              Parents who align with school values for home-school consistency.
            </li>
            <li>
              Institutions that measure success through both grades and character.
            </li>
            <li>
              Communities shaped by schools that stand as beacons of virtue.
            </li>
          </ul>
          <blockquote className="italic text-teal-200 text-lg mt-10 border-l-4 border-yellow-400 pl-4">
            “Education without values creates intellect without conscience.
            Values give direction to knowledge.”
          </blockquote>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 TESTIMONIALS
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          💬 School Impact Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "“Integrating VIE into our school culture transformed discipline into discipleship — we now see real growth in character.”",
              name: "Headteacher, Grace Junior School",
            },
            {
              quote:
                "“The VIE Workbook helped our students internalize respect and responsibility in ways no subject ever did.”",
              name: "Teacher, Covenant High School",
            },
            {
              quote:
                "“Our TAC sessions have made teaching a spiritual journey — not just a job.”",
              name: "Teacher, Hope Academy",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="italic text-gray-700 mb-4">{t.quote}</p>
              <p className="text-teal-700 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 BACK LINK
         ------------------------------------------------------------- */}
      <div className="text-center pb-20">
        <a
          href="/#schools-section"
          className="inline-block px-8 py-3 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition-all duration-300"
        >
          ← Back to Schools Section
        </a>
      </div>
    </section>
  );
}
