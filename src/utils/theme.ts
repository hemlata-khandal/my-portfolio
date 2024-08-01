import { createTheme } from "@mui/material";

const createCustomTheme = (darkMode: boolean) => {
  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#008073",
        light: "#48a999",
        dark: "#004c40",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ffeb3b",
        light: "#ffff72",
        dark: "#c8b900",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  });
};

export default createCustomTheme;
