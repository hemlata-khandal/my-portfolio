import React from "react";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Logo from "../../assets/images/logo.png";
import LogoWebp from "../../assets/images/logo.webp";
import AdvanceImg from "../advance-img/AdvanceImg";

interface CustomAppBarProps {
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: () => void;
  drawerWidth: number;
}

const CustomAppBar: React.FunctionComponent<CustomAppBarProps> = (props) => {
  const { darkMode, toggleDarkMode, toggleDrawer, drawerWidth } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="default"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
          <Box sx={{ mr: 2, display: { sm: "none" } }}>
            <AdvanceImg
              src={Logo}
              srcWebp={LogoWebp}
              altText="Hemlata Khandal's Logo"
              style={{ height: "3.5rem" }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="toggle light/dark mode"
              color="inherit"
              onClick={() => toggleDarkMode(!darkMode)}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
