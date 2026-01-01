import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, BrainCircuit, ShieldCheck, Heart, ArrowRight, Check, Search } from "lucide-react";

export default function SolutionsDiscoveryCharacterBooth() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dimensions = [
    { icon: BrainCircuit, title: "D1: Natural Predisposition", description: "Understand innate wiring to adjust expectations and approach." },
    { icon: Heart, title: "D2: Environment & Parenting", description: "Identify environmental factors that may reinforce negative behavior." },
    { icon: ShieldCheck, title: "D3: Value Misalignment", description: "Pinpoint which underdeveloped values require immediate training." },
    { icon: Crosshair, title: "D4: Belief & Identity", description: "Surface deeper internal drivers related to self-worth, fear, or insecurity." },
  ];

  const howItWorks = [
    { title: "Behavior Input", description: "Caregivers describe the behavior in its real-world context, allowing the system to identify patterns, not just isolated incidents." },
    { title: "4D Diagnostic Analysis", description: "The behavior is evaluated across all four dimensions to highlight the most influential drivers and root causes." },
    { title: "Guided Prescription", description: "Receive clear, practical guidance based on the diagnosis, including parenting adjustments and environmental changes." },
    { title: "Personalized Action Plan", description: "Get a custom plan with daily actions, replacement behaviors, and reinforcement strategies to guide transformation." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
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
              Character Booth™
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              An advanced diagnostic tool to help you understand the 'why' behind behavior. Move from reactive correction to proactive, redemptive guidance.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/get-started"
                className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
              >
                Begin Character Discovery
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 4D APPROACH SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              A Four-Dimensional (4D) Diagnostic
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Behavior is never random; it's a signal. Character Booth evaluates behavior across four critical dimensions to ensure the root cause is addressed—not just the symptom.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {dimensions.map((dim) => (
              <motion.div key={dim.title} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 mx-auto">
                  <dim.icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {dim.title}
                </h3>
                <p className="mt-2 text-gray-600">{dim.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
       {/* HOW IT WORKS */}
       <div className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">How It Works</h2>
                <p className="mt-4 text-lg text-gray-600">A clear, step-by-step process to move from confusion to clarity.</p>
            </div>
            <div className="mt-16 max-w-4xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
                className="space-y-10">
                {howItWorks.map((step, index) => (
                  <motion.div key={step.title} variants={itemVariants} className="flex flex-col sm:flex-row items-start gap-6">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xl">{index + 1}</div>
                      <div>
                          <h3 className="font-bold text-xl text-gray-900">{step.title}</h3>
                          <p className="mt-1 text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
        </div>
       </div>

      {/* WHO IT'S FOR */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-100 rounded-2xl p-8 sm:p-12 border border-gray-200">
                    <h3 className="font-bold text-2xl text-gray-900">Who It's For</h3>
                    <ul className="mt-6 space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                            <span><span className="font-semibold text-gray-800">Parents & Caregivers</span> seeking calm, informed, and effective responses to challenging behavior.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                            <span><span className="font-semibold text-gray-800">Schools & Educators</span> wanting to understand classroom dynamics and support student well-being.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-6 w-5 text-teal-600 flex-shrink-0 mt-1" />
                            <span><span className="font-semibold text-gray-800">Coaches & Mentors</span> in need of targeted interventions to guide development effectively.</span>
                        </li>
                    </ul>
                </div>
                <div className="text-center lg:text-left">
                  <Search className="h-12 w-12 text-teal-500 mx-auto lg:mx-0"/>
                    <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Why It Matters</h2>
                    <p className="mt-4 text-lg text-gray-600">When behavior is truly understood, correction becomes redemptive, not destructive. Character Booth protects a child's identity, replaces guesswork with clarity, and aligns discipline with long-term emotional health.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
