import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Users, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";

export default function SolutionsOrganizationsWorkplaces() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Building,
      title: "Operationalized Values",
      description: "Move your core values from a plaque on the wall into the daily workflows, decisions, and behaviors of your entire organization.",
    },
    {
      icon: Users,
      title: "Aligned Leadership",
      description: "Equip leaders at every level to model, teach, and uphold the organization's values, creating a unified and accountable culture.",
    },
    {
      icon: ShieldCheck,
      title: "Strengthened Integrity",
      description: "Build a high-trust environment where integrity and responsibility are not just expected but are systematically reinforced.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Performance",
      description: "Drive long-term success by fostering a culture of ownership, excellence, and shared purpose that transcends market changes.",
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
                Values-Driven Organization (VDO)
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg text-gray-600 leading-relaxed"
              >
                VDO is the operating system for building a world-class culture. We provide the framework to embed your organization's values into its leadership, behaviors, and performance outcomes.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Values-Driven Organization (VDO)
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Book an Organizational Demo
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 shadow-xl text-white">
                 <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-full bg-white/10 shadow-md flex items-center justify-center">
                    <Building className="h-6 w-6 text-white"/>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">For Organizations</h3>
                    <p className="text-gray-300">Building a culture that performs.</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-200 italic">
                  "VDO transformed our values from a document into a daily reality. It's the most effective system I've seen for building a culture of accountability and integrity at scale."
                </p>
                <p className="mt-4 font-semibold text-white">- Michael Carter, CEO</p>
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
              From Stated Values to Lived Culture
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              An organization's culture is defined not by what it professes, but by what it practices. VDO provides the essential structure to ensure your values are consistently lived out by every team member, from the front line to the C-suite.
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
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">The VDO Implementation Pathway</h2>
              <p className="mt-4 text-lg text-gray-600">Our pathway ensures values are embedded deeply and sustainably within your organization's unique operational context.</p>
              <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">1</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">Leadership Alignment</h4>
                          <p className="text-gray-600">The process begins with executive leadership to define, translate, and commit to the core behavioral standards.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">Organizational Practice</h4>
                          <p className="text-gray-600">Values are operationalized into team-level practices, decision-making criteria, and communication protocols.</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">3</div>
                      <div>
                          <h4 className="font-bold text-lg text-gray-900">System Reinforcement</h4>
                          <p className="text-gray-600">We help you integrate values into your existing HR systems, including performance reviews, hiring, and promotions.</p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-bold text-xl text-gray-900">Best For</h3>
                <ul className="mt-4 space-y-3 text-gray-700 marker:text-teal-600 list-disc pl-5">
                    <li>Corporations & Businesses</li>
                    <li>Non-profits & Social Enterprises</li>
                    <li>Faith-Based Organizations</li>
                    <li>Executive & Leadership Teams</li>
                    <li>Any organization committed to building a world-class culture</li>
                </ul>
            </div>
          </div>
        </div>
       </div>

       {/* CTA SECTION */}
       <div className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ready to Build a Values-Driven Organization?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Let's talk about how VDO can help you build a culture that drives performance, attracts top talent, and stands the test of time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Explore Values-Driven Organization (VDO)
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Book an Organizational Demo
                </Link>
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold border border-gray-200 hover:bg-gray-200 hover:border-gray-300 transform transition"
                >
                  Partner with CorePath
                </Link>
              </div>
        </div>
      </div>

    </div>
  );
}
