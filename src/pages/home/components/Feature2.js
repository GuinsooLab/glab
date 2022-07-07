import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import SpotrixBlackLogo from "../../../assets/spotrix-black.svg";
import IreliaBlackLogo from "../../../assets/irelia-black.svg";
import ElixirNoteBlackLogo from "../../../assets/elixirnote-black.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  cardBody: {
    marginTop: theme.spacing(10),
    backgroundColor: "#f1f8ff",
    padding: theme.spacing(2),
    backgroundImage: 'url(' + require('../../../images/bg-feature-1.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: 1000,
  },
  cardBody2: {
    height: `calc(35vh - ${theme.spacing(5)}px)`,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6),
    backgroundColor: "#eaebfc",
    padding: theme.spacing(2),
  },
  cardBody3: {
    height: `calc(35vh - ${theme.spacing(5)}px)`,
    backgroundColor: "#3d79ba",
    padding: theme.spacing(2),
    color: "#ffffff",
  },
  iconTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    paddingTop: theme.spacing(1),
    width: "100%",
    overflow: "hidden",
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "#000000",
  },
  title3: {
    fontSize: 28,
    fontWeight: 600,
    paddingTop: theme.spacing(1),
    width: "100%",
    overflow: "hidden",
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "#ffffff",
  },
  content: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    width: 400,
    lineHeight: 2,
    fontSize: "16px",
  },
  productFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh",
    textAlign: "center"
  },
  contentFooter: {
    height: "70vh",
    marginBottom: theme.spacing(10),
  }
}));

export default function Feature2() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.productFooter}>
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
      </Grid>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container className={classes.contentFooter}>
            <Grid item xs={6} className={classes.cardBody}>
              <div>
                <p className={classes.title}>High Performance</p>
                <div className={classes.content}>Ensure predictable low latency for your most demanding applications.</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={1} />
                <Grid item xs={11}>
                  <div className={classes.cardBody2}>
                    <p className={classes.title}>Mission‑Critical Reliability</p>
                    <div className={classes.content}>Ensure that your data is always correct, safe and continuously available.</div>
                  </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11}>
                  <div className={classes.cardBody3}>
                    <p className={classes.title3}>Cypher & Bolt Compatible</p>
                    <div className={classes.content}>Get started in seconds and embrace a rich ecosystem of tools.</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}