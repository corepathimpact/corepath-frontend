import React, { useMemo } from "react";
import { FunnelChart, Funnel, Tooltip, ResponsiveContainer, LabelList } from "recharts";

function ImpactFunnel({ its0, its1, its2, its3, its4 }) {
  const data = useMemo(
    () => [
      { name: "ITS0", value: Number(its0) || 0 },
      { name: "ITS1", value: Number(its1) || 0 },
      { name: "ITS2", value: Number(its2) || 0 },
      { name: "ITS3", value: Number(its3) || 0 },
      { name: "ITS4", value: Number(its4) || 0 },
    ],
    [its0, its1, its2, its3, its4]
  );

  return (
    <ResponsiveContainer width="100%" height={250}>
      <FunnelChart>
        <Tooltip />
        <Funnel dataKey="value" data={data} fill="#0f766e" isAnimationActive={false}>
          <LabelList dataKey="name" position="right" fill="#0f172a" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
}

export default React.memo(ImpactFunnel);


