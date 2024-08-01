import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import certifications from "./data";

const Certifications = forwardRef((_, ref) => (
  <Box
    ref={ref}
    sx={{ p: { xs: 2, sm: 4 }, pt: 8 }}
    id="certifications-section"
  >
    <Typography
      variant="h3"
      textAlign="center"
      gutterBottom
      color="primary"
      fontWeight="500"
      fontSize={{ xs: "2.125rem", sm: "3rem" }}
    >
      Certifications
    </Typography>
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {certifications.map((certification) => (
        <Grid
          key={certification.name}
          item
          md={6}
          sm={12}
          sx={{ position: "relative" }}
        >
          <Card data-testid="certification-card" variant="outlined">
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                data-testid="certification-title"
                color="primary"
              >
                <Link
                  target="_blank"
                  href={certification.url}
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  {certification.name}
                </Link>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="justify"
              >
                {certification.description}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                variant="text"
                disabled
                sx={{ textTransform: "capitalize" }}
              >
                {`${certification.vendor} | ${certification.duration}`}
              </Button>
              <Button
                target="_blank"
                href={certification.url}
                endIcon={<ArrowForward />}
                variant="text"
                rel="noreferrer"
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
));

export default Certifications;
