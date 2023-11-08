import React, { useState } from "react";
import {
  Card,
  Avatar,
  CardHeader,
  Grid,
  CardContent,
  Typography,
  List,
  ListItem,
  ListSubheader,
  Box,
  Button,
  Collapse,
} from "@mui/material";
import { contactData } from "../../Data/ContactData";

type Props = {};

const contactLiheight = 24;
let maxSkills = 1;

const ContactCardGrid = (props: Props) => {
  const [open, setOpen] = useState(true);

  const gridAllProps = open
    ? {}
    : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

  return (
    <Box m={1}>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Collapse
      </Button>
      <Grid
        container
        spacing={2}
        sx={{
          width: 700,
          backgroundColor: "grid.main",
          marginLeft: 0,
          paddingRight: 2,
          paddingBottom: 2,
        }}
      >
        {contactData.map((contact) => {
          maxSkills =
            (contact.skills?.length || 0) > maxSkills
              ? contact.skills?.length || 0
              : maxSkills;
          return (
            <Grid item key={contact.name} xs={open ? 6 : 12} sx={gridAllProps}>
              <Card sx={{ width: 300, boxShadow: 6 }}>
                <CardHeader
                  title={contact.name}
                  subheader={contact.role}
                  sx={{
                    borderBottom: "1px solid",
                    borderBottomColor: "primary.main",
                  }}
                  avatar={
                    <Avatar
                      sx={{
                        backgroundColor: "primary.main",
                      }}
                    >
                      {contact.name?.substring(0, 1).toUpperCase() || "A"}
                    </Avatar>
                  }
                />
                <Collapse
                  in={open}
                  //  timeout={2000} orientation="horizontal"
                >
                  <CardContent
                    sx={{ height: 104 + maxSkills * contactLiheight }}
                  >
                    <Typography>
                      <b>Start Date</b> : {contact.startDate}
                    </Typography>
                    <Typography>
                      <b>Work Preference</b> : {contact.preference}
                    </Typography>
                    <List
                      sx={{
                        listStyle: "list-item",
                        listStyleType: "circle",
                        paddingLeft: 2,
                      }}
                      subheader={
                        <ListSubheader
                          sx={{
                            right: 16,
                            position: "inherit",
                            fontSize: "1.5rem",
                            color: "black",
                            paddingLeft: 0,
                          }}
                        >
                          Skills
                        </ListSubheader>
                      }
                    >
                      {contact.skills?.map((skill) => {
                        return (
                          <li key={skill} style={{ paddingBottom: "2px" }}>
                            {skill}
                          </li>
                        );
                      })}
                    </List>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ContactCardGrid;
