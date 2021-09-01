import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import EBook from "../../images/ebook.png"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "35vh",
    backgroundColor: "#262626",
    color: theme.palette.text.hint,
  },
  title: {
    fontSize: 38,
    fontWeight: 800,
    marginBottom: theme.spacing(4),
  },
  body: {
    fontSize: 16,
    color: theme.palette.text.primary,
  },
  button: {
    color: theme.palette.text.hint,
    weight: 600,
    borderColor: theme.palette.text.hint,
    borderRadius: 4,
    textTransform: "Capitalize",
    "&:hover": {
      color: "white",
      borderColor: "white",
    }
  },
  rightPart: {
    height: "35vh",
    backgroundImage: 'url(' + require('../../images/hero-right.svg') + ')',
    backgroundRepeat: "no-repeat",
  }
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems={"center"} justify={"center"} className={classes.root}>
        <Grid item xs={3} />
        <Grid item xs={5}>
          <p className={classes.title}>Ready to get started?</p>
          <p className={classes.body}>Try the GuinsooLab community edition for free.</p>
          <Button
            variant={"outlined"}
            className={classes.button}
            onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>
            Try GuinsooLab for Free
          </Button>
        </Grid>
        <Grid item xs={2}>
          <img src={EBook} height={260} alt="ebook-for-GuinsooLab"/>
        </Grid>
        <Grid item xs={2} className={classes.rightPart} />
      </Grid>
    </div>
  );
}