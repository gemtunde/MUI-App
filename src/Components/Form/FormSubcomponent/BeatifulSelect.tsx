import {
  MenuItem,
  Select,
  ListItemText,
  SelectProps,
  SelectChangeEvent,
} from "@mui/material";
import { minWidth } from "../ContactForm";

const skills = [
  "Dribbling",
  "Passing",
  "Vission",
  "Holdup",
  "Scoring",
  "Running",
];

export const BeatifulSelect = (props: {
  value: "" | string[] | undefined;
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
}) => {
  return (
    <Select
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(" , ")}
      sx={{ minWidth: minWidth, marginRight: 2 }}
    >
      {skills.map((skillName) => {
        return (
          <MenuItem value={skillName} key={skillName}>
            <ListItemText primary={skillName} />
          </MenuItem>
        );
      })}
    </Select>
  );
};
