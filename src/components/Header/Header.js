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
import GLabFinance from "../../images/gusinsoo-finance.png";
import GLabSecurity from "../../images/gusinsoo-security.png";

import { Apps, Tools, AppLogo } from "../../context/UserContext";


export default function Header() {
  const classes = useStyles();

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
            <Grid item xs={1} />
            <Grid item xs={2} className={classes.mainTitle}>BI Products</Grid>
            <Grid item xs={1} />
            <Grid item xs={7} className={classes.mainTitle}>Platform Toolsets</Grid>
            <Grid item xs={1} />
            {/* --- */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              {Apps.map(tt => (
                <Grid container spacing={2}>
                  {tt.apps.map(mm => (
                    <Grid item xs={12} key={mm.name}>
                      <p
                        className={classes.productTitle}
                        onClick={() => window.open(mm.href, "_blank")}
                      >
                        <img src={AppLogo[mm.name.toLowerCase()]} alt="app-logo" />
                        &nbsp;&nbsp;{mm.name}
                      </p>
                      <p className={classes.productDesc}>{mm.desc}</p>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
            <Grid item xs={1}>
              <Divider orientation={"vertical"} />
            </Grid>
            <Grid item xs={5}>
              {Tools.map(it => (
                <Grid container alignItems={"center"} spacing={2} key={it.category}>
                  <Grid item xs={2}>
                    <p className={classes.productTitle}>{it.category}</p>
                  </Grid>
                  {it.apps.map(app => (
                    <Grid item xs={2} key={app.name}>
                      {
                        app.state >= 1 ?
                          <p
                            className={classes.toolName}
                            onClick={() => window.open(app.href, "_blank")}
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
            <Grid item xs={2}>
              <img src={GLabSecurity} height={260} alt="ebook-for-security" />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12}>
              <Divider className={classes.divider} />
              <p className={classes.platformTag}>GuinsooLab 2020-2022</p>
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
            <Grid item xs={1} />
            <Grid item xs={2} className={classes.mainTitle} />
            <Grid item xs={1} />
            <Grid item xs={7} className={classes.mainTitle}>Solutions</Grid>
            <Grid item xs={1} />
            {/* --- */}
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img src={GLabFinance} height={260} alt="ebook-for-finance" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation={"vertical"} />
            </Grid>
            <Grid item xs={7}>
              <Grid container className={classes.solutionPart}>
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Private Market Intelligence</p>
                  <span className={classes.solutionDetail}>
                    Gain actionable insight on the flow of capital across VC, PE and M&A
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Fundraising</p>
                  <span className={classes.solutionDetail}>
                    Raise a fund efficiently with data-informed peer groups, benchmarks and investors
                  </span>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Deal Sourcing</p>
                  <span className={classes.solutionDetail}>
                    Discover companies that are a strategic fit, seeking funding or primed for acquisition
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Due Diligence</p>
                  <span className={classes.solutionDetail}>
                    Create the perfect pitch using valuable intel on companies, funds and financial sponsors
                  </span>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Business Development</p>
                  <span className={classes.solutionDetail}>
                    Grow your business by targeting opportunities within the private and public markets
                  </span>
                </Grid>
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Networking</p>
                  <span className={classes.solutionDetail}>
                    See how 1.9 million pros operate across the industry and grow your connections
                  </span>
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={4}>
                  <p className={classes.solutionName}>Deal Execution</p>
                  <span className={classes.solutionDetail}>
                    Build data-backed comps, buyer and investor lists with technology designed to save time
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.solutionButton}
                    variant={"text"}
                    endIcon={<ArrowRightAlt />}
                    onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/solutions/guinsoolab-finance", "_blank")}
                  >
                    View all customer stories
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={12}>
              <Divider className={classes.divider} />
              <p className={classes.platformTag}>GuinsooLab 2020-2022</p>
            </Grid>
          </Grid>
        </Card>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/appendix/events", "_blank")}
        >
          Events
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
          onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/appendix/support", "_blank")}
        >
          Support
        </p>
        <Button
          variant={"outlined"}
          className={classes.visitButton}
        >
          Start For Free
        </Button>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
