import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { notify } from "../../Utils/notify";
import {
  RegisterService,
  verifyOTPService,
} from "../../Services/fresher.service";

import formbackgroundimage from "../../Assets/blue blackground.jpg";

import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import "@fontsource/open-sans";

const SignupPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [OTP, setOTP] = useState("");

  const handleSendOTP = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await RegisterService(email, password, name);

      notify("OTP sent to mail!", "success");
      setIsOTPSent(true);
    } catch (error) {
      notify(error.message || "Something went wrong!", "error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      await verifyOTPService(email, OTP);

      notify("Successfully registered!", "success");

      navigate(`/login`, { replace: true });
    } catch (error) {
      notify(error.message || "Something went wrong!", "error");
      console.log(error);
    }
  };
  return (
    <div className={`${classes.root} ${classes.formbackground}`} >
      <Box>
        <div className={classes.heading}>
          <Typography variant="h4" gutterBottom component="h5">
            Register
          </Typography>
        </div>
        {isOTPSent ? (
          <>
            <form className={classes.form} onSubmit={handleRegister}>
              <TextField
                label="OTP"
                variant="outlined"
                required
                value={OTP}
                onChange={(e) => setOTP(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                {loading ? "Loading..." : "Signup"}
              </Button>
            </form>
          </>
        ) : (
          <>
            <form className={classes.form} onSubmit={handleSendOTP}>
              <TextField
                label="Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="College Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                {loading ? "Loading..." : "Send OTP"}
              </Button>
            </form>
          </>
        )}
      </Box>
    </div>
  );
};
export default SignupPage;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    margin: theme.spacing(10),

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
  formbackground: {
    backgroundImage: `url(${formbackgroundimage})`,
    height: 500,
    // width: 100
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));
