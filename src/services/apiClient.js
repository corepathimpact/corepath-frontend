import axios from "axios";

// NOTE: This project currently uses CRA (react-scripts), not Vite.
// We intentionally read the base URL from environment variables to avoid hardcoding.
//
// Configure in your environment:
// - REACT_APP_API_BASE_URL=https://api.corepathimpact.com/api/v1
//
// (If you later migrate to Vite, you can map this to VITE_API_BASE_URL externally.)

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


