import axios from "axios";
import { getAuth } from "./authStorage";

// NOTE: This project currently uses CRA (react-scripts), not Vite.
// We intentionally read the base URL from environment variables to avoid hardcoding.
//
// Configure in your environment:
// - REACT_APP_API_BASE_URL=https://api.corepathimpact.com/api/v1
//
// (If you later migrate to Vite, you can map this to VITE_API_BASE_URL externally.)

function normalizeApiBaseUrl(raw) {
  if (!raw) return "/api/v1";
  const trimmed = String(raw).trim().replace(/\/+$/, "");
  return trimmed.endsWith("/api/v1") ? trimmed : `${trimmed}/api/v1`;
}

const baseURL = normalizeApiBaseUrl(process.env.REACT_APP_API_BASE_URL);

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("accessToken") || getAuth()?.token || null;
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


