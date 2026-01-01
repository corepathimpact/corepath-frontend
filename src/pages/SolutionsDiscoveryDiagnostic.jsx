import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ClipboardList, Crosshair, BrainCircuit, ArrowRight } from "lucide-react";

export default function SolutionsDiscoveryDiagnostic() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tools = [
    {
      icon: Crosshair,
      title: "Character Booth",
      to: "/solutions/discovery-diagnostic/character-booth",
      description: "A guided experience to surface strengths, identify gaps, and define actionable next steps for growth.",
    },
    {
      icon: BrainCircuit,
      title: "Pathfinder",
      to: "/solutions/discovery-diagnostic/pathfinder",
      description: "A powerful direction-setting tool to clarify goals, map out pathways, and establish practical progress markers.",
    },
    {
      icon: ClipboardList,
      title: "Natural Predispositions",
      to: "/solutions/discovery-diagnostic/natural-predispositions",
      description: "An insight tool to understand innate tendencies and align development strategies with real-world context.",
    },
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
                Discovery & Diagnostic
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                Lasting growth begins with clarity. Our discovery and diagnostic tools are designed to help individuals and organizations identify needs, clarify direction, and measure what matters.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Get Started
                </Link>
                <Link
                  to="/resources"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  View Resources
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl text-white">
                 <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Discovery & Diagnostic</h3>
                    <p className="text-gray-300">Clarity for intentional growth.</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-200 italic">
                  "You can't improve what you don't measure. CorePath's diagnostic tools provided the critical insights we needed to focus our development efforts where they would matter most."
                </p>
                <p className="mt-4 font-semibold text-white">- E. Rodriguez, Leadership Coach</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* TOOLS SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              A Suite of Tools for Insight
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Each tool serves a unique purpose, from initial discovery to detailed analysis, providing a comprehensive toolkit for personal and organizational development.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {tools.map((tool) => (
              <motion.div key={tool.title} variants={itemVariants}>
                <Link
                  to={tool.to}
                  className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100">
                    <tool.icon className="h-6 w-6 text-teal-700" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{tool.description}</p>
                  <div className="mt-6 font-semibold text-teal-600 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
       {/* CTA SECTION */}
       <div className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ready to Gain Clarity?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
             Start your journey of discovery and unlock the insights needed for meaningful, targeted growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                          <Link
                            to="/get-started"
                            className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                          >
                            Get Started
                          </Link>
                          <Link
                            to="/resources"
                            className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                          >
                            View Resources
                          </Link>
                        </div>
        </div>
      </div>

    </div>
  );
}
