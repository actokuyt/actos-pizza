import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface RadioButtonsGroupProp {
  label: string
}


export default function RadioButtonsGroup({label, }: RadioButtonsGroupProp) {
  return (
    <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="10 inches"
              control={<Radio />}
              label="10 inches"
              labelPlacement='start'
            />
            <FormControlLabel
              value="12 inches"
              control={<Radio />}
              label="12 inches"
              labelPlacement='start'
            />
            <FormControlLabel
              value="14 inches"
              control={<Radio />}
              label="14 inches"
              labelPlacement='start'
            />
            <FormControlLabel
              value="16 inches"
              control={<Radio />}
              label="16 inches"
              labelPlacement='start'
            />
          </RadioGroup>
    </FormControl>
  );
}