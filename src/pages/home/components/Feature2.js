import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SpotrixBlackLogo from "../../../assets/spotrix-black.svg";
import IreliaBlackLogo from "../../../assets/irelia-black.svg";
import ElixirNoteBlackLogo from "../../../assets/elixirnote-black.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f2f2f3",
    color: theme.palette.text.primary,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  cardBody: {
    textAlign: "center",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.primary.main,
    }
  },
  iconTitle: {
    fontSize: 18,
    fontWeight: 500,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
    paddingTop: theme.spacing(5),
    width: "100%",
    overflow: "hidden",
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  content: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    lineHeight: 2,
    fontSize: "16px",
  },
  homeFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh",
    textAlign: "center"
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
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.homeFooter}>
            <Grid item xs={12}>
              <p className={classes.iconTitle}>TRUSTED BY APPS IN THE INDUSTRY</p>
            </Grid>
            <Grid item xs={3}>
              <img src={SpotrixBlackLogo} width={"30%"} alt="spotrix-logo" />
            </Grid>
            <Grid item xs={3}>
              <img src={IreliaBlackLogo} width={"30%"} alt="irelia-logo" />
            </Grid>
            <Grid item xs={3}>
              <img src={ElixirNoteBlackLogo} width={"40%"} alt="elixirnote-logo" />
            </Grid>
            <Grid item xs={3}>
              <p className={classes.iconTitle}>...</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={1}>
            {
              ConfigData.map(item => (
                <Grid
                  item
                  xs={3}
                  key={item.id}
                  className={classes.cardBody}
                >
                  <div>
                    <p className={classes.title}>{item.title}</p>
                    <div className={classes.content}>{item.content}</div>
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