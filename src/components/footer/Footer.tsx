import React, { forwardRef } from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { Email, LinkedIn } from "@mui/icons-material";
import AppInfo from "../../../package.json";
import SocialLink from "./SocialLink";

const Footer = forwardRef((_, ref) => (
  <Box bgcolor="primary.main" id="contact-me-section" ref={ref}>
    <Grid container spacing={2} p={4} px={{ xs: 2, sm: 4 }}>
      <Grid
        item
        lg={6}
        sm={6}
        xs={12}
        display="flex"
        justifyContent={{ xs: "center", sm: "flex-start" }}
      >
        <SocialLink
          href="mailto:hemlatakhandal95@gmail.com"
          startIcon={<Email />}
          text="hemlatakhandal95@gmail.com"
        />
      </Grid>
      <Grid
        item
        lg={6}
        sm={6}
        xs={12}
        display="flex"
        justifyContent={{ xs: "center", sm: "flex-start" }}
      >
        <SocialLink
          href="https://www.linkedin.com/in/hemlatakhandal/"
          startIcon={<LinkedIn />}
          text="/hemlatakhandal"
        />
      </Grid>
    </Grid>
    <Paper
      variant="outlined"
      sx={{ mx: { xs: 2, sm: 4 }, mb: 2, backgroundColor: "#008073" }}
    >
      <Typography
        p={2}
        textAlign="justify"
        variant="body2"
        color="white"
        fontStyle="italic"
      >
        All third-party trademarks (including logos and icons) referenced in
        this site remain the property of their respective owners. All references
        in this site to third party trademarks are to identify the corresponding
        third party goods and/or services and intended to constitute nominative
        fair use under applicable trademark laws.
      </Typography>
    </Paper>
    <Divider />
    <Typography
      px={{ xs: 2, sm: 4 }}
      py={2}
      textAlign="center"
      variant="body2"
      color="white"
    >
      © 2024 Hemlata Khandal | All Right Reserved | &nbsp;
      {`v${AppInfo.version}`}
    </Typography>
  </Box>
));

export default Footer;
