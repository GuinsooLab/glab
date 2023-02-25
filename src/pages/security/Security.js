import React from "react";
import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";

import GuinsooLabSecurity from "../../images/guinsoolab-security.svg";
import Button from "@material-ui/core/Button";

export default function Security() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.bg}>
        <Grid item xs={1} />
        <Grid item xs={10}>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container className={classes.fg}>
        <Grid item xs={12} className={classes.mainPart}>
          <img src={GuinsooLabSecurity} height={"100%"} alt="security" />
        </Grid>
      </Grid>
      <Grid container className={classes.fg}>
        <Grid item xs={12} className={classes.mainPart}>
          <p className={classes.capital}>MorganaToken</p>
          <p className={classes.title}>GuinsooLab Security</p>
          <p className={classes.content}>
            Users authenticate with Morgana rather than individual applications
            <br/>
            Open Source Identity and Access Management
          </p>
          <Button
            color={"primary"}
            disableElevation
            variant={"contained"}
            onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-security", "_blank")}
            style={{textTransform: "Capitalize", fontWeight: "bold"}}
          >
            Start For Free
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}