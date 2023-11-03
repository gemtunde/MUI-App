import { TextField, TextFieldProps, Autocomplete } from "@mui/material";
import { minWidth } from "../ContactForm";

const roles = ["Striker", "Midfilder", "Defender", "Defensive Midfielder"];

export const BeatifulAutocomplete = (props: {
  value: string;
  onInputChange: (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}) => {
  return (
    <Autocomplete
      {...props}
      options={roles}
      renderInput={(params) => {
        return (
          <TextField name="role" sx={{ minWidth: minWidth }} {...params} />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}> {`${option}`}</li>;
      }}
      sx={{ minWidth: minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
    />
  );
};
