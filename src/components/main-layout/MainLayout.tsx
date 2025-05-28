// src/components/layouts/MainLayout.tsx
import React, { Dispatch, SetStateAction, useRef } from "react";
import { Box } from "@mui/material";
import { Scrollspy } from "@makotot/ghostui";
import Header from "../header/Header";
import ResponsiveDrawer from "../responsive-drawer/ResponsiveDrawer";
import About from "../about/About";
import Experiences from "../experiences/Experiences";
import Divider from "../divider/Divider";
import Skills from "../skills/Skills";
import Certifications from "../certifications/Certifications";
import Education from "../education/Education";
import Footer from "../footer/Footer";

interface Props {
  darkMode: boolean;
  toggleDarkMode: Dispatch<SetStateAction<boolean>>;
}

const MainLayout: React.FC<Props> = ({ darkMode, toggleDarkMode }) => {
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
    <Scrollspy sectionRefs={sectionsRefs}>
      {({ currentElementIndexInViewport }) => (
        <ResponsiveDrawer
          selectedIndex={currentElementIndexInViewport}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
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
  );
};

export default MainLayout;
