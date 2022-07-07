import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

// components
import Title from "../../../components/Title";

// icons
import DiscoveryIcon from "../../../images/toolsets/discovery.svg";
import QueryIcon from "../../../images/toolsets/query.svg";
import StorageIcon from "../../../images/toolsets/storage.svg";
import FlowIcon from "../../../images/toolsets/flow.svg";
import ProcessIcon from "../../../images/toolsets/process.svg";
import ObserveIcon from "../../../images/toolsets/observe.svg";
import DarksealDarkIcon from "../../../assets/darkseal-dark.jpg";
import WitdbDarkIcon from "../../../assets/witdb-dark.jpg";
import HurricanedbDarkIcon from "../../../assets/hurricanedb-dark.jpg";
import MortalmeshDarkIcon from "../../../assets/mortalmesh-dark.jpg";
import AnnastoreDarkIcon from "../../../assets/annaStore-dark.jpg";
import DuskbladesqlDarkIcon from "../../../assets/duskbladesql-dark.jpg";
import SheenflowDarkIcon from "../../../assets/sheenflow-dark.jpg";
import StealwardDarkIcon from "../../../assets/stealthward-dark.jpg";

const SubSystemsInfo = [
  {
    id: 1,
    title: "Data Discovery",
    longDesc: "Data discovery is a data discovery and metadata engine for improving the productivity of data " +
      "analysts, data scientists and engineers when interacting with data. It does that today by " +
      "indexing data resources ...",
    link: "https://ciusji.gitbook.io/guinsoolab/products/data-discovery",
    icon: DiscoveryIcon,
    subSystemIcons: [DarksealDarkIcon],
  },
  {
    id: 2,
    title: "Query Engine",
    longDesc: "Mixed real-time and ad-hoc database to power modern analytics applications. It's Easy integration " +
      "with your existing data pipelines but fast and consistent queries at high concurrency ...",
    link: "https://ciusji.gitbook.io/guinsoolab/products/query-engine",
    icon: QueryIcon,
    subSystemIcons: [WitdbDarkIcon, HurricanedbDarkIcon],
  },
  {
    id: 3,
    title: "Data Storage",
    longDesc: "Data Storage offers high-performance, S3 compatible object storage. Native to Kubernetes, also is the " +
      "only object storage suite available on every public cloud, every Kubernetes distribution, the private cloud ...",
    link: "https://ciusji.gitbook.io/guinsoolab/products/data-storage",
    icon: StorageIcon,
    subSystemIcons: [MortalmeshDarkIcon, AnnastoreDarkIcon],
  },
  {
    id: 4,
    title: "Process Engine",
    longDesc: "Includes a cost-based optimizer, columnar storage and code generation to make queries fast. At the same " +
      "time, it scales to thousands of nodes and multi hour queries using the process engine, which provides full " +
      "mid-query fault tolerance... ",
    link: "https://ciusji.gitbook.io/guinsoolab/products/process-engine",
    icon: ProcessIcon,
    subSystemIcons: [DuskbladesqlDarkIcon],
  },
  {
    id: 5,
    title: "Data Flow",
    longDesc: "Scheduler executes your tasks on an array of workers while following the specified dependencies. Rich " +
      "command line utilities make performing complex surgeries on DAGs a snap. The rich user interface makes it easy " +
      "to visualize pipelines ...",
    link: "https://ciusji.gitbook.io/guinsoolab/products/data-flow",
    icon: FlowIcon,
    subSystemIcons: [SheenflowDarkIcon],
  },
  {
    id: 6,
    title: "Data Observability",
    longDesc: "Removes the blind spots in your data pipelines, providing full-stack visibility and AI-powered " +
      "recommendations to drive more reliable performance in your modern data applications, wherever it’s deployed ...",
    link: "https://ciusji.gitbook.io/guinsoolab/products/data-observability",
    icon: ObserveIcon,
    subSystemIcons: [StealwardDarkIcon],
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#ffffff",
  },
  items: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(5),
  },
  featureContainer: {
    marginBottom: theme.spacing(2),
  },
  appLogo: {
    // backgroundColor: theme.palette.secondary.main,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    "& img": {
      width: 32,
    }
  },
  appName: {
    color: theme.palette.text.primary,
    fontSize: 24,
    fontWeight: 600,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(5),
  },
  featureLongDesc: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    lineHeight: 2,
    height: 100,
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
    backgroundColor: "#f2f2f3",
    padding: theme.spacing(1),
    color: theme.palette.text.hint,
  },
  learnMore: {
    marginTop: theme.spacing(2),
    display: "flex",
    paddingLeft: 0,
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textTransform: "Capitalize",
    borderWidth: 2,
    color: theme.palette.primary.main,
    fontWeight: 600,
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
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container className={classes.featureContainer} justify={"flex-start"}>
            {SubSystemsInfo.map(systemInfo => (
              <Grid item xs={6} className={classes.subSystemInfo} key={systemInfo.id}>
                <Grid container className={classes.subSystemCard}>
                  <Grid item xs={3}>
                    <Avatar className={classes.appLogo} src={systemInfo.icon} />
                  </Grid>
                  <Grid item xs={9}>
                    <p className={classes.appName}>
                      {systemInfo.title}
                    </p>
                    <p className={classes.featureLongDesc}>
                      {systemInfo.longDesc}
                    </p>
                    <AvatarGroup max={5}>
                      {systemInfo.subSystemIcons.map(subIcon => (
                        <Avatar alt="sub-system-icon" style={{ borderColor: "#FFFFFF", width: "36px", height: "36px", marginTop: "8px" }} src={subIcon} />
                      ))}
                    </AvatarGroup>
                    <Button
                      endIcon={<ArrowRightAltIcon />}
                      className={classes.learnMore}
                      onClick={() => window.open(systemInfo.link, "_blank")}
                    >
                      Explore {systemInfo.title}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}