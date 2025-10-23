"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["A"],
  },
  palette: {
    text: {
      primary: "#fdc00e",
      secondary: "#fff",
      tertiary: "#ffffff91",
    },
    primary: {
      main: "#fdc00e",
      contrastText: "#0a222e",
    },
  },
});

export default function ThemeFonts({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
