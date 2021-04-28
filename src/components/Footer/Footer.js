import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "../Wrappers";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";

// styles
import useStyles from "./styles";

// pictures
import GlibLogoFooter from "../../images/glib-logo-footer.svg";
import GitHubLogo from "../../images/github.svg";
import LinkedInLogo from "../../images/linkedin.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container className={classes.footerPos}>
            <Grid item xs={2}>
              <img
                src={GlibLogoFooter}
                className={classes.logo}
                alt="glib-logo-footer"
              />
              <Typography className={classes.logoBody}>
                redefine your data
              </Typography>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={9} >
              <Grid container>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>GLib</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>About Us</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/ciusji", "_target")}>Blog</p>
                  <p className={classes.body2} onClick={() => window.open("https://www.linkedin.com/in/ciusji/", "_target")}>Contact</p>
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>
                    <img src={GitHubLogo} width={14} alt="github-logo"/>
                    &nbsp;&nbsp;GitHub
                  </p>
                  <p className={classes.body2} onClick={() => window.open("https://www.linkedin.com/in/ciusji/", "_target")}>
                    <img src={LinkedInLogo} width={14} alt="linkedin-logo"/>
                    &nbsp;&nbsp;LinkedIn
                  </p>
                </Grid>
                <Grid item xs={5} className={classes.footerBody}>
                  <b className={classes.title2}>Subscribe</b>
                  <p className={classes.body3}>Stay up to date with our latest developments.</p>
                  <InputBase className={classes.input} placeholder={"Enter email address"} />
                  <Button className={classes.button}>Subscribe</Button>
                </Grid>
                <Grid item xs={1} className={classes.footerBody} />
              </Grid>
            </Grid>
          </Grid>
          {/* divider */}
          <Divider className={classes.appDivider} />
          <Grid container className={classes.footerPos2}>
            <Grid item xs={4} />
            <Grid item xs={2} onClick={() => window.open("https://github.com/GuinsooLab/glab/blob/main/LICENSE", "_target")}>Terms of Service</Grid>
            <Grid item xs={2} onClick={() => window.open("https://github.com/GuinsooLab/glab/blob/main/LICENSE", "_target")}>Privacy Policy</Grid>
            <Grid item xs={4} />
          </Grid>
          <Typography className={classes.copyright}>
            © GLib. All right reserved. GLib and GLib feature logo are trademarks of Guinsoo. This is maintained by cius.ji.
          </Typography>
        </Container>
      </div>
    </>
  );
}