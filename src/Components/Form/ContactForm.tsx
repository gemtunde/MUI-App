import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  Paper,
  Stack,
  Button,
  SelectChangeEvent,
  Dialog,
  Alert,
  AlertTitle,
  MenuItem,
  Checkbox,
  ListItemText,
  useTheme,
} from "@mui/material";

import { FormValues, contactData } from "../../Data/ContactData";
import { BeatifulTextField } from "./FormSubcomponent/BeatifulTextField";
import { BeatifulAutocomplete } from "./FormSubcomponent/BeatifulAutocomplete";
import { BeatifulSelect } from "./FormSubcomponent/BeatifulSelect";
import { BeatifulDatePicker } from "./FormSubcomponent/BeatifulDatePicker";
import { BeautifulRadios } from "./FormSubcomponent/BeautifulRadios";

type Props = {};

export const minWidth = 300;
export const today = new Date();
export const defaultPreference = "Playing";

const skills = [
  "Dribbling",
  "Passing",
  "Vission",
  "Holdup",
  "Scoring",
  "Running",
  "Saving",
];

const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      border: "1px solid",
      borderColor: "primary.main",
    },
    "&:hover": {
      "& > fieldset": {
        borderColor: "primary.light",
      },
    },
  },
  "& .MuiFormLabel-root": {
    color: "primary.dark",
  },
};

const ContactForm = (props: Props) => {
  const [alertOpen, setAlertOpen] = useState(false);

  //theme
  const theme = useTheme();
  //initial value
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: ["Passing"],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}`,
      preference: defaultPreference,
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //autocomplete change handler
  const handleAutoCompleteChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || "",
    });
  };

  //handle select change
  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value },
    } = event;
    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(",") : value,
    });
  };

  //handle date picker change
  const handleDatePickerChange = (value: string | null | undefined) => {
    console.log(value);
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };
    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/${startDate.date()}/${startDate.year()}`,
    });
  };

  //handle radio change
  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };
  const handleClearSubmit = () => {
    clearValues();
  };

  //clear form values
  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  console.log(contactData);

  return (
    <>
      <Paper sx={paperInputStyle}></Paper>
      <Paper
        //   adding additional styling, icase we have multiple components using the styling. here we spread the style object and add additional style
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          backgroundColor: "grid.dark",
        }}
      >
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeatifulTextField
                id="name"
                name="name"
                label="Name"
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeatifulAutocomplete
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeatifulSelect
                value={formValues.skills || ""}
                onChange={handleSelectChange}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox
                        checked={formValues.skills?.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </BeatifulSelect>

              <BeatifulDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <BeautifulRadios
                preference={formValues.preference}
                handleRadioChange={handleRadioChange}
              />
              <Stack>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="beautiful" onClick={handleClearSubmit}>
                  Clear
                </Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClose}>
        <Alert>
          <AlertTitle>Success!!</AlertTitle>
          Form Submitted!!!
        </Alert>
      </Dialog>
    </>
  );
};

export default ContactForm;
