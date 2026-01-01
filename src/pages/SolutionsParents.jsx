import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

export default function SolutionsParents() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "Intentional Character Training",
      description:
        "Move beyond reactive discipline to a proactive system that builds lasting character and resilience in your children.",
    },
    {
      icon: BookOpen,
      title: "Age-Appropriate & Trainable",
      description:
        "Break down complex values into simple, teachable, and trainable behaviors that children can understand and practice daily.",
    },
    {
      icon: Heart,
      title: "Build Consistency & Trust",
      description:
        "Create a predictable and loving home environment with clear expectations, reducing conflict and strengthening parent-child bonds.",
    },
    {
      icon: Users,
      title: "Shared Family Language",
      description:
        "Develop a common vocabulary around values that improves communication and aligns the entire family toward shared goals.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
                Values-Driven Parenting
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                Parenting is the first and most critical environment for
                character formation. Our VDP solution provides the intentional
                structure and practical tools needed to translate family values
                into daily habits and lasting identity.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Parenting Solutions
                </Link>
                <Link
                  to="/courses"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  View Parenting Courses
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-8 shadow-inner-lg border border-teal-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white shadow-md flex items-center justify-center">
                    <Heart className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      For Parents & Families
                    </h3>
                    <p className="text-gray-600">
                      The foundation of a values-driven life.
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 italic">
                  "CorePath didn't just give us rules; it gave us a shared
                  language and a system to intentionally build the character we
                  want for our children. It's been transformative."
                </p>
                <p className="mt-4 font-semibold text-gray-800">
                  - The Johnson Family
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              From Good Intentions to Daily Practice
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Most parents value character and discipline but lack a system for
              consistent training. VDP bridges this gap by turning abstract
              values into teachable, trainable behaviors that fit into the
              rhythm of family life.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
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

      {/* CTA SECTION */}
      <div className="bg-white py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ready to Parent with Purpose?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our solutions and discover how the VDP framework can bring
            structure, intention, and peace to your home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
            >
              Explore Parenting Solutions
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
