import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { ArrowRightAlt } from "@material-ui/icons";

// styles
import useStyles from "./styles";

// pictures
import GLabLogo from "../../images/logo.svg";
import GLabSolutions from "../../images/gusinsoo-solutions.png";
import GLabOverview from "../../images/platform-ebook.png";

import { Apps, Tools, AppLogo, Security, Monitor } from "../../context/UserContext";


export default function Header() {
  const classes = useStyles();
  const thisYear = new Date().getFullYear()

  const [appMenu, setAppMenu] = useState(null);
  const [solutionMenu, setSolutionMenu] = useState(null);

  const handleClearAppMenu = () => {
    setAppMenu(null)
  };

  const handleClearSolutionMenu = () => {
    setSolutionMenu(null);
  }

  useEffect(() => {
    appMenu && window.addEventListener('click', handleClearAppMenu);
    return () => window.removeEventListener('click', handleClearAppMenu);
  });

  useEffect(() => {
    solutionMenu && window.addEventListener('click', handleClearSolutionMenu);
    return () => window.removeEventListener('click', handleClearSolutionMenu);
  })

  return (
    <AppBar
      id="attr"
      position="fixed"
      elevation={0}
      className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img
          src={GLabLogo}
          className={classes.logo}
          alt="glab-logo"
          onClick={() => window.open("#/app/home", "_self")}
        />
        <p className={classes.titleSpace} />
        <p
          className={classes.subTitle}
          onClick={(event) => setAppMenu(event.currentTarget)}
        >
          Products
          { !Boolean(appMenu) ? <ExpandMoreIcon fontSize={"small"} /> : <ExpandLessIcon fontSize={"small"} />}
        </p>
        <Card
          hidden={!Boolean(appMenu)}
          className={classes.headerMenu}
        >
          <Grid container>
            {/* --- */}
            <Grid item xs={2} />
            <Grid item xs={6}>
              {Tools.map(it => (
                <Grid container alignItems={"center"} key={it.category}>
                  <Grid item xs={3}>
                    <p className={classes.productTitle}>{it.category}</p>
                  </Grid>
                  {it.apps.map(app => (
                    <Grid item xs={3} key={app.name}>
                      {
                        app.state >= 1 ?
                          <p
                            className={classes.toolName}
                            onClick={() => window.open(app.href, "_self")}
                          >
                            <img src={AppLogo[app.name.toLowerCase()]} alt="app-logo" />
                            &nbsp;&nbsp;{app.name}
                            &nbsp;&nbsp; { app.state === 2 ? <span>Beta</span> : <></>}
                          </p> :
                          <p className={classes.toolNameX}>
                            <img src={AppLogo[app.name.toLowerCase()]} alt="app-logo" />
                            &nbsp;&nbsp;{app.name}
                          </p>
                      }
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Divider orientation={"vertical"} />
            </Grid>
            <Grid item xs={3} className={classes.glabOverviewGrid}>
              <img src={GLabOverview} className={classes.glabOverviewImg} alt="guinsoolab-platform-overview" />
            </Grid>
            {/* --- */}
            <Grid item xs={12}>
              <Divider className={classes.divider} />
              <p className={classes.platformTag}>GuinsooLab 2020-{thisYear}</p>
            </Grid>
          </Grid>
        </Card>
        <p
          className={classes.subTitle}
          onClick={(event) => setSolutionMenu(event.currentTarget)}
        >
          Solutions
          { !Boolean(solutionMenu) ? <ExpandMoreIcon fontSize={"small"} /> : <ExpandLessIcon fontSize={"small"} /> }
        </p>
        <Card
          hidden={!Boolean(solutionMenu)}
          className={classes.headerMenu}
        >
          <Grid container>
            {/* --- */}
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={GLabSolutions} className={classes.glabOverviewImg} alt="ebook-for-finance" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation={"vertical"} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2} className={classes.solutionPart}>
                <Grid item xs={5}>
                  <p className={classes.productTitle}>BUSINESS INTELLIGENCE</p>
                  {Apps.map(it => (
                    it.apps.map(app => (
                      <p className={classes.toolName} onClick={() => window.open(app.href, "_target")}>
                        <img src={AppLogo[app.name.toLowerCase()]} alt="app-logo" />
                        &nbsp;&nbsp;{app.name}
                      </p>
                    ))
                  ))}
                </Grid>
                <Grid item xs={5}>
                  <p className={classes.productTitle}>SECURITY & MONITOR</p>
                  {Security.map(it => (
                    it.apps.map(app => (
                      <p className={classes.toolName} onClick={() => window.open(app.href, "_target")}>
                        <img src={AppLogo[app.name.toLowerCase()]} alt="app-logo" />
                        &nbsp;&nbsp;{app.name}
                      </p>
                    ))
                  ))}
                  {Monitor.map(it => (
                    it.apps.map(app => (
                      <p className={classes.toolName} onClick={() => window.open(app.href, "_target")}>
                        <img src={AppLogo[app.name.toLowerCase()]} alt="app-logo" />
                        &nbsp;&nbsp;{app.name}
                      </p>
                    ))
                  ))}
                </Grid>
                <Grid item xs={2} />

                <Grid item xs={5}>
                  <p
                    onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-console", "_target")}
                    className={classes.toolName}
                  >
                    VIEW ALL CUSTOMER STORIES
                    <ArrowRightAlt />
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12}>
              <Divider className={classes.divider} />
              <p className={classes.platformTag}>GuinsooLab 2020-{thisYear}</p>
            </Grid>
          </Grid>
        </Card>
        <p
          className={classes.subTitle}
          onClick={() => window.open("#/app/customer", "_self")}
        >
          Customer
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("#/app/security", "_self")}
        >
          Security
        </p>
        <div className={classes.grow} />

        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/", "_blank")}
        >
          Resources
        </p>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}
        >
          Support
        </p>
        <Button
          variant={"outlined"}
          className={classes.visitButton}
          onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/platform-documentation", "_blank")}
        >
          Start For Free
        </Button>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
