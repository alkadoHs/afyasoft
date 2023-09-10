"use client";

import { SparkLineChart } from "@mui/x-charts";
import React from "react";

function Barchart() {
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const handleHighlightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowTooltip(event.target.checked);
  };
  return (
    <div className="w-28">
      <SparkLineChart
        plotType="bar"
        data={[1, 4, 2, 5, 7, 2, 4, 6]}
        height={90}
        showHighlight={showHighlight}
        showTooltip={showTooltip}
      />
    </div>
  );
}

export default Barchart;
