import React from "react";

import useStyles from "./styles";
import CorpFeature from "../../components/Svg/CorpFeature";

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CorpFeature />
    </div>
  );
}