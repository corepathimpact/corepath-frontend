import React from "react";
import { renderHook } from "@testing-library/react";
import { EligibilityProvider, useEligibility } from "../EligibilityContext";

test("exposes eligibility flags (adapted)", () => {
  const wrapper = ({ children }) => (
    <EligibilityProvider
      rawEligibility={{
        can_withdraw: false,
        can_purchase_bot: false,
        max_bot_tier: null,
        reasons: ["Low APAT"],
      }}
    >
      {children}
    </EligibilityProvider>
  );

  const { result } = renderHook(() => useEligibility(), { wrapper });

  expect(result.current.canWithdraw).toBe(false);
  expect(result.current.canPurchaseBot).toBe(false);
  expect(result.current.reasons).toContain("Low APAT");
});


