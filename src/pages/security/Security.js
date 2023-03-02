import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

import GuinsooLabSecurity from "../../images/guinsoolab-security.svg";

export default function Security() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.fg}>
        <Grid item xs={6} />
        <Grid item xs={6} className={classes.rightPart}>
          <img src={GuinsooLabSecurity} height={"80%"} alt="security" />
        </Grid>
      </Grid>
      <Grid container className={classes.fg}>
        <Grid item xs={1} />
        <Grid item xs={6} className={classes.leftPart}>
          <p className={classes.capital}>GuinsooLab Security</p>
          <p className={classes.title}>MorganaToken</p>
          <span className={classes.content}>
            Users authenticate with Morgana rather than individual applications.
          </span>
          <span className={classes.content}>
            Open Source Identity and Access Management.
          </span>
          <Button
            color={"primary"}
            disableElevation
            variant={"contained"}
            onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-security", "_blank")}
            style={{textTransform: "Capitalize", fontWeight: "bold", borderRadius: 0, marginTop: 50,}}
          >
            Start For Free
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}