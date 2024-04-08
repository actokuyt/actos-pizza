import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <FormControl>
      <FormLabel>Toppings</FormLabel>
      <FormControlLabel labelPlacement="start" control={<Checkbox />} label="Pepperoni" />
      <FormControlLabel labelPlacement="start" control={<Checkbox />} label="Sausage" />
      <FormControlLabel labelPlacement="start" control={<Checkbox />} label="Mushroom" />
      <FormControlLabel labelPlacement="start" control={<Checkbox />} label="Green Pepper" />
      <FormControlLabel labelPlacement="start" control={<Checkbox />} label="Black Olive" />
    </FormControl>
  );
}
