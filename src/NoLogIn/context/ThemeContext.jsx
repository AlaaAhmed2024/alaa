import { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";




export const ColorModeContext = createContext();
export default function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // const theme = useMemo(
  //   () =>
  //     createTheme({
  //       direction: "rtl",
  //       palette: {
  //         mode,
  //         primary: { main: "#1e88e5" },
  //         secondary: { main: "#ff9800" },
  //       },
  //     }),
  //   [mode]
  // );
  
  const theme = useMemo(
  () =>
    createTheme({
      direction: "rtl",
      palette: {
        mode,
        primary: { main: "#1e88e5" },
        secondary: { main: "#ff9800" },
      },
      typography: {
        fontFamily: "Cairo, Arial, sans-serif",
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              fontFamily: "Cairo, Arial, sans-serif",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              fontFamily: "Cairo, Arial, sans-serif",
            },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            root: {
              fontFamily: "Cairo, Arial, sans-serif",
            },
          },
        },
      },
    }),
  [mode]
);


  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
