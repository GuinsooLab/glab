import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HomeFooterImg from "../../../images/home-footer.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    color: theme.palette.text.primary,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBody: {
    textAlign: "center",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    }
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    paddingTop: theme.spacing(3),
  },
  content: {
    fontSize: 15,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  homeFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  }
}));

const ConfigData = [
  {
    id: 1,
    title: "High Performance",
    content: "Ensure predictable low latency for your most demanding applications.",
  },
  {
    id: 2,
    title: "Mission‑Critical Reliability",
    content: "Ensure that your data is always correct, safe and continuously available.",
  },
  {
    id: 3,
    title: "Cypher & Bolt Compatible",
    content: "Get started in seconds and embrace a rich ecosystem of tools.",
  },
  {
    id: 4,
    title: "Fair & Transparent Pricing",
    content: "Always know what you will pay for with memory-based pricing in the cloud.",
  },
];

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.homeFooter}>
          <img src={HomeFooterImg} alt="home-footer-img"/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {
              ConfigData.map(item => (
                <Grid
                  item
                  xs={3}
                  key={item.id}
                >
                  <div className={classes.cardBody}>
                    <p className={classes.title}>{item.title}</p>
                    <p className={classes.content}>{item.content}</p>
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}