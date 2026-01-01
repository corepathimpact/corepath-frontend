import { apiClient } from "./apiClient";

export async function fetchBackofficeData() {
  const res = await apiClient.get("/vdp/backoffice/overview");
  // Support both envelope and raw payload shapes:
  // - { status: "success", data: {...} }
  // - { ... }
  return res.data?.data ?? res.data;
}


