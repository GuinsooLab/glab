import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

// images
import TrixLogo from "../../../images/laptop.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  content: {
    height: "15vh",
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Feature4() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="Tabletrix"
          tip="Aliquam malesuada ligula eget est fringilla blandit. Integer finibus semper libero id sodales."
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={9}>
                <img src={TrixLogo} width={"100%"} alt="comma"/>
              </Grid>
              <Grid item xs={3}>
                <p className={classes.content}>
                  Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
    </div>
  );
}