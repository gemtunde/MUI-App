import { TextField, TextFieldProps, Autocomplete } from "@mui/material";
import { minWidth } from "../ContactForm";

const roles = [
  "Striker",
  "Midfilder",
  "Defender",
  "Defensive Midfielder",
  "GoalKeeper",
];

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
      sx={{ minWidth: minWidth }}
      isOptionEqualToValue={(option, value) => option === value || value === ""}
      renderInput={(params) => {
        return (
          <TextField
            name="role"
            sx={{
              minWidth: minWidth,
              "& .MuiOutlinedInput-root.Mui-focused": {
                color: "primary.main",
              },
            }}
            {...params}
          />
        );
      }}
      getOptionLabel={(roleOption) => `${roleOption}`}
      renderOption={(props, option) => {
        return <li {...props}> {`${option}`}</li>;
      }}
      ListboxProps={{
        //@ts-ignore
        sx: {
          height: 100,
          color: "primary.main",
          "& li:nth-child(even)": { backgroundColor: "green" },
        },
      }}
      onChange={() => {
        debugger;
      }}
    />
  );
};
