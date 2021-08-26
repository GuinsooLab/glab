import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// components
import Title from "../../../components/Title";

// images
import FF1 from "../../../images/ff_1.svg"
import FF2 from "../../../images/ff_2.svg"
import FF3 from "../../../images/ff_3.svg"
import FF4 from "../../../images/ff_4.svg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    backgroundColor: "#f2f2f3",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(5),
  },
  cardBody: {
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
  },
  content: {
    color: theme.palette.text.secondary,
  },
}));

const ConfigData = [
  {
    id: 1,
    logo: FF1,
    title: "High Performance",
    content: "Ensure predictable low latency for your most demanding applications.",
  },
  {
    id: 2,
    logo: FF2,
    title: "Mission‑Critical Reliability",
    content: "Ensure that your data is always correct, safe and continuously available.",
  },
  {
    id: 3,
    logo: FF3,
    title: "Cypher & Bolt Compatible",
    content: "Get started in seconds and embrace a rich ecosystem of tools.",
  },
  {
    id: 4,
    logo: FF4,
    title: "Fair & Transparent Pricing",
    content: "Always know what you will pay for with memory-based pricing in the cloud.",
  },
];

export default function Feature2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Features"
        tip={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus."}
      />
      <Grid container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={3}>
            {
              ConfigData.map(item => (
                <Grid
                  item
                  xs={3}
                  key={item.id}
                >
                  <div className={classes.img}>
                    <img src={item.logo} height={88} alt={item.id} />
                  </div>
                  <div className={classes.cardBody}>
                    <p className={classes.title}>{item.title}</p>
                    <p className={classes.content}>{item.content}</p>
                  </div>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  );
}