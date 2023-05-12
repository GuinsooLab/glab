import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import EBook from "../../images/platform-ebook.png"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "65vh",
    backgroundColor: "#f2f2f3",
    color: "#000",
  },
  title: {
    fontSize: 46,
    fontWeight: 800,
    marginBottom: theme.spacing(10),
  },
  body: {
    fontSize: 16,
    color: theme.palette.text.primary,
  },
  button: {
    background: "#000000",
    borderRadius: 0,
    color: "#ffffff",
    textTransform: "Capitalize",
    "&:hover": {
      color: "#000",
      backgroundColor: theme.palette.primary.main,
    },
  },
  rightPart: {
    height: "65vh",
    backgroundImage: 'url(' + require('../../images/hero-right.svg') + ')',
    // backgroundImage: 'url(' + require('../../images/gradient-background.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
  },
  glabOverviewImg: {
    height: 280,
    border: '1px solid #ebebeb',
    borderRadius: 4
  },
}));

export default function ActionFeature() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems={"center"} justify={"center"} className={classes.root}>
        <Grid item xs={2} />
        <Grid item xs={6}>
          <p className={classes.title}>Ready to get started?</p>
          <p className={classes.body}>Try the data platform for free.</p>
          <Button
            variant={"contained"}
            disableElevation
            className={classes.button}
            onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}
          >
            Start For Free
          </Button>
        </Grid>
        <Grid item xs={2}>
          <img src={EBook} className={classes.glabOverviewImg} alt="ebook-for-platform" />
        </Grid>
        <Grid item xs={2} className={classes.rightPart} />
      </Grid>
    </div>
  );
}