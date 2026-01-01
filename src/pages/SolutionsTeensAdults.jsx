import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserCheck,
  Shield,
  Award,
  TrendingUp,
  ArrowRight,
  Users,
} from "lucide-react";

export default function SolutionsTeensAdults() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const adultFeatures = [
    {
      icon: Shield,
      title: "Values Alignment",
      description:
        "Align your daily decisions with your deepest-held convictions for a life of integrity.",
    },
    {
      icon: UserCheck,
      title: "Leadership & Responsibility",
      description:
        "Strengthen your capacity to lead with character in your family, work, and community.",
    },
    {
      icon: Award,
      title: "Personal Discipline",
      description:
        "Build consistent habits that reinforce discipline, focus, and personal mastery.",
    },
    {
      icon: TrendingUp,
      title: "Lifelong Growth",
      description:
        "Engage in a refining process that clarifies purpose and strengthens your character over time.",
    },
  ];

  const youthFeatures = [
    {
      icon: Shield,
      title: "Identity Formation",
      description:
        "Transition from guided values to internalized convictions and a strong sense of self.",
    },
    {
      icon: UserCheck,
      title: "Ownership & Responsibility",
      description:
        "Learn to take ownership of your time, work, and relationships with maturity.",
    },
    {
      icon: Award,
      title: "Self-Discipline",
      description:
        "Develop the foundational habits of self-management and purposeful decision-making.",
    },
    {
      icon: TrendingUp,
      title: "Preparation for Adulthood",
      description:
        "Build a strong character foundation that prepares you for future challenges and leadership.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* HERO SECTION */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants}>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold tracking-wide hover:text-teal-800 transition"
                >
                  <ArrowRight className="h-4 w-4 transform rotate-180" />
                  Back to Solutions
                </Link>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
              >
                Values-Driven Life (VDL)
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                For teens and adults, character is not just formed—it's forged.
                VDL provides a robust framework for strengthening identity,
                discipline, and purpose through every stage of life, from
                adolescence to mature adulthood.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Values-Driven Life (VDL)
                </Link>
                <Link
                  to="/courses"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  View VDL Programs & Pathways
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl text-white">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">For Teens & Adults</h3>
                    <p className="text-gray-300">
                      Building a life of purpose and integrity.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-gray-200 italic">
                  "VDL gave me the structure to turn my intentions into actions.
                  It's a framework for anyone serious about living a life of
                  character, not just talking about it."
                </p>
                <p className="mt-4 font-semibold text-white">
                  - James T., Professional Mentor
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FOR ADULTS SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              For Adults: Conviction Over Compliance
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              For adults, VDL is not about instruction—it's about clarification
              and reinforcement. It's a system for those who lead families,
              teams, and communities to steward their responsibilities with
              unwavering integrity.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {adultFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100">
                  <feature.icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* FOR YOUTH SECTION */}
      <div className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              For Youth: Formation to Ownership
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              For teens and young adults, VDL provides structure without
              control. It's a guided journey to help them internalize values,
              develop self-directed habits, and take ownership of their
              character.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {youthFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-gray-100 p-8 rounded-2xl border border-gray-200"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white shadow-sm">
                  <feature.icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* HOW VDL WORKS */}
      <div className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ready to Live a Values-Driven Life?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our programs and begin the journey of aligning your daily
            actions with your deepest-held values.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
            >
              Explore Values-Driven Life (VDL)
            </Link>
            <Link
              to="/courses"
              className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
            >
              View VDL Programs & Pathways
            </Link>
            <Link
              to="/get-started"
              className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
