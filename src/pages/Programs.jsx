// -------------------------------------------------------------
// src/pages/Programs.jsx — CorePath Impact Programs Page
// -------------------------------------------------------------
// 🧭 Purpose:
// Imports and displays all the CorePath Impact program pillars.
// Follows the same structure as About.jsx for consistency.
// -------------------------------------------------------------

import React, { useEffect } from "react";

import FamilyProgram from "../components/Programs/FamilyProgram";
import EducationProgram from "../components/Programs/EducationProgram";
import FaithProgram from "../components/Programs/FaithProgram";
import OrganizationProgram from "../components/Programs/OrganizationProgram";

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <FamilyProgram />
      <EducationProgram />
      <FaithProgram />
      <OrganizationProgram />
    </main>
  );
}
