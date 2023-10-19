import { Checkbox } from "@shopify/polaris";
import { useCallback } from "react";

function CheckboxBtn({ title, checked, setChecked }) {
  const handleChange = useCallback((newChecked) => setChecked(newChecked), []);

  return <Checkbox label={title} checked={checked} onChange={handleChange} />;
}

export default CheckboxBtn;
