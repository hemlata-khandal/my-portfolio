// App.tsx
import React, { useEffect, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../utils/global-style";
import createCustomTheme from "../../utils/theme";
import MainLayout from "../main-layout/MainLayout";
import WFHTimeSlotCalculator from "../wfh-calculator/WFHTimeSlotCalculator";

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={createCustomTheme(darkMode)}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout darkMode={darkMode} toggleDarkMode={setDarkMode} />
            }
          />
          <Route path="/wfh" element={<WFHTimeSlotCalculator />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
