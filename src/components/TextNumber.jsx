import { Label, TextField } from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";

function TextNumber({
  title,
  type,
  fontSize,
  setFontSize,
  fontStyle,
  setFontStyle,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (type === "number") {
      setValue(fontSize);
    } else {
      setValue(fontStyle);
    }
  }, [fontSize, fontStyle, type]);

  const handleChange = useCallback(
    (newValue) => {
      setValue(newValue);

      if (type === "number") {
        setFontSize(newValue);
      } else {
        setFontStyle(newValue);
      }
    },
    [setFontSize, setFontStyle, type]
  );

  return (
    <TextField
      label={title}
      type={type}
      max={20}
      min={0}
      value={value}
      onChange={handleChange}
      autoComplete="on"
    />
  );
}

export default TextNumber;
