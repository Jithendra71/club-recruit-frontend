import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clubLoginService } from "../../Services/club.service";
import { fresherLoginService } from "../../Services/fresher.service";
import { notify } from "../../Utils/notify";

import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import Typography from "@mui/material/Typography";
import "@fontsource/open-sans";


const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isClub, setIsClub] = useState("");
  const [loading, setLoading] = useState(false);

  const [fresherEmail, setFresherEmail] = useState("");
  const [fresherPassword, setFresherPassword] = useState("");
  const [clubEmail, setClubEmail] = useState("");
  const [clubPassword, setClubPassword] = useState("");

  const handleToggle = () => {
    if (isClub) {
      setIsClub(false);
      setLoading(false);
    } else {
      setIsClub(true);
      setLoading(false);
    }
  };
  const clubSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      await clubLoginService(clubEmail, clubPassword);

      notify("Login Successfull", "success");
      navigate(`/club`, { replace: true });
    } catch (error) {
      notify(error.message || "Something went wrong!", "error");
      console.log(error);
    }
  };
  const fresherSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      await fresherLoginService(fresherEmail, fresherPassword);

      notify("Login Successfull", "success");
      navigate(`/fresher`, { replace: true });
    } catch (error) {
      notify(error.message || "Something went wrong!", "error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <Box>
        <div className={classes.heading}>
          <Typography variant="h4" gutterBottom component="h5">
            Login
          </Typography>
        </div>
        <Button
          className={classes.toggle}
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleToggle}
        >
          {isClub ? (
            <div>
              Club <ArrowDropUpSharpIcon />
            </div>
          ) : (
            <div>
              Fresher <ArrowDropDownSharpIcon />
            </div>
          )}
        </Button>
        {isClub ? (
          <form className={classes.form} onSubmit={clubSubmitHandler}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={clubEmail}
              onChange={(e) => setClubEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={clubPassword}
              onChange={(e) => setClubPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
        ) : (
          <form className={classes.form} onSubmit={fresherSubmitHandler}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              value={fresherEmail}
              onChange={(e) => setFresherEmail(e.target.value)}
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={fresherPassword}
              onChange={(e) => setFresherPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
        )}
      </Box>
    </div>
  );
};

export default LoginPage;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(10),
    borderColor: "primary.main",
    border: 1,

    "& .MuiBox-root": {
      height: 400,
      width: "100%",
      maxWidth: 400,
      border: "4px solid black",
    },
    "& .MuiTypography-root": {
      margin: theme.spacing(1),
      fontFamily: "Battambang",
      fontWeight: 700,
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  heading: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  toggle: {
    width: 200,
  },
}));
