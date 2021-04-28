import React from "react";

import useStyles from "./styles";

export default function Title(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.featureTitle}>
        {props.name}
      </p>
      <div className={classes.featureTip}>
        <p className={classes.tip}>
          {props.tip}
        </p>
        </div>
    </div>
  );
}