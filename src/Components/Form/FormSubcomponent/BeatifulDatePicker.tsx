import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import React from "react";
import { minWidth } from "../ContactForm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const popperSx = {
  color: "red",
};
export const BeatifulDatePicker = (props: {
  value: string | null | undefined;
  onChange: (value: string | null | undefined) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        {...props}
        label="Date"
        inputFormat="MM/DD/YYYY"
        views={["day"]}
        renderInput={(params) => {
          return <TextField {...params} sx={{ minWidth: minWidth }} />;
        }}
        components={{
          OpenPickerIcon: CalendarTodayIcon,
        }}
        InputProps={{
          sx: { "& .MuiSvgIcon-root": { color: "primary.main" } },
        }}
        PopperProps={{
          sx: { popperSx },
        }}
      />
    </LocalizationProvider>
  );
};
