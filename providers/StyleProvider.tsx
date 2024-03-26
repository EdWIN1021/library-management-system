"use client";

import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    typography: {},
    palette: {
      primary: {
        main: "#ff8a00",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleProvider;
