// -------------------------------------------------------------
// NewsletterSignup.jsx — "Join the Movement"
// -------------------------------------------------------------
// 🧭 Purpose:
// Encourages visitors to subscribe for parenting insights,
// training invites, and free resources.
// Includes animated gradient background + responsive layout.
// -------------------------------------------------------------

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    // 🔹 TODO: Connect this to backend (Mailchimp, SendGrid, etc.)
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-white">
      {/* --- Animated background overlay --- */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/pattern-bg.png)`,
        }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* --- Content Container --- */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          🌱 Join the Movement
        </motion.h2>

        <p className="text-lg md:text-xl text-teal-100 leading-relaxed mb-8">
          Get weekly parenting insights, training invites, and free resources
          directly in your inbox.
        </p>

        {/* --- Subscription Form --- */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="px-5 py-3 rounded-full w-full sm:w-2/3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-teal-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <motion.p
            className="text-yellow-300 font-medium text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🎉 Thank you for subscribing! Stay tuned for updates.
          </motion.p>
        )}

        <p className="text-sm text-teal-200 italic">
          We respect your inbox — no spam, ever.
        </p>
      </div>
    </section>
  );
}
