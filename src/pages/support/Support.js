import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

import useStyles from "./styles";

export default function Support() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.topPart}>
          <p className={classes.capital}>Get the help you need</p>
          <span className={classes.content}>
            Find product docs and guides, community feedback, and learning resources or submit a ticket to our support team for an urgent request.
          </span>
          <TextField
            id="search-word"
            variant="outlined"
            placeholder="Search for a topic or question ..."
            className={classes.textInput}
          />
        </Grid>
      </Grid>
    </div>
  );
}