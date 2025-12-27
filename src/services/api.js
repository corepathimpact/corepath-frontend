// ============================================================================
// API CONFIG — PUBLIC WEBSITE (corepath-web)
// File Location: corepath-webapp/corepath-web/src/services/api.js
// PURPOSE: Public, non-authenticated requests
// ============================================================================

// ============================================================================
// PUBLIC WEBSITE API CONFIG — ENTERPRISE EDITION
// Project: corepath-web
// File Location: corepath-webapp/corepath-web/src/services/api.js
// Subdomain: https://www.corepathimpact.com
//
// RESPONSIBILITY SCOPE:
//   • Handles ONLY public, non-authenticated API requests
//   • NO JWT
//   • NO role-based routing
//   • NO interceptors for token expiry
//
// SECURITY NOTES:
//   • Designed to consume Tier-1 endpoints ONLY
//   • Ensures public website cannot leak sensitive data
//   • Prevents attack vectors (token theft, role escalation)
//   • Forces all enrollment/payment flows into protected portals
//
// USED BY:
//   - Hero dynamic content
//   - Public course previews
//   - Product/Toolkit listings
//   - Testimonials
//   - Blog previews
//   - Contact forms
//   - Newsletter forms
// ============================================================================


import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_URL || "https://api.corepathimpact.com";

const LOCAL_URL = "http://localhost:5000/api";

const apiBase = process.env.NODE_ENV === "development" ? LOCAL_URL : BASE_URL;

const api = axios.create({
  baseURL: apiBase,
  timeout: 12000, // Enterprise requirement: controlled timeout
  headers: {
    "Content-Type": "application/json",
    "X-Public-Client": "corepath-web", // metadata for analytics
  },
});

// NO interceptors here — this is intentional
export default api;
