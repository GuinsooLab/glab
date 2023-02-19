import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import EBook from "../../images/platform-ebook.png"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "45vh",
    backgroundColor: "#f2f2f3",
    color: theme.palette.text.primary,
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
    color: "#000000",
    borderRadius: 0,
    textTransform: "Capitalize",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#000000",
    },
  },
  rightPart: {
    height: "45vh",
    backgroundImage: 'url(' + require('../../images/hero-right.svg') + ')',
    backgroundRepeat: "no-repeat",
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
        <Grid item xs={3} />
        <Grid item xs={5}>
          <p className={classes.title}>Ready to get started?</p>
          <p className={classes.body}>Try the data platform for free.</p>
          <Button
            variant={"outlined"}
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