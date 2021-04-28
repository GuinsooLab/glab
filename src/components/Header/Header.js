import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";

// styles
import useStyles from "./styles";

// pictures
import GlibLogo from "../../images/glib-logo.svg";

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      id="attr"
      position="fixed"
      className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={GlibLogo}
          className={classes.logo}
          alt="glib-logo"
          onClick={() => window.open("#/app/home", "_self")}
        />
      </Toolbar>
    </AppBar>
  );
}
