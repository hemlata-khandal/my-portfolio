import React, { forwardRef } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import SkillsData from "./data";
import AdvanceImg from "../advance-img/AdvanceImg";

const Skills = forwardRef((_, ref) => (
  <Box ref={ref} sx={{ p: { xs: 2, sm: 4 }, pt: 8 }} id="skills-section">
    <Typography
      variant="h3"
      textAlign="center"
      gutterBottom
      color="primary"
      fontWeight="500"
      fontSize={{ xs: "2.125rem", sm: "3rem" }}
    >
      Skills
    </Typography>
    {SkillsData.map((skillCategory) => (
      <Card key={skillCategory.name} sx={{ mb: 2 }} variant="outlined">
        <CardContent>
          <Typography variant="h5" color="primary">
            {skillCategory.name}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            {skillCategory.skills.map((skill) => (
              <Grid
                key={skill.name}
                item
                xs={6}
                sm={4}
                lg={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "100px",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {skill.name === "Github" ? (
                    <GitHub sx={{ fontSize: "6rem" }} />
                  ) : (
                    <AdvanceImg
                      src={skill.logo}
                      srcWebp={skill.logoWebp}
                      altText={`${skill.name} logo`}
                      style={{ maxWidth: "100px", maxHeight: "100px" }}
                    />
                  )}
                </Box>
                <Typography textAlign="center">{skill.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    ))}
  </Box>
));

export default Skills;

// 21345567799
// 2134556779
// 213455677
