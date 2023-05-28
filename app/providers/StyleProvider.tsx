"use client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const StyleProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff8a00",
        contrastText: "#fff",
      },
    },
  });

  // theme.typography.h1 = {
  //   fontSize: "45px",
  //   fontWeight: "600",
  // };

  // theme.typography.h2 = {
  //   fontSize: "35px",
  //   fontWeight: "300",
  // };

  // theme.typography.subtitle2 = {
  //   fontSize: "25px",
  //   fontWeight: "400",
  // };

  // theme.typography.body1 = {
  //   fontSize: "18px",
  // };

  // theme.typography.body2 = {
  //   fontSize: "14px",
  // };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyleProvider;
