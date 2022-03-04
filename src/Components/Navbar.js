import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar= () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h4" className={classes.logo}>
            Club Recruit
          </Typography>
        </Link>
        <div className={classes.navlinks}>
          <Link to="/signup" className={classes.link}>
            Signup
          </Link>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
