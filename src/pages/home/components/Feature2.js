import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HomeFooterImg from "../../../images/home-footer.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    backgroundColor: "#161616",
    color: theme.palette.text.hint,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(5),
  },
  cardBody: {
    textAlign: "center",
    borderRadius: 4,
    "&:hover": {
      color: "white",
      backgroundColor: "#000000",
    }
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    paddingTop: theme.spacing(10),
  },
  content: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    color: theme.palette.text.hint,
  },
  homeFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10vh",
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
      <Grid container>
        <Grid item xs={12} className={classes.homeFooter}>
          <img src={HomeFooterImg} alt="home-footer-img"/>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={3}>
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
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}