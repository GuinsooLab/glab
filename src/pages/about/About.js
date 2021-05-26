import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";

import useStyles from "./styles";

export default function About() {
  const classes = useStyles();
  let items = [];
  for (let i=0; i<3; i++) {
    items.push({
      id: i,
      name: i,
      intro: i,
    })
  }

  return (
    <div className={classes.root}>
      <p className={classes.title}>xxx</p>
      <Container fixed>
        <Grid container spacing={10}>
          {items.map(it => (
            <Grid item xs={4} key={it.id}>
              <Card variant={"outlined"} className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {it.name.split("")[0]}
                    </Avatar>
                  }
                  title={it.name}
                />
                <CardContent>
                  <p>{it.intro}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <div className={classes.img}>
        xxx
      </div>
    </div>
  );
}