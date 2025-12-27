// -------------------------------------------------------------
// OurPillarsOfImpact.jsx — "The 4 Pillars of Impact"
// -------------------------------------------------------------
// 🧭 Purpose:
// Displays CorePath Impact’s four major transformation ecosystems —
// Families, Schools, Churches, and Organizations — with alternating
// text/image layouts and turquoise theme.
// -------------------------------------------------------------

import React from "react";

export default function OurPillarsOfImpact() {
  return (
    <section className="bg-teal-800 text-white py-20 px-6 md:px-12 lg:px-20">
      {/* --- Header Section --- */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
          Our Pillars of Impact
        </h2>
        <p className="text-lg md:text-xl font-light leading-relaxed text-teal-100">
          Every society stands on the strength of its families, the direction of its education,
          the conviction of its faith, and the integrity of its organizations.
          These four pillars form the foundation of CorePath Impact’s mission —
          transforming hearts and systems through values that begin at home and ripple
          through schools, churches, and workplaces.
        </p>
      </div>

      {/* --- 1️⃣ Family Pillar --- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Text Left */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">1️⃣ Families</h3>
          <p className="text-teal-50 text-lg leading-relaxed mb-4">
            The foundation of all moral and emotional development. CorePath Impact restores
            the home as the center of value formation, helping parents disciple hearts and
            nurture purpose-driven children.
          </p>
          <p className="text-teal-100">
            <span className="font-semibold">Framework:</span> Values-Driven Parenting (VDP) —
            equipping parents through training, accountability groups (PAGs), and practical home tools.
          </p>
        </div>
        {/* Image Right */}
        <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={`${process.env.PUBLIC_URL}/images/family.jpg`}
            alt="Families - Values Driven Parenting"
            className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* --- 2️⃣ Education Pillar --- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Image Left */}
        <div className="order-1 md:order-none">
          <img
            src={`${process.env.PUBLIC_URL}/images/education.jpg`}
            alt="Schools - Values Ingrained Education"
            className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
          />
        </div>
        {/* Text Right */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">2️⃣ Schools</h3>
          <p className="text-teal-50 text-lg leading-relaxed mb-4">
            The environment where knowledge meets behavior. CorePath integrates values
            into learning through structured systems that grow both intellect and integrity.
          </p>
          <p className="text-teal-100">
            <span className="font-semibold">Framework:</span> Values-Ingrained Education (VIE) —
            empowering teachers, learners, and school leaders to embed values into everyday learning.
          </p>
        </div>
      </div>

      {/* --- 3️⃣ Faith Pillar --- */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        {/* Text Left */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">3️⃣ Churches</h3>
          <p className="text-teal-50 text-lg leading-relaxed mb-4">
            The spiritual and moral compass of communities. CorePath partners with churches
            to make discipleship measurable, embedding value formation into faith and family ministries.
          </p>
          <p className="text-teal-100">
            <span className="font-semibold">Framework:</span> Values-Driven Child & Parenting Tools (VDC + VDP) —
            structured lessons, accountability, and training resources for parents, children, and youth.
          </p>
        </div>
        {/* Image Right */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/church.jpg`}
            alt="Churches - Faith Integration"
            className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
          />
        </div>
      </div>

      {/* --- 4️⃣ Organizations Pillar --- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Left */}
        <div className="order-1 md:order-none">
          <img
            src={`${process.env.PUBLIC_URL}/images/organization.jpg`}
            alt="Organizations - Values Driven Leadership"
            className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
          />
        </div>
        {/* Text Right */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">4️⃣ Organizations</h3>
          <p className="text-teal-50 text-lg leading-relaxed mb-4">
            The sphere where adults model, lead, and influence culture. CorePath builds workplaces
            rooted in integrity, purpose, and emotional health.
          </p>
          <p className="text-teal-100">
            <span className="font-semibold">Framework:</span> Values-Driven Life & Leadership (VDL) —
            equipping leaders and teams to live their values, align culture, and lead ethically.
          </p>
        </div>
      </div>

      {/* --- Closing Statement --- */}
      <div className="text-center mt-20 max-w-3xl mx-auto">
        <p className="text-teal-100 italic text-lg leading-relaxed">
          Family plants values → Education nurtures them → Faith strengthens them → Organizations reflect them.
          <br />
          Together, they form the ecosystem of a Values-Driven Generation.
        </p>
      </div>
    </section>
  );
}
