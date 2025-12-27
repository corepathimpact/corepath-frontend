// -------------------------------------------------------------
// ChurchesDetails.jsx — Faith Pillar (CorePath Impact)
// -------------------------------------------------------------
// 🧭 Purpose:
// Professionally structured and responsive details page for the
// Faith Pillar — highlighting Church Discipleship Integration,
// Values-Driven Child (VDC) & Parenting (VDP), and Ministry
// Accountability Clusters (MACs).
// -------------------------------------------------------------

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ChurchesDetails() {
  // ✅ Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      {/* -------------------------------------------------------------
         ✝️ HERO SECTION
         ------------------------------------------------------------- */}
      <div className="relative bg-teal-900 text-white py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
            Faith Pillar — Church & Discipleship Integration
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Partnering with churches to disciple both hearts and habits —
            transforming families, ministries, and communities through
            values-based faith formation.
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
              Discipleship that Shapes Character and Community
            </h2>
            <p className="text-lg text-gray-700 mb-5">
              Faith is the moral and spiritual anchor of society. The church
              holds a divine responsibility to cultivate transformation from the
              inside out — discipling believers to reflect God’s character in
              every area of life.
            </p>
            <p className="text-lg text-gray-700">
              Through this pillar, CorePath Impact partners with churches,
              ministries, and faith-based organizations to integrate
              values-driven discipleship, family empowerment, and intentional
              parenting into the spiritual life of the church.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.PUBLIC_URL}/images/church-discipleship.jpg`}
              alt="Faith-based discipleship in church"
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
              Collaborate with pastors and church leaders to establish{" "}
              <Link
                to="/values-driven-family-ministry"
                className="text-teal-700 font-semibold hover:underline"
              >
                Values-Driven Family Ministries
              </Link>{" "}
              that disciple both parents and children.
            </li>
            <li>
              Train Sunday school teachers, youth leaders, and facilitators to
              integrate values into every lesson and activity.
            </li>
            <li>
              Equip churches with{" "}
              <Link
                to="/vdc-toolkit"
                className="text-teal-700 font-semibold hover:underline"
              >
                VDC (Values-Driven Child)
              </Link>{" "}
              and{" "}
              <Link
                to="/values-driven-parenting"
                className="text-teal-700 font-semibold hover:underline"
              >
                VDP (Values-Driven Parenting)
              </Link>{" "}
              tools to make discipleship measurable.
            </li>
            <li>
              Provide Sunday school and youth materials where moral and
              spiritual development grow together.
            </li>
            <li>
              Support churches as accountability anchors for{" "}
              <Link
                to="/pag"
                className="text-teal-700 font-semibold hover:underline"
              >
                Parenting Accountability Groups (PAGs)
              </Link>
              , helping families track and reinforce growth.
            </li>
            <li>
              Train pastors and family ministry leaders to run
              church-based{" "}
              <Link
                to="/vdp"
                className="text-teal-700 font-semibold hover:underline"
              >
                Values-Driven Parenting (VDP)
              </Link>{" "}
              programs.
            </li>
            <li>
              Develop workshops such as{" "}
              <strong>Parenting as a Calling</strong>,{" "}
              <strong>Values-Driven Discipleship</strong>, and{" "}
              <strong>Restoring the Family Altar</strong>.
            </li>
            <li>
              Establish{" "}
              <Link
                to="/mac"
                className="text-teal-700 font-semibold hover:underline"
              >
                Ministry Accountability Clusters (MACs)
              </Link>{" "}
              connecting pastors and facilitators for shared learning.
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
        <p className="text-lg text-gray-700 mb-6">
          Faith integration happens through a three-dimensional approach that
          ensures both spiritual growth and behavioral transformation:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Dimension</th>
                <th className="py-3 px-4 text-left font-semibold">Focus</th>
                <th className="py-3 px-4 text-left font-semibold">Outcome</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td className="py-3 px-4 font-semibold text-teal-700">
                  Equip
                </td>
                <td className="py-3 px-4">
                  Train pastors, Sunday school teachers, youth facilitators, and
                  parents with tools for values-based discipleship.
                </td>
                <td className="py-3 px-4">
                  Skilled, confident leaders equipped to disciple holistically.
                </td>
              </tr>
              <tr className="border-t bg-gray-50">
                <td className="py-3 px-4 font-semibold text-teal-700">
                  Embed
                </td>
                <td className="py-3 px-4">
                  Ingrain values into all church programs — sermons, Sunday
                  school, youth and parenting ministries.
                </td>
                <td className="py-3 px-4">
                  Churches that disciple both hearts and habits.
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4 font-semibold text-teal-700">
                  Empower
                </td>
                <td className="py-3 px-4">
                  Support churches to serve as accountability and training
                  centers for families.
                </td>
                <td className="py-3 px-4">
                  Sustainable transformation through faith and community.
                </td>
              </tr>
            </tbody>
          </table>
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
              Churches that disciple families holistically, with measurable
              values integration.
            </li>
            <li>
              Children and youth growing in both biblical understanding and
              moral strength.
            </li>
            <li>
              Parents supported through church-based{" "}
              <Link
                to="/pag"
                className="text-yellow-300 font-semibold hover:underline"
              >
                Parenting Accountability Groups (PAGs)
              </Link>{" "}
              and{" "}
              <Link
                to="/vdp"
                className="text-yellow-300 font-semibold hover:underline"
              >
                VDP Programs
              </Link>
              .
            </li>
            <li>
              Churches functioning as community transformation centers.
            </li>
            <li>
              Faith communities that nurture believers who embody kingdom
              values daily.
            </li>
          </ul>

          <blockquote className="italic text-teal-200 text-lg mt-10 border-l-4 border-yellow-400 pl-4">
            “Faith is not inherited — it is nurtured. When the church equips
            families, it strengthens the nation.”
          </blockquote>
        </div>
      </div>

      {/* -------------------------------------------------------------
         🔹 TESTIMONIALS
         ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
          💬 Church Impact Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "“After integrating VDC lessons, our Sunday school now disciples with structure — not just storytelling.”",
              name: "Children’s Pastor, Watoto Church",
            },
            {
              quote:
                "“Our PAG meetings have turned into moments of revival for families.”",
              name: "Parent Leader, Kingdom Life Centre",
            },
            {
              quote:
                "“Through the MACs, pastors now share and grow together — ensuring the flame of discipleship never dies.”",
              name: "Senior Pastor, Faith Harvest Ministries",
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
          href="/#churches-section"
          className="inline-block px-8 py-3 bg-teal-900 text-white rounded-full font-medium hover:bg-teal-700 transition-all duration-300"
        >
          ← Back to Churches Section
        </a>
      </div>
    </section>
  );
}
