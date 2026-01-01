import React, { createContext, useContext, useMemo, useState } from "react";

const BackofficeContext = createContext(null);

export function BackofficeProvider({ children }) {
  const [user] = useState({
    id: "USR-10291",
    fullName: "Gibson Namasake",
    title: "Parent",
    country: "Kenya",
    language: "EN",
  });

  const [training] = useState({
    valuesCovered: 7,
    totalValues: 12,
    currentValue: "Responsibility",
    practicesToday: 5,
    totalPracticesToday: 6,
    logicAreasCovered: 6,
    totalLogicAreas: 10,
  });

  const [performance] = useState({
    apatToday: 78,
    apatAverage: 72,
    consistency: "Good",
  });

  const [financials] = useState({
    walletBalance: 125.5,
    sources: ["Learning", "Impact Transfer", "PAG"],
    locked: false,
  });

  const [impact] = useState({
    its0: 1,
    its1: 4,
    its2: 9,
    its3: 17,
    its4: 26,
    activeMembers: 41,
    inactiveMembers: 7,
  });

  const [pag] = useState({
    id: "PAG-8843",
    coach: "Jane Mwangi",
    members: 12,
    scoreToday: 74,
    scoreWeek: 76,
    scoreMonth: 73,
    wallet: 42.3,
  });

  const [childList] = useState([
    {
      id: "CH-01",
      name: "Daniel",
      predisposition: "Blue",
      valuesTrained: 6,
      currentValue: "Respect",
      progress: 68,
      averageScore: 72,
      commonCard: "Star",
      struggledArea: "Time Management",
      valuesRemaining: 3,
    },
  ]);

  const derived = useMemo(
    () => ({
      trainingCompletionPct: Math.round(
        (training.valuesCovered / training.totalValues) * 100
      ),
      logicAreaCompletionPct: Math.round(
        (training.logicAreasCovered / training.totalLogicAreas) * 100
      ),
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
        derived,
      }}
    >
      {children}
    </BackofficeContext.Provider>
  );
}

export function useBackoffice() {
  return useContext(BackofficeContext);
}


