import React, { useState } from "react";
import { vdpCourse } from "../../data/coursesData";
import { CheckCircle, Calendar, Clock, DollarSign, BookOpen, Award } from "lucide-react";

export default function ParentingCourse() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section
      id="parenting"
      className="bg-gray-50 text-gray-800 py-20 px-6 md:px-12 lg:px-20"
    >
      {/* HEADER */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-8 text-center">
        {vdpCourse.name}
      </h2>

      <p className="text-lg md:text-xl text-center max-w-5xl mx-auto mb-12 text-gray-600">
        A comprehensive 12-week certification program designed to equip you with
        the conviction, wisdom, practical systems, and spiritual grounding needed
        to guide parents in raising internally governed, values-driven children.
      </p>

      {/* QUICK INFO CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-teal-600">
          <Calendar className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Start Date</p>
          <p className="font-semibold text-gray-800">{vdpCourse.startDate}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-teal-600">
          <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Schedule</p>
          <p className="font-semibold text-gray-800">{vdpCourse.time}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-teal-600">
          <BookOpen className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Duration</p>
          <p className="font-semibold text-gray-800">{vdpCourse.duration}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border-l-4 border-teal-600">
          <DollarSign className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Cost</p>
          <p className="font-semibold text-gray-800">
            KES {vdpCourse.cost.kes.toLocaleString()} / USD {vdpCourse.cost.usd}
          </p>
        </div>
      </div>

      {/* COURSE OUTCOMES */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">
          Course Outcomes
        </h3>
        <div className="bg-white p-10 rounded-2xl shadow-lg">
          <ul className="space-y-4">
            {vdpCourse.outcomes.map((outcome, index) => (
              <li key={index} className="flex gap-4 items-start">
                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MAIN CTA */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-700 text-white px-12 py-4 rounded-full font-semibold
          hover:bg-teal-800 transition-all duration-300 text-lg shadow-lg"
        >
          View Full Course Details & Register
        </button>
      </div>

      {/* WHO SHOULD ATTEND */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">
          Who Should Attend?
        </h3>
        <div className="bg-teal-50 p-10 rounded-2xl shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            {vdpCourse.targetAudience.map((audience, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTIFICATION BENEFITS */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">
          Certification Benefits
        </h3>
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-10 rounded-2xl shadow-lg">
          <div className="flex gap-4 items-start mb-6">
            <Award className="w-8 h-8 flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-2">
                {vdpCourse.certificationBenefits.title}
              </h4>
              <p className="text-teal-100">
                {vdpCourse.certificationBenefits.description}
              </p>
            </div>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 mt-8">
            {vdpCourse.certificationBenefits.benefits.map((benefit, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-yellow-300 text-xl">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-teal-700 mb-8 text-center">
          The Deeper Mission
        </h3>
        <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-teal-600">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {vdpCourse.vision.split("\n").map((paragraph, index) => (
              <p key={index}>
                {paragraph.startsWith("•") ? (
                  <span className="block ml-4">• {paragraph.substring(1)}</span>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <CourseDetailsModal
          course={vdpCourse}
          onClose={() => setShowModal(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </section>
  );
}

// ============================================================================
// Course Details Modal Component
// ============================================================================
function CourseDetailsModal({ course, onClose, activeTab, setActiveTab }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 sticky top-0">
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
                <p className="text-teal-100">{course.platform}</p>
              </div>
              <button
                onClick={onClose}
                className="text-3xl hover:text-teal-200 transition"
              >
                ✕
              </button>
            </div>
          </div>

          {/* TABS */}
          <div className="flex border-b bg-gray-50 sticky top-0 z-40">
            {["overview", "syllabus", "requirements", "registration"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 px-6 font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-white text-teal-700 border-b-2 border-teal-700"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </div>

          {/* CONTENT */}
          <div className="p-8">
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Quick Facts */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Quick Facts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Start Date</p>
                      <p className="font-semibold text-gray-800">
                        {course.startDate}
                      </p>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Schedule</p>
                      <p className="font-semibold text-gray-800">{course.time}</p>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Duration</p>
                      <p className="font-semibold text-gray-800">
                        {course.duration} ({course.sessions} sessions)
                      </p>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">Cost</p>
                      <p className="font-semibold text-gray-800">
                        KES {course.cost.kes.toLocaleString()} / USD{" "}
                        {course.cost.usd}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Course Introduction */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-4">
                    Course Introduction
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {course.introduction}
                  </p>
                </div>

                {/* Course Outcomes */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Course Outcomes
                  </h3>
                  <ul className="space-y-4">
                    {course.outcomes.map((outcome, index) => (
                      <li key={index} className="flex gap-4 items-start">
                        <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* SYLLABUS TAB */}
            {activeTab === "syllabus" && (
              <div>
                <h3 className="text-2xl font-bold text-teal-700 mb-6">
                  12-Week Syllabus
                </h3>
                <div className="space-y-6">
                  {course.syllabus.map((week) => (
                    <div
                      key={week.week}
                      className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-600"
                    >
                      <div className="flex gap-4 items-start mb-3">
                        <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                          {week.week}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-teal-700">
                            {week.title}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {week.description}
                          </p>
                        </div>
                      </div>
                      <ul className="ml-14 space-y-2">
                        {week.topics.map((topic, index) => (
                          <li key={index} className="text-gray-700">
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* REQUIREMENTS TAB */}
            {activeTab === "requirements" && (
              <div className="space-y-8">
                {/* Requirements */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Course Requirements
                  </h3>
                  <ul className="space-y-3">
                    {course.requirements.map((req, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <span className="text-teal-600 font-bold">✓</span>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certification */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Certification
                  </h3>
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 rounded-lg">
                    <Award className="w-12 h-12 mb-4" />
                    <h4 className="text-xl font-bold mb-3">
                      {course.certificationBenefits.title}
                    </h4>
                    <p className="mb-6">
                      {course.certificationBenefits.description}
                    </p>
                    <ul className="space-y-3">
                      {course.certificationBenefits.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-yellow-300">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* REGISTRATION TAB */}
            {activeTab === "registration" && (
              <div className="space-y-8">
                {/* Payment Methods */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Payment Methods
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    {course.paymentMethods.map((method, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200"
                      >
                        <h4 className="text-lg font-bold text-teal-700 mb-2">
                          {method.method}
                        </h4>
                        <p className="text-gray-800 font-semibold mb-2">
                          {method.details}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {method.instructions}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration CTA */}
                <div>
                  <h3 className="text-2xl font-bold text-teal-700 mb-6">
                    Ready to Register?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Click the button below to complete your registration form.
                    After submission, you will receive payment instructions via
                    email.
                  </p>
                  <a
                    href={course.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-700 text-white px-8 py-4 rounded-full font-semibold
                    hover:bg-teal-800 transition-all duration-300 text-lg shadow-lg"
                  >
                    Register via Google Form
                  </a>
                </div>

                {/* Questions */}
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded">
                  <p className="text-gray-800">
                    <strong>Questions?</strong> Contact us at{" "}
                    <a
                      href="mailto:info@corepathimpact.com"
                      className="text-teal-600 hover:underline"
                    >
                      info@corepathimpact.com
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
