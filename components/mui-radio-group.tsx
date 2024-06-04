import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RadioButtonsGroupProp {
  label: string;
  options: string[];
}

export default function RadioButtonsGroup({
  label,
  options,
}: RadioButtonsGroupProp) {
  return (
    <FormControl className="w-[95%] mb-2">
      <FormLabel
        id="demo-radio-buttons-group-label"
        className="text-lg font-semibold mb-2"
      >
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
      >
        {options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              labelPlacement="start"
              className="justify-between border border-gray-500 rounded-xl pl-2 mb-2"
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
