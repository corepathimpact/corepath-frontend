// -------------------------------------------------------------
// OrganizationsDetails.jsx — Organizations Pillar (CorePath Impact)
// -------------------------------------------------------------
// 🧭 Purpose:
// Professionally structured and responsive page for the
// Organizations Pillar — featuring the Organizational Transformation
// Framework (OTF) and Values-Driven Life Coaching (VDL) Program.
// -------------------------------------------------------------

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OrganizationsDetails() {
  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      {/* -------------------------------------------------------------
         🌍 HERO SECTION
         ------------------------------------------------------------- */}
      <div className="relative bg-teal-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Organizations Pillar — Workplace & Community Value Systems
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Transforming workplaces into value-driven ecosystems — where
            excellence, ethics, and empathy thrive together.
          </p>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 OVERVIEW
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 leading-relaxed">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              Building Integrity-Centered Organizational Cultures
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Organizations and workplaces are the public expression of values —
              what people believe privately shapes how they lead, collaborate,
              and create. The culture of companies, ministries, and institutions
              reflects the hearts of the people within them.
            </p>
            <p className="text-lg text-gray-700">
              Through this pillar, CorePath Impact helps organizations embed
              value-based leadership, integrity systems, and transformational
              workplace cultures that produce both{" "}
              <strong>excellence and ethics</strong>. Our goal is to ensure that
              values are not just written on walls but{" "}
              <strong>lived in the halls</strong> — practiced daily in
              decision-making, teamwork, and service.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/organization-culture.jpg`}
              alt="Organizational culture and values"
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
              Conduct training and workshops on{" "}
              <strong>Values-Driven Leadership</strong>,{" "}
              <strong>Servant Leadership</strong>,{" "}
              <strong>Workplace Integrity</strong>, and{" "}
              <strong>Emotional Intelligence</strong>, equipping teams to align
              principles with action.
            </li>
            <li>
              Define and align organizational core values with measurable
              behavior systems — integrating them into HR, leadership, and
              performance appraisals.
            </li>
            <li>
              Facilitate transformation workshops for boards, executives, and
              community leaders to foster ethical, human-centered cultures.
            </li>
            <li>
              Implement the{" "}
              <Link
                to="/vdl-coaching"
                className="text-teal-700 font-semibold hover:underline"
              >
                Values-Driven Life Coaching (VDL) Program
              </Link>{" "}
              — personalizing growth and linking individual purpose with
              organizational mission.
            </li>
            <li>
              Support development of{" "}
              <strong>Life Values Action Plans (LVAPs)</strong> — tailored
              guides connecting professional excellence with moral consistency.
            </li>
            <li>
              Conduct{" "}
              <Link
                to="/otf-framework"
                className="text-teal-700 font-semibold hover:underline"
              >
                Organizational Culture Audits
              </Link>{" "}
              to assess the gap between stated and lived values.
            </li>
            <li>
              Offer executive and team coaching that strengthens leadership
              empathy, resilience, and accountability.
            </li>
            <li>
              Extend impact into the community — training leaders and employees
              to carry values into their homes and social networks.
            </li>
          </ul>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 ORGANIZATIONAL TRANSFORMATION FRAMEWORK (OTF)
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          ⚙️ The Organizational Transformation Framework (OTF)
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          The OTF ensures that transformation is both cyclical and measurable —
          guiding organizations from definition to sustainability:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Phase</th>
                <th className="py-3 px-4 text-left font-semibold">Focus</th>
                <th className="py-3 px-4 text-left font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                {
                  phase: "Define",
                  focus:
                    "Identify and clarify the organization’s true core values.",
                  outcome:
                    "Clear value anchors that shape identity and direction.",
                },
                {
                  phase: "Align",
                  focus:
                    "Integrate values into systems, structures, and processes.",
                  outcome: "Consistency between policies and daily practice.",
                },
                {
                  phase: "Train",
                  focus:
                    "Build capacity through workshops and leadership programs.",
                  outcome:
                    "Staff empowered with moral clarity and emotional intelligence.",
                },
                {
                  phase: "Coach",
                  focus:
                    "Offer personalized Values-Driven Life Coaching sessions.",
                  outcome:
                    "Individual transformation that strengthens team culture.",
                },
                {
                  phase: "Sustain",
                  focus:
                    "Monitor, celebrate, and reward values-based performance.",
                  outcome:
                    "A thriving workplace culture that sustains excellence and ethics.",
                },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="py-3 px-4 font-semibold text-teal-700">
                    {row.phase}
                  </td>
                  <td className="py-3 px-4">{row.focus}</td>
                  <td className="py-3 px-4">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 VALUES-DRIVEN LIFE COACHING
         ------------------------------------------------------------- */}
      <div className="bg-teal-900 text-white py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            🌿 Values-Driven Life Coaching (VDL)
          </h2>
          <p className="text-lg text-teal-100 mb-8">
            The VDL Coaching Program personalizes transformation — helping
            individuals align personal growth with organizational culture,
            purpose, and productivity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "One-on-One Coaching",
                desc: "Individual sessions linking personal goals with organizational values and accountability structures.",
              },
              {
                title: "Group Coaching Circles",
                desc: "Peer accountability and reflective learning spaces for professional and moral growth.",
              },
              {
                title: "Life Improvement Guides",
                desc: "Customized materials focused on diligence, honesty, teamwork, and purpose.",
              },
              {
                title: "Leadership Renewal Retreats",
                desc: "Blending executive development with spiritual and emotional restoration.",
              },
              {
                title: "Values Application Roadmaps",
                desc: "Action-oriented tools that turn core values into daily practices and habits.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-xl text-teal-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/vdl-coaching"
              className="inline-block px-8 py-3 bg-yellow-400 text-teal-900 font-semibold rounded-full shadow-md hover:bg-yellow-300 transition-all duration-300"
            >
              Explore VDL Coaching →
            </Link>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 KEY OUTCOMES
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          🌟 Key Outcomes
        </h2>
        <ul className="list-disc pl-8 space-y-4 text-lg text-gray-700 mb-10">
          <li>
            Ethical workplaces that balance performance with purpose and profit
            with principle.
          </li>
          <li>
            Leaders who model servant leadership, moral courage, and trust.
          </li>
          <li>
            Organizational cultures that inspire empathy, accountability, and
            innovation.
          </li>
          <li>
            Employees who live out organizational values both at work and at
            home.
          </li>
          <li>
            Communities positively influenced by value-based institutions and
            leaders.
          </li>
        </ul>

        <blockquote className="italic text-teal-700 text-lg border-l-4 border-teal-600 pl-4">
          “When values guide leadership, excellence follows naturally.”
        </blockquote>
      </div>

      {/* -------------------------------------------------------------
         🔹 TESTIMONIALS
         ------------------------------------------------------------- */}
      <div className="bg-teal-50 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            💬 Organizational Impact Stories
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Real transformations from workplaces that embraced value-driven
            leadership and culture renewal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "“Our staff morale and accountability transformed after CorePath’s Values-Driven Leadership training — performance now flows from purpose.”",
              name: "HR Manager, Grace Healthcare Ltd",
            },
            {
              quote:
                "“The organizational audit exposed gaps we didn’t see — now we lead with clarity, consistency, and compassion.”",
              name: "CEO, Destiny Bank",
            },
            {
              quote:
                "“VDL coaching gave our executives a spiritual and emotional reset. It’s changed how we lead and relate.”",
              name: "Director, Hope Ministries International",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
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
        <Link
          to="/?scroll=organizations-section"
          className="inline-block px-8 py-3 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition-all duration-300"
        >
          ← Back to Organizations Section
        </Link>
      </div>
    </section>
  );
}
