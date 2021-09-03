import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Divider from "@material-ui/core/Divider";

// components
import Title from "../../../components/Title";

// Icons
import GuinsooPad from "../../../images/GuinsooPad.svg";
import GuinsooDB from "../../../images/GuinsooDB.svg";
import GuinsooSearch from "../../../images/GuinsooSearch.svg";
import GuinsooGraph from "../../../images/GuinsooGraph.svg";
import GuinsooMin from "../../../images/GuinsooMin.svg";
import GuinsooVM from "../../../images/GuinsooVM.svg";

const SubSystemsInfo = [
  {
    id: 1,
    icon: GuinsooPad,
    title: "Guinsoo.Pad",
    longDesc: "A web app for writing and running SQL queries and visualizing the results ...",
    link: "https://guinsoolab.github.io/guinsoopad/",
  },
  {
    id: 2,
    icon: GuinsooDB,
    title: "Guinsoo.DB",
    longDesc: "Only for one-size-fits all database system, not only fast ...",
    link: "https://guinsoolab.github.io/guinsoodb/",
  },
  {
    id: 3,
    icon: GuinsooGraph,
    title: "Guinsooo.Graph",
    longDesc: "a high performance graph store with all the features expected of a mature ...",
    link: "https://github.com/GuinsooLab/guinsoograph/",
  },
  {
    id: 4,
    icon: GuinsooSearch,
    title: "Guinsooo.Search",
    longDesc: "Lightning Fast, Ultra Relevant, and Typo-Tolerant Search Engine ...",
    link: "https://github.com/GuinsooLab/guinsoosearch",
  },
  {
    id: 5,
    icon: GuinsooMin,
    title: "Guinsooo.Min",
    longDesc: "High performance OSS storage platform, it supports the widest range ...",
    link: "https://guinsoolab.github.io/guinsoomin/",
  },
  {
    id: 6,
    icon: GuinsooVM,
    title: "Guinsooo.VM",
    longDesc: "High performance VM platform, can supports Linux, MacOS, Widows ...",
    link: "https://guinsoolab.github.io/guinsoovm/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
    backgroundColor: "#161616",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    marginTop: theme.spacing(2),
  },
  appName: {
    // color: theme.palette.text.hint,
    fontSize: 28,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  featureLongDesc: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    lineHeight: 2,
  },
  subSystemPic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "34vw",
      height: "34vw",
    },
  },
  subSystemInfo: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  subSystemCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    padding: theme.spacing(1),
    height: "30vh",
    borderRadius: 4,
    color: theme.palette.text.hint,
    "&:hover": {
      color: "white",
    }
  },
  learnMore: {
    marginTop: theme.spacing(4),
    display: "flex",
    paddingLeft: 0,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    fontWeight: 600,
    borderWidth: 2,
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
  buttonLink: {
    marginTop: theme.spacing(5),
  },
  buttonInfoToSystem: {
    margin: "0px 8px",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.text.hint,
      color: "white",
    },
  },
  divider: {
    backgroundColor: theme.palette.text.hint,
    height: 2,
    width: 40,
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="GuinsooLab Ecosystem"
        tip={"Better Together, GuinsooLab stack"}
      />
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Grid container className={classes.featureContainer} justify={"flex-start"}>
            {SubSystemsInfo.map(systemInfo => (
              <Grid item xs={6} className={classes.subSystemInfo} key={systemInfo.id}>
                <Grid container className={classes.subSystemCard}>
                  <Grid item xs={4}>
                    <img src={systemInfo.icon} width={40} alt="icon" />
                  </Grid>
                  <Grid item xs={8}>
                    <p className={classes.appName}>
                      {systemInfo.title}
                    </p>
                    <Divider className={classes.divider} />
                    <p className={classes.featureLongDesc}>
                      {systemInfo.longDesc}
                    </p>
                    <Button
                      endIcon={<ArrowRightAltIcon />}
                      className={classes.learnMore}
                      onClick={() => window.open(systemInfo.link, "_target")}
                    >
                      Explore {systemInfo.title}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}