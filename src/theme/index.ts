import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import palette from "./palette";

const theme = createTheme({
  palette,
  typography: {
    h1: {
      fontSize: "3.75rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#6E6E6E",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: palette.secondary.main,
          color: palette.secondary.contrastText,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: palette.secondary.contrastText,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.secondary.contrastText,
        },
      },
    },
  },
});

export default theme;
