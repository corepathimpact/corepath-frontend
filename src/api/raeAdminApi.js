import { getAuth } from "../services/authStorage";

function resolveBaseUrl() {
  const raw = process.env.REACT_APP_API_URL || "http://localhost:5000";
  // Expect base host; append /api/v1
  return raw.replace(/\/+$/, "") + "/api/v1";
}

function buildUrl(path, params) {
  const url = new URL(resolveBaseUrl() + path);
  if (params && typeof params === "object") {
    Object.entries(params).forEach(([k, v]) => {
      if (v === undefined || v === null || v === "") return;
      url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

async function request(method, path, { params, body } = {}) {
  const auth = getAuth();
  const token = auth?.token;

  const headers = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(buildUrl(path, params), {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = json?.message || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.response = { data: json, status: res.status };
    throw err;
  }

  // mimic axios response shape to keep screens unchanged
  return { data: json };
}

export const raeAdminApi = {
  dashboard: (params) => request("GET", "/rae/admin/dashboard", { params }),
  listResources: (params) => request("GET", "/rae/admin/resources", { params }),
  getResource: (id) => request("GET", `/rae/admin/resources/${id}`),
  approvalQueue: (params) => request("GET", "/rae/admin/approval-queue", { params }),

  createOrUpdateExplanation: (payload) => request("POST", "/rae/admin/explanations", { body: payload }),
  addPractice: (payload) => request("POST", "/rae/admin/practices", { body: payload }),
  addBibleVerse: (payload) => request("POST", "/rae/admin/bible-verses", { body: payload }),
  approveDecision: (payload) => request("POST", "/rae/admin/approve", { body: payload }),

  preview: (payload) => request("POST", "/rae/admin/preview", { body: payload }),
  allocations: (params) => request("GET", "/rae/admin/allocations", { params }),
};


