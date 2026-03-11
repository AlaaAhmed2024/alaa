import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#1e88e5" },
    secondary: { main: "#ff9800" },
    background: { default: "#f4f6fa" },
  },
  typography: {
    fontFamily: "Tahoma, Arial",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          transition: "all 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "all 0.3s",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
        },
      },
    },
  },
});

export default theme;
