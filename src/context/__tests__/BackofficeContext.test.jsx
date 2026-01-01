import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { BackofficeProvider, useBackoffice } from "../BackofficeContext";

test("loads backoffice data from API (via MSW) and adapts it for the UI", async () => {
  const wrapper = ({ children }) => (
    <BackofficeProvider>{children}</BackofficeProvider>
  );

  const { result } = renderHook(() => useBackoffice(), { wrapper });

  await waitFor(() => {
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.user.fullName).toBe("Gibson Namasake");
    expect(result.current.training.currentValue).toBe("Responsibility");
  });
});


