import React from "react";
import Grid from "@material-ui/core/Grid";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

import useStyles from "./styles";

import CustomerImg from "../../images/customer-image.webp";

export default function Customer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={6} className={classes.leftPart}>
              <p className={classes.capital}>Customer success</p>
              <p className={classes.title}>Accelerate time to value</p>
              <p className={classes.content}>Get the most out of MGDC products by partnering with our Customer Success team.</p>
              <p className={classes.content}>At MGDC, we are passionate about our customer's journey to value and success. We provide a best-in-class customer experience, delivered through proactive education, enablement, and proven best-practices.</p>
            </Grid>
            <Grid item xs={6} className={classes.rightPart}>
              <img src={CustomerImg} width={500} alt="customer-img" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.bottomPart}>
            <Grid item xs={5}>
              <Grid container className={classes.bottomContent}>
                <Grid xs={1} />
                <Grid xs={10}>
                  <p>MGDC offers a range of customer success and support options to fit the needs and budget of every business. Our capabilities include:</p>
                </Grid>
                <Grid xs={1} />
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Grid container className={classes.bottomContent}>
                <Grid item xs={3}>
                  <ViewCarouselIcon color={"primary"} />
                  <p>Onboarding</p>
                </Grid>
                <Grid item xs={3}>
                  <SettingsIcon color={"primary"} />
                  <p>Adoption</p>
                </Grid>
                <Grid item xs={3}>
                  <LayersIcon color={"primary"} />
                  <p>Integration</p>
                </Grid>
                <Grid item xs={3}>
                  <TrendingUpIcon color={"primary"} />
                  <p>Scale</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}