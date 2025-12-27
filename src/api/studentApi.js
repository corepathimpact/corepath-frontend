// =======================================================================
// API FUNCTIONS FOR STUDENT DASHBOARD (CLEAN + UPDATED)
// =======================================================================

import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "/api",
});

// Attach auth token automatically for all requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// =======================================================================
// ENROLLMENT (Zoom Courses)
// =======================================================================

// GET student's enrollment info for a specific course
export const getEnrollment = (courseId) =>
  API.get(`/enrollment/${courseId}`);


// =======================================================================
// SESSIONS (Zoom Sessions)
// =======================================================================

// GET all sessions for a course (not protected by access rules)
export const getSessions = (courseId) =>
  API.get(`/sessions/course/${courseId}`);

// GET single session details (protected — backend checks installment access)
export const getSessionDetails = (sessionId) =>
  API.get(`/sessions/${sessionId}`);


// =======================================================================
// (Optional) FUTURE LMS ENDPOINTS CAN BE ADDED HERE
// =======================================================================

// Example: getModules(courseId)
// Example: getModule(moduleId)
