import React from "react";
import { EligibilityProvider } from "./EligibilityContext";
import { useBackoffice } from "./BackofficeContext";

export default function EligibilityBootstrap({ children }) {
  const { rawEligibility, performance } = useBackoffice() || {};

  // performance is passed for future Phase 6 parity; no derivation happens here.
  return (
    <EligibilityProvider rawEligibility={rawEligibility} performance={performance}>
      {children}
    </EligibilityProvider>
  );
}


