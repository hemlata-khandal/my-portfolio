import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Grid,
  Stack,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import moment, { Moment } from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

type Slot = {
  from: Moment;
  to: Moment;
};

export default function WFHTimeSlotCalculator(): JSX.Element {
  const [checkIn, setCheckIn] = useState<Moment | null>(null);
  const [checkOut, setCheckOut] = useState<Moment | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const OFFICE_START = moment().hour(9).minute(0);
  const OFFICE_END = moment().hour(19).minute(30);
  const TOTAL_WORK_HOURS = 9.25;

  const calculateDuration = (start: Moment, end: Moment): number =>
    end.diff(start, "minutes") / 60;

  const getWFHSlots = (): void => {
    if (!checkIn || !checkOut) return;

    const adjustedCheckIn = moment(checkIn).subtract(20, "minutes");
    const adjustedCheckOut = moment(checkOut).add(20, "minutes");

    const officeDuration = calculateDuration(moment(checkIn), moment(checkOut));
    let remaining = TOTAL_WORK_HOURS - officeDuration;

    const possibleSlots: Slot[] = [];

    // Before office slot
    const preOfficeSlotEnd = adjustedCheckIn.isAfter(OFFICE_START)
      ? adjustedCheckIn
      : OFFICE_START;
    const preOfficeSlotDuration = calculateDuration(
      OFFICE_START,
      preOfficeSlotEnd
    );

    if (preOfficeSlotDuration > 0 && remaining > 0) {
      const durationUsed = Math.min(preOfficeSlotDuration, remaining);
      possibleSlots.push({
        from: OFFICE_START.clone(),
        to: OFFICE_START.clone().add(durationUsed * 60, "minutes"),
      });
      remaining -= durationUsed;
    }

    // After office slot
    if (remaining > 0) {
      const postOfficeSlotStart = adjustedCheckOut;
      const postOfficeSlotEnd = moment.min(
        OFFICE_END,
        postOfficeSlotStart.clone().add(remaining * 60, "minutes")
      );
      const actualDuration = calculateDuration(
        postOfficeSlotStart,
        postOfficeSlotEnd
      );
      if (actualDuration > 0) {
        possibleSlots.push({
          from: postOfficeSlotStart.clone(),
          to: postOfficeSlotStart.clone().add(actualDuration * 60, "minutes"),
        });
        remaining -= actualDuration;
      }
    }

    setSlots(possibleSlots);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 6, borderRadius: 3 }}>
          <Typography variant="h4" gutterBottom textAlign="center">
            WFH Time Slot Calculator
          </Typography>
          <Divider sx={{ marginBottom: 3 }} />
          <Grid container spacing={2} direction={isMobile ? "column" : "row"}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" gutterBottom textAlign="center">
                Check-in Time
              </Typography>
              <Box display="flex" justifyContent="center">
                <TimeClock
                  ampm={false}
                  value={checkIn}
                  onChange={(newValue: Moment | null) => setCheckIn(newValue)}
                />
              </Box>
              {checkIn && (
                <Typography variant="body2" textAlign="center" mt={1}>
                  Selected: <strong>{checkIn.format("hh:mm A")}</strong>
                </Typography>
              )}
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="subtitle1" gutterBottom textAlign="center">
                Check-out Time
              </Typography>
              <Box display="flex" justifyContent="center">
                <TimeClock
                  ampm={false}
                  value={checkOut}
                  onChange={(newValue: Moment | null) => setCheckOut(newValue)}
                />
              </Box>
              {checkOut && (
                <Typography variant="body2" textAlign="center" mt={1}>
                  Selected: <strong>{checkOut.format("hh:mm A")}</strong>
                </Typography>
              )}
            </Grid>
          </Grid>

          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary" onClick={getWFHSlots}>
              Calculate WFH Slots
            </Button>
          </Box>

          {slots.length > 0 && (
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Suggested WFH Slots
              </Typography>
              <Stack spacing={2}>
                {slots.map((slot) => (
                  <Card
                    key={
                      slot.from.format("hh:mm A") + slot.to.format("hh:mm A")
                    }
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography variant="body1">
                        <strong>{slot.from.format("hh:mm A")}</strong> to{" "}
                        <strong>{slot.to.format("hh:mm A")}</strong>
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        Duration:{" "}
                        {calculateDuration(slot.from, slot.to).toFixed(2)} hrs
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Box>
          )}
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}
