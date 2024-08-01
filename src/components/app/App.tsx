import React, { useEffect, useRef, useState } from "react";
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import { Scrollspy } from "@makotot/ghostui";
import GlobalStyle from "../../utils/global-style";
import createCustomTheme from "../../utils/theme";
import Header from "../header/Header";
import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Divider from "../divider/Divider";
import Skills from "../skills/Skills";
import Certifications from "../certifications/Certifications";
import Education from "../education/Education";
import Footer from "../footer/Footer";

const App: React.FunctionComponent = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const sectionsRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <ThemeProvider theme={createCustomTheme(darkMode)}>
      <GlobalStyle />
      <Scrollspy sectionRefs={sectionsRefs}>
        {({ currentElementIndexInViewport }) => (
          <ResponsiveDrawer
            selectedIndex={currentElementIndexInViewport}
            darkMode={darkMode}
            toggleDarkMode={setDarkMode}
          >
            <Box>
              <Header />
              <About ref={sectionsRefs[0]} />
              <Divider width="60%" variant={darkMode ? "dark" : "light"} />
              <Experiences ref={sectionsRefs[1]} />
              <Divider width="60%" variant={darkMode ? "dark" : "light"} />
              <Skills ref={sectionsRefs[3]} />
              <Divider width="60%" variant={darkMode ? "dark" : "light"} />
              <Certifications ref={sectionsRefs[4]} />
              <Divider width="60%" variant={darkMode ? "dark" : "light"} />
              <Education ref={sectionsRefs[5]} />
              <Footer ref={sectionsRefs[6]} />
            </Box>
          </ResponsiveDrawer>
        )}
      </Scrollspy>
    </ThemeProvider>
  );
};

export default App;
