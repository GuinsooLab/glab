import React from "react";

// styles
import useStyles from "./styles";

import Footer from "../../components/Footer";
import ActionFeature from "../../components/Svg/ActionFeature";

// subsystem page feature
import Feature1 from "../home/components/Feature1";
import Feature4 from "../home/components/Feature4";

// global data
const Tools = [];

export default function Subsystem() {
  const classes = useStyles();
  let item = {};

  const hash = window.location.hash;

  Tools.forEach(it => {
    it.apps.forEach(tt => {
      if (tt.link === hash) {
       item = {...tt};
      }
    })
  });

  return (
    <div>
      <Feature1 isSubsystem={true} item={item} />
      <Feature4/>
      <div className={classes.emptyPage}>
        <ActionFeature/>
      </div>
      <Footer/>
    </div>
  );
}