import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

// styles
import useStyles from "./styles";

// pictures
import GLabLogoFooter from "../../images/guinsoolab-footer.svg";
import GLabBadge from "../../images/_badge.png";

import { Apps, Tools, AppLogo } from "../../context/UserContext";

export default function Footer() {
  const classes = useStyles();
  let platformToolsets = [];
  let biProducts = [];
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
              <img src={GLabBadge} height={60} alt="badge" />
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
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body22} onClick={() => window.open("https://github.com/GuinsooLab", "_blank")}>
                    <GitHubIcon />&nbsp;&nbsp;GitHub
                  </p>
                  <p className={classes.body22} onClick={() => window.open("https://www.linkedin.com/in/guinsoolab100/", "_blank")}>
                    <LinkedInIcon />&nbsp;&nbsp;LinkedIn
                  </p>
                  <p className={classes.body22}>
                    <FacebookIcon />&nbsp;&nbsp;Facebook
                  </p>
                  <p className={classes.body22}>
                    <TwitterIcon />&nbsp;&nbsp;Twitter
                  </p>
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>About</b>
                  <p className={classes.body2}>About GuinsooLab</p>
                  <p className={classes.body2}>Careers</p>
                  <p className={classes.body2}>Contact</p>
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