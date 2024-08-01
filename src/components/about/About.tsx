import { CloudDownload } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import ProfilePic from "../../assets/images/profile.png";
import ProfilePicWebp from "../../assets/images/profile.webp";
import AdvanceImg from "../advance-img/AdvanceImg";

const About = forwardRef((_, ref) => (
  <Box
    ref={ref}
    id="about-section"
    sx={{
      p: { xs: 2, sm: 4 },
      pt: 8,
    }}
  >
    <Typography
      variant="h3"
      textAlign="center"
      gutterBottom
      color="primary"
      fontWeight="500"
      m={4}
      fontSize={{ xs: "2.125rem", sm: "3rem" }}
    >
      About Me
    </Typography>

    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item sm={6} sx={{ position: "relative" }}>
        <AdvanceImg
          altText="Hemlata Khandal"
          srcWebp={ProfilePicWebp}
          src={ProfilePic}
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
            border: "5px solid #008073",
            borderRadius: "50%",
          }}
        />
        <Card variant="outlined" sx={{ pt: 12, mt: 12 }}>
          <>
            <CardContent>
              <Typography variant="h4" component="div" textAlign="center">
                Hemlata Khandal
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                textAlign="center"
              >
                Senior Consultant @ Capgemini
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", pb: 2 }}
            >
              <Button
                variant="outlined"
                startIcon={<CloudDownload />}
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1c5qxTzBdF1qFipc9di35EHsQXBfka3Ve/view"
              >
                Resume
              </Button>
            </CardActions>
          </>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <Typography textAlign="justify">
          I&apos;m a seasoned Frontend Developer with 8 years of expertise in
          creating responsive and user-friendly web applications. I have a deep
          interest and passion for technology. I love writing and owning codes
          and enjoy working with people who will keep challenging you at every
          stage. I have strong problem solving, analytic, decision-making and
          excellent communication with interpersonal skills. I&apos;m
          self-driven and motivated with the desire to work in a fast-paced,
          results-driven agile environment with varied responsibilities. I love
          to challenge myself to deliver these solutions with the highest
          quality.
        </Typography>
      </Grid>
    </Grid>
  </Box>
));

export default About;
