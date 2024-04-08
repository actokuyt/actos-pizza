import { FormGroup } from "@mui/material";
import RadioButtonsGroup from "./mui-radio-group";
import CheckboxLabels from "./mui-checkbox";

export default function CustomizeOrderForm() {
  return (
    <form action="">
      <FormGroup>
        <RadioButtonsGroup label="Sizes"/>
      </FormGroup>
      <FormGroup>
        <RadioButtonsGroup label="Crusts"/>
      </FormGroup>
      <FormGroup>
        <CheckboxLabels/>
      </FormGroup>
      <FormGroup>
        <CheckboxLabels/>
      </FormGroup>
    </form>
  );
}
