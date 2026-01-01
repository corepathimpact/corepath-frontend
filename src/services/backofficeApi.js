import { apiClient } from "./apiClient";

export async function fetchBackofficeData() {
  const res = await apiClient.get("/vdp/backoffice/overview");
  return res.data;
}


