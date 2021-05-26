import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

// styles
import useStyles from "./styles";

// pictures
import GLabLogo from "../../images/glab-logo.svg";
import Menu from "@material-ui/core/Menu";

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
          aria-controls="app-menu"
          aria-haspopup="true"
          onClick={(event) => setAppMenu(event.currentTarget)}
        >
          Products
        </p>
        <Menu
          open={Boolean(appMenu)}
          anchorEl={appMenu}
          onClose={() => setAppMenu(null)}
          className={classes.headerMenu}
        >
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
        </Menu>
        <p
          className={classes.subTitle}
        >
          Blog
        </p>
        <p
          className={classes.subTitle}
        >
        </p>
        <div className={classes.gap} />
      </Toolbar>
    </AppBar>
  );
}
