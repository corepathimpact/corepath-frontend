import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  School,
  Heart,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

export default function Solutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const audiences = [
    {
      icon: Heart,
      title: "For Parents & Families",
      to: "/solutions/parents",
      description:
        "Build a strong family culture with structured, values-driven training systems.",
    },
    {
      icon: Users,
      title: "For Teens & Adults",
      to: "/solutions/teens-adults",
      description:
        "Develop character and leadership skills for every stage of life.",
    },
    {
      icon: School,
      title: "For Schools",
      to: "/solutions/schools",
      description:
        "Embed values into your curriculum, culture, and student outcomes.",
    },
    {
      icon: Briefcase,
      title: "For Organizations",
      to: "/solutions/organizations-workplaces",
      description:
        "Forge a culture of integrity, accountability, and purpose.",
    },
    {
      icon: ClipboardList,
      title: "Discovery & Diagnostic",
      to: "/solutions/discovery-diagnostic",
      description:
        "Assess needs, clarify direction, and measure progress with powerful tools.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 sm:py-32 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-cyan-400"
          >
            A Clear Path to Character
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            CorePath provides structured solutions that move values from mere
            intention to lasting identity. We empower individuals and
            organizations to build character through intentional, measurable,
            and sustainable practices.
          </motion.p>
        </div>
      </motion.div>

      {/* AUDIENCE-BASED SOLUTIONS */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">
              Solutions for Everyone
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Choose Your Environment
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Our solutions apply a consistent framework, flexibly adapted to
              meet the unique needs of your context.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {audiences.map((audience) => (
              <motion.div key={audience.title} variants={itemVariants}>
                <Link
                  to={audience.to}
                  className="group block h-full rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500">
                    <audience.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {audience.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{audience.description}</p>
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
    </div>
  );
}
