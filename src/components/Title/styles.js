import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    flexDirection: "column",
  },
  featureTitle: {
    color: "#000000",
    fontWeight: 800,
    fontSize: 38,
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  featureTip: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100vw",
    color: theme.palette.text.secondary,
    fontSize: 18,
    marginBottom: theme.spacing(8)
  },
  tip: {
    width: 600,
  },
}));
