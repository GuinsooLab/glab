import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100vw",
    height: "85vh",
    backgroundColor: "#000000",
  },
  mainPart: {
    height: "100%",
    width: "100%",
  },
  paperLeft: {
    height: "85vh",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
  },
  pageRight: {
    height: "85vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundImage: 'url(' + require('../../../images/main-ground.svg') + ')',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  smallLogo: {
    height: 23,
  },
  logoSlogan: {
    fontSize: 64,
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
    color: "#ffffff",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 40,
  },
  logoBody: {
    fontSize: 18,
    fontWeight: 500,
    color: theme.palette.text.hint,
  },
  logoBody2: {
    fontSize: 18,
    fontWeight: 500,
    color: theme.palette.text.hint,
  },
  buttonInfoToMore: {
    fontSize: 16,
    marginTop: theme.spacing(5),
    borderColor: theme.palette.text.hint,
    color: theme.palette.text.hint,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 4,
    "&:hover": {
      color: "white",
      borderColor: "white",
    },
    textTransform: "Capitalize",
  },
  mainTitle: {
    display: "flex",
    color: theme.palette.text.primary,
    justifyContent: "center",
  },
}));

export default function Feature1() {
  const classes = useStyles();

  const defaultSystemName = "GuinsooLab";

  const sloganBody1 = "One Platform"
  const sloganBody2 = "Limitless Possibilities"

  return (
    <div className={classes.root}>
      <Grid container className={classes.mainPart}>
        <Grid item xs={2} md={2}>
        </Grid>
        <Grid item xs={3} md={4}>
          <div className={classes.paperLeft}>
            <div>
              <p className={classes.logoSlogan} id="slogan">
                {defaultSystemName}
              </p>
            </div>
            <div>
              <Divider className={classes.divider} />
              <p className={classes.logoBody}>
                {sloganBody1}
              </p>
              <p className={classes.logoBody2}>
                {sloganBody2}
              </p>
            </div>
            <div>
              <Button
                variant={"outlined"}
                className={classes.buttonInfoToMore}
                onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={7} md={6}>
          <div className={classes.pageRight}>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}