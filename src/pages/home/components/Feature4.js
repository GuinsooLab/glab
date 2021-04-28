import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";

// components
import Title from "../../../components/Title";

// images
import Avatar1 from "../../../images/review1.jpeg"
import Avatar2 from "../../../images/review2.jpeg"
import Avatar3 from "../../../images/review3.jpeg"
import CommaIcon from "../../../images/comma.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(5),
  },
  card: {
    height: "35vh",
    padding: theme.spacing(4)
  },
  content: {
    height: "15vh",
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ConfigData = [
  {
    id: 1,
    icon: Avatar1,
    name: "Eric Widget",
    content: "Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu."
  },
  {
    id: 2,
    icon: Avatar2,
    name: "Parsley Montana",
    content: "Sed laoreet magna commodo libero euismod sodales. Nunc ac libero convallis, interdum ligula vel, pretium diam. Integer commodo sem at dui sollicitudin, vel posuere justo laoreet."
  },
  {
    id: 3,
    icon: Avatar3,
    name: "Jonquil Von",
    content: "Integer consectetur purus neque, ac porttitor enim convallis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus."
  },
];

export default function Feature4() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Title
          name="Testimonials"
          tip="Aliquam malesuada ligula eget est fringilla blandit. Integer finibus semper libero id sodales."
        />
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={3}>
              {
                ConfigData.map(item => (
                  <Grid item xs={4} key={item.id}>
                    <Card className={classes.card}>
                      <img src={CommaIcon} width={16} alt="comma"/>
                      <p className={classes.content}>
                        {item.content}
                      </p>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={3}>
                          <Avatar src={item.icon} className={classes.large} />
                        </Grid>
                        <Grid item xs={9}>
                          <b>{item.name}</b>
                        </Grid>
                      </Grid>
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