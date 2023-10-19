import React, { useState } from "react";
import { ColorPicker, Button, Text, Grid } from "@shopify/polaris";

function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function ColorPickerBtn({ title, setColorCode, colors }) {
  const [colorPickerActive, setColorPickerActive] = useState(false);

  const handleColorChange = (newColor) => {
    const roundedColor = {
      hue: Math.ceil(newColor.hue),
      saturation: Math.ceil(newColor.saturation * 100),
      brightness: Math.ceil(newColor.brightness * 100),
      alpha: newColor.alpha,
    };
    setColorCode(
      rgbToHex(
        roundedColor.hue,
        roundedColor.saturation,
        roundedColor.brightness
      )
    );
  };

  const toggleColorPicker = () => {
    setColorPickerActive(!colorPickerActive);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Text variant="bodySm" as="p">
            {title}
          </Text>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
          <Button onClick={toggleColorPicker} disclosure>
            {colors}
          </Button>
          {colorPickerActive && (
            <ColorPicker onChange={handleColorChange} color={colors} />
          )}
        </Grid.Cell>
      </Grid>
    </div>
  );
}

export default ColorPickerBtn;
