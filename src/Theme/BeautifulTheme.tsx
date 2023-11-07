import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    grid: { main: string; dark: string };
  }
  interface PaletteOptions {
    grid?: { main: string; dark: string };
  }
}
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    beautiful: true;
  }
}
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    //adding new breakpoint - sl
    sl: true;
    xl: true;
  }
}

const BeautifulTheme = createTheme({
  palette: {
    primary: {
      main: "#ff4f00",
      light: "#fc7b3ff3",
      dark: "#843803",
    },
    grid: {
      main: "rgba(0,0,0,0.1)",
      dark: "rgba(0,0,0,0.2)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid yellow",
          //  backgroundColor: "orange",
          //color: "white",
        },
      },
      variants: [
        {
          props: { variant: "beautiful" },
          style: {
            fontStyle: "italic",
            border: "4px solid lightpink",
            color: "fuchsia",
            backgroundColor: "red",
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      //adding new breakpoint - sl
      sl: 1500,
      xl: 1920,
    },
  },
});

export { BeautifulTheme };
