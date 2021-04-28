import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  helpDesc: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontWeight: 400,
    fontSize: 24,
  },
  helpBody: {
    display: "flex",
    justifyContent: "center",
    bottom: 0,
  },
  helpButton: {
    marginTop: "20vh",
    color: "white",
    borderColor: "white",
    fontWeight: 600,
    fontSize: 20,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "white",
    },
    borderRadius: "30px",
    width: "max-content",
  },
  featureTitle: {
    color: "white",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    fontWeight: 600,
    fontSize: 47,
  },
}));

export default function Feature6() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <p className={classes.featureTitle}>帮助手册</p>
        <p className={classes.helpDesc}>
          这是一个运用 Holodata 解决实际生产中的一个例子，请尽量描述清楚。
        </p>
        <div className={classes.helpBody}>
          <Button variant={"outlined"} className={classes.helpButton}>
            国破山河
          </Button>
        </div>
      </div>
    </>
  );
}