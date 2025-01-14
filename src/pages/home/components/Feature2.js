import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Big-data ecosystem
import AirflowLogo from "../../../assets/airflow.svg";
import BigQueryLogo from "../../../assets/bigquery.svg";
import ClickhouseLogo from "../../../assets/clickhouse.svg";
import CubeLogo from "../../../assets/cube.svg";
import DagsterLogo from "../../../assets/dagster.svg";
import DatabricksLogo from "../../../assets/databricks.svg";
import DremioLogo from "../../../assets/dremio.svg";
import DruidLogo from "../../../assets/druid.svg";
import DuckdbLogo from "../../../assets/duckdb.svg";
import ElasticsearchLogo from "../../../assets/elasticsearch.svg";
import HiveLogo from "../../../assets/hive.svg";
import PostgresqlLogo from "../../../assets/postgresql.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary,
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  cardBody: {
    marginTop: theme.spacing(10),
    backgroundColor: "#f1f8ff",
    padding: theme.spacing(2),
    backgroundImage: 'url(' + require('../../../images/lab-platform-overview.png') + ')',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "90%",
    border: "1px solid #f2f2f3",
  },
  cardBody2: {
    height: `calc(35vh - ${theme.spacing(5)}px)`,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(6),
    backgroundImage: 'url(' + require('../../../images/Cover-Image-Water.jpg') + ')',
    backgroundSize: "100%",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(2),
    border: "1px solid #f2f2f3",
    color: "#fff",
  },
  cardBody3: {
    height: `calc(35vh - ${theme.spacing(5)}px)`,
    backgroundImage: 'url(' + require('../../../images/bg-feature-circle.svg') + ')',
    backgroundSize: "80%",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    padding: theme.spacing(2),
    color: "#000",
    border: "1px solid #f2f2f3",
  },
  iconTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  title: {
    fontSize: 28,
    fontWeight: 600,
    paddingTop: theme.spacing(1),
    width: "100%",
    overflow: "hidden",
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "#000000",
  },
  title2: {
    fontSize: 28,
    fontWeight: 600,
    paddingTop: theme.spacing(1),
    width: "100%",
    overflow: "hidden",
    display: "block",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "#fff",
  },
  content: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5),
    width: 400,
    lineHeight: 2,
    fontSize: "16px",
  },
  productFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15vh",
    textAlign: "center"
  },
  contentFooter: {
    height: "70vh",
    marginBottom: theme.spacing(10),
  }
}));

export default function Feature2() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container className={classes.productFooter}>
            <Grid item xs={12}>
              <p className={classes.iconTitle}>POWERED BY PROJECTS IN THE OPENSOURCE</p>
            </Grid>
            <Grid item xs={1}>
              <img src={AirflowLogo} width={"20%"} alt="Airflow-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={BigQueryLogo} width={"20%"} alt="BigQuery-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={ClickhouseLogo} width={"20%"} alt="Clickhouse-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={CubeLogo} width={"20%"} alt="Cube-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={DagsterLogo} width={"20%"} alt="Dagster-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={DatabricksLogo} width={"20%"} alt="Databricks-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={PostgresqlLogo} width={"20%"} alt="Postgresql-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={DremioLogo} width={"20%"} alt="Dremio-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={DruidLogo} width={"20%"} alt="Druid-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={DuckdbLogo} width={"20%"} alt="Duckdb-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={ElasticsearchLogo} width={"20%"} alt="Elasticsearch-logo" />
            </Grid>
            <Grid item xs={1}>
              <img src={HiveLogo} width={"20%"} alt="Hive-logo" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container className={classes.contentFooter}>
            <Grid item xs={6} className={classes.cardBody}>
              <div>
                <p className={classes.title}>High Performance</p>
                <div className={classes.content}>Ensure predictable low latency for your most demanding applications.</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={1} />
                <Grid item xs={11}>
                  <div className={classes.cardBody2}>
                    <p className={classes.title2}>Mission‑Critical Reliability</p>
                    <div className={classes.content}>Ensure that your data is always correct, safe and continuously available.</div>
                  </div>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11}>
                  <div className={classes.cardBody3}>
                    <p className={classes.title}>Cypher & Bolt Compatible</p>
                    <div className={classes.content}>Get started in seconds and embrace a rich ecosystem of tools.</div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}