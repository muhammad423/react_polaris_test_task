import React, { useState } from "react";
import { RangeSlider, TextField } from "@shopify/polaris";

function ProgressSpaceBetween({ spaceValue, setSpaceValue }) {
  const handleValueChange = (newValue) => {
    setSpaceValue(newValue);
  };

  const handleInputChange = (newValue) => {
    const numericValue = parseFloat(newValue);
    if (!isNaN(numericValue)) {
      setSpaceValue(Math.min(1000, Math.max(0, numericValue)));
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
          label="Space in between blocks"
          output
          value={spaceValue}
          onChange={handleValueChange}
          min={0}
          max={1000}
          step={1}
        />
      </div>
      <div style={{ width: "80px" }}>
        <TextField
          label="value"
          type="number"
          value={Number(spaceValue)}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default ProgressSpaceBetween;
