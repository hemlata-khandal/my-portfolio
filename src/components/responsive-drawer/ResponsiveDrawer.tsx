import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CloudDownload } from "@mui/icons-material";
import { Divider, Link, useMediaQuery, useTheme } from "@mui/material";
import CustomAppBar from "../app-bar/CustomAppBar";
import Logo from "../../assets/images/logo.png";
import LogoWebp from "../../assets/images/logo.webp";
import drawerListItems from "./data";
import AdvanceImg from "../advance-img/AdvanceImg";

const drawerWidth = 240;

interface ResponsiveDrawerProps {
  children: JSX.Element;
  darkMode: boolean;
  toggleDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIndex: number;
}

const ResponsiveDrawer: React.FunctionComponent<ResponsiveDrawerProps> = (
  props
) => {
  const { children, darkMode, toggleDarkMode, selectedIndex } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const drawer = (
    <div>
      <Box
        sx={{
          mr: 2,
          ml: 2,
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AdvanceImg
          src={Logo}
          srcWebp={LogoWebp}
          altText="Hemlata Khandal's Logo"
          style={{ width: "100%", margin: "1rem 0" }}
        />
      </Box>
      <Divider />
      <List>
        {drawerListItems.map((drawerListItem, index) => (
          <ListItem
            button
            key={drawerListItem.id}
            data-testid={drawerListItem.id}
            onClick={() => handleMenuItemClick(`${drawerListItem.id}-section`)}
            selected={selectedIndex === index}
          >
            <ListItemIcon>{drawerListItem.icon}</ListItemIcon>
            <ListItemText primary={drawerListItem.displayText} />
          </ListItem>
        ))}
        <ListItem
          button
          key="resume"
          component={Link}
          rel="noopener"
          target="_blank"
          href="https://drive.google.com/file/d/1c5qxTzBdF1qFipc9di35EHsQXBfka3Ve/view"
        >
          <ListItemIcon>
            <CloudDownload />
          </ListItemIcon>
          <ListItemText primary="Resume" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <CustomAppBar
        darkMode={darkMode}
        toggleDrawer={handleDrawerToggle}
        toggleDarkMode={toggleDarkMode}
        drawerWidth={drawerWidth}
      />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant={isDesktop ? "permanent" : "temporary"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
