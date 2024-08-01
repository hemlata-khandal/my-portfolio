import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Company } from "./company.model";
import AdvanceImg from "../advance-img/AdvanceImg";

const CompanyDetail: React.FunctionComponent<Company> = (props) => {
  const {
    logo,
    logoWeb,
    name,
    position,
    description,
    accomplishments,
    location,
    duration,
  } = props;
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Card variant="outlined" sx={{ p: { xs: 2, sm: 4 }, my: 2 }}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <AdvanceImg
            src={logo}
            srcWebp={logoWeb}
            altText={`${name} Logo`}
            style={{ height: "40px" }}
          />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: { xs: "center", sm: "right" } }}
            >
              {position}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: { xs: "center", sm: "right" } }}
            >
              {location}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body1" textAlign="justify">
          {description}
        </Typography>
        <Typography variant="subtitle2">ACCOMPLISHMENTS</Typography>
        <ul>
          {accomplishments.map((accomplishment) => (
            <li key={accomplishment} style={{ textAlign: "justify" }}>
              <Typography variant="body2" textAlign="justify">
                {accomplishment}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      {isTabletOrSmaller && (
        <>
          <Divider />
          <CardActions>
            <Button variant="text" disabled>
              {duration}
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default CompanyDetail;
