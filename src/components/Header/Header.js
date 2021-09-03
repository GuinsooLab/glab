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
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

// styles
import useStyles from "./styles";

// pictures
import GLabLogo from "../../images/logo.svg";
import GLabLogoFooter from "../../images/guinsoo-logo.svg";
import HomeCover from "../../images/home-cover.png";

const Products = [
  {
    name: "Guinsoo Pad",
    link: "https://guinsoolab.github.io/guinsoopad/",
    desc: "A tiny SQL pad",
  },
  {
    name: "Guinsoo DB",
    link: "https://guinsoolab.github.io/guinsoodb/",
    desc: "Simple but fast",
  },
  {
    name: "Guinsoo Graph",
    link: "https://guinsoolab.github.io/guinsoograph/",
    desc: "Graphs for everyone",
  },
  {
    name: "Guinsoo Min",
    link: "https://guinsoolab.github.io/guinsoomin/",
    desc: "High performance object storage",
  },
  {
    name: "Guinsoo Search",
    link: "https://guinsoolab.github.io/guinsoosearch/",
    desc: "Lightning Fast & Ultra Relevant",
  },
];

export default function Header() {
  const classes = useStyles();

  const [appMenu, setAppMenu] = useState(null);

  const handleClearAppMenu = () => {
    setAppMenu(null)
  };

  useEffect(() => {
    appMenu && window.addEventListener('click', handleClearAppMenu);
    return () => window.removeEventListener('click', handleClearAppMenu);
  });

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
        <div className={classes.grow} />
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
            <Grid item xs={4} className={classes.mainTitle}>GUINSOOLAB BI</Grid>
            <Grid item xs={4} className={classes.mainTitle}>GUINSOOLAB PLATFORM</Grid>
            <Grid item xs={3} />
            {/* --- */}
            <Grid item xs={1} />
            <Grid item xs={4}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p
                    className={classes.productTitle}
                    onClick={() => window.open("https://spotrix.github.io/spotrix-web/", "_target")}
                  >
                    Spotrix&nbsp;<span role={"img"}  aria-label={"img"}>🔥</span>
                  </p>
                  <p className={classes.productDesc}>Explore insights for everyone</p>
                </Grid>
                <Grid item xs={12}>
                  <p
                    className={classes.productTitle}
                  >
                    Lux&nbsp;<span role={"img"}  aria-label={"img"}>🔐</span>
                  </p>
                  <p className={classes.productDesc}>Intelligent visual data</p>
                </Grid>
                <Grid item xs={12}>
                  <Button endIcon={<ArrowRightAltIcon />} size={"small"} className={classes.visitButton}>Visit GuinsooLab</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              {Products.map(it => (
                <Grid container spacing={2} key={it.name}>
                  <Grid item xs={12}>
                    <p
                      className={classes.productTitle}
                      onClick={() => window.open(it.link, "_target")}
                    >
                      {it.name}
                    </p>
                    <p className={classes.productDesc}>{it.desc}</p>
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Grid item xs={3} alignItems={"center"} className={classes.gridCover}>
              <div className={classes.gridContent}>
                <img src={HomeCover} width={"100%"} alt="pic"/>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider className={classes.divider}/>
              <img src={GLabLogoFooter} height={50} alt="logo"/>
            </Grid>
          </Grid>
        </Card>
        <p
          className={classes.subTitle}
          onClick={() => window.open("https://ciusji.gitbook.io/guinsoolab/", "_target")}
        >
          Docs
        </p>
        <p
          className={classes.subTitle}
          onClick={() => { window.open("https://ciusji.gitbook.io/guinsooblog/", "_target")}}
        >
          Blog
        </p>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
