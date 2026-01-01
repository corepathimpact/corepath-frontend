import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Sparkles, Brain, Heart, Target, ArrowRight, Check } from "lucide-react";

export default function SolutionsDiscoveryPathfinder() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const framework = [
    { icon: Sparkles, title: "Natural Talents & Strengths", description: "Discover what you are naturally wired to do well, separating aptitude from mere interest." },
    { icon: Brain, title: "Work Style Alignment", description: "Understand how you think, learn, and operate to find your ideal working environment." },
    { icon: Heart, title: "Values & Identity", description: "Clarify why certain paths feel meaningful and align your direction with your core identity." },
    { icon: Target, title: "Purpose & Calling", description: "Explore where your unique strengths can meet a real need, creating a life of impact." },
  ];

  const whoIsItFor = [
    { title: "Youth & Adolescents", description: "Exploring identity, interests, and future pathways." },
    { title: "Parents", description: "Guiding children's futures without projecting or pressuring." },
    { title: "Young Adults", description: "Making confident education, career, and life decisions." },
    { title: "Adults in Transition", description: "Seeking realignment, new careers, or renewed purpose." },
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
              Pathfinder™
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
            >
              A whole-person discovery engine designed to bring clarity to one of life's most important questions: "What should I do with my life?"
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/get-started"
                className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
              >
                Discover Your Direction
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DISCOVERY FRAMEWORK SECTION */}
      <div className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              The Pathfinder™ Discovery Framework
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Direction isn't guessed; it's discerned. Pathfinder integrates multiple layers of insight to provide a holistic view of your ideal path forward.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {framework.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 mx-auto">
                  <item.icon className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
       {/* WHO IT'S FOR */}
       <div className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">Clarity for Every Life Stage</h2>
                <p className="mt-4 text-lg text-gray-600">Pathfinder adapts to support direction-finding for individuals, parents, and leaders at any point in their journey.</p>
            </div>
            <div className="mt-16 max-w-5xl mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
                className="grid md:grid-cols-2 gap-8">
                {whoIsItFor.map((item) => (
                  <motion.div key={item.title} variants={itemVariants} className="flex items-start gap-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center">
                        <Check className="h-5 w-5"/>
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
        </div>
       </div>

      {/* WHY IT MATTERS */}
      <div className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
            <Compass className="h-12 w-12 text-teal-500 mx-auto"/>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">Why Pathfinder Matters</h2>
            <p className="mt-4 text-lg text-gray-600">
              When direction is clear, effort becomes focused and meaningful. Pathfinder prevents misaligned career choices, reduces the pressure of uncertainty, and empowers individuals to pursue a life of purpose and impact. It helps parents guide without controlling and gives leaders a tool for developing their people.
            </p>
             <div className="mt-8">
                <Link
                  to="/get-started"
                  className="inline-block text-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition"
                >
                  Find Your Path
                </Link>
              </div>
        </div>
      </div>
    </div>
  );
}
