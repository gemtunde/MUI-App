import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import { useTheme, Theme } from "@mui/material/styles";
//import { Theme } from "@emotion/react";

type Props = {};

const ContactDataGrid = (props: Props) => {
  const theme = useTheme();

  const columns = (theme: Theme) => [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return cellValues.value;
      },
    },
    {
      field: "role",
      headerName: "Role",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return cellValues.value;
      },
    },
    {
      field: "skills",
      headerName: "Skills",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return (
          <div style={{ color: theme.palette.primary.main }}>
            {cellValues.value ? cellValues.value[0] : ""}
          </div>
        );
      },
    },
    {
      field: "startDate",
      headerName: " Start Date",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return cellValues.value;
      },
    },
    {
      field: "preference",
      headerName: "Work Preference",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return cellValues.value;
      },
    },
  ];
  const rows = [...contactData];
  //const rows =() => [...contactData];
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        rows={rows}
        columns={columns(theme)}
        pageSize={5}
        headerHeight={60}
        rowHeight={80}
        //autoHeight
      />
    </div>
  );
};

export default ContactDataGrid;
