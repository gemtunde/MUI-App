import React, { ChangeEvent } from "react";
import { defaultPreference, minWidth } from "../ContactForm";
import {
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

export const BeautifulRadios = (props: {
  preference: string | undefined;
  handleRadioChange: (
    event: ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}) => {
  return (
    <FormGroup
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
      }}
    >
      <FormLabel component="legend">Work Preference</FormLabel>
      <RadioGroup
        id="preference-type-radio"
        name="preference"
        value={props.preference}
        onChange={props.handleRadioChange}
      >
        <FormControlLabel
          label={defaultPreference}
          value={defaultPreference}
          control={<Radio />}
        />
        <FormControlLabel label="Bench" value="Bench" control={<Radio />} />
        <FormControlLabel
          label="Injuries"
          value="Injuries"
          control={<Radio />}
        />
      </RadioGroup>
    </FormGroup>
  );
};
