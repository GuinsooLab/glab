import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

// components
import Title from "../../../components/Title";

// images
import Latest1 from "../../../images/latest_1.jpeg"
import Latest2 from "../../../images/latest_2.jpeg"
import Latest3 from "../../../images/latest_3.jpeg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  card: {
    height: "55vh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardBody: {
    height: "20vh",
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 600
  },
  content: {
    lineHeight: 2,
    color: theme.palette.text.primary,
  },
  date: {
    color: theme.palette.text.disabled,
  }
}));

const ConfigData = [
  {
    id: 1,
    icon: Latest1,
    title: "Customer Loyalty Programs That Stick",
    content: "A story about customer loyalty curabitur sed consectetur nisi. Integer sit amet commodo massa.",
    date: "January 03, 2021 , by Jane Doe"
  },
  {
    id: 2,
    icon: Latest2,
    title: "The Advantages and Disadvantages of Working from Home",
    content: "Work at home parent is an entrepreneur who works from home and integrates parenting into his or her business activities.",
    date: "April 22, 2020 , by Jane Doe"
  },
  {
    id: 3,
    icon: Latest3,
    title: "A Guide To User Journey Mapping",
    content: "Praesent ut cursus enim, sit amet dictum turpis. Etiam justo orci, consectetur aliquet rhoncus sed, hendrerit vel odio.",
    date: "March 27, 2019 , by Jane Doe"
  },
];

export default function Feature5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title
        name="Latest Posts"
        tip=""
      />
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={3}>
            {
              ConfigData.map(item => (
                <Grid
                  item
                  xs={4}
                  key={item.id}
                >
                  <Card className={classes.card}>
                    <div className={classes.img}>
                      <img src={item.icon} height={240} alt={item.id} />
                    </div>
                    <div className={classes.cardBody}>
                      <p className={classes.title}>{item.title}</p>
                      <p className={classes.content}>{item.content}</p>
                    </div>
                    <p className={classes.date}>{item.date}</p>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}