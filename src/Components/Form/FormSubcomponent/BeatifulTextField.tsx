import { TextField, TextFieldProps } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeatifulTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth,
        marginRight: 2,
        marginBottom: { xs: 2, md: 0 },
        // "& .MuiInputBase-root": { height: 80 },
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "primary.dark",
          },
        },
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange",
          },
        },
      }}
    />
  );
};
