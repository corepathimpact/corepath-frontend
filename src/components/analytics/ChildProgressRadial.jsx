import React, { useMemo } from "react";
import { RadialBarChart, RadialBar } from "recharts";

function clampPct(n) {
  const v = Number(n);
  if (Number.isNaN(v)) return 0;
  return Math.max(0, Math.min(100, v));
}

function ChildProgressRadial({ value }) {
  const pct = clampPct(value);
  const data = useMemo(() => [{ value: pct }], [pct]);

  return (
    <RadialBarChart
      width={120}
      height={120}
      cx={60}
      cy={60}
      innerRadius={40}
      outerRadius={55}
      data={data}
      startAngle={90}
      endAngle={-270}
    >
      <RadialBar dataKey="value" fill="#0f766e" cornerRadius={8} />
    </RadialBarChart>
  );
}

export default React.memo(ChildProgressRadial);


