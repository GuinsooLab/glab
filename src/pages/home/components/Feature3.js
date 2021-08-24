import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

// components
import Title from "../../../components/Title";

// images
import MainFeature1 from "../../../images/feature1.png";
import MainFeature2 from "../../../images/feature2.png";
import MainFeature3 from "../../../images/feature3.png";
import Divider from "@material-ui/core/Divider";

const SubSystemsInfo = [
  {
    id: 1,
    icon: <SearchIcon color={"primary"} fontSize={"large"} />,
    title: "Guinsoo.Pad",
    longDesc: "Web-based SQL editor run in your own private cloud. Supports GuinsooDB, MySQL, Postgres, SQL Server, Vertica, Crate, ClickHouse, Trino, Presto, SAP HANA, Cassandra, Snowflake, BigQuery, SQLite, and more with ODBC.",
    systemPic: MainFeature1,
    link: "https://guinsoolab.github.io/guinsoopad/",
  },
  {
    id: 2,
    icon: <CloudDownloadIcon color={"primary"} fontSize={"large"} />,
    title: "Guinsoo.DB",
    longDesc: "An in-process SQL HTAP Database Management System, which can processing and storing tabular datasets, e.g. from CSV or Parquet files, support interactive data analysis and multiple large tables with current large changes.",
    systemPic: MainFeature2,
    link: "https://guinsoolab.github.io/guinsoodb/",
  },
  {
    id: 3,
    icon: <AssessmentIcon color={"primary"} fontSize={"large"} />,
    title: "Guisooo.Min",
    longDesc: "Min is a High Performance Object Storage released under Apache License v2.0. It is API compatible with Amazon S3 cloud storage service. Use Min to build high performance infrastructure for machine learning, analytics and application data workloads.",
    systemPic: MainFeature3,
    link: "https://guinsoolab.github.io/guinsoomin/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    height: "70vh",
    marginTop: theme.spacing(2),
  },
  appName: {
    color: "black",
    fontSize: 44,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
  featureLongDesc: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  subSystemPic: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "34vw",
      height: "34vw",
      // animation: `$myPic 0.75s`,
    },
  },
  "@keyframes myPic": {
    "0%": {
      width: "0",
    },
    "10%": {
      width: "10%",
    },
    "20%": {
      width: "20%",
    },
    "30%": {
      width: "30%",
    },
    "40%": {
      width: "40%",
    },
    "50%": {
      width: "50%",
    },
    "60%": {
      width: "60%",
    },
    "70%": {
      width: "70%",
    },
    "100%": {
      width: "100%",
    }
  },
  subSystemInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  learnMore: {
    marginTop: theme.spacing(4),
    width: "40%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    fontWeight: 600,
    "&:hover" : {
      fontWeight: 800,
    },
    borderWidth: 2,
  },
  buttonLink: {
    marginTop: theme.spacing(5),
  },
  buttonInfoToSystem: {
    margin: "0px 8px",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 40,
  },
}));

export default function Feature3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Features"
        tip={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus."}
      />
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          {SubSystemsInfo.map(systemInfo => (
            <Grid container
                  spacing={5}
                  key={systemInfo.id}
                  className={classes.featureContainer}
                  id={systemInfo.id}
                  direction={systemInfo.id % 2 === 0 ? "row-reverse" : "row"}
                  justify={"flex-start"}
            >
              <Grid item xs={5} className={classes.subSystemInfo}>
                <p className={classes.appName}>
                  {systemInfo.title}
                </p>
                <Divider className={classes.divider} />
                <p className={classes.featureLongDesc}>
                  {systemInfo.longDesc}
                </p>
                <Button
                  variant="outlined"
                  color={"primary"}
                  endIcon={<ArrowRightAltIcon/>}
                  className={classes.learnMore}
                  onClick={() => window.open(systemInfo.link, "_target")}
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item xs={7} className={classes.subSystemPic}>
                <img src={systemInfo.systemPic} alt="subsystem-pic"/>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}