import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import "@fontsource/open-sans";

import Slot from "../../Components/Slot";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiBox-root": {
      height: "auto",
      width: "100%",
      maxWidth: 400,
      border: "4px solid black",
      margin: theme.spacing(4),
    },
    "& .MuiTypography-root": {
      margin: theme.spacing(1),
      // fontFamily: "Battambang",
      fontWeight: 500,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
    "& .MuiInputBase-root": {
      padding: 0,
      "& .MuiButtonBase-root": {
        padding: 0,
        paddingLeft: 10,
      },
      "& .MuiInputBase-input": {
        padding: 15,
        paddingLeft: 15,
      },
    },
  },
  heading: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  rdtPicker: {
    width: 40, //Change it your preferred width
  },
}));

const SchedulePage = () => {
  const classes = useStyles();
  const [interviewDate, setInteerviewDate] = useState(null);
  const [meetLink, setMeetLink] = useState("");

  const [id, setID] = useState(0);
  const [startsAt, setStartsAt] = useState();
  const [endsAt, setEndsAt] = useState();
  const [count, setCount] = useState(10);

  const [timeSlots, setTimeSlots] = useState([]);

  const handleAddSlots = () => {
    setID(id + 1);
    setTimeSlots((oldTimeSlots) => [
      ...oldTimeSlots,
      { id, startsAt, endsAt, count },
    ]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Box>
        <div className={classes.heading}>
          <Typography variant="h4" gutterBottom component="h5">
            Schedule Interview
          </Typography>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Interview"
              value={interviewDate}
              onChange={(newValue) => {
                setInteerviewDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          {/* <Grid container spacing={2} columns={2}>
            <Grid item xs={1}> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileTimePicker
                  label="Start Time"
                  className={classes.rdtPicker}
                  value={startsAt}
                  onChange={(newValue) => {
                    setStartsAt(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            {/* </Grid>
            <Grid item xs={1}> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileTimePicker
                  label="End Time"
                  className={classes.rdtPicker}
                  value={endsAt}
                  onChange={(newValue) => {
                    setEndsAt(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            {/* </Grid>
          </Grid> */}
          <TextField
            label="Count"
            variant="outlined"
            required
            type="number"
            helperText="Number of students in this slot"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddSlots}>
            Add Slot
          </Button>
          {timeSlots.map((item) => {
            const { startsAt, endsAt } = item;
            const [hour1, minutes1] = [
              startsAt.getHours(),
              startsAt.getMinutes(),
            ];
            const [hour2, minutes2] = [endsAt.getHours(), endsAt.getMinutes()];
            return (
              <div>
                <Slot
                  id={item.id}
                  hour1={hour1}
                  minutes1={minutes1}
                  hour2={hour2}
                  minutes2={minutes2}
                  count={item.count}
                />
                <br />
              </div>
            );
          })}

          <TextField
            label="Meet Link"
            variant="outlined"
            required
            value={meetLink}
            onChange={(e) => setMeetLink(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Schedule
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default SchedulePage;
