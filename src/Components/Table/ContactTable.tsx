import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { contactData } from "../../Data/ContactData";

type Props = {};

const ContactTable = (props: Props) => {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* refactor with object.entries here */}
              <TableCell> Name </TableCell>
              <TableCell> Role </TableCell>
              <TableCell> Skills </TableCell>
              <TableCell> Start Date </TableCell>
              <TableCell> Preference </TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
            {contactData.map((contact) => {
              return (
                <TableRow key={contact.id}>
                  {Object.entries(contact).map(([key, value]) => {
                    if (key === "skills") {
                      return (
                        <TableCell key={contact.id + key}>
                          {value.join(", ")}
                        </TableCell>
                      );
                    }
                    if (key !== "id") {
                      return (
                        <TableCell key={contact.id + key}>{value}</TableCell>
                      );
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody> */}
          <TableBody>
            {contactData.map((contact) => {
              return (
                <TableRow key={contact.id}>
                  {Object.entries(contact).map(([key, value]) => {
                    if (key === "skills") {
                      return (
                        <TableCell
                          key={contact.id + key}
                          //sx={{ ...borderColor }}
                        >
                          {value.join(", ")}
                        </TableCell>
                      );
                    }
                    // if (key === "name") {
                    //   return (
                    //     <TableCell
                    //       key={contact.id + key}
                    //       sx={{
                    //       //  ...borderColor,
                    //         backgroundColor: "primary.light",
                    //       }}
                    //       onClick={(event: React.MouseEvent<HTMLElement>) => {
                    //         console.log((event.target as Element).innerHTML);
                    //       }}
                    //     >
                    //       {value}
                    //     </TableCell>
                    //   );
                    // }
                    if (key !== "id") {
                      return (
                        <TableCell
                          key={contact.id + key}
                          // sx={{ ...borderColor }}
                        >
                          {value}
                        </TableCell>
                      );
                    }
                    return "";
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactTable;
