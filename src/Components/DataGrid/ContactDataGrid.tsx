import React from "react";
import { DataGrid, GridRenderCellParams, GridToolbar } from "@mui/x-data-grid";
import { contactData } from "../../Data/ContactData";
import { useTheme, Theme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";
//import { Theme } from "@emotion/react";

type Props = {};

const ContactDataGrid = (props: Props) => {
  const theme = useTheme();

  const handlePrintClick = (cellValues: GridRenderCellParams<string>) => {
    console.log(cellValues);
  };

  const dataGridSx = {
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "primary.main",
      fontWeight: "bold",
      fontSize: 14,
      color: "white",
    },
    "& .MuiDataGrid-virtualScrollerContent": {
      "& .MuiDataGrid-row": {
        "&:nth-of-type(even)": {
          backgroundColor: "grid.main",
          // fontWeight: "bold",
          // fontSize: 14,
          // color: "white",
        },
      },
    },
  };

  const columns = (theme: Theme) => [
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return (
          <Box
            sx={{
              color: "primary.main",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {cellValues.value}
          </Box>
        );
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
    {
      field: "Print",
      //headerName: "Work Preference",
      minWidth: 150,
      renderCell: (cellValues: GridRenderCellParams<string>) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handlePrintClick(cellValues)}
          >
            Print
          </Button>
        );
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
        sx={dataGridSx}
        components={{
          Toolbar: () => (
            <GridToolbar
              sx={{
                justifyContent: "flex-end",
                "& button": { border: "none" },
                "& .MuiBox-root": { display: "none" },
              }}
            ></GridToolbar>
          ),
        }}
        initialState={{
          sorting: { sortModel: [{ field: "name", sort: "asc" }] },
        }}
      />
    </div>
  );
};

export default ContactDataGrid;
