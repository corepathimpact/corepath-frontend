// ============================================================================
// LessonSidebar.jsx — Dynamic Lesson Navigation Sidebar
// File Location: /src/components/Courses/LessonSidebar.jsx
// ----------------------------------------------------------------------------
// PURPOSE:
//   Display the lessons of the current module in a sidebar.
//   Shows:
//     ✔ Completed lessons
//     ✔ Locked lessons (installment logic)
//     ✔ Active lesson highlight
//     ✔ Smooth navigation
//
// PROPS:
//   - lessons: Array of lesson objects
//   - currentLessonId: string
//   - onSelectLesson: function(lessonId)
//
// USED BY:
//   - LessonViewer.jsx
//   - LessonsListPage.jsx
//
// DEPENDENCIES:
//   - None (UI-only)
//   - Data comes from lessonService + progressService
//
// ============================================================================

import React from "react";
import { Link } from "react-router-dom";
import { Lock, CheckCircle, PlayCircle } from "lucide-react";

export default function LessonSidebar({ lessons = [], courseId, currentLessonId }) {
  return (
    <aside className="w-full md:w-72 bg-white border-r border-gray-200 p-4 h-full overflow-y-auto rounded-xl shadow-sm">

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Course Lessons
      </h2>

      {/* LESSON LIST */}
      <nav className="space-y-2">
        {lessons.map((lesson) => {
          const isActive = lesson.id === currentLessonId;
          const isLocked = lesson.accessStatus === "locked";
          const isComplete = lesson.completed === true;

          return (
            <Link
              key={lesson.id}
              to={
                isLocked
                  ? "#"
                  : `/courses/${courseId}/lessons/${lesson.id}`
              }
              className={`
                flex items-center justify-between p-3 rounded-lg border 
                transition-all duration-200
                ${
                  isActive
                    ? "bg-teal-600 border-teal-700 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-800"
                }
                ${isLocked ? "opacity-60 cursor-not-allowed" : ""}
              `}
            >
              {/* Title + Order */}
              <div className="flex items-center gap-3">
                {isLocked ? (
                  <Lock size={20} className="text-gray-600" />
                ) : isComplete ? (
                  <CheckCircle size={20} className={isActive ? "text-white" : "text-green-600"} />
                ) : (
                  <PlayCircle size={20} className={isActive ? "text-white" : "text-teal-600"} />
                )}

                <div>
                  <p className={`font-semibold ${isActive ? "text-white" : "text-gray-900"}`}>
                    {lesson.order}. {lesson.title}
                  </p>

                  <p
                    className={`text-sm ${
                      isActive ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {lesson.duration || "5 min"}
                  </p>
                </div>
              </div>

            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
