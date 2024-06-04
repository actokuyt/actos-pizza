import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FormControl, FormLabel } from "@mui/material";

interface CheckBoxLabelProp {
  label: string;
  options: string[];
}

export default function CheckboxLabels({ label, options }: CheckBoxLabelProp) {
  return (
    <FormControl className="w-[95%] mb-2">
      <FormLabel className="text-lg font-semibold mb-2">{label}</FormLabel>
      {options.map((option, index) => {
        return (
          <FormControlLabel
            key={index}
            labelPlacement="start"
            control={<Checkbox />}
            label={option}
            className="justify-between border border-gray-500 rounded-xl pl-2 mb-2"
          />
        );
      })  }
    </FormControl>
  );
}
