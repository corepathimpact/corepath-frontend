import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { fetchBackofficeData } from "../services/backofficeApi";
import {
  adaptUser,
  adaptTraining,
  adaptPerformance,
  adaptFinancials,
  adaptImpact,
  adaptPag,
  adaptChild,
} from "../adapters";

const BackofficeContext = createContext(null);

export function BackofficeProvider({ children }) {
  const [user, setUser] = useState(null);
  const [training, setTraining] = useState(adaptTraining(null));
  const [performance, setPerformance] = useState(adaptPerformance(null));
  const [financials, setFinancials] = useState(adaptFinancials(null));
  const [impact, setImpact] = useState(adaptImpact(null));
  const [pag, setPag] = useState(null);
  const [childList, setChildren] = useState([]);
  const [rawEligibility, setRawEligibility] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Keep Jest/test environment stable (no real network calls).
    if (process.env.NODE_ENV === "test") {
      setLoading(false);
      return;
    }

    let mounted = true;
    setLoading(true);
    setError(null);

    fetchBackofficeData()
      .then((api) => {
        if (!mounted) return;
        setUser(adaptUser(api.user));
        setTraining(adaptTraining(api.training));
        setPerformance(adaptPerformance(api.performance));
        setFinancials(adaptFinancials(api.financials));
        setImpact(adaptImpact(api.impact));
        setPag(adaptPag(api.pag));
        setRawEligibility(api.eligibility || null);
        setChildren((api.children || []).map(adaptChild).filter(Boolean));
      })
      .catch((err) => {
        // UI-level handling only; no business logic.
        // eslint-disable-next-line no-console
        console.error(err);
        if (!mounted) return;
        setError("Failed to load dashboard data");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const derived = useMemo(
    () => ({
      trainingCompletionPct:
        training?.totalValues > 0
          ? Math.round((training.valuesCovered / training.totalValues) * 100)
          : 0,
      logicAreaCompletionPct:
        training?.totalLogicAreas > 0
          ? Math.round(
              (training.logicAreasCovered / training.totalLogicAreas) * 100
            )
          : 0,
    }),
    [training]
  );

  return (
    <BackofficeContext.Provider
      value={{
        user,
        training,
        performance,
        financials,
        impact,
        pag,
        children: childList,
        rawEligibility,
        derived,
        loading,
        error,
      }}
    >
      {children}
    </BackofficeContext.Provider>
  );
}

export function useBackoffice() {
  return useContext(BackofficeContext);
}


