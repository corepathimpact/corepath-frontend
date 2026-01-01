import React, { createContext, useContext, useMemo } from "react";
import { adaptEligibility } from "../adapters/eligibility.adapter";

const EligibilityContext = createContext(null);

export function EligibilityProvider({ rawEligibility, children }) {
  const eligibility = useMemo(() => {
    if (!rawEligibility) return null;
    return adaptEligibility(rawEligibility);
  }, [rawEligibility]);

  return (
    <EligibilityContext.Provider value={eligibility}>
      {children}
    </EligibilityContext.Provider>
  );
}

export function useEligibility() {
  return useContext(EligibilityContext);
}


