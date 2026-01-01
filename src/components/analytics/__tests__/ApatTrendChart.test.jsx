import React from "react";
import { render } from "@testing-library/react";
import ApatTrendChart from "../ApatTrendChart";

test("renders APAT chart without crashing", () => {
  render(
    <div style={{ width: 800, height: 300 }}>
      <ApatTrendChart
        data={[
          { label: "Jan", apat: 70 },
          { label: "Feb", apat: 75 },
        ]}
      />
    </div>
  );
});


