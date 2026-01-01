import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function clampScore(n) {
  const v = Number(n);
  if (Number.isNaN(v)) return 0;
  return Math.max(0, Math.min(100, v));
}

function PagScoreBarChart({ today, week, month }) {
  const data = useMemo(
    () => [
      { label: "Today", score: clampScore(today) },
      { label: "Week", score: clampScore(week) },
      { label: "Month", score: clampScore(month) },
    ],
    [today, week, month]
  );

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="label" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Bar dataKey="score" fill="#0f766e" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default React.memo(PagScoreBarChart);


