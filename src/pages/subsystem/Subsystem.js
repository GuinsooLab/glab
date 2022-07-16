import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// styles
import useStyles from "./styles";
import GitHubRepo from "../../images/github-repo.svg";

// global data
import { Tools, Apps } from "../../context/UserContext";

export default function Subsystem() {
  const classes = useStyles();
  let item = {};
  const hash = window.location.hash;

  Tools.concat(Apps).forEach(it => {
    it.apps.forEach(tt => {
      if (tt.href === hash) {
        item = {...tt};
      }
    })
  });

  document.title = item.name + " | GuinsooLab";

  return (
    <div className={classes.root}>
      {/* main */}
      <div className={classes.mainBody}>
        <Grid container className={classes.mainPart}>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paperLeft}>
              <div>
                <img src={item.logo} width={40} alt="logo" />
              </div>
              <div>
                <p className={classes.logoSlogan2} id="slogan">
                  {item.name}
                </p>
              </div>
              <div>
                <Divider className={classes.divider} />
                <p className={classes.logoBody}>
                  {item.desc}
                </p>
              </div>
              <div>
                <Button
                  variant={"outlined"}
                  endIcon={<ArrowRightAltIcon />}
                  className={classes.buttonInfoToMore}
                  onClick={() => window.open(item.doc, "_self")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={7}>
            <div className={classes.pageRight}>
              <img src={item.pic} alt="logo" height={"100%"} />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.githubRepo}>
        <img
          src={GitHubRepo}
          width={24}
          height={24}
          alt="github-repo"
          onClick={() => window.open(item.link, "_blank")}
        />
      </div>
    </div>
  );
}