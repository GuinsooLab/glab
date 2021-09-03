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
import GLabLogoFooter from "../../images/guinsoo-logo.svg";
import GitHubLogo from "../../images/github.svg";

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Grid container className={classes.footerPos}>
            <Grid item xs={2} className={classes.logo}>
              <img
                src={GLabLogoFooter}
                height={80}
                alt="glab-logo-footer"
              />
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={9} >
              <Grid container>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>GuinsooLab</b>
                  <p className={classes.body2} onClick={() => window.open("https://spotrix.github.io/spotrix-web/", "_target")}>Spotrix&nbsp;<span role={"img"}  aria-label={"img"}>🔥</span></p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>About Us</p>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab/glab/blob/main/LICENSE", "_target")}>License</p>
                  <p className={classes.body2} onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/", "_target")}>Docs</p>
                </Grid>
                <Grid item xs={3} className={classes.footerBody}>
                  <b className={classes.title2}>Community</b>
                  <p className={classes.body2} onClick={() => window.open("https://github.com/GuinsooLab", "_target")}>
                    <img src={GitHubLogo} width={14} alt="github-logo"/>
                    &nbsp;&nbsp;GitHub
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
          <Typography className={classes.copyright}>
            © GuinsooLab. All right reserved. GuinsooLab and GuinsooLab feature logo are trademarks of Guinsoo.
          </Typography>
        </Container>
      </div>
    </>
  );
}