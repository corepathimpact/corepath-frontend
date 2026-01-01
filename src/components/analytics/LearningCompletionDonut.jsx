import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function clampPct(n) {
  const v = Number(n);
  if (Number.isNaN(v)) return 0;
  return Math.max(0, Math.min(100, v));
}

function LearningCompletionDonut({ completedPct }) {
  const pct = clampPct(completedPct);
  const data = useMemo(
    () => [
      { name: "Completed", value: pct },
      { name: "Remaining", value: 100 - pct },
    ],
    [pct]
  );

  const COLORS = ["#0f766e", "#e5e7eb"];

  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie data={data} innerRadius={50} outerRadius={70} dataKey="value" stroke="transparent">
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default React.memo(LearningCompletionDonut);


