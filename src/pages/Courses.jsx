import React, { useEffect } from "react";

import CoursesHero from "../components/Courses/CoursesHero";
import ParentingCourse from "../components/Courses/ParentingCourse";
import EducationCourse from "../components/Courses/EducationCourse";
import LeadershipCourse from "../components/Courses/LeadershipCourse";
import CoachingCourse from "../components/Courses/CoachingCourse";

export default function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <CoursesHero />
      <ParentingCourse />
      <EducationCourse />
      <LeadershipCourse />
      <CoachingCourse />
    </main>
  );
}
