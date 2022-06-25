import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

import DataFlowDiagram from "../../../images/gdp-new.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
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
  holoCover: {
    backgroundColor: "#161616",
    padding: theme.spacing(5),
  },
  dataFlow: {
    height: "80vh",
    cursor: "pointer",
    padding: theme.spacing(2),
  }
}));

export default function Feature4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="GuinsooLab Data Platform"
        tip="Free & Open & Safe"
      />
      <Grid container className={classes.holoCover}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12} className={classes.dataFlow}>
              <img src={DataFlowDiagram} width={"100%"} alt="data-flow-diagram"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}