import React, { useState } from "react";
import { RangeSlider, TextField } from "@shopify/polaris";

function ProgressBars({ progressvalue, setProgressValue }) {
  const handleValueChange = (newValue) => {
    setProgressValue(newValue);
  };

  const handleInputChange = (newValue) => {
    const numericValue = parseFloat(newValue);
    if (!isNaN(numericValue)) {
      setProgressValue(Math.min(100, Math.max(0, numericValue)));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "350px" }}>
        <RangeSlider
          label="ICON SIZE"
          output
          value={progressvalue}
          onChange={handleValueChange}
          min={0}
          max={100}
          step={1}
        />
      </div>
      <div style={{ width: "80px" }}>
        <TextField
          label="value"
          type="number"
          value={progressvalue.toString()}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default ProgressBars;
