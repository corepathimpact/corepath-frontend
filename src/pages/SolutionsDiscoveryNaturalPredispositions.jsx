import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BrainCircuit, Palette, Check, ArrowRight } from "lucide-react";

export default function SolutionsDiscoveryNaturalPredispositions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const profiles = [
    { color: "blue", name: "Blue", description: "Emotional & Relational" },
    { color: "yellow", name: "Gold", description: "Structured & Responsible" },
    { color: "green", name: "Green", description: "Analytical & Independent" },
    {
      color: "orange",
      name: "Orange",
      description: "Energetic & Experiential",
    },
  ];

  const howItWorks = [
    {
      title: "Guided Assessment",
      description:
        "Parents or educators provide structured input based on real-world observations of a child's behavior patterns, not abstract questions.",
    },
    {
      title: "Predisposition Identification",
      description:
        "The system identifies a dominant profile, plus secondary influences, providing a nuanced understanding, not a rigid label.",
    },
    {
      title: "Comprehensive Profile",
      description:
        "Receive a detailed report explaining how the child thinks, learns, and responds, along with effective discipline and motivation strategies.",
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
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <Link
                to="/solutions/discovery-diagnostic"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold tracking-wide hover:text-teal-800 transition"
              >
                <ArrowRight className="h-4 w-4 transform rotate-180" />
                Back to Discovery Tools
              </Link>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
            >
              Natural Predispositions
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              Understand a child's natural wiring before training begins. This
              foundational tool helps you see a child for who they are designed
              to be, not just how they behave.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/get-started"
                className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
              >
                Discover a Predisposition
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* WHY IT MATTERS SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <BrainCircuit className="h-12 w-12 text-teal-500 mx-auto lg:mx-0" />
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Why Predisposition Matters
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Many parenting and teaching challenges arise when expectations
                are misaligned with a child's natural wiring. Understanding
                their predisposition allows you to guide them effectively,
                preventing you from punishing what is natural or forcing a
                learning style that doesn't fit.
              </p>
              <p className="mt-4 text-lg text-gray-700 font-semibold">
                You cannot train values effectively if you do not first
                understand the child.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-xl text-gray-900">
                This Tool Helps Prevent:
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span>Punishing natural tendencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span>Applying ill-fitting discipline</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span>Misreading a child's motivation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span>Suppressing strengths while correcting weaknesses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILES SECTION */}
      <div className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              The Four Predisposition Profiles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our framework identifies four core profiles. These are not labels,
              but starting points for understanding how a child is uniquely
              wired.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {profiles.map((profile) => (
              <motion.div
                key={profile.name}
                variants={itemVariants}
                className={`p-8 rounded-2xl text-center border shadow-sm ${
                  profile.color === "blue"
                    ? "bg-blue-50 border-blue-200"
                    : profile.color === "yellow"
                    ? "bg-yellow-50 border-yellow-200"
                    : profile.color === "green"
                    ? "bg-green-50 border-green-200"
                    : profile.color === "orange"
                    ? "bg-orange-50 border-orange-200"
                    : ""
                }`}
              >
                <div
                  className={`flex items-center justify-center h-12 w-12 rounded-full mx-auto
                  ${profile.color === "blue" && "bg-blue-500"}
                  ${profile.color === "yellow" && "bg-yellow-500"}
                  ${profile.color === "green" && "bg-green-500"}
                  ${profile.color === "orange" && "bg-orange-500"}
                `}
                >
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {profile.name}
                </h3>
                <p className="mt-1 text-gray-700">{profile.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              A Foundation for Everything
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding a child's natural predisposition is the critical
              first step that personalizes and enhances every other tool in the
              CorePath ecosystem.
            </p>
          </div>
          <div className="mt-16 max-w-4xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row items-start gap-6"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
