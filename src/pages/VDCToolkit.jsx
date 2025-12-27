import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function VDCToolkit() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className="bg-white text-gray-800 font-inter">
      {/* ------------------------------------------------------------- */}
      {/* 🔹 HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
          The Values-Driven Child (VDC) Toolkit
        </h1>
        <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto">
          A transformative toolkit that turns values into habits, habits into character, and character into destiny.
        </p>
        <div className="mt-6">
          <Link
            to="/shop/vdc-toolkit"
            className="inline-block bg-yellow-400 text-teal-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all"
          >
            🛒 Order Your Toolkit
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 🔹 TOOLKIT OVERVIEW */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 leading-relaxed">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
              What Is the VDC Toolkit?
            </h2>
            <p className="text-gray-700 mb-4">
              The <strong>Values-Driven Child Toolkit</strong> is a structured, interactive resource that helps parents, schools, and coaches train the heart of a child through measurable daily practices.  
            </p>
            <p className="text-gray-700 mb-4">
              Designed around CorePath Impact’s <strong>ATTR Framework</strong> — <em>Affirm, Train, Track, Reward</em> — it transforms values from abstract concepts into tangible habits that shape lifelong character.  
            </p>
            <p className="text-gray-700">
              The toolkit brings neuroscience, Scripture, and behavior-change psychology into one practical system for everyday parenting.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={`${process.env.PUBLIC_URL}/images/vdc-kit-angle1.jpg`} alt="Toolkit overview" className="rounded-xl object-cover" />
            <img src={`${process.env.PUBLIC_URL}/images/vdc-kit-inside.jpg`} alt="Inside the toolkit" className="rounded-xl object-cover" />
            <img src={`${process.env.PUBLIC_URL}/images/vdc-kit-flat.jpg`} alt="Toolkit flatlay" className="rounded-xl object-cover col-span-2" />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 🔹 DESIGN PRINCIPLES */}
      <div className="bg-teal-50 py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6">
            Built on Timeless Principles for Lifelong Transformation
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">1️⃣ Heart-Based Training</h3>
              <p className="text-gray-700 text-sm">
                Focuses on transforming beliefs and convictions — not just outward behavior — aligning with Proverbs 4:23: “Guard your heart, for it determines the course of your life.”
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">2️⃣ Habit Formation Science</h3>
              <p className="text-gray-700 text-sm">
                Applies the psychology of repetition, reflection, and reward — forming lasting habits through daily measurable practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">3️⃣ Faith + Framework</h3>
              <p className="text-gray-700 text-sm">
                Grounded in Biblical truth, the toolkit integrates Scripture with practical systems — ensuring values are taught, lived, and rewarded.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 🔹 WHAT’S INSIDE */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 text-center mb-10">
          📦 What’s Inside the Toolkit
        </h2>

        {/* Train-Up Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img src={`${process.env.PUBLIC_URL}/images/trainup-card.jpg`} alt="Train-Up Cards" className="rounded-xl object-cover w-full md:max-h-[320px]" />
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">🟢 Train-Up Cards</h3>
            <p className="text-gray-700 text-sm mb-3">
              Provide children with daily, value-based practices that shape consistent moral habits. Each card defines the value, offers age-specific daily tasks, and integrates relevant Bible verses.
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm mb-4">
              <li>48 Cards per age group</li>
              <li>12 Core values × 4 practices each</li>
              <li>Progress tracking built into each card</li>
            </ul>
            <Link to="/shop/train-up-cards" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
        </div>

        {/* Corrective Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">🔴 Corrective Cards</h3>
            <p className="text-gray-700 text-sm mb-3">
              Turn mistakes into learning moments. Each card guides reflection, discussion, and commitment through a 4-step restorative process — Reflect, Reinforce, Discuss, Commit.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Encourages grace-based correction that builds character rather than fear.
            </p>
            <Link to="/shop/corrective-cards" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/corrective-card.jpg`} alt="Corrective Card" className="rounded-xl object-cover w-full md:max-h-[320px]" />
        </div>

        {/* Star Reward Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img src={`${process.env.PUBLIC_URL}/images/star-reward-card.jpg`} alt="Star Reward Card" className="rounded-xl object-cover w-full md:max-h-[320px]" />
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">🌟 Star Reward Cards</h3>
            <p className="text-gray-700 text-sm mb-3">
              Celebrate consistency and effort. When a child exceeds their daily value target, the Star Card is awarded — turning positive behavior into measurable celebration.
            </p>
            <p className="text-gray-700 text-sm mb-4">
              Each card carries points, affirmation messages, and reflection prompts that reinforce growth.
            </p>
            <Link to="/shop/star-reward-cards" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
        </div>

        {/* Affirmation Cards */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">💬 Affirmation Cards</h3>
            <p className="text-gray-700 text-sm mb-3">
              Words shape identity. These cards help both parent and child speak truth, confidence, and faith over themselves daily.
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm mb-4">
              <li>Five themed sets — Identity, Purpose, Spiritual Growth, Diligence, and Relationships.</li>
              <li>Parent-child dual reading design.</li>
            </ul>
            <Link to="/shop/affirmation-cards" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/affirmation-card.jpg`} alt="Affirmation Card" className="rounded-xl object-cover w-full md:max-h-[320px]" />
        </div>

        {/* Predisposition Quick Card */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img src={`${process.env.PUBLIC_URL}/images/predisposition-card.jpg`} alt="Predisposition Quick Card" className="rounded-xl object-cover w-full md:max-h-[320px]" />
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">🧭 Predispositions Quick Card</h3>
            <p className="text-gray-700 text-sm mb-4">
              Based on CorePath’s four-color personality model — Blue, Gold, Green, and Orange — this quick guide helps parents understand a child’s innate wiring and adapt parenting accordingly.
            </p>
            <Link to="/shop/predisposition-card" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
        </div>

        {/* Reward Chart */}
        <div className="grid md:grid-cols-2 gap-10 mb-10 items-center">
          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-2">📊 My VDC Reward Chart</h3>
            <p className="text-gray-700 text-sm mb-4">
              A colorful, visual progress tracker that allows families to monitor value-practice consistency across the week. The chart supports both Star Reward and Corrective feedback cycles.
            </p>
            <Link to="/shop/vdc-reward-chart" className="text-yellow-500 font-medium hover:text-yellow-400">
              View Product →
            </Link>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/reward-chart.jpg`} alt="Reward Chart" className="rounded-xl object-cover w-full md:max-h-[320px]" />
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 🔹 TESTIMONIALS */}
      <div className="bg-teal-900 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">💬 What Parents Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "“The toolkit transformed how we parent — now values are visible and measurable.”",
              "“Our evenings are no longer about scolding, but celebrating.”",
              "“The ATTR system keeps us consistent and our children motivated.”",
            ].map((q, i) => (
              <div key={i} className="bg-white text-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition-all">
                <p className="italic text-sm mb-2">{q}</p>
                <p className="text-teal-700 font-semibold text-xs">— Parent, VDC User</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 🔹 CTA / FOOTER */}
      <div className="text-center py-12">
        <Link
          to="/shop/vdc-toolkit"
          className="inline-block px-8 py-3 bg-yellow-400 text-teal-900 rounded-full font-semibold hover:bg-yellow-300 transition-all shadow-md"
        >
          🛒 Get the Complete Toolkit
        </Link>
        <p className="text-sm text-gray-600 mt-4">
          or explore individual tools below through our{" "}
          <a href="https://corepathimpact.com/store" className="text-teal-700 font-medium hover:underline">
            online store
          </a>.
        </p>
      </div>
    </section>
  );
}
