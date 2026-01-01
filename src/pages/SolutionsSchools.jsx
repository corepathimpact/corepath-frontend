import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Landmark, Book, Users, ClipboardCheck, ArrowRight } from "lucide-react";

export default function SolutionsSchools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Landmark,
      title: "Whole-School Culture",
      description: "Move beyond isolated lessons to a consistent, school-wide culture where character is integrated into every aspect of learning.",
    },
    {
      icon: Book,
      title: "Teacher Empowerment",
      description: "Provide teachers with practical tools and a clear framework, empowering them to foster character without adding to their workload.",
    },
    {
      icon: Users,
      title: "Proactive Student Growth",
      description: "Shift from reactive discipline to a proactive system that develops student responsibility, integrity, and self-management.",
    },
    {
      icon: ClipboardCheck,
      title: "Measurable Outcomes",
      description: "Track and support student character development with the same intentionality as academic performance.",
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
                Values Ingrained Education (VIE)
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                VIE is a comprehensive solution for schools seeking to embed character formation into the fabric of daily academic life. We provide the system to move values from posters on the wall to ingrained student behavior.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Values Ingrained Education (VIE)
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Book a School Demo
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 p-8 shadow-xl text-white">
                 <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                    <Landmark className="h-6 w-6 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">For Schools</h3>
                    <p className="text-teal-100">Integrating character and academics.</p>
                  </div>
                </div>
                <p className="mt-6 text-teal-50 italic">
                  "VIE provided the 'how' we were missing. We always talked about character, but CorePath gave us a system to actually build it, measure it, and make it part of our school's DNA."
                </p>
                <p className="mt-4 font-semibold text-white">- Dr. Sarah Chen, School Principal</p>
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
              From Values Education to Values Ingrained
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Character isn't formed in assemblies; it's forged in the daily rhythms of school life. VIE helps schools move values from abstract ideals into the daily behavior of students and the core culture of the institution.
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
              <motion.div key={feature.title} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
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
      
       {/* HOW IT WORKS */}
       <div className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">How VIE Works</h2>
              <p className="mt-4 text-lg text-gray-600">VIE applies our core transformation pathway within the educational context, turning values into trainable skills and measurable outcomes.</p>
              <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">1</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">Define & Translate</h4>
                          <p className="text-gray-600">We help you translate your core values into clear, age-appropriate, and observable behaviors.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">Integrate & Practice</h4>
                          <p className="text-gray-600">Values are embedded into daily classroom routines, school-wide systems, and teachable moments.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">3</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">Reinforce & Measure</h4>
                          <p className="text-gray-600">Growth is supported through consistent reinforcement, structured feedback, and digital tools for tracking progress.</p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-bold text-xl text-gray-900">Best For</h3>
                <ul className="mt-4 space-y-3 text-gray-700 marker:text-teal-600 list-disc pl-5">
                    <li>Primary & Secondary Schools</li>
                    <li>Faith-Based Institutions</li>
                    <li>School Administrators & Leaders</li>
                    <li>Educators Seeking Holistic Development</li>
                    <li>Alternative & Blended Learning Environments</li>
                </ul>
            </div>
          </div>
        </div>
       </div>

       {/* CTA SECTION */}
       <div className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ready to Build a Values-Driven School?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover how VIE can help you create a thriving school culture where character and academics grow hand-in-hand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Values Ingrained Education (VIE)
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Book a School Demo
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Partner With CorePath
                </Link>
              </div>
        </div>
      </div>

    </div>
  );
}
