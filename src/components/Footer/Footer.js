import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import GitHubIcon from '@material-ui/icons/GitHub';
import RssFeedIcon from '@material-ui/icons/RssFeed';

// styles
import useStyles from "./styles";

// pictures
import GLabLogoFooter from "../../images/guinsoolab-footer.svg";
import GLabBadge from "../../images/guinsoolab_badge.png";

import { Apps, Tools, AppLogo, Monitor, Security } from "../../context/UserContext";

export default function Footer() {
  const classes = useStyles();
  let platformToolsets = [];
  let biProducts = [];
  let monitorApps= [];
  let securityApps = [];
  Tools.forEach(it => {
    it.apps.map(tt => (
      platformToolsets.push({ ...tt })
    ))
  });
  Apps.forEach(it => {
    it.apps.map(tt => (
      biProducts.push({ ...tt })
    ))
  });
  Monitor.forEach(it => {
    it.apps.map(tt => (
      monitorApps.push({ ...tt})
    ))
  });
  Security.forEach(it => {
    it.apps.map(tt => {
      securityApps.push({ ...tt})
    })
  });


  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container className={classes.footerPos}>
            <Grid item xs={2} className={classes.logo}>
              <img
                src={GLabLogoFooter}
                height={37}
                alt="guinsoo-logo-footer"
              />
              <img src={GLabBadge} height={90} alt="badge" />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={9} >
              <Grid container>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>BI Products</b>
                  {biProducts.map(it => (
                    <p key={it.name} className={classes.body2} onClick={() => window.open(it.href, "_blank")}>
                      <img src={AppLogo[it.name.toLowerCase()]} alt="app-logo" />
                      &nbsp;&nbsp;{it.name}
                    </p>
                  ))
                  }
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>Platform Toolsets</b>
                  {platformToolsets.map(it => (
                    <p key={it.name} className={classes.body2} onClick={() => window.open(it.href, "_blank")}>
                      <img src={AppLogo[it.name.toLowerCase()]} alt="app-logo" />
                      &nbsp;&nbsp;{it.name}
                    </p>
                  ))
                  }
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>Security & Monitor</b>
                  {securityApps.map(it => (
                    <p key={it.name} className={classes.body2} onClick={() => window.open(it.href, "_blank")}>
                      <img src={AppLogo[it.name.toLowerCase()]} alt="app-logo" />
                      &nbsp;&nbsp;{it.name}
                    </p>
                  ))
                  }
                  {monitorApps.map(it => (
                    <p key={it.name} className={classes.body2} onClick={() => window.open(it.href, "_blank")}>
                      <img src={AppLogo[it.name.toLowerCase()]} alt="app-logo" />
                      &nbsp;&nbsp;{it.name}
                    </p>
                  ))
                  }
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>About</b>
                  <p className={classes.body2}>About GuinsooLab</p>
                  <p className={classes.body2}>Careers</p>
                  <p className={classes.body2}>Contact</p>
                  <p className={classes.body22} onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>
                    <GitHubIcon />&nbsp;&nbsp;GitHub
                  </p>
                  <p className={classes.body22} onClick={() => window.open("https://ciusji.medium.com", "_blank")}>
                    <RssFeedIcon />&nbsp;&nbsp;Medium
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.footerBody2}>
                    <Grid item xs={3} className={classes.title22}>Subscribe For GuinsooLab</Grid>
                    <Grid item xs={9}>
                      <InputBase fullWidth className={classes.input} placeholder={"Enter email address"} />
                    </Grid>
                    <Grid item xs={12} className={classes.submitButton}>
                      <Button className={classes.button}>Subscribe</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* divider */}
          <Divider className={classes.appDivider} />
          {/* copyright */}
          <Grid container className={classes.copyright}>
            <Grid item xs={12}>
              <p>© GuinsooLab. All right reserved.</p>
            </Grid>
            <Grid item xs={12}>
              <p>GuinsooLab, Guinsoo, and the Guinsoo feather logo are either
                registered trademarks or trademarks of the GuinsooLab.<br/> All other products or name
                brands are trademarks of their respective holders, including the Guinsoolab, and
                Guinsoo resources.
              </p>
            </Grid>
            <Grid item xs={12} className={classes.footerItem}>
              <p>
                <span onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>Security</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>Donate</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>Thanks</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>Events</span>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <span onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>License</span>
              </p>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}